/**
 * Gera js/catalogo.js (o catálogo do site) a partir de:
 *   dados/inmetro-pbev-2026-eletricos.json  — elétricos da tabela PBE Veicular do Inmetro
 *   dados/precos-2026-10.jsonl               — preços coletados, um por linha, com fonte
 *   dados/modelos.json                       — cadastro: nome de exibição, carroceria, cor
 *   dados/fotos.json                         — fotos (Wikimedia Commons) e créditos
 *   dados/fichas.json                        — ficha técnica (bateria, potência, recarga...) com fonte
 *
 * Uso: npm run dados
 */
import fs from "node:fs";

const lerJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const inmetro = lerJson("dados/inmetro-pbev-2026-eletricos.json");
const cadastro = lerJson("dados/modelos.json");
const fotos = lerJson("dados/fotos.json").fotos;
const fichas = lerJson("dados/fichas.json").fichas;
const precos = fs.readFileSync("dados/precos-2026-10.jsonl", "utf8")
  .split("\n").filter((l) => l.trim()).map((l) => JSON.parse(l));

// Sites das montadoras: preço tirado daqui é "oficial"; o resto é "imprensa".
const OFICIAIS = ["byd.com", "gwmmotors.com.br", "gacgroup.com", "geelybrasil.com.br",
  "mgmotoroficial.com.br", "chevrolet.com.br", "renault.com.br", "fiat.com.br",
  "volvocars.com", "bmw.com.br", "mini.com.br", "leapmotor.com.br"];

const chaveDe = (marca, modelo) => `${marca.toUpperCase()}|${modelo.toUpperCase()}`;

// Mesmas regras de agrupamento usadas no levantamento.
function chaveInmetro(e) {
  let modelo = e.modelo.toUpperCase();
  if (e.marca === "MG" && modelo === "MG4" && e.versao.toUpperCase().startsWith("URB")) modelo = "MG4 URBAN";
  if (e.marca === "GWM" && modelo === "ORA" && e.versao.trim() === "5") modelo = "ORA 5";
  return chaveDe(e.marca, modelo);
}
function chavePreco(p) {
  if (p.marca === "GWM" && p.modelo === "ORA" && p.versao === "5") return "GWM|ORA 5";
  return chaveDe(p.marca, p.modelo);
}

// As observações da coleta misturam notas internas ("preço 'De'", "conferir") com
// informações úteis ao leitor ("outras versões a partir de..."). Só as úteis vão ao site.
function notaPublica(obs) {
  const internas = /^(preço 'de'.*|a partir de|preço único|à vista|a partir de, à vista|configurador oficial|conferir|preço sugerido, à vista.*|oferta (válida|de) .*)$/i;
  return String(obs || "")
    .split(";")
    .map((t) => t.replace(/\s*—\s*conferir$/i, "").trim())
    .filter((t) => t && !internas.test(t))
    .join("; ");
}

const kwh100 = (mjKm) => Math.round((mjKm * 100 / 3.6) * 10) / 10; // 1 kWh = 3,6 MJ

const porId = new Map();
for (const e of inmetro) {
  if (e.categoria === "Comercial") continue;
  const chave = chaveInmetro(e);
  if (cadastro.fora_de_linha.includes(chave)) continue;
  const c = cadastro.modelos[chave];
  if (!c) { console.warn("Sem cadastro em dados/modelos.json:", chave); continue; }

  const v = porId.get(c.id) || {
    id: c.id, brand: c.marca, model: c.modelo, bodyType: c.carroceria, color: c.cor,
    category: e.categoria, chaves: new Set(), versions: [],
  };
  v.chaves.add(chave);
  const nome = e.versao.trim() || "—";
  if (!v.versions.some((x) => x.name === nome && x.rangeKm === e.autonomia_km)) {
    v.versions.push({ name: nome, rangeKm: e.autonomia_km, kwh100: kwh100(e.mj_km) });
  }
  porId.set(c.id, v);
}

// Ficha técnica em nomes curtos (o arquivo de dados usa nomes em português).
const ficha = (f) => ({
  version: f.versao,
  cv: f.potencia_cv,
  kwh: f.bateria_kwh,
  s0100: f.zero_cem_s,
  dcKw: f.recarga_dc_kw,
  acKw: f.recarga_ac_kw,
  trunkL: f.porta_malas_l,
  note: f.nota || "",
  source: f.fonte,
  sourceExtra: f.fonte_extra || "",
  kind: f.fonte_tipo,
});

const VEHICLES = [...porId.values()].map((v) => {
  const ps = precos.filter((p) => p.preco && v.chaves.has(chavePreco(p)));
  const menor = ps.sort((a, b) => a.preco - b.preco)[0];
  const ranges = v.versions.map((x) => x.rangeKm);
  const { chaves, ...resto } = v;
  return {
    ...resto,
    rangeMin: Math.min(...ranges),
    rangeMax: Math.max(...ranges),
    kwh100: Math.min(...v.versions.map((x) => x.kwh100)),
    price: menor ? menor.preco : null,
    priceVersion: menor ? menor.versao : "",
    priceSource: menor ? menor.fonte : "",
    priceKind: menor ? (OFICIAIS.some((d) => menor.fonte.includes(d)) ? "oficial" : "imprensa") : null,
    priceNote: menor ? notaPublica(menor.obs) : notaPublica((precos.find((p) => !p.preco && v.chaves.has(chavePreco(p))) || {}).obs),
    ...(fotos[v.id] ? { photo: fotos[v.id] } : {}),
    ...(fichas[v.id] ? { specs: ficha(fichas[v.id]) } : {}),
  };
}).sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`, "pt-BR"));

const DATA_INFO = {
  inmetro: {
    titulo: "Tabela PBE Veicular 2026 (18º ciclo)",
    atualizacao: "14/08/2026",
    url: "https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular",
  },
  precos: { coleta: "05/10/2026" },
  fichas: { coleta: "08/10/2026" },
};

const js = `/**
 * ARQUIVO GERADO por scripts/gerar-dados.mjs — não edite à mão.
 * Para mudar o catálogo, edite os arquivos em dados/ e rode: npm run dados
 */
const DATA_INFO = ${JSON.stringify(DATA_INFO, null, 2)};

const VEHICLES = ${JSON.stringify(VEHICLES, null, 2)};
`;
fs.writeFileSync("js/catalogo.js", js);

// sitemap.xml: páginas fixas + uma por modelo.
const SITE = "https://ev-brasil.web.app";
const paginas = ["/", "/veiculos.html", "/encontre.html", "/rankings.html", "/comparar.html",
  "/calculadora.html", "/metodologia.html", ...VEHICLES.map((v) => `/carros/${v.id}.html`)];
const urls = paginas.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
fs.writeFileSync("sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`js/catalogo.js: ${VEHICLES.length} modelos, ` +
  `${VEHICLES.filter((v) => v.priceKind === "oficial").length} com preço oficial, ` +
  `${VEHICLES.filter((v) => v.priceKind === "imprensa").length} da imprensa, ` +
  `${VEHICLES.filter((v) => !v.price).length} sem preço`);
