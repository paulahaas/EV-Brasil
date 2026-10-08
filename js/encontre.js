/**
 * Questionário "Qual é o meu?" (encontre.html).
 * -------------------------------------------------
 * 1. Filtra pelo orçamento, pela carroceria e por uma autonomia mínima
 *    que depende de quanto a pessoa roda e de onde vai carregar.
 * 2. Ordena os que sobram por uma nota que mistura preço, autonomia e
 *    consumo, com pesos que mudam conforme a prioridade escolhida.
 * Se ninguém passar nos filtros, afrouxa a autonomia e depois a carroceria.
 */
(function () {
  mountChrome("encontre");

  const TARIFA = 0.95; // R$ por kWh em casa (o mesmo padrão da calculadora)
  const PESOS = {
    preco: { preco: 0.6, autonomia: 0.25, consumo: 0.15 },
    autonomia: { preco: 0.2, autonomia: 0.6, consumo: 0.2 },
    consumo: { preco: 0.2, autonomia: 0.2, consumo: 0.6 },
  };

  const form = document.getElementById("quizForm");
  const lista = document.getElementById("quizResults");
  const resumo = document.getElementById("quizResumo");
  const titulo = document.getElementById("quizTitle");

  const resposta = (nome) => form.querySelector(`input[name="${nome}"]:checked`).value;

  // Autonomia mínima: rodar pelo menos 2 dias (carregando em casa) ou 4 dias
  // (dependendo de eletropostos) sem precisar recarregar.
  function autonomiaMinima(kmDia, recarga) {
    return Math.max(150, kmDia * (recarga === "casa" ? 2 : 4));
  }

  // Normaliza um valor entre o menor e o maior da lista (0 a 1).
  function escala(valor, min, max, inverter) {
    if (max === min) return 1;
    const x = (valor - min) / (max - min);
    return inverter ? 1 - x : x;
  }

  // Com orçamento, conta a autonomia da versão de entrada (é a que cabe no preço
  // "a partir de"); sem limite de preço, a da versão que roda mais.
  const autonomia = (v, orcamento) => (orcamento ? v.rangeMin : v.rangeMax);

  function filtrar({ orcamento, tipo, minimo }) {
    return VEHICLES.filter((v) =>
      (!orcamento || (v.price && v.price <= orcamento)) &&
      (!tipo || v.bodyType === tipo) &&
      autonomia(v, orcamento) >= minimo
    );
  }

  function calcular() {
    const orcamento = Number(resposta("orcamento"));
    const kmDia = Number(resposta("km"));
    const tipo = resposta("tipo");
    const recarga = resposta("recarga");
    const prioridade = resposta("prioridade");
    const minimo = autonomiaMinima(kmDia, recarga);

    // Tenta com tudo; se não sobrar ninguém, afrouxa um critério de cada vez.
    const tentativas = [
      { filtro: { orcamento, tipo, minimo }, aviso: "" },
      tipo && { filtro: { orcamento, tipo: "", minimo }, aviso: `Nenhum ${tipo} atende a essas respostas; mostrando outras carrocerias.` },
      { filtro: { orcamento, tipo, minimo: 0 }, aviso: `Nenhum modelo nessa faixa tem ${minimo} km de autonomia; mostrando os que chegam mais perto.` },
      tipo && { filtro: { orcamento, tipo: "", minimo: 0 }, aviso: `Nenhum modelo nessa faixa de preço atende a tudo; mostrando os que chegam mais perto.` },
    ].filter(Boolean);
    let aviso = "";
    let candidatos = [];
    for (const t of tentativas) {
      candidatos = filtrar(t.filtro);
      if (candidatos.length) { aviso = t.aviso; break; }
    }

    if (!candidatos.length) {
      titulo.textContent = "Nenhum modelo encontrado";
      resumo.textContent = "Tente aumentar o orçamento.";
      lista.innerHTML = "";
      document.getElementById("quizCompare").hidden = true;
      return;
    }

    const precos = candidatos.filter((v) => v.price).map((v) => v.price);
    const ranges = candidatos.map((v) => autonomia(v, orcamento));
    const consumos = candidatos.map((v) => v.kwh100);
    const p = PESOS[prioridade];

    const nota = (v) =>
      p.preco * (v.price ? escala(v.price, Math.min(...precos), Math.max(...precos), true) : 0.4) +
      p.autonomia * escala(autonomia(v, orcamento), Math.min(...ranges), Math.max(...ranges)) +
      p.consumo * escala(v.kwh100, Math.min(...consumos), Math.max(...consumos), true);

    const melhores = candidatos.map((v) => ({ v, n: nota(v) })).sort((a, b) => b.n - a.n).slice(0, 6);

    titulo.textContent = `${melhores.length} ${melhores.length === 1 ? "sugestão" : "sugestões"} para você`;
    resumo.textContent = aviso ||
      `${candidatos.length} ${candidatos.length === 1 ? "modelo atende" : "modelos atendem"} às suas respostas` +
      ` (autonomia mínima de ${minimo} km${orcamento ? `, até ${formatBRL(orcamento)}` : ""}). Estes são os mais bem colocados.`;

    lista.innerHTML = melhores.map(({ v }) => {
      const km = autonomia(v, orcamento);
      const dias = Math.floor(km / kmDia);
      const energiaMes = (kmDia * 30 * v.kwh100 / 100) * TARIFA;
      const motivos = [
        v.price
          ? `${orcamento ? "Cabe no orçamento: " : ""}a partir de ${formatBRL(v.price)}${v.priceKind === "imprensa" ? " (valor da imprensa)" : ""}`
          : "Preço não divulgado pela marca",
        `${km} km de autonomia${orcamento && v.rangeMin !== v.rangeMax ? " (versão de entrada)" : ""}: ${dias} ${dias === 1 ? "dia" : "dias"} do seu uso sem recarregar`,
        `Cerca de ${formatBRL(Math.round(energiaMes))} por mês de energia carregando em casa` +
          (recarga === "rua" ? " (em eletropostos costuma sair bem mais caro)" : ""),
      ];
      return `
        <li class="match">
          <a class="match-media" href="${modelUrl(v)}" style="--glow:${v.color}">${carImage(v)}</a>
          <div class="match-body">
            <h3><a href="${modelUrl(v)}">${v.brand} ${v.model}</a></h3>
            <p class="card-meta">${v.bodyType} · ${formatNum(v.kwh100)} kWh/100 km</p>
            <ul class="motivos">${motivos.map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>
        </li>`;
    }).join("");

    // Um atalho só, depois da lista, para comparar os três primeiros.
    const ids = melhores.slice(0, 3).map((m) => m.v.id).join(",");
    document.getElementById("quizCompare").href = `comparar.html?ids=${ids}`;
    document.getElementById("quizCompare").hidden = melhores.length < 2;
  }

  // Atalho flutuante para as sugestões, só enquanto elas estão fora da tela (celular).
  const jump = document.getElementById("quizJump");
  if (jump && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => {
      jump.hidden = e.isIntersecting || window.innerWidth > 900;
    }).observe(document.querySelector(".quiz-results"));
  }

  form.addEventListener("change", calcular);
  calcular();
})();
