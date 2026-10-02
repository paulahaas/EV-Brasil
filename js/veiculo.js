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
      <div class="container empty-state">
        <h2>Veículo não encontrado</h2>
        <p>O modelo que você procura não está disponível.</p>
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
    <section class="panel model-hero" style="--glow:${v.color}">
      <div class="panel-head">
        <nav class="breadcrumb">
          <a href="index.html">Início</a> ·
          <a href="veiculos.html">Veículos</a> ·
          <span>${v.brand} ${v.model}</span>
        </nav>
        <span class="eyebrow">${v.brand} · ${v.segment} · ${v.year}</span>
        <h1 class="panel-title">${v.model}</h1>
        <p class="panel-sub">${v.tagline}</p>
      </div>
      <div class="panel-visual">${carImage(v)}</div>
      <div class="panel-foot">
        ${specBar(v)}
        <div class="panel-actions">
          <a href="index.html?modelo=${v.id}#contato" class="btn btn-primary btn-wide">Tenho interesse</a>
          <a href="veiculos.html" class="btn btn-ghost btn-wide">Ver outros modelos</a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="detail-desc">${v.description}</p>

        <div class="detail-cols">
          <div class="spec-section">
            <h2>Ficha técnica</h2>
            <table class="spec-table">${specRows}</table>
          </div>
          <div class="spec-section">
            <h2>Destaques</h2>
            <ul class="highlights-list">${highlights}</ul>
            <div class="cta-band">
              <h3>Gostou do ${v.model}?</h3>
              <p>Fale com um especialista e agende um test-drive.</p>
              <a href="index.html?modelo=${v.id}#contato" class="btn btn-primary">Falar com especialista</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Você também pode gostar</h2>
        </div>
        <div class="grid">${related.map(createCard).join("")}</div>
      </div>
    </section>
  `;
})();
