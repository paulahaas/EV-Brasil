/**
 * Página de detalhes de um veículo (veiculo.html?id=...).
 * Mostra TODAS as informações do carro selecionado.
 */
(function () {
  mountChrome("veiculos");

  const root = document.getElementById("detailRoot");
  const id = new URLSearchParams(location.search).get("id");
  const v = getVehicleById(id);

  if (!v) {
    root.innerHTML = `
      <div class="empty-state">
        <h2>Veículo não encontrado</h2>
        <p style="margin:14px 0 24px;">O modelo que você procura não está disponível.</p>
        <a href="veiculos.html" class="btn btn-primary">Voltar ao catálogo</a>
      </div>`;
    return;
  }

  document.title = `${v.brand} ${v.model} — EV Brasil`;

  // Especificações completas para a tabela.
  const specLabels = {
    autonomia: "Autonomia",
    bateria: "Bateria",
    potencia: "Potência",
    torque: "Torque",
    aceleracao: "Aceleração",
    velocidadeMax: "Velocidade máxima",
    tracao: "Tração",
    recargaAC: "Recarga (AC)",
    recargaDC: "Recarga rápida (DC)",
    lugares: "Lugares",
    portaMalas: "Porta-malas",
  };

  const specRows = Object.keys(specLabels)
    .map(
      (k) =>
        `<tr><td>${specLabels[k]}</td><td>${v.specs[k]}</td></tr>`
    )
    .join("");

  const highlights = v.highlights
    .map((h) => `<li><span class="tick">✓</span><span>${h}</span></li>`)
    .join("");

  // Outros modelos (para sugestão no fim da página).
  const related = VEHICLES.filter((x) => x.id !== v.id)
    .sort((a, b) => (b.brand === v.brand) - (a.brand === v.brand))
    .slice(0, 3);

  root.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Início</a> ·
      <a href="veiculos.html">Veículos</a> ·
      <span>${v.brand} ${v.model}</span>
    </nav>

    <div class="detail-hero">
      <div class="detail-visual">${carImage(v)}</div>
      <div class="detail-info">
        <div class="brand-line">${v.brand} · ${v.segment} · ${v.year}</div>
        <h1>${v.model}</h1>
        <p class="tagline">${v.tagline}</p>
        <div class="detail-price">
          <span class="from">A partir de</span>
          <span class="amount">${formatBRL(v.priceBRL)}</span>
        </div>
        <div class="detail-actions">
          <a href="index.html#contato?modelo=${v.id}" class="btn btn-primary btn-lg" id="ctaComprar">Tenho interesse</a>
          <a href="veiculos.html" class="btn btn-ghost btn-lg">Ver outros modelos</a>
        </div>
      </div>
    </div>

    <div class="quickspecs">
      <div class="quickspec"><div class="v">${v.specs.autonomia.split(" ")[0]} km</div><div class="k">Autonomia</div></div>
      <div class="quickspec"><div class="v">${v.specs.aceleracao.match(/[\d,]+ s/) ? v.specs.aceleracao.match(/[\d,]+ s/)[0] : "-"}</div><div class="k">0–100 km/h</div></div>
      <div class="quickspec"><div class="v">${v.specs.potencia.split(" ")[0]} cv</div><div class="k">Potência</div></div>
    </div>

    <p class="detail-desc">${v.description}</p>

    <div class="detail-hero" style="margin-top:60px;align-items:start;">
      <div class="spec-section">
        <h2>Ficha técnica completa</h2>
        <table class="spec-table">${specRows}</table>
      </div>
      <div class="spec-section">
        <h2>Destaques</h2>
        <ul class="highlights-list">${highlights}</ul>
        <div class="cta-band" style="margin-top:30px;padding:28px;text-align:left;">
          <h2 style="font-size:1.3rem;">Gostou do ${v.model}?</h2>
          <p style="margin:8px 0 18px;">Fale com um especialista e agende um test-drive.</p>
          <a href="index.html#contato" class="btn btn-primary">Falar com especialista</a>
        </div>
      </div>
    </div>

    <section style="padding-left:0;padding-right:0;">
      <div class="section-head">
        <span class="eyebrow">Você também pode gostar</span>
        <h2 class="section-title" style="font-size:1.8rem;">Outros modelos</h2>
      </div>
      <div class="grid">${related.map(createCard).join("")}</div>
    </section>
  `;

  // Faz o botão "Tenho interesse" levar ao formulário já com o modelo selecionado.
  const cta = document.getElementById("ctaComprar");
  if (cta) cta.setAttribute("href", `index.html?modelo=${v.id}#contato`);
})();
