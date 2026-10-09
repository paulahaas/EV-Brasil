/**
 * Lançamentos (novidades.html).
 * - "Chegaram há pouco": modelos do catálogo com lançamento nos últimos 12 meses
 *   (data do ponto "lançamento" do histórico de preços).
 * - "Chegando": anunciados para o Brasil e ainda fora do catálogo (dados/novidades.json).
 */
(function () {
  mountChrome("novidades");

  // Mês da coleta de preços ("05/10/2026" -> 2026*12 + 10) e a janela de 12 meses.
  const [, mesColeta, anoColeta] = DATA_INFO.precos.coleta.split("/").map(Number);
  const agora = anoColeta * 12 + mesColeta;
  const emMeses = (m) => { const [a, mm] = m.split("-").map(Number); return a * 12 + mm; };

  const novos = VEHICLES
    .map((v) => ({ v, lanc: (v.priceHistory || []).find((p) => p.kind === "lançamento") }))
    .filter(({ lanc }) => lanc && agora - emMeses(lanc.month) < 12)
    .sort((a, b) => b.lanc.month.localeCompare(a.lanc.month));

  document.getElementById("novosGrid").innerHTML = novos
    .map(({ v, lanc }) => `<div class="novo-item"><span class="novo-data">Chegou em ${monthText(lanc.month)}</span>${createCard(v)}</div>`)
    .join("");

  document.getElementById("chegando").innerHTML = NOVIDADES.chegando
    .map((c) => `<a class="chegando-item" href="${c.fonte}" target="_blank" rel="noopener">
        <span class="chegando-marca">${escapeHtml(c.marca)}</span>
        <strong>${escapeHtml(c.modelo)}</strong>
        <span class="chegando-prev">${escapeHtml(c.previsao)}</span>
      </a>`)
    .join("");
  document.getElementById("chegandoNota").textContent =
    `Lista montada a partir de reportagens de junho e julho de 2026 (clique em cada modelo para ver a fonte), revisada em ${NOVIDADES.atualizado}.`;
})();
