/**
 * Formulário de contato (index.html#contato) — EV Brasil
 * Grava cada mensagem na coleção "contatos" do Firestore.
 * Ninguém lê essa coleção pelo site: as mensagens aparecem no console do
 * Firebase (Firestore > contatos).
 */
import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const ok = document.getElementById("formMsg");
const erro = document.getElementById("contactError");
const campo = (id) => document.getElementById(id);

function mostrarErro(texto, foco) {
  erro.textContent = texto;
  erro.classList.add("show");
  if (foco) foco.focus();
}

if (form) {
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    ok.classList.remove("show");
    erro.classList.remove("show");

    const modelo = campo("modelo");
    const dados = {
      nome: campo("nome").value.trim(),
      email: campo("email").value.trim(),
      telefone: campo("telefone").value.trim(),
      // Guarda o nome do modelo (ex.: "BYD Seal"), não o id interno.
      modelo: modelo.value ? modelo.selectedOptions[0].textContent : "",
      mensagem: campo("mensagem").value.trim(),
      data: new Date().toISOString()
    };

    if (!dados.nome) return mostrarErro("Informe seu nome.", campo("nome"));
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(dados.email)) {
      return mostrarErro("Informe um e-mail válido.", campo("email"));
    }

    btn.disabled = true;
    btn.textContent = "Enviando...";

    try {
      await addDoc(collection(db, "contatos"), dados);
      form.reset();
      ok.classList.add("show");
      setTimeout(() => ok.classList.remove("show"), 6000);
    } catch (falha) {
      console.error(falha);
      mostrarErro("Não foi possível enviar sua mensagem. Verifique sua conexão e tente novamente.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Enviar mensagem";
    }
  });
}
