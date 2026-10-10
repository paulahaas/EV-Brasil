# EV Brasil ⚡ — Guia dos carros elétricos no Brasil

**Seu próximo carro é elétrico. Qual deles?**

Site de pesquisa que compara os carros 100% elétricos à venda no Brasil com dados
públicos: autonomia e consumo medidos pelo **Inmetro**, preço com fonte e data, valor na
**FIPE**, garantia e nota de segurança. Só elétricos puros (sem híbridos). O site não vende carros.

No ar em **https://ev-brasil.web.app** (Firebase Hosting).

Feito com **HTML + CSS + JavaScript puro**, sem framework. Visual "azul-noite": fundo
marinho com um brilho azul que muda de tom devagar, títulos em Sora e texto em Inter.

---

## 🗂️ Estrutura

```
ev-brasil/
├── index.html          # Home: abertura, gráfico preço × autonomia, rankings, carrocerias
├── veiculos.html       # Catálogo com busca, filtros e "Listas prontas"
├── carros/<id>.html    # GERADO: uma página por modelo (prévia para WhatsApp e Google)
├── veiculo.html        # Modelo das páginas acima; o endereço antigo ?id= redireciona
├── eletricos/          # GERADO: listas para buscas do Google (preço, autonomia, marca...)
├── precos/             # GERADO: preços do mês (edição atual em index.html + uma por mês)
├── encontre.html       # Questionário "Qual é o meu?" (uso pessoal ou motorista de aplicativo)
├── rankings.html       # Rankings (critério explicado em cada um)
├── comparar.html       # Até três modelos lado a lado (o endereço guarda a comparação)
├── calculadora.html    # Economia elétrico × gasolina, custo total em 5 anos e financiamento
├── viagem.html         # Planejador: quantas paradas uma viagem precisa
├── novidades.html      # Lançamentos e o que está chegando
├── guias.html, guia-*.html  # Guias: carregar em casa, onde recarregar, autonomia real,
│                            # IPVA, elétrico usado, motorista de aplicativo
├── metodologia.html    # De onde vêm os dados
├── creditos.html       # Autores e licenças das fotos
├── css/styles.css      # Todo o visual (cores no topo do arquivo)
├── js/
│   ├── catalogo.js     # GERADO por scripts/gerar-dados.mjs — não editar à mão
│   ├── data.js         # Funções auxiliares sobre o catálogo
│   ├── car-svg.js      # Fotos (WebP em 3 tamanhos) e silhuetas
│   ├── main.js         # Cabeçalho, rodapé, card, botões de compartilhar e contagem de visitas
│   └── home.js, grafico.js, veiculos.js, veiculo.js, encontre.js, rankings.js,
│       comparar.js, simulador.js, custo-total.js, financiamento.js, viagem.js, novidades.js
├── dados/              # Fonte dos dados (não vai para o ar)
│   ├── inmetro-pbev-2026-eletricos.json   # elétricos da tabela PBE Veicular 2026
│   ├── precos-2026-10.jsonl               # preços coletados, com fonte
│   ├── historico-precos.json              # histórico de preço (um ponto por coleta mensal)
│   ├── fichas.json                        # ficha técnica, com versão e fonte
│   ├── garantias.json                     # garantia por marca (inclusive uso comercial)
│   ├── seguranca.json                     # nota Latin NCAP / Euro NCAP
│   ├── fipe.json, fipe-mapa.json          # valores da FIPE e a versão de cada modelo nela
│   ├── combustao.json                     # carros a gasolina de referência (elétrico x combustão)
│   ├── juros.json                         # juros médios de veículos (Banco Central)
│   ├── ipva-2026.json                     # IPVA por estado (gasolina e elétrico)
│   ├── novidades.json                     # modelos que estão chegando
│   ├── modelos.json                       # nome de exibição, carroceria, cor
│   └── fotos.json                         # fotos e créditos
├── scripts/
│   ├── gerar-dados.mjs       # dados/ → js/catalogo.js e sitemap.xml
│   ├── gerar-paginas.mjs     # → carros/<id>.html
│   ├── gerar-buscas.mjs      # → eletricos/ (listas para buscas)
│   ├── gerar-precos-mes.mjs  # → precos/ (preços do mês)
│   ├── pagina-estatica.mjs   # modelo comum das páginas geradas (listas e preços)
│   ├── gerar-imagens.mjs     # fotos JPG → WebP 480/960/1600
│   ├── gerar-og.mjs          # → assets/og/ (imagens de prévia 1200×630)
│   ├── conferir-precos.mjs   # confere os preços com os sites das marcas
│   ├── coletar-fipe.mjs      # consulta a FIPE (elétricos e carros a gasolina de referência)
│   └── coletar-juros.mjs     # juros médios de veículos do Banco Central
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

Isso refaz o catálogo, as páginas de cada modelo, as listas de `eletricos/`, os preços do
mês em `precos/` e o `sitemap.xml`. Foto nova: rode também `npm run imagens`. Preço ou
autonomia mudou: rode `npm run og` para refazer as imagens de prévia.

Modelo novo precisa estar na tabela do Inmetro e ganhar uma linha em
`dados/modelos.json`. Modelo que saiu de linha vai para `fora_de_linha`.

## 📅 Rotina do mês

1. **Preços:** `npm run precos` (confere com os sites das marcas, veja abaixo), corrija o que mudou.
2. **FIPE:** `npm run fipe` (uns 50 minutos).
3. **Juros:** `npm run juros` (taxa média do Banco Central para o simulador de financiamento).
4. **Gerar:** `npm run dados` e `npm run og`. O histórico de preços ganha o ponto do mês e a
   página `precos/` ganha a edição do mês, com o que subiu e o que caiu.
5. **Publicar:** `npm run deploy`.

## 🔎 Conferir os preços

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

## 💸 Atualizar a FIPE

```bash
npm run fipe
npm run dados
```

Consulta o site oficial da FIPE devagar (leva uns 50 minutos, para não ser bloqueado) e
grava `dados/fipe.json`. A versão de cada modelo na FIPE fica em `dados/fipe-mapa.json`.

## 📊 Contagem de visitas

Cloudflare Web Analytics, sem cookies e sem identificar ninguém. O token fica em
`CF_ANALYTICS_TOKEN`, no `js/main.js`; vazio, a contagem fica desligada. Só conta no site
publicado (as prévias locais não entram nos números).

## ▶️ Rodar localmente

```bash
npm start
```

O `serve.json` desliga as URLs "limpas" do `npx serve`, que apagariam o `?id=`.
Localmente, as pastas abrem pelo nome do arquivo (`/precos/index.html`); no site publicado,
`/precos/` já abre a página.

## 🚀 Publicar

```bash
npm run deploy
```

O que vai ao ar e o que fica de fora está em `firebase.json` (`dados/` e `scripts/`
ficam de fora).

---

Feito no Brasil 🇧🇷
