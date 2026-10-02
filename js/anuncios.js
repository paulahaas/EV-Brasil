/**
 * Anúncios de particulares na vitrine (veiculos.html) — EV Brasil
 * Lê a coleção "anuncios" do Firestore (gravada por js/sell.js) e
 * desenha os cards abaixo do catálogo, respeitando os filtros da página.
 */
import { db } from "./firebase.js";
import { criarCardUsuario, tipoCatalogo, toastDaUrl } from "./anuncio-card.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const container = document.getElementById("userVehicles");
let carros = [];

// js/veiculos.js guarda os filtros em window.catalogFilters e avisa a cada mudança.
function render() {
  const f = window.catalogFilters || { q: "", brand: "Todas", type: "Todos", maxPrice: 0, minRange: 0, sort: "destaque" };
  const q = f.q.toLowerCase();

  const lista = carros.filter((c) => {
    // Anúncios não informam autonomia, então saem quando esse filtro está ligado.
    if (f.minRange) return false;
    const okMarca = f.brand === "Todas" || String(c.marca).trim().toLowerCase() === f.brand.toLowerCase();
    const okTipo = f.type === "Todos" || tipoCatalogo(c.tipo_carroceria) === f.type;
    const okPreco = !f.maxPrice || c.preco <= f.maxPrice;
    const okTexto = !q || `${c.marca} ${c.modelo} ${c.cidade}`.toLowerCase().includes(q);
    return okMarca && okTipo && okPreco && okTexto;
  });

  if (f.sort === "menor") lista.sort((a, b) => a.preco - b.preco);
  else if (f.sort === "maior") lista.sort((a, b) => b.preco - a.preco);
  // Padrão: mais recentes primeiro.
  else lista.sort((a, b) => String(b.data || "").localeCompare(String(a.data || "")));

  if (lista.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <div class="section-head user-ads-head">
      <span class="eyebrow">Anúncios de particulares</span>
      <h2 class="section-title">Veículos de proprietários</h2>
      <p class="section-sub">${lista.length} ${lista.length === 1 ? "veículo anunciado" : "veículos anunciados"} pela comunidade.</p>
    </div>
    <div class="grid">${lista.map((c) => criarCardUsuario(c)).join("")}</div>`;
}

async function carregar() {
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
  render();
}

if (container) {
  document.addEventListener("catalogo:filtros", render);
  carregar();
}
toastDaUrl({ ok: "✅ Veículo publicado com sucesso!" });
