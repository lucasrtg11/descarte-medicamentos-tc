export type PontoColeta = {
  id: number;
  nome: string;
  tipo: "Farmácia" | "Posto";
  endereco: string;
  latitude: number;
  longitude: number;
};

export const pontosColeta: PontoColeta[] = [
  // =========================
  // 💊 FARMÁCIAS
  // =========================
  {
    id: 1,
    nome: "Drogasil",
    tipo: "Farmácia",
    endereco: "R. Dep. Carlos Luz, 96",
    latitude: -21.694267992032387,
    longitude: -45.25787900026137,
  },
  {
    id: 2,
    nome: "Drogaria São Paulo",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 159",
    latitude: -21.69865347622378,
    longitude: -45.25718097081362,
  },
  {
    id: 3,
    nome: "Drogaria Araujo - Três Corações",
    tipo: "Farmácia",
    endereco: "R. Dep. Carlos Luz, 142",
    latitude: -21.693698586652655,
    longitude: -45.2584411437596,
  },
  {
    id: 4,
    nome: "Drogaria Araujo - Praça Pelé",
    tipo: "Farmácia",
    endereco: "Av. Pres. Dutra, 2",
    latitude: -21.69723218741418,
    longitude: -45.25627839781466,
  },
  {
    id: 5,
    nome: "Farma Popular Praça do Pelé",
    tipo: "Farmácia",
    endereco: "R. Rui Barbosa, 8",
    latitude: -21.69788962225954,
    longitude: -45.25600882357473,
  },
  {
    id: 6,
    nome: "Drogasil (Av. Rei Pelé)",
    tipo: "Farmácia",
    endereco: "Av. Rei Pelé, 1485",
    latitude: -21.677630005198086,
    longitude: -45.268720122895175,
  },
  {
    id: 7,
    nome: "Farma Popular Getúlio Vargas",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 210",
    latitude: -21.69883684534565,
    longitude: -45.25659147081362,
  },
  {
    id: 8,
    nome: "Drogaria Dom Ferrão - Centro",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 229",
    latitude: -21.698597832174638,
    longitude: -45.25632241805241,
  },
  {
    id: 9,
    nome: "Drogaria Dom Ferrão - Peró",
    tipo: "Farmácia",
    endereco: "Av. Deputado Renato Azeredo, 345",
    latitude: -21.686735741342808,
    longitude: -45.261449162775456,
  },
  {
    id: 10,
    nome: "Drogaria São Judas Tadeu",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 105",
    latitude: -21.698746176802253,
    longitude: -45.257687146207886,
  },

  // =========================
  // 🏥 POSTOS (ESF)
  // =========================

  {
    id: 11,
    nome: "ESF AMADEU MIGUEL",
    tipo: "Posto",
    endereco: "Rua Sergipe, nº 36 – Amadeu Miguel",
    latitude: 0,
    longitude: 0,
  },
  {
    id: 12,
    nome: "ESF BOA VENTURA",
    tipo: "Posto",
    endereco: "Rua Lenise Aparecida Ferreira, nº 200 – Jardim Primavera",
    latitude: -21.69077636799396,
    longitude: -45.24864882268165,
  },
  {
    id: 13,
    nome: "ESF CAIC",
    tipo: "Posto",
    endereco: "Rua Bem-Te-Vi, nº 522 – Bela Vista",
    latitude: -21.68504093972382,
    longitude: -45.24772452651908,
  },
  {
    id: 14,
    nome: "ESF CINTURAO VERDE",
    tipo: "Posto",
    endereco: "Rua Miguel Jorge de Oliveira, nº 2 – Jardim Esperança",
    latitude: -21.709920846557857,
    longitude: -45.24050697764182,
  },
  {
    id: 15,
    nome: "ESF COLINAS I, II",
    tipo: "Posto",
    endereco: "Rua Serenidade, nº 318 – Parque das Colinas",
    latitude: -21.714248423845234,
    longitude: -45.27009516143683,
  },
  {
    id: 16,
    nome: "ESF FÁTIMA I e II",
    tipo: "Posto",
    endereco: "Rua Antônio Matias, nº 1093 – Vila Nossa Senhora de Fátima",
    latitude: -21.688566751088985,
    longitude: -45.240505911970644,
  },
  {
    id: 17,
    nome: "ESF FLORA",
    tipo: "Posto",
    endereco: "Rua Manoel Antônio Teixeira, S/nº – Flora",
    latitude: 0,
    longitude: 0,
  },
  {
    id: 18,
    nome: "ESF JARDIM PARAÍSO",
    tipo: "Posto",
    endereco: "Rua Joaquim Damas, nº 439 – Jardim Paraíso",
    latitude: -21.72573009893902,
    longitude: -45.26176679658127,
  },
  {
    id: 19,
    nome: "ESF MONTE ALEGRE I e II",
    tipo: "Posto",
    endereco: "Rua Lambari, S/nº – Monte Alegre",
    latitude: -21.690100103730497,
    longitude: -45.25379889890387,
  },
  {
    id: 20,
    nome: "ESF NOVO HORIZONTE",
    tipo: "Posto",
    endereco: "Rua Dr. Ricart Naves Rezende, nº 420 – Novo Horizonte",
    latitude: -21.683490636163143,
    longitude: -45.26843639339505,
  },
  {
    id: 21,
    nome: "ESF RIO DO PEIXE",
    tipo: "Posto",
    endereco: "Rua Pedro Rodrigues Chagas, S/nº – Rio do Peixe",
    latitude: -21.688802462863244,
    longitude: -45.2513913812119,
  },
  {
    id: 22,
    nome: "ESF SÃO JOSÉ",
    tipo: "Posto",
    endereco: "Rua Nhá Chica, nº 345 – Parque São José",
    latitude: -21.6819155124882,
    longitude: -45.256141103549616,
  },
  {
    id: 23,
    nome: "ESF SÃO PEDRO",
    tipo: "Posto",
    endereco: "Avenida Orlando Rezende Andrade – Feira de Gado",
    latitude: -21.700498452921316,
    longitude: -45.24107158201957,
  },
  {
    id: 24,
    nome: "ESF NOVA TRÊS CORAÇÕES",
    tipo: "Posto",
    endereco: "Rua Projetada 27, nº 350 – Nova Três Corações",
    latitude: -21.69591237905687,
    longitude: -45.26150552136948,
  },
  {
    id: 25,
    nome: "ESF TRIÂNGULO",
    tipo: "Posto",
    endereco: "Rua Luciano Andrade Peixoto, nº 291 – Triângulo",
    latitude: -21.70021883359554,
    longitude: -45.26485291808908,
  },
  {
    id: 26,
    nome: "ESF VILA VIANA",
    tipo: "Posto",
    endereco: "Rua General Osório, nº 147 – Vila Viana",
    latitude: -21.71158920184289,
    longitude: -45.28375759758379,
  },
];