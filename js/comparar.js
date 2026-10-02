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

  const num = (decimais) => (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: decimais });

  // Linhas da tabela. `valor` é o número usado para achar o melhor da linha
  // e `melhor` diz se ganha o maior ou o menor (sem `melhor`, ninguém é destacado).
  const LINHAS = [
    { rotulo: "Preço", texto: (v) => formatBRL(v.priceBRL), valor: (v) => v.priceBRL, melhor: "menor" },
    { rotulo: "Autonomia", texto: (v) => v.specs.autonomia, valor: rangeKm, melhor: "maior" },
    { rotulo: "Bateria", texto: (v) => v.specs.bateria },
    {
      rotulo: "Consumo estimado",
      texto: (v) => (consumptionKwh100(v) ? num(1)(consumptionKwh100(v)) + " kWh/100 km" : "—"),
      // Arredonda como na tela, para empates aparecerem como empates.
      valor: (v) => (consumptionKwh100(v) ? Math.round(consumptionKwh100(v) * 10) / 10 : null),
      melhor: "menor",
    },
    { rotulo: "Potência", texto: (v) => v.specs.potencia, valor: (v) => firstNumber(v.specs.potencia), melhor: "maior" },
    { rotulo: "Torque", texto: (v) => v.specs.torque, valor: (v) => firstNumber(v.specs.torque), melhor: "maior" },
    { rotulo: "0–100 km/h", texto: (v) => num(1)(accelSeconds(v)) + " s", valor: accelSeconds, melhor: "menor" },
    { rotulo: "Velocidade máxima", texto: (v) => v.specs.velocidadeMax, valor: (v) => firstNumber(v.specs.velocidadeMax), melhor: "maior" },
    { rotulo: "Tração", texto: (v) => v.specs.tracao },
    { rotulo: "Recarga (AC)", texto: (v) => v.specs.recargaAC },
    { rotulo: "Recarga rápida (DC)", texto: (v) => v.specs.recargaDC, valor: (v) => firstNumber(v.specs.recargaDC), melhor: "maior" },
    { rotulo: "Lugares", texto: (v) => v.specs.lugares },
    { rotulo: "Porta-malas", texto: (v) => v.specs.portaMalas, valor: (v) => firstNumber(v.specs.portaMalas), melhor: "maior" },
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
            <span class="compare-meta">${v.bodyType} · ${v.segment}</span>
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
        ${carros.map((v, i) => `<td class="${alvo !== null && valores[i] === alvo ? "best" : ""}">${v ? l.texto(v) : ""}</td>`).join("")}
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
      <p class="form-hint">Em azul, o melhor valor de cada linha. Consumo estimado = bateria ÷ autonomia declarada.</p>`;

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
