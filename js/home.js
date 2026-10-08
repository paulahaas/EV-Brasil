/**
 * Lógica da página inicial (index.html).
 */
(function () {
  mountChrome("home");

  // Abertura: foto de fundo do BYD Seal (a foto de salão, que funciona bem em tela cheia).
  const heroCar = getVehicleById("byd-seal") || VEHICLES.find(hasPhoto);
  const heroPanel = document.getElementById("heroPanel");
  const heroVisual = document.getElementById("heroVisual");
  if (heroPanel && heroCar) {
    heroPanel.style.setProperty("--glow", heroCar.color);
    if (hasPhoto(heroCar)) {
      heroPanel.classList.add("has-photo");
      heroPanel.insertAdjacentHTML("afterbegin", panelBackground(heroCar));
    } else if (heroVisual) {
      heroVisual.innerHTML = carImage(heroCar);
    }
  }
  if (heroVisual && heroCar) {
    heroVisual.href = modelUrl(heroCar);
    heroVisual.setAttribute("aria-label", `Ver ${heroCar.brand} ${heroCar.model}`);
  }
  const heroAll = document.getElementById("heroAll");
  if (heroAll) heroAll.textContent = `Ver os ${VEHICLES.length} carros`;

  // Números do catálogo.
  const comPreco = VEHICLES.filter((v) => v.price);
  const maisBarato = comPreco.reduce((a, b) => (b.price < a.price ? b : a));
  const maisLonge = VEHICLES.reduce((a, b) => (b.rangeMax > a.rangeMax ? b : a));
  document.getElementById("stats").innerHTML = `
    <div class="stat"><div class="num">${VEHICLES.length}</div><div class="lbl">Modelos 100% elétricos</div></div>
    <div class="stat"><div class="num">${BRANDS.length}</div><div class="lbl">Marcas</div></div>
    <div class="stat"><div class="num">${formatBRL(maisBarato.price)}</div><div class="lbl">O mais barato (${maisBarato.brand} ${maisBarato.model})</div></div>
    <div class="stat"><div class="num">${maisLonge.rangeMax} km</div><div class="lbl">Maior autonomia (${maisLonge.brand} ${maisLonge.model})</div></div>`;

  // Prévia dos rankings: top 5 de três critérios (os mesmos de rankings.html).
  const colunas = [
    {
      titulo: "Mais baratos",
      itens: [...comPreco].sort((a, b) => a.price - b.price).slice(0, 5),
      valor: (v) => formatBRL(v.price),
    },
    {
      titulo: "Maior autonomia",
      itens: [...VEHICLES].sort((a, b) => b.rangeMax - a.rangeMax).slice(0, 5),
      valor: (v) => `${v.rangeMax} km`,
    },
    {
      titulo: "Gastam menos energia",
      itens: [...VEHICLES].sort((a, b) => a.kwh100 - b.kwh100).slice(0, 5),
      valor: (v) => `${formatNum(v.kwh100)} kWh/100 km`,
    },
  ];
  document.getElementById("rankPreview").innerHTML = colunas.map((c) => `
    <div class="rank-col">
      <h3>${c.titulo}</h3>
      <ol class="rank-list">
        ${c.itens.map((v) => `
          <li><a href="${modelUrl(v)}">
            <span class="rank-name">${v.brand} ${v.model}</span>
            <span class="rank-value">${c.valor(v)}</span>
          </a></li>`).join("")}
      </ol>
    </div>`).join("");

  // Blocos de carroceria: Hatch, Sedã e SUV, com a foto de um modelo do tipo.
  const tiles = document.getElementById("categoryTiles");
  if (tiles) {
    tiles.innerHTML = ["Hatch", "Sedã", "SUV"].map((tipo) => {
      const doTipo = VEHICLES.filter((v) => v.bodyType === tipo);
      const capa = doTipo.find(hasPhoto) || doTipo[0];
      const foto = hasPhoto(capa);
      return `
        <a class="tile ${foto ? "has-photo" : ""}" href="veiculos.html?tipo=${encodeURIComponent(tipo)}" style="--glow:${capa.color}">
          ${foto ? `<img class="tile-bg" ${fotoAttrs(capa, "card")} alt="" loading="lazy" decoding="async">` : ""}
          <div class="tile-visual">${foto ? "" : carImage(capa)}</div>
          <div class="tile-body">
            <span class="tile-count">${doTipo.length} ${doTipo.length === 1 ? "modelo" : "modelos"}</span>
            <h3 class="tile-title">${tipo}</h3>
            <span class="btn btn-light btn-sm">Ver ${tipo}</span>
          </div>
        </a>`;
    }).join("");
  }
})();
