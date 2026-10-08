/**
 * ARQUIVO GERADO por scripts/gerar-dados.mjs — não edite à mão.
 * Para mudar o catálogo, edite os arquivos em dados/ e rode: npm run dados
 */
const DATA_INFO = {
  "inmetro": {
    "titulo": "Tabela PBE Veicular 2026 (18º ciclo)",
    "atualizacao": "14/08/2026",
    "url": "https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular"
  },
  "precos": {
    "coleta": "05/10/2026"
  },
  "fichas": {
    "coleta": "08/10/2026"
  },
  "ipva": {
    "coleta": "08/10/2026",
    "fontes": {
      "eletrico": "https://www.vrum.com.br/noticias/2026/07/7466052-ipva-2026-para-eletricos-a-lista-de-estados-com-isencao-ou-desconto.html",
      "gasolina": [
        "https://www.cnnbrasil.com.br/auto/ipva-2026-saiba-quais-estados-cobram-os-impostos-mais-caros-e-baratos/",
        "https://valorfinal.com.br/tabela-fipe/ipva"
      ]
    }
  }
};

const VEHICLES = [
  {
    "id": "audi-a6-avant-e-tron",
    "brand": "Audi",
    "model": "A6 Avant e-tron",
    "bodyType": "Perua",
    "color": "#3b82f6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "S line",
        "rangeKm": 474,
        "kwh100": 16.7
      }
    ],
    "rangeMin": 474,
    "rangeMax": 474,
    "kwh100": 16.7,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "",
    "photo": {
      "src": "assets/carros/audi-a6-avant-e-tron.jpg",
      "card": "assets/carros/audi-a6-avant-e-tron-960.jpg",
      "author": "© M 93",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_A6_Avant_e-tron_%E2%80%93_f_12102025.jpg"
    },
    "specs": {
      "version": "S line",
      "cv": 367,
      "kwh": null,
      "s0100": 5.4,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": null,
      "note": "",
      "source": "https://www.audi.com.br/pt/models/a6/a-6-avant-e-tron/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "audi-a6-e-tron",
    "brand": "Audi",
    "model": "A6 e-tron",
    "bodyType": "Sedã",
    "color": "#22d3ee",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Performance black",
        "rangeKm": 445,
        "kwh100": 16.4
      },
      {
        "name": "S line",
        "rangeKm": 443,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 443,
    "rangeMax": 445,
    "kwh100": 16.4,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/audi-a6-e-tron.jpg",
      "card": "assets/carros/audi-a6-e-tron-960.jpg",
      "author": "Damian B Oh",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_A6_Sportback_e-tron_performance_S_Line_GH_Daytona_Gray_Pearl_Effect_(10).jpg"
    },
    "specs": {
      "version": "Sportback",
      "cv": null,
      "kwh": 100,
      "s0100": 4.5,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": null,
      "note": "",
      "source": "https://www.audi.com.br/pt/models/a6/a-6-e-tron/index1",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "audi-q6-e-tron",
    "brand": "Audi",
    "model": "Q6 e-tron",
    "bodyType": "SUV",
    "color": "#6366f1",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Performance",
        "rangeKm": 411,
        "kwh100": 17.8
      },
      {
        "name": "Performance black",
        "rangeKm": 411,
        "kwh100": 17.8
      },
      {
        "name": "Dynamic",
        "rangeKm": 424,
        "kwh100": 16.9
      },
      {
        "name": "S line",
        "rangeKm": 424,
        "kwh100": 16.9
      }
    ],
    "rangeMin": 411,
    "rangeMax": 424,
    "kwh100": 16.9,
    "price": 695990,
    "priceVersion": "",
    "priceSource": "https://www.car.blog.br/2026/04/audi-q6-etron-2026-preco-brasil.html",
    "priceKind": "imprensa",
    "priceNote": "preço sugerido divulgado no lançamento (abr/2026); site da Audi não mostra preço",
    "photo": {
      "src": "assets/carros/audi-q6-e-tron.jpg",
      "card": "assets/carros/audi-q6-e-tron-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_Q6_e-tron_IAA_2023_1X7A0303.jpg"
    },
    "specs": {
      "version": "Performance",
      "cv": 428,
      "kwh": 100,
      "s0100": 5.1,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": 526,
      "note": "Mais 64 L no porta-malas dianteiro. Bateria de 100 kWh (94,9 kWh úteis)",
      "source": "https://www.car.blog.br/2026/04/audi-q6-etron-2026-preco-brasil.html",
      "sourceExtra": "https://www.audi.com.br/pt/models/q6-e-tron/q6-e-tron/",
      "kind": "imprensa"
    }
  },
  {
    "id": "audi-q6-sportback-e-tron",
    "brand": "Audi",
    "model": "Q6 Sportback e-tron",
    "bodyType": "SUV",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Performance black",
        "rangeKm": 427,
        "kwh100": 16.9
      },
      {
        "name": "S line",
        "rangeKm": 432,
        "kwh100": 16.7
      }
    ],
    "rangeMin": 427,
    "rangeMax": 432,
    "kwh100": 16.7,
    "price": 710990,
    "priceVersion": "",
    "priceSource": "https://www.car.blog.br/2026/04/audi-q6-etron-2026-preco-brasil.html",
    "priceKind": "imprensa",
    "priceNote": "preço sugerido no lançamento (abr/2026)",
    "photo": {
      "src": "assets/carros/audi-q6-sportback-e-tron.jpg",
      "card": "assets/carros/audi-q6-sportback-e-tron-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_Q6_e-tron_Sportback_DSC_9278.jpg"
    },
    "specs": {
      "version": "Performance",
      "cv": 428,
      "kwh": 100,
      "s0100": 5.1,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": 511,
      "note": "Mais 64 L no porta-malas dianteiro",
      "source": "https://www.car.blog.br/2026/04/audi-q6-etron-2026-preco-brasil.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "audi-rs-e-tron-gt",
    "brand": "Audi",
    "model": "RS e-tron GT",
    "bodyType": "Esportivo",
    "color": "#14b8a6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Performance",
        "rangeKm": 348,
        "kwh100": 22.2
      }
    ],
    "rangeMin": 348,
    "rangeMax": 348,
    "kwh100": 22.2,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/audi-rs-e-tron-gt.jpg",
      "card": "assets/carros/audi-rs-e-tron-gt-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_RS_e-tron_GT_1X7A1874.jpg"
    },
    "specs": {
      "version": "performance",
      "cv": null,
      "kwh": null,
      "s0100": 2.5,
      "dcKw": 320,
      "acKw": 11,
      "trunkL": 350,
      "note": "Mais 77 L no porta-malas dianteiro",
      "source": "https://www.audi.com.br/pt/models/e-tron-gt/new-rs-etron-gt/",
      "sourceExtra": "https://www.car.blog.br/2026/06/audi-rs-e-tron-gt-performance-preco.html",
      "kind": "oficial"
    }
  },
  {
    "id": "audi-sq6-sportback-e-tron",
    "brand": "Audi",
    "model": "SQ6 Sportback e-tron",
    "bodyType": "SUV",
    "color": "#8b5cf6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "-",
        "rangeKm": 428,
        "kwh100": 16.7
      },
      {
        "name": "-",
        "rangeKm": 431,
        "kwh100": 16.9
      }
    ],
    "rangeMin": 428,
    "rangeMax": 431,
    "kwh100": 16.7,
    "price": 790990,
    "priceVersion": "",
    "priceSource": "https://www.car.blog.br/2026/04/audi-sq6-etron-2026-preco-brasil.html",
    "priceKind": "imprensa",
    "priceNote": "preço sugerido no lançamento (abr/2026)",
    "photo": {
      "src": "assets/carros/audi-sq6-sportback-e-tron.jpg",
      "card": "assets/carros/audi-sq6-sportback-e-tron-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Audi_SQ6_e-tron_Automesse_Ludwigsburg_2024_IMG_1395.jpg"
    },
    "specs": {
      "version": "SQ6",
      "cv": 517,
      "kwh": 100,
      "s0100": 4.3,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": 499,
      "note": "Potência no modo Launch Control. Mais 64 L no porta-malas dianteiro",
      "source": "https://www.audi.com.br/pt/models/q6-e-tron/sq-6-sb-etron/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "bmw-i7",
    "brand": "BMW",
    "model": "i7",
    "bodyType": "Sedã",
    "color": "#60a5fa",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "xDrive60",
        "rangeKm": 467,
        "kwh100": 18.1
      }
    ],
    "rangeMin": 467,
    "rangeMax": 467,
    "kwh100": 18.1,
    "price": 1373950,
    "priceVersion": "xDrive60 M Sport",
    "priceSource": "https://www.bmw.com.br/pt/all-models/bmw-i/i7/bmw-i7.html",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/bmw-i7.jpg",
      "card": "assets/carros/bmw-i7-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BMW_i7_xDrive60_1X7A7476.jpg"
    },
    "specs": {
      "version": "xDrive60 M Sport",
      "cv": 544,
      "kwh": 101.7,
      "s0100": 4.7,
      "dcKw": 195,
      "acKw": null,
      "trunkL": 500,
      "note": "",
      "source": "https://www.press.bmwgroup.com/brazil/article/detail/T0433318PT/bmw-i7-inaugura-uma-nova-era-em-termos-de-luxo-entretenimento-e-mobilidade-el%C3%A9trica-no-brasil?language=pt",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "bmw-ix1",
    "brand": "BMW",
    "model": "iX1",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Grande",
    "versions": [
      {
        "name": "xDrive30",
        "rangeKm": 324,
        "kwh100": 16.7
      },
      {
        "name": "eDrive20",
        "rangeKm": 345,
        "kwh100": 15.3
      }
    ],
    "rangeMin": 324,
    "rangeMax": 345,
    "kwh100": 15.3,
    "price": 485950,
    "priceVersion": "xDrive30 M Sport",
    "priceSource": "https://www.bmw.com.br/pt/all-models/bmw-i/ix1/bmw-ix1.html",
    "priceKind": "oficial",
    "priceNote": "preço da versão xDrive30; a versão eDrive20 não aparece no site da BMW",
    "photo": {
      "src": "assets/carros/bmw-ix1.jpg",
      "card": "assets/carros/bmw-ix1-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BMW_iX1_DSC_7507.jpg"
    },
    "specs": {
      "version": "xDrive30 M Sport",
      "cv": 306,
      "kwh": 66.5,
      "s0100": 5.6,
      "dcKw": 130,
      "acKw": null,
      "trunkL": 490,
      "note": "Bateria, recarga e porta-malas: material de imprensa da BMW",
      "source": "https://www.bmw.com.br/pt/all-models/bmw-i/ix1/bmw-ix1.html",
      "sourceExtra": "https://www.press.bmwgroup.com/global/article/attachment/T0393974EN/567425",
      "kind": "oficial"
    }
  },
  {
    "id": "bmw-ix2",
    "brand": "BMW",
    "model": "iX2",
    "bodyType": "SUV",
    "color": "#818cf8",
    "category": "Grande",
    "versions": [
      {
        "name": "xDrive30 MSP",
        "rangeKm": 327,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 327,
    "rangeMax": 327,
    "kwh100": 16.4,
    "price": 495950,
    "priceVersion": "xDrive30 M Sport",
    "priceSource": "https://www.bmw.com.br/pt/all-models/bmw-i/ix2/bmw-ix2-overview.html",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/bmw-ix2.jpg",
      "card": "assets/carros/bmw-ix2-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BMW_iX2_xDrive30_IMG_1811.jpg"
    },
    "specs": {
      "version": "xDrive30 M Sport",
      "cv": 306,
      "kwh": 64.8,
      "s0100": 5.6,
      "dcKw": 130,
      "acKw": 11,
      "trunkL": 525,
      "note": "Bateria, recarga e porta-malas: material de imprensa da BMW",
      "source": "https://www.bmw.com.br/pt/all-models/bmw-i/ix2/bmw-ix2-overview.html",
      "sourceExtra": "https://www.press.bmwgroup.com/global/article/attachment/T0437451EN/608982",
      "kind": "oficial"
    }
  },
  {
    "id": "bmw-ix3",
    "brand": "BMW",
    "model": "iX3",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "50 XDRIVE MSP",
        "rangeKm": 570,
        "kwh100": 15
      }
    ],
    "rangeMin": 570,
    "rangeMax": 570,
    "kwh100": 15,
    "price": 582950,
    "priceVersion": "50 xDrive",
    "priceSource": "https://www.bmw.com.br/pt/all-models/serie-x/ix3/bmw-ix3.html",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/bmw-ix3.jpg",
      "card": "assets/carros/bmw-ix3-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BMW_iX3_NA5_IAA_2025_DSC_1684.jpg"
    },
    "specs": {
      "version": "50 xDrive",
      "cv": 469,
      "kwh": 108.7,
      "s0100": 4.9,
      "dcKw": 400,
      "acKw": null,
      "trunkL": 520,
      "note": "Mais 58 L no porta-malas dianteiro",
      "source": "https://www.car.blog.br/2026/09/bmw-ix3-2027-chega-ao-brasil-preco-r.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "byd-dolphin",
    "brand": "BYD",
    "model": "Dolphin",
    "bodyType": "Hatch",
    "color": "#3b82f6",
    "category": "Médio",
    "versions": [
      {
        "name": "GS 180EV",
        "rangeKm": 291,
        "kwh100": 11.7
      },
      {
        "name": "PLUS 310EV",
        "rangeKm": 330,
        "kwh100": 14.2
      },
      {
        "name": "SE 290EV",
        "rangeKm": 272,
        "kwh100": 13.6
      }
    ],
    "rangeMin": 272,
    "rangeMax": 330,
    "kwh100": 11.7,
    "price": 149990,
    "priceVersion": "GS",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-dolphin.jpg",
      "card": "assets/carros/byd-dolphin-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Dolphin_IAA_2023_1X7A0634.jpg"
    },
    "specs": {
      "version": "GS 180EV",
      "cv": 95,
      "kwh": 44.9,
      "s0100": 10.9,
      "dcKw": 60,
      "acKw": 6.6,
      "trunkL": 250,
      "note": "",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_DolphinGS_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-dolphin-mini",
    "brand": "BYD",
    "model": "Dolphin Mini",
    "bodyType": "Hatch",
    "color": "#22d3ee",
    "category": "Sub Compacto",
    "versions": [
      {
        "name": "GS EV",
        "rangeKm": 280,
        "kwh100": 11.4
      },
      {
        "name": "GS 5 EV",
        "rangeKm": 280,
        "kwh100": 11.4
      },
      {
        "name": "GL 5 EV",
        "rangeKm": 224,
        "kwh100": 10.8
      }
    ],
    "rangeMin": 224,
    "rangeMax": 280,
    "kwh100": 10.8,
    "price": 118990,
    "priceVersion": "GL",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-dolphin-mini.jpg",
      "card": "assets/carros/byd-dolphin-mini-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Dolphin_Surf_IAA_2025_DSC_2256.jpg"
    },
    "specs": {
      "version": "GL",
      "cv": 75,
      "kwh": 30.08,
      "s0100": 14.9,
      "dcKw": 30,
      "acKw": 6.6,
      "trunkL": 230,
      "note": "Versão GS: bateria de 38,88 kWh e recarga DC de 40 kW",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_DolphinMini_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-han",
    "brand": "BYD",
    "model": "Han",
    "bodyType": "Sedã",
    "color": "#6366f1",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "AWD GS 680EV",
        "rangeKm": 349,
        "kwh100": 19.2
      }
    ],
    "rangeMin": 349,
    "rangeMax": 349,
    "kwh100": 19.2,
    "price": 559800,
    "priceVersion": "",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2025",
    "photo": {
      "src": "assets/carros/byd-han.jpg",
      "card": "assets/carros/byd-han-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Han_EV_DSC_8759.jpg"
    },
    "specs": {
      "version": "AWD GS",
      "cv": 517,
      "kwh": 85.4,
      "s0100": 3.9,
      "dcKw": 120,
      "acKw": 6.6,
      "trunkL": 410,
      "note": "",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_Han_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-seal",
    "brand": "BYD",
    "model": "Seal",
    "bodyType": "Sedã",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "AWD GS 590EV",
        "rangeKm": 372,
        "kwh100": 17.2
      }
    ],
    "rangeMin": 372,
    "rangeMax": 372,
    "kwh100": 17.2,
    "price": 299990,
    "priceVersion": "AWD",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-seal.jpg",
      "card": "assets/carros/byd-seal-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Seal_IAA_2023_1X7A0026.jpg"
    },
    "specs": {
      "version": "AWD GS",
      "cv": 531,
      "kwh": 82.56,
      "s0100": 3.8,
      "dcKw": 150,
      "acKw": 6.6,
      "trunkL": 400,
      "note": "Mais 53 L no porta-malas dianteiro",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_Seal_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-sealion-7",
    "brand": "BYD",
    "model": "Sealion 7",
    "bodyType": "SUV",
    "color": "#8b5cf6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "GS 690EV",
        "rangeKm": 360,
        "kwh100": 18.3
      }
    ],
    "rangeMin": 360,
    "rangeMax": 360,
    "kwh100": 18.3,
    "price": 339990,
    "priceVersion": "",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-sealion-7.jpg",
      "card": "assets/carros/byd-sealion-7-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Sealion_07_EV_DSC_8264.jpg"
    },
    "specs": {
      "version": "GS",
      "cv": 531,
      "kwh": 82.5,
      "s0100": 4.5,
      "dcKw": 150,
      "acKw": 11,
      "trunkL": 500,
      "note": "Mais 58 L no porta-malas dianteiro",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_Sealion7_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-tan",
    "brand": "BYD",
    "model": "Tan",
    "bodyType": "SUV",
    "color": "#14b8a6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "AWD GS 700EV",
        "rangeKm": 430,
        "kwh100": 20.3
      }
    ],
    "rangeMin": 430,
    "rangeMax": 430,
    "kwh100": 20.3,
    "price": 426800,
    "priceVersion": "",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2025",
    "photo": {
      "src": "assets/carros/byd-tan.jpg",
      "card": "assets/carros/byd-tan-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2024_BYD_Tang_GIMS_2024_1X7A2342.jpg"
    },
    "specs": {
      "version": "AWD GS",
      "cv": 517,
      "kwh": 108.8,
      "s0100": 4.9,
      "dcKw": 170,
      "acKw": 11,
      "trunkL": 235,
      "note": "Porta-malas com os 7 lugares em uso; 940 L com a 3ª fileira rebatida",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_Tan_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-yuan-plus",
    "brand": "BYD",
    "model": "Yuan Plus",
    "bodyType": "SUV",
    "color": "#60a5fa",
    "category": "Grande",
    "versions": [
      {
        "name": "GS 560EV",
        "rangeKm": 378,
        "kwh100": 16.1
      },
      {
        "name": "GL310 EV",
        "rangeKm": 294,
        "kwh100": 15.6
      },
      {
        "name": "GS310 EV",
        "rangeKm": 294,
        "kwh100": 15.6
      }
    ],
    "rangeMin": 294,
    "rangeMax": 378,
    "kwh100": 15.6,
    "price": 269990,
    "priceVersion": "AWD",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-yuan-plus.jpg",
      "card": "assets/carros/byd-yuan-plus-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Atto_3_1X7A6495.jpg"
    },
    "specs": {
      "version": "AWD GS",
      "cv": 449,
      "kwh": 74.88,
      "s0100": 3.9,
      "dcKw": 205,
      "acKw": 11,
      "trunkL": 490,
      "note": "Mais 101 L no porta-malas dianteiro",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_YuanPlusAWD_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "byd-yuan-pro",
    "brand": "BYD",
    "model": "Yuan Pro",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Médio",
    "versions": [
      {
        "name": "GS 290EV",
        "rangeKm": 250,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 250,
    "rangeMax": 250,
    "kwh100": 14.2,
    "price": 182990,
    "priceVersion": "",
    "priceSource": "https://www.byd.com/br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/byd-yuan-pro.jpg",
      "card": "assets/carros/byd-yuan-pro-960.jpg",
      "author": "Zotyefan",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:BYD_Yuan_Pro_IMG006.jpg"
    },
    "specs": {
      "version": "GS",
      "cv": 177,
      "kwh": 45.12,
      "s0100": 7.9,
      "dcKw": 65,
      "acKw": 6.6,
      "trunkL": 265,
      "note": "",
      "source": "https://www.byd.com/material/__CN/byd-site/br/fichas-tecnicas-2026/update-13-07-2026/07-13-2026---ficha-txiunica/BYD_YuanPro_V2.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "avatr-11",
    "brand": "Caoa Changan",
    "model": "Avatr 11",
    "bodyType": "SUV",
    "color": "#818cf8",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "EV",
        "rangeKm": 497,
        "kwh100": 16.7
      }
    ],
    "rangeMin": 497,
    "rangeMax": 497,
    "kwh100": 16.7,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/avatr-11.jpg",
      "card": "assets/carros/avatr-11-960.jpg",
      "author": "Nikolai Bulykin",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,_Avatr_11_%D0%BD%D0%B0_%D0%9E%D1%81%D0%B8%D1%91_10%D0%B0.jpg"
    },
    "specs": {
      "version": "EV",
      "cv": 585,
      "kwh": 116,
      "s0100": 3.9,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.car.blog.br/2026/03/caoa-changan-avatr-11-2026-preco-parte.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "chevrolet-blazer-ev",
    "brand": "Chevrolet",
    "model": "Blazer EV",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "RS",
        "rangeKm": 481,
        "kwh100": 17.5
      }
    ],
    "rangeMin": 481,
    "rangeMax": 481,
    "kwh100": 17.5,
    "price": 503190,
    "priceVersion": "RS",
    "priceSource": "https://www.chevrolet.com.br/eletrico/blazer-ev",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2025",
    "photo": {
      "src": "assets/carros/chevrolet-blazer-ev.jpg",
      "card": "assets/carros/chevrolet-blazer-ev-960.jpg",
      "author": "HJUdall",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:24_Chevrolet_Blazer_EV_RS.jpg"
    },
    "specs": {
      "version": "RS",
      "cv": 370,
      "kwh": 102,
      "s0100": 5.8,
      "dcKw": 190,
      "acKw": 22,
      "trunkL": 436,
      "note": "",
      "source": "https://www.chevrolet.com.br/eletrico/blazer-ev",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "chevrolet-captiva-ev",
    "brand": "Chevrolet",
    "model": "Captiva EV",
    "bodyType": "SUV",
    "color": "#3b82f6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "PR",
        "rangeKm": 304,
        "kwh100": 17.2
      }
    ],
    "rangeMin": 304,
    "rangeMax": 304,
    "kwh100": 17.2,
    "price": 199990,
    "priceVersion": "",
    "priceSource": "https://www.chevrolet.com.br/eletrico/captiva-ev",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/chevrolet-captiva-ev.jpg",
      "card": "assets/carros/chevrolet-captiva-ev-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Wuling_Starlight_S_006.jpg"
    },
    "specs": {
      "version": "Premier",
      "cv": 204,
      "kwh": 60,
      "s0100": 9.9,
      "dcKw": 120,
      "acKw": 6.6,
      "trunkL": 403,
      "note": "",
      "source": "https://www.chevrolet.com.br/eletrico/captiva-ev",
      "sourceExtra": "https://www.car.blog.br/2026/02/chevrolet-captiva-ev-2026-chega-ao.html",
      "kind": "oficial"
    }
  },
  {
    "id": "chevrolet-spark-euv",
    "brand": "Chevrolet",
    "model": "Spark EUV",
    "bodyType": "SUV",
    "color": "#22d3ee",
    "category": "Médio",
    "versions": [
      {
        "name": "ACTIV",
        "rangeKm": 258,
        "kwh100": 13.9
      }
    ],
    "rangeMin": 258,
    "rangeMax": 258,
    "kwh100": 13.9,
    "price": 146990,
    "priceVersion": "ACTIV",
    "priceSource": "https://www.chevrolet.com.br/eletrico/spark-euv",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2027",
    "photo": {
      "src": "assets/carros/chevrolet-spark-euv.jpg",
      "card": "assets/carros/chevrolet-spark-euv-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Baojun_Yep_001.jpg"
    },
    "specs": {
      "version": "Activ",
      "cv": 102,
      "kwh": 42,
      "s0100": 11.2,
      "dcKw": 50,
      "acKw": 6.6,
      "trunkL": 355,
      "note": "Mais 35 L no porta-malas dianteiro",
      "source": "https://www.chevrolet.com.br/eletrico/spark-euv",
      "sourceExtra": "https://www.car.blog.br/2025/09/chevrolet-spark-euv-chega-ao-brasil.html",
      "kind": "oficial"
    }
  },
  {
    "id": "fiat-500e",
    "brand": "Fiat",
    "model": "500e",
    "bodyType": "Hatch",
    "color": "#6366f1",
    "category": "Sub Compacto",
    "versions": [
      {
        "name": "ICON",
        "rangeKm": 227,
        "kwh100": 12.8
      }
    ],
    "rangeMin": 227,
    "rangeMax": 227,
    "kwh100": 12.8,
    "price": 214990,
    "priceVersion": "ICON",
    "priceSource": "https://500e.fiat.com.br/monte.html",
    "priceKind": "oficial",
    "priceNote": "unidade ano-modelo 2022",
    "photo": {
      "src": "assets/carros/fiat-500e.jpg",
      "card": "assets/carros/fiat-500e-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Fiat_500e_(2020)_Auto_Zuerich_2021_IMG_0604.jpg"
    },
    "specs": {
      "version": "Icon",
      "cv": 118,
      "kwh": 42,
      "s0100": null,
      "dcKw": 85,
      "acKw": null,
      "trunkL": 185,
      "note": "Recarga DC: dado da imprensa",
      "source": "https://www.media.stellantis.com/uploads/br/attachment/216/ft_fiat500e-6324ce95785a8.pdf",
      "sourceExtra": "https://www.car.blog.br/2021/08/fiat-500e-2022-eletrico-chega-ao-brasil.html",
      "kind": "oficial"
    }
  },
  {
    "id": "gac-aion-es",
    "brand": "GAC",
    "model": "Aion ES",
    "bodyType": "Sedã",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "PLUS",
        "rangeKm": 314,
        "kwh100": 12.5
      }
    ],
    "rangeMin": 314,
    "rangeMax": 314,
    "kwh100": 12.5,
    "price": 170990,
    "priceVersion": "",
    "priceSource": "https://www.gacgroup.com/pt-br/sedan/aion-es",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/gac-aion-es.jpg",
      "card": "assets/carros/gac-aion-es-960.jpg",
      "author": "S5A-0043",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:(SGP-Singapore)_Showcar_GAC_Aion_ES_No-plate_2024-09-14_-_2.jpg"
    },
    "specs": {
      "version": "Plus",
      "cv": 136,
      "kwh": 55.2,
      "s0100": null,
      "dcKw": 68,
      "acKw": 6.6,
      "trunkL": 453,
      "note": "",
      "source": "https://www.gacgroup.com/pt-br/configuration/aion-es/2024",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "gac-aion-ut",
    "brand": "GAC",
    "model": "Aion UT",
    "bodyType": "Hatch",
    "color": "#8b5cf6",
    "category": "Grande",
    "versions": [
      {
        "name": "ELITE",
        "rangeKm": 310,
        "kwh100": 15.8
      },
      {
        "name": "PREMIUM",
        "rangeKm": 253,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 253,
    "rangeMax": 310,
    "kwh100": 14.2,
    "price": 139990,
    "priceVersion": "PREMIUM",
    "priceSource": "https://primoauto.com.br/gac-aion-ut-chega-ao-brasil-a-partir-de-139-990",
    "priceKind": "imprensa",
    "priceNote": "preço de lançamento; o site da GAC não mostra o preço desta versão",
    "photo": {
      "src": "assets/carros/gac-aion-ut.jpg",
      "card": "assets/carros/gac-aion-ut-960.jpg",
      "author": "Chanokchon",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2025_Aion_UT_500_Premium_(2).jpg"
    },
    "specs": {
      "version": "Premium",
      "cv": 204,
      "kwh": 44.12,
      "s0100": 8.6,
      "dcKw": 87,
      "acKw": 6.6,
      "trunkL": 340,
      "note": "Versão Elite: bateria de 60 kWh, 0-100 em 7,3 s",
      "source": "https://primoauto.com.br/gac-aion-ut-chega-ao-brasil-a-partir-de-139-990",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "gac-aion-v",
    "brand": "GAC",
    "model": "Aion V",
    "bodyType": "SUV",
    "color": "#14b8a6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "ELITE",
        "rangeKm": 389,
        "kwh100": 15
      },
      {
        "name": "PREMIUM",
        "rangeKm": 325,
        "kwh100": 15.3
      }
    ],
    "rangeMin": 325,
    "rangeMax": 389,
    "kwh100": 15,
    "price": 219990,
    "priceVersion": "",
    "priceSource": "https://www.gacgroup.com/pt-br/suv/aion-v",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/gac-aion-v.jpg",
      "card": "assets/carros/gac-aion-v-960.jpg",
      "author": "Chanokchon",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2024_Aion_V_602_Luxury.jpg"
    },
    "specs": {
      "version": "Elite",
      "cv": 204,
      "kwh": 75.3,
      "s0100": 7.9,
      "dcKw": 180,
      "acKw": 6.6,
      "trunkL": 427,
      "note": "Dados da versão Elite (389 km); a Premium tem bateria menor (325 km)",
      "source": "https://www.gacgroup.com/pt-br/configuration/aion-v/2024",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "gac-aion-y",
    "brand": "GAC",
    "model": "Aion Y",
    "bodyType": "SUV",
    "color": "#60a5fa",
    "category": "Grande",
    "versions": [
      {
        "name": "PREMIUM",
        "rangeKm": 318,
        "kwh100": 15.8
      },
      {
        "name": "ELITE",
        "rangeKm": 318,
        "kwh100": 15.8
      }
    ],
    "rangeMin": 318,
    "rangeMax": 318,
    "kwh100": 15.8,
    "price": 175990,
    "priceVersion": "",
    "priceSource": "https://www.gacgroup.com/pt-br/suv/aion-y",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/gac-aion-y.jpg",
      "card": "assets/carros/gac-aion-y-960.jpg",
      "author": "Jengtingchen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Aion_Y_004.jpg"
    },
    "specs": {
      "version": "Premium",
      "cv": 204,
      "kwh": 63.2,
      "s0100": 8.5,
      "dcKw": 75,
      "acKw": 6.6,
      "trunkL": 361,
      "note": "",
      "source": "https://www.gacgroup.com/pt-br/configuration/aion-y/2024",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "gac-hyptec-ht",
    "brand": "GAC",
    "model": "Hyptec HT",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "ELITE",
        "rangeKm": 431,
        "kwh100": 14.7
      },
      {
        "name": "ULTRA",
        "rangeKm": 431,
        "kwh100": 14.7
      }
    ],
    "rangeMin": 431,
    "rangeMax": 431,
    "kwh100": 14.7,
    "price": 314990,
    "priceVersion": "",
    "priceSource": "https://www.gacgroup.com/pt-br/suv/hyptec-ht",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/gac-hyptec-ht.jpg",
      "card": "assets/carros/gac-hyptec-ht-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Aion_Hyper_HT_006.jpg"
    },
    "specs": {
      "version": "Elite",
      "cv": 340,
      "kwh": 83,
      "s0100": 5.8,
      "dcKw": 280,
      "acKw": 6.6,
      "trunkL": 670,
      "note": "Mais 55 L no porta-malas dianteiro",
      "source": "https://www.gacgroup.com/pt-br/configuration/hyptec-ht/2024",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "geely-ex2",
    "brand": "Geely",
    "model": "EX2",
    "bodyType": "SUV",
    "color": "#3b82f6",
    "category": "Médio",
    "versions": [
      {
        "name": "MAX",
        "rangeKm": 289,
        "kwh100": 10.8
      },
      {
        "name": "PRO",
        "rangeKm": 289,
        "kwh100": 10.8
      }
    ],
    "rangeMin": 289,
    "rangeMax": 289,
    "kwh100": 10.8,
    "price": 124600,
    "priceVersion": "PRO",
    "priceSource": "https://www.geelybrasil.com.br/ofertas",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/geely-ex2.jpg",
      "card": "assets/carros/geely-ex2-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Geely_Xingyuan_001.jpg"
    },
    "specs": {
      "version": "Pro",
      "cv": 116,
      "kwh": 39.4,
      "s0100": 10.2,
      "dcKw": 70,
      "acKw": null,
      "trunkL": 375,
      "note": "Mais 70 L no porta-malas dianteiro",
      "source": "https://www.geelybrasil.com.br/geely-ex2-chega-ao-brasil",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "geely-ex5",
    "brand": "Geely",
    "model": "EX5",
    "bodyType": "SUV",
    "color": "#22d3ee",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "MAX",
        "rangeKm": 349,
        "kwh100": 14.2
      },
      {
        "name": "PRO",
        "rangeKm": 413,
        "kwh100": 11.7
      }
    ],
    "rangeMin": 349,
    "rangeMax": 413,
    "kwh100": 11.7,
    "price": 207800,
    "priceVersion": "PRO",
    "priceSource": "https://www.geelybrasil.com.br/ofertas",
    "priceKind": "oficial",
    "priceNote": "promoção à vista R$ 197.800 com bônus",
    "photo": {
      "src": "assets/carros/geely-ex5.jpg",
      "card": "assets/carros/geely-ex5-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Geely_Galaxy_E5_001.jpg"
    },
    "specs": {
      "version": "Pro",
      "cv": 218,
      "kwh": 60.22,
      "s0100": 6.9,
      "dcKw": 100,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.geelybrasil.com.br/ex5",
      "sourceExtra": "https://www.car.blog.br/2026/09/geely-ex5-max-precos-detalhes.html",
      "kind": "oficial"
    }
  },
  {
    "id": "gwm-ora-03",
    "brand": "GWM",
    "model": "Ora 03",
    "bodyType": "Hatch",
    "color": "#818cf8",
    "category": "Médio",
    "versions": [
      {
        "name": "BEV58 C",
        "rangeKm": 315,
        "kwh100": 14.2
      },
      {
        "name": "GT BEV63",
        "rangeKm": 295,
        "kwh100": 15
      },
      {
        "name": "SKIN BEV48",
        "rangeKm": 232,
        "kwh100": 14.4
      },
      {
        "name": "BEV58",
        "rangeKm": 315,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 232,
    "rangeMax": 315,
    "kwh100": 14.2,
    "price": 169000,
    "priceVersion": "BEV58",
    "priceSource": "https://www.gwmmotors.com.br/pt/modelos/ora-03-bev58",
    "priceKind": "oficial",
    "priceNote": "bônus de R$ 20.000 na nota ou taxa 0% (promoção)",
    "photo": {
      "src": "assets/carros/gwm-ora-03.jpg",
      "card": "assets/carros/gwm-ora-03-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:ORA_Funky_Cat_1X7A0814.jpg"
    },
    "specs": {
      "version": "BEV58",
      "cv": 171,
      "kwh": 58,
      "s0100": 9,
      "dcKw": 67,
      "acKw": null,
      "trunkL": 228,
      "note": "Recarga DC: dado da imprensa",
      "source": "https://www.gwmmotors.com.br/content/dam/gwm/pages/br/pt/models/ora-03-bev58/ficha-tecnica/gwm-ora-03-bev58-ficha-tecnica.pdf",
      "sourceExtra": "https://www.car.blog.br/2025/04/gwm-ora-03-2026-precos-partem-de-r-169.html",
      "kind": "oficial"
    }
  },
  {
    "id": "gwm-ora-5",
    "brand": "GWM",
    "model": "Ora 5",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Grande",
    "versions": [
      {
        "name": "5",
        "rangeKm": 349,
        "kwh100": 13.6
      }
    ],
    "rangeMin": 349,
    "rangeMax": 349,
    "kwh100": 13.6,
    "price": 163990,
    "priceVersion": "5",
    "priceSource": "https://www.gwmmotors.com.br/pt/modelos/ora5",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/gwm-ora-5.jpg",
      "card": "assets/carros/gwm-ora-5-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Ora_5_004.jpg"
    },
    "specs": {
      "version": "Única",
      "cv": 204,
      "kwh": 58.3,
      "s0100": 7.7,
      "dcKw": 120,
      "acKw": 11,
      "trunkL": 362,
      "note": "",
      "source": "https://www.car.blog.br/2026/06/gwm-ora-5-suv-eletrico-preco-fotos.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "hyundai-ioniq-5",
    "brand": "Hyundai",
    "model": "Ioniq 5",
    "bodyType": "SUV",
    "color": "#6366f1",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Platinum",
        "rangeKm": 374,
        "kwh100": 18.3
      },
      {
        "name": "Ultimate",
        "rangeKm": 374,
        "kwh100": 18.3
      },
      {
        "name": "Signature",
        "rangeKm": 374,
        "kwh100": 18.3
      }
    ],
    "rangeMin": 374,
    "rangeMax": 374,
    "kwh100": 18.3,
    "price": 339990,
    "priceVersion": "",
    "priceSource": "https://www.cnnbrasil.com.br/auto/hyundai-ioniq-5-abre-pre-venda-no-brasil-e-pode-rodar-374-km-saiba-preco/",
    "priceKind": "imprensa",
    "priceNote": "a imprensa cita valores entre R$ 339.990 e R$ 394.990",
    "photo": {
      "src": "assets/carros/hyundai-ioniq-5.jpg",
      "card": "assets/carros/hyundai-ioniq-5-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5_IAA_2021_1X7A0189.jpg"
    },
    "specs": {
      "version": "AWD",
      "cv": 325,
      "kwh": 84,
      "s0100": 5.3,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.hyundai.com.br/universo-hyundai/veiculos/e-gmp-hyundai.html",
      "sourceExtra": "https://www.cnnbrasil.com.br/auto/hyundai-ioniq-5-abre-pre-venda-no-brasil-e-pode-rodar-374-km-saiba-preco/",
      "kind": "oficial"
    }
  },
  {
    "id": "jac-e-j7",
    "brand": "JAC",
    "model": "e-J7",
    "bodyType": "Sedã",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "e-J7",
        "rangeKm": 263,
        "kwh100": 13.9
      }
    ],
    "rangeMin": 263,
    "rangeMax": 263,
    "kwh100": 13.9,
    "price": 259900,
    "priceVersion": "",
    "priceSource": "https://www.cnnbrasil.com.br/auto/quanto-custa-um-carro-eletrico-da-jac-motors-no-brasil/",
    "priceKind": "imprensa",
    "priceNote": "o site da JAC estava fora do ar na coleta",
    "specs": {
      "version": "Única",
      "cv": 193,
      "kwh": 50.1,
      "s0100": 5.9,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-J7-FICHA-1.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "jac-e-js1",
    "brand": "JAC",
    "model": "e-JS1",
    "bodyType": "Hatch",
    "color": "#8b5cf6",
    "category": "Sub Compacto",
    "versions": [
      {
        "name": "e-JS1",
        "rangeKm": 181,
        "kwh100": 13.9
      },
      {
        "name": "e-JS1 EXT",
        "rangeKm": 181,
        "kwh100": 13.9
      }
    ],
    "rangeMin": 181,
    "rangeMax": 181,
    "kwh100": 13.9,
    "price": 129990,
    "priceVersion": "",
    "priceSource": "https://www.cnnbrasil.com.br/auto/quanto-custa-um-carro-eletrico-da-jac-motors-no-brasil/",
    "priceKind": "imprensa",
    "priceNote": "o site da JAC estava fora do ar na coleta",
    "photo": {
      "src": "assets/carros/jac-e-js1.jpg",
      "card": "assets/carros/jac-e-js1-960.jpg",
      "author": "Matti Blume",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:JAC_e-JS1,_Auto_2024,_Zurich_(PANA0126).jpg"
    },
    "specs": {
      "version": "e-JS1",
      "cv": 62,
      "kwh": 31.4,
      "s0100": 10.7,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.jacmotors.com.br/carros/e-js1/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "jac-e-js4",
    "brand": "JAC",
    "model": "e-JS4",
    "bodyType": "SUV",
    "color": "#14b8a6",
    "category": "Médio",
    "versions": [
      {
        "name": "e-JS4",
        "rangeKm": 307,
        "kwh100": 13.1
      }
    ],
    "rangeMin": 307,
    "rangeMax": 307,
    "kwh100": 13.1,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/jac-e-js4.jpg",
      "card": "assets/carros/jac-e-js4-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:JAC_e-JS4_Auto_Zuerich_2023_1X7A1321.jpg"
    },
    "specs": {
      "version": "Única",
      "cv": 200,
      "kwh": 55.1,
      "s0100": 7.5,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-JS4-FICHA-1.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "jac-iev330p",
    "brand": "JAC",
    "model": "iEV330P",
    "bodyType": "Picape",
    "color": "#60a5fa",
    "category": "Picape",
    "versions": [
      {
        "name": "IEV330",
        "rangeKm": 226,
        "kwh100": 20.8
      }
    ],
    "rangeMin": 226,
    "rangeMax": 226,
    "kwh100": 20.8,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": ""
  },
  {
    "id": "kia-ev5",
    "brand": "Kia",
    "model": "EV5",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "AIR 2WD",
        "rangeKm": 402,
        "kwh100": 16.7
      },
      {
        "name": "LAND 2WD",
        "rangeKm": 402,
        "kwh100": 16.7
      }
    ],
    "rangeMin": 402,
    "rangeMax": 402,
    "kwh100": 16.7,
    "price": 389990,
    "priceVersion": "",
    "priceSource": "busca na imprensa",
    "priceKind": "imprensa",
    "priceNote": "a Kia não mostra o preço no site",
    "photo": {
      "src": "assets/carros/kia-ev5.jpg",
      "card": "assets/carros/kia-ev5-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Kia_EV5_003.jpg"
    },
    "specs": {
      "version": "Land",
      "cv": 217.5,
      "kwh": 88.16,
      "s0100": 8.9,
      "dcKw": null,
      "acKw": 11,
      "trunkL": 513,
      "note": "",
      "source": "https://www.kia.com.br/ev5",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "leapmotor-b10",
    "brand": "Leapmotor",
    "model": "B10",
    "bodyType": "SUV",
    "color": "#818cf8",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "LIFE",
        "rangeKm": 288,
        "kwh100": 15.3
      }
    ],
    "rangeMin": 288,
    "rangeMax": 288,
    "kwh100": 15.3,
    "price": 182990,
    "priceVersion": "Elétrico",
    "priceSource": "https://www.leapmotor.com.br/b10/monte.html",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/leapmotor-b10.jpg",
      "card": "assets/carros/leapmotor-b10-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Leapmotor_B10_IAA_2025_DSC_2067.jpg"
    },
    "specs": {
      "version": "Elétrico",
      "cv": 218,
      "kwh": null,
      "s0100": null,
      "dcKw": 140,
      "acKw": 11,
      "trunkL": 405,
      "note": "",
      "source": "https://www.car.blog.br/2026/04/leapmotor-b10-2026-suv-eletrico-de-r.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "leapmotor-c10",
    "brand": "Leapmotor",
    "model": "C10",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Design",
        "rangeKm": 338,
        "kwh100": 16.9
      }
    ],
    "rangeMin": 338,
    "rangeMax": 338,
    "kwh100": 16.9,
    "price": 214990,
    "priceVersion": "Elétrico",
    "priceSource": "https://www.leapmotor.com.br/",
    "priceKind": "oficial",
    "priceNote": "preço à vista para pessoa física, na página inicial do site",
    "photo": {
      "src": "assets/carros/leapmotor-c10.jpg",
      "card": "assets/carros/leapmotor-c10-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Leapmotor_C10_EV_DSC_8756.jpg"
    },
    "specs": {
      "version": "Elétrico",
      "cv": 218,
      "kwh": 69.9,
      "s0100": 8.3,
      "dcKw": 84,
      "acKw": 11,
      "trunkL": 465,
      "note": "Mais 32 L no porta-malas dianteiro",
      "source": "https://www.car.blog.br/2025/11/leapmotor-c10-chega-em-versoes-eletrica.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "lexus-rz",
    "brand": "Lexus",
    "model": "RZ",
    "bodyType": "SUV",
    "color": "#3b82f6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "500e",
        "rangeKm": 357,
        "kwh100": 15.8
      }
    ],
    "rangeMin": 357,
    "rangeMax": 357,
    "kwh100": 15.8,
    "price": 499900,
    "priceVersion": "500e",
    "priceSource": "busca na imprensa",
    "priceKind": "imprensa",
    "priceNote": "preço de pré-venda",
    "photo": {
      "src": "assets/carros/lexus-rz.jpg",
      "card": "assets/carros/lexus-rz-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Lexus_RZ_450e_(XEBM15)_IMG_0680.jpg"
    },
    "specs": {
      "version": "500e",
      "cv": 381,
      "kwh": 77,
      "s0100": 4.6,
      "dcKw": 150,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.car.blog.br/2026/05/lexus-rz-500e-chega-ao-brasil-preco-r.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "mercedes-eqb",
    "brand": "Mercedes-Benz",
    "model": "EQB 250+",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "—",
        "rangeKm": 376,
        "kwh100": 14.7
      }
    ],
    "rangeMin": 376,
    "rangeMax": 376,
    "kwh100": 14.7,
    "price": 399900,
    "priceVersion": "",
    "priceSource": "https://www.car.blog.br/2025/07/mercedes-benz-eqb-250-2026-preco-r.html",
    "priceKind": "imprensa",
    "priceNote": "preço de lançamento (jul/2025)",
    "photo": {
      "src": "assets/carros/mercedes-eqb.jpg",
      "card": "assets/carros/mercedes-eqb-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_EQB_004.jpg"
    },
    "specs": {
      "version": "250+",
      "cv": 190,
      "kwh": 70.5,
      "s0100": 8.9,
      "dcKw": 100,
      "acKw": 11,
      "trunkL": 495,
      "note": "",
      "source": "https://imprensa.mercedes-benz.com.br/releases/mercedes-benz-eqb-250-chega-com-mais-autonomia-e-eficiencia-no-mercado-brasileiro",
      "sourceExtra": "https://www.car.blog.br/2025/07/mercedes-benz-eqb-250-2026-preco-r.html",
      "kind": "oficial"
    }
  },
  {
    "id": "mercedes-glb-ev",
    "brand": "Mercedes-Benz",
    "model": "GLB 250 EV",
    "bodyType": "SUV",
    "color": "#3b82f6",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "EV AMGL",
        "rangeKm": 427,
        "kwh100": 15.8
      }
    ],
    "rangeMin": 427,
    "rangeMax": 427,
    "kwh100": 15.8,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/mercedes-glb-ev.jpg",
      "card": "assets/carros/mercedes-glb-ev-960.jpg",
      "author": "© M 93",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_GLB_250%2B_mit_EQ-Technologie_AMG_Line_(X_244)_%E2%80%93_f1_18042026.jpg"
    }
  },
  {
    "id": "mg-cyberster",
    "brand": "MG",
    "model": "Cyberster",
    "bodyType": "Esportivo",
    "color": "#22d3ee",
    "category": "Esportivo",
    "versions": [
      {
        "name": "77 KWH AWD",
        "rangeKm": 342,
        "kwh100": 15.6
      }
    ],
    "rangeMin": 342,
    "rangeMax": 342,
    "kwh100": 15.6,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "",
    "photo": {
      "src": "assets/carros/mg-cyberster.jpg",
      "card": "assets/carros/mg-cyberster-960.jpg",
      "author": "Matti Blume",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:MG_Cyberster,_BAS_24,_Brussels_(P1170240).jpg"
    },
    "specs": {
      "version": "AWD 77 kWh",
      "cv": 510,
      "kwh": 77,
      "s0100": 3.2,
      "dcKw": 150,
      "acKw": 11,
      "trunkL": 249,
      "note": "",
      "source": "https://mgmotoroficial.com.br/pdfs/cyberster-ficha.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mg-mg4",
    "brand": "MG",
    "model": "MG4",
    "bodyType": "Hatch",
    "color": "#6366f1",
    "category": "Médio",
    "versions": [
      {
        "name": "64 KWH COM",
        "rangeKm": 364,
        "kwh100": 13.9
      },
      {
        "name": "64 KWH LUX",
        "rangeKm": 364,
        "kwh100": 13.9
      },
      {
        "name": "64 KWH AWD",
        "rangeKm": 279,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 279,
    "rangeMax": 364,
    "kwh100": 13.9,
    "price": 184600,
    "priceVersion": "COMFORT 64 KWH",
    "priceSource": "https://mgmotoroficial.com.br/oferta/mg4",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/mg-mg4.jpg",
      "card": "assets/carros/mg-mg4-960.jpg",
      "author": "S5A-0043",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:(SGP-Singapore)_Showcar_MG4_EV_No-plate_2024-09-14_-_2.jpg"
    },
    "specs": {
      "version": "Comfort RWD 64 kWh",
      "cv": 190,
      "kwh": 64,
      "s0100": 7.2,
      "dcKw": 140,
      "acKw": 11,
      "trunkL": 350,
      "note": "",
      "source": "https://mgmotoroficial.com.br/pdfs/mg4-ficha.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mg-mg4-urban",
    "brand": "MG",
    "model": "MG4 Urban",
    "bodyType": "Hatch",
    "color": "#0ea5e9",
    "category": "Grande",
    "versions": [
      {
        "name": "URB EV54KWH COM",
        "rangeKm": 358,
        "kwh100": 11.7
      },
      {
        "name": "URB EV54KWH LUX",
        "rangeKm": 358,
        "kwh100": 11.7
      },
      {
        "name": "URB EV43KWH COM",
        "rangeKm": 299,
        "kwh100": 11.1
      },
      {
        "name": "URB EV43KWH LUX",
        "rangeKm": 299,
        "kwh100": 11.1
      }
    ],
    "rangeMin": 299,
    "rangeMax": 358,
    "kwh100": 11.1,
    "price": 129990,
    "priceVersion": "COMFORT 43 KWH",
    "priceSource": "https://www.automotivebusiness.com.br/noticias/mg4-urban-chega-ao-brasil-por-129-990",
    "priceKind": "imprensa",
    "priceNote": "preço de lançamento (jul/2026); o site da MG não mostra o preço",
    "photo": {
      "src": "assets/carros/mg-mg4-urban.jpg",
      "card": "assets/carros/mg-mg4-urban-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:MG4_EV_(second_generation)_IMG_8032.jpg"
    },
    "specs": {
      "version": "Comfort 43 kWh",
      "cv": 150,
      "kwh": 42.8,
      "s0100": 9.6,
      "dcKw": 82,
      "acKw": 11,
      "trunkL": 479,
      "note": "Mais 98 L sob o assoalho. Versão Luxury 54 kWh: 160 cv, recarga DC de 87 kW",
      "source": "https://mgmotoroficial.com.br/pdfs/mg4-urban-ficha.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mg-s5",
    "brand": "MG",
    "model": "S5",
    "bodyType": "SUV",
    "color": "#8b5cf6",
    "category": "Grande",
    "versions": [
      {
        "name": "EV 62KWH LUX",
        "rangeKm": 351,
        "kwh100": 14.2
      },
      {
        "name": "EV 62KWH COM",
        "rangeKm": 351,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 351,
    "rangeMax": 351,
    "kwh100": 14.2,
    "price": 218800,
    "priceVersion": "COMFORT",
    "priceSource": "https://mgmotoroficial.com.br/oferta/mgs5",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/mg-s5.jpg",
      "card": "assets/carros/mg-s5-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:MGS5_EV_DSC_2698.jpg"
    },
    "specs": {
      "version": "Comfort RWD",
      "cv": 205,
      "kwh": 64,
      "s0100": 6.3,
      "dcKw": 150,
      "acKw": 7,
      "trunkL": 453,
      "note": "",
      "source": "https://mgmotoroficial.com.br/pdfs/mgs5-ficha.pdf",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mini-aceman",
    "brand": "Mini",
    "model": "Aceman",
    "bodyType": "SUV",
    "color": "#14b8a6",
    "category": "Médio",
    "versions": [
      {
        "name": "E",
        "rangeKm": 253,
        "kwh100": 12.8
      },
      {
        "name": "SE",
        "rangeKm": 270,
        "kwh100": 14.4
      }
    ],
    "rangeMin": 253,
    "rangeMax": 270,
    "kwh100": 12.8,
    "price": 275990,
    "priceVersion": "E",
    "priceSource": "https://www.mini.com.br/pt_BR/home/range/all-electric-mini-aceman.html",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2025/2026",
    "photo": {
      "src": "assets/carros/mini-aceman.jpg",
      "card": "assets/carros/mini-aceman-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mini_Aceman_DSC_7118.jpg"
    },
    "specs": {
      "version": "E",
      "cv": 184,
      "kwh": 42.5,
      "s0100": 7.9,
      "dcKw": null,
      "acKw": null,
      "trunkL": 300,
      "note": "",
      "source": "https://www.press.bmwgroup.com/brazil/article/detail/T0441429PT/o-novo-mini-aceman?language=pt",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mini-cooper",
    "brand": "Mini",
    "model": "Cooper",
    "bodyType": "Hatch",
    "color": "#60a5fa",
    "category": "Compacto",
    "versions": [
      {
        "name": "E",
        "rangeKm": 239,
        "kwh100": 12.8
      },
      {
        "name": "SE",
        "rangeKm": 312,
        "kwh100": 13.3
      }
    ],
    "rangeMin": 239,
    "rangeMax": 312,
    "kwh100": 12.8,
    "price": 264990,
    "priceVersion": "E",
    "priceSource": "https://www.mini.com.br/pt_BR/home/range/mini-cooper-eletrico.html",
    "priceKind": "oficial",
    "priceNote": "ano-modelo 2025/2026",
    "photo": {
      "src": "assets/carros/mini-cooper.jpg",
      "card": "assets/carros/mini-cooper-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mini_Hatch_(J01)_IMG_8959.jpg"
    },
    "specs": {
      "version": "E",
      "cv": 184,
      "kwh": 40.7,
      "s0100": 7.2,
      "dcKw": null,
      "acKw": 11,
      "trunkL": null,
      "note": "Versão SE: 218 cv",
      "source": "https://www.press.bmwgroup.com/brazil/article/detail/T0445464PT/pr%C3%A9-venda-do-novo-mini-cooper-e-come%C3%A7a-hoje",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mini-countryman",
    "brand": "Mini",
    "model": "Countryman",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Grande",
    "versions": [
      {
        "name": "SE EXCLUSIVE",
        "rangeKm": 320,
        "kwh100": 16.9
      },
      {
        "name": "SE TOP",
        "rangeKm": 320,
        "kwh100": 16.9
      }
    ],
    "rangeMin": 320,
    "rangeMax": 320,
    "kwh100": 16.9,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/mini-countryman.jpg",
      "card": "assets/carros/mini-countryman-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mini_Countryman_(U25)_SE_IAA_2023_1X7A0735.jpg"
    },
    "specs": {
      "version": "SE ALL4",
      "cv": 306,
      "kwh": 66.45,
      "s0100": 5.8,
      "dcKw": 130,
      "acKw": null,
      "trunkL": 460,
      "note": "",
      "source": "https://www.press.bmwgroup.com/brazil/article/detail/T0443334PT/totalmente-novo-mini-countryman-se-chega-ao-brasil-com-motor-100-el%C3%A9trico-duas-vers%C3%B5es-e-marca-o-in%C3%ADcio-de-uma-nova-era-da-marca-no-pa%C3%ADs?language=pt",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "mini-jcw",
    "brand": "Mini",
    "model": "John Cooper Works",
    "bodyType": "Hatch",
    "color": "#818cf8",
    "category": "Compacto",
    "versions": [
      {
        "name": "3P",
        "rangeKm": 306,
        "kwh100": 13.3
      },
      {
        "name": "ACEMAN",
        "rangeKm": 312,
        "kwh100": 13.9
      }
    ],
    "rangeMin": 306,
    "rangeMax": 312,
    "kwh100": 13.3,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/mini-jcw.jpg",
      "card": "assets/carros/mini-jcw-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mini_Aceman_John_Cooper_Works_DSC_2680.jpg"
    },
    "specs": {
      "version": "E",
      "cv": 258,
      "kwh": 54.2,
      "s0100": 5.8,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "JCW Aceman E: 0-100 em 6,3 s",
      "source": "https://www.car.blog.br/2025/07/mini-jcw-eletrico-chega-ao-brasil-com.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "omoda-e5",
    "brand": "Omoda",
    "model": "E5",
    "bodyType": "SUV",
    "color": "#22d3ee",
    "category": "Grande",
    "versions": [
      {
        "name": "--",
        "rangeKm": 345,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 345,
    "rangeMax": 345,
    "kwh100": 14.2,
    "price": 209990,
    "priceVersion": "",
    "priceSource": "https://www.webmotors.com.br/omoda/e5/2026",
    "priceKind": "imprensa",
    "priceNote": "a Omoda não mostra o preço no site",
    "photo": {
      "src": "assets/carros/omoda-e5.jpg",
      "card": "assets/carros/omoda-e5-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Omoda_E5_IMG_8107.jpg"
    },
    "specs": {
      "version": "Única",
      "cv": 204,
      "kwh": 61.1,
      "s0100": 7.6,
      "dcKw": 80,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.car.blog.br/2025/04/omoda-e5-eletrico-preco-r-209990-brasil.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "porsche-cayenne-electric",
    "brand": "Porsche",
    "model": "Cayenne Electric",
    "bodyType": "SUV",
    "color": "#6366f1",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "E",
        "rangeKm": 493,
        "kwh100": 17.5
      },
      {
        "name": "E OF",
        "rangeKm": 493,
        "kwh100": 17.5
      },
      {
        "name": "E C",
        "rangeKm": 493,
        "kwh100": 17.5
      },
      {
        "name": "E CO",
        "rangeKm": 493,
        "kwh100": 17.5
      },
      {
        "name": "ET",
        "rangeKm": 481,
        "kwh100": 17.8
      },
      {
        "name": "ET C",
        "rangeKm": 481,
        "kwh100": 17.8
      },
      {
        "name": "ET OF",
        "rangeKm": 481,
        "kwh100": 17.8
      },
      {
        "name": "ET CO",
        "rangeKm": 481,
        "kwh100": 17.8
      }
    ],
    "rangeMin": 481,
    "rangeMax": 493,
    "kwh100": 17.5,
    "price": 900000,
    "priceVersion": "Electric",
    "priceSource": "https://www.carrosegaragem.com.br/porsche-cayenne-electric-brasil/",
    "priceKind": "imprensa",
    "priceNote": "a Porsche não divulga preços no site; Coupé R$ 950 mil, S R$ 1,08 mi, Turbo R$ 1,41 mi (set/2026)",
    "photo": {
      "src": "assets/carros/porsche-cayenne-electric.jpg",
      "card": "assets/carros/porsche-cayenne-electric-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Porsche_Cayenne_Electric_IMG_8088.jpg"
    },
    "specs": {
      "version": "Cayenne Electric",
      "cv": 442,
      "kwh": 113,
      "s0100": 4.8,
      "dcKw": 400,
      "acKw": 11,
      "trunkL": 781,
      "note": "Potência com Launch Control (408 cv em uso contínuo). Mais 90 L no porta-malas dianteiro",
      "source": "https://www.car.blog.br/2026/05/novo-porsche-cayenne-electric-2027.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "porsche-macan-electric",
    "brand": "Porsche",
    "model": "Macan Electric",
    "bodyType": "SUV",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "E4",
        "rangeKm": 443,
        "kwh100": 16.7
      },
      {
        "name": "ETURBO",
        "rangeKm": 435,
        "kwh100": 16.9
      },
      {
        "name": "E4S",
        "rangeKm": 438,
        "kwh100": 16.9
      },
      {
        "name": "EGTS",
        "rangeKm": 441,
        "kwh100": 16.9
      }
    ],
    "rangeMin": 435,
    "rangeMax": 443,
    "kwh100": 16.7,
    "price": 580000,
    "priceVersion": "Electric",
    "priceSource": "https://www.vrum.com.br/mercado/2026/02/7348831-porsche-no-brasil-precos-atualizados-dos-modelos-e-o-mais-desejado.html",
    "priceKind": "imprensa",
    "priceNote": "a Porsche não divulga preços no site; a imprensa cita o Macan a partir de R$ 580 mil (fev/2026)",
    "photo": {
      "src": "assets/carros/porsche-macan-electric.jpg",
      "card": "assets/carros/porsche-macan-electric-960.jpg",
      "author": "Ethan Llamas",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Porsche_Macan_XAB_White.jpg"
    },
    "specs": {
      "version": "Macan Electric (RWD)",
      "cv": 340,
      "kwh": 100,
      "s0100": 5.7,
      "dcKw": 270,
      "acKw": 11,
      "trunkL": null,
      "note": "",
      "source": "https://www.car.blog.br/2024/11/novo-porsche-macan-2025-electric-preco.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "porsche-taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "bodyType": "Esportivo",
    "color": "#8b5cf6",
    "category": "Esportivo",
    "versions": [
      {
        "name": "TURBO S",
        "rangeKm": 425,
        "kwh100": 18.6
      },
      {
        "name": "4S",
        "rangeKm": 415,
        "kwh100": 19.2
      },
      {
        "name": "4S BE",
        "rangeKm": 415,
        "kwh100": 19.2
      },
      {
        "name": "TURBOCT",
        "rangeKm": 415,
        "kwh100": 19.2
      },
      {
        "name": "4S CT",
        "rangeKm": 415,
        "kwh100": 19.2
      },
      {
        "name": "4CT",
        "rangeKm": 415,
        "kwh100": 19.2
      },
      {
        "name": "TURBOGT",
        "rangeKm": 442,
        "kwh100": 17.8
      }
    ],
    "rangeMin": 415,
    "rangeMax": 442,
    "kwh100": 17.8,
    "price": 850000,
    "priceVersion": "",
    "priceSource": "https://www.vrum.com.br/mercado/2026/02/7348831-porsche-no-brasil-precos-atualizados-dos-modelos-e-o-mais-desejado.html",
    "priceKind": "imprensa",
    "priceNote": "a Porsche não divulga preços no site; valor publicado em fev/2026, pode ter sido reajustado",
    "photo": {
      "src": "assets/carros/porsche-taycan.jpg",
      "card": "assets/carros/porsche-taycan-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2024_Porsche_Taycan_GTS_IAA_2025_DSC_1988.jpg"
    },
    "specs": {
      "version": "4S",
      "cv": 544,
      "kwh": null,
      "s0100": 3.7,
      "dcKw": 320,
      "acKw": null,
      "trunkL": null,
      "note": "Potência com Launch Control (overboost)",
      "source": "https://www.porsche.com/international/models/taycan/taycan-models/taycan-4s/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "renault-megane-e-tech",
    "brand": "Renault",
    "model": "Mégane E-Tech",
    "bodyType": "SUV",
    "color": "#14b8a6",
    "category": "Médio",
    "versions": [
      {
        "name": "E-TECH",
        "rangeKm": 337,
        "kwh100": 14.2
      }
    ],
    "rangeMin": 337,
    "rangeMax": 337,
    "kwh100": 14.2,
    "price": 279990,
    "priceVersion": "E-TECH",
    "priceSource": "https://ofertas.renault.com.br/kwid-e-tech%2Bmegane-e-tech",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/renault-megane-e-tech.jpg",
      "card": "assets/carros/renault-megane-e-tech-960.jpg",
      "author": "Alexander Migl",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Renault_Megane_E-Tech_IAA_2021_1X7A0073.jpg"
    },
    "specs": {
      "version": "EV60 220",
      "cv": 220,
      "kwh": 60,
      "s0100": 7.4,
      "dcKw": 130,
      "acKw": 22,
      "trunkL": null,
      "note": "",
      "source": "https://www.renault.com.br/veiculos-eletricos/megane-e-tech/autonomia-e-carregamento.html",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "suzuki-e-vitara",
    "brand": "Suzuki",
    "model": "e Vitara",
    "bodyType": "SUV",
    "color": "#60a5fa",
    "category": "Médio",
    "versions": [
      {
        "name": "4STY 2WD",
        "rangeKm": 317,
        "kwh100": 15
      },
      {
        "name": "4STY 4WD",
        "rangeKm": 293,
        "kwh100": 16.1
      }
    ],
    "rangeMin": 293,
    "rangeMax": 317,
    "kwh100": 15,
    "price": null,
    "priceVersion": "",
    "priceSource": "",
    "priceKind": null,
    "priceNote": "preço não encontrado",
    "photo": {
      "src": "assets/carros/suzuki-e-vitara.jpg",
      "card": "assets/carros/suzuki-e-vitara-960.jpg",
      "author": "La Revue Automobile",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2025_Suzuki_e_Vitara_front_view.jpg"
    },
    "specs": {
      "version": "4x4 ALLGRIP-e",
      "cv": 184,
      "kwh": 61,
      "s0100": 7.4,
      "dcKw": 150,
      "acKw": 7,
      "trunkL": 310,
      "note": "Porta-malas com o banco traseiro na posição mais avançada",
      "source": "https://www.suzukiveiculos.com.br/veiculos/evitara/",
      "sourceExtra": "https://www.car.blog.br/2026/07/suzuki-e-vitara-2027-preco-ficha-tecnica-brasil.html",
      "kind": "oficial"
    }
  },
  {
    "id": "volvo-ec40",
    "brand": "Volvo",
    "model": "EC40",
    "bodyType": "SUV",
    "color": "#38bdf8",
    "category": "Grande",
    "versions": [
      {
        "name": "6 CORE",
        "rangeKm": 385,
        "kwh100": 14.2
      },
      {
        "name": "6 PLUS",
        "rangeKm": 385,
        "kwh100": 14.2
      },
      {
        "name": "6 ULTRA",
        "rangeKm": 385,
        "kwh100": 14.2
      },
      {
        "name": "8 CORE",
        "rangeKm": 404,
        "kwh100": 16.4
      },
      {
        "name": "8 PLUS",
        "rangeKm": 404,
        "kwh100": 16.4
      },
      {
        "name": "8 ULTRA",
        "rangeKm": 404,
        "kwh100": 16.4
      },
      {
        "name": "PERF BLACK",
        "rangeKm": 404,
        "kwh100": 16.4
      },
      {
        "name": "PERF ULTRA",
        "rangeKm": 404,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 385,
    "rangeMax": 404,
    "kwh100": 14.2,
    "price": 350950,
    "priceVersion": "",
    "priceSource": "https://www.volvocars.com/br/cars/ec40-electric/",
    "priceKind": "oficial",
    "priceNote": "versão superior a partir de R$ 405.950",
    "photo": {
      "src": "assets/carros/volvo-ec40.jpg",
      "card": "assets/carros/volvo-ec40-960.jpg",
      "author": "Ethan Llamas",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Volvo_EC40_Crystal_White_Pearl_-_front.jpg"
    },
    "specs": {
      "version": "Single Motor",
      "cv": 238,
      "kwh": 69,
      "s0100": 7.3,
      "dcKw": 175,
      "acKw": 11,
      "trunkL": 404,
      "note": "Mais 31 L no porta-malas dianteiro. Twin Motor Performance: 442 cv, 82 kWh, 0-100 em 4,6 s",
      "source": "https://www.volvocars.com/br/cars/ec40-electric/specifications/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "volvo-es90",
    "brand": "Volvo",
    "model": "ES90",
    "bodyType": "Sedã",
    "color": "#818cf8",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "TWIN PE ULT",
        "rangeKm": 524,
        "kwh100": 15.3
      }
    ],
    "rangeMin": 524,
    "rangeMax": 524,
    "kwh100": 15.3,
    "price": 659950,
    "priceVersion": "",
    "priceSource": "https://www.volvocars.com/br/cars/es90-electric/",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/volvo-es90.jpg",
      "card": "assets/carros/volvo-es90-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Volvo_ES90_IAA_2025_DSC_1357.jpg"
    },
    "specs": {
      "version": "Twin Motor Performance",
      "cv": 680,
      "kwh": 106,
      "s0100": 4,
      "dcKw": 350,
      "acKw": 11,
      "trunkL": 442,
      "note": "Mais 27 L no porta-malas dianteiro",
      "source": "https://www.volvocars.com/br/cars/es90-electric/specifications/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "volvo-ex30",
    "brand": "Volvo",
    "model": "EX30",
    "bodyType": "SUV",
    "color": "#2dd4bf",
    "category": "Médio",
    "versions": [
      {
        "name": "E40 CORE",
        "rangeKm": 250,
        "kwh100": 15.3
      },
      {
        "name": "E40 PLUS",
        "rangeKm": 250,
        "kwh100": 15.3
      },
      {
        "name": "E60 ULTRA",
        "rangeKm": 338,
        "kwh100": 14.4
      },
      {
        "name": "E60 PLUS",
        "rangeKm": 338,
        "kwh100": 14.4
      },
      {
        "name": "E60 CORE",
        "rangeKm": 338,
        "kwh100": 14.4
      },
      {
        "name": "TWIN ULTRA",
        "rangeKm": 316,
        "kwh100": 17.2
      },
      {
        "name": "CROSSC PLUS",
        "rangeKm": 333,
        "kwh100": 16.1
      },
      {
        "name": "C COUNTRY",
        "rangeKm": 327,
        "kwh100": 15.8
      }
    ],
    "rangeMin": 250,
    "rangeMax": 338,
    "kwh100": 14.4,
    "price": 249950,
    "priceVersion": "",
    "priceSource": "https://www.volvocars.com/br/cars/ex30-electric/",
    "priceKind": "oficial",
    "priceNote": "outras versões a partir de R$ 319.950 e R$ 324.950",
    "photo": {
      "src": "assets/carros/volvo-ex30.jpg",
      "card": "assets/carros/volvo-ex30-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Volvo_EX30_1X7A2476.jpg"
    },
    "specs": {
      "version": "Single Motor",
      "cv": 272,
      "kwh": 51,
      "s0100": 5.7,
      "dcKw": 150,
      "acKw": 11,
      "trunkL": 318,
      "note": "Twin Motor Performance: 428 cv, bateria de 69 kWh, 0-100 em 3,6 s",
      "source": "https://www.volvocars.com/br/cars/ex30-electric/specifications/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "volvo-ex40",
    "brand": "Volvo",
    "model": "EX40",
    "bodyType": "SUV",
    "color": "#3b82f6",
    "category": "Utilitário Esportivo Grande",
    "versions": [
      {
        "name": "6 CORE",
        "rangeKm": 364,
        "kwh100": 15.3
      },
      {
        "name": "6 PLUS",
        "rangeKm": 364,
        "kwh100": 15.3
      },
      {
        "name": "6 ULTRA",
        "rangeKm": 364,
        "kwh100": 15.3
      },
      {
        "name": "8 CORE",
        "rangeKm": 393,
        "kwh100": 16.4
      },
      {
        "name": "8 PLUS",
        "rangeKm": 393,
        "kwh100": 16.4
      },
      {
        "name": "8 ULTRA",
        "rangeKm": 393,
        "kwh100": 16.4
      },
      {
        "name": "PERF BLACK",
        "rangeKm": 393,
        "kwh100": 16.4
      },
      {
        "name": "PERF ULTRA",
        "rangeKm": 393,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 364,
    "rangeMax": 393,
    "kwh100": 15.3,
    "price": 345950,
    "priceVersion": "",
    "priceSource": "https://www.volvocars.com/br/cars/ex40-electric/",
    "priceKind": "oficial",
    "priceNote": "versão superior a partir de R$ 400.950",
    "photo": {
      "src": "assets/carros/volvo-ex40.jpg",
      "card": "assets/carros/volvo-ex40-960.jpg",
      "author": "Chanokchon",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:2024_Volvo_EX40_Ultra_Twin_Motor_Black_Edition.jpg"
    },
    "specs": {
      "version": "Single Motor",
      "cv": 238,
      "kwh": 69,
      "s0100": 7.3,
      "dcKw": 175,
      "acKw": 11,
      "trunkL": 410,
      "note": "Mais 31 L no porta-malas dianteiro. Twin Motor Performance: 442 cv, 82 kWh, 0-100 em 4,6 s",
      "source": "https://www.volvocars.com/br/cars/ex40-electric/specifications/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "volvo-ex90",
    "brand": "Volvo",
    "model": "EX90",
    "bodyType": "SUV",
    "color": "#22d3ee",
    "category": "Utilitário Esportivo Grande 4x4",
    "versions": [
      {
        "name": "ULTRA TWIN",
        "rangeKm": 459,
        "kwh100": 18.9
      },
      {
        "name": "PLUS TWIN",
        "rangeKm": 459,
        "kwh100": 18.9
      },
      {
        "name": "ULT TWIN PER",
        "rangeKm": 459,
        "kwh100": 18.9
      }
    ],
    "rangeMin": 459,
    "rangeMax": 459,
    "kwh100": 18.9,
    "price": 849950,
    "priceVersion": "",
    "priceSource": "https://www.volvocars.com/br/cars/ex90-electric/",
    "priceKind": "oficial",
    "priceNote": "",
    "photo": {
      "src": "assets/carros/volvo-ex90.jpg",
      "card": "assets/carros/volvo-ex90-960.jpg",
      "author": "Alexander-93",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Volvo_EX90_Auto_Zuerich_2024_DSC_6147.jpg"
    },
    "specs": {
      "version": "Twin Motor",
      "cv": 517,
      "kwh": 111,
      "s0100": 4.9,
      "dcKw": 250,
      "acKw": 11,
      "trunkL": 324,
      "note": "Porta-malas com os 7 lugares em uso; 697 L com a 3ª fileira rebatida. Mais 46 L na frente",
      "source": "https://www.volvocars.com/br/cars/ex90-electric/specifications/",
      "sourceExtra": "",
      "kind": "oficial"
    }
  },
  {
    "id": "zeekr-001",
    "brand": "Zeekr",
    "model": "001",
    "bodyType": "Perua",
    "color": "#6366f1",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Flagship",
        "rangeKm": 426,
        "kwh100": 17.5
      },
      {
        "name": "Premium",
        "rangeKm": 426,
        "kwh100": 17.5
      }
    ],
    "rangeMin": 426,
    "rangeMax": 426,
    "kwh100": 17.5,
    "price": 495000,
    "priceVersion": "Premium",
    "priceSource": "https://atarde.com.br/autos/zeekr-7x-no-brasil-precos-versoes-e-ficha-tecnica-1395860",
    "priceKind": "imprensa",
    "priceNote": "a imprensa cita a faixa de R$ 495 mil a R$ 542 mil",
    "photo": {
      "src": "assets/carros/zeekr-001.jpg",
      "card": "assets/carros/zeekr-001-960.jpg",
      "author": "Matti Blume",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mobileye_Zeekr_001,_IAA_Summit_2023,_Munich_(P1120233-RR).jpg"
    },
    "specs": {
      "version": "Premium",
      "cv": null,
      "kwh": 100,
      "s0100": null,
      "dcKw": null,
      "acKw": null,
      "trunkL": null,
      "note": "",
      "source": "https://www.car.blog.br/2025/02/zeekr-001-esportivo-eletrico-precos.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "zeekr-7x",
    "brand": "Zeekr",
    "model": "7X",
    "bodyType": "SUV",
    "color": "#0ea5e9",
    "category": "Extra Grande",
    "versions": [
      {
        "name": "Flagship AWD",
        "rangeKm": 423,
        "kwh100": 17.8
      },
      {
        "name": "Premium RWD",
        "rangeKm": 491,
        "kwh100": 15.3
      }
    ],
    "rangeMin": 423,
    "rangeMax": 491,
    "kwh100": 15.3,
    "price": 378000,
    "priceVersion": "Premium RWD",
    "priceSource": "https://atarde.com.br/autos/zeekr-7x-no-brasil-precos-versoes-e-ficha-tecnica-1395860",
    "priceKind": "imprensa",
    "priceNote": "a Zeekr não mostra o preço no site; versão Flagship AWD R$ 468.000",
    "photo": {
      "src": "assets/carros/zeekr-7x.jpg",
      "card": "assets/carros/zeekr-7x-960.jpg",
      "author": "JustAnotherCarDesigner",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Zeekr_7X_003.jpg"
    },
    "specs": {
      "version": "Premium RWD",
      "cv": 421,
      "kwh": 100,
      "s0100": 6,
      "dcKw": null,
      "acKw": null,
      "trunkL": 616,
      "note": "Mais 42 L no porta-malas dianteiro",
      "source": "https://atarde.com.br/autos/zeekr-7x-no-brasil-precos-versoes-e-ficha-tecnica-1395860",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  },
  {
    "id": "zeekr-x",
    "brand": "Zeekr",
    "model": "X",
    "bodyType": "SUV",
    "color": "#8b5cf6",
    "category": "Utilitário Esportivo Grande",
    "versions": [
      {
        "name": "Premium",
        "rangeKm": 332,
        "kwh100": 15.3
      },
      {
        "name": "Flagship",
        "rangeKm": 304,
        "kwh100": 16.4
      }
    ],
    "rangeMin": 304,
    "rangeMax": 332,
    "kwh100": 15.3,
    "price": 300000,
    "priceVersion": "Premium",
    "priceSource": "https://atarde.com.br/autos/zeekr-7x-no-brasil-precos-versoes-e-ficha-tecnica-1395860",
    "priceKind": "imprensa",
    "priceNote": "a imprensa cita a faixa de R$ 300 mil a R$ 340 mil",
    "photo": {
      "src": "assets/carros/zeekr-x.jpg",
      "card": "assets/carros/zeekr-x-960.jpg",
      "author": "Matti Blume",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Zeekr_X,_Almaty_(LRM_20240331_124050).jpg"
    },
    "specs": {
      "version": "Premium RWD",
      "cv": 272,
      "kwh": 51,
      "s0100": null,
      "dcKw": null,
      "acKw": null,
      "trunkL": 362,
      "note": "",
      "source": "https://www.car.blog.br/2025/02/novo-zerkr-x-preco-parte-de-r-298-mil.html",
      "sourceExtra": "",
      "kind": "imprensa"
    }
  }
];

const IPVA = {
  "AC": {
    "nome": "Acre",
    "gasolina": 2,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "AL": {
    "nome": "Alagoas",
    "gasolina": 3.25,
    "eletrico": 1,
    "nota": "Isenção no primeiro ano; depois, 1%",
    "anos_isento": 1
  },
  "AP": {
    "nome": "Amapá",
    "gasolina": 3,
    "eletrico": 3,
    "nota": "A lista de 2026 não cita o estado; usamos a alíquota normal. Confirme na Sefaz"
  },
  "AM": {
    "nome": "Amazonas",
    "gasolina": 1.5,
    "eletrico": 0.75,
    "nota": "Desconto de 50% nos cinco primeiros anos"
  },
  "BA": {
    "nome": "Bahia",
    "gasolina": 2.5,
    "eletrico": 2.5,
    "nota": "A lista de 2026 não cita o estado; usamos a alíquota normal. Confirme na Sefaz"
  },
  "CE": {
    "nome": "Ceará",
    "gasolina": 3.5,
    "eletrico": 3.5,
    "nota": "A lista de 2026 não cita o estado; usamos a alíquota normal. Confirme na Sefaz"
  },
  "DF": {
    "nome": "Distrito Federal",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos comprados em concessionária do DF"
  },
  "ES": {
    "nome": "Espírito Santo",
    "gasolina": 2,
    "eletrico": 2,
    "nota": "Sem benefício para elétricos"
  },
  "GO": {
    "nome": "Goiás",
    "gasolina": 3.75,
    "eletrico": 3.75,
    "nota": "Sem benefício para elétricos"
  },
  "MA": {
    "nome": "Maranhão",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos puros"
  },
  "MT": {
    "nome": "Mato Grosso",
    "gasolina": 4,
    "eletrico": 4,
    "nota": "A lista de 2026 não cita o estado; usamos a alíquota normal. Confirme na Sefaz"
  },
  "MS": {
    "nome": "Mato Grosso do Sul",
    "gasolina": 3.5,
    "eletrico": 1.05,
    "nota": "Alíquota de 3,5% com redução de 70% na base de cálculo"
  },
  "MG": {
    "nome": "Minas Gerais",
    "gasolina": 4,
    "eletrico": 4,
    "nota": "Sem benefício para elétricos (a isenção de MG é só para híbridos flex feitos no estado)"
  },
  "PA": {
    "nome": "Pará",
    "gasolina": 2.5,
    "eletrico": 0,
    "nota": "Isenção para elétricos de até R$ 150 mil",
    "teto_valor": 150000
  },
  "PB": {
    "nome": "Paraíba",
    "gasolina": 2.5,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "PR": {
    "nome": "Paraná",
    "gasolina": 1.9,
    "eletrico": 0,
    "nota": "Alíquota zero para elétricos"
  },
  "PE": {
    "nome": "Pernambuco",
    "gasolina": 2.4,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "PI": {
    "nome": "Piauí",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "RJ": {
    "nome": "Rio de Janeiro",
    "gasolina": 4,
    "eletrico": 0.5,
    "nota": "Alíquota de 0,5% para elétricos"
  },
  "RN": {
    "nome": "Rio Grande do Norte",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos, válida até 2029"
  },
  "RS": {
    "nome": "Rio Grande do Sul",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "RO": {
    "nome": "Rondônia",
    "gasolina": 3,
    "eletrico": 3,
    "nota": "A lista de 2026 não cita o estado; usamos a alíquota normal. Confirme na Sefaz"
  },
  "RR": {
    "nome": "Roraima",
    "gasolina": 3,
    "eletrico": 3,
    "nota": "A lei de isenção foi invalidada; paga a alíquota normal"
  },
  "SC": {
    "nome": "Santa Catarina",
    "gasolina": 2,
    "eletrico": 2,
    "nota": "Sem benefício para elétricos"
  },
  "SP": {
    "nome": "São Paulo",
    "gasolina": 4,
    "eletrico": 4,
    "nota": "Paga a alíquota normal; carros de até R$ 150 mil podem pedir restituição parcial (até R$ 10,8 mil)"
  },
  "SE": {
    "nome": "Sergipe",
    "gasolina": 3,
    "eletrico": 0,
    "nota": "Isenção para elétricos"
  },
  "TO": {
    "nome": "Tocantins",
    "gasolina": 3.5,
    "eletrico": 3.5,
    "nota": "A isenção de Tocantins vale só até o fim de 2026; a partir de 2027, usamos a alíquota normal"
  }
};
