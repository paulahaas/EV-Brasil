/**
 * Gera uma página por modelo: carros/<id>.html
 * -------------------------------------------------
 * A página do modelo é montada por js/veiculo.js no navegador, mas o WhatsApp,
 * as redes sociais e parte dos buscadores não rodam JavaScript. Por isso cada
 * modelo ganha um HTML próprio, a partir de veiculo.html, já com título,
 * descrição, imagem de prévia (assets/og/<id>.jpg), dados estruturados
 * (schema.org) e um resumo em texto. O js/veiculo.js depois monta a página completa.
 *
 * Roda junto com `npm run dados` (depois de scripts/gerar-dados.mjs).
 */
import fs from "node:fs";
import vm from "node:vm";

const SITE = "https://ev-brasil.web.app";
const PASTA = "carros";

const ctx = {};
vm.runInNewContext(fs.readFileSync("js/catalogo.js", "utf8").replace(/const (VEHICLES|DATA_INFO|IPVA)/g, "this.$1"), ctx);
const { VEHICLES } = ctx;

const modelo = fs.readFileSync("veiculo.html", "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const num = (n, casas = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
const reais = (n) => `R$ ${num(n)}`;
const autonomia = (v) => (v.rangeMin === v.rangeMax ? `${v.rangeMax} km` : `${v.rangeMin} a ${v.rangeMax} km`);

fs.rmSync(PASTA, { recursive: true, force: true });
fs.mkdirSync(PASTA);

for (const v of VEHICLES) {
  const nome = `${v.brand} ${v.model}`;
  const url = `${SITE}/${PASTA}/${v.id}.html`;
  const imagem = `${SITE}/assets/og/${v.id}.jpg`;
  const titulo = `${nome}: autonomia, consumo e preço — EV Brasil`;
  const desc = `${nome}: ${autonomia(v)} de autonomia e ${num(v.kwh100, 1)} kWh/100 km pelo Inmetro.` +
    (v.price ? ` A partir de ${reais(v.price)}${v.priceKind === "imprensa" ? " (valor da imprensa)" : ""}.` : " Preço não divulgado.") +
    " Compare com os outros elétricos à venda no Brasil.";

  // Dados estruturados: o carro e o caminho até ele (Início › Carros › modelo).
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Car",
      name: nome,
      brand: { "@type": "Brand", name: v.brand },
      model: v.model,
      bodyType: v.bodyType,
      fuelType: "Electric",
      url,
      image: imagem,
      description: desc,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Carros", item: `${SITE}/veiculos.html` },
        { "@type": "ListItem", position: 3, name: nome, item: url },
      ],
    },
  ];

  const meta = `<title>${esc(titulo)}</title>
  <meta name="description" content="${esc(desc)}">
  <base href="/">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="EV Brasil">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="${esc(nome)}: autonomia, consumo e preço">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${imagem}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(nome)}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>`;

  // Resumo em texto (fica visível até o JavaScript montar a página completa).
  const resumo = `<div class="container">
        <h1>${esc(nome)}</h1>
        <p>${esc(desc)}</p>
      </div>`;

  const html = modelo
    .replace(/<title>[^<]*<\/title>\s*<meta name="description"[^>]*>/, meta)
    .replace("<body>", `<body data-id="${v.id}">`)
    .replace("<!-- Conteúdo injetado por js/veiculo.js -->", resumo);
  if (!html.includes(`data-id="${v.id}"`) || !html.includes('<base href="/">')) throw new Error(`modelo de página mudou: ${v.id}`);
  fs.writeFileSync(`${PASTA}/${v.id}.html`, html);
}
console.log(`${PASTA}/: ${VEHICLES.length} páginas de modelo`);
