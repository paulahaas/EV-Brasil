/**
 * Lista de espera do relatório completo (encontre.html#relatorio).
 * -------------------------------------------------
 * Teste de interesse: o botão "Relatório completo — R$ 9,90" não cobra nada; abre o
 * aviso de que o relatório ainda não está à venda e o campo de e-mail.
 * Cada clique no botão e cada e-mail vão para um Google Formulário da dona do site
 * (as respostas caem numa Planilha Google só dela):
 *   - clique: só o tipo "clique" e a data (nenhum dado pessoal), para medir o interesse;
 *   - e-mail: tipo "email", o e-mail e o registro do consentimento.
 * Para ligar: preencha FORM (o código do formulário, entre /d/e/ e /viewform) e os
 * campos entry.N de cada pergunta. Vazio, o envio fica desligado e o site avisa.
 */
(function () {
  const LISTA_ESPERA = {
    form: "1FAIpQLSfEc8icz9FHy16kleGl1tc2nO8LInRSd4mA8uhpM756cpBZ4A", // https://docs.google.com/forms/d/e/<form>/viewform
    tipo: "entry.1562360689",          // pergunta "Tipo"
    email: "entry.1656225695",         // pergunta "E-mail"
    consentimento: "entry.1394660246", // pergunta "Consentimento"
  };
  const ligado = Object.values(LISTA_ESPERA).every(Boolean);

  const btn = document.getElementById("ofertaBtn");
  const caixa = document.getElementById("listaEspera");
  const form = document.getElementById("esperaForm");
  if (!btn || !caixa || !form) return;
  const email = document.getElementById("esperaEmail");
  const ok = document.getElementById("esperaOk");
  const pronto = document.getElementById("esperaPronto");
  const erro = document.getElementById("esperaErro");

  // O Google Formulário não responde para outros sites (no-cors): se a rede aceitou, chegou.
  function enviar(campos) {
    if (!ligado) return Promise.reject(new Error("desligado"));
    const dados = new FormData();
    dados.append(LISTA_ESPERA.tipo, campos.tipo);
    if (campos.email) dados.append(LISTA_ESPERA.email, campos.email);
    if (campos.consentimento) dados.append(LISTA_ESPERA.consentimento, campos.consentimento);
    return fetch(`https://docs.google.com/forms/d/e/${LISTA_ESPERA.form}/formResponse`, { method: "POST", mode: "no-cors", body: dados });
  }

  // Lembra neste navegador quem já entrou na lista (comodidade; funciona sem isso).
  const lembrar = () => { try { localStorage.setItem("ev-lista-espera", "1"); } catch (e) { /* sem armazenamento */ } };
  let jaNaLista = false;
  try { jaNaLista = localStorage.getItem("ev-lista-espera") === "1"; } catch (e) { /* sem armazenamento */ }

  function mostrarErro(texto) {
    erro.textContent = texto;
    erro.classList.add("show");
  }

  let contouClique = false;
  btn.addEventListener("click", () => {
    caixa.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.hidden = true;
    if (jaNaLista) {
      form.hidden = true;
      pronto.textContent = "Seu e-mail já está na lista. Quando o relatório sair, mandamos o aviso.";
      pronto.classList.add("show");
      return;
    }
    email.focus();
    // Um clique por visita basta para medir o interesse.
    if (!contouClique) { contouClique = true; enviar({ tipo: "clique" }).catch(() => {}); }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erro.classList.remove("show");
    const valor = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) { mostrarErro("Confira o e-mail: parece que falta alguma parte."); email.focus(); return; }
    if (!ok.checked) { mostrarErro("Para entrar na lista, marque a caixa de consentimento."); ok.focus(); return; }
    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;
    const quando = new Date().toLocaleString("pt-BR");
    enviar({ tipo: "email", email: valor, consentimento: `Aceito receber um único aviso sobre o relatório (${quando})` })
      .then(() => {
        form.hidden = true;
        pronto.classList.add("show");
        lembrar();
      })
      .catch((falha) => {
        botao.disabled = false;
        mostrarErro(falha.message === "desligado"
          ? "A lista de espera ainda está sendo preparada. Volte em breve."
          : "Não conseguimos registrar agora. Confira a internet e tente de novo.");
      });
  });
})();
