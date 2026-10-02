/**
 * Lógica da página inicial (index.html).
 */
(function () {
  mountChrome("home");

  // Painel de abertura: usa o Seal (o esportivo) como carro de capa.
  const heroCar = VEHICLES.find((v) => v.id === "byd-seal") || VEHICLES[0];
  const heroPanel = document.getElementById("heroPanel");
  const heroVisual = document.getElementById("heroVisual");
  if (heroPanel) heroPanel.style.setProperty("--glow", heroCar.color);
  if (heroVisual) {
    heroVisual.href = "veiculo.html?id=" + encodeURIComponent(heroCar.id);
    heroVisual.setAttribute("aria-label", `Ver detalhes do ${heroCar.brand} ${heroCar.model}`);
    heroVisual.innerHTML = carImage(heroCar);
  }

  // Um painel de tela cheia para cada modelo em destaque (featured: true em data.js),
  // menos o carro de capa, que já aparece no painel de abertura.
  function panel(v) {
    const link = "veiculo.html?id=" + encodeURIComponent(v.id);
    return `
      <section class="panel" style="--glow:${v.color}">
        <div class="panel-head">
          <span class="eyebrow">${v.brand} · ${v.segment}</span>
          <h2 class="panel-title">${v.model}</h2>
          <p class="panel-sub">${v.tagline}</p>
        </div>
        <a class="panel-visual" href="${link}" aria-label="Ver detalhes do ${v.brand} ${v.model}">${carImage(v)}</a>
        <div class="panel-foot">
          ${specBar(v)}
          <div class="panel-actions">
            <a href="${link}" class="btn btn-primary btn-wide">Ver detalhes</a>
            <a href="index.html?modelo=${encodeURIComponent(v.id)}#contato" class="btn btn-ghost btn-wide">Tenho interesse</a>
          </div>
        </div>
      </section>`;
  }

  const panels = document.getElementById("featuredPanels");
  if (panels) panels.innerHTML = VEHICLES.filter((v) => v.featured && v !== heroCar).map(panel).join("");

  // Blocos de categoria: um por tipo de carroceria, com o primeiro carro do tipo.
  const tiles = document.getElementById("categoryTiles");
  if (tiles) {
    tiles.innerHTML = BODY_TYPES.map((tipo) => {
      const doTipo = VEHICLES.filter((v) => v.bodyType === tipo);
      const capa = doTipo[0];
      return `
        <a class="tile" href="veiculos.html?tipo=${encodeURIComponent(tipo)}" style="--glow:${capa.color}">
          <div class="tile-visual">${carImage(capa)}</div>
          <div class="tile-body">
            <span class="tile-count">${doTipo.length} ${doTipo.length === 1 ? "modelo" : "modelos"}</span>
            <h3 class="tile-title">${tipo}</h3>
            <span class="btn btn-light btn-sm">Ver ${tipo}</span>
          </div>
        </a>`;
    }).join("");
  }

  // Preenche o select de modelos no formulário de contato.
  const modeloSelect = document.getElementById("modelo");
  if (modeloSelect) {
    modeloSelect.innerHTML =
      '<option value="">Selecione um modelo</option>' +
      VEHICLES.map((v) => `<option value="${v.id}">${v.brand} ${v.model}</option>`).join("");

    // Se veio de um link com ?modelo=id, pré-seleciona.
    const params = new URLSearchParams(location.search);
    const preset = params.get("modelo");
    if (preset) modeloSelect.value = preset;
  }

  // Envio do formulário (simulado — sem backend).
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      if (!nome.value.trim() || !email.value.trim()) {
        nome.focus();
        return;
      }
      msg.classList.add("show");
      form.reset();
      msg.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => msg.classList.remove("show"), 6000);
    });
  }
})();
