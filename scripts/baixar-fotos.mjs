/**
 * Baixa fotos livres dos híbridos plug-in (e de qualquer modelo sem foto) do Wikimedia Commons.
 * -------------------------------------------------
 * Para cada modelo de HIBRIDOS sem foto em dados/fotos.json:
 *   1. procura no Commons (API oficial) arquivos de imagem com o nome do modelo;
 *   2. fica só com licenças livres (CC0, domínio público, CC BY, CC BY-SA), foto horizontal
 *      e grande o bastante, de fora do carro (sem interior, motor, logotipo...);
 *   3. baixa a melhor em 1920 px para assets/carros/<id>.jpg e grava autor, licença e
 *      endereço em dados/fotos.json (as licenças exigem citar o autor: o site mostra);
 *   4. escreve dados/fotos-relatorio.md com o que achou, para conferir se é o carro certo.
 * Modelo sem foto boa no Commons continua com a silhueta, e o relatório avisa.
 *
 * Uso: npm run fotos            (baixa, gera os WebP e atualiza o catálogo)
 *      node scripts/baixar-fotos.mjs --so byd-king     (um modelo só)
 *      node scripts/baixar-fotos.mjs --refazer         (também os que já têm foto)
 * Precisa de internet (o Commons). Revise dados/fotos-relatorio.md antes de publicar.
 */
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://commons.wikimedia.org/w/api.php";
const UA = "EV-Brasil/1.0 (https://ev-brasil.web.app; guia de carros eletricos) node-fetch";
const LIVRES = /^(CC0|Public domain|PD|CC BY(-SA)?( \d\.\d)?( [A-Za-z]{2,3})?)/i;
const RUIM = /interior|dashboard|cockpit|rear\b|back\b|engine|motor\b|logo|badge|emblem|wheel|steering|seat|charging|charger|cutaway|diagram|render|blueprint|screenshot|brochure|drawing|ícone|icon/i;
const BOM = /front|three|3-4|3\/4|side|view|IAA|auto ?show|salon|expo|motor ?show|launch|lan[cç]amento/i;

