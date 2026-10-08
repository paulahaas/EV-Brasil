/**
 * Componentes e utilidades compartilhadas de UI.
 * -------------------------------------------------
 * Cabeçalho e rodapé são injetados via JavaScript para você editar
 * em um único lugar (aqui) e o site inteiro atualizar junto.
 */

/* ---------------- Cabeçalho ---------------- */
function renderHeader(active) {
  const links = [
    { href: "veiculos.html", label: "Carros", key: "veiculos" },
    { href: "rankings.html", label: "Rankings", key: "rankings" },
    { href: "comparar.html", label: "Comparar", key: "comparar" },
    { href: "calculadora.html", label: "Calculadora", key: "calculadora" },
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
      <span class="logo-mark">⚡</span>
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
            <span class="logo-mark">⚡</span>
            <span>EV<span class="accent">Brasil</span></span>
          </a>
          <p>Guia independente dos carros elétricos à venda no Brasil. Não vendemos carros: comparamos, com dados oficiais.</p>
        </div>
        <div class="footer-col">
          <h4>Pesquisar</h4>
          <a href="encontre.html">Qual elétrico é para mim?</a>
          <a href="veiculos.html">Todos os carros</a>
          <a href="rankings.html">Rankings</a>
          <a href="comparar.html">Comparar modelos</a>
          <a href="calculadora.html">Calculadora de economia</a>
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

/* ---------------- Inicialização comum ---------------- */
function mountChrome(activeKey) {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.innerHTML = renderHeader(activeKey);
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Na home o cabeçalho começa transparente sobre o painel e ganha fundo ao rolar.
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}
