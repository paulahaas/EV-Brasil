# EV Brasil ⚡ — Site de Venda de Veículos Elétricos

Site profissional para venda de veículos elétricos em todo o Brasil.
Design em **modo noturno**, com tons de **cinza escuro** e **azul escuro**,
minimalista e inspirado nos sites da **Tesla** e da **Apple**.

Feito com **HTML + CSS + JavaScript puro** (sem frameworks e sem etapa de
build), para você ter acesso total e conseguir editar tudo facilmente no
VSCode.

---

## 🗂️ Estrutura do projeto

```
ev-brasil/
├── index.html          # Página inicial (herói, destaques, tecnologia, contato)
├── veiculos.html       # Aba de venda: catálogo com filtros e ordenação
├── veiculo.html        # Página de detalhes de um carro (ficha técnica completa)
├── vender.html         # Formulário para anunciar um veículo
├── login.html          # Entrar na conta
├── cadastro.html       # Criar conta
├── css/
│   └── styles.css      # TODO o visual do site (cores no topo do arquivo)
├── js/
│   ├── data.js         # "Banco de dados" dos carros — edite aqui p/ add/remover
│   ├── car-svg.js      # Ilustrações vetoriais dos carros
│   ├── main.js         # Cabeçalho, rodapé e card de veículo (compartilhados)
│   ├── home.js         # Lógica da página inicial
│   ├── veiculos.js     # Lógica do catálogo (filtros/ordenação)
│   ├── veiculo.js      # Lógica da página de detalhes
│   ├── firebase.js     # Conexão com o Firebase (Auth + Firestore)
│   ├── auth.js         # Login e cadastro
│   ├── sell.js         # Salva o anúncio no Firestore (coleção "anuncios")
│   └── anuncios.js     # Mostra os anúncios do Firestore na vitrine
├── firestore.rules     # Regras de segurança do banco
├── serve.json          # Config do `npx serve` (mantém o ?id= nas URLs)
└── assets/             # (imagens próprias, se quiser adicionar)
```

Para publicar as regras do banco depois de editar `firestore.rules`:

```bash
firebase deploy --only firestore:rules
```

## ▶️ Como rodar localmente

Como é um site estático, você precisa apenas de um servidor local simples
(porque o navegador bloqueia alguns recursos ao abrir o arquivo direto).

**Opção 1 — VSCode (mais fácil):**
1. Instale a extensão **Live Server**.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

**Opção 2 — Node.js:**
```bash
npx serve .
```

**Opção 3 — Python:**
```bash
python3 -m http.server 5173
# abra http://localhost:5173
```

## ✏️ Como personalizar

- **Adicionar/editar carros:** abra `js/data.js` e altere a lista `VEHICLES`.
  Cada carro tem preço, ficha técnica (`specs`), destaques e descrição.
- **Mudar cores/visual:** abra `css/styles.css`. As cores ficam em `:root`
  no topo do arquivo (`--bg`, `--accent`, etc.).
- **Trocar textos do menu/rodapé:** edite `js/main.js`.
- **Usar fotos reais dos carros:** em `js/car-svg.js`, altere a função
  `carImage()` para retornar `<img src="assets/seu-carro.jpg">`.

## 🚗 Marcas incluídas (exemplos)

BYD (Dolphin, Dolphin Mini, Seal, Yuan Plus, Han, Song Plus DM-i, Tan) e GWM (Ora 03).
Os dados são ilustrativos — ajuste preços e especificações conforme sua operação.

---

Feito no Brasil 🇧🇷 — energia limpa para todos.
