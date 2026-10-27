/**
 * Gera as páginas de comparação pronta: comparacoes/<a>-x-<b>.html (+ índice)
 * -------------------------------------------------
 * Lê os duelos de dados/comparacoes.json. Cada página mostra os dois modelos lado a lado
 * (números do Inmetro, preço com fonte, segurança, garantia), sem dizer qual é "melhor":
 * o site é neutro, só mostra as diferenças em números. Roda com `npm run dados`.
 */
import fs from "node:fs";
import { SITE, VEHICLES, HIBRIDOS, DATA_INFO, createCard, esc, num, reais, nome, pagina } from "./pagina-estatica.mjs";

const PASTA = "comparacoes";
const TARIFA = 0.95;
const todos = [...VEHICLES, ...HIBRIDOS];
const porId = (id) => {
  const v = todos.find((x) => x.id === id);
  if (!v) throw new Error(`modelo inexistente em dados/comparacoes.json: ${id}`);
  return v;
};
const phev = (v) => v.powertrain === "phev";
const duelos = JSON.parse(fs.readFileSync("dados/comparacoes.json", "utf8")).duelos.map(([a, b]) => [porId(a), porId(b)]);
const slug = ([a, b]) => `${a.id}-x-${b.id}`;

const falta = (v) => (phev(v) ? "ainda não coletado" : "não divulgado");
const LINHAS = [
  ["Tipo", (v) => (phev(v) ? "Híbrido plug-in" : "100% elétrico")],
  ["Preço a partir de", (v) => (v.price ? reais(v.price) + (v.priceKind === "imprensa" ? " (valor da imprensa)" : "") : "não divulgado")],
  ["Autonomia (Inmetro)", (v) => `${v.rangeMin === v.rangeMax ? v.rangeMax : `${v.rangeMin}–${v.rangeMax}`} km${phev(v) ? " só na bateria" : ""}`],
  ["Consumo na bateria", (v) => `${num(v.kwh100, 1)} kWh/100 km`],
  ["Energia a cada 100 km (em casa, R$ 0,95/kWh)", (v) => `R$ ${num(v.kwh100 * TARIFA, 2)}`],
  ["Consumo na gasolina", (v) => (phev(v) ? `${num(v.gasKmL, 1)} km/l` : "não usa gasolina")],
  ["Carroceria", (v) => v.bodyType],
  ["Segurança (teste de colisão)", (v) => (v.safety ? `${"★".repeat(v.safety.stars)}${"☆".repeat(5 - v.safety.stars)} ${v.safety.program} ${v.safety.year}` : phev(v) ? falta(v) : "não testado")],
  ["Garantia da bateria", (v) => (v.warranty && v.warranty.battery ? v.warranty.battery : falta(v))],
];

function diferencas(a, b) {
  const f = [];
  if (a.price && b.price && a.price !== b.price) {
    const [menor, maior] = a.price < b.price ? [a, b] : [b, a];
    f.push(`o ${nome(menor)} custa ${reais(maior.price - menor.price)} a menos (a partir de ${reais(menor.price)}, contra ${reais(maior.price)})`);
  }
  if (a.rangeMax !== b.rangeMax) {
    const [m, n] = a.rangeMax > b.rangeMax ? [a, b] : [b, a];
    f.push(`o ${nome(m)} anda mais${phev(m) || phev(n) ? " só na bateria" : ""}: até ${m.rangeMax} km, contra ${n.rangeMax} km do ${nome(n)}`);
  }
  if (phev(a) !== phev(b)) f.push(`um é 100% elétrico e o outro é híbrido plug-in (a autonomia do plug-in é só na bateria; depois ele segue na gasolina)`);
  else if (a.kwh100 !== b.kwh100) {
    const [m, n] = a.kwh100 < b.kwh100 ? [a, b] : [b, a];
    f.push(`o ${nome(m)} gasta menos energia: ${num(m.kwh100, 1)} kWh a cada 100 km, contra ${num(n.kwh100, 1)} do ${nome(n)}`);
  }
  return f;
}

fs.rmSync(PASTA, { recursive: true, force: true });
fs.mkdirSync(PASTA);
const migalhaBase = `<a href="index.html">Início</a> · <a href="${PASTA}/">Comparações</a>`;
const titulo = (d) => `${nome(d[0])} x ${nome(d[1])}`;

