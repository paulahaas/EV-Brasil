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
    sort: "menor",
  };

  // Lê filtros vindos da URL (ex.: veiculos.html?tipo=SUV&q=byd).
  const params = new URLSearchParams(location.search);
  if (params.get("tipo") && BODY_TYPES.includes(params.get("tipo"))) state.type = params.get("tipo");
  if (params.get("marca") && BRANDS.includes(params.get("marca"))) state.brand = params.get("marca");
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
  const toggleBtn = document.getElementById("filtersToggle");
  const filtersMore = document.getElementById("filtersMore");

  // Celular: abre e fecha o painel de filtros.
  toggleBtn.addEventListener("click", () => {
    const aberto = filtersMore.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(aberto));
  });

  // Marcas num menu (são muitas para caber em chips).
  brandSelect.innerHTML =
    '<option value="Todas">Marca: Todas</option>' +
    BRANDS.map((b) => `<option value="${b}">${b}</option>`).join("");

  // Chips de tipo de carroceria.
  function renderChips() {
    typeFilters.innerHTML = ["Todos", ...BODY_TYPES]
      .map((t) => `<button class="chip ${t === state.type ? "active" : ""}" data-type="${t}">${t}</button>`)
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

  // Modelos sem preço divulgado vão para o fim quando a ordem é por preço.
  const porPreco = (sinal) => (a, b) => {
    if (!a.price) return 1;
    if (!b.price) return -1;
    return sinal * (a.price - b.price);
  };

  function render() {
    const q = state.q.toLowerCase();
    const list = VEHICLES.filter((v) => {
      const okBrand = state.brand === "Todas" || v.brand === state.brand;
      const okType = state.type === "Todos" || v.bodyType === state.type;
      const okPrice = !state.maxPrice || (v.price && v.price <= state.maxPrice);
      const okRange = !state.minRange || v.rangeMax >= state.minRange;
      const okText = !q || `${v.brand} ${v.model} ${v.bodyType}`.toLowerCase().includes(q);
      return okBrand && okType && okPrice && okRange && okText;
    });

    const ordens = {
      menor: porPreco(1),
      maior: porPreco(-1),
      autonomia: (a, b) => b.rangeMax - a.rangeMax,
      consumo: (a, b) => a.kwh100 - b.kwh100,
      nome: (a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`, "pt-BR"),
    };
    list.sort(ordens[state.sort] || ordens.menor);

    grid.innerHTML = list.map(createCard).join("");
    emptyState.style.display = list.length ? "none" : "block";
    resultsCount.textContent = `${list.length} ${list.length === 1 ? "modelo" : "modelos"}`;

    const filtrando = q || state.brand !== "Todas" || state.type !== "Todos" || state.maxPrice || state.minRange;
    clearBtn.hidden = !filtrando;
    const ativos = [state.brand !== "Todas", state.type !== "Todos", state.maxPrice, state.minRange].filter(Boolean).length;
    toggleBtn.textContent = ativos ? `Filtros (${ativos})` : "Filtros";
  }

  searchInput.addEventListener("input", () => { state.q = searchInput.value.trim(); render(); });
  brandSelect.addEventListener("change", () => { state.brand = brandSelect.value; render(); });
  priceSelect.addEventListener("change", () => { state.maxPrice = Number(priceSelect.value); render(); });
  rangeSelect.addEventListener("change", () => { state.minRange = Number(rangeSelect.value); render(); });
  sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; render(); });
  clearBtn.addEventListener("click", () => {
    Object.assign(state, { q: "", brand: "Todas", type: "Todos", maxPrice: 0, minRange: 0 });
    syncControls();
    render();
  });

  syncControls();
  render();
})();
