/**
 * Componentes e utilidades compartilhadas de UI.
 * -------------------------------------------------
 * Cabeçalho e rodapé são injetados via JavaScript para você editar
 * em um único lugar (aqui) e o site inteiro atualizar junto.
 */

/* Logo: medidor de carga quase cheio com um raio (mesmo desenho de assets/favicon.svg). */
const LOGO_SVG = `<svg viewBox="0 0 36 36" width="30" height="30" aria-hidden="true"><circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" stroke-width="4"/><path d="M18 4a14 14 0 1 1-12.1 7" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/><path d="M19.6 10 13 19.5h4.6l-1.4 6.5 6.7-9.6h-4.7l1.4-6.4Z" fill="#fbbf24"/></svg>`;

/* ---------------- Cabeçalho ---------------- */
function renderHeader(active) {
  const links = [
    { href: "veiculos.html", label: "Carros", key: "veiculos" },
    { href: "rankings.html", label: "Rankings", key: "rankings" },
    { href: "comparar.html", label: "Comparar", key: "comparar" },
    { href: "calculadora.html", label: "Calculadora", key: "calculadora" },
    { href: "guias.html", label: "Guias", key: "guias" },
  ];
  const nav = links
    .map(
      (l) =>
        `<a href="${l.href}" class="${l.key === active ? "active" : ""}">${l.label}</a>`
    )
    .join("");

  return `
<header class="header" id="siteHeader">
  <div class="container nav">

    <a href="index.html" class="brand">
      <span class="logo-mark">${LOGO_SVG}</span>
      <span>EV<span class="accent">Brasil</span></span>
    </a>

    <nav class="nav-links">
      ${nav}
    </nav>

    <div class="nav-cta">
      <a href="encontre.html" class="btn btn-primary btn-sm">
        Qual é o meu?
      </a>

      <button
        class="nav-toggle"
        type="button"
        aria-label="Abrir menu"
        onclick="document.getElementById('siteHeader').classList.toggle('open')">
        Menu
      </button>
    </div>

  </div>
</header>`;
}

/* ---------------- Rodapé ---------------- */
function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="logo-mark">${LOGO_SVG}</span>
            <span>EV<span class="accent">Brasil</span></span>
          </a>
          <p>Guia independente dos carros elétricos à venda no Brasil. Não vendemos carros: comparamos, com dados oficiais.</p>
        </div>
        <div class="footer-col">
          <h4>Pesquisar</h4>
          <a href="encontre.html">Qual elétrico é para mim?</a>
          <a href="veiculos.html">Todos os carros</a>
          <a href="eletricos/">Listas prontas</a>
          <a href="rankings.html">Rankings</a>
          <a href="comparar.html">Comparar modelos</a>
          <a href="calculadora.html">Calculadora de economia</a>
          <a href="viagem.html">Dá para viajar?</a>
          <a href="novidades.html">Lançamentos</a>
          <a href="guias.html">Guias do primeiro elétrico</a>
        </div>
        <div class="footer-col">
          <h4>Carrocerias</h4>
          ${BODY_TYPES.map((t) => `<a href="veiculos.html?tipo=${encodeURIComponent(t)}">${t}</a>`).join("")}
        </div>
        <div class="footer-col">
          <h4>Sobre</h4>
          <a href="metodologia.html">De onde vêm os dados</a>
          <a href="creditos.html">Créditos das fotos</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} EV Brasil. Autonomia e consumo: Inmetro (${DATA_INFO.inmetro.atualizacao}). Preços coletados em ${DATA_INFO.precos.coleta}.</span>
        <span>Feito no Brasil ⚡</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------- Números rápidos de um veículo ---------------- */
/** Faixa de números sob o carro (painéis e página do modelo). */
function specBar(v) {
  return `
    <div class="specbar">
      <div class="spec"><span class="v">${rangeText(v)}</span><span class="k">Autonomia (Inmetro)</span></div>
      <div class="spec"><span class="v">${formatNum(v.kwh100)}</span><span class="k">kWh a cada 100 km</span></div>
      <div class="spec"><span class="v">${v.price ? formatBRL(v.price) : "—"}</span><span class="k">${v.price ? "A partir de" : "Preço não divulgado"}</span></div>
    </div>`;
}

