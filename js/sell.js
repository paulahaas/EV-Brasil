/**
 * Formulário de venda (vender.html) — EV Brasil
 * Só para quem está logado. Cria um anúncio na coleção "anuncios" do
 * Firestore ou, com vender.html?editar=<id>, altera um anúncio do próprio usuário.
 * A vitrine (veiculos.html) lê essa coleção em js/anuncios.js.
 */
import { db } from "./firebase.js";
import { exigirLogin } from "./session.js";
import { reduzirFoto, fotoValida, MAX_FOTOS, LADO_CAPA } from "./fotos.js";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc
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

/* ---------- Fotos ---------- */
// Data URLs já reduzidos, na ordem de exibição. A primeira é a capa do anúncio.
let fotos = [];
// Quantas fotos o anúncio tinha ao abrir a edição (para apagar as que sobrarem).
let fotosAntes = 0;

const fotosInput = campo("fotos");
const fotosPreview = document.getElementById("fotosPreview");
const fotosHint = document.getElementById("fotosHint");

function renderFotos() {
  fotosPreview.innerHTML = fotos
    .map((src, i) => `
      <div class="foto-thumb">
        <img src="${src}" alt="Foto ${i + 1}">
        ${i === 0 ? '<span class="foto-capa">Capa</span>' : ""}
        <button type="button" data-remover="${i}" aria-label="Remover foto ${i + 1}">×</button>
      </div>`)
    .join("");
  fotosInput.disabled = fotos.length >= MAX_FOTOS;
  fotosHint.textContent = fotos.length >= MAX_FOTOS
    ? `Limite de ${MAX_FOTOS} fotos atingido. Remova uma para trocar.`
    : `Até ${MAX_FOTOS} fotos. A primeira é a capa do anúncio.`;
}

fotosInput.addEventListener("change", async () => {
  const arquivos = Array.from(fotosInput.files).slice(0, MAX_FOTOS - fotos.length);
  fotosInput.value = "";
  formError.classList.remove("show");

  for (const arquivo of arquivos) {
    try {
      fotos.push(await reduzirFoto(arquivo));
      renderFotos();
    } catch (erro) {
      console.error(erro);
      mostrarErro(`Não foi possível usar "${arquivo.name}". Tente outra foto (JPG ou PNG).`);
    }
  }
});

fotosPreview.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-remover]");
  if (!btn) return;
  fotos.splice(Number(btn.dataset.remover), 1);
  renderFotos();
});

/** Grava as fotos em anuncios/{id}/fotos/{0..n} e apaga as que sobraram de antes. */
async function salvarFotos(anuncioId) {
  const col = collection(db, "anuncios", anuncioId, "fotos");
  await Promise.all(fotos.map((dados, i) => setDoc(doc(col, String(i)), { dados, ordem: i })));
  for (let i = fotos.length; i < fotosAntes; i++) {
    await deleteDoc(doc(col, String(i)));
  }
}

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
    if (snap.exists() && snap.data().uid === user.uid) {
      anuncio = snap.data();
      const fotosSnap = await getDocs(collection(db, "anuncios", editarId, "fotos"));
      fotosAntes = fotosSnap.size;
      fotos = fotosSnap.docs
        .map((d) => d.data())
        .sort((a, b) => a.ordem - b.ordem)
        .map((f) => f.dados)
        .filter(fotoValida);
    }
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

renderFotos();

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
    // A miniatura da capa vai no próprio anúncio, para a vitrine não baixar as fotos grandes.
    dados.capa = fotos.length ? await reduzirFoto(fotos[0], LADO_CAPA) : "";
    dados.fotos = fotos.length;

    if (editarId) {
      await updateDoc(doc(db, "anuncios", editarId), dados);
      await salvarFotos(editarId);
      window.location.href = "meus-anuncios.html?anuncio=atualizado";
    } else {
      const ref = await addDoc(collection(db, "anuncios"), {
        ...dados,
        origem: "usuario",
        uid: user.uid,
        data: new Date().toISOString()
      });
      await salvarFotos(ref.id);
      window.location.href = "veiculos.html?anuncio=ok";
    }
  } catch (erro) {
    console.error(erro);
    mostrarErro("Não foi possível salvar o anúncio. Verifique sua conexão e tente novamente.");
    submitBtn.disabled = false;
    submitBtn.textContent = textoBotao;
  }
});
