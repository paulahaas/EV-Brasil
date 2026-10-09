/**
 * Gera as páginas de busca: eletricos/<slug>.html
 * -------------------------------------------------
 * Uma página para cada pesquisa comum no Google ("carro elétrico até 150 mil",
 * "SUV elétrico", "carros elétricos da BYD"...), com a lista de modelos já
 * escrita no HTML: o buscador lê a página sem precisar rodar JavaScript.
 * Os cartões são os mesmos do catálogo (createCard, de js/main.js).
 * Também gera eletricos/index.html (todas as listas) e acrescenta as páginas
 * ao sitemap.xml.
 *
 * Roda junto com `npm run dados` (depois de scripts/gerar-dados.mjs).
 */
import fs from "node:fs";
import vm from "node:vm";

const SITE = "https://ev-brasil.web.app";
const PASTA = "eletricos";

// Carrega os dados e as funções do site (createCard, priceText...) como no navegador.
const ctx = { console };
vm.createContext(ctx);
for (const f of ["js/catalogo.js", "js/data.js", "js/car-svg.js", "js/main.js"]) {
  const codigo = fs.readFileSync(f, "utf8").replace(/^(const|let) (\w+) =/gm, "var $2 =");
  vm.runInContext(codigo, ctx, { filename: f });
}
const { VEHICLES, DATA_INFO, createCard } = ctx;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const num = (n, casas = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
const reais = (n) => `R$ ${num(n)}`; // espaço que não quebra: "R$" nunca fica sozinho no fim da linha
const nome = (v) => `${v.brand} ${v.model}`;
const comPreco = VEHICLES.filter((v) => v.price);
const porPreco = (a, b) => (a.price || Infinity) - (b.price || Infinity);
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

// ---------- As listas ----------
const LISTAS = [];

LISTAS.push({
  slug: "carro-eletrico-mais-barato",
  h1: "Carros elétricos mais baratos do Brasil",
  curto: "Mais baratos",
  modelos: [...comPreco].sort(porPreco).slice(0, 10),
  intro: (m) => `Os 10 carros 100% elétricos com o menor preço de tabela à venda no Brasil. O mais barato é o ${nome(m[0])}, a partir de ${reais(m[0].price)}; o décimo da lista custa ${reais(m[m.length - 1].price)}.`,
  catalogo: "veiculos.html",
});

for (const teto of [150000, 200000, 300000]) {
  const mil = teto / 1000;
  LISTAS.push({
    slug: `carro-eletrico-ate-${mil}-mil`,
    h1: `Carros elétricos até R$ ${mil} mil`,
    curto: `Até R$ ${mil} mil`,
    modelos: comPreco.filter((v) => v.price <= teto).sort(porPreco),
    intro: (m) => {
      const longe = [...m].sort((a, b) => b.rangeMin - a.rangeMin)[0];
      return `Hoje ${plural(m.length, "carro 100% elétrico custa", "carros 100% elétricos custam")} até R$ ${mil} mil no Brasil, do ${nome(m[0])} (${reais(m[0].price)}) ao ${nome(m[m.length - 1])} (${reais(m[m.length - 1].price)}). Quem roda mais longe na versão de entrada é o ${nome(longe)}, com ${longe.rangeMin} km pelo Inmetro.`;
    },
    catalogo: "veiculos.html",
  });
}

LISTAS.push({
  slug: "carro-eletrico-maior-autonomia",
  h1: "Carros elétricos com maior autonomia",
  curto: "Maior autonomia",
  modelos: [...VEHICLES].sort((a, b) => b.rangeMax - a.rangeMax).slice(0, 10),
  intro: (m) => `Os 10 elétricos que rodam mais com uma carga, pela medição do Inmetro (igual para todas as marcas). O líder é o ${nome(m[0])}, com até ${m[0].rangeMax} km. Na estrada e com ar-condicionado, todos rodam menos que esse número.`,
  catalogo: "rankings.html",
});

LISTAS.push({
  slug: "carro-eletrico-mais-economico",
  h1: "Carros elétricos mais econômicos",
  curto: "Mais econômicos",
  modelos: [...VEHICLES].sort((a, b) => a.kwh100 - b.kwh100).slice(0, 10),
  intro: (m) => `Os 10 elétricos que gastam menos energia por quilômetro, pelo Inmetro. O ${nome(m[0])} consome ${num(m[0].kwh100, 1)} kWh a cada 100 km: carregando em casa a R$ 0,95 por kWh, são cerca de ${reais(Math.round(m[0].kwh100 * 0.95))} a cada 100 km.`,
  catalogo: "rankings.html",
});

LISTAS.push({
  slug: "carro-eletrico-recarga-rapida",
  h1: "Carros elétricos que carregam mais rápido",
  curto: "Recarga mais rápida",
  modelos: VEHICLES.filter((v) => v.specs && v.specs.dcKw).sort((a, b) => b.specs.dcKw - a.specs.dcKw).slice(0, 10),
  intro: (m) => `Os 10 elétricos com a maior potência de recarga rápida (DC), segundo as fichas das marcas. O ${nome(m[0])} aceita até ${m[0].specs.dcKw} kW. Na prática, a velocidade também depende do carregador e da temperatura da bateria.`,
  catalogo: "veiculos.html",
});

for (const [tipo, slug, h1] of [["SUV", "suv-eletrico", "SUVs elétricos à venda no Brasil"], ["Hatch", "hatch-eletrico", "Hatches elétricos à venda no Brasil"], ["Sedã", "seda-eletrico", "Sedãs elétricos à venda no Brasil"]]) {
  LISTAS.push({
    slug, h1, curto: tipo === "Sedã" ? "Sedãs" : tipo === "SUV" ? "SUVs" : "Hatches",
    modelos: VEHICLES.filter((v) => v.bodyType === tipo).sort(porPreco),
    intro: (m) => {
      const p = m.filter((v) => v.price);
      const [um, varios] = { SUV: ["SUV", "SUVs"], Hatch: ["hatch", "hatches"], "Sedã": ["sedã", "sedãs"] }[tipo];
      return `${plural(m.length, `${um} 100% elétrico à venda`, `${varios} 100% elétricos à venda`)} no Brasil, do mais barato ao mais caro.` +
        (p.length ? ` Os preços vão de ${reais(p[0].price)} (${nome(p[0])}) a ${reais(p[p.length - 1].price)} (${nome(p[p.length - 1])}).` : "");
    },
    catalogo: `veiculos.html?tipo=${encodeURIComponent(tipo)}`,
  });
}

// Uma página por marca com pelo menos dois modelos.
const marcas = {};
VEHICLES.forEach((v) => (marcas[v.brand] = marcas[v.brand] || []).push(v));
const slugify = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
for (const [marca, lista] of Object.entries(marcas).sort()) {
  if (lista.length < 2) continue;
  LISTAS.push({
    slug: `carros-eletricos-${slugify(marca)}`,
    h1: `Carros elétricos da ${marca}`,
    curto: marca,
    marca: true,
    modelos: [...lista].sort(porPreco),
    intro: (m) => {
      const p = m.filter((v) => v.price);
      const longe = [...m].sort((a, b) => b.rangeMax - a.rangeMax)[0];
      return `A ${marca} vende ${plural(m.length, "modelo 100% elétrico", "modelos 100% elétricos")} no Brasil.` +
        (p.length ? ` O mais barato é o ${nome(p[0])}, a partir de ${reais(p[0].price)}.` : "") +
        ` O de maior autonomia é o ${nome(longe)}, com até ${longe.rangeMax} km pelo Inmetro.`;
    },
    catalogo: `veiculos.html?marca=${encodeURIComponent(marca)}`,
  });
}

// ---------- Montagem das páginas ----------
const fontes = `Autonomia e consumo: Inmetro (${esc(DATA_INFO.inmetro.titulo)}, atualização de ${DATA_INFO.inmetro.atualizacao}). Preços "a partir de" coletados nos sites das marcas em ${DATA_INFO.precos.coleta}. <a class="text-link" href="metodologia.html">Como coletamos os dados</a>.`;

function pagina({ arquivo, url, titulo, desc, h1, eyebrow, migalha, corpo, ld }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(desc)}">
  <base href="/">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="EV Brasil">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="${esc(h1)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/assets/og/site.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="icon" href="assets/favicon.svg?v=2" type="image/svg+xml">
  <meta name="theme-color" content="#061024">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div id="header-slot"></div>

  <main>
    <section class="page-head">
      <div class="container">
        <nav class="breadcrumb">${migalha}</nav>
        <span class="eyebrow">${esc(eyebrow)}</span>
        <h1 class="section-title">${esc(h1)}</h1>
      </div>
    </section>
${corpo}
  </main>

  <div id="footer-slot"></div>

  <script src="js/catalogo.js"></script>
  <script src="js/data.js"></script>
  <script src="js/car-svg.js"></script>
  <script src="js/main.js"></script>
  <script>mountChrome("veiculos");</script>
</body>
</html>
`;
}

const migalhaBase = `<a href="index.html">Início</a> · <a href="${PASTA}/">Listas</a>`;
const chips = (atual) => LISTAS.filter((l) => l.slug !== atual && !l.marca).map((l) => `<a class="chip" href="${PASTA}/${l.slug}.html">${esc(l.curto)}</a>`).join("\n          ");

fs.rmSync(PASTA, { recursive: true, force: true });
fs.mkdirSync(PASTA);

for (const l of LISTAS) {
  const m = l.modelos;
  if (!m.length) throw new Error(`lista vazia: ${l.slug}`);
  const url = `${SITE}/${PASTA}/${l.slug}.html`;
  const intro = l.intro(m);
  const desc = `${intro} Compare autonomia, consumo e preço com dados oficiais.`.slice(0, 300);
  const ld = [
    {
      "@context": "https://schema.org", "@type": "ItemList", name: l.h1, numberOfItems: m.length,
      itemListElement: m.map((v, i) => ({ "@type": "ListItem", position: i + 1, name: nome(v), url: `${SITE}/carros/${v.id}.html` })),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Listas", item: `${SITE}/${PASTA}/` },
        { "@type": "ListItem", position: 3, name: l.h1, item: url },
      ],
    },
  ];
  const corpo = `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">${esc(intro)}</p>
        <div class="grid lista-grid">${m.map(createCard).join("")}
        </div>
        <p class="fine-print lista-fontes">${fontes}</p>
        <p class="lista-acoes">
          <a class="btn btn-primary" href="${l.catalogo}">Ver no catálogo</a>
          <a class="btn btn-ghost" href="comparar.html?ids=${m.slice(0, 3).map((v) => v.id).join(",")}">Comparar os três primeiros</a>
        </p>
        <div data-share-bar="${esc(l.h1)} — EV Brasil"></div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <h2 class="lista-outras">Outras listas</h2>
        <div class="filter-group lista-chips">
          ${chips(l.slug)}
        </div>
      </div>
    </section>`;
  fs.writeFileSync(`${PASTA}/${l.slug}.html`, pagina({
    url, titulo: `${l.h1} (${DATA_INFO.precos.coleta.slice(3)}) — EV Brasil`, desc, h1: l.h1,
    eyebrow: l.marca ? "Marca" : "Lista", migalha: `${migalhaBase} · <span>${esc(l.h1)}</span>`, corpo, ld,
  }));
}

// Índice com todas as listas.
const grupo = (titulo, ls) => `
        <h2 class="lista-outras">${titulo}</h2>
        <div class="filter-group lista-chips">
          ${ls.map((l) => `<a class="chip" href="${PASTA}/${l.slug}.html">${esc(l.h1)} <span class="lista-n">${l.modelos.length}</span></a>`).join("\n          ")}
        </div>`;
fs.writeFileSync(`${PASTA}/index.html`, pagina({
  url: `${SITE}/${PASTA}/`, titulo: "Listas de carros elétricos: por preço, autonomia, carroceria e marca — EV Brasil",
  desc: "Listas prontas dos carros 100% elétricos à venda no Brasil: os mais baratos, até R$ 150 mil, maior autonomia, mais econômicos, SUVs e por marca.",
  h1: "Listas de carros elétricos", eyebrow: "Listas", migalha: `<a href="index.html">Início</a> · <span>Listas</span>`,
  corpo: `
    <section class="section-flush">
      <div class="container">
        <p class="section-sub lista-intro">Atalhos para as pesquisas mais comuns. Cada lista é atualizada junto com os dados do site.</p>
${grupo("Por preço e desempenho", LISTAS.filter((l) => !l.marca))}
${grupo("Por marca", LISTAS.filter((l) => l.marca))}
      </div>
    </section>`,
  ld: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Listas de carros elétricos", url: `${SITE}/${PASTA}/` },
}));

// Acrescenta as páginas ao sitemap gerado por gerar-dados.mjs.
const sitemap = fs.readFileSync("sitemap.xml", "utf8").replace(new RegExp(`\\s*<url><loc>${SITE}/${PASTA}/[^<]*</loc></url>`, "g"), "");
const novas = [`/${PASTA}/`, ...LISTAS.map((l) => `/${PASTA}/${l.slug}.html`)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
fs.writeFileSync("sitemap.xml", sitemap.replace("</urlset>", `${novas}\n</urlset>`));
console.log(`${PASTA}/: ${LISTAS.length} listas + índice`);
