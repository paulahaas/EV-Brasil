/**
 * Gráfico "preço × autonomia" (home) — um ponto por modelo com preço.
 * -------------------------------------------------
 * Eixo x: preço "a partir de", em escala logarítmica (os preços vão de
 * R$ 119 mil a R$ 1,4 milhão; numa escala comum os baratos se amontoariam).
 * Eixo y: autonomia do Inmetro da versão de entrada (a que tem esse preço).
 * Cor: três grupos de carroceria — num gráfico de pontos só três cores
 * continuam distinguíveis entre si, inclusive para daltônicos.
 * Passar o mouse (ou o dedo) mostra o modelo; clicar abre a página dele.
 * Logo abaixo há a mesma informação em tabela.
 */
(function () {
  const raiz = document.getElementById("scatter");
  if (!raiz) return;

  const GRUPOS = [
    { id: "suv", nome: "SUV", cor: "var(--series-1)", tipos: ["SUV", "Picape"] },
    { id: "hatch", nome: "Hatch", cor: "var(--series-2)", tipos: ["Hatch"] },
    { id: "sedan", nome: "Sedã, perua e esportivo", cor: "var(--series-3)", tipos: ["Sedã", "Perua", "Esportivo"] },
  ];
  const grupoDe = (v) => GRUPOS.find((g) => g.tipos.includes(v.bodyType));

  const pontos = VEHICLES.filter((v) => v.price).map((v) => ({ v, x: v.price, y: v.rangeMin, g: grupoDe(v) }));

  // Destaques com rótulo fixo: o mais barato, o que roda mais e o de mais km por real.
  const porKm = (p) => p.y / p.x;
  const destaques = new Set([
    pontos.reduce((a, b) => (b.x < a.x ? b : a)),
    pontos.reduce((a, b) => (b.y > a.y ? b : a)),
    pontos.reduce((a, b) => (porKm(b) > porKm(a) ? b : a)),
  ]);

  const X_MIN = 100000, X_MAX = 1500000, Y_MIN = 150, Y_MAX = 600;
  const reais = (n, curto) => {
    const t = n >= 1000000 ? `${formatNum(n / 1000000, n % 1000000 ? 1 : 0)} mi` : `${n / 1000} mil`;
    return curto ? t : `R$ ${t}`;
  };

  const legenda = raiz.querySelector(".viz-legend");
  const area = raiz.querySelector(".viz-plot");
  const tip = raiz.querySelector(".viz-tip");
  let ocultos = new Set();

  legenda.innerHTML = GRUPOS.map((g) => {
    const n = pontos.filter((p) => p.g === g).length;
    return `<button type="button" class="viz-key" data-grupo="${g.id}" aria-pressed="true">
      <span class="viz-dot" style="background:${g.cor}"></span>${g.nome} <span class="viz-count">${n}</span></button>`;
  }).join("");
  legenda.addEventListener("click", (e) => {
    const b = e.target.closest("[data-grupo]");
    if (!b) return;
    const id = b.dataset.grupo;
    ocultos.has(id) ? ocultos.delete(id) : ocultos.add(id);
    b.setAttribute("aria-pressed", String(!ocultos.has(id)));
    desenhar();
  });

  // Rótulos dos destaques: tenta quatro posições em volta do ponto e fica com
  // a primeira que não cobre outro ponto nem sai do gráfico. Se nenhuma servir,
  // o rótulo não aparece (o ponto continua com dica ao passar o mouse/dedo).
  function rotulos(visiveis, sx, sy, W, M, ih) {
    const ocupados = [];
    return visiveis.filter((p) => destaques.has(p)).map((p) => {
      const cx = sx(p.x), cy = sy(p.y);
      const texto = `${p.v.brand} ${p.v.model}`;
      const tw = texto.length * 6.6, th = 14;
      const opcoes = [[1, -1], [-1, -1], [1, 1], [-1, 1]].map(([dx, dy]) => {
        const lx = cx + dx * 14, ly = cy + dy * 16;
        const x0 = dx > 0 ? lx + 3 : lx - 3 - tw;
        const caixa = { x0, x1: x0 + tw, y0: ly - th + 3, y1: ly + 3 };
        return { dx, lx, ly, caixa };
      });
      const cobre = (c) => visiveis.some((q) => {
        if (q === p) return false;
        const qx = sx(q.x), qy = sy(q.y);
        return qx > c.x0 - 7 && qx < c.x1 + 7 && qy > c.y0 - 7 && qy < c.y1 + 7;
      }) || ocupados.some((o) => c.x0 < o.x1 && c.x1 > o.x0 && c.y0 < o.y1 && c.y1 > o.y0);
      const dentro = (c) => c.x0 >= M.l && c.x1 <= W - M.r && c.y0 >= 0 && c.y1 <= M.t + ih;
      const ok = opcoes.find((o) => dentro(o.caixa) && !cobre(o.caixa));
      if (!ok) return "";
      ocupados.push(ok.caixa);
      const { dx, lx, ly } = ok;
      return `<line class="viz-leader" x1="${cx}" y1="${cy}" x2="${lx}" y2="${ly + (ly < cy ? 4 : -10)}"></line>
        <text class="viz-label" x="${lx + (dx > 0 ? 3 : -3)}" y="${ly}" text-anchor="${dx > 0 ? "start" : "end"}">${texto}</text>`;
    }).join("");
  }

  function desenhar() {
    const W = area.clientWidth;
    const pequeno = W < 600;
    const H = Math.round(pequeno ? W * 0.95 : Math.min(460, W * 0.5));
    const M = { t: pequeno ? 26 : 14, r: pequeno ? 12 : 20, b: 44, l: pequeno ? 34 : 56 };
    const iw = W - M.l - M.r, ih = H - M.t - M.b;

    const sx = (x) => M.l + ((Math.log(x) - Math.log(X_MIN)) / (Math.log(X_MAX) - Math.log(X_MIN))) * iw;
    const sy = (y) => M.t + (1 - (y - Y_MIN) / (Y_MAX - Y_MIN)) * ih;
    const ticksX = pequeno ? [100000, 200000, 500000, 1000000] : [100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000];
    const ticksY = [200, 300, 400, 500, 600];

    const visiveis = pontos.filter((p) => !ocultos.has(p.g.id));
    const r = pequeno ? 5 : 6;

    area.innerHTML = `
      <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img"
        aria-label="Gráfico de preço por autonomia dos ${pontos.length} carros elétricos com preço divulgado">
        ${ticksY.map((t) => `
          <line class="viz-grid" x1="${M.l}" x2="${W - M.r}" y1="${sy(t)}" y2="${sy(t)}"></line>
          <text class="viz-tick" x="${M.l - 8}" y="${sy(t) + 4}" text-anchor="end">${pequeno ? t : `${t} km`}</text>`).join("")}
        ${pequeno ? `<text class="viz-axis" x="${M.l - 8}" y="12" text-anchor="start">Autonomia (km)</text>` : ""}
        ${ticksX.map((t, i) => `
          <line class="viz-grid" x1="${sx(t)}" x2="${sx(t)}" y1="${M.t}" y2="${M.t + ih}"></line>
          <text class="viz-tick" x="${sx(t)}" y="${M.t + ih + 18}"
            text-anchor="${i === 0 ? "start" : i === ticksX.length - 1 ? "end" : "middle"}">${reais(t, pequeno)}</text>`).join("")}
        <text class="viz-axis" x="${M.l + iw}" y="${H - 4}" text-anchor="end">${pequeno ? "Preço em R$ (escala log.) →" : 'Preço "a partir de" (escala logarítmica) →'}</text>
        ${visiveis.map((p, i) => `
          <a href="${modelUrl(p.v)}" class="viz-pt" data-i="${pontos.indexOf(p)}"
             aria-label="${p.v.brand} ${p.v.model}: ${formatBRL(p.x)}, ${p.y} km">
            <circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="${r}" style="fill:${p.g.cor}"></circle>
          </a>`).join("")}
        ${rotulos(visiveis, sx, sy, W, M, ih)}
      </svg>`;

    // Ponto mais próximo do cursor/dedo (área de toque maior que o ponto).
    const svg = area.querySelector("svg");
    const pos = visiveis.map((p) => ({ p, x: sx(p.x), y: sy(p.y) }));
    let atual = null;

    function mostrar(item) {
      area.querySelectorAll(".viz-pt.on").forEach((el) => el.classList.remove("on"));
      if (!item) { tip.hidden = true; atual = null; return; }
      atual = item;
      area.querySelector(`.viz-pt[data-i="${pontos.indexOf(item.p)}"]`)?.classList.add("on");
      const v = item.p.v;
      tip.innerHTML = `<strong>${v.brand} ${v.model}</strong>
        <span>${formatBRL(item.p.x)}${v.priceKind === "imprensa" ? " (imprensa)" : ""}</span>
        <span>${item.p.y} km de autonomia${v.rangeMin !== v.rangeMax ? " (versão de entrada)" : ""}</span>
        <span class="viz-tip-hint">Clique para ver o modelo</span>`;
      tip.hidden = false;
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      let left = item.x + 14, top = item.y - th - 10;
      if (left + tw > W) left = item.x - tw - 14;
      if (top < 0) top = item.y + 14;
      tip.style.left = `${Math.max(0, left)}px`;
      tip.style.top = `${top}px`;
    }

    function maisProximo(ev) {
      const box = svg.getBoundingClientRect();
      const mx = ev.clientX - box.left, my = ev.clientY - box.top;
      let melhor = null, dist = 28 * 28;
      for (const q of pos) {
        const d = (q.x - mx) ** 2 + (q.y - my) ** 2;
        if (d < dist) { dist = d; melhor = q; }
      }
      return melhor;
    }

    svg.addEventListener("pointermove", (ev) => mostrar(maisProximo(ev)));
    svg.addEventListener("pointerleave", () => mostrar(null));
    // Toque/clique: abre o ponto mais próximo (no celular, o primeiro toque mostra, o segundo abre).
    svg.addEventListener("click", (ev) => {
      if (ev.detail === 0) return; // Enter no teclado: o próprio link do ponto navega
      const q = maisProximo(ev);
      ev.preventDefault();
      if (!q) return;
      if (ev.pointerType === "touch" && atual !== q) { mostrar(q); return; }
      location.href = `${modelUrl(q.p.v)}`;
    });
    area.querySelectorAll(".viz-pt").forEach((el) => {
      el.addEventListener("focus", () => mostrar(pos.find((q) => pontos.indexOf(q.p) === Number(el.dataset.i))));
      el.addEventListener("blur", () => mostrar(null));
    });
  }

  // Tabela com os mesmos dados (para quem não usa o gráfico).
  const tabela = raiz.querySelector(".viz-table tbody");
  if (tabela) {
    tabela.innerHTML = [...pontos].sort((a, b) => a.x - b.x).map((p) => `
      <tr><td><a class="text-link" href="${modelUrl(p.v)}">${p.v.brand} ${p.v.model}</a></td>
      <td>${p.g.nome}</td><td>${formatBRL(p.x)}</td><td>${p.y} km</td></tr>`).join("");
  }

  desenhar();
  let espera;
  window.addEventListener("resize", () => { clearTimeout(espera); espera = setTimeout(desenhar, 120); });
})();
