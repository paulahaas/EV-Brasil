/**
 * Login e cadastro (login.html / cadastro.html) — EV Brasil
 */
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/* ---------- Para onde ir depois de entrar (?next=pagina.html) ---------- */
// Só aceita páginas do próprio site, para o link de login não virar redirecionamento para fora.
function destino() {
  const next = new URLSearchParams(location.search).get("next") || "";
  return /^[\w-]+\.html(\?[\w=&%.-]*)?$/.test(next) ? next : "index.html";
}

// "Criar conta" <-> "Entrar" levam o ?next= junto.
document.querySelectorAll("[data-manter-next]").forEach((a) => {
  a.href = a.getAttribute("href") + location.search;
});

/* ---------- Mensagens de erro em português ---------- */
const MENSAGENS = {
  "auth/email-already-in-use": "Já existe uma conta com este e-mail.",
  "auth/invalid-email": "E-mail inválido.",
  "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
  "auth/invalid-credential": "E-mail ou senha incorretos.",
  "auth/user-not-found": "E-mail ou senha incorretos.",
  "auth/wrong-password": "E-mail ou senha incorretos.",
  "auth/too-many-requests": "Muitas tentativas. Aguarde alguns minutos e tente de novo.",
  "auth/network-request-failed": "Sem conexão. Verifique sua internet e tente de novo."
};

function mostrarErro(erro) {
  console.error(erro);
  const el = document.getElementById("authError");
  el.textContent = MENSAGENS[erro.code] || "Não foi possível concluir. Tente novamente.";
  el.classList.add("show");
}

function enviando(form, texto) {
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = texto;
  document.getElementById("authError").classList.remove("show");
  return () => {
    btn.disabled = false;
    btn.textContent = original;
  };
}

/* ---------- Cadastro ---------- */
const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
  cadastroForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const liberar = enviando(cadastroForm, "Criando conta...");

    try {
      const credencial = await createUserWithEmailAndPassword(auth, email, senha);
      await updateProfile(credencial.user, { displayName: nome });
      // Criar a conta já deixa a pessoa logada.
      window.location.href = destino();
    } catch (erro) {
      mostrarErro(erro);
      liberar();
    }
  });
}

/* ---------- Login ---------- */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const liberar = enviando(loginForm, "Entrando...");

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = destino();
    } catch (erro) {
      mostrarErro(erro);
      liberar();
    }
  });
}
