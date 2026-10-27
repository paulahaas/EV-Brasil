/**
 * Gera as páginas dos híbridos plug-in: hibridos/<slug>.html
 * -------------------------------------------------
 * Uma lista para cada pesquisa comum ("híbrido plug-in mais barato", "SUV híbrido
 * plug-in até 300 mil"...), com os modelos já escritos no HTML. Mesmo molde das listas de
 * elétricos (scripts/gerar-buscas.mjs). Também gera hibridos/index.html e acrescenta as
 * páginas ao sitemap.xml.
 *
 * Roda junto com `npm run dados` (depois de scripts/gerar-dados.mjs).
 */
import fs from "node:fs";
import { SITE, HIBRIDOS, DATA_INFO, createCard, esc, num, reais, nome, pagina } from "./pagina-estatica.mjs";

const PASTA = "hibridos";
const comPreco = HIBRIDOS.filter((v) => v.price);
const porPreco = (a, b) => (a.price || Infinity) - (b.price || Infinity);
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

const LISTAS = [
  {
    slug: "hibrido-plug-in-mais-barato", h1: "Híbridos plug-in mais baratos do Brasil", curto: "Mais baratos",
    modelos: [...comPreco].sort(porPreco).slice(0, 10),
    intro: (m) => `Os 10 carros híbridos plug-in com o menor preço "a partir de" à venda no Brasil. O mais barato é o ${nome(m[0])}, a partir de ${reais(m[0].price)}; o décimo da lista custa ${reais(m[m.length - 1].price)}.`,
  },
  ...[200000, 300000].map((teto) => ({
    slug: `hibrido-plug-in-ate-${teto / 1000}-mil`, h1: `Híbridos plug-in até R$ ${teto / 1000} mil`, curto: `Até R$ ${teto / 1000} mil`,
    modelos: comPreco.filter((v) => v.price <= teto).sort(porPreco),
    intro: (m) => `${plural(m.length, "híbrido plug-in custa", "híbridos plug-in custam")} até R$ ${teto / 1000} mil no Brasil, do ${nome(m[0])} (${reais(m[0].price)}) ao ${nome(m[m.length - 1])} (${reais(m[m.length - 1].price)}).`,
  })),
  {
    slug: "hibrido-plug-in-maior-autonomia-na-bateria", h1: "Híbridos plug-in que andam mais só na bateria", curto: "Maior autonomia na bateria",
    modelos: [...HIBRIDOS].sort((a, b) => b.rangeMax - a.rangeMax).slice(0, 10),
    intro: (m) => `Os 10 híbridos plug-in com a maior autonomia só na bateria, pela tabela do Inmetro. O ${nome(m[0])} anda até ${m[0].rangeMax} km sem gastar gasolina; o décimo da lista, ${m[m.length - 1].rangeMax} km.`,
  },
  {
    slug: "suv-hibrido-plug-in", h1: "SUVs híbridos plug-in à venda no Brasil", curto: "SUVs",
    modelos: HIBRIDOS.filter((v) => v.bodyType === "SUV").sort(porPreco),
    intro: (m) => `${plural(m.length, "SUV híbrido plug-in à venda", "SUVs híbridos plug-in à venda")} no Brasil, do mais barato ao mais caro. Quem não tem preço divulgado aparece no fim.`,
  },
  {
    slug: "hibrido-plug-in-flex", h1: "Híbridos plug-in flex (etanol) à venda no Brasil", curto: "Flex (etanol)",
    modelos: HIBRIDOS.filter((v) => v.flex).sort(porPreco),
    intro: (m) => `${plural(m.length, "modelo híbrido plug-in tem", "modelos híbridos plug-in têm")} versão flex, que aceita etanol, segundo a tabela do Inmetro: ${m.map(nome).join(", ")}.`,
  },
];

const fontes = `Autonomia na bateria e consumo: Inmetro (${esc(DATA_INFO.inmetro.titulo)}, atualização de ${DATA_INFO.inmetro.atualizacao}). Preços "a partir de" coletados em ${DATA_INFO.precosHibridos.coleta}: nos sites das marcas quando divulgam; senão, valor da imprensa, com aviso em cada modelo. <a class="text-link" href="metodologia.html">Como coletamos os dados</a>.`;
const migalhaBase = `<a href="index.html">Início</a> · <a href="${PASTA}/">Híbridos plug-in</a>`;
const chips = (atual) => LISTAS.filter((l) => l.slug !== atual).map((l) => `<a class="chip" href="${PASTA}/${l.slug}.html">${esc(l.curto)}</a>`).join("\n          ");
const guia = `<p class="fine-print">Em dúvida entre elétrico e híbrido plug-in? Leia o <a class="text-link" href="guia-eletrico-ou-hibrido-plug-in.html">guia: elétrico ou híbrido plug-in</a>.</p>`;

