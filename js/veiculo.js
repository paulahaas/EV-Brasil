/**
 * Página de um modelo: carros/<id>.html (gerada por scripts/gerar-paginas.mjs,
 * com o id em <body data-id>). O endereço antigo veiculo.html?id=... redireciona.
 */
(function () {
  mountChrome("veiculos");

  const root = document.getElementById("detailRoot");
  const id = document.body.dataset.id || new URLSearchParams(location.search).get("id");
  const v = getVehicleById(id);
  // Endereço antigo (veiculo.html?id=...): vai para a página própria do modelo.
  if (v && !document.body.dataset.id) {
    location.replace(modelUrl(v));
    return;
  }

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
  const obs = v.price && v.priceNote ? `<p class="fine-print">${escapeHtml(v.priceNote.charAt(0).toUpperCase() + v.priceNote.slice(1))}.</p>` : "";

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

  // Histórico de preço (dados/historico-precos.json), do mais recente ao mais antigo.
  const TIPOS = { coleta: "nossa coleta, site da marca", "lançamento": "lançamento", "pré-venda": "pré-venda", publicado: "preço publicado" };
  let historico = "";
  const hist = v.priceHistory || [];
  const anteriores = hist.filter((p) => p.kind !== "coleta");
  if (anteriores.length) {
    const t = priceTrend(v);
    let resumo = "";
    if (t && t.stable) resumo = `Mesmo preço de ${monthText(t.since.month)}.`;
    else if (t) resumo = `${formatBRL(Math.abs(t.delta))} ${t.delta < 0 ? "a menos" : "a mais"} que em ${monthText(t.since.month)} (${t.delta < 0 ? "−" : "+"}${formatNum(Math.abs(t.pct), 0)}%).`;
    historico = `
          <h3 class="spec-sub hist-sub">Histórico de preço</h3>
          ${resumo ? `<p class="price-trend ${t && !t.stable ? (t.delta < 0 ? "down" : "up") : ""}">${resumo}</p>` : ""}
          <ul class="price-history">
            ${[...hist].reverse().map((p) => `<li><span>${monthText(p.month)}</span><strong>${formatBRL(p.price)}</strong><a class="text-link" href="${p.source}" target="_blank" rel="noopener">${TIPOS[p.kind] || p.kind}</a></li>`).join("")}
          </ul>
          <p class="fine-print">Preços de lançamento e pré-venda vêm da imprensa e podem ser de outra versão. A partir de outubro de 2026, guardamos o preço oficial todo mês.</p>`;
  }

  // Quanto vale usado: tabela FIPE de cada ano-modelo, comparada com o zero km.
  let usado = "";
  if (v.fipe) {
    const f = v.fipe;
    const ano = new Date().getFullYear();
    // Ano-modelo do ano que vem e deste ano são praticamente novos; o resumo usa o mais antigo.
    const maisAntigo = f.used[f.used.length - 1];
    const linhas = f.used.map((u) => `<tr><th scope="row">${u.year}</th><td>${formatBRL(u.value)}</td><td>${u.loss > 0 ? `−${formatNum(u.loss, 0)}%` : u.loss < 0 ? `+${formatNum(-u.loss, 0)}%` : "igual"}</td></tr>`).join("");
    usado = `
      <div class="spec-section">
        <h2>Quanto vale usado</h2>
        ${maisAntigo.year < ano ? `<p class="fipe-resumo">Um ${escapeHtml(v.model)} ${maisAntigo.year} vale hoje <strong>${formatBRL(maisAntigo.value)}</strong> na FIPE: ${maisAntigo.loss > 0 ? `${formatNum(maisAntigo.loss, 0)}% a menos` : "o mesmo"} que um zero km (${formatBRL(f.zero)}).</p>` : ""}
        <table class="spec-table fipe-table">
          <thead><tr><th scope="col">Ano-modelo</th><th scope="col">Valor FIPE</th><th scope="col">x zero km</th></tr></thead>
          <tbody><tr><th scope="row">Zero km</th><td>${formatBRL(f.zero)}</td><td>—</td></tr>${linhas}</tbody>
        </table>
        <p class="fine-print">Tabela FIPE de ${escapeHtml(DATA_INFO.fipe.referencia)}, versão ${escapeHtml(f.version)}. A FIPE é a média de preços de anúncios e negócios; o valor de um carro específico depende de quilometragem, estado e saúde da bateria. Fonte: <a class="text-link" href="${DATA_INFO.fipe.fonte}" target="_blank" rel="noopener">veiculos.fipe.org.br</a>.</p>
      </div>`;
  }

  // Segurança (Latin NCAP / Euro NCAP) e garantia da marca.
  const host2 = (u) => u.split("/")[2].replace("www.", "");
  let seguranca;
  if (v.safety) {
    const s = v.safety;
    seguranca = `
        <p class="safety-stars" aria-label="${s.stars} de 5 estrelas"><span class="stars s${s.stars}">${starsText(s.stars)}</span> <strong>${s.stars} ${s.stars === 1 ? "estrela" : "estrelas"}</strong> no ${s.program} (${s.year})</p>
        ${s.testedAs ? `<p class="fine-print">Testado como ${escapeHtml(s.testedAs)}.</p>` : ""}
        ${s.note ? `<p class="fine-print">${escapeHtml(s.note)}.</p>` : ""}
        <p class="fine-print">Fonte: <a class="text-link" href="${s.source}" target="_blank" rel="noopener">${host2(s.source)}</a>.${s.program === "Euro NCAP" ? " Teste europeu, com a versão vendida lá: o Latin NCAP, da América Latina, não testou este modelo." : ""}</p>`;
  } else {
    seguranca = `<p class="fine-print">Este modelo não foi testado pelo Latin NCAP nem pelo Euro NCAP.</p>`;
  }
  const g = v.warranty;
  const garantiaHtml = g ? `
        <table class="spec-table">
          <tbody>
            <tr><th scope="row">Veículo</th><td>${g.vehicle ? escapeHtml(g.vehicle) : '<span class="spec-missing">não divulgado</span>'}</td></tr>
            <tr><th scope="row">Bateria</th><td>${g.battery ? escapeHtml(g.battery) : '<span class="spec-missing">não divulgado</span>'}</td></tr>
          </tbody>
        </table>
        ${g.note ? `<p class="fine-print">${escapeHtml(g.note)}.</p>` : ""}
        <p class="fine-print">Garantia da ${escapeHtml(v.brand)} para uso particular. Fonte: <a class="text-link" href="${g.source}" target="_blank" rel="noopener">${host2(g.source)}</a>${g.kind === "imprensa" ? " (imprensa)" : ""}. Confirme no termo de garantia do carro.</p>`
    : `<p class="fine-print">Não encontramos a garantia da ${escapeHtml(v.brand)} em fonte confiável. Pergunte na concessionária.</p>`;
  const segGarantia = `
      <div class="spec-section">
        <h2>Segurança e garantia</h2>
        <h3 class="spec-sub">Teste de colisão</h3>
        ${seguranca}
        <h3 class="spec-sub">Garantia</h3>
        ${garantiaHtml}
      </div>`;

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
        ${segGarantia}
        ${usado}
        </div>
        <div class="spec-section">
          <h2>Sobre o preço</h2>
          <div class="notice">
            <p class="notice-price">${priceText(v)}</p>
            <p>${sobrePreco}</p>
          </div>
          ${obs}
          ${historico}
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
