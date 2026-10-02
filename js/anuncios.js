/**
 * Anúncios de particulares na vitrine (veiculos.html) — EV Brasil
 * Lê a coleção "anuncios" do Firestore (gravada por js/sell.js) e
 * desenha os cards abaixo do catálogo.
 */
import { db } from "./firebase.js";
import { criarCardUsuario, toastDaUrl } from "./anuncio-card.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

async function carregarAnunciosUsuario() {
  const container = document.getElementById("userVehicles");
  if (!container) return;

  let carros = [];
  try {
    const snap = await getDocs(collection(db, "anuncios"));
    carros = snap.docs
      .map((d) => ({ ...d.data(), id: d.id }))
      // Ignora documentos incompletos (ex.: criados vazios pelo console do Firebase).
      .filter((c) => c.marca && c.modelo);
  } catch (erro) {
    console.error("Não foi possível carregar os anúncios:", erro);
    return;
  }

  if (carros.length === 0) return;

  // Mais recentes primeiro.
  carros.sort((a, b) => String(b.data || "").localeCompare(String(a.data || "")));

  container.innerHTML = `
    <div class="section-head user-ads-head">
      <span class="eyebrow">Anúncios de particulares</span>
      <h2 class="section-title">Veículos de proprietários</h2>
      <p class="section-sub">${carros.length} ${carros.length === 1 ? "veículo anunciado" : "veículos anunciados"} pela comunidade.</p>
    </div>
    <div class="grid">${carros.map((c) => criarCardUsuario(c)).join("")}</div>`;
}

carregarAnunciosUsuario();
toastDaUrl({ ok: "✅ Veículo publicado com sucesso!" });
