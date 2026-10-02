/**
 * Ilustrações vetoriais (SVG) dos carros.
 * -------------------------------------------------
 * Em vez de depender de imagens externas, o site desenha silhuetas
 * de carros em SVG, coloridas com a cor de cada veículo. Isso deixa
 * tudo rápido, leve e fácil de personalizar.
 *
 * Se quiser usar fotos reais no futuro, basta trocar a função
 * `carImage()` para retornar uma tag <img src="..."> apontando para
 * seus próprios arquivos na pasta /assets.
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
  const shape = shapes[bodyType] || shapes.Hatch;
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

/** Retorna o HTML da "imagem" do carro (atualmente uma silhueta SVG). */
function carImage(vehicle) {
  return carSilhouette(vehicle.bodyType, vehicle.color);
}