fs.rmSync(PASTA, { recursive: true, force: true });
fs.mkdirSync(PASTA);

for (const l of LISTAS) {
  const m = l.modelos;
  if (!m.length) throw new Error(`lista vazia: ${l.slug}`);
  const url = `${SITE}/${PASTA}/${l.slug}.html`;
  const intro = l.intro(m);
  const desc = `${intro} Compare autonomia na bateria, consumo e preço com dados oficiais.`.slice(0, 300);
  const ld = [
    { "@context": "https://schema.org", "@type": "ItemList", name: l.h1, numberOfItems: m.length,
      itemListElement: m.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: nome(v), url: `${SITE}/carros/${v.id}.html` })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Híbridos plug-in", item: `${SITE}/${PASTA}/` },
      { "@type": "ListItem", position: 3, name: l.h1, item: url } ] },
  ];
  const corpo = `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">${esc(intro)}</p>
        <div class="grid lista-grid">${m.map(createCard).join("")}
        </div>
        <p class="fine-print lista-fontes">${fontes}</p>
        ${guia}
        <p class="lista-acoes"><a class="btn btn-primary" href="veiculos.html?motor=phev">Ver no catálogo</a></p>
        <div data-share-bar="${esc(l.h1)} — EV Brasil"></div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h2 class="lista-outras">Outras listas</h2>
        <div class="filter-group lista-chips">
          ${chips(l.slug)}
          <a class="chip" href="${PASTA}/">Todos os híbridos plug-in</a>
        </div>
      </div>
    </section>`;
  fs.writeFileSync(`${PASTA}/${l.slug}.html`, pagina({
    url, titulo: `${l.h1} (${DATA_INFO.precosHibridos.coleta.slice(3)}) — EV Brasil`, desc, h1: l.h1, eyebrow: "Lista",
    migalha: `${migalhaBase} · <span>${esc(l.h1)}</span>`, corpo, ld,
  }));
}

// Índice: todos os modelos e as listas.
const todos = [...HIBRIDOS].sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`, "pt-BR"));
const descIndex = `${HIBRIDOS.length} carros híbridos plug-in à venda no Brasil, com autonomia só na bateria e consumo do Inmetro e preço com fonte.`;
fs.writeFileSync(`${PASTA}/index.html`, pagina({
  url: `${SITE}/${PASTA}/`, titulo: "Carros híbridos plug-in à venda no Brasil: lista completa — EV Brasil", desc: descIndex,
  h1: "Carros híbridos plug-in à venda no Brasil", eyebrow: "Híbridos plug-in", migalha: `<a href="index.html">Início</a> · <span>Híbridos plug-in</span>`,
  corpo: `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">Híbrido plug-in tem motor a gasolina, bateria e tomada: anda dezenas de quilômetros só na bateria e, depois, segue na gasolina. São ${HIBRIDOS.length} modelos na tabela do Inmetro. Para ver só os 100% elétricos, <a class="text-link" href="veiculos.html">vá ao catálogo de elétricos</a>.</p>
        <div class="filter-group lista-chips">
          ${LISTAS.map((l) => `<a class="chip" href="${PASTA}/${l.slug}.html">${esc(l.h1)} <span class="lista-n">${l.modelos.length}</span></a>`).join("\n          ")}
        </div>
        <div class="grid lista-grid">${todos.map(createCard).join("")}
        </div>
        <p class="fine-print lista-fontes">${fontes}</p>
        ${guia}
      </div>
    </section>`,
  ld: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Carros híbridos plug-in à venda no Brasil", url: `${SITE}/${PASTA}/` },
}));

// Acrescenta as páginas ao sitemap.
const sitemap = fs.readFileSync("sitemap.xml", "utf8").replace(new RegExp(`\\s*<url><loc>${SITE}/${PASTA}/[^<]*</loc></url>`, "g"), "");
const novas = [`/${PASTA}/`, ...LISTAS.map((l) => `/${PASTA}/${l.slug}.html`)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
fs.writeFileSync("sitemap.xml", sitemap.replace("</urlset>", `${novas}\n</urlset>`));
console.log(`${PASTA}/: ${LISTAS.length} listas + índice`);
