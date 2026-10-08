/**
 * Rankings (rankings.html) — gerados a partir do catálogo, sem nenhum ajuste manual.
 * Para mudar um ranking, mude o critério aqui; os dados vêm de js/catalogo.js.
 */
(function () {
  mountChrome("rankings");

  const comPreco = VEHICLES.filter((v) => v.price);
  // Quando o critério cruza preço e autonomia, usa a autonomia da versão de entrada
  // (a mais barata costuma ter a menor bateria), para não somar o preço de uma versão
  // com a autonomia de outra.
  const kmPor100mil = (v) => Math.round((v.rangeMin / v.price) * 100000);

  const RANKINGS = [
    {
      id: "baratos",
      titulo: "Mais baratos",
      criterio: "Menor preço \"a partir de\". Modelos sem preço divulgado ficam de fora.",
      lista: [...comPreco].sort((a, b) => a.price - b.price),
      valor: (v) => formatBRL(v.price),
    },
    {
      id: "autonomia",
      titulo: "Maior autonomia",
      criterio: "Autonomia medida pelo Inmetro, na versão que roda mais.",
      lista: [...VEHICLES].sort((a, b) => b.rangeMax - a.rangeMax),
      valor: (v) => `${v.rangeMax} km`,
    },
    {
      id: "consumo",
      titulo: "Gastam menos energia",
      criterio: "Menor consumo medido pelo Inmetro, em kWh a cada 100 km. Quanto menor, mais barato rodar.",
      lista: [...VEHICLES].sort((a, b) => a.kwh100 - b.kwh100),
      valor: (v) => `${formatNum(v.kwh100)} kWh/100 km`,
    },
    {
      id: "custo-beneficio",
      titulo: "Mais autonomia pelo preço",
      criterio: "Quilômetros de autonomia (Inmetro) para cada R$ 100 mil do preço \"a partir de\", considerando a autonomia da versão de entrada.",
      lista: [...comPreco].sort((a, b) => kmPor100mil(b) - kmPor100mil(a)),
      valor: (v) => `${kmPor100mil(v)} km por R$ 100 mil`,
    },
    {
      id: "ate-200-mil",
      titulo: "Maior autonomia até R$ 200 mil",
      criterio: "Entre os modelos com preço \"a partir de\" de até R$ 200 mil, os que rodam mais segundo o Inmetro na versão de entrada.",
      lista: comPreco.filter((v) => v.price <= 200000).sort((a, b) => b.rangeMin - a.rangeMin),
      valor: (v) => `${v.rangeMin} km`,
    },
    {
      id: "suvs-familia",
      titulo: "SUVs com maior autonomia até R$ 350 mil",
      criterio: "SUVs com preço \"a partir de\" de até R$ 350 mil, ordenados pela autonomia do Inmetro na versão de entrada.",
      lista: comPreco.filter((v) => v.bodyType === "SUV" && v.price <= 350000).sort((a, b) => b.rangeMin - a.rangeMin),
      valor: (v) => `${v.rangeMin} km`,
    },
  ];

  document.getElementById("rankNav").innerHTML = RANKINGS
    .map((r) => `<a class="chip" href="#${r.id}">${r.titulo}</a>`).join("");

  document.getElementById("rankingsRoot").innerHTML = RANKINGS.map((r) => `
    <article class="ranking" id="${r.id}">
      <h2>${r.titulo}</h2>
      <p class="ranking-criterio">${r.criterio}</p>
      <ol class="rank-list rank-list-big">
        ${r.lista.slice(0, 10).map((v) => `
          <li><a href="${modelUrl(v)}">
            <span class="rank-name">${v.brand} ${v.model}<small>${v.bodyType} · ${priceText(v)}${v.priceKind === "imprensa" ? " (imprensa)" : ""}</small></span>
            <span class="rank-value">${r.valor(v)}</span>
          </a></li>`).join("")}
      </ol>
    </article>`).join("");
})();
