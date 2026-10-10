/**
 * Gera a página "Preços do mês": precos/index.html (edição atual) e
 * precos/AAAA-MM.html (arquivo de cada mês).
 * -------------------------------------------------
 * Tabela de preços "a partir de" de todos os elétricos, o que mudou desde a
 * coleta anterior (a partir da segunda coleta mensal) e o que mais caiu ou
 * subiu desde o lançamento. Tudo sai dos dados já coletados (priceHistory).
 * As edições antigas ficam como estão: cada mês acrescenta um arquivo.
 *
 * Roda junto com `npm run dados` (depois de scripts/gerar-dados.mjs).
 */
import fs from "node:fs";
import { SITE, VEHICLES, DATA_INFO, ctx, esc, num, reais, nome, pagina } from "./pagina-estatica.mjs";

const PASTA = "precos";
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const [, mm, aaaa] = DATA_INFO.precos.coleta.split("/");
const MES = `${aaaa}-${mm}`;
const mesTexto = (m) => `${MES_NOME(m)} de ${m.slice(0, 4)}`;
function MES_NOME(m) { return MESES[Number(m.slice(5, 7)) - 1]; }
const pct = (n) => `${n > 0 ? "+" : "−"}${num(Math.abs(n), 1)}%`;
const link = (v) => `<a class="text-link" href="carros/${v.id}.html">${esc(nome(v))}</a>`;

const comPreco = VEHICLES.filter((v) => v.price).sort((a, b) => a.price - b.price);
const semPreco = VEHICLES.filter((v) => !v.price).sort((a, b) => nome(a).localeCompare(nome(b)));
const mediana = comPreco[Math.floor(comPreco.length / 2)].price;

// ---------- O que mudou desde a coleta anterior ----------
const coletas = (v) => (v.priceHistory || []).filter((p) => p.kind === "coleta");
const mudancas = [];
let mesAnterior = null;
for (const v of comPreco) {
  const c = coletas(v);
  const agora = c.find((p) => p.month === MES);
  const antes = c.filter((p) => p.month < MES).pop();
  if (!agora || !antes) continue;
  if (!mesAnterior || antes.month > mesAnterior) mesAnterior = antes.month;
  const delta = agora.price - antes.price;
  if (delta !== 0) mudancas.push({ v, antes: antes.price, agora: agora.price, pct: (delta / antes.price) * 100 });
}
const linhaMudanca = (m) => `<tr><td>${link(m.v)}</td><td>${reais(m.antes)}</td><td>${reais(m.agora)}</td><td class="${m.pct < 0 ? "preco-caiu" : "preco-subiu"}">${pct(m.pct)}</td></tr>`;
const tabelaMudancas = (lista) => `
        <div class="table-wrap">
          <table class="spec-table guide-table">
            <thead><tr><th scope="col">Modelo</th><th scope="col">Antes</th><th scope="col">Agora</th><th scope="col">Variação</th></tr></thead>
            <tbody>${lista.map(linhaMudanca).join("")}</tbody>
          </table>
        </div>`;
let secaoMes;
if (!mesAnterior) {
  secaoMes = `
        <h2>O que mudou no mês</h2>
        <p>Esta é a primeira coleta mensal do EV Brasil. A partir da próxima atualização, esta parte mostra o que subiu e o que caiu de um mês para o outro, modelo a modelo.</p>`;
} else {
  const caiu = mudancas.filter((m) => m.pct < 0).sort((a, b) => a.pct - b.pct);
  const subiu = mudancas.filter((m) => m.pct > 0).sort((a, b) => b.pct - a.pct);
  secaoMes = `
        <h2>O que mudou desde ${mesTexto(mesAnterior)}</h2>
        ${mudancas.length ? "" : "<p>Nenhum preço mudou desde a coleta anterior.</p>"}
        ${caiu.length ? `<h3>Ficaram mais baratos (${caiu.length})</h3>${tabelaMudancas(caiu)}` : ""}
        ${subiu.length ? `<h3>Ficaram mais caros (${subiu.length})</h3>${tabelaMudancas(subiu)}` : ""}`;
}

// ---------- Desde o lançamento ----------
const tendencias = comPreco.map((v) => ({ v, t: ctx.priceTrend(v) })).filter((x) => x.t && !x.t.stable);
const linhaLanc = ({ v, t }) => `<tr><td>${link(v)}</td><td>${reais(t.since.price)} <small>${MES_NOME(t.since.month).slice(0, 3)}/${t.since.month.slice(0, 4)}</small></td><td>${reais(v.price)}</td><td class="${t.pct < 0 ? "preco-caiu" : "preco-subiu"}">${pct(t.pct)}</td></tr>`;
const tabelaLanc = (lista) => `
        <div class="table-wrap">
          <table class="spec-table guide-table">
            <thead><tr><th scope="col">Modelo</th><th scope="col">No lançamento</th><th scope="col">Hoje</th><th scope="col">Variação</th></tr></thead>
            <tbody>${lista.map(linhaLanc).join("")}</tbody>
          </table>
        </div>`;
const quedas = tendencias.filter((x) => x.t.pct < 0).sort((a, b) => a.t.pct - b.t.pct).slice(0, 8);
const altas = tendencias.filter((x) => x.t.pct > 0).sort((a, b) => b.t.pct - a.t.pct).slice(0, 8);

// ---------- Tabela completa ----------
const linhaTabela = (v) => `<tr><td>${link(v)}</td><td>${esc(v.bodyType)}</td><td>${reais(v.price)}${v.priceKind === "imprensa" ? "<small>valor da imprensa</small>" : ""}</td></tr>`;

