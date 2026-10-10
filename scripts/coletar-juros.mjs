/**
 * Busca a taxa média de juros do financiamento de veículos (pessoa física) no
 * Banco Central e grava dados/juros.json, usado pelo simulador de financiamento
 * da calculadora. Séries do SGS (sistema de séries do Banco Central):
 *   25471 — taxa média mensal (% ao mês), aquisição de veículos, pessoas físicas
 *   20749 — taxa média anual (% ao ano), mesma modalidade
 *
 * Uso: npm run juros   (uma vez por mês; o Banco Central publica com uns 2 meses de atraso)
 */
import fs from "node:fs";

const serie = async (n) => {
  const r = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${n}/dados/ultimos/1?formato=json`);
  if (!r.ok) throw new Error(`Banco Central não respondeu (série ${n}): ${r.status}`);
  const [ponto] = await r.json();
  return { data: ponto.data, valor: Number(ponto.valor) };
};

const mes = await serie(25471);
const ano = await serie(20749);
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const [, mm, aaaa] = mes.data.split("/");
const saida = {
  _leia: "Taxa média de juros do financiamento de veículos para pessoa física, do Banco Central (gerado por scripts/coletar-juros.mjs — não edite à mão).",
  taxaMes: mes.valor,
  taxaAno: ano.valor,
  referencia: `${MESES[Number(mm) - 1]}/${aaaa}`,
  fonte: "https://www3.bcb.gov.br/sgspub/ (séries 25471 e 20749)",
};
fs.writeFileSync("dados/juros.json", JSON.stringify(saida, null, 1) + "\n");
console.log(`Juros de veículos: ${mes.valor}% ao mês (${ano.valor}% ao ano), ${saida.referencia}`);
