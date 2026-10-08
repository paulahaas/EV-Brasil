/**
 * Funções auxiliares do catálogo — EV Brasil
 * -------------------------------------------------
 * Os dados (VEHICLES e DATA_INFO) vêm de js/catalogo.js, gerado por
 * scripts/gerar-dados.mjs a partir dos arquivos em dados/. Este arquivo
 * precisa ser carregado depois de js/catalogo.js.
 */

/** Marcas disponíveis (para filtros). */
const BRANDS = [...new Set(VEHICLES.map((v) => v.brand))].sort((a, b) => a.localeCompare(b, "pt-BR"));

/** Tipos de carroceria (para filtros), na ordem em que aparecem nos chips. */
const BODY_TYPES = ["Hatch", "Sedã", "SUV", "Perua", "Esportivo", "Picape"]
  .filter((t) => VEHICLES.some((v) => v.bodyType === t));

/** Formata um número em Real brasileiro (R$), sem centavos. */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

/** Número com vírgula decimal (ex.: 16,9). */
function formatNum(value, casas = 1) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

/** Busca um veículo pelo id. */
function getVehicleById(id) {
  return VEHICLES.find((v) => v.id === id) || null;
}

/** Autonomia do Inmetro (a melhor versão). */
function rangeKm(v) {
  return v.rangeMax;
}

/** Consumo do Inmetro em kWh a cada 100 km (a versão mais eficiente). */
function consumptionKwh100(v) {
  return v.kwh100;
}

/** Autonomia como texto: "372 km" ou "272–330 km" quando as versões variam. */
function rangeText(v) {
  return v.rangeMin === v.rangeMax ? `${v.rangeMax} km` : `${v.rangeMin}–${v.rangeMax} km`;
}

/** Preço como texto, ou aviso quando a marca não divulga. */
function priceText(v) {
  return v.price ? formatBRL(v.price) : "Preço não divulgado";
}

/** Aviso curto sobre a origem do preço (vazio quando é do site oficial). */
function priceNoteShort(v) {
  if (!v.price) return "";
  return v.priceKind === "imprensa" ? "Valor publicado na imprensa" : "";
}

/** Primeiro número de um texto: "1.100 km" -> 1100, "44,9" -> 44.9. */
function firstNumber(text) {
  const m = String(text).replace(/\./g, "").match(/\d+(,\d+)?/);
  return m ? parseFloat(m[0].replace(",", ".")) : 0;
}

/**
 * Nível de consumo entre os elétricos do catálogo (1 = muito baixo ... 5 = muito alto).
 * Comparação do EV Brasil, feita em quintis do consumo do Inmetro — não é o selo
 * oficial do Inmetro (que dá "A" a quase todos os elétricos).
 */
const NIVEIS_CONSUMO = ["Muito baixo", "Baixo", "Médio", "Alto", "Muito alto"];
const CONSUMOS_ORDENADOS = VEHICLES.map((v) => v.kwh100).sort((a, b) => a - b);
function consumoNivel(v) {
  const abaixo = CONSUMOS_ORDENADOS.filter((k) => k < v.kwh100).length;
  const n = Math.min(5, Math.floor((abaixo / CONSUMOS_ORDENADOS.length) * 5) + 1);
  return { n, texto: NIVEIS_CONSUMO[n - 1] };
}

/** Medidor de 5 barrinhas para o nível de consumo (o texto carrega o significado). */
function consumoMeter(v) {
  const { n, texto } = consumoNivel(v);
  const barras = [1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("");
  return `<span class="meter meter-${n}" title="Consumo ${texto.toLowerCase()} entre os elétricos (${formatNum(v.kwh100)} kWh/100 km)"><span class="meter-bars" aria-hidden="true">${barras}</span>Consumo ${texto.toLowerCase()}</span>`;
}

/**
 * Ficha técnica (dados/fichas.json): linhas prontas para mostrar.
 * Campo vazio = a marca não divulga (ou não encontramos fonte confiável).
 */
const FICHA_CAMPOS = [
  { id: "cv", rotulo: "Potência", fmt: (n) => `${formatNum(n, n % 1 ? 1 : 0)} cv`, melhor: "maior" },
  { id: "kwh", rotulo: "Bateria", fmt: (n) => `${formatNum(n, n % 1 ? 1 : 0)} kWh`, melhor: "maior" },
  { id: "dcKw", rotulo: "Recarga rápida (DC)", fmt: (n) => `até ${formatNum(n, 0)} kW`, melhor: "maior" },
  { id: "acKw", rotulo: "Recarga em casa (AC)", fmt: (n) => `até ${formatNum(n, n % 1 ? 1 : 0)} kW`, melhor: "maior" },
  { id: "s0100", rotulo: "0 a 100 km/h", fmt: (n) => `${formatNum(n, 1)} s`, melhor: "menor" },
  { id: "trunkL", rotulo: "Porta-malas", fmt: (n) => `${formatNum(n, 0)} litros`, melhor: "maior" },
];
function specText(v, campo) {
  const n = v.specs && v.specs[campo.id];
  return n === null || n === undefined ? null : campo.fmt(n);
}
