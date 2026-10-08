/**
 * Comparador de modelos (comparar.html?ids=a,b,c).
 * Até três modelos lado a lado; o melhor valor de cada linha fica destacado.
 */
(function () {
  mountChrome("comparar");

  const MAX = 3;
  const root = document.getElementById("compareRoot");

  // Modelos escolhidos (ids). null = coluna vazia.
  const params = new URLSearchParams(location.search);
  let ids = (params.get("ids") || "").split(",").filter((id) => getVehicleById(id)).slice(0, MAX);
  if (ids.length === 0) ids = ["byd-dolphin", "volvo-ex30"].filter((id) => getVehicleById(id));
  while (ids.length < MAX) ids.push(null);

  const TARIFA = 0.95; // R$ por kWh, carregando em casa (o mesmo padrão da calculadora)

  // Linhas da tabela. `valor` é o número usado para achar o melhor da linha
  // e `melhor` diz se ganha o maior ou o menor (sem `melhor`, ninguém é destacado).
  const LINHAS = [
    { rotulo: "Preço a partir de", texto: (v) => priceText(v) + (priceNoteShort(v) ? `<small>${priceNoteShort(v)}</small>` : ""), valor: (v) => v.price, melhor: "menor" },
    { rotulo: "Autonomia (Inmetro)", texto: (v) => rangeText(v), valor: (v) => v.rangeMax, melhor: "maior" },
    { rotulo: "Consumo", texto: (v) => `${formatNum(v.kwh100)} kWh/100 km<small class="meter-small">${consumoNivel(v).texto} entre os elétricos</small>`, valor: (v) => v.kwh100, melhor: "menor" },
    {
      rotulo: "Energia a cada 100 km",
      texto: (v) => (v.kwh100 * TARIFA).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      valor: (v) => Math.round(v.kwh100 * TARIFA * 100),
      melhor: "menor",
    },
    {
      // Versão de entrada: o preço "a partir de" é o da versão mais barata.
      rotulo: "Autonomia por R$ 100 mil",
      texto: (v) => (v.price ? `${Math.round((v.rangeMin / v.price) * 100000)} km` : "—"),
      valor: (v) => (v.price ? Math.round((v.rangeMin / v.price) * 100000) : null),
      melhor: "maior",
    },
    // Ficha técnica (potência, bateria, recarga, 0 a 100, porta-malas).
    ...FICHA_CAMPOS.map((c) => ({
      rotulo: c.rotulo,
      texto: (v) => specText(v, c) || '<span class="spec-missing">não divulgado</span>',
      valor: (v) => (v.specs && v.specs[c.id]) || null,
      melhor: c.melhor,
    })),
    { rotulo: "Carroceria", texto: (v) => v.bodyType },
    { rotulo: "Categoria (Inmetro)", texto: (v) => v.category },
    { rotulo: "Versões", texto: (v) => String(v.versions.length) },
  ];

  function opcoes(selecionado, coluna) {
    // Não deixa escolher o mesmo modelo em duas colunas.
    const usados = ids.filter((id, i) => id && i !== coluna);
    return (
      '<option value="">— Escolher modelo —</option>' +
      VEHICLES.filter((v) => !usados.includes(v.id))
        .map((v) => `<option value="${v.id}" ${v.id === selecionado ? "selected" : ""}>${v.brand} ${v.model}</option>`)
        .join("")
    );
  }

  function cabecalho(id, coluna) {
    const v = id && getVehicleById(id);
    return `
      <th scope="col">
        <select class="select" data-coluna="${coluna}" aria-label="Modelo ${coluna + 1}">${opcoes(id, coluna)}</select>
        ${v ? `
          <a class="compare-car" href="veiculo.html?id=${encodeURIComponent(v.id)}" style="--glow:${v.color}">
            ${carImage(v)}
            <span class="compare-name">${v.brand} ${v.model}</span>
            <span class="compare-meta">${v.bodyType} · ${v.category}</span>
          </a>` : '<div class="compare-empty">Escolha um modelo para comparar</div>'}
      </th>`;
  }

  function linha(l) {
    const carros = ids.map((id) => id && getVehicleById(id));
    const valores = carros.map((v) => (v && l.valor ? l.valor(v) : null));
    const validos = valores.filter((n) => n);
    // Só destaca quando há pelo menos dois valores diferentes para comparar.
    let alvo = null;
    if (l.melhor && validos.length > 1 && new Set(validos).size > 1) {
      alvo = l.melhor === "maior" ? Math.max(...validos) : Math.min(...validos);
    }
    return `
      <tr>
        <th scope="row">${l.rotulo}</th>
        ${carros.map((v, i) => `<td class="${alvo !== null && valores[i] === alvo ? "best" : ""}"${i === 0 ? ` data-rotulo="${l.rotulo}"` : ""}>${v ? l.texto(v) : ""}</td>`).join("")}
      </tr>`;
  }

  function render() {
    root.innerHTML = `
      <div class="compare-wrap">
        <table class="compare">
          <thead>
            <tr>
              <td></td>
              ${ids.map(cabecalho).join("")}
            </tr>
          </thead>
          <tbody>${LINHAS.map(linha).join("")}</tbody>
        </table>
      </div>
      <p class="fine-print">Em azul, o melhor valor de cada linha. Autonomia e consumo: Inmetro (versão mais eficiente). Ficha técnica: versão indicada na página de cada modelo. Energia: carregando em casa a R$ 0,95 por kWh.</p>`;

    // Mantém a escolha na URL, para o link poder ser compartilhado.
    const escolhidos = ids.filter(Boolean);
    history.replaceState(null, "", escolhidos.length ? `comparar.html?ids=${escolhidos.join(",")}` : "comparar.html");
  }

  root.addEventListener("change", (e) => {
    const select = e.target.closest("[data-coluna]");
    if (!select) return;
    ids[Number(select.dataset.coluna)] = select.value || null;
    render();
  });

  render();
})();
