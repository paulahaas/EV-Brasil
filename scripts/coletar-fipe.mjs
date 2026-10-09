/**
 * Coleta os valores da tabela FIPE (zero km e usados) de cada modelo.
 * -------------------------------------------------
 * Usa o site oficial da FIPE (veiculos.fipe.org.br). Para cada modelo de
 * dados/fipe-mapa.json, acha a versão, os anos-modelo e o valor de cada ano.
 * Grava dados/fipe.json, que o scripts/gerar-dados.mjs leva para o site.
 *
 * A FIPE bloqueia quem consulta rápido demais, então o script vai devagar
 * (uma consulta a cada poucos segundos) e espera quando recebe a página de
 * bloqueio. Leva uns 15 minutos. Rode uma vez por mês, depois do dia 1º.
 *
 * Uso: npm run fipe            (todos)
 *      npm run fipe -- byd-dolphin volvo-ex30   (só alguns)
 */
import fs from "node:fs";

const API = "https://veiculos.fipe.org.br/api/veiculos";
const PAUSA_MS = 3000;
const ESPERA_BLOQUEIO_MS = 90000;
const mapa = JSON.parse(fs.readFileSync("dados/fipe-mapa.json", "utf8")).modelos;
const SAIDA = "dados/fipe.json";
const anterior = fs.existsSync(SAIDA) ? JSON.parse(fs.readFileSync(SAIDA, "utf8")) : { modelos: {} };

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
async function consultar(rota, corpo) {
  for (let tentativa = 1; tentativa <= 6; tentativa++) {
    await dormir(PAUSA_MS);
    try {
      const r = await fetch(`${API}/${rota}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Referer: "https://veiculos.fipe.org.br/", "User-Agent": "Mozilla/5.0" },
        body: JSON.stringify(corpo),
      });
      const texto = await r.text();
      if (texto.trimStart().startsWith("<")) throw new Error("bloqueio");
      return JSON.parse(texto);
    } catch (e) {
      console.log(`  (${rota}: ${e.message}; esperando ${ESPERA_BLOQUEIO_MS / 1000}s, tentativa ${tentativa})`);
      await dormir(ESPERA_BLOQUEIO_MS);
    }
  }
  throw new Error(`FIPE não respondeu: ${rota}`);
}

const tabelas = await consultar("ConsultarTabelaDeReferencia", {});
const tabela = tabelas[0];
const mesRef = tabela.Mes.trim();
const base = { codigoTabelaReferencia: tabela.Codigo, codigoTipoVeiculo: 1 };
console.log(`Tabela FIPE: ${mesRef}`);

const marcas = await consultar("ConsultarMarcas", base);
const modelosDaMarca = {};
const pedidos = process.argv.slice(2);
const ids = Object.keys(mapa).filter((id) => !pedidos.length || pedidos.includes(id));
const resultado = { ...anterior.modelos };

for (const id of ids) {
  const { marca, versao } = mapa[id];
  const m = marcas.find((x) => x.Label.toLowerCase() === marca.toLowerCase());
  if (!m) { console.log(`${id}: marca "${marca}" não existe na FIPE`); continue; }
  modelosDaMarca[m.Value] ||= (await consultar("ConsultarModelos", { ...base, codigoMarca: Number(m.Value) })).Modelos;
  const modelo = modelosDaMarca[m.Value].find((x) => new RegExp(versao, "i").test(x.Label));
  if (!modelo) { console.log(`${id}: versão não encontrada na FIPE`); delete resultado[id]; continue; }
  const anos = await consultar("ConsultarAnoModelo", { ...base, codigoMarca: Number(m.Value), codigoModelo: modelo.Value });
  const valores = [];
  for (const a of anos) {
    const [ano, combustivel] = a.Value.split("-");
    const v = await consultar("ConsultarValorComTodosParametros", {
      ...base, codigoMarca: Number(m.Value), codigoModelo: modelo.Value,
      anoModelo: Number(ano), codigoTipoCombustivel: Number(combustivel), tipoConsulta: "tradicional",
    });
    if (!v || !v.Valor) continue;
    valores.push({
      ano: ano === "32000" ? "0km" : ano,
      valor: Number(v.Valor.replace(/[^\d,]/g, "").replace(",", ".")),
      codigoFipe: v.CodigoFipe,
    });
  }
  resultado[id] = { versao: modelo.Label.trim(), valores };
  console.log(`${id}: ${modelo.Label.trim()} — ${valores.map((x) => `${x.ano} R$ ${x.valor.toLocaleString("pt-BR")}`).join(" · ")}`);
}

fs.writeFileSync(SAIDA, JSON.stringify({
  _leia: "Valores da tabela FIPE (gerado por scripts/coletar-fipe.mjs — não edite à mão). '0km' = valor de zero quilômetro; os demais, por ano-modelo.",
  referencia: mesRef,
  fonte: "https://veiculos.fipe.org.br/",
  modelos: resultado,
}, null, 1) + "\n");
console.log(`\n${Object.keys(resultado).length} modelos em ${SAIDA} (tabela ${mesRef})`);
