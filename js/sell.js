/**
 * Formulário de venda (vender.html) — EV Brasil
 * Só para quem está logado. Cria um anúncio na coleção "anuncios" do
 * Firestore ou, com vender.html?editar=<id>, altera um anúncio do próprio usuário.
 * A vitrine (veiculos.html) lê essa coleção em js/anuncios.js.
 */
import { db } from "./firebase.js";
import { exigirLogin } from "./session.js";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const user = await exigirLogin();

const sellForm = document.getElementById("sellForm");
const submitBtn = sellForm.querySelector('button[type="submit"]');
const formError = document.getElementById("sellError");
const campo = (id) => document.getElementById(id);

const CAMPOS_TEXTO = ["marca", "modelo", "ano", "quilometragem", "tipo_carroceria",
  "estado_conservacao", "cidade", "estado", "descricao", "whatsapp"];

function mostrarErro(texto) {
  formError.textContent = texto;
  formError.classList.add("show");
}

/* ---------- Formatação automática do campo preço (R$) ---------- */
function formatPreco(input) {
  let v = input.value.replace(/\D/g, "");
  if (v) v = parseInt(v, 10).toLocaleString("pt-BR");
  input.value = v;
}

campo("preco").addEventListener("input", function () { formatPreco(this); });

/* ---------- Modo edição (vender.html?editar=<id>) ---------- */
const editarId = new URLSearchParams(location.search).get("editar");
let textoBotao = "Publicar anúncio";

if (editarId) {
  textoBotao = "Salvar alterações";
  submitBtn.textContent = textoBotao;
  document.getElementById("sellTitle").textContent = "Editar anúncio";
  document.getElementById("sellSub").textContent = "Altere os dados e salve. A vitrine é atualizada na hora.";
  document.title = "Editar anúncio | EV Brasil";

  let anuncio = null;
  try {
    const snap = await getDoc(doc(db, "anuncios", editarId));
    if (snap.exists() && snap.data().uid === user.uid) anuncio = snap.data();
  } catch (erro) {
    console.error(erro);
  }

  if (anuncio) {
    CAMPOS_TEXTO.forEach((id) => { campo(id).value = anuncio[id] ?? ""; });
    campo("preco").value = anuncio.preco;
    formatPreco(campo("preco"));
  } else {
    sellForm.querySelector(".form-grid").hidden = true;
    submitBtn.hidden = true;
    mostrarErro("Anúncio não encontrado, ou ele não pertence à sua conta.");
  }
}

// Só mostra a página depois de confirmar o login (e carregar o anúncio, se for edição).
document.getElementById("protegido").hidden = false;

/* ---------- Envio do formulário ---------- */
sellForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const dados = {
    marca: campo("marca").value.trim(),
    modelo: campo("modelo").value.trim(),
    ano: parseInt(campo("ano").value, 10),
    quilometragem: parseInt(campo("quilometragem").value, 10) || 0,
    tipo_carroceria: campo("tipo_carroceria").value,
    estado_conservacao: campo("estado_conservacao").value,
    preco: parseInt(campo("preco").value.replace(/\D/g, ""), 10) || 0,
    cidade: campo("cidade").value.trim(),
    estado: campo("estado").value,
    descricao: campo("descricao").value.trim(),
    whatsapp: campo("whatsapp").value.replace(/\D/g, "")
  };

  if (dados.whatsapp.length < 10 || dados.whatsapp.length > 13) {
    mostrarErro("Informe o WhatsApp com DDD, só números (ex.: 11999999999).");
    campo("whatsapp").focus();
    return;
  }
  if (dados.preco <= 0) {
    mostrarErro("Informe o preço do veículo.");
    campo("preco").focus();
    return;
  }

  formError.classList.remove("show");
  submitBtn.disabled = true;
  submitBtn.textContent = editarId ? "Salvando..." : "Publicando...";

  try {
    if (editarId) {
      await updateDoc(doc(db, "anuncios", editarId), dados);
      window.location.href = "meus-anuncios.html?anuncio=atualizado";
    } else {
      await addDoc(collection(db, "anuncios"), {
        ...dados,
        origem: "usuario",
        uid: user.uid,
        data: new Date().toISOString()
      });
      window.location.href = "veiculos.html?anuncio=ok";
    }
  } catch (erro) {
    console.error(erro);
    mostrarErro("Não foi possível salvar o anúncio. Verifique sua conexão e tente novamente.");
    submitBtn.disabled = false;
    submitBtn.textContent = textoBotao;
  }
});
