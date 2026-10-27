/**
 * Lógica da página de catálogo (veiculos.html).
 * Busca por texto, filtros (tipo, marca, preço, autonomia, recarga, porta-malas),
 * ordenação e contagem.
 */
(function () {
  mountChrome("veiculos");

  const state = {
    q: "",
    brand: "Todas",
    type: "Todos",
    motor: "bev",  // "bev" = 100% elétricos, "phev" = híbridos plug-in, "todos" = os dois
    maxPrice: 0,   // 0 = qualquer preço
    minRange: 0,   // 0 = qualquer autonomia
    minDc: 0,      // 0 = qualquer recarga rápida (kW)
    minTrunk: 0,   // 0 = qualquer porta-malas (litros)
    sort: "menor",
  };

  // Lê filtros vindos da URL (ex.: veiculos.html?tipo=SUV&q=byd).
  const params = new URLSearchParams(location.search);
  const TIPOS_TODOS = ["Hatch", "Sedã", "SUV", "Perua", "Esportivo", "Picape"].filter((t) => TODOS.some((v) => v.bodyType === t));
  const MOTORES = { bev: "100% elétricos", phev: "Híbridos plug-in", todos: "Todos" };
  if (MOTORES[params.get("motor")]) state.motor = params.get("motor");
  const marcasDe = () => [...new Set(TODOS.filter((v) => state.motor === "todos" || (state.motor === "phev") === isPhev(v)).map((v) => v.brand))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  if (params.get("tipo") && TIPOS_TODOS.includes(params.get("tipo"))) state.type = params.get("tipo");
  if (params.get("marca") && TODOS.some((v) => v.brand === params.get("marca"))) state.brand = params.get("marca");
  if (params.get("q")) state.q = params.get("q").trim();

  const grid = document.getElementById("vehiclesGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");
  const brandSelect = document.getElementById("brandSelect");
  const priceSelect = document.getElementById("priceSelect");
  const rangeSelect = document.getElementById("rangeSelect");
  const dcSelect = document.getElementById("dcSelect");
  const trunkSelect = document.getElementById("trunkSelect");
  const typeFilters = document.getElementById("typeFilters");
  const motorFilters = document.getElementById("motorFilters");
  const sortSelect = document.getElementById("sortSelect");
  const clearBtn = document.getElementById("clearFilters");
  const toggleBtn = document.getElementById("filtersToggle");
  const filtersMore = document.getElementById("filtersMore");

  // Celular: abre e fecha o painel de filtros.
  toggleBtn.addEventListener("click", () => {
    const aberto = filtersMore.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(aberto));
  });

  // Marcas num menu (são muitas para caber em chips); muda com o tipo de motor.
  function renderBrands() {
    const marcas = marcasDe();
    if (state.brand !== "Todas" && !marcas.includes(state.brand)) state.brand = "Todas";
    brandSelect.innerHTML =
      '<option value="Todas">Marca: Todas</option>' +
      marcas.map((b) => `<option value="${b}">${b}</option>`).join("");
    brandSelect.value = state.brand;
  }

  // Chips de tipo de motor: 100% elétricos, híbridos plug-in ou todos.
  function renderMotor() {
    const n = (m) => TODOS.filter((v) => m === "todos" || (m === "phev") === isPhev(v)).length;
    motorFilters.innerHTML = ["bev", "phev", "todos"]
      .map((m) => `<button class="chip ${m === state.motor ? "active" : ""}" data-motor="${m}" aria-pressed="${m === state.motor}">${MOTORES[m]} <span class="lista-n">${n(m)}</span></button>`)
      .join("");
    motorFilters.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => {
        state.motor = c.dataset.motor;
        renderMotor();
        renderBrands();
        render();
      })
    );
  }

  // Chips de tipo de carroceria.
  function renderChips() {
    typeFilters.innerHTML = ["Todos", ...TIPOS_TODOS]
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
    renderMotor();
    renderBrands();
    priceSelect.value = String(state.maxPrice);
    rangeSelect.value = String(state.minRange);
    dcSelect.value = String(state.minDc);
    trunkSelect.value = String(state.minTrunk);
    sortSelect.value = state.sort;
    renderChips();
  }

  // Modelos sem preço divulgado vão para o fim quando a ordem é por preço.
  const porPreco = (sinal) => (a, b) => {
    if (!a.price) return 1;
    if (!b.price) return -1;
    return sinal * (a.price - b.price);
  };

  // Busca tolerante: ignora acentos, espaços e hífens ("ex 30" acha "EX30") e troca "ph" por "f"
  // ("dolfin" acha "Dolphin"). Se nada combinar, aceita uma letra errada em palavras de
  // 4 letras ou mais ("tayca" acha "Taycan").
  const simples = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ph/g, "f").replace(/y/g, "i");
  const junto = (s) => simples(s).replace(/[^a-z0-9]/g, "");
  function quaseIgual(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0, j = 0, erros = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++erros > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return erros + (a.length - i) + (b.length - j) <= 1;
  }
  function combina(v, busca, tolerante) {
    const texto = `${v.brand} ${v.model} ${v.bodyType} ${v.bodyType === "Sedã" ? "sedan" : ""}`;
    const tudo = junto(texto);
    if (tudo.includes(junto(busca))) return true;
    const palavras = simples(texto).split(/[^a-z0-9]+/).filter(Boolean);
    return simples(busca).split(/[^a-z0-9]+/).filter(Boolean).every((t) =>
      tudo.includes(t) || (tolerante && t.length >= 4 && palavras.some((w) => quaseIgual(t, w) || quaseIgual(t, w.slice(0, t.length)))));
  }

  function render() {
    const q = state.q;
    const filtrar = (tolerante) => TODOS.filter((v) => {
      const okMotor = state.motor === "todos" || (state.motor === "phev") === isPhev(v);
      const okBrand = state.brand === "Todas" || v.brand === state.brand;
      const okType = state.type === "Todos" || v.bodyType === state.type;
      const okPrice = !state.maxPrice || (v.price && v.price <= state.maxPrice);
      const okRange = !state.minRange || v.rangeMax >= state.minRange;
      // Sem o dado na ficha técnica, o modelo sai do filtro (não dá para garantir).
      const okDc = !state.minDc || (v.specs && v.specs.dcKw >= state.minDc);
      const okTrunk = !state.minTrunk || (v.specs && v.specs.trunkL >= state.minTrunk);
      const okText = !q || combina(v, q, tolerante);
      return okMotor && okBrand && okType && okPrice && okRange && okDc && okTrunk && okText;
    });
    let list = filtrar(false);
    if (!list.length && q) list = filtrar(true);

    const ordens = {
      menor: porPreco(1),
      maior: porPreco(-1),
      autonomia: (a, b) => b.rangeMax - a.rangeMax,
      consumo: (a, b) => a.kwh100 - b.kwh100,
      // Ordens pela ficha técnica: quem não tem o dado vai para o fim.
      recarga: (a, b) => ((b.specs && b.specs.dcKw) || 0) - ((a.specs && a.specs.dcKw) || 0),
      portamalas: (a, b) => ((b.specs && b.specs.trunkL) || 0) - ((a.specs && a.specs.trunkL) || 0),
      nome: (a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`, "pt-BR"),
    };
    list.sort(ordens[state.sort] || ordens.menor);

    document.getElementById("pageTitle").textContent = state.motor === "phev" ? "Híbridos plug-in à venda" : state.motor === "todos" ? "Elétricos e híbridos plug-in à venda" : "Carros elétricos à venda";
    grid.innerHTML = list.map(createCard).join("");
    emptyState.style.display = list.length ? "none" : "block";
    resultsCount.textContent = `${list.length} ${list.length === 1 ? "modelo" : "modelos"}`;

    const filtrando = q || state.motor !== "bev" || state.brand !== "Todas" || state.type !== "Todos" || state.maxPrice || state.minRange || state.minDc || state.minTrunk;
    clearBtn.hidden = !filtrando;
    const ativos = [state.motor !== "bev", state.brand !== "Todas", state.type !== "Todos", state.maxPrice, state.minRange, state.minDc, state.minTrunk].filter(Boolean).length;
    toggleBtn.textContent = ativos ? `Filtros (${ativos})` : "Filtros";
  }

  searchInput.addEventListener("input", () => { state.q = searchInput.value.trim(); render(); });
  brandSelect.addEventListener("change", () => { state.brand = brandSelect.value; render(); });
  priceSelect.addEventListener("change", () => { state.maxPrice = Number(priceSelect.value); render(); });
  rangeSelect.addEventListener("change", () => { state.minRange = Number(rangeSelect.value); render(); });
  dcSelect.addEventListener("change", () => { state.minDc = Number(dcSelect.value); render(); });
  trunkSelect.addEventListener("change", () => { state.minTrunk = Number(trunkSelect.value); render(); });
  sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; render(); });
  clearBtn.addEventListener("click", () => {
    Object.assign(state, { q: "", brand: "Todas", type: "Todos", motor: "bev", maxPrice: 0, minRange: 0, minDc: 0, minTrunk: 0 });
    syncControls();
    render();
  });

  syncControls();
  render();
})();
