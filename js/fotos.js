/**
 * Fotos dos anúncios — EV Brasil
 * As fotos ficam no próprio Firestore, como texto (data URL em JPEG):
 *   anuncios/{id}            -> campo `capa` (miniatura) e `fotos` (quantidade)
 *   anuncios/{id}/fotos/{n}  -> { dados, ordem }  (uma foto por documento)
 * Por isso cada foto é reduzida no navegador antes de salvar: um documento
 * do Firestore não pode passar de 1 MB.
 */

export const MAX_FOTOS = 6;
export const LADO_FOTO = 1280;   // maior lado da foto, em pixels
export const LADO_CAPA = 480;    // maior lado da miniatura dos cards
const TAMANHO_MAX = 850000;      // caracteres do data URL (as regras do banco aceitam até 900 mil)

/** Só aceita o formato que nós mesmos geramos — nada de texto estranho virando HTML. */
export function fotoValida(dados) {
  return typeof dados === "string" && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(dados);
}

function carregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Imagem inválida"));
    img.src = src;
  });
}

/**
 * Reduz uma imagem e devolve um data URL em JPEG.
 * @param origem  um File escolhido pelo usuário ou um data URL já existente
 * @param lado    maior lado desejado, em pixels
 */
export async function reduzirFoto(origem, lado = LADO_FOTO) {
  const ehArquivo = typeof origem !== "string";
  const src = ehArquivo ? URL.createObjectURL(origem) : origem;

  try {
    const img = await carregarImagem(src);
    const escala = Math.min(1, lado / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.naturalWidth * escala);
    canvas.height = Math.round(img.naturalHeight * escala);
    const ctx = canvas.getContext("2d");
    // Fundo branco: PNG com transparência ficaria preto ao virar JPEG.
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Baixa a qualidade até caber no limite.
    let dados = "";
    for (const qualidade of [0.75, 0.6, 0.45, 0.3]) {
      dados = canvas.toDataURL("image/jpeg", qualidade);
      if (dados.length <= TAMANHO_MAX) break;
    }
    if (dados.length > TAMANHO_MAX || !fotoValida(dados)) throw new Error("Foto grande demais");
    return dados;
  } finally {
    if (ehArquivo) URL.revokeObjectURL(src);
  }
}
