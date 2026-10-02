/**
 * Página de um anúncio de particular (anuncio.html?id=...) — EV Brasil
 * Galeria de fotos à esquerda, dados e contato à direita.
 */
import { db } from "./firebase.js";
import { fotoValida } from "./fotos.js";
import { whatsappLink, tipoCatalogo, COR_ANUNCIO } from "./anuncio-card.js";
import {
  collection,
  doc,
  getDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const root = document.getElementById("adRoot");
const id = new URLSearchParams(location.search).get("id");

function naoEncontrado() {
  root.innerHTML = `
    <div class="empty-state">
      <h2>Anúncio não encontrado</h2>
      <p>Ele pode ter sido removido pelo proprietário.</p>
      <a href="veiculos.html" class="btn btn-primary">Voltar aos veículos</a>
    </div>`;
}

async function carregar() {
  if (!id) return naoEncontrado();

  let carro = null;
  let fotos = [];
  try {
    const snap = await getDoc(doc(db, "anuncios", id));
    if (snap.exists()) {
      carro = snap.data();
      const fotosSnap = await getDocs(collection(db, "anuncios", id, "fotos"));
      fotos = fotosSnap.docs
        .map((d) => d.data())
        .sort((a, b) => a.ordem - b.ordem)
        .map((f) => f.dados)
        .filter(fotoValida);
    }
  } catch (erro) {
    console.error(erro);
  }

  if (!carro || !carro.marca || !carro.modelo) return naoEncontrado();

  const titulo = `${carro.marca} ${carro.modelo}`;
  document.title = `${titulo} — EV Brasil`;

  const km = (Number(carro.quilometragem) || 0).toLocaleString("pt-BR");
  const waLink = whatsappLink(carro);
  const publicado = carro.data ? new Date(carro.data) : null;
  const dataTexto = publicado && !isNaN(publicado) ? publicado.toLocaleDateString("pt-BR") : "";

  const fichas = [
    ["Ano", carro.ano],
    ["Quilometragem", km + " km"],
    ["Estado", carro.estado_conservacao],
    ["Carroceria", carro.tipo_carroceria],
    ["Local", `${carro.cidade} - ${carro.estado}`],
  ].map(([k, v]) => `<tr><td>${k}</td><td>${escapeHtml(v)}</td></tr>`).join("");

  const galeria = fotos.length
    ? `
      <div class="gallery-main"><img id="galleryMain" src="${fotos[0]}" alt="${escapeHtml(titulo)}"></div>
      ${fotos.length > 1 ? `
        <div class="gallery-thumbs">
          ${fotos.map((src, i) => `
            <button type="button" class="gallery-thumb ${i === 0 ? "active" : ""}" data-foto="${i}" aria-label="Ver foto ${i + 1}">
              <img src="${src}" alt="">
            </button>`).join("")}
        </div>` : ""}`
    : `
      <div class="gallery-main gallery-empty" style="--glow:${COR_ANUNCIO}">
        ${carSilhouette(tipoCatalogo(carro.tipo_carroceria), COR_ANUNCIO)}
      </div>
      <p class="form-hint">Este anúncio não tem fotos.</p>`;

  root.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Início</a> ·
      <a href="veiculos.html">Veículos</a> ·
      <span>${escapeHtml(titulo)}</span>
    </nav>

    <div class="ad-layout">
      <div class="gallery">${galeria}</div>

      <div class="ad-info">
        <span class="card-flag">Anúncio de particular</span>
        <h1 class="ad-title">${escapeHtml(titulo)}</h1>
        <p class="ad-price">${formatBRL(Number(carro.preco) || 0)}</p>

        ${waLink ? `<a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-block">Falar no WhatsApp</a>` : ""}

        <table class="spec-table">${fichas}</table>

        ${carro.descricao ? `
          <h2 class="ad-subtitle">Descrição</h2>
          <p class="ad-desc">${escapeHtml(carro.descricao)}</p>` : ""}

        ${dataTexto ? `<p class="form-hint">Publicado em ${dataTexto}</p>` : ""}
      </div>
    </div>`;

  // Troca a foto grande ao clicar numa miniatura.
  root.querySelector(".gallery-thumbs")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-foto]");
    if (!btn) return;
    document.getElementById("galleryMain").src = fotos[Number(btn.dataset.foto)];
    root.querySelectorAll(".gallery-thumb").forEach((t) => t.classList.toggle("active", t === btn));
  });
}

carregar();
