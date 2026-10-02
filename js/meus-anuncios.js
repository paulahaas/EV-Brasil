/**
 * Meus anúncios (meus-anuncios.html) — EV Brasil
 * Lista os anúncios do usuário logado, com editar e excluir.
 */
import { db } from "./firebase.js";
import { exigirLogin } from "./session.js";
import { criarCardUsuario, mostrarToast, toastDaUrl } from "./anuncio-card.js";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const user = await exigirLogin();

const lista = document.getElementById("myAds");
const vazio = document.getElementById("myAdsEmpty");
const contagem = document.getElementById("myAdsCount");

document.getElementById("myAdsHello").textContent =
  user.displayName ? `Olá, ${user.displayName.split(" ")[0]}` : "Sua conta";
document.getElementById("protegido").hidden = false;

function acoesDoCard(carro) {
  return `
    <a href="vender.html?editar=${encodeURIComponent(carro.id)}" class="btn btn-ghost btn-sm">Editar</a>
    <button type="button" class="btn btn-danger btn-sm" data-excluir="${escapeHtml(carro.id)}">Excluir</button>`;
}

function atualizarContagem() {
  const total = lista.querySelectorAll(".card").length;
  contagem.textContent = total === 1 ? "1 anúncio publicado" : `${total} anúncios publicados`;
  vazio.style.display = total ? "none" : "block";
  contagem.style.display = total ? "" : "none";
}

async function carregar() {
  try {
    const snap = await getDocs(query(collection(db, "anuncios"), where("uid", "==", user.uid)));
    const carros = snap.docs.map((d) => ({ ...d.data(), id: d.id }));
    carros.sort((a, b) => String(b.data || "").localeCompare(String(a.data || "")));
    lista.innerHTML = carros.map((c) => criarCardUsuario(c, acoesDoCard(c))).join("");
    atualizarContagem();
  } catch (erro) {
    console.error(erro);
    contagem.textContent = "Não foi possível carregar seus anúncios. Recarregue a página.";
  }
}

/* ---------- Excluir: o primeiro clique pede confirmação, o segundo apaga ---------- */
lista.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-excluir]");
  if (!btn) return;

  if (!btn.dataset.confirmando) {
    btn.dataset.confirmando = "1";
    btn.textContent = "Confirmar exclusão";
    setTimeout(() => {
      delete btn.dataset.confirmando;
      btn.textContent = "Excluir";
    }, 4000);
    return;
  }

  btn.disabled = true;
  btn.textContent = "Excluindo...";
  try {
    await deleteDoc(doc(db, "anuncios", btn.dataset.excluir));
    btn.closest(".card").remove();
    atualizarContagem();
    mostrarToast("Anúncio excluído.");
  } catch (erro) {
    console.error(erro);
    btn.disabled = false;
    btn.textContent = "Excluir";
    mostrarToast("Não foi possível excluir. Tente novamente.");
  }
});

carregar();
toastDaUrl({ atualizado: "✅ Anúncio atualizado!" });
