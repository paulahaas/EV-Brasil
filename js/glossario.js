/**
 * ARQUIVO GERADO por scripts/gerar-glossario.mjs (dados/glossario.json) — não edite à mão.
 * Nos guias, transforma em link a primeira vez que cada termo aparece no texto,
 * com a explicação curta ao passar o mouse e o glossário completo ao clicar.
 */
const GLOSSARIO = [
 {
  "id": "kwh",
  "termo": "kWh (quilowatt-hora)",
  "curto": "Quantidade de energia: o tamanho da bateria e o que você paga na conta de luz.",
  "padroes": [
   "\\bkWh\\b(?!/)"
  ]
 },
 {
  "id": "kw",
  "termo": "kW (quilowatt)",
  "curto": "Potência: a velocidade com que a energia entra (recarga) ou sai (motor).",
  "padroes": [
   "\\bkW\\b"
  ]
 },
 {
  "id": "consumo",
  "termo": "Consumo (kWh/100 km)",
  "curto": "Quanta energia o carro gasta para rodar 100 km: é o \"km por litro\" do elétrico.",
  "padroes": [
   "kWh/100 ?km",
   "kWh a cada 100 km"
  ]
 },
 {
  "id": "autonomia",
  "termo": "Autonomia",
  "curto": "Quantos quilômetros o carro roda com a bateria cheia.",
  "padroes": [
   "\\bautonomia\\b"
  ]
 },
 {
  "id": "inmetro",
  "termo": "Inmetro e PBE Veicular",
  "curto": "Programa do governo que mede consumo e autonomia de todos os carros do mesmo jeito.",
  "padroes": [
   "\\bPBE\\b",
   "\\bInmetro\\b"
  ]
 },
 {
  "id": "bateria-lfp-nmc",
  "termo": "Bateria LFP e NMC",
  "curto": "Os dois tipos de bateria mais comuns: LFP dura mais e é mais barata; NMC guarda mais energia.",
  "padroes": [
   "\\bLFP\\b",
   "\\bNMC\\b"
  ]
 },
 {
  "id": "saude-bateria",
  "termo": "Saúde da bateria (SoH)",
  "curto": "Quanto da capacidade original a bateria ainda tem, em %.",
  "padroes": [
   "\\bSoH\\b",
   "saúde da bateria"
  ]
 },
 {
  "id": "recarga-lenta",
  "termo": "Recarga lenta (AC)",
  "curto": "Recarga em corrente alternada, de 2 a 22 kW: em casa, no shopping, no estacionamento.",
  "padroes": [
   "recarga lenta",
   "\\(AC\\)"
  ]
 },
 {
  "id": "recarga-rapida",
  "termo": "Recarga rápida (DC)",
  "curto": "Recarga em corrente contínua, de 40 a mais de 300 kW: leva de 20 a 50 minutos de 10% a 80%.",
  "padroes": [
   "recarga rápida",
   "\\(DC\\)"
  ]
 },
 {
  "id": "curva-recarga",
  "termo": "Curva de recarga (e a regra dos 80%)",
  "curto": "A recarga rápida desacelera muito depois de 80% para proteger a bateria.",
  "padroes": [
   "\\b80%"
  ]
 },
 {
  "id": "carregador-bordo",
  "termo": "Carregador de bordo",
  "curto": "Peça dentro do carro que converte a energia da tomada; define a velocidade máxima da recarga lenta.",
  "padroes": [
   "carregador de bordo"
  ]
 },
 {
  "id": "wallbox",
  "termo": "Wallbox",
  "curto": "Carregador de parede para casa, de 7 a 11 kW, bem mais rápido que a tomada comum.",
  "padroes": [
   "\\bwallbox(es)?\\b"
  ]
 },
 {
  "id": "eletroposto",
  "termo": "Eletroposto",
  "curto": "Ponto de recarga público ou semipúblico, lento ou rápido.",
  "padroes": [
   "\\beletropostos?\\b"
  ]
 },
 {
  "id": "conectores",
  "termo": "Tipo 2, CCS2 e GB/T",
  "curto": "Os plugues de recarga: Tipo 2 (lenta) e CCS2 (rápida) são o padrão no Brasil.",
  "padroes": [
   "\\bCCS2\\b",
   "\\bTipo 2\\b",
   "\\bGB/T\\b"
  ]
 },
 {
  "id": "taxa-ociosidade",
  "termo": "Taxa de ociosidade",
  "curto": "Cobrança por minuto quando o carro continua parado no carregador depois de terminar.",
  "padroes": [
   "taxa de ociosidade"
  ]
 },
 {
  "id": "regeneracao",
  "termo": "Frenagem regenerativa",
  "curto": "Ao frear ou tirar o pé, o motor vira gerador e devolve energia para a bateria.",
  "padroes": [
   "regenera(ção|tiva)",
   "one[- ]pedal"
  ]
 },
 {
  "id": "pre-condicionamento",
  "termo": "Pré-condicionamento",
  "curto": "Aquecer ou resfriar bateria e cabine antes de sair, ainda ligado na tomada.",
  "padroes": [
   "pré-condicionamento"
  ]
 },
 {
  "id": "v2l",
  "termo": "V2L",
  "curto": "Usar a bateria do carro como tomada para ligar aparelhos.",
  "padroes": [
   "\\bV2L\\b"
  ]
 },
 {
  "id": "ota",
  "termo": "Atualização remota (OTA)",
  "curto": "O carro recebe atualizações de software pela internet, como um celular.",
  "padroes": [
   "\\bOTA\\b"
  ]
 },
 {
  "id": "eletrico-hibrido",
  "termo": "Elétrico, híbrido e híbrido plug-in",
  "curto": "O EV Brasil só mostra carros 100% elétricos, que não têm motor a combustão.",
  "padroes": [
   "híbrido plug-in",
   "\\bPHEV\\b",
   "100% elétric[oa]s?"
  ]
 },
 {
  "id": "fipe",
  "termo": "Tabela FIPE",
  "curto": "Preço médio de mercado de cada carro, novo e usado, atualizado todo mês.",
  "padroes": [
   "\\bFIPE\\b"
  ]
 },
 {
  "id": "ipva",
  "termo": "IPVA do elétrico",
  "curto": "Imposto anual do carro; vários estados dão isenção ou desconto para o elétrico.",
  "padroes": [
   "\\bIPVA\\b"
  ]
 },
 {
  "id": "garantia-bateria",
  "termo": "Garantia da bateria",
  "curto": "Garantia separada da bateria, em anos e km, normalmente maior que a do carro.",
  "padroes": [
   "garantia da bateria"
  ]
 }
];

(function () {
  const area = document.querySelector(".prose");
  if (!area || area.classList.contains("glossario")) return;
  const pular = "a, h1, h2, h3, h4, th, .fine-print, .guide-sources, table";
  for (const t of GLOSSARIO) {
    const re = new RegExp(t.padroes.join("|"), "i");
    const andar = document.createTreeWalker(area, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest(pular) || !re.test(n.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT),
    });
    const no = andar.nextNode();
    if (!no) continue;
    const m = no.nodeValue.match(re);
    const depois = no.splitText(m.index);
    depois.splitText(m[0].length);
    const a = document.createElement("a");
    a.className = "termo";
    a.href = "glossario.html#" + t.id;
    a.title = t.curto;
    a.textContent = depois.nodeValue;
    depois.replaceWith(a);
  }
})();
