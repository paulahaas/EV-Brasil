/**
 * Formulário de venda (vender.html) — EV Brasil
 * Salva o anúncio na coleção "anuncios" do Firestore.
 * A vitrine (veiculos.html) lê essa coleção em js/anuncios.js.
 */
import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

/* ---------- Formatação automática do campo preço (R$) ---------- */
function formatPreco(input) {
  let v = input.value.replace(/\D/g, "");
  if (v) v = parseInt(v, 10).toLocaleString("pt-BR");
  input.value = v;
}

const precoInput = document.getElementById("preco");
if (precoInput) {
  precoInput.addEventListener("input", function () { formatPreco(this); });
}

/* ---------- Envio do formulário ---------- */
const sellForm = document.getElementById("sellForm");
if (sellForm) {
  const submitBtn = sellForm.querySelector('button[type="submit"]');
  const formError = document.getElementById("sellError");

  sellForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const novoCarro = {
      origem: "usuario",
      marca: document.getElementById("marca").value.trim(),
      modelo: document.getElementById("modelo").value.trim(),
      ano: parseInt(document.getElementById("ano").value, 10),
      quilometragem: parseInt(document.getElementById("quilometragem").value, 10) || 0,
      tipo_carroceria: document.getElementById("tipo_carroceria").value,
      estado_conservacao: document.getElementById("estado_conservacao").value,
      preco: parseInt(document.getElementById("preco").value.replace(/\D/g, ""), 10) || 0,
      cidade: document.getElementById("cidade").value.trim(),
      estado: document.getElementById("estado").value,
      descricao: document.getElementById("descricao").value.trim(),
      whatsapp: document.getElementById("whatsapp").value.replace(/\D/g, ""),
      data: new Date().toISOString()
    };

    formError.classList.remove("show");
    submitBtn.disabled = true;
    submitBtn.textContent = "Publicando...";

    try {
      await addDoc(collection(db, "anuncios"), novoCarro);
      window.location.href = "veiculos.html?anuncio=ok";
    } catch (erro) {
      console.error(erro);
      formError.classList.add("show");
      submitBtn.disabled = false;
      submitBtn.textContent = "Publicar anúncio";
    }
  });
}
