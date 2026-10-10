/**
 * Peças comuns das páginas geradas no servidor (listas para buscas e preços do mês):
 * carrega os dados e as funções do site como no navegador e monta o HTML da página
 * com o mesmo cabeçalho, rodapé e visual das outras.
 */
import fs from "node:fs";
import vm from "node:vm";

export const SITE = "https://ev-brasil.web.app";

// Carrega os dados e as funções do site (createCard, priceText...) como no navegador.
export const ctx = { console };
vm.createContext(ctx);
for (const f of ["js/catalogo.js", "js/data.js", "js/car-svg.js", "js/main.js"]) {
  const codigo = fs.readFileSync(f, "utf8").replace(/^(const|let) (\w+) =/gm, "var $2 =");
  vm.runInContext(codigo, ctx, { filename: f });
}
export const { VEHICLES, DATA_INFO, createCard } = ctx;

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const num = (n, casas = 0) => n.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
export const reais = (n) => `R$ ${num(n)}`; // espaço que não quebra: "R$" nunca fica sozinho no fim da linha
export const nome = (v) => `${v.brand} ${v.model}`;

export function pagina({ url, titulo, desc, h1, eyebrow, migalha, corpo, ld, ativo = "veiculos", scripts = "" }) {
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
${scripts}  <script>mountChrome("${ativo}");</script>
</body>
</html>
`;
}