for (const d of duelos) {
  const [a, b] = d;
  const url = `${SITE}/${PASTA}/${slug(d)}.html`;
  const dif = diferencas(a, b);
  const intro = `${titulo(d)}: veja lado a lado autonomia, consumo, preço e segurança, com dados oficiais do Inmetro e das marcas.` + (dif.length ? ` Em números, ${dif[0]}.` : "");
  const corpo = `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">${esc(intro)}</p>
        <div class="grid lista-grid">${d.map(createCard).join("")}
        </div>
        <table class="spec-table tco-table">
          <thead><tr><th scope="col"></th><th scope="col">${esc(nome(a))}</th><th scope="col">${esc(nome(b))}</th></tr></thead>
          <tbody>${LINHAS.map(([r, f]) => `<tr><th scope="row">${r}</th><td>${esc(f(a))}</td><td>${esc(f(b))}</td></tr>`).join("")}</tbody>
        </table>
        ${dif.length ? `<h2 class="lista-outras">As diferenças em números</h2><ul class="motivos">${dif.map((x) => `<li>${esc(x.charAt(0).toUpperCase() + x.slice(1))}.</li>`).join("")}</ul>` : ""}
        <p class="fine-print lista-fontes">Não dizemos qual é melhor: depende do seu uso, do seu orçamento e de onde você carrega. Autonomia e consumo: Inmetro (${esc(DATA_INFO.inmetro.titulo)}, atualização de ${DATA_INFO.inmetro.atualizacao}). Preços "a partir de" coletados em ${DATA_INFO.precos.coleta} (plug-ins: ${DATA_INFO.precosHibridos.coleta}). Veja <a class="text-link" href="metodologia.html">de onde vêm os dados</a>.</p>
        <p class="lista-acoes">
          <a class="btn btn-primary" href="comparar.html?ids=${a.id},${b.id}">Comparar em detalhes</a>
          <a class="btn btn-ghost" href="calculadora.html?modelo=${a.id}">Calcular minha economia</a>
        </p>
        <div data-share-bar="${esc(titulo(d))} — EV Brasil"></div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h2 class="lista-outras">Outras comparações</h2>
        <div class="filter-group lista-chips">
          ${duelos.filter((x) => slug(x) !== slug(d)).map((x) => `<a class="chip" href="${PASTA}/${slug(x)}.html">${esc(titulo(x))}</a>`).join("\n          ")}
        </div>
      </div>
    </section>`;
  fs.writeFileSync(`${PASTA}/${slug(d)}.html`, pagina({
    url, titulo: `${titulo(d)}: comparação com dados oficiais — EV Brasil`, desc: intro.slice(0, 300), h1: `${titulo(d)}: qual a diferença?`, eyebrow: "Comparação",
    migalha: `${migalhaBase} · <span>${esc(titulo(d))}</span>`, corpo, ativo: "comparar",
    ld: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Comparações", item: `${SITE}/${PASTA}/` },
      { "@type": "ListItem", position: 3, name: titulo(d), item: url } ] },
  }));
}

fs.writeFileSync(`${PASTA}/index.html`, pagina({
  url: `${SITE}/${PASTA}/`, titulo: "Comparações prontas de carros elétricos e híbridos plug-in — EV Brasil",
  desc: "Duelos lado a lado dos modelos mais procurados: autonomia, consumo, preço e segurança, com dados oficiais.",
  h1: "Comparações prontas", eyebrow: "Comparar", migalha: `<a href="index.html">Início</a> · <span>Comparações</span>`, ativo: "comparar",
  corpo: `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">Os duelos mais procurados, lado a lado e sem favorito. Quer comparar outros modelos? Use o <a class="text-link" href="comparar.html">comparador</a>.</p>
        <div class="filter-group lista-chips">
          ${duelos.map((x) => `<a class="chip" href="${PASTA}/${slug(x)}.html">${esc(titulo(x))}</a>`).join("\n          ")}
        </div>
      </div>
    </section>`,
  ld: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Comparações prontas", url: `${SITE}/${PASTA}/` },
}));

const sitemap = fs.readFileSync("sitemap.xml", "utf8").replace(new RegExp(`\\s*<url><loc>${SITE}/${PASTA}/[^<]*</loc></url>`, "g"), "");
const novas = [`/${PASTA}/`, ...duelos.map((d) => `/${PASTA}/${slug(d)}.html`)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
fs.writeFileSync("sitemap.xml", sitemap.replace("</urlset>", `${novas}\n</urlset>`));
console.log(`${PASTA}/: ${duelos.length} comparações + índice`);
