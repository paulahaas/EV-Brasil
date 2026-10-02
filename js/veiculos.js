/**
 * Lógica da página de catálogo (veiculos.html).
 * Filtros por marca e tipo, ordenação e contagem de resultados.
 */
(function () {
  mountChrome("veiculos");

  const state = {
    brand: "Todas",
    type: "Todos",
    sort: "destaque",
  };

  // Lê filtro de tipo vindo da URL (ex.: veiculos.html?tipo=SUV).
  const params = new URLSearchParams(location.search);
  if (params.get("tipo") && BODY_TYPES.includes(params.get("tipo"))) {
    state.type = params.get("tipo");
  }
  if (params.get("marca") && BRANDS.includes(params.get("marca"))) {
    state.brand = params.get("marca");
  }

  const grid = document.getElementById("vehiclesGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const brandSelect = document.getElementById("brandSelect");
  const typeFilters = document.getElementById("typeFilters");
  const sortSelect = document.getElementById("sortSelect");

  // Marcas num menu (são muitas para caber em chips).
  brandSelect.innerHTML =
    '<option value="Todas">Marca: Todas</option>' +
    BRANDS.map((b) => `<option value="${b}">${b}</option>`).join("");
  brandSelect.value = state.brand;
  brandSelect.addEventListener("change", () => {
    state.brand = brandSelect.value;
    render();
  });

  // Monta os chips de tipo de carroceria.
  function renderChips() {
    const types = ["Todos", ...BODY_TYPES];
    typeFilters.innerHTML = types
      .map(
        (t) =>
          `<button class="chip ${t === state.type ? "active" : ""}" data-type="${t}">${t}</button>`
      )
      .join("");

    typeFilters.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => {
        state.type = c.dataset.type;
        renderChips();
        render();
      })
    );
  }

  function parseNum(str) {
    // Extrai o primeiro número de textos como "570 km (CLTC)".
    const m = String(str).replace(/\./g, "").match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
  }

  function render() {
    let list = VEHICLES.filter((v) => {
      const okBrand = state.brand === "Todas" || v.brand === state.brand;
      const okType = state.type === "Todos" || v.bodyType === state.type;
      return okBrand && okType;
    });

    switch (state.sort) {
      case "menor":
        list.sort((a, b) => a.priceBRL - b.priceBRL);
        break;
      case "maior":
        list.sort((a, b) => b.priceBRL - a.priceBRL);
        break;
      case "autonomia":
        list.sort((a, b) => parseNum(b.specs.autonomia) - parseNum(a.specs.autonomia));
        break;
      default:
        list.sort((a, b) => (b.featured === true) - (a.featured === true));
    }

    grid.innerHTML = list.map(createCard).join("");
    emptyState.style.display = list.length ? "none" : "block";
    resultsCount.textContent = `${list.length} ${list.length === 1 ? "veículo encontrado" : "veículos encontrados"}`;

    // Avisa js/anuncios.js para aplicar os mesmos filtros aos anúncios de particulares.
    window.catalogFilters = state;
    document.dispatchEvent(new CustomEvent("catalogo:filtros"));
  }

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  renderChips();
  render();
})();