const titulo = `Preços dos carros elétricos em ${mesTexto(MES)}`;
const intro = `Coletamos o preço "a partir de" de ${comPreco.length} carros 100% elétricos à venda no Brasil em ${DATA_INFO.precos.coleta}. ` +
  `O mais barato é o ${nome(comPreco[0])} (${reais(comPreco[0].price)}) e o mais caro, o ${nome(comPreco[comPreco.length - 1])} (${reais(comPreco[comPreco.length - 1].price)}). ` +
  `Metade custa até ${reais(mediana)}.`;

const corpo = `
    <section class="section-flush">
      <div class="container prose">
        <p class="lead">${esc(intro)}</p>
        <div data-share-bar="${esc(titulo)} — EV Brasil"></div>
${secaoMes}

        <h2>Desde o lançamento: o que mais caiu</h2>
        <p>Preço de hoje comparado com o preço divulgado quando o modelo chegou ao Brasil.</p>
        ${quedas.length ? tabelaLanc(quedas) : "<p>Nenhum modelo ficou mais barato que no lançamento.</p>"}

        <h2>Desde o lançamento: o que mais subiu</h2>
        ${altas.length ? tabelaLanc(altas) : "<p>Nenhum modelo ficou mais caro que no lançamento.</p>"}
        <p class="fine-print">O preço de lançamento é o publicado pela marca ou pela imprensa naquele mês e pode ser de outra versão. Preços de pré-venda, que costumam ser promocionais, ficam de fora.</p>

        <h2>Tabela completa, do mais barato ao mais caro</h2>
        <div class="table-wrap">
          <table class="spec-table guide-table">
            <thead><tr><th scope="col">Modelo</th><th scope="col">Carroceria</th><th scope="col">A partir de</th></tr></thead>
            <tbody>${comPreco.map(linhaTabela).join("")}</tbody>
          </table>
        </div>
        ${semPreco.length ? `<p class="fine-print">Sem preço divulgado: ${semPreco.map((v) => esc(nome(v))).join(", ")}.</p>` : ""}
        <p class="fine-print">Preço "a partir de" da versão de entrada, coletado nos sites das marcas em ${DATA_INFO.precos.coleta}; quando a marca não divulga, usamos o valor publicado na imprensa, com aviso. <a class="text-link" href="metodologia.html">Como coletamos os dados</a>.</p>

        <p class="lista-acoes">
          <a class="btn btn-primary" href="eletricos/carro-eletrico-mais-barato.html">Ver os mais baratos</a>
          <a class="btn btn-ghost" href="eletricos/">Todas as listas</a>
        </p>
      </div>
    </section>
    <!--EDICOES-->`;

const ld = (url) => ({
  "@context": "https://schema.org", "@type": "Article", headline: titulo, dateModified: `${MES}-${DATA_INFO.precos.coleta.slice(0, 2)}`,
  author: { "@type": "Organization", name: "EV Brasil" }, mainEntityOfPage: url,
});
const desc = `${intro} Veja a tabela completa e o que mudou de preço.`.slice(0, 300);
const montar = (url) => pagina({
  url, titulo: `${titulo} — EV Brasil`, desc, h1: titulo, eyebrow: "Preços do mês",
  migalha: `<a href="index.html">Início</a> · <a href="${PASTA}/">Preços do mês</a> · <span>${MES_NOME(MES)} de ${aaaa}</span>`, corpo, ld: ld(url),
});

fs.mkdirSync(PASTA, { recursive: true });
// Edição do mês: o arquivo do mês aponta para a página principal enquanto for o mês atual.
fs.writeFileSync(`${PASTA}/${MES}.html`, montar(`${SITE}/${PASTA}/`));
// Meses anteriores passam a ser páginas próprias (canonical para elas mesmas).
const edicoes = fs.readdirSync(PASTA).filter((f) => /^\d{4}-\d{2}\.html$/.test(f)).map((f) => f.slice(0, 7)).sort().reverse();
for (const m of edicoes) {
  if (m === MES) continue;
  const f = `${PASTA}/${m}.html`;
  const s = fs.readFileSync(f, "utf8");
  fs.writeFileSync(f, s.replace(`<link rel="canonical" href="${SITE}/${PASTA}/">`, `<link rel="canonical" href="${SITE}/${PASTA}/${m}.html">`));
}
const anteriores = edicoes.filter((m) => m !== MES);
const blocoEdicoes = anteriores.length ? `
    <section class="section-tight">
      <div class="container">
        <h2 class="lista-outras">Edições anteriores</h2>
        <div class="filter-group lista-chips">
          ${anteriores.map((m) => `<a class="chip" href="${PASTA}/${m}.html">${mesTexto(m)}</a>`).join("\n          ")}
        </div>
      </div>
    </section>` : "";
fs.writeFileSync(`${PASTA}/index.html`, montar(`${SITE}/${PASTA}/`).replace("<!--EDICOES-->", blocoEdicoes));

// Sitemap: a página principal e as edições anteriores.
const sitemap = fs.readFileSync("sitemap.xml", "utf8").replace(new RegExp(`\\s*<url><loc>${SITE}/${PASTA}/[^<]*</loc></url>`, "g"), "");
const novas = [`/${PASTA}/`, ...anteriores.map((m) => `/${PASTA}/${m}.html`)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n");
fs.writeFileSync("sitemap.xml", sitemap.replace("</urlset>", `${novas}\n</urlset>`));
console.log(`${PASTA}/: preços de ${mesTexto(MES)} (${mudancas.length} mudanças no mês, ${edicoes.length} edições)`);
