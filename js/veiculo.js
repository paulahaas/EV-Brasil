/**
 * Página de um modelo (veiculo.html?id=...).
 */
(function () {
  mountChrome("veiculos");

  const root = document.getElementById("detailRoot");
  const v = getVehicleById(new URLSearchParams(location.search).get("id"));

  if (!v) {
    root.innerHTML = `
      <div class="container empty-state">
        <h2>Modelo não encontrado</h2>
        <p>Ele pode ter saído de linha ou mudado de endereço.</p>
        <a href="veiculos.html" class="btn btn-primary">Ver todos os carros</a>
      </div>`;
    return;
  }

  document.title = `${v.brand} ${v.model}: autonomia, consumo e preço — EV Brasil`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = `${v.brand} ${v.model}: autonomia de ${rangeText(v)} e consumo de ${formatNum(v.kwh100)} kWh/100 km pelo Inmetro. ${v.price ? "A partir de " + formatBRL(v.price) + "." : ""}`;

  // Custo de energia com a tarifa padrão da calculadora.
  const TARIFA = 0.95;
  const custo100 = (kwh) => (kwh * TARIFA).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const versoes = [...v.versions]
    .sort((a, b) => b.rangeKm - a.rangeKm)
    .map((x) => `<tr><td>${escapeHtml(x.name)}</td><td>${x.rangeKm} km</td><td>${formatNum(x.kwh100)}</td><td>${custo100(x.kwh100)}</td></tr>`)
    .join("");

  const fonteHost = v.priceSource ? v.priceSource.split("/")[2].replace("www.", "") : "";
  let sobrePreco;
  if (!v.price) {
    sobrePreco = `A marca não divulga o preço deste modelo no site oficial e não encontramos um valor confiável publicado. ${v.priceNote ? escapeHtml(v.priceNote) + "." : ""}`;
  } else if (v.priceKind === "oficial") {
    sobrePreco = `Preço de tabela "a partir de"${v.priceVersion ? ` (versão ${escapeHtml(v.priceVersion)})` : ""}, no site oficial da marca, coletado em ${DATA_INFO.precos.coleta}. Fonte: <a class="text-link" href="${v.priceSource}" target="_blank" rel="noopener">${fonteHost}</a>.`;
  } else {
    sobrePreco = `<strong>Valor publicado na imprensa</strong>: a marca não mostra o preço no site oficial. Fonte: <a class="text-link" href="${v.priceSource}" target="_blank" rel="noopener">${fonteHost}</a>. Confirme com uma concessionária.`;
  }
  const obs = v.price && v.priceNote ? `<p class="fine-print">${escapeHtml(v.priceNote)}</p>` : "";

  // Ficha técnica (bateria, potência, recarga...), com a fonte de cada modelo.
  let ficha = "";
  if (v.specs) {
    const linhas = FICHA_CAMPOS.map((c) => {
      const t = specText(v, c);
      return `<tr><th scope="row">${c.rotulo}</th><td>${t || '<span class="spec-missing">não divulgado</span>'}</td></tr>`;
    }).join("");
    const host = (u) => u.split("/")[2].replace("www.", "");
    const fonte = `<a class="text-link" href="${v.specs.source}" target="_blank" rel="noopener">${host(v.specs.source)}</a>` +
      (v.specs.sourceExtra ? ` e <a class="text-link" href="${v.specs.sourceExtra}" target="_blank" rel="noopener">${host(v.specs.sourceExtra)}</a>` : "");
    ficha = `
      <div class="spec-section">
        <h2>Ficha técnica</h2>
        <table class="spec-table">
          <caption>Versão ${escapeHtml(v.specs.version)}</caption>
          <tbody>${linhas}</tbody>
        </table>
        ${v.specs.note ? `<p class="fine-print">${escapeHtml(v.specs.note)}.</p>` : ""}
        <p class="fine-print">Fonte: ${fonte}${v.specs.kind === "imprensa" ? " (a marca não publica a ficha; dado da imprensa especializada)" : " (ficha da marca)"}, consultada em ${DATA_INFO.fichas.coleta}.</p>
      </div>`;
  }

  // Parecidos: mesma carroceria, preço mais próximo (ou autonomia, se não houver preço).
  const distancia = (x) => (v.price && x.price ? Math.abs(x.price - v.price) / 1000 : Math.abs(x.rangeMax - v.rangeMax) + 1000);
  const parecidos = VEHICLES.filter((x) => x.id !== v.id && x.bodyType === v.bodyType)
    .sort((a, b) => distancia(a) - distancia(b))
    .slice(0, 4);

  root.innerHTML = `
    <section class="panel model-hero" style="--glow:${v.color}">
      ${hasPhoto(v) ? photoCredit(v) : ""}
      <div class="panel-head">
        <nav class="breadcrumb">
          <a href="index.html">Início</a> ·
          <a href="veiculos.html">Carros</a> ·
          <span>${v.brand} ${v.model}</span>
        </nav>
        <span class="eyebrow">${v.brand} · ${v.bodyType} · ${v.category}</span>
        <h1 class="panel-title">${v.model}</h1>
        <p class="panel-sub">${v.versions.length} ${v.versions.length === 1 ? "versão medida" : "versões medidas"} pelo Inmetro</p>
      </div>
      <div class="panel-visual">${panelVisual(v)}</div>
      <div class="panel-foot">
        ${specBar(v)}
        <p class="card-meter">${consumoMeter(v)}</p>
        ${priceNoteShort(v) ? `<p class="card-note">${priceNoteShort(v)}</p>` : ""}
        <div class="panel-actions">
          <a href="comparar.html?ids=${encodeURIComponent(v.id)}" class="btn btn-primary btn-wide">Comparar com outros</a>
          <a href="calculadora.html?modelo=${encodeURIComponent(v.id)}" class="btn btn-ghost btn-wide">Calcular minha economia</a>
        </div>
      </div>
    </section>

    <section id="versoes">
      <div class="container detail-cols">
        <div class="detail-main">
        <div class="spec-section">
          <h2>Versões medidas pelo Inmetro</h2>
          <table class="spec-table versions-table">
            <thead><tr><th>Versão</th><th>Autonomia</th><th>kWh/100 km</th><th>Energia a cada 100 km*</th></tr></thead>
            <tbody>${versoes}</tbody>
          </table>
          <p class="fine-print">Medição do Inmetro (${DATA_INFO.inmetro.titulo}, atualização de ${DATA_INFO.inmetro.atualizacao}), igual para todas as marcas. *Carregando em casa a R$ ${formatNum(TARIFA, 2)} por kWh.</p>
        </div>
        ${ficha}
        </div>
        <div class="spec-section">
          <h2>Sobre o preço</h2>
          <div class="notice">
            <p class="notice-price">${priceText(v)}</p>
            <p>${sobrePreco}</p>
          </div>
          ${obs}
          <p class="fine-print"><a class="text-link" href="metodologia.html">Como coletamos os dados</a></p>
        </div>
      </div>
    </section>

    ${parecidos.length ? `
    <section>
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Parecidos com o ${v.model}</h2>
        </div>
        <div class="grid">${parecidos.map(createCard).join("")}</div>
      </div>
    </section>` : ""}
  `;
})();