/* ---------------- Card de veículo ---------------- */
function createCard(v) {
  const nota = priceNoteShort(v);
  return `
    <a class="card" href="${modelUrl(v)}">
      <div class="card-media ${hasPhoto(v) ? "has-photo" : ""}" style="--glow:${v.color}">
        ${carImage(v)}
      </div>
      <div class="card-body">
        <h3 class="card-title">${v.brand} ${v.model}</h3>
        <p class="card-meta">${v.bodyType} · ${v.versions.length} ${v.versions.length === 1 ? "versão" : "versões"}</p>
        <p class="card-meta">Autonomia ${rangeText(v)} · ${formatNum(v.kwh100)} kWh/100 km</p>
        <p class="card-meter">${consumoMeter(v)}</p>
        <p class="card-price">${priceText(v)}</p>
        ${nota ? `<p class="card-note">${nota}</p>` : ""}
        ${(() => {
          // Variação desde o lançamento, quando é relevante (3% ou mais).
          const t = priceTrend(v);
          if (!t || Math.abs(t.pct) < 3) return "";
          return `<p class="card-trend ${t.delta < 0 ? "down" : "up"}">${t.delta < 0 ? "↓" : "↑"} ${formatNum(Math.abs(t.pct), 0)}% desde ${monthText(t.since.month)}</p>`;
        })()}
      </div>
    </a>`;
}

/* ---------------- Segurança ---------------- */
// Textos que não escrevemos nós (ex.: créditos de fotos) passam por aqui antes de ir para o HTML.
function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------------- Compartilhar ---------------- */
// Botões de compartilhar: WhatsApp, copiar o link e, onde o aparelho oferece
// (celular), o menu de compartilhar do próprio sistema. Sempre compartilham o
// endereço atual da página (no comparador, com os modelos escolhidos).
const ICONE_WHATSAPP = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>`;
const ICONE_LINK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>`;
const ICONE_MAIS = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>`;

function shareBar(texto) {
  return `
    <div class="share" data-share-text="${escapeHtml(texto || "")}">
      <span class="share-label">Compartilhar</span>
      <a class="share-btn" data-share="whatsapp" href="https://wa.me/" target="_blank" rel="noopener">${ICONE_WHATSAPP}WhatsApp</a>
      <button type="button" class="share-btn" data-share="copiar">${ICONE_LINK}<span>Copiar link</span></button>
      ${navigator.share ? `<button type="button" class="share-btn" data-share="mais">${ICONE_MAIS}Mais opções</button>` : ""}
    </div>`;
}

// (fora do navegador, ex.: no gerador de páginas, não há document)
if (typeof document !== "undefined") document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-share]");
  if (!btn) return;
  const bar = btn.closest(".share");
  const url = location.href.split("#")[0];
  const h1 = document.querySelector("h1");
  const texto = (bar && bar.dataset.shareText) || (h1 ? h1.textContent.trim() : document.title);
  const tipo = btn.dataset.share;
  if (tipo === "whatsapp") {
    // O link é montado na hora do clique, com o endereço atual.
    btn.href = `https://wa.me/?text=${encodeURIComponent(`${texto} ${url}`)}`;
    return;
  }
  if (tipo === "mais") {
    navigator.share({ title: texto, text: texto, url }).catch(() => {});
    return;
  }
  if (tipo === "copiar") {
    const rotulo = btn.querySelector("span");
    const pronto = () => { rotulo.textContent = "Link copiado ✓"; setTimeout(() => (rotulo.textContent = "Copiar link"), 2200); };
    // Sem a API da área de transferência (ou sem permissão), copia por um campo escondido.
    const reserva = () => {
      const campo = document.createElement("textarea");
      campo.value = url; campo.setAttribute("readonly", ""); campo.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(campo); campo.select();
      const ok = document.execCommand("copy");
      campo.remove();
      if (ok) pronto(); else rotulo.textContent = "Não deu para copiar";
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(pronto, reserva);
    else reserva();
  }
});

/* ---------------- Inicialização comum ---------------- */
function mountChrome(activeKey) {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.innerHTML = renderHeader(activeKey);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
  // Páginas fixas marcam onde vão os botões com <div data-share-bar></div>.
  document.querySelectorAll("[data-share-bar]").forEach((el) => (el.outerHTML = shareBar(el.dataset.shareBar)));

  // Na home o cabeçalho começa transparente sobre o painel e ganha fundo ao rolar.
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}
