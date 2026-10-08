/**
 * Custo total em 5 anos: elétrico × gasolina (calculadora.html#custo-total).
 * -------------------------------------------------
 * Soma, para cada carro: compra + energia (ou combustível) + IPVA + seguro + revisões.
 * - Energia e combustível usam o modelo, os km e os preços da calculadora de cima.
 * - IPVA: regra do estado (IPVA, em js/catalogo.js, vindo de dados/ipva-2026.json).
 * - IPVA e seguro são calculados sobre um valor que cai 10% ao ano (aproximação
 *   da tabela FIPE). Não entram revenda, financiamento nem instalação de carregador.
 */
(function () {
  const form = document.getElementById("tcoForm");
  if (!form || typeof IPVA === "undefined") return;

  const ANOS = 5;
  const DEPRECIACAO = 0.1;
  const PADRAO = { uf: "SP", seguro: 4, revEv: 900, revGas: 1800 };

  const $ = (id) => document.getElementById(id);
  const uf = $("tcoUf"), precoEv = $("tcoPrecoEv"), precoGas = $("tcoPrecoGas");
  const seguro = $("tcoSeguro"), revEv = $("tcoRevEv"), revGas = $("tcoRevGas");
  const modelo = $("simModelo");

  uf.innerHTML = Object.entries(IPVA)
    .sort((a, b) => a[1].nome.localeCompare(b[1].nome, "pt-BR"))
    .map(([sigla, e]) => `<option value="${sigla}">${e.nome}</option>`)
    .join("");

  // O estado escolhido fica salvo neste navegador (comodidade; funciona sem isso).
  let ufSalva = null;
  try { ufSalva = localStorage.getItem("ev-uf"); } catch (e) { /* sem armazenamento */ }
  uf.value = IPVA[ufSalva] ? ufSalva : PADRAO.uf;
  seguro.value = PADRAO.seguro;
  revEv.value = PADRAO.revEv;
  revGas.value = PADRAO.revGas;

  // O preço do elétrico acompanha o modelo escolhido; o do carro a gasolina
  // começa igual e passa a ser do visitante assim que ele mexer.
  let gasEditado = false;
  function precoDoModelo() {
    const v = getVehicleById(modelo.value);
    precoEv.value = v && v.price ? v.price : "";
    if (!gasEditado) precoGas.value = precoEv.value;
  }
  precoGas.addEventListener("input", () => { gasEditado = true; });

  const reais = (n) => formatBRL(Math.round(n));
  const pct = (n) => `${formatNum(n, Number.isInteger(n) ? 0 : Number.isInteger(n * 10) ? 1 : 2)}%`;

  // IPVA de cada ano para o elétrico, seguindo a regra do estado.
  function aliquotaEv(e, valorCompra, ano) {
    if (e.teto_valor && valorCompra > e.teto_valor) return e.gasolina;
    if (e.anos_isento && ano <= e.anos_isento) return 0;
    return e.eletrico;
  }

  function calcular() {
    const e = IPVA[uf.value];
    const v = getVehicleById(modelo.value);
    const pEv = Number(precoEv.value) || 0;
    const pGas = Number(precoGas.value) || 0;
    const seg = (Number(seguro.value) || 0) / 100;

    // Energia e combustível: mesma conta da calculadora de cima, por 5 anos.
    const kmMes = Number($("simKm").value) || 0;
    const kmL = Number($("simKmL").value) || 0;
    const energia = ((kmMes * v.kwh100) / 100) * (Number($("simKwh").value) || 0) * 12 * ANOS;
    const combustivel = kmL > 0 ? (kmMes / kmL) * (Number($("simGasolina").value) || 0) * 12 * ANOS : 0;

    let ipvaEv = 0, ipvaGas = 0, segEv = 0, segGas = 0;
    for (let ano = 1; ano <= ANOS; ano++) {
      const fator = Math.pow(1 - DEPRECIACAO, ano - 1);
      ipvaEv += pEv * fator * aliquotaEv(e, pEv, ano) / 100;
      ipvaGas += pGas * fator * e.gasolina / 100;
      segEv += pEv * fator * seg;
      segGas += pGas * fator * seg;
    }
    const manEv = (Number(revEv.value) || 0) * ANOS;
    const manGas = (Number(revGas.value) || 0) * ANOS;

    const linhas = [
      ["Compra", pEv, pGas],
      ["Energia / combustível", energia, combustivel],
      [`IPVA (${uf.value})`, ipvaEv, ipvaGas],
      ["Seguro", segEv, segGas],
      ["Revisões", manEv, manGas],
    ];
    const totEv = linhas.reduce((s, l) => s + l[1], 0);
    const totGas = linhas.reduce((s, l) => s + l[2], 0);

    $("tcoLinhas").innerHTML =
      linhas.map(([nome, a, b]) => `<tr><td>${nome}</td><td>${reais(a)}</td><td>${reais(b)}</td></tr>`).join("") +
      `<tr class="tco-total"><td>Total</td><td>${reais(totEv)}</td><td>${reais(totGas)}</td></tr>`;

    const dif = totGas - totEv;
    if (!pEv) {
      $("tcoDif").textContent = "—";
      $("tcoRotulo").textContent = "Este modelo não tem preço divulgado: informe um valor ao lado.";
    } else {
      $("tcoDif").textContent = reais(Math.abs(dif));
      $("tcoRotulo").textContent = dif >= 0 ? "a menos com o elétrico, em 5 anos" : "a mais com o elétrico, em 5 anos";
    }
    $("tcoTotEv").textContent = reais(totEv);
    $("tcoTotGas").textContent = reais(totGas);
    const maior = Math.max(totEv, totGas, 1);
    $("tcoBarEv").style.width = (totEv / maior) * 100 + "%";
    $("tcoBarGas").style.width = (totGas / maior) * 100 + "%";

    $("tcoUfNota").textContent = `IPVA em ${e.nome}: ${pct(e.gasolina)} para carro a gasolina. Elétrico: ${e.nota.charAt(0).toLowerCase() + e.nota.slice(1)}.`;
    const f = DATA_INFO.ipva.fontes;
    $("tcoNotas").innerHTML =
      `IPVA e seguro calculados sobre um valor que cai 10% ao ano. Não inclui a revenda do carro, financiamento nem a instalação do carregador. ` +
      `IPVA: regras de 2026 (<a class="text-link" href="${f.eletrico}" target="_blank" rel="noopener">elétricos</a>, ` +
      `<a class="text-link" href="${f.gasolina[0]}" target="_blank" rel="noopener">alíquotas normais</a>), coletadas em ${DATA_INFO.ipva.coleta}; confirme na Sefaz do seu estado.`;
  }

  modelo.addEventListener("change", () => { precoDoModelo(); calcular(); });
  uf.addEventListener("change", () => {
    try { localStorage.setItem("ev-uf", uf.value); } catch (e) { /* sem armazenamento */ }
  });
  // Qualquer mudança nas duas calculadoras refaz a conta.
  document.getElementById("simForm").addEventListener("input", calcular);
  form.addEventListener("input", calcular);
  form.addEventListener("submit", (ev) => ev.preventDefault());

  precoDoModelo();
  calcular();
})();
