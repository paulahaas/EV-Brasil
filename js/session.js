/**
 * Sessão do usuário — EV Brasil
 * Mostra "Entrar" ou "Meus anúncios / Sair" no cabeçalho e oferece
 * exigirLogin() para as páginas que só funcionam com conta.
 */
import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/** Página atual (ex.: "vender.html?editar=abc"), usada para voltar depois do login. */
function paginaAtual() {
  const pagina = location.pathname.split("/").pop() || "index.html";
  return pagina + location.search;
}

function linkLogin() {
  return "login.html?next=" + encodeURIComponent(paginaAtual());
}

function renderAuth(user) {
  const slot = document.getElementById("authSlot");
  if (!slot) return;

  if (!user) {
    slot.innerHTML = `<a href="${linkLogin()}">Entrar</a>`;
    return;
  }

  const ativo = location.pathname.endsWith("meus-anuncios.html") ? "active" : "";
  slot.innerHTML = `
    <a href="meus-anuncios.html" class="${ativo}">Meus anúncios</a>
    <button type="button" class="nav-link-btn" id="btnSair">Sair</button>`;

  document.getElementById("btnSair").addEventListener("click", async () => {
    await signOut(auth);
    location.href = "index.html";
  });
}

onAuthStateChanged(auth, renderAuth);

/**
 * Devolve o usuário logado. Se não houver, manda para o login
 * (e a promessa nunca resolve, porque a página está saindo).
 */
export async function exigirLogin() {
  await auth.authStateReady();
  if (auth.currentUser) return auth.currentUser;
  location.replace(linkLogin());
  return new Promise(() => {});
}
