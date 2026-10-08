/**
 * Gera as versões leves (WebP) das fotos dos modelos.
 * -------------------------------------------------
 * Para cada assets/carros/<id>.jpg (original de 1920px, baixado do Wikimedia
 * Commons), cria <id>-480.webp, <id>-960.webp e <id>-1600.webp. O site usa só
 * os WebP: o navegador escolhe o tamanho certo para a tela (srcset em
 * js/car-svg.js). Os JPG ficam no repositório como originais e não são publicados.
 *
 * Uso: npm run imagens  (só refaz o que estiver faltando; --todas refaz tudo)
 */
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const PASTA = "assets/carros";
const LARGURAS = [480, 960, 1600];
const QUALIDADE = 72;
const refazer = process.argv.includes("--todas");

const existe = (f) => stat(f).then(() => true, () => false);
const originais = (await readdir(PASTA)).filter((f) => /^[a-z0-9-]+\.jpg$/.test(f) && !/-960\.jpg$/.test(f));

let antes = 0, depois = 0, feitas = 0;
for (const arquivo of originais) {
  const id = arquivo.replace(/\.jpg$/, "");
  antes += (await stat(join(PASTA, arquivo))).size;
  for (const w of LARGURAS) {
    const saida = join(PASTA, `${id}-${w}.webp`);
    if (refazer || !(await existe(saida))) {
      await sharp(join(PASTA, arquivo)).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALIDADE }).toFile(saida);
      feitas++;
    }
    if (w === 960) depois += (await stat(saida)).size;
  }
}

const mb = (n) => (n / 1048576).toFixed(1) + " MB";
console.log(`${originais.length} fotos, ${feitas} arquivos gerados.`);
console.log(`Originais JPG: ${mb(antes)} · WebP de 960px (os dos cards): ${mb(depois)}`);
