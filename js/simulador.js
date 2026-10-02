/**
 * Simulador de economia: elétrico × gasolina (index.html#simulador).
 * -------------------------------------------------
 * Conta simples, para dar ordem de grandeza:
 *   gasolina = km ÷ (km/l do carro atual) × preço do litro
 *   elétrico = km × (kWh/100 km do modelo) ÷ 100 × preço do kWh
 * O consumo do elétrico vem de bateria ÷ autonomia declarada (data.js).
 * Os valores iniciais abaixo são exemplos — o visitante troca pelos dele.
 */
(function () {
  const form = document.getElementById("simForm");
  if (!form) return;

  const PADRAO = { km: 1500, gasolina: 6.2, kmPorLitro: 11, kwh: 0.95 };

  const modelo = document.getElementById("simModelo");
  const km = document.getElementById("simKm");
  const kmValor = document.getElementById("simKmValor");
  const gasolina = document.getElementById("simGasolina");
  const kmPorLitro = document.getElementById("simKmL");
  const kwh = document.getElementById("simKwh");

  // Só entram os 100% elétricos (híbridos não têm consumo em kWh comparável).
  const eletricos = VEHICLES.filter((v) => consumptionKwh100(v));
  modelo.innerHTML = eletricos.map((v) => `<option value="${v.id}">${v.brand} ${v.model}</option>`).join("");

  // veiculo.html manda para cá com ?simular=<id> para já abrir no modelo certo.
  const pedido = new URLSearchParams(location.search).get("simular");
  if (pedido && eletricos.some((v) => v.id === pedido)) modelo.value = pedido;

  km.value = PADRAO.km;
  gasolina.value = PADRAO.gasolina.toFixed(2);
  kmPorLitro.value = PADRAO.kmPorLitro;
  kwh.value = PADRAO.kwh.toFixed(2);

  const reais = (n) => formatBRL(Math.round(n));
  const centavos = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const set = (id, texto) => { document.getElementById(id).textContent = texto; };

  function calcular() {
    const v = getVehicleById(modelo.value);
    const kmMes = Number(km.value) || 0;
    const precoGasolina = Number(gasolina.value) || 0;
    const rendimento = Number(kmPorLitro.value) || 0;
    const precoKwh = Number(kwh.value) || 0;
    const consumo = consumptionKwh100(v);

    const custoGasolina = rendimento > 0 ? (kmMes / rendimento) * precoGasolina : 0;
    const custoEletrico = ((kmMes * consumo) / 100) * precoKwh;
    const economiaMes = custoGasolina - custoEletrico;

    kmValor.textContent = kmMes.toLocaleString("pt-BR") + " km por mês";
    set("simAno", reais(Math.abs(economiaMes) * 12));
    set("simRotulo", economiaMes >= 0 ? "de economia por ano" : "a mais por ano");
    set("simMes", reais(economiaMes));
    set("sim5anos", reais(economiaMes * 60));
    set("simCustoGasolina", reais(custoGasolina));
    set("simCustoEletrico", reais(custoEletrico));
    set("simKmGasolina", rendimento > 0 ? centavos(precoGasolina / rendimento) + " por km" : "—");
    set("simKmEletrico", centavos((consumo / 100) * precoKwh) + " por km");
    set("simConsumo", `${v.brand} ${v.model}: ${consumo.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} kWh a cada 100 km (estimado)`);

    // Barras proporcionais ao custo mensal mais alto.
    const maior = Math.max(custoGasolina, custoEletrico, 1);
    document.getElementById("simBarGasolina").style.width = (custoGasolina / maior) * 100 + "%";
    document.getElementById("simBarEletrico").style.width = (custoEletrico / maior) * 100 + "%";

    document.getElementById("simLink").href = "veiculo.html?id=" + encodeURIComponent(v.id);
  }

  form.addEventListener("input", calcular);
  form.addEventListener("submit", (e) => e.preventDefault());
  calcular();
})();
