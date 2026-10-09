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
  },
  "seguranca": {
    "coleta": "09/10/2026"
  },
  "fipe": {
    "referencia": "outubro/2026",
    "fonte": "https://veiculos.fipe.org.br/"
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
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "A6 Avant E-Tron S-Line",
      "zero": 699993,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 641893,
          "loss": 8.3
        }
      ]
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
    "priceNote": "",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/audi/a6+e-tron/1105/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "A6 Sport. e-tron Perf. Black (Elétrico)",
      "zero": 650990,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 578952,
          "loss": 11.1
        },
        {
          "year": 2025,
          "value": 516520,
          "loss": 20.7
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/audi/q6+e-tron/1056/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Q6 E-Tron Quattro S-Line",
      "zero": 702661,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 603222,
          "loss": 14.2
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-04",
        "price": 695990,
        "source": "https://www.car.blog.br/2026/04/audi-q6-etron-2026-preco-brasil.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Q6 E-Tron Quattro Sportback Performance Black",
      "zero": 603114,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 512995,
          "loss": 14.9
        }
      ]
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
    "priceNote": "",
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
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "RS E-TRON GT Quattro Aut. (Elétrico)",
      "zero": 940439,
      "refYear": 2024,
      "used": [
        {
          "year": 2023,
          "value": 561049,
          "loss": 40.3
        },
        {
          "year": 2022,
          "value": 432775,
          "loss": 54
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-06",
        "price": 1334990,
        "source": "https://www.car.blog.br/2026/06/audi-rs-e-tron-gt-performance-preco.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "4 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.audi.com.br/pt/garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "SQ6 Sportback E-Tron Quattro (Elétrico)",
      "zero": 810710,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 685247,
          "loss": 15.5
        },
        {
          "year": 2025,
          "value": 602401,
          "loss": 25.7
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-04",
        "price": 790990,
        "source": "https://www.car.blog.br/2026/04/audi-sq6-etron-2026-preco-brasil.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "fipe": {
      "version": "i7 XDrive 60 M Sport Aut. (Elétrico)",
      "zero": 1372402,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 1148550,
          "loss": 16.3
        },
        {
          "year": 2025,
          "value": 914703,
          "loss": 33.4
        },
        {
          "year": 2024,
          "value": 851851,
          "loss": 37.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2023-08",
        "price": 1282950,
        "source": "https://www.car.blog.br/2023/08/bmw-i7-eletrico-chega-ao-brasil-com.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 1373950,
        "source": "https://www.bmw.com.br/pt/all-models/bmw-i/i7/bmw-i7.html",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/bmw/x1/0997/",
      "testedAs": "BMW X1",
      "note": "Nota do X1, que vale para a versão elétrica iX1"
    },
    "fipe": {
      "version": "iX 1 xDrive 30 M Sport (Elétrico)",
      "zero": 468376,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 353695,
          "loss": 24.5
        },
        {
          "year": 2025,
          "value": 321881,
          "loss": 31.3
        },
        {
          "year": 2024,
          "value": 270885,
          "loss": 42.2
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 485950,
        "source": "https://www.bmw.com.br/pt/all-models/bmw-i/ix1/bmw-ix1.html",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/bmw/x2/1065/",
      "testedAs": "BMW X2",
      "note": "Nota do X2, que vale para a versão elétrica iX2"
    },
    "fipe": {
      "version": "iX 2 xDrive 30 M Sport (Elétrico)",
      "zero": 497164,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 411045,
          "loss": 17.3
        },
        {
          "year": 2025,
          "value": 344379,
          "loss": 30.7
        },
        {
          "year": 2024,
          "value": 332056,
          "loss": 33.2
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 495950,
        "source": "https://www.bmw.com.br/pt/all-models/bmw-i/ix2/bmw-ix2-overview.html",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2026,
      "source": "https://www.euroncap.com/assessments/bmw/ix3/1232/",
      "testedAs": "",
      "note": ""
    },
    "fipe": {
      "version": "iX 3 XDrive 50 M Sport",
      "zero": 582953,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 489589,
          "loss": 16
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-09",
        "price": 582950,
        "source": "https://www.car.blog.br/2026/09/bmw-ix3-50-xdrive-eletrico-brasil-preco.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 582950,
        "source": "https://www.bmw.com.br/pt/all-models/serie-x/ix3/bmw-ix3.html",
        "kind": "coleta"
      }
    ]
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
    "priceSource": "https://www.byd.com/br/condicoes",
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
    },
    "safety": {
      "program": "Latin NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.latinncap.com/po/area-imprensa/noticia/867617e084abbd/byd-dolphin-plus-primeiro-fabricante-chines-e-primeiro-carro-eletrico-a-obter-cinco-estrelas-no-latin-ncap",
      "testedAs": "BYD Dolphin Plus",
      "note": "Também tem 5 estrelas no Euro NCAP (2023)"
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Dolphin EV GS (Elétrico)",
      "zero": 147055,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 133010,
          "loss": 9.6
        },
        {
          "year": 2026,
          "value": 129551,
          "loss": 11.9
        },
        {
          "year": 2025,
          "value": 121374,
          "loss": 17.5
        },
        {
          "year": 2024,
          "value": 117564,
          "loss": 20.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 149990,
        "source": "https://www.byd.com/br/condicoes",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/byd/dolphin+surf/1209/",
      "testedAs": "BYD Dolphin Surf",
      "note": "Vendido na Europa como Dolphin Surf"
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Dolphin Mini GL",
      "zero": 119679,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 112634,
          "loss": 5.9
        },
        {
          "year": 2026,
          "value": 106009,
          "loss": 11.4
        },
        {
          "year": 2025,
          "value": 103220,
          "loss": 13.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 118990,
        "source": "https://www.byd.com/br/ofertas",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "ano-modelo 2025; último preço publicado pela BYD, em 05/10/2026: o site da marca não mostra mais o preço deste modelo",
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
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Han EV  (Elétrico)",
      "zero": 551838,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 365914,
          "loss": 33.7
        },
        {
          "year": 2024,
          "value": 285451,
          "loss": 48.3
        },
        {
          "year": 2023,
          "value": 276448,
          "loss": 49.9
        },
        {
          "year": 2022,
          "value": 254616,
          "loss": 53.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 559800,
        "source": "https://www.byd.com/br/ofertas",
        "kind": "coleta"
      }
    ]
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
    "priceSource": "https://www.byd.com/br/condicoes",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2023,
      "source": "https://www.euroncap.com/assessments/byd/seal/1044/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Seal (Elétrico)",
      "zero": 299673,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 271532,
          "loss": 9.4
        },
        {
          "year": 2025,
          "value": 221377,
          "loss": 26.1
        },
        {
          "year": 2024,
          "value": 204101,
          "loss": 31.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 299990,
        "source": "https://www.byd.com/br/condicoes",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "último preço publicado pela BYD, em 05/10/2026: o site da marca não mostra mais o preço deste modelo",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/byd/sealion+7/1117/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Sealion 7 AWD (Elétrico)",
      "zero": 339063,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 318713,
          "loss": 6
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 339990,
        "source": "https://www.byd.com/br/ofertas",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "ano-modelo 2025; último preço publicado pela BYD, em 05/10/2026: o site da marca não mostra mais o preço deste modelo",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2023,
      "source": "https://www.euroncap.com/assessments/byd/tang/1049/",
      "testedAs": "BYD Tang",
      "note": "Vendido na Europa como Tang"
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "TAN EV AWD (Elétrico)",
      "zero": 429964,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 342490,
          "loss": 20.3
        },
        {
          "year": 2024,
          "value": 295554,
          "loss": 31.3
        },
        {
          "year": 2023,
          "value": 247964,
          "loss": 42.3
        },
        {
          "year": 2022,
          "value": 236214,
          "loss": 45.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 426800,
        "source": "https://www.byd.com/br/ofertas",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "último preço publicado pela BYD, em 05/10/2026: o site da marca não mostra mais o preço deste modelo",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/byd/atto+3/0992/",
      "testedAs": "BYD Atto 3",
      "note": "Vendido na Europa como Atto 3"
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Yuan Plus AWD",
      "zero": 269214,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 239699,
          "loss": 11
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 269990,
        "source": "https://www.byd.com/br/ofertas",
        "kind": "coleta"
      }
    ]
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
    "priceSource": "https://www.byd.com/br/condicoes",
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
    },
    "warranty": {
      "vehicle": "6 anos ou 200 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.cnnbrasil.com.br/auto/byd-altera-politica-de-garantia-para-modelos-2026-27-veja-o-que-mudou/",
      "kind": "imprensa",
      "note": "Regra da linha 2026/2027, uso particular. Modelos anteriores mantêm as condições da compra"
    },
    "fipe": {
      "version": "Yuan Pro (Elétrico)",
      "zero": 182990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 169094,
          "loss": 7.6
        },
        {
          "year": 2026,
          "value": 162916,
          "loss": 11
        },
        {
          "year": 2025,
          "value": 152985,
          "loss": 16.4
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 182990,
        "source": "https://www.byd.com/br/condicoes",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "",
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
    },
    "fipe": {
      "version": "AVATR11",
      "zero": 621995,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 559589,
          "loss": 10
        },
        {
          "year": 2026,
          "value": 534349,
          "loss": 14.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-03",
        "price": 599990,
        "source": "https://www.car.blog.br/2026/03/caoa-changan-avatr-11-2026-preco-parte.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.chevrolet.com.br/eletrico/spark-euv",
      "kind": "oficial",
      "note": "Spark EUV: 3 anos ou 100 mil km para o veículo"
    },
    "fipe": {
      "version": "BLAZER EV RS 347cv (Elétrico)",
      "zero": 503190,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 420597,
          "loss": 16.4
        },
        {
          "year": 2024,
          "value": 328235,
          "loss": 34.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-05",
        "price": 503190,
        "source": "https://www.car.blog.br/2025/05/chevrolet-blazer-rs-2025-eletrico-preco.html",
        "kind": "publicado"
      },
      {
        "month": "2026-10",
        "price": 503190,
        "source": "https://www.chevrolet.com.br/eletrico/blazer-ev",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.chevrolet.com.br/eletrico/spark-euv",
      "kind": "oficial",
      "note": "Spark EUV: 3 anos ou 100 mil km para o veículo"
    },
    "fipe": {
      "version": "CAPTIVA EV Premier",
      "zero": 209017,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 185147,
          "loss": 11.4
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-02",
        "price": 199990,
        "source": "https://www.car.blog.br/2026/02/chevrolet-captiva-ev-2026-chega-ao.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 199990,
        "source": "https://www.chevrolet.com.br/eletrico/captiva-ev",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.chevrolet.com.br/eletrico/spark-euv",
      "kind": "oficial",
      "note": "Spark EUV: 3 anos ou 100 mil km para o veículo"
    },
    "fipe": {
      "version": "SPARK EUV ACTIV",
      "zero": 151927,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 137349,
          "loss": 9.6
        },
        {
          "year": 2025,
          "value": 128913,
          "loss": 15.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 146990,
        "source": "https://www.chevrolet.com.br/eletrico/spark-euv",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 4,
      "year": 2021,
      "source": "https://www.euroncap.com/assessments/fiat/500e/0911/",
      "testedAs": "",
      "note": ""
    },
    "fipe": {
      "version": "500e ICON (Elétrico)",
      "zero": 214990,
      "refYear": null,
      "used": [
        {
          "year": 2022,
          "value": 129811,
          "loss": 39.6
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2021-08",
        "price": 239990,
        "source": "https://www.car.blog.br/2021/08/fiat-500e-2022-eletrico-chega-ao-brasil.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 214990,
        "source": "https://500e.fiat.com.br/monte.html",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "5 anos ou 150 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://br-www-resouce-cdn.gacgroup.com/BR/Texto_legal-dezembro_2025.pdf",
      "kind": "oficial",
      "note": "Uso particular; algumas campanhas ampliam a garantia do veículo"
    },
    "fipe": {
      "version": "AION ES Plus (Elétrico)",
      "zero": 168790,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 152674,
          "loss": 9.5
        },
        {
          "year": 2025,
          "value": 137195,
          "loss": 18.7
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 170990,
        "source": "https://www.gacgroup.com/pt-br/sedan/aion-es",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2026,
      "source": "https://www.euroncap.com/assessments/aion/ut/1236/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos ou 150 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://br-www-resouce-cdn.gacgroup.com/BR/Texto_legal-dezembro_2025.pdf",
      "kind": "oficial",
      "note": "Uso particular; algumas campanhas ampliam a garantia do veículo"
    },
    "fipe": {
      "version": "AION UT Premium (Elétrico)",
      "zero": 139990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 126761,
          "loss": 9.4
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-06",
        "price": 139990,
        "source": "https://primoauto.com.br/gac-aion-ut-chega-ao-brasil-a-partir-de-139-990",
        "kind": "lançamento"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/aion/v/1169/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos ou 150 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://br-www-resouce-cdn.gacgroup.com/BR/Texto_legal-dezembro_2025.pdf",
      "kind": "oficial",
      "note": "Uso particular; algumas campanhas ampliam a garantia do veículo"
    },
    "fipe": {
      "version": "AION V Elite (Elétrico)",
      "zero": 219990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 201755,
          "loss": 8.3
        },
        {
          "year": 2026,
          "value": 192581,
          "loss": 12.5
        },
        {
          "year": 2025,
          "value": 182676,
          "loss": 17
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 219990,
        "source": "https://www.gacgroup.com/pt-br/suv/aion-v",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "5 anos ou 150 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://br-www-resouce-cdn.gacgroup.com/BR/Texto_legal-dezembro_2025.pdf",
      "kind": "oficial",
      "note": "Uso particular; algumas campanhas ampliam a garantia do veículo"
    },
    "fipe": {
      "version": "AION Y Premium (Elétrico)",
      "zero": 175990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 164556,
          "loss": 6.5
        },
        {
          "year": 2026,
          "value": 158962,
          "loss": 9.7
        },
        {
          "year": 2025,
          "value": 148684,
          "loss": 15.5
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 175990,
        "source": "https://www.gacgroup.com/pt-br/suv/aion-y",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "5 anos ou 150 mil km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://br-www-resouce-cdn.gacgroup.com/BR/Texto_legal-dezembro_2025.pdf",
      "kind": "oficial",
      "note": "Uso particular; algumas campanhas ampliam a garantia do veículo"
    },
    "fipe": {
      "version": "HYPTEC HT Elite (Elétrico)",
      "zero": 314990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 270631,
          "loss": 14.1
        },
        {
          "year": 2026,
          "value": 256578,
          "loss": 18.5
        },
        {
          "year": 2025,
          "value": 233811,
          "loss": 25.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 314990,
        "source": "https://www.gacgroup.com/pt-br/suv/hyptec-ht",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2026,
      "source": "https://www.euroncap.com/assessments/geely/e2/1246/",
      "testedAs": "Geely E2",
      "note": "Vendido na Europa como Geely E2"
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 150 mil km",
      "source": "https://www.geelybrasil.com.br/geely-ex2-chega-ao-brasil",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "EX2 PRO",
      "zero": 125671,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 115414,
          "loss": 8.2
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-11",
        "price": 119990,
        "source": "https://www.geelybrasil.com.br/geely-ex2-chega-ao-brasil",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 124600,
        "source": "https://www.geelybrasil.com.br/ofertas",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/geely/ex5/1136/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 150 mil km",
      "source": "https://www.geelybrasil.com.br/geely-ex2-chega-ao-brasil",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "EX5 PRO (Elétrico)",
      "zero": 192410,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 163500,
          "loss": 15
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 207800,
        "source": "https://www.geelybrasil.com.br/ofertas",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/gwm/ora+03/1002/",
      "testedAs": "ORA Funky Cat",
      "note": "Vendido na Europa como Ora Funky Cat"
    },
    "warranty": {
      "vehicle": "5 anos, sem limite de km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.gwmmotors.com.br/pt/media-center/news/2026/gwm-ora-03-conquista-premio-melhor-revenda-entre-eletricos-ate-rdollar-300-mil-da-quatro-rodas",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Ora 03",
      "zero": 168670,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 149074,
          "loss": 11.6
        },
        {
          "year": 2026,
          "value": 142623,
          "loss": 15.4
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-04",
        "price": 169000,
        "source": "https://www.car.blog.br/2025/04/gwm-ora-03-2026-precos-partem-de-r-169.html",
        "kind": "publicado"
      },
      {
        "month": "2026-10",
        "price": 169000,
        "source": "https://www.gwmmotors.com.br/pt/modelos/ora-03-bev58",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "5 anos, sem limite de km",
      "battery": "8 anos ou 200 mil km",
      "source": "https://www.gwmmotors.com.br/pt/media-center/news/2026/gwm-ora-03-conquista-premio-melhor-revenda-entre-eletricos-ate-rdollar-300-mil-da-quatro-rodas",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Ora 05",
      "zero": 163900,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 142088,
          "loss": 13.3
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-06",
        "price": 159000,
        "source": "https://www.car.blog.br/2026/06/gwm-ora-5-suv-eletrico-preco-fotos.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 163990,
        "source": "https://www.gwmmotors.com.br/pt/modelos/ora5",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2021,
      "source": "https://www.euroncap.com/assessments/hyundai/ioniq+5/0893/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.hyundai.com.br/universo-hyundai/dicas/bateria-carro-eletrico.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "IONIQ 5 SIGNATURE (Elétrico)",
      "zero": 400120,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 293046,
          "loss": 26.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2024-09",
        "price": 394900,
        "source": "https://www.car.blog.br/2024/09/hyundai-ioniq-5-preco-r-394900-fotos.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "warranty": {
      "vehicle": null,
      "battery": "5 anos ou 100 mil km",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-JS1-MANUAL-1.pdf",
      "kind": "oficial",
      "note": "Cobre a bateria se a saúde (SOH) cair abaixo de 75% no prazo"
    },
    "fipe": {
      "version": "E-J7 193cv 5p Aut. (Elétrico)",
      "zero": 250803,
      "refYear": null,
      "used": [
        {
          "year": 2023,
          "value": 136918,
          "loss": 45.4
        },
        {
          "year": 2022,
          "value": 133358,
          "loss": 46.8
        }
      ]
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
    },
    "safety": {
      "program": "Latin NCAP",
      "stars": 0,
      "year": 2022,
      "source": "https://www.latinncap.com/po/resultado/173/jac-e-js1--e10x--e-s1--s1-+-2-airbags",
      "testedAs": "",
      "note": "Estrutura instável no impacto frontal; sem controle de estabilidade nem frenagem automática na versão testada"
    },
    "warranty": {
      "vehicle": null,
      "battery": "5 anos ou 100 mil km",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-JS1-MANUAL-1.pdf",
      "kind": "oficial",
      "note": "Cobre a bateria se a saúde (SOH) cair abaixo de 75% no prazo"
    },
    "fipe": {
      "version": "e-JS1 62cv 5p Aut. (Elétrico)",
      "zero": 119900,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 104715,
          "loss": 12.7
        },
        {
          "year": 2026,
          "value": 95350,
          "loss": 20.5
        },
        {
          "year": 2025,
          "value": 82468,
          "loss": 31.2
        },
        {
          "year": 2024,
          "value": 79734,
          "loss": 33.5
        },
        {
          "year": 2023,
          "value": 72674,
          "loss": 39.4
        },
        {
          "year": 2022,
          "value": 69595,
          "loss": 42
        }
      ]
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
    "priceNote": "",
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
    },
    "warranty": {
      "vehicle": null,
      "battery": "5 anos ou 100 mil km",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-JS1-MANUAL-1.pdf",
      "kind": "oficial",
      "note": "Cobre a bateria se a saúde (SOH) cair abaixo de 75% no prazo"
    },
    "fipe": {
      "version": "e-JS4 150CV 5p Aut. (Elétrico)",
      "zero": 245977,
      "refYear": null,
      "used": [
        {
          "year": 2023,
          "value": 110908,
          "loss": 54.9
        },
        {
          "year": 2022,
          "value": 108024,
          "loss": 56.1
        }
      ]
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
    "priceNote": "",
    "warranty": {
      "vehicle": null,
      "battery": "5 anos ou 100 mil km",
      "source": "https://www.jacmotors.com.br/wp-content/uploads/2025/12/E-JS1-MANUAL-1.pdf",
      "kind": "oficial",
      "note": "Cobre a bateria se a saúde (SOH) cair abaixo de 75% no prazo"
    },
    "fipe": {
      "version": "iEV 330P CD 150cv Aut. (Elétrico)",
      "zero": 346015,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 312022,
          "loss": 9.8
        },
        {
          "year": 2024,
          "value": 281443,
          "loss": 18.7
        },
        {
          "year": 2023,
          "value": 262443,
          "loss": 24.2
        },
        {
          "year": 2022,
          "value": 242196,
          "loss": 30
        },
        {
          "year": 2021,
          "value": 236288,
          "loss": 31.7
        },
        {
          "year": 2020,
          "value": 212402,
          "loss": 38.6
        }
      ]
    }
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/kia/ev5/1158/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.kia.com.br/garantia",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "EV5 Land (Elétrico)",
      "zero": 382047,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 285892,
          "loss": 25.2
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/leapmotor/b10/1217/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos ou 150 mil km",
      "battery": "8 anos",
      "source": "https://www.car.blog.br/2026/09/leapmotor-b10-c10-2027-garantia-seis-anos-brasil.html",
      "kind": "imprensa",
      "note": "Ano-modelo 2027, com revisões na rede autorizada"
    },
    "fipe": {
      "version": "B10 (Elétrico)",
      "zero": 181285,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 166847,
          "loss": 8
        },
        {
          "year": 2026,
          "value": 161189,
          "loss": 11.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-04",
        "price": 182990,
        "source": "https://www.car.blog.br/2026/04/leapmotor-b10-2026-suv-eletrico-de-r.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 182990,
        "source": "https://www.leapmotor.com.br/b10/monte.html",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/leapmotor/c10/1070/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos ou 150 mil km",
      "battery": "8 anos",
      "source": "https://www.car.blog.br/2026/09/leapmotor-b10-c10-2027-garantia-seis-anos-brasil.html",
      "kind": "imprensa",
      "note": "Ano-modelo 2027, com revisões na rede autorizada"
    },
    "fipe": {
      "version": "C10 (Elétrico)",
      "zero": 205620,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 185621,
          "loss": 9.7
        },
        {
          "year": 2026,
          "value": 177749,
          "loss": 13.6
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-11",
        "price": 189990,
        "source": "https://www.car.blog.br/2025/11/leapmotor-c10-chega-em-versoes-eletrica.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 214990,
        "source": "https://www.leapmotor.com.br/",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2023,
      "source": "https://www.euroncap.com/assessments/lexus/rz/1043/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos (até 10 anos com o programa LexusCare)",
      "battery": null,
      "source": "https://www.lexus.com.br/pt/servicing-and-support/warranty-coverage.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "RZ-500e",
      "zero": 500833,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 421830,
          "loss": 15.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-12",
        "price": 499990,
        "source": "https://www.car.blog.br/2025/12/novo-lexus-rz-500e-estreia-no-brasil.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2019,
      "source": "https://www.euroncap.com/assessments/mercedes-benz/eqb/0794pm/",
      "testedAs": "",
      "note": "Nota do GLB (2019), estendida ao EQB; protocolo mais antigo"
    },
    "warranty": {
      "vehicle": "3 anos",
      "battery": null,
      "source": "https://imprensa.mercedes-benz.com.br/releases/mercedes-benz-eqb-250-chega-com-mais-autonomia-e-eficiencia-no-mercado-brasileiro",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "EQB 250+",
      "zero": 354634,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 328275,
          "loss": 7.4
        },
        {
          "year": 2025,
          "value": 318402,
          "loss": 10.2
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-07",
        "price": 399990,
        "source": "https://www.car.blog.br/2025/07/mercedes-benz-eqb-250-2026-preco-r.html",
        "kind": "lançamento"
      }
    ]
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
    "priceNote": "",
    "photo": {
      "src": "assets/carros/mercedes-glb-ev.jpg",
      "card": "assets/carros/mercedes-glb-ev-960.jpg",
      "author": "© M 93",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.pt-br",
      "page": "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_GLB_250%2B_mit_EQ-Technologie_AMG_Line_(X_244)_%E2%80%93_f1_18042026.jpg"
    },
    "warranty": {
      "vehicle": "3 anos",
      "battery": null,
      "source": "https://imprensa.mercedes-benz.com.br/releases/mercedes-benz-eqb-250-chega-com-mais-autonomia-e-eficiencia-no-mercado-brasileiro",
      "kind": "oficial",
      "note": ""
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
    },
    "warranty": {
      "vehicle": "7 anos ou 150 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://mgmotoroficial.com.br/pdfs/mgs5-ficha.pdf",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Cyberster AWD",
      "zero": 529800,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 497629,
          "loss": 6.1
        },
        {
          "year": 2026,
          "value": 475918,
          "loss": 10.2
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/mg/4+electric/1001/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "7 anos ou 150 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://mgmotoroficial.com.br/pdfs/mgs5-ficha.pdf",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "4 Comfort",
      "zero": 172958,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 164120,
          "loss": 5.1
        },
        {
          "year": 2026,
          "value": 159147,
          "loss": 8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 184600,
        "source": "https://mgmotoroficial.com.br/oferta/mg4",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/mg/mg4+ev+urban/1156/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "7 anos ou 150 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://mgmotoroficial.com.br/pdfs/mgs5-ficha.pdf",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "4 Urban Comfort 43",
      "zero": 134572,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 117619,
          "loss": 12.6
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-07",
        "price": 129990,
        "source": "https://www.car.blog.br/2026/07/mg4-urban-brasil-preco-detalhes.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/mg/mgs5+ev/1109/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "7 anos ou 150 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://mgmotoroficial.com.br/pdfs/mgs5-ficha.pdf",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "S5 Comfort",
      "zero": 206133,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 188126,
          "loss": 8.7
        },
        {
          "year": 2026,
          "value": 173627,
          "loss": 15.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-11",
        "price": 195800,
        "source": "https://www.car.blog.br/2025/11/mgs5-suv-eletrico-chega-por-r-r-195800.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 218800,
        "source": "https://mgmotoroficial.com.br/oferta/mgs5",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/mini/aceman/1127/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "2 anos, sem limite de km",
      "battery": "8 anos ou 100 mil km",
      "source": "https://www.mini.com.br/pt_BR/home/services/mini-service.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Aceman E (Elétrico)",
      "zero": 279530,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 234695,
          "loss": 16
        },
        {
          "year": 2025,
          "value": 198816,
          "loss": 28.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-02",
        "price": 254990,
        "source": "https://www.car.blog.br/2025/02/mini-aceman-2025-eletrico-preco-r.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 275990,
        "source": "https://www.mini.com.br/pt_BR/home/range/all-electric-mini-aceman.html",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/mini/cooper+e/1066/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "2 anos, sem limite de km",
      "battery": "8 anos ou 100 mil km",
      "source": "https://www.mini.com.br/pt_BR/home/services/mini-service.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "COOPER E 3p (Elétrico)",
      "zero": 266682,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 207513,
          "loss": 22.2
        },
        {
          "year": 2025,
          "value": 197588,
          "loss": 25.9
        },
        {
          "year": 2024,
          "value": 181605,
          "loss": 31.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2024-10",
        "price": 209990,
        "source": "https://www.car.blog.br/2024/10/novo-mini-cooper-2025-eletrico-tem-pre.html",
        "kind": "pré-venda"
      },
      {
        "month": "2026-10",
        "price": 264990,
        "source": "https://www.mini.com.br/pt_BR/home/range/mini-cooper-eletrico.html",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/mini/countryman/1069/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "2 anos, sem limite de km",
      "battery": "8 anos ou 100 mil km",
      "source": "https://www.mini.com.br/pt_BR/home/services/mini-service.html",
      "kind": "oficial",
      "note": ""
    },
    "priceHistory": [
      {
        "month": "2024-06",
        "price": 294990,
        "source": "https://www.car.blog.br/2024/06/novo-mini-countryman-se-2025-eletrico.html",
        "kind": "lançamento"
      }
    ]
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
    "priceNote": "",
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
    },
    "warranty": {
      "vehicle": "2 anos, sem limite de km",
      "battery": "8 anos ou 100 mil km",
      "source": "https://www.mini.com.br/pt_BR/home/services/mini-service.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "COOPER John Works E 3p",
      "zero": 346520,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 283144,
          "loss": 18.3
        },
        {
          "year": 2025,
          "value": 262205,
          "loss": 24.3
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-07",
        "price": 330990,
        "source": "https://www.car.blog.br/2025/07/mini-jcw-eletrico-chega-ao-brasil-com.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "fipe": {
      "version": "E5 FWD (Elétrico)",
      "zero": 205366,
      "refYear": null,
      "used": [
        {
          "year": 2026,
          "value": 175733,
          "loss": 14.4
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2025-04",
        "price": 209990,
        "source": "https://www.car.blog.br/2025/04/omoda-e5-eletrico-preco-r-209990-brasil.html",
        "kind": "lançamento"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/porsche/cayenne/1201/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.porsche.com/brazil/pt/accessoriesandservice/porscheservice/vehicleinformation/",
      "kind": "oficial",
      "note": "Garante ao menos 70% da capacidade até o fim do prazo"
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/porsche/macan/1018/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.porsche.com/brazil/pt/accessoriesandservice/porscheservice/vehicleinformation/",
      "kind": "oficial",
      "note": "Garante ao menos 70% da capacidade até o fim do prazo"
    },
    "fipe": {
      "version": "Macan (Elétrico)",
      "zero": 650982,
      "refYear": 2026,
      "used": [
        {
          "year": 2025,
          "value": 565862,
          "loss": 13.1
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2019,
      "source": "https://www.euroncap.com/assessments/porsche/taycan/0800/",
      "testedAs": "",
      "note": "Teste de 2019; protocolo mais antigo"
    },
    "warranty": {
      "vehicle": null,
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.porsche.com/brazil/pt/accessoriesandservice/porscheservice/vehicleinformation/",
      "kind": "oficial",
      "note": "Garante ao menos 70% da capacidade até o fim do prazo"
    },
    "fipe": {
      "version": "Taycan (Elétrico)",
      "zero": 859995,
      "refYear": 2026,
      "used": [
        {
          "year": 2025,
          "value": 806460,
          "loss": 6.2
        },
        {
          "year": 2024,
          "value": 543083,
          "loss": 36.9
        },
        {
          "year": 2023,
          "value": 490168,
          "loss": 43
        },
        {
          "year": 2022,
          "value": 446611,
          "loss": 48.1
        },
        {
          "year": 2021,
          "value": 430249,
          "loss": 50
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/renault/megane+e-tech/0921/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "3 anos",
      "battery": "8 anos ou 120 mil km",
      "source": "https://www.renault.com.br/electric-vehicles/megane-e-tech.html",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "Megane E-Tech (Elétrico)",
      "zero": 268310,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 189644,
          "loss": 29.3
        },
        {
          "year": 2024,
          "value": 161629,
          "loss": 39.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2023-09",
        "price": 279990,
        "source": "https://www.car.blog.br/2023/09/megane-e-tech-100-eletrico-preco-no.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 279990,
        "source": "https://ofertas.renault.com.br/kwid-e-tech%2Bmegane-e-tech",
        "kind": "coleta"
      }
    ]
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
    "priceNote": "",
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 4,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/suzuki/e+vitara/1160/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "5 anos, sem limite de km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.suzukiveiculos.com.br/suzuki-garantia/",
      "kind": "oficial",
      "note": ""
    },
    "fipe": {
      "version": "e-Vitara 4STYLE ALLGRIP",
      "zero": 219990,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 190424,
          "loss": 13.4
        },
        {
          "year": 2026,
          "value": 180712,
          "loss": 17.9
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-07",
        "price": 219990,
        "source": "https://www.car.blog.br/2026/07/suzuki-e-vitara-2027-preco-ficha-tecnica-brasil.html",
        "kind": "publicado"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2022,
      "source": "https://www.euroncap.com/assessments/volvo/c40+recharge/0957/",
      "testedAs": "Volvo C40 Recharge",
      "note": ""
    },
    "warranty": {
      "vehicle": "3 anos ou 100 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.volvocars.com/br/l/proprietario/garantia/",
      "kind": "oficial",
      "note": "A bateria é reparada ou trocada se a capacidade cair abaixo de 70% nesse período"
    },
    "fipe": {
      "version": "EC40 Plus P6 (Elétrico)",
      "zero": 350116,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 301566,
          "loss": 13.9
        },
        {
          "year": 2026,
          "value": 271948,
          "loss": 22.3
        },
        {
          "year": 2025,
          "value": 252195,
          "loss": 28
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 350950,
        "source": "https://www.volvocars.com/br/cars/ec40-electric/",
        "kind": "coleta"
      }
    ]
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
    },
    "warranty": {
      "vehicle": "3 anos ou 100 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.volvocars.com/br/l/proprietario/garantia/",
      "kind": "oficial",
      "note": "A bateria é reparada ou trocada se a capacidade cair abaixo de 70% nesse período"
    },
    "priceHistory": [
      {
        "month": "2026-08",
        "price": 659950,
        "source": "https://www.car.blog.br/2026/08/volvo-es90-2027-preco-fotos-detalhes.html",
        "kind": "lançamento"
      },
      {
        "month": "2026-10",
        "price": 659950,
        "source": "https://www.volvocars.com/br/cars/es90-electric/",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/volvo/ex30/1098/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "3 anos ou 100 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.volvocars.com/br/l/proprietario/garantia/",
      "kind": "oficial",
      "note": "A bateria é reparada ou trocada se a capacidade cair abaixo de 70% nesse período"
    },
    "fipe": {
      "version": "EX30 E40 Core (Elétrico)",
      "zero": 226392,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 201201,
          "loss": 11.1
        },
        {
          "year": 2024,
          "value": 176338,
          "loss": 22.1
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 249950,
        "source": "https://www.volvocars.com/br/cars/ex30-electric/",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2018,
      "source": "https://www.euroncap.com/assessments/volvo/xc40/0725/",
      "testedAs": "Volvo XC40",
      "note": "Teste de 2018 do XC40, que inclui a versão elétrica; protocolo mais antigo"
    },
    "warranty": {
      "vehicle": "3 anos ou 100 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.volvocars.com/br/l/proprietario/garantia/",
      "kind": "oficial",
      "note": "A bateria é reparada ou trocada se a capacidade cair abaixo de 70% nesse período"
    },
    "fipe": {
      "version": "EX40 Plus P6 (Elétrico)",
      "zero": 345950,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 307900,
          "loss": 11
        },
        {
          "year": 2026,
          "value": 264175,
          "loss": 23.6
        },
        {
          "year": 2025,
          "value": 250060,
          "loss": 27.7
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 345950,
        "source": "https://www.volvocars.com/br/cars/ex40-electric/",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/volvo/ex90/1180/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "3 anos ou 100 mil km",
      "battery": "8 anos ou 160 mil km",
      "source": "https://www.volvocars.com/br/l/proprietario/garantia/",
      "kind": "oficial",
      "note": "A bateria é reparada ou trocada se a capacidade cair abaixo de 70% nesse período"
    },
    "fipe": {
      "version": "EX90 Twin Ultra AWD (Elétrico)",
      "zero": 793945,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 557292,
          "loss": 29.8
        }
      ]
    },
    "priceHistory": [
      {
        "month": "2026-10",
        "price": 849950,
        "source": "https://www.volvocars.com/br/cars/ex90-electric/",
        "kind": "coleta"
      }
    ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/zeekr/1/1037/",
      "testedAs": "Zeekr 001",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos",
      "battery": "8 anos",
      "source": "https://www.car.blog.br/2025/02/zeekr-001-esportivo-eletrico-precos.html",
      "kind": "imprensa",
      "note": "Informado no lançamento, em fevereiro de 2025"
    },
    "fipe": {
      "version": "001 Premium AWD (Elétrico)",
      "zero": 495000,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 385833,
          "loss": 22.1
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2025,
      "source": "https://www.euroncap.com/assessments/zeekr/7x/1123/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos",
      "battery": "8 anos",
      "source": "https://www.car.blog.br/2025/02/zeekr-001-esportivo-eletrico-precos.html",
      "kind": "imprensa",
      "note": "Informado no lançamento, em fevereiro de 2025"
    },
    "fipe": {
      "version": "7X Flagship AWD",
      "zero": 468000,
      "refYear": null,
      "used": [
        {
          "year": 2027,
          "value": 425089,
          "loss": 9.2
        },
        {
          "year": 2026,
          "value": 397440,
          "loss": 15.1
        }
      ]
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
    },
    "safety": {
      "program": "Euro NCAP",
      "stars": 5,
      "year": 2024,
      "source": "https://www.euroncap.com/assessments/zeekr/x/1038/",
      "testedAs": "",
      "note": ""
    },
    "warranty": {
      "vehicle": "6 anos",
      "battery": "8 anos",
      "source": "https://www.car.blog.br/2025/02/zeekr-001-esportivo-eletrico-precos.html",
      "kind": "imprensa",
      "note": "Informado no lançamento, em fevereiro de 2025"
    },
    "fipe": {
      "version": "X Premium (Elétrico)",
      "zero": 298000,
      "refYear": null,
      "used": [
        {
          "year": 2025,
          "value": 229884,
          "loss": 22.9
        }
      ]
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

const NOVIDADES = {
  "atualizado": "09/10/2026",
  "chegando": [
    {
      "marca": "Baic",
      "modelo": "Arcfox T1",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Cadillac",
      "modelo": "Lyriq",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Cadillac",
      "modelo": "Optiq",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Cadillac",
      "modelo": "Vistiq",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Denza",
      "modelo": "B3",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Denza",
      "modelo": "D9",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Denza",
      "modelo": "Z",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "DFM",
      "modelo": "Box",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "DFM",
      "modelo": "Vigo",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Hyundai",
      "modelo": "Ioniq 9",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Kia",
      "modelo": "EV3",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.mobiauto.com.br/revista/18-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/11183"
    },
    {
      "marca": "Leapmotor",
      "modelo": "C16",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Lotus",
      "modelo": "Eletre",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Lotus",
      "modelo": "Emeya",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "MG",
      "modelo": "IM6",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Omoda",
      "modelo": "4",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.mobiauto.com.br/revista/18-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/11183"
    },
    {
      "marca": "Volvo",
      "modelo": "EX60",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Zeekr",
      "modelo": "007 GT",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    },
    {
      "marca": "Zeekr",
      "modelo": "009",
      "previsao": "2º semestre de 2026",
      "fonte": "https://www.cnnbrasil.com.br/auto/veja-os-20-carros-eletricos-que-serao-lancados-no-segundo-semestre-de-2026/"
    }
  ]
};
