# EV Brasil ⚡ — Guia dos carros elétricos no Brasil

**Seu próximo carro é elétrico. Qual deles?**

Site de pesquisa que compara os carros 100% elétricos à venda no Brasil com dados
públicos: autonomia e consumo medidos pelo **Inmetro** e preço com fonte e data.
O site não vende carros.

No ar em **https://ev-brasil.web.app** (Firebase Hosting).

Feito com **HTML + CSS + JavaScript puro**, sem framework.

---

## 🗂️ Estrutura

```
ev-brasil/
├── index.html          # Home: abertura, gráfico preço × autonomia, ferramentas, rankings
├── veiculos.html       # Catálogo com busca e filtros
├── carros/<id>.html    # GERADO: uma página por modelo (prévia para WhatsApp e Google)
├── veiculo.html        # Modelo das páginas acima; o endereço antigo ?id= redireciona
├── encontre.html       # Questionário "Qual é o meu?"
├── rankings.html       # Rankings (critério explicado em cada um)
├── comparar.html       # Até três modelos lado a lado
├── calculadora.html    # Economia elétrico × gasolina e custo total em 5 anos
├── guias.html, guia-*.html  # Guias: recarga em casa, autonomia, IPVA, usado
├── metodologia.html    # De onde vêm os dados
├── creditos.html       # Autores e licenças das fotos
├── css/styles.css      # Todo o visual (cores no topo do arquivo)
├── js/
│   ├── catalogo.js     # GERADO por scripts/gerar-dados.mjs — não editar à mão
│   ├── data.js         # Funções auxiliares sobre o catálogo
│   ├── car-svg.js      # Fotos (WebP em 3 tamanhos) e silhuetas
│   ├── main.js         # Cabeçalho, rodapé e card (compartilhados)
│   └── home.js, grafico.js, veiculos.js, veiculo.js, encontre.js,
│       rankings.js, comparar.js, simulador.js, custo-total.js
├── dados/              # Fonte dos dados (não vai para o ar)
│   ├── inmetro-pbev-2026-eletricos.json   # elétricos da tabela PBE Veicular 2026
│   ├── precos-2026-10.jsonl               # preços coletados, com fonte
│   ├── fichas.json                        # ficha técnica, com versão e fonte
│   ├── ipva-2026.json                     # IPVA por estado (gasolina e elétrico)
│   ├── modelos.json                       # nome de exibição, carroceria, cor
│   └── fotos.json                         # fotos e créditos
├── scripts/
│   ├── gerar-dados.mjs      # dados/ → js/catalogo.js e sitemap.xml
│   ├── gerar-paginas.mjs    # → carros/<id>.html
│   ├── gerar-imagens.mjs    # fotos JPG → WebP 480/960/1600
│   ├── gerar-og.mjs         # → assets/og/ (imagens de prévia 1200×630)
│   └── conferir-precos.mjs  # confere os preços com os sites das marcas
└── assets/
    ├── carros/         # Fotos (Wikimedia Commons): <id>.jpg original e WebP
    └── og/             # Imagens de prévia para compartilhar
```

## ✏️ Atualizar o catálogo

1. Edite os arquivos em `dados/` (preço novo, modelo novo, foto nova, ficha técnica).
2. Gere tudo:

```bash
npm run dados
```

Foto nova: rode também `npm run imagens`. Preço ou autonomia mudou: rode `npm run og`
para refazer as imagens de prévia.

Modelo novo precisa estar na tabela do Inmetro e ganhar uma linha em
`dados/modelos.json`. Modelo que saiu de linha vai para `fora_de_linha`.

## 🔎 Conferir os preços (todo mês)

```bash
npm run precos
```

Abre a página oficial de cada preço no Chrome (sem janela) e gera
`dados/conferencia-precos.md`, com cada versão marcada como:

- **ok**: o preço do site ainda aparece na página da marca;
- **revisar**: o preço não aparece na página (pode ter mudado, ou a página mostra só
  parte dos modelos); o relatório lista os preços que aparecem;
- **à mão**: a página não abriu sem janela (a Volvo, por exemplo, bloqueia); confira no navegador.

O script não muda nenhum dado. Depois de corrigir `dados/precos-2026-10.jsonl` e a data
de coleta em `scripts/gerar-dados.mjs`, rode `npm run dados` e `npm run og`.

## ▶️ Rodar localmente

```bash
npm start
```

O `serve.json` desliga as URLs "limpas" do `npx serve`, que apagariam o `?id=`.

## 🚀 Publicar

```bash
npm run deploy
```

O que vai ao ar e o que fica de fora está em `firebase.json` (`dados/` e `scripts/`
ficam de fora).

---

Feito no Brasil 🇧🇷
