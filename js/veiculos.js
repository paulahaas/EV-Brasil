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
  const brandFilters = document.getElementById("brandFilters");
  const typeFilters = document.getElementById("typeFilters");
  const sortSelect = document.getElementById("sortSelect");

  // Monta os chips de filtro.
  function renderChips() {
    const brands = ["Todas", ...BRANDS];
    brandFilters.innerHTML = brands
      .map(
        (b) =>
          `<button class="chip ${b === state.brand ? "active" : ""}" data-brand="${b}">${b}</button>`
      )
      .join("");

    const types = ["Todos", ...BODY_TYPES];
    typeFilters.innerHTML = types
      .map(
        (t) =>
          `<button class="chip ${t === state.type ? "active" : ""}" data-type="${t}">${t}</button>`
      )
      .join("");

    brandFilters.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => {
        state.brand = c.dataset.brand;
        renderChips();
        render();
      })
    );
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
  }

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  renderChips();
  render();
})();
