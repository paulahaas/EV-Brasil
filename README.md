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
├── index.html          # Home: abertura, números, ferramentas, rankings, carrocerias
├── veiculos.html       # Catálogo com busca e filtros
├── veiculo.html        # Página de um modelo: versões do Inmetro e origem do preço
├── encontre.html       # Questionário "Qual é o meu?"
├── rankings.html       # Rankings (critério explicado em cada um)
├── comparar.html       # Até três modelos lado a lado
├── calculadora.html    # Economia elétrico × gasolina
├── metodologia.html    # De onde vêm os dados
├── creditos.html       # Autores e licenças das fotos
├── css/styles.css      # Todo o visual (cores no topo do arquivo)
├── js/
│   ├── catalogo.js     # GERADO por scripts/gerar-dados.mjs — não editar à mão
│   ├── data.js         # Funções auxiliares sobre o catálogo
│   ├── car-svg.js      # Fotos e silhuetas dos carros
│   ├── main.js         # Cabeçalho, rodapé e card (compartilhados)
│   └── home.js, veiculos.js, veiculo.js, encontre.js, rankings.js,
│       comparar.js, simulador.js
├── dados/              # Fonte dos dados (não vai para o ar)
│   ├── inmetro-pbev-2026-eletricos.json   # elétricos da tabela PBE Veicular 2026
│   ├── precos-2026-10.jsonl               # preços coletados, com fonte
│   ├── modelos.json                       # nome de exibição, carroceria, cor
│   ├── fotos.json                         # fotos e créditos
│   └── levantamento-eletricos-2026-10.*   # planilha de revisão
├── scripts/gerar-dados.mjs  # Gera js/catalogo.js e sitemap.xml a partir de dados/
└── assets/carros/      # Fotos (Wikimedia Commons): <id>.jpg 1920px e <id>-960.jpg
```

## ✏️ Atualizar o catálogo

1. Edite os arquivos em `dados/` (preço novo, modelo novo, foto nova).
2. Gere o catálogo:

```bash
npm run dados
```

Modelo novo precisa estar na tabela do Inmetro e ganhar uma linha em
`dados/modelos.json`. Modelo que saiu de linha vai para `fora_de_linha`.

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
