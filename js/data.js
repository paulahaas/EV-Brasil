/**
 * Catálogo de veículos elétricos — EV Brasil
 * -------------------------------------------------
 * Este é o "banco de dados" do site. Para adicionar, remover ou editar
 * um carro, basta alterar os objetos abaixo. Cada campo é usado
 * automaticamente nas páginas de listagem e de detalhes.
 *
 * Dica: mantenha o campo `id` único (usado na URL: veiculo.html?id=...).
 */

const VEHICLES = [
  {
    id: "byd-dolphin",
    brand: "BYD",
    model: "Dolphin",
    tagline: "O elétrico urbano perfeito para o dia a dia.",
    priceBRL: 149800,
    bodyType: "Hatch",
    segment: "Compacto",
    color: "#3b82f6",
    year: 2025,
    featured: true,
    specs: {
      autonomia: "291 km (WLTP)",
      bateria: "44,9 kWh (Blade)",
      potencia: "95 cv",
      torque: "180 Nm",
      aceleracao: "0–100 km/h em 12,3 s",
      velocidadeMax: "150 km/h",
      tracao: "Dianteira",
      recargaAC: "7 kW — 100% em ~6h30",
      recargaDC: "60 kW — 30% a 80% em ~30 min",
      lugares: 5,
      portaMalas: "345 L",
    },
    highlights: [
      "Bateria Blade LFP, referência em segurança",
      "Central multimídia rotativa de 12,8\"",
      "Pacote completo de assistências (ADAS)",
    ],
    description:
      "O BYD Dolphin combina eficiência, tecnologia e um preço competitivo. Ideal para quem quer entrar no mundo elétrico sem abrir mão de conforto e conectividade nas cidades brasileiras.",
  },
  {
    id: "byd-dolphin-mini",
    brand: "BYD",
    model: "Dolphin Mini",
    tagline: "O elétrico mais acessível do Brasil.",
    priceBRL: 115800,
    bodyType: "Hatch",
    segment: "Entrada",
    color: "#22d3ee",
    year: 2025,
    featured: true,
    specs: {
      autonomia: "280 km (NEDC)",
      bateria: "38 kWh (Blade)",
      potencia: "75 cv",
      torque: "135 Nm",
      aceleracao: "0–100 km/h em 14,9 s",
      velocidadeMax: "130 km/h",
      tracao: "Dianteira",
      recargaAC: "6,6 kW — 100% em ~6h",
      recargaDC: "40 kW — 30% a 80% em ~30 min",
      lugares: 5,
      portaMalas: "230 L",
    },
    highlights: [
      "Porta de entrada para a mobilidade elétrica",
      "Compacto por fora, espaçoso por dentro",
      "Baixíssimo custo por quilômetro rodado",
    ],
    description:
      "O Dolphin Mini é a escolha inteligente para o primeiro carro elétrico. Econômico, ágil no trânsito e com a confiabilidade da bateria Blade da BYD.",
  },
  {
    id: "byd-seal",
    brand: "BYD",
    model: "Seal",
    tagline: "Desempenho esportivo, elegância elétrica.",
    priceBRL: 296800,
    bodyType: "Sedã",
    segment: "Premium",
    color: "#6366f1",
    year: 2025,
    featured: true,
    specs: {
      autonomia: "570 km (CLTC)",
      bateria: "82,5 kWh (Blade)",
      potencia: "530 cv (AWD)",
      torque: "670 Nm",
      aceleracao: "0–100 km/h em 3,8 s",
      velocidadeMax: "180 km/h",
      tracao: "Integral (AWD)",
      recargaAC: "11 kW — 100% em ~8h",
      recargaDC: "150 kW — 30% a 80% em ~26 min",
      lugares: 5,
      portaMalas: "400 L",
    },
    highlights: [
      "Plataforma e-Platform 3.0 com bateria estrutural",
      "Aceleração de superesportivo",
      "Design aerodinâmico inspirado no oceano",
    ],
    description:
      "O BYD Seal é um sedã esportivo que entrega desempenho de tirar o fôlego com sofisticação. Um rival direto dos elétricos premium mundiais, agora no Brasil.",
  },
  {
    id: "byd-yuan-plus",
    brand: "BYD",
    model: "Yuan Plus",
    tagline: "O SUV elétrico para toda a família.",
    priceBRL: 237800,
    bodyType: "SUV",
    segment: "Familiar",
    color: "#0ea5e9",
    year: 2025,
    featured: false,
    specs: {
      autonomia: "430 km (NEDC)",
      bateria: "60,5 kWh (Blade)",
      potencia: "204 cv",
      torque: "310 Nm",
      aceleracao: "0–100 km/h em 7,3 s",
      velocidadeMax: "160 km/h",
      tracao: "Dianteira",
      recargaAC: "7 kW — 100% em ~9h",
      recargaDC: "80 kW — 30% a 80% em ~30 min",
      lugares: 5,
      portaMalas: "440 L",
    },
    highlights: [
      "Espaço interno generoso e versátil",
      "Interior com acabamento premium",
      "Ótimo equilíbrio entre autonomia e preço",
    ],
    description:
      "O Yuan Plus é o SUV elétrico completo: espaçoso, confortável e tecnológico. Perfeito para famílias que buscam segurança e economia no dia a dia e nas viagens.",
  },
  {
    id: "byd-han",
    brand: "BYD",
    model: "Han",
    tagline: "Luxo e autonomia sem compromissos.",
    priceBRL: 389800,
    bodyType: "Sedã",
    segment: "Luxo",
    color: "#8b5cf6",
    year: 2025,
    featured: false,
    specs: {
      autonomia: "605 km (NEDC)",
      bateria: "85,4 kWh (Blade)",
      potencia: "517 cv (AWD)",
      torque: "700 Nm",
      aceleracao: "0–100 km/h em 3,9 s",
      velocidadeMax: "180 km/h",
      tracao: "Integral (AWD)",
      recargaAC: "11 kW — 100% em ~8h",
      recargaDC: "170 kW — 30% a 80% em ~25 min",
      lugares: 5,
      portaMalas: "410 L",
    },
    highlights: [
      "Interior de luxo com acabamento em couro Nappa",
      "Sistema de som premium",
      "A joia da coroa da linha BYD",
    ],
    description:
      "O BYD Han é a expressão máxima de luxo elétrico da marca. Combina autonomia de longa distância, desempenho impressionante e um interior digno das melhores limusines.",
  },
  {
    id: "byd-song-plus",
    brand: "BYD",
    model: "Song Plus DM-i",
    tagline: "SUV híbrido plug-in de alta autonomia.",
    priceBRL: 259800,
    bodyType: "SUV",
    segment: "Familiar",
    color: "#14b8a6",
    year: 2025,
    featured: false,
    specs: {
      autonomia: "1.100 km (combinada)",
      bateria: "18,3 kWh + motor 1.5",
      potencia: "235 cv (combinada)",
      torque: "325 Nm",
      aceleracao: "0–100 km/h em 8,5 s",
      velocidadeMax: "170 km/h",
      tracao: "Dianteira",
      recargaAC: "6,6 kW — 100% em ~3h",
      recargaDC: "não aplicável",
      lugares: 5,
      portaMalas: "574 L",
    },
    highlights: [
      "Tecnologia híbrida plug-in DM-i",
      "Autonomia combinada para longas viagens",
      "Sem ansiedade de recarga",
    ],
    description:
      "O Song Plus DM-i une o melhor dos dois mundos: dirija no modo elétrico na cidade e conte com o motor a combustão para viagens longas, com autonomia combinada superior a 1.000 km.",
  },
  {
    id: "gwm-ora-03",
    brand: "GWM",
    model: "Ora 03",
    tagline: "Estilo retrô, alma elétrica.",
    priceBRL: 179900,
    bodyType: "Hatch",
    segment: "Compacto",
    color: "#f59e0b",
    year: 2025,
    featured: false,
    specs: {
      autonomia: "310 km (WLTP)",
      bateria: "48 kWh",
      potencia: "171 cv",
      torque: "250 Nm",
      aceleracao: "0–100 km/h em 8,4 s",
      velocidadeMax: "160 km/h",
      tracao: "Dianteira",
      recargaAC: "11 kW — 100% em ~6h",
      recargaDC: "64 kW — 30% a 80% em ~40 min",
      lugares: 5,
      portaMalas: "228 L",
    },
    highlights: [
      "Design icônico e cativante",
      "Interior tecnológico com telas duplas",
      "Ótimo pacote de série",
    ],
    description:
      "O GWM Ora 03 chama a atenção pelo visual retrô-futurista e entrega uma experiência elétrica divertida, bem equipada e cheia de personalidade.",
  },
  {
    id: "byd-tan",
    brand: "BYD",
    model: "Tan",
    tagline: "SUV de 7 lugares, potência e espaço.",
    priceBRL: 519800,
    bodyType: "SUV",
    segment: "Luxo",
    color: "#ef4444",
    year: 2025,
    featured: false,
    specs: {
      autonomia: "400 km (NEDC)",
      bateria: "108,8 kWh (Blade)",
      potencia: "517 cv (AWD)",
      torque: "680 Nm",
      aceleracao: "0–100 km/h em 4,6 s",
      velocidadeMax: "180 km/h",
      tracao: "Integral (AWD)",
      recargaAC: "11 kW — 100% em ~10h",
      recargaDC: "170 kW — 30% a 80% em ~30 min",
      lugares: 7,
      portaMalas: "235 L (7 lug.) / 940 L (5 lug.)",
    },
    highlights: [
      "Sete lugares reais e confortáveis",
      "Desempenho de esportivo em um SUV grande",
      "Tecnologia de ponta em toda a cabine",
    ],
    description:
      "O BYD Tan é o SUV elétrico de sete lugares para quem não abre mão de espaço, potência e sofisticação. Ideal para famílias grandes e para quem viaja em grupo.",
  },
];

/** Marcas disponíveis (para filtros). */
const BRANDS = [...new Set(VEHICLES.map((v) => v.brand))].sort();

/** Tipos de carroceria (para filtros). */
const BODY_TYPES = [...new Set(VEHICLES.map((v) => v.bodyType))].sort();

/** Formata um número em Real brasileiro (R$). */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

/** Busca um veículo pelo id. */
function getVehicleById(id) {
  return VEHICLES.find((v) => v.id === id) || null;
}
