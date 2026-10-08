/**
 * Gera as imagens de prévia para compartilhar (WhatsApp, redes sociais, Google).
 * -------------------------------------------------
 * assets/og/<id>.jpg — 1200×630, foto do modelo com nome e números principais.
 * assets/og/site.jpg — imagem geral do site (páginas que não são de um modelo).
 * Lê os dados de js/catalogo.js, então rode `npm run dados` antes.
 *
 * Uso: npm run og
 */
import fs from "node:fs";
import vm from "node:vm";
import sharp from "sharp";

const W = 1200, H = 630;
const PASTA = "assets/og";
fs.mkdirSync(PASTA, { recursive: true });

// Carrega VEHICLES do arquivo gerado (é um script de navegador, não um módulo).
const ctx = {};
vm.runInNewContext(fs.readFileSync("js/catalogo.js", "utf8").replace(/const (VEHICLES|DATA_INFO)/g, "this.$1"), ctx);
const VEHICLES = ctx.VEHICLES;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const num = (n, casas = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
const FONTE = "Inter, 'Segoe UI', Arial, sans-serif";

// Texto e moldura por cima da foto: escurece embaixo para o texto ficar legível.
function sobreposicao({ marca, titulo, linhas }) {
  const tamTitulo = titulo.length > 22 ? 64 : 76;
  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a0e17" stop-opacity="0.45"/>
        <stop offset="0.22" stop-color="#0a0e17" stop-opacity="0"/>
        <stop offset="0.6" stop-color="#0a0e17" stop-opacity="0.55"/>
        <stop offset="0.75" stop-color="#0a0e17" stop-opacity="0.88"/>
        <stop offset="1" stop-color="#0a0e17" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect x="56" y="48" width="44" height="44" rx="10" fill="#3b82f6"/>
    <path d="M80 56 L68 74 H78 L74 86 L88 66 H78 Z" fill="#fbbf24"/>
    <text x="114" y="80" font-family="${FONTE}" font-size="30" font-weight="700" fill="#ffffff">EV<tspan fill="#60a5fa">Brasil</tspan></text>
    ${marca ? `<text x="56" y="${H - 168}" font-family="${FONTE}" font-size="26" font-weight="600" letter-spacing="3" fill="#60a5fa">${esc(marca.toUpperCase())}</text>` : ""}
    <text x="56" y="${H - 100}" font-family="${FONTE}" font-size="${tamTitulo}" font-weight="800" fill="#ffffff">${esc(titulo)}</text>
    <text x="56" y="${H - 50}" font-family="${FONTE}" font-size="30" font-weight="500" fill="#cbd5e1">${linhas.map(esc).join("  ·  ")}</text>
  </svg>`);
}

async function fundo(v) {
  if (v && v.photo) {
    return sharp(v.photo.src).resize(W, H, { fit: "cover", position: "attention" });
  }
  // Sem foto: fundo escuro com um brilho na cor do modelo.
  const cor = (v && v.color) || "#3b82f6";
  return sharp(Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="r" cx="0.7" cy="0.35" r="0.7"><stop offset="0" stop-color="${cor}" stop-opacity="0.55"/><stop offset="1" stop-color="#0a0e17"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="#0a0e17"/><rect width="${W}" height="${H}" fill="url(#r)"/></svg>`));
}

async function gerar(arquivo, v, texto) {
  const base = await (await fundo(v)).jpeg().toBuffer();
  await sharp(base).composite([{ input: sobreposicao(texto) }]).jpeg({ quality: 82, mozjpeg: true }).toFile(`${PASTA}/${arquivo}`);
}

const autonomia = (v) => (v.rangeMin === v.rangeMax ? `${v.rangeMax} km` : `${v.rangeMin}–${v.rangeMax} km`);
const so = process.argv[2]; // opcional: gerar só um modelo (id)

for (const v of VEHICLES.filter((x) => !so || x.id === so)) {
  const linhas = [`${autonomia(v)} (Inmetro)`, `${num(v.kwh100, 1)} kWh/100 km`];
  if (v.price) linhas.push(`a partir de R$ ${num(v.price)}`);
  await gerar(`${v.id}.jpg`, v, { marca: v.brand, titulo: v.model, linhas });
}
if (!so) {
  const capa = VEHICLES.find((v) => v.id === "byd-seal");
  await gerar("site.jpg", capa, {
    marca: "Seu próximo carro é elétrico.",
    titulo: "Qual deles?",
    linhas: [`${VEHICLES.length} modelos`, "dados do Inmetro", "preço com fonte"],
  });
}
console.log(`Imagens de prévia em ${PASTA}/`);
