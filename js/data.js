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
