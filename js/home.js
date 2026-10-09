/**
 * Lógica da página inicial (index.html).
 */
(function () {
  mountChrome("home");

  // Abertura: só texto; o botão mostra quantos carros há no catálogo.
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

  // Blocos de carroceria: Hatch, Sedã e SUV, cada um com a silhueta do tipo em linhas finas.
  // d = contorno, w = vidros e colunas, r = centro das rodas, rr = raio da roda.
  const LINHAS = {
    Hatch: { d: "M66 104 L64 88 Q66 76 90 72 L150 66 Q172 46 200 36 Q214 32 244 32 L290 34 Q318 38 330 56 Q338 72 340 88 L340 104 L318 104 A28 28 0 0 0 262 104 L138 104 A28 28 0 0 0 82 104 Z",
      w: "M160 66 L204 41 L286 40 Q306 44 316 62 L316 66 Z M246 40 L246 66", r: [110, 290], rr: 24 },
    "Sedã": { d: "M20 104 L18 92 Q20 80 46 76 L130 70 Q160 48 196 38 Q214 34 250 34 L278 36 Q304 40 324 64 L376 70 Q388 74 388 88 L388 104 L340 104 A30 30 0 0 0 280 104 L130 104 A30 30 0 0 0 70 104 Z",
      w: "M140 70 L198 43 L274 42 Q296 46 312 66 Z M232 42 L232 69", r: [100, 310], rr: 25 },
    SUV: { d: "M24 104 L22 82 Q24 68 50 64 L124 58 Q146 34 178 22 L330 20 Q356 22 364 36 Q372 54 372 80 L372 104 L338 104 A33 33 0 0 0 272 104 L138 104 A33 33 0 0 0 72 104 Z",
      w: "M136 58 L182 27 L330 26 Q348 28 354 42 L356 58 Z M240 27 L240 58 M300 26 L300 58", r: [105, 305], rr: 28 },
  };
  const silhueta = (tipo) => {
    const s = LINHAS[tipo];
    return `<svg class="tile-line" viewBox="0 0 400 140" aria-hidden="true">
      <path d="${s.d}"/><path d="${s.w}" class="vid"/>
      ${s.r.map((x) => `<circle cx="${x}" cy="106" r="${s.rr}"/><circle cx="${x}" cy="106" r="${s.rr * 0.42}" class="vid"/>`).join("")}
      <line x1="0" y1="134" x2="400" y2="134" class="chao"/></svg>`;
  };
  const tiles = document.getElementById("categoryTiles");
  if (tiles) {
    tiles.innerHTML = ["Hatch", "Sedã", "SUV"].map((tipo) => {
      const n = VEHICLES.filter((v) => v.bodyType === tipo).length;
      return `
        <a class="tile" href="veiculos.html?tipo=${encodeURIComponent(tipo)}">
          ${silhueta(tipo)}
          <div class="tile-body">
            <span class="tile-count">${n} ${n === 1 ? "modelo" : "modelos"}</span>
            <h3 class="tile-title">${tipo}</h3>
            <span class="btn btn-ghost btn-sm">Ver ${tipo} →</span>
          </div>
        </a>`;
    }).join("");
  }
})();
