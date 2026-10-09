/**
 * Ilustrações vetoriais (SVG) dos carros.
 * -------------------------------------------------
 * Em vez de depender de imagens externas, o site desenha silhuetas
 * de carros em SVG, coloridas com a cor de cada veículo. Isso deixa
 * tudo rápido, leve e fácil de personalizar.
 *
 * Quando o modelo tem foto real (campo `photo` em data.js), carImage()
 * devolve a foto no lugar da silhueta.
 */

// Cada SVG precisa de ids próprios: com ids repetidos na página, todos os
// carros pegariam a cor do primeiro.
let carSvgCount = 0;

function carSilhouette(bodyType, color) {
  const c = color || "#3b82f6";
  const body = "car-body-" + ++carSvgCount;
  const glow = "car-glow-" + carSvgCount;
  const shapes = {
    Hatch: `
      <path d="M60 175 Q70 120 130 112 L200 105 Q250 70 330 72 L430 78 Q490 84 540 118 L610 132 Q650 140 655 175 Z" fill="url(#${body})"/>
      <path d="M205 108 Q250 82 320 84 L400 88 Q450 92 490 116 L300 118 Z" fill="#0b1220" opacity="0.55"/>
    `,
    Sedã: `
      <path d="M50 178 Q60 128 120 120 L210 110 Q270 68 380 70 L500 78 Q580 86 640 128 L700 142 Q735 150 738 178 Z" fill="url(#${body})"/>
      <path d="M215 114 Q275 80 375 82 L470 88 Q535 94 580 126 L300 126 Z" fill="#0b1220" opacity="0.55"/>
    `,
    SUV: `
      <path d="M50 178 Q58 118 120 108 L200 100 Q250 60 350 62 L470 70 Q560 78 620 112 L700 130 Q740 138 742 178 Z" fill="url(#${body})"/>
      <path d="M205 104 Q255 74 345 76 L450 82 Q525 88 575 118 L300 118 Z" fill="#0b1220" opacity="0.55"/>
    `,
  };
  // Carrocerias sem desenho próprio usam a mais parecida.
  const parecida = { Perua: "Sedã", Esportivo: "Sedã", Picape: "SUV" };
  const shape = shapes[bodyType] || shapes[parecida[bodyType]] || shapes.Hatch;
  return `
    <svg viewBox="0 0 800 230" xmlns="http://www.w3.org/2000/svg" class="car-svg" role="img" aria-label="Ilustração do veículo">
      <defs>
        <linearGradient id="${body}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${c}"/>
          <stop offset="100%" stop-color="${shade(c, -35)}"/>
        </linearGradient>
        <radialGradient id="${glow}" cx="50%" cy="120%" r="80%">
          <stop offset="0%" stop-color="${c}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${c}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="400" cy="205" rx="330" ry="26" fill="url(#${glow})"/>
      ${shape}
      <circle cx="215" cy="180" r="42" fill="#0b1220"/>
      <circle cx="215" cy="180" r="42" fill="none" stroke="${shade(c, 40)}" stroke-width="4"/>
      <circle cx="215" cy="180" r="18" fill="#1e293b"/>
      <circle cx="585" cy="180" r="42" fill="#0b1220"/>
      <circle cx="585" cy="180" r="42" fill="none" stroke="${shade(c, 40)}" stroke-width="4"/>
      <circle cx="585" cy="180" r="18" fill="#1e293b"/>
    </svg>
  `;
}

/** Clareia (+) ou escurece (-) uma cor hex por uma quantidade. */
function shade(hex, amount) {
  let col = hex.replace("#", "");
  if (col.length === 3) col = col.split("").map((x) => x + x).join("");
  const num = parseInt(col, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}

/** O modelo tem foto real? (campo `photo`, preenchido em data.js) */
function hasPhoto(vehicle) {
  return !!(vehicle && vehicle.photo && vehicle.photo.src);
}

/**
 * Atributos src/srcset da foto em WebP (480, 960 e 1600px, gerados por
 * `npm run imagens`). O navegador baixa só o tamanho que a tela precisa;
 * `sizes` diz quanto da largura da tela a imagem ocupa.
 */
const TAMANHOS = {
  card: "(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 340px",
  grande: "(max-width: 1100px) 100vw, 1100px",
  tela: "100vw",
};
function fotoAttrs(vehicle, tamanho) {
  const base = vehicle.photo.src.replace(/\.jpg$/, "");
  return `src="${base}-960.webp" srcset="${base}-480.webp 480w, ${base}-960.webp 960w, ${base}-1600.webp 1600w" sizes="${TAMANHOS[tamanho]}"`;
}

/**
 * Retorna o HTML da imagem do carro: a foto, se houver, ou a silhueta SVG.
 * `grande` = foto de destaque (página do modelo), que carrega logo.
 */
function carImage(vehicle, grande) {
  if (hasPhoto(vehicle)) {
    return `<img class="car-photo" ${fotoAttrs(vehicle, grande ? "grande" : "card")} alt="${vehicle.brand} ${vehicle.model}"${grande ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
  }
  return carSilhouette(vehicle.bodyType, vehicle.color);
}

/** Crédito da foto (as licenças livres exigem citar autor e licença). */
function photoCredit(vehicle) {
  const p = vehicle.photo;
  return `<p class="photo-credit">Foto: <a href="${p.page}" target="_blank" rel="noopener">${escapeHtml(p.author)}</a> · ${escapeHtml(p.license)}</p>`;
}

/** Miolo dos painéis de modelo: foto grande emoldurada ou silhueta. */
function panelVisual(vehicle) {
  return carImage(vehicle, hasPhoto(vehicle));
}
