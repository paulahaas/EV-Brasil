/**
 * Questionário "Qual é o meu?" (encontre.html).
 * -------------------------------------------------
 * 1. Filtra pelo orçamento, pela carroceria e por uma autonomia mínima
 *    que depende de quanto a pessoa roda e de onde vai carregar.
 * 2. Ordena os que sobram por uma nota que mistura preço, autonomia e
 *    consumo, com pesos que mudam conforme a prioridade escolhida.
 * Se ninguém passar nos filtros, afrouxa a autonomia e depois a carroceria.
 * Modo aplicativo (Uber, 99…): tira os esportivos de 2 lugares, pesa mais o
 * consumo e a recarga rápida e mostra custo por km, economia no mês e a
 * garantia para uso comercial (quando a marca divulga).
 */
(function () {
  mountChrome("encontre");

  const TARIFA = 0.95; // R$ por kWh em casa (o mesmo padrão da calculadora)
  const GASOLINA = { preco: 6.2, kmPorLitro: 11 }; // mesmos valores iniciais da calculadora
  const DIAS_TRABALHO = 26;
  // Pesos do modo aplicativo: custo por km (consumo) e recarga rápida contam mais.
  const PESOS_APP = { preco: 0.2, autonomia: 0.2, consumo: 0.4, recarga: 0.2 };
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
  // Motorista de aplicativo carrega todo dia: basta um dia de trabalho com folga.
  function autonomiaMinima(kmDia, recarga, app) {
    if (app) return Math.max(150, Math.round(kmDia * (recarga === "casa" ? 1.2 : 1.5)));
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

  function filtrar({ orcamento, tipo, minimo, app }) {
    return VEHICLES.filter((v) =>
      (!app || v.bodyType !== "Esportivo") &&
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
    const app = resposta("uso") === "app";
    const minimo = autonomiaMinima(kmDia, recarga, app);
    document.getElementById("quizApp").hidden = !app;

    // Tenta com tudo; se não sobrar ninguém, afrouxa um critério de cada vez.
    const tentativas = [
      { filtro: { orcamento, tipo, minimo, app }, aviso: "" },
      tipo && { filtro: { orcamento, tipo: "", minimo, app }, aviso: `Nenhum ${tipo} atende a essas respostas; mostrando outras carrocerias.` },
      { filtro: { orcamento, tipo, minimo: 0, app }, aviso: `Nenhum modelo nessa faixa tem ${minimo} km de autonomia; mostrando os que chegam mais perto.` },
      tipo && { filtro: { orcamento, tipo: "", minimo: 0, app }, aviso: `Nenhum modelo nessa faixa de preço atende a tudo; mostrando os que chegam mais perto.` },
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
    const p = app ? PESOS_APP : PESOS[prioridade];
    const dcs = candidatos.map((v) => (v.specs && v.specs.dcKw) || 0);

    const nota = (v) =>
      p.preco * (v.price ? escala(v.price, Math.min(...precos), Math.max(...precos), true) : 0.4) +
      p.autonomia * escala(autonomia(v, orcamento), Math.min(...ranges), Math.max(...ranges)) +
      p.consumo * escala(v.kwh100, Math.min(...consumos), Math.max(...consumos), true) +
      // Recarga rápida (só no modo aplicativo); sem o dado, nota baixa.
      (p.recarga || 0) * (v.specs && v.specs.dcKw ? escala(v.specs.dcKw, Math.min(...dcs), Math.max(...dcs)) : 0.2);

    const melhores = candidatos.map((v) => ({ v, n: nota(v) })).sort((a, b) => b.n - a.n).slice(0, 6);

    titulo.textContent = `${melhores.length} ${melhores.length === 1 ? "sugestão" : "sugestões"} para você`;
    resumo.textContent = aviso ||
      `${candidatos.length} ${candidatos.length === 1 ? "modelo atende" : "modelos atendem"} às suas respostas` +
      ` (autonomia mínima de ${minimo} km${orcamento ? `, até ${formatBRL(orcamento)}` : ""}). Estes são os mais bem colocados.`;

    lista.innerHTML = melhores.map(({ v }) => {
      const km = autonomia(v, orcamento);
      const dias = Math.floor(km / kmDia);
      const energiaMes = (kmDia * 30 * v.kwh100 / 100) * TARIFA;
      if (app) return itemApp(v, km, kmDia, orcamento);
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

  // Sugestão no modo aplicativo: custo por km, economia no mês, recarga e garantia comercial.
  function itemApp(v, km, kmDia, orcamento) {
    const kmMes = kmDia * DIAS_TRABALHO;
    const porKm = (v.kwh100 / 100) * TARIFA;
    const gasolinaKm = GASOLINA.preco / GASOLINA.kmPorLitro;
    const economia = (gasolinaKm - porKm) * kmMes;
    const centavos = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const dc = v.specs && v.specs.dcKw;
    // Parada de 10% a 80% num carregador rápido de 100 kW (mesma conta do planejador de viagem).
    const energia = (km * 0.7 * v.kwh100) / 100;
    const minutos = dc ? Math.round((energia / (Math.min(dc, 100) * 0.65)) * 60 / 5) * 5 : null;
    const c = v.warranty && v.warranty.commercial;
    const garantia = c
      ? `Garantia para aplicativo: ${[c.vehicle && `veículo ${c.vehicle}`, c.battery && `bateria ${c.battery}`].filter(Boolean).join(", ")} (<a class="text-link" href="${c.source}" target="_blank" rel="noopener">fonte</a>)`
      : "Garantia para aplicativo não divulgada: peça o termo de uso comercial na concessionária";
    const motivos = [
      v.price ? `A partir de ${formatBRL(v.price)}${v.priceKind === "imprensa" ? " (valor da imprensa)" : ""}` : "Preço não divulgado pela marca",
      `<strong>${centavos(porKm)}/km</strong> de energia em casa (gasolina: ${centavos(gasolinaKm)}/km): economia de ~${formatBRL(Math.round(economia))} por mês rodando ${kmMes.toLocaleString("pt-BR")} km`,
      `${km} km de autonomia${orcamento && v.rangeMin !== v.rangeMax ? " (versão de entrada)" : ""}` +
        (minutos ? ` · 10→80% em ~${minutos} min (até ${dc} kW)` : " · recarga rápida não divulgada"),
      garantia,
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
  }

  // Ao escolher "aplicativo", sugere uma rodagem diária de motorista (se ainda estiver no mínimo).
  form.querySelectorAll('input[name="uso"]').forEach((r) => r.addEventListener("change", () => {
    const km = form.querySelector('input[name="km"]:checked');
    if (r.value === "app" && r.checked && km && km.value === "40") form.querySelector('input[name="km"][value="200"]').checked = true;
  }));

  // Atalho flutuante para as sugestões, só enquanto elas estão fora da tela (celular).
  const jump = document.getElementById("quizJump");
  if (jump && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => {
      jump.hidden = e.isIntersecting || window.innerWidth > 900;
    }).observe(document.querySelector(".quiz-results"));
  }

  // Link direto para o modo aplicativo: encontre.html?uso=app
  if (new URLSearchParams(location.search).get("uso") === "app") {
    form.querySelector('input[name="uso"][value="app"]').checked = true;
    form.querySelector('input[name="km"][value="200"]').checked = true;
  }

  form.addEventListener("change", calcular);
  calcular();
})();
