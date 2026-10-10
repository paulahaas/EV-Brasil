/**
 * Gera o glossário: glossario.html (todos os termos, já escritos no HTML) e
 * js/glossario.js (a lista curta, usada para transformar em link a primeira vez
 * que cada termo aparece nos guias, com a explicação ao passar o mouse).
 * Os termos ficam em dados/glossario.json.
 *
 * Roda junto com `npm run dados`.
 */
import fs from "node:fs";
import { SITE, esc, pagina } from "./pagina-estatica.mjs";

const { termos } = JSON.parse(fs.readFileSync("dados/glossario.json", "utf8"));
const grupos = [...new Set(termos.map((t) => t.grupo))];
const url = `${SITE}/glossario.html`;

const corpo = `
    <section class="section-flush">
      <div class="container prose glossario">
        <p class="lead">As palavras que aparecem quando o assunto é carro elétrico, explicadas sem complicação.</p>
        <nav class="filter-group lista-chips glossario-indice" aria-label="Grupos de termos">
          ${grupos.map((g, i) => `<a class="chip" href="glossario.html#grupo-${i}">${esc(g)}</a>`).join("\n          ")}
        </nav>
${grupos.map((g, i) => `
        <h2 id="grupo-${i}">${esc(g)}</h2>
        <dl class="glossario-lista">
${termos.filter((t) => t.grupo === g).map((t) => `          <div class="glossario-item" id="${t.id}">
            <dt>${esc(t.termo)}</dt>
            <dd>${esc(t.texto)}</dd>
          </div>`).join("\n")}
        </dl>`).join("\n")}
        <p class="fine-print">Faltou alguma palavra? Os guias explicam cada assunto com mais detalhes: <a class="text-link" href="guias.html">ver os guias</a>.</p>
      </div>
    </section>`;

const ld = {
  "@context": "https://schema.org", "@type": "DefinedTermSet", name: "Glossário do carro elétrico", url,
  hasDefinedTerm: termos.map((t) => ({ "@type": "DefinedTerm", name: t.termo, description: t.texto, url: `${url}#${t.id}` })),
};

fs.writeFileSync("glossario.html", pagina({
  url, titulo: "Glossário do carro elétrico: kWh, kW, autonomia, recarga AC e DC — EV Brasil",
  desc: "O que é kWh, kW, autonomia, recarga lenta (AC) e rápida (DC), wallbox, CCS2, frenagem regenerativa e outras palavras do carro elétrico, em linguagem simples.",
  h1: "Glossário do carro elétrico", eyebrow: "Guia",
  migalha: `<a href="index.html">Início</a> · <a href="guias.html">Guias</a> · <span>Glossário</span>`,
  corpo, ld, ativo: "guias",
}));

// Lista curta para os guias (id, nome, frase curta e como o termo aparece no texto).
const curto = termos.map(({ id, termo, curto: c, padroes }) => ({ id, termo, curto: c, padroes }));
fs.writeFileSync("js/glossario.js", `/**
 * ARQUIVO GERADO por scripts/gerar-glossario.mjs (dados/glossario.json) — não edite à mão.
 * Nos guias, transforma em link a primeira vez que cada termo aparece no texto,
 * com a explicação curta ao passar o mouse e o glossário completo ao clicar.
 */
const GLOSSARIO = ${JSON.stringify(curto, null, 1)};

(function () {
  const area = document.querySelector(".prose");
  if (!area || area.classList.contains("glossario")) return;
  const pular = "a, h1, h2, h3, h4, th, .fine-print, .guide-sources, table";
  for (const t of GLOSSARIO) {
    const re = new RegExp(t.padroes.join("|"), "i");
    const andar = document.createTreeWalker(area, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest(pular) || !re.test(n.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT),
    });
    const no = andar.nextNode();
    if (!no) continue;
    const m = no.nodeValue.match(re);
    const depois = no.splitText(m.index);
    depois.splitText(m[0].length);
    const a = document.createElement("a");
    a.className = "termo";
    a.href = "glossario.html#" + t.id;
    a.title = t.curto;
    a.textContent = depois.nodeValue;
    depois.replaceWith(a);
  }
})();
`);

// Sitemap
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
if (!sitemap.includes(`${SITE}/glossario.html`)) {
  fs.writeFileSync("sitemap.xml", sitemap.replace("</urlset>", `  <url><loc>${SITE}/glossario.html</loc></url>\n</urlset>`));
}
console.log(`glossario.html: ${termos.length} termos`);
