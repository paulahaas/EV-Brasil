/**
 * Card de anúncio de particular — EV Brasil
 * Usado na vitrine (js/anuncios.js) e em "Meus anúncios" (js/meus-anuncios.js).
 *
 * Usa escapeHtml() de main.js, formatBRL() de data.js e carSilhouette() de car-svg.js.
 */
import { fotoValida } from "./fotos.js";

export const COR_ANUNCIO = "#22d3ee";

/** O formulário de venda escreve "Sedan"; o catálogo, "Sedã". */
export function tipoCatalogo(tipo) {
  return tipo === "Sedan" ? "Sedã" : tipo;
}

export function whatsappLink(carro) {
  let wa = String(carro.whatsapp || "").replace(/\D/g, "");
  if (!wa) return "";
  if (wa.length <= 11) wa = "55" + wa;
  const texto = `Olá! Tenho interesse no ${carro.marca} ${carro.modelo} anunciado na EV Brasil.`;
  return `https://wa.me/${wa}?text=${encodeURIComponent(texto)}`;
}

/** Foto de capa do anúncio ou, sem foto, a silhueta do tipo de carroceria. */
export function midiaDoAnuncio(carro) {
  if (fotoValida(carro.capa)) {
    return `<div class="card-media has-photo"><img src="${carro.capa}" alt="" loading="lazy"></div>`;
  }
  return `
    <div class="card-media" style="--glow:${COR_ANUNCIO}">
      ${carSilhouette(tipoCatalogo(carro.tipo_carroceria), COR_ANUNCIO)}
    </div>`;
}

/**
 * @param carro   dados do anúncio (com `id` do documento)
 * @param acoes   HTML dos botões do card; por padrão, o botão de WhatsApp
 */
export function criarCardUsuario(carro, acoes) {
  const km = (Number(carro.quilometragem) || 0).toLocaleString("pt-BR");

  if (acoes === undefined) {
    const waLink = whatsappLink(carro);
    acoes = waLink
      ? `<a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">WhatsApp</a>`
      : "";
  }

  return `
    <div class="card user-card" data-anuncio="${escapeHtml(carro.id)}">
      <a class="card-link" href="anuncio.html?id=${encodeURIComponent(carro.id)}">
        ${midiaDoAnuncio(carro)}
        <div class="card-body">
          <span class="card-flag">Anúncio de particular</span>
          <h3 class="card-title">${escapeHtml(carro.marca)} ${escapeHtml(carro.modelo)}</h3>
          <p class="card-meta">${escapeHtml(carro.ano)} · ${km} km · ${escapeHtml(carro.estado_conservacao)}</p>
          <p class="card-meta">${escapeHtml(carro.cidade)} - ${escapeHtml(carro.estado)}</p>
          <p class="card-price">${formatBRL(Number(carro.preco) || 0)}</p>
        </div>
      </a>
      <div class="card-actions">${acoes}</div>
    </div>`;
}

/** Aviso que desce do topo e some sozinho. */
export function mostrarToast(texto) {
  const banner = document.createElement("div");
  banner.className = "toast-success";
  banner.textContent = texto;
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add("show"), 100);
  setTimeout(() => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 400);
  }, 4000);
}

/** Mostra o toast se a URL tiver ?anuncio=<chave> e limpa o parâmetro. */
export function toastDaUrl(mensagens) {
  const chave = new URLSearchParams(location.search).get("anuncio");
  if (!chave || !mensagens[chave]) return;
  mostrarToast(mensagens[chave]);
  history.replaceState(null, "", location.pathname);
}
