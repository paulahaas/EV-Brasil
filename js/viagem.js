/**
 * Planejador de viagem (viagem.html): quantas paradas para recarga, quanto tempo e quanto custa.
 * -------------------------------------------------
 * Conta, para a versão escolhida:
 *   autonomia na estrada = autonomia do Inmetro × % escolhida
 *   1º trecho: da carga de saída até 10% de bateria
 *   cada parada: recarga de 10% a 80% (faixa em que a recarga rápida é mais veloz)
 *   energia de cada parada = km devolvidos × consumo do Inmetro corrigido para a estrada
 *   tempo de cada parada = essa energia ÷ (potência média de recarga)
 *   potência média = menor entre o carro e o carregador × 0,65 (a recarga desacelera
 *   conforme a bateria enche; o pico só vale por alguns minutos)
 * Tudo é estimativa: relevo, clima, velocidade e fila no posto mudam o resultado.
 */
(function () {
  mountChrome("viagem");

  const form = document.getElementById("tripForm");
  if (!form) return;

  const RESERVA = 10, ATE = 80, FATOR_CURVA = 0.65;
  // Distâncias aproximadas por rodovia (rota mais comum).
  const ROTAS = [
    ["", "Digitar a distância"],
    ["430", "São Paulo – Rio de Janeiro (cerca de 430 km)"],
    ["410", "São Paulo – Curitiba (cerca de 410 km)"],
    ["585", "São Paulo – Belo Horizonte (cerca de 585 km)"],
    ["440", "Rio de Janeiro – Belo Horizonte (cerca de 440 km)"],
    ["470", "Porto Alegre – Florianópolis (cerca de 470 km)"],
    ["210", "Brasília – Goiânia (cerca de 210 km)"],
    ["800", "Recife – Salvador (cerca de 800 km)"],
  ];
  const PADRAO = { km: 430, carga: 100, estrada: 85, posto: "100", preco: 2.2, modelo: "byd-dolphin" };

  const $ = (id) => document.getElementById(id);
  const modelo = $("tripModelo"), versao = $("tripVersao"), rota = $("tripRota"), km = $("tripKm");
  const carga = $("tripCarga"), estrada = $("tripEstrada"), posto = $("tripPosto"), preco = $("tripPreco");

  modelo.innerHTML = VEHICLES.map((v) => `<option value="${v.id}">${v.brand} ${v.model}</option>`).join("");
  rota.innerHTML = ROTAS.map(([d, n]) => `<option value="${d}">${n}</option>`).join("");
  const pedido = new URLSearchParams(location.search).get("modelo");
  modelo.value = getVehicleById(pedido) ? pedido : PADRAO.modelo;
  km.value = PADRAO.km; rota.value = String(PADRAO.km);
  carga.value = PADRAO.carga; estrada.value = PADRAO.estrada; posto.value = PADRAO.posto; preco.value = PADRAO.preco.toFixed(2);

  // Versões do modelo, da maior autonomia para a menor.
  function versoes() {
    const v = getVehicleById(modelo.value);
    versao.innerHTML = [...v.versions].sort((a, b) => b.rangeKm - a.rangeKm)
      .map((x, i) => `<option value="${i}">${escapeHtml(x.name)} · ${x.rangeKm} km</option>`).join("");
  }
  const versaoEscolhida = () => {
    const v = getVehicleById(modelo.value);
    return [...v.versions].sort((a, b) => b.rangeKm - a.rangeKm)[Number(versao.value) || 0];
  };

  const minutos = (h) => {
    const m = Math.round(h * 60 / 5) * 5;
    return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ""}`;
  };
  const set = (id, t) => { $(id).textContent = t; };

  function calcular() {
    const v = getVehicleById(modelo.value);
    const ver = versaoEscolhida();
    const distancia = Number(km.value) || 0;
    const inicio = Math.min(100, Math.max(RESERVA + 5, Number(carga.value) || 100));
    const autonomia = ver.rangeKm * (Number(estrada.value) || 85) / 100;
    const kmPorPct = autonomia / 100;
    const primeiro = (inicio - RESERVA) * kmPorPct;
    const porParada = (ATE - RESERVA) * kmPorPct;
    const paradas = distancia <= primeiro ? 0 : Math.ceil((distancia - primeiro) / porParada);
    const restante = paradas === 0 ? distancia : distancia - primeiro - (paradas - 1) * porParada;
    const chegada = (paradas === 0 ? inicio : ATE) - restante / kmPorPct;

    // Energia de cada parada: os km que ela devolve × o consumo da versão (Inmetro),
    // corrigido para a estrada na mesma proporção da autonomia.
    const consumoEstrada = ver.kwh100 / ((Number(estrada.value) || 85) / 100);
    const energiaParada = (porParada * consumoEstrada) / 100;
    const dc = v.specs && v.specs.dcKw;
    const potencia = dc ? Math.min(dc, Number(posto.value)) * FATOR_CURVA : null;
    const hParada = potencia ? energiaParada / potencia : null;

    set("tripKmValor", `${distancia.toLocaleString("pt-BR")} km`);
    set("tripParadas", paradas === 0 ? "Sem paradas" : `${paradas} ${paradas === 1 ? "parada" : "paradas"}`);
    set("tripRotulo", paradas === 0
      ? (chegada >= 20
        ? `Dá para ir direto com o ${v.brand} ${v.model}, chegando com folga.`
        : `Dá para ir direto com o ${v.brand} ${v.model}, mas chegando com pouca bateria: uma parada curta dá mais segurança.`)
      : `para recarregar no caminho, com o ${v.brand} ${v.model}.`);
    set("tripTempoParada", paradas && hParada ? `~${minutos(hParada)}` : "—");
    set("tripTempoTotal", paradas && hParada ? `~${minutos(hParada * paradas)}` : paradas ? "—" : "0 min");
    set("tripCusto", paradas ? formatBRL(Math.round(energiaParada * paradas * (Number(preco.value) || 0))) : "R$ 0");
    set("tripChegada", `${Math.max(0, Math.round(chegada))}%`);

    // Trajeto desenhado: saída, paradas e chegada.
    const pontos = Array.from({ length: paradas }, (_, i) => primeiro + i * porParada);
    $("tripMapa").innerHTML = `
      <div class="trip-line"></div>
      <span class="trip-dot trip-start" style="left:0%"></span>
      ${pontos.map((p) => `<span class="trip-dot trip-stop" style="left:${(p / distancia) * 100}%"><em>${Math.round(p)} km</em></span>`).join("")}
      <span class="trip-dot trip-end" style="left:100%"></span>
      <div class="trip-ends"><span>Saída · ${inicio}%</span><span>Chegada · ${distancia.toLocaleString("pt-BR")} km</span></div>`;

    const notas = [
      `Autonomia considerada: ${Math.round(autonomia)} km na estrada (${ver.rangeKm} km do Inmetro × ${estrada.value}%).`,
      `Cada parada recarrega de ${RESERVA}% a ${ATE}% (cerca de ${formatNum(energiaParada, 0)} kWh).`,
    ];
    if (!dc) notas.push("A marca não divulga a potência de recarga rápida deste modelo, então não estimamos o tempo das paradas.");
    else if (Number(posto.value) > dc) notas.push(`Este carro aceita no máximo ${dc} kW: um carregador mais forte não acelera a recarga.`);
    notas.push("Confira os eletropostos do caminho num app de recarga antes de sair.");
    set("tripNotas", notas.join(" "));
    $("tripLink").href = modelUrl(v);
  }

  modelo.addEventListener("change", () => { versoes(); calcular(); });
  rota.addEventListener("change", () => { if (rota.value) km.value = rota.value; calcular(); });
  km.addEventListener("input", () => { rota.value = ROTAS.some(([d]) => d === km.value) ? km.value : ""; });
  form.addEventListener("input", calcular);
  form.addEventListener("change", calcular);
  form.addEventListener("submit", (e) => e.preventDefault());
  versoes();
  calcular();
})();
