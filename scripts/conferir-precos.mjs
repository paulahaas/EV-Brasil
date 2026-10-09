/**
 * Confere os preços do site com os sites oficiais das marcas.
 * -------------------------------------------------
 * Abre cada página de onde veio um preço "oficial" (dados/precos-2026-10.jsonl)
 * no Chrome sem janela (assim carregam também as páginas montadas por JavaScript),
 * lê os valores em R$ e diz, para cada versão:
 *   ok        — o preço que está no site ainda aparece na página da marca
 *   revisar   — o preço não aparece na página: pode ter mudado, ou a página mostra
 *               só parte dos modelos (carrossel). Lista os preços que aparecem.
 *   à mão     — a página não abriu sem janela (algumas marcas bloqueiam); confira no navegador
 * Não altera nenhum dado: só gera o relatório dados/conferencia-precos.md.
 * Preços da imprensa não são conferidos (matérias não mudam depois de publicadas).
 *
 * Uso: npm run precos              (todas as marcas; leva alguns minutos)
 *      npm run precos -- BYD       (só uma marca)
 * Se o Chrome estiver em outro lugar: CHROME="caminho/do/chrome" npm run precos
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";

const CHROME = process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const ARQUIVO = "dados/precos-2026-10.jsonl";
const RELATORIO = "dados/conferencia-precos.md";
const AO_MESMO_TEMPO = 4;
const LIMITE_MS = 45000;
const OFICIAIS = ["byd.com", "gwmmotors.com.br", "gacgroup.com", "geelybrasil.com.br",
  "mgmotoroficial.com.br", "chevrolet.com.br", "renault.com.br", "fiat.com.br",
  "volvocars.com", "bmw.com.br", "mini.com.br", "leapmotor.com.br"];

if (!fs.existsSync(CHROME)) {
  console.error(`Chrome não encontrado em ${CHROME}. Rode com CHROME="caminho do chrome.exe".`);
  process.exit(1);
}

const soMarca = (process.argv[2] || "").toUpperCase();
const precos = fs.readFileSync(ARQUIVO, "utf8").split("\n").filter((l) => l.trim()).map((l) => JSON.parse(l))
  .filter((p) => p.preco && OFICIAIS.some((d) => p.fonte.includes(d)))
  .filter((p) => !soMarca || p.marca.toUpperCase() === soMarca);
const paginas = [...new Set(precos.map((p) => p.fonte))];

const brl = (n) => n.toLocaleString("pt-BR");

// Abre a página no Chrome sem janela e devolve o HTML já montado.
function abrir(url) {
  const perfil = fs.mkdtempSync(path.join(os.tmpdir(), "ev-precos-"));
  return new Promise((resolve) => {
    execFile(CHROME, [
      "--headless=new", "--disable-gpu", "--no-first-run", `--user-data-dir=${perfil}`,
      "--virtual-time-budget=10000", `--timeout=${LIMITE_MS - 5000}`,
      "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36",
      "--dump-dom", url,
    ], { timeout: LIMITE_MS, maxBuffer: 50 * 1024 * 1024, windowsHide: true }, (erro, saida) => {
      fs.rmSync(perfil, { recursive: true, force: true });
      resolve(erro && !saida ? "" : String(saida || ""));
    });
  });
}

// Todos os valores "R$ 123.456" (ou "123.456" perto de "R$") que aparecem no texto.
function valores(html) {
  const texto = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&nbsp;|\u00a0/g, " ").replace(/\s+/g, " ");
  const achados = new Set();
  for (const m of texto.matchAll(/R\$\s*(\d{1,3}(?:\.\d{3})+)(?:,\d{2})?/g)) achados.add(Number(m[1].replace(/\./g, "")));
  return { texto, achados: [...achados].filter((n) => n >= 50000).sort((a, b) => a - b) };
}

// O preço só conta se aparecer perto do nome do modelo: numa página com vários
// carros, o mesmo valor pode ser de outro modelo (ex.: R$ 149.990 do Atto 2
// confundido com o do Dolphin).
const JANELA = 160;
const semAcento = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
function pertoDoModelo(texto, p) {
  const t = semAcento(texto);
  const nome = semAcento(p.modelo);
  const alvo = brl(p.preco);
  for (let i = t.indexOf(alvo); i !== -1; i = t.indexOf(alvo, i + 1)) {
    const antes = t.slice(Math.max(0, i - JANELA), i);
    if (antes.includes(nome)) return true;
  }
  return false;
}

const resultado = new Map();
let feitas = 0;
async function trabalhar(fila) {
  while (fila.length) {
    const url = fila.shift();
    const html = await abrir(url);
    resultado.set(url, html.length > 2000 ? valores(html) : null);
    feitas++;
    process.stdout.write(`\r${feitas}/${paginas.length} páginas conferidas`);
  }
}
const fila = [...paginas];
await Promise.all(Array.from({ length: AO_MESMO_TEMPO }, () => trabalhar(fila)));
console.log("\n");

// Relatório: uma linha por versão com preço.
const linhas = precos.map((p) => {
  const r = resultado.get(p.fonte);
  if (!r) return { p, status: "à mão", agora: "" };
  const presente = pertoDoModelo(r.texto, p);
  return { p, status: presente ? "ok" : "revisar", agora: presente ? "" : r.achados.map((n) => "R$ " + brl(n)).slice(0, 8).join(", ") || "nenhum preço na página" };
});
const conta = (s) => linhas.filter((l) => l.status === s).length;
const hoje = new Date().toLocaleDateString("pt-BR");

const md = [
  `# Conferência de preços — ${hoje}`,
  "",
  `${linhas.length} versões com preço oficial em ${paginas.length} páginas: **${conta("ok")} ok**, **${conta("revisar")} para revisar** (o preço não aparece na página) e **${conta("à mão")} para conferir à mão** (a página não abriu).`,
  "",
  "Para atualizar: corrija `" + ARQUIVO + "` (e a data de coleta em scripts/gerar-dados.mjs), rode `npm run dados` e confira o site.",
  "",
  "| Situação | Marca | Modelo | Versão | No site | Preços na página agora | Fonte |",
  "|---|---|---|---|---|---|---|",
  ...linhas
    .sort((a, b) => ["revisar", "à mão", "ok"].indexOf(a.status) - ["revisar", "à mão", "ok"].indexOf(b.status))
    .map(({ p, status, agora }) => `| ${status} | ${p.marca} | ${p.modelo} | ${p.versao || "—"} | R$ ${brl(p.preco)} | ${agora || "—"} | ${p.fonte} |`),
  "",
].join("\n");
fs.writeFileSync(RELATORIO, md);

for (const { p, status, agora } of linhas.filter((l) => l.status !== "ok")) {
  console.log(`${status.padEnd(9)} ${p.marca} ${p.modelo} ${p.versao || ""} — no site: R$ ${brl(p.preco)}${agora ? ` | na página: ${agora}` : ""}`);
}
console.log(`\n${conta("ok")} ok, ${conta("revisar")} para revisar, ${conta("à mão")} para conferir à mão. Relatório: ${RELATORIO}`);
