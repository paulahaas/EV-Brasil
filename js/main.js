/**
 * Componentes e utilidades compartilhadas de UI.
 * -------------------------------------------------
 * Cabeçalho e rodapé são injetados via JavaScript para você editar
 * em um único lugar (aqui) e o site inteiro atualizar junto.
 */

/* ---------------- Cabeçalho ---------------- */
function renderHeader(active) {
  const links = [
    { href: "index.html", label: "Início", key: "home" },
    { href: "veiculos.html", label: "Veículos", key: "veiculos" },
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
      <nav class="nav-links">${nav}</nav>
      <div class="nav-cta">
        <a href="veiculos.html" class="btn btn-primary">Ver veículos</a>
        <button class="nav-toggle" aria-label="Abrir menu" onclick="document.getElementById('siteHeader').classList.toggle('open')">☰</button>
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
          <a href="index.html#tecnologia">Tecnologia</a>
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

/* ---------------- Card de veículo ---------------- */
function createCard(v) {
  return `
  <a class="card" href="veiculo.html?id=${v.id}">
    <div class="card-media">
      ${v.featured ? '<span class="badge">Destaque</span>' : ""}
      ${carImage(v)}
    </div>
    <div class="card-body">
      <span class="card-brand">${v.brand}</span>
      <h3 class="card-title">${v.model}</h3>
      <p class="card-tagline">${v.tagline}</p>
      <div class="card-specs">
        <div class="cs"><span class="v">${v.specs.autonomia.split(" ")[0]} km</span><span class="k">Autonomia</span></div>
        <div class="cs"><span class="v">${v.specs.potencia.split(" ")[0]} cv</span><span class="k">Potência</span></div>
        <div class="cs"><span class="v">${v.specs.lugares}</span><span class="k">Lugares</span></div>
      </div>
      <div class="card-foot">
        <div class="card-price">${formatBRL(v.priceBRL)}<small>A PARTIR DE</small></div>
        <span class="card-link">Ver detalhes <span class="arrow">→</span></span>
      </div>
    </div>
  </a>`;
}

/* ---------------- Inicialização comum ---------------- */
function mountChrome(activeKey) {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.innerHTML = renderHeader(activeKey);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
}