// Palavras de busca por modelo (o nome no site nem sempre é o que as fotos usam).
const BUSCAS = {
  "byd-atto-2-dmi": ["BYD Atto 2 DM-i", "BYD Sealion 5 DM-i", "BYD Atto 2"],
  "byd-atto-8": ["BYD Sealion 8", "BYD Atto 8"],
  "byd-king": ["BYD King DM-i", "BYD Qin L DM-i", "BYD King"],
  "byd-shark": ["BYD Shark 6", "BYD Shark"],
  "byd-song-plus": ["BYD Song Plus DM-i", "BYD Song Plus"],
  "byd-song-pro": ["BYD Song Pro DM-i", "BYD Song Pro", "BYD Seal U DM-i"],
  "caoa-chery-tiggo-7-pro-phev": ["Chery Tiggo 7 Pro PHEV", "Chery Tiggo 7 Plus PHEV", "Chery Tiggo 7"],
  "caoa-chery-tiggo-8-pro-phev": ["Chery Tiggo 8 Pro PHEV", "Chery Tiggo 8 Pro e+", "Chery Tiggo 8"],
  "jaecoo-7-shs": ["Jaecoo J7 SHS", "Jaecoo 7 SHS", "Jaecoo J7"],
  "omoda-7-phev": ["Omoda 7 SHS", "Omoda C7", "Omoda 7"],
  "geely-ex5-emi": ["Geely Galaxy E5", "Geely EX5 EM-i", "Geely Galaxy Starship 7"],
  "jetour-s06-phev": ["Jetour Shanhai L6", "Jetour S06", "Jetour Shanhai L6 PHEV"],
  "jetour-t1-phev": ["Jetour Shanhai T1", "Jetour T1", "Jetour Traveller T1"],
  "jetour-t2-phev": ["Jetour Shanhai T2", "Jetour T2", "Jetour Traveller T2"],
  "leapmotor-c10-reev": ["Leapmotor C10 REEV", "Leapmotor C10"],
  "gwm-haval-h6-phev": ["Haval H6 PHEV", "Haval H6 third generation"],
  "gwm-haval-h6-gt-phev": ["Haval H6 GT", "Haval H6 GT PHEV", "Haval H6 coupe"],
  "gwm-wey-07-phev": ["Wey 07", "WEY Gaoshan", "Wey Gaoshan PHEV", "Wey 07 PHEV"],
  "gwm-tank-300-phev": ["Tank 300 PHEV", "GWM Tank 300", "Tank 300"],
  "gac-gs9-phev": ["GAC Trumpchi GS8", "GAC GS9", "GAC Trumpchi GS8 PHEV"],
  "denza-b5": ["Denza B5", "BYD Denza B5", "Fangchengbao Tai 3"],
  "lexus-nx-450h-plug-in": ["Lexus NX 450h+", "Lexus NX 450h+ PHEV"],
  "lexus-rx-450h-plug-in": ["Lexus RX 450h+", "Lexus RX 450h+ PHEV"],
  "mitsubishi-outlander-phev": ["Mitsubishi Outlander PHEV", "Outlander PHEV"],
  "volvo-xc60-t8": ["Volvo XC60 T8", "Volvo XC60 Recharge", "Volvo XC60 plug-in hybrid"],
  "volvo-xc90-t8": ["Volvo XC90 T8", "Volvo XC90 Recharge", "Volvo XC90 plug-in hybrid"],
  "land-rover-range-rover-phev": ["Range Rover P440e", "Range Rover P460e", "Range Rover PHEV"],
  "land-rover-range-rover-sport-phev": ["Range Rover Sport P440e", "Range Rover Sport PHEV", "Range Rover Sport P460e"],
  "land-rover-velar-phev": ["Range Rover Velar P400e", "Range Rover Velar PHEV", "Range Rover Velar"],
  "porsche-cayenne-e-hybrid": ["Porsche Cayenne E-Hybrid", "Porsche Cayenne S E-Hybrid"],
  "porsche-panamera-e-hybrid": ["Porsche Panamera 4 E-Hybrid", "Porsche Panamera E-Hybrid"],
};

const limpa = (html) => String(html || "").replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, " ").trim();
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/** Nota de um candidato (maior = melhor); null = descartado. Exportada para teste. */
export function nota(pagina, palavras) {
  const info = (pagina.imageinfo || [])[0];
  if (!info || !/^image\/jpeg$/.test(info.mime || "")) return null;
  const meta = info.extmetadata || {};
  const licenca = limpa((meta.LicenseShortName || {}).value);
  if (!LIVRES.test(licenca)) return null;
  const { width: w, height: h } = info;
  if (!w || !h || w < 1280 || w / h < 1.3 || w / h > 2.3) return null;
  const titulo = pagina.title.replace(/^File:/, "");
  if (RUIM.test(titulo)) return null;
  const t = titulo.toLowerCase();
  // todas as palavras do modelo precisam aparecer no nome do arquivo (evita outro carro)
  if (!palavras.every((p) => t.includes(p))) return null;
  let n = Math.min(w, 4000) / 400;
  if (BOM.test(titulo)) n += 4;
  if (/\(\d+\)|cropped/i.test(titulo)) n -= 1;
  return n;
}

async function buscar(consulta) {
  const url = `${API}?${new URLSearchParams({
    action: "query", format: "json", generator: "search", gsrsearch: `${consulta} filetype:bitmap`, gsrnamespace: "6", gsrlimit: "30",
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1920",
    iiextmetadatafilter: "LicenseShortName|LicenseUrl|Artist|Credit",
  })}`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`Commons respondeu ${r.status}`);
  const j = await r.json();
  return Object.values((j.query && j.query.pages) || {});
}

