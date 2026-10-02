/**
 * Lógica da página de catálogo (veiculos.html).
 * Busca por texto, filtros (tipo, marca, preço, autonomia), ordenação e contagem.
 */
(function () {
  mountChrome("veiculos");

  const state = {
    q: "",
    brand: "Todas",
    type: "Todos",
    maxPrice: 0,   // 0 = qualquer preço
    minRange: 0,   // 0 = qualquer autonomia
    sort: "destaque",
  };

  // Lê filtros vindos da URL (ex.: veiculos.html?tipo=SUV&q=byd).
  const params = new URLSearchParams(location.search);
  if (params.get("tipo") && BODY_TYPES.includes(params.get("tipo"))) {
    state.type = params.get("tipo");
  }
  if (params.get("marca") && BRANDS.includes(params.get("marca"))) {
    state.brand = params.get("marca");
  }
  if (params.get("q")) state.q = params.get("q").trim();

  const grid = document.getElementById("vehiclesGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");
  const brandSelect = document.getElementById("brandSelect");
  const priceSelect = document.getElementById("priceSelect");
  const rangeSelect = document.getElementById("rangeSelect");
  const typeFilters = document.getElementById("typeFilters");
  const sortSelect = document.getElementById("sortSelect");
  const clearBtn = document.getElementById("clearFilters");

  // Marcas num menu (são muitas para caber em chips).
  brandSelect.innerHTML =
    '<option value="Todas">Marca: Todas</option>' +
    BRANDS.map((b) => `<option value="${b}">${b}</option>`).join("");

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

  // Deixa os campos iguais ao estado (ao abrir a página e ao limpar os filtros).
  function syncControls() {
    searchInput.value = state.q;
    brandSelect.value = state.brand;
    priceSelect.value = String(state.maxPrice);
    rangeSelect.value = String(state.minRange);
    sortSelect.value = state.sort;
    renderChips();
  }

  function render() {
    const q = state.q.toLowerCase();
    let list = VEHICLES.filter((v) => {
      const okBrand = state.brand === "Todas" || v.brand === state.brand;
      const okType = state.type === "Todos" || v.bodyType === state.type;
      const okPrice = !state.maxPrice || v.priceBRL <= state.maxPrice;
      const okRange = !state.minRange || rangeKm(v) >= state.minRange;
      const okText = !q || `${v.brand} ${v.model} ${v.segment} ${v.bodyType}`.toLowerCase().includes(q);
      return okBrand && okType && okPrice && okRange && okText;
    });

    switch (state.sort) {
      case "menor":
        list.sort((a, b) => a.priceBRL - b.priceBRL);
        break;
      case "maior":
        list.sort((a, b) => b.priceBRL - a.priceBRL);
        break;
      case "autonomia":
        list.sort((a, b) => rangeKm(b) - rangeKm(a));
        break;
      default:
        list.sort((a, b) => (b.featured === true) - (a.featured === true));
    }

    grid.innerHTML = list.map(createCard).join("");
    emptyState.style.display = list.length ? "none" : "block";
    resultsCount.textContent = `${list.length} ${list.length === 1 ? "veículo encontrado" : "veículos encontrados"}`;

    const filtrando = q || state.brand !== "Todas" || state.type !== "Todos" || state.maxPrice || state.minRange;
    clearBtn.hidden = !filtrando;

    // Avisa js/anuncios.js para aplicar os mesmos filtros aos anúncios de particulares.
    window.catalogFilters = state;
    document.dispatchEvent(new CustomEvent("catalogo:filtros"));
  }

  searchInput.addEventListener("input", () => {
    state.q = searchInput.value.trim();
    render();
  });
  brandSelect.addEventListener("change", () => {
    state.brand = brandSelect.value;
    render();
  });
  priceSelect.addEventListener("change", () => {
    state.maxPrice = Number(priceSelect.value);
    render();
  });
  rangeSelect.addEventListener("change", () => {
    state.minRange = Number(rangeSelect.value);
    render();
  });
  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });
  clearBtn.addEventListener("click", () => {
    Object.assign(state, { q: "", brand: "Todas", type: "Todos", maxPrice: 0, minRange: 0 });
    syncControls();
    render();
  });

  syncControls();
  render();
})();
