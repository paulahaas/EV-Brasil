/**
 * Anúncios de particulares na vitrine (veiculos.html) — EV Brasil
 * Lê a coleção "anuncios" do Firestore (gravada por js/sell.js) e
 * desenha os cards abaixo do catálogo.
 *
 * Usa escapeHtml() de main.js e formatBRL() de data.js.
 */
import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

function whatsappLink(carro) {
  let wa = String(carro.whatsapp || "").replace(/\D/g, "");
  if (!wa) return "";
  if (wa.length <= 11) wa = "55" + wa;
  const texto = `Olá! Tenho interesse no ${carro.marca} ${carro.modelo} anunciado na EV Brasil.`;
  return `https://wa.me/${wa}?text=${encodeURIComponent(texto)}`;
}

function criarCardUsuario(carro) {
  const descricao = String(carro.descricao || "");
  const resumo = descricao
    ? descricao.substring(0, 80) + (descricao.length > 80 ? "…" : "")
    : "Veículo anunciado por particular.";
  const km = (Number(carro.quilometragem) || 0).toLocaleString("pt-BR");
  const waLink = whatsappLink(carro);
  const gradId = "ub-" + escapeHtml(carro.id);

  return `
    <div class="card user-card">
      <div class="card-media">
        <span class="badge badge-user">Anúncio</span>
        <svg viewBox="0 0 800 230" xmlns="http://www.w3.org/2000/svg" class="car-svg" role="img" aria-label="Ilustração do veículo">
          <defs>
            <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#22d3ee"></stop>
              <stop offset="100%" stop-color="#0891b2"></stop>
            </linearGradient>
          </defs>
          <path d="M60 175 Q70 120 130 112 L200 105 Q250 70 330 72 L430 78 Q490 84 540 118 L610 132 Q650 140 655 175 Z" fill="url(#${gradId})"></path>
          <path d="M205 108 Q250 82 320 84 L400 88 Q450 92 490 116 L300 118 Z" fill="#0b1220" opacity="0.55"></path>
          <circle cx="215" cy="180" r="42" fill="#0b1220"></circle>
          <circle cx="215" cy="180" r="42" fill="none" stroke="#67e8f9" stroke-width="4"></circle>
          <circle cx="215" cy="180" r="18" fill="#1e293b"></circle>
          <circle cx="585" cy="180" r="42" fill="#0b1220"></circle>
          <circle cx="585" cy="180" r="42" fill="none" stroke="#67e8f9" stroke-width="4"></circle>
          <circle cx="585" cy="180" r="18" fill="#1e293b"></circle>
        </svg>
      </div>
      <div class="card-body">
        <span class="card-brand">${escapeHtml(carro.marca)}</span>
        <h3 class="card-title">${escapeHtml(carro.modelo)}</h3>
        <p class="card-tagline">${escapeHtml(resumo)}</p>
        <div class="card-specs">
          <div class="cs"><span class="v">${escapeHtml(carro.ano)}</span><span class="k">Ano</span></div>
          <div class="cs"><span class="v">${km} km</span><span class="k">KM</span></div>
          <div class="cs"><span class="v">${escapeHtml(carro.estado_conservacao)}</span><span class="k">Estado</span></div>
        </div>
        <div class="card-foot">
          <div class="card-price">${formatBRL(Number(carro.preco) || 0)}<small>${escapeHtml(carro.cidade)} - ${escapeHtml(carro.estado)}</small></div>
          ${waLink ? `<a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">WhatsApp</a>` : ""}
        </div>
      </div>
    </div>`;
}

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
    <div class="section-head" style="margin-top:60px;">
      <span class="eyebrow">Anúncios de particulares</span>
      <h2 class="section-title" style="font-size:1.8rem;">Veículos de proprietários</h2>
      <p class="section-sub">${carros.length} ${carros.length === 1 ? "veículo anunciado" : "veículos anunciados"} pela comunidade.</p>
    </div>
    <div class="grid">${carros.map(criarCardUsuario).join("")}</div>`;
}

/* ---------- Mensagem de sucesso após publicar (veiculos.html?anuncio=ok) ---------- */
function mostrarMensagemSucesso() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("anuncio") !== "ok") return;

  const banner = document.createElement("div");
  banner.className = "toast-success";
  banner.textContent = "✅ Veículo publicado com sucesso!";
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add("show"), 100);
  setTimeout(() => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 400);
  }, 4000);
  history.replaceState(null, "", location.pathname);
}

carregarAnunciosUsuario();
mostrarMensagemSucesso();