export async function escolher(id) {
  for (const consulta of BUSCAS[id] || []) {
    const palavras = consulta.toLowerCase().replace(/[^a-z0-9+ -]/g, " ").split(/\s+/).filter((p) => p.length > 1 && !["dm-i", "phev", "e-hybrid"].includes(p));
    const paginas = await buscar(consulta);
    await espera(400);
    const candidatas = paginas.map((p) => ({ p, n: nota(p, palavras) })).filter((x) => x.n !== null).sort((a, b) => b.n - a.n);
    if (candidatas.length) return { consulta, ...candidatas[0] };
  }
  return null;
}

async function main() {
  const arg = (nome) => { const i = process.argv.indexOf(nome); return i >= 0 ? process.argv[i + 1] : null; };
  const so = arg("--so");
  const refazer = process.argv.includes("--refazer");
  const ctx = {};
  vm.runInNewContext(fs.readFileSync("js/catalogo.js", "utf8").replace(/const (VEHICLES|HIBRIDOS|DATA_INFO|IPVA)/g, "this.$1"), ctx);
  const fotosDoc = JSON.parse(fs.readFileSync("dados/fotos.json", "utf8"));
  const alvo = ctx.HIBRIDOS.filter((v) => (!so || v.id === so) && (refazer || !fotosDoc.fotos[v.id]));
  fs.mkdirSync("assets/carros", { recursive: true });
  const relatorio = ["# Fotos dos híbridos plug-in", "", `Gerado por \`npm run fotos\` em ${new Date().toLocaleString("pt-BR")}. Confira se cada foto é mesmo do carro certo (abra o link do arquivo).`, "", "| Modelo | Resultado | Arquivo no Commons | Autor | Licença |", "|---|---|---|---|---|"];
  let ok = 0;
  for (const v of alvo) {
    process.stdout.write(`${v.brand} ${v.model}... `);
    try {
      const achado = await escolher(v.id);
      if (!achado) { console.log("sem foto boa (fica a silhueta)"); relatorio.push(`| ${v.brand} ${v.model} | sem foto livre adequada | — | — | — |`); continue; }
      const info = achado.p.imageinfo[0], meta = info.extmetadata;
      const img = await fetch(info.thumburl || info.url, { headers: { "User-Agent": UA } });
      if (!img.ok) throw new Error(`download ${img.status}`);
      fs.writeFileSync(`assets/carros/${v.id}.jpg`, Buffer.from(await img.arrayBuffer()));
      const licenca = limpa(meta.LicenseShortName.value);
      fotosDoc.fotos[v.id] = {
        src: `assets/carros/${v.id}.jpg`, card: `assets/carros/${v.id}-960.jpg`,
        author: limpa((meta.Artist || {}).value) || "Wikimedia Commons", license: licenca,
        licenseUrl: limpa((meta.LicenseUrl || {}).value) || "https://commons.wikimedia.org/",
        page: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(achado.p.title.replace(/ /g, "_"))}`,
      };
      relatorio.push(`| ${v.brand} ${v.model} | baixada (busca: ${achado.consulta}) | [${achado.p.title.replace(/^File:/, "")}](${fotosDoc.fotos[v.id].page}) | ${fotosDoc.fotos[v.id].author} | ${licenca} |`);
      ok++; console.log("ok");
    } catch (e) { console.log("erro:", e.message); relatorio.push(`| ${v.brand} ${v.model} | erro: ${e.message} | — | — | — |`); }
    await espera(600);
  }
  fs.writeFileSync("dados/fotos.json", JSON.stringify(fotosDoc, null, 1) + "\n");
  fs.writeFileSync("dados/fotos-relatorio.md", relatorio.join("\n") + "\n");
  console.log(`\n${ok} de ${alvo.length} fotos baixadas. Relatório em dados/fotos-relatorio.md`);
}

// Roda só quando chamado direto (não quando importado para teste); funciona no Windows também.
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) await main();
