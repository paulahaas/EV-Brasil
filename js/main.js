/**
 * Componentes e utilidades compartilhadas de UI.
 * -------------------------------------------------
 * Cabeçalho e rodapé são injetados via JavaScript para você editar
 * em um único lugar (aqui) e o site inteiro atualizar junto.
 */

/* ---------------- Cabeçalho ---------------- */
function renderHeader(active) {
  const links = [
    { href: "veiculos.html", label: "Veículos", key: "veiculos" },
    { href: "index.html#categorias", label: "Categorias", key: "categorias" },
    { href: "index.html#tecnologia", label: "Tecnologia", key: "tec" },
    { href: "index.html#contato", label: "Contato", key: "contato" },
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
      <!-- Entrar / Meus anúncios / Sair: preenchido por js/session.js -->
      <span class="nav-auth" id="authSlot"></span>
    </nav>

    <div class="nav-cta">
      <a href="vender.html" class="btn btn-primary btn-sm ${active === "vender" ? "active" : ""}">
        Vender meu EV
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
          <p>A nova era da mobilidade elétrica no Brasil. Veículos elétricos premium, do compacto urbano ao SUV de luxo.</p>
        </div>
        <div class="footer-col">
          <h4>Navegar</h4>
          <a href="index.html">Início</a>
          <a href="veiculos.html">Veículos</a>
          <a href="vender.html">Vender meu EV</a>
          <a href="index.html#contato">Contato</a>
        </div>
        <div class="footer-col">
          <h4>Modelos</h4>
          <a href="veiculos.html?tipo=Hatch">Hatches</a>
          <a href="veiculos.html?tipo=Sedã">Sedãs</a>
          <a href="veiculos.html?tipo=SUV">SUVs</a>
        </div>
        <div class="footer-col">
          <h4>Contato</h4>
          <a href="mailto:contato@evbrasil.com.br">contato@evbrasil.com.br</a>
          <a href="tel:+5508007000000">0800 700 0000</a>
          <a href="#">São Paulo · SP</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} EV Brasil. Todos os direitos reservados.</span>
        <span>Feito no Brasil ⚡ Energia limpa para todos.</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------- Números rápidos de um veículo ---------------- */
// Extrai só o número dos textos da ficha (ex.: "570 km (CLTC)" -> "570").
function quickSpecs(v) {
  const aceleracao = v.specs.aceleracao.match(/[\d,]+ s/);
  return {
    autonomia: v.specs.autonomia.split(" ")[0] + " km",
    aceleracao: aceleracao ? aceleracao[0] : "-",
    potencia: v.specs.potencia.split(" ")[0] + " cv",
  };
}

/** Faixa de números sob o carro (painéis da home e página de detalhes). */
function specBar(v) {
  const q = quickSpecs(v);
  return `
    <div class="specbar">
      <div class="spec"><span class="v">${q.autonomia}</span><span class="k">Autonomia</span></div>
      <div class="spec"><span class="v">${q.aceleracao}</span><span class="k">0–100 km/h</span></div>
      <div class="spec"><span class="v">${q.potencia}</span><span class="k">Potência</span></div>
      <div class="spec"><span class="v">${formatBRL(v.priceBRL)}</span><span class="k">A partir de</span></div>
    </div>`;
}

/* ---------------- Card de veículo ---------------- */
function createCard(v) {
  const q = quickSpecs(v);
  return `
    <a class="card" href="veiculo.html?id=${encodeURIComponent(v.id)}">
      <div class="card-media" style="--glow:${v.color}">
        ${carImage(v)}
      </div>
      <div class="card-body">
        ${v.featured ? '<span class="card-flag">Destaque</span>' : ""}
        <h3 class="card-title">${v.brand} ${v.model}</h3>
        <p class="card-meta">${v.bodyType} · ${v.segment}</p>
        <p class="card-meta">${q.autonomia} · ${q.potencia} · ${v.specs.lugares} lugares</p>
        <p class="card-price">${formatBRL(v.priceBRL)}</p>
      </div>
    </a>`;
}

/* ---------------- Segurança ---------------- */
// Texto digitado por usuários (anúncios) passa por aqui antes de ir para o HTML.
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
