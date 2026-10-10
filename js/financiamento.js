/**
 * Simulador de financiamento (calculadora.html#financiamento).
 * -------------------------------------------------
 * Parcela pela tabela Price: parcela = valor × i ÷ (1 − (1 + i)^−n).
 * Juros iniciais: taxa média do Banco Central para veículos (DATA_INFO.juros).
 * Usa o modelo e a economia de combustível da calculadora de cima para mostrar
 * quanto a parcela pesa no mês depois de descontar o que se deixa de gastar com gasolina.
 * Não entram IOF, tarifas nem seguro do financiamento (o custo efetivo total, CET, é maior).
 */
(function () {
  const form = document.getElementById("finForm");
  if (!form) return;

  const PADRAO = { entrada: 20, prazo: 48, juros: (DATA_INFO.juros && DATA_INFO.juros.taxaMes) || 2 };
  const $ = (id) => document.getElementById(id);
  const preco = $("finPreco"), entrada = $("finEntrada"), prazo = $("finPrazo"), juros = $("finJuros");
  const modelo = $("simModelo");

  entrada.value = PADRAO.entrada;
  prazo.value = PADRAO.prazo;
  juros.value = PADRAO.juros.toFixed(2);
  if (DATA_INFO.juros) {
    $("finJurosNota").textContent = `Taxa média do Banco Central para financiamento de veículos (${DATA_INFO.juros.referencia}): ` +
      `${formatNum(DATA_INFO.juros.taxaMes, 2)}% ao mês, ou ${formatNum(DATA_INFO.juros.taxaAno, 1)}% ao ano. A do seu banco pode ser outra.`;
  }

  // O preço acompanha o modelo escolhido lá em cima, até o visitante digitar outro.
  let precoEditado = false;
  const precoDoModelo = () => { const v = getVehicleById(modelo.value); return v && v.price ? v.price : 0; };
  preco.value = precoDoModelo();
  preco.addEventListener("input", () => (precoEditado = true));
  modelo.addEventListener("change", () => { if (!precoEditado) preco.value = precoDoModelo(); calcular(); });
  // Mudanças na calculadora de cima (km, gasolina, energia) também mudam a conta.
  document.getElementById("simForm").addEventListener("input", () => calcular());

  const reais = (n) => formatBRL(Math.round(n));

  // Economia mensal de combustível, com os números da calculadora de cima.
  function economiaMensal() {
    const v = getVehicleById(modelo.value);
    const kmMes = Number($("simKm").value) || 0;
    const rendimento = Number($("simKmL").value) || 0;
    const gas = rendimento > 0 ? (kmMes / rendimento) * (Number($("simGasolina").value) || 0) : 0;
    const ele = ((kmMes * v.kwh100) / 100) * (Number($("simKwh").value) || 0);
    return gas - ele;
  }

  function calcular() {
    const valor = Number(preco.value) || 0;
    const pctEntrada = Math.min(Math.max(Number(entrada.value) || 0, 0), 100);
    const n = Number(prazo.value) || 1;
    const i = (Number(juros.value) || 0) / 100;
    const vEntrada = valor * pctEntrada / 100;
    const financiado = valor - vEntrada;
    const parcela = financiado <= 0 ? 0 : i > 0 ? (financiado * i) / (1 - Math.pow(1 + i, -n)) : financiado / n;
    const totalPago = vEntrada + parcela * n;
    const economia = economiaMensal();

    $("finEntradaValor").textContent = `${pctEntrada}% (${reais(vEntrada)})`;
    $("finParcela").textContent = reais(parcela);
    $("finRotulo").textContent = `por mês, em ${n} vezes`;
    $("finLinhas").innerHTML = [
      ["Entrada", reais(vEntrada)],
      ["Valor financiado", reais(financiado)],
      ["Total pago (entrada + parcelas)", reais(totalPago)],
      ["Só de juros", reais(totalPago - valor)],
    ].map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join("");
    $("finNoBolso").innerHTML = economia > 0
      ? `Descontando os <strong>${reais(economia)}</strong> por mês que você deixa de gastar com gasolina (calculadora acima), a parcela pesa <strong>${reais(Math.max(parcela - economia, 0))} por mês</strong> no seu bolso.`
      : "";
  }

  form.addEventListener("input", calcular);
  form.addEventListener("submit", (e) => e.preventDefault());
  calcular();
})();
