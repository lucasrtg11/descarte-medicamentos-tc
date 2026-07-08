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
    latitude: -21.6942119,
    longitude: -45.2578811,
  },
  {
    id: 2,
    nome: "Drogaria São Paulo",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 159",
    latitude: -21.6986093,
    longitude: -45.2570973,
  },
  {
    id: 3,
    nome: "Drogaria Araujo - Três Corações",
    tipo: "Farmácia",
    endereco: "R. Dep. Carlos Luz, 142",
    latitude: -21.693786320637706, 
    longitude: -45.258373107400224,
  },
  {
    id: 4,
    nome: "Drogaria Araujo - Praça Pelé",
    tipo: "Farmácia",
    endereco: "Av. Pres. Dutra, 2",
    latitude: -21.697217215731296,
    longitude:  -45.256279071512196,
  },
  {
    id: 5,
    nome: "Farma Popular Praça do Pelé",
    tipo: "Farmácia",
    endereco: "R. Rui Barbosa, 8",
    latitude: -21.697890101657755,  
    longitude: -45.25600883895427,
  },
  {
    id: 6,
    nome: "Drogasil (Av. Rei Pelé)",
    tipo: "Farmácia",
    endereco: "Av. Rei Pelé, 1485",
    latitude: -21.6777433,
    longitude: -45.2688476,
  },
  {
    id: 7,
    nome: "Farma Popular Getúlio Vargas",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 210",
    latitude: -21.6988307242005, 
    longitude: -45.25659170811674,
  },
  {
    id: 8,
    nome: "Drogaria Dom Ferrão - Centro",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 229",
    latitude: -21.6986952,
    longitude: -45.2563962,
  },
  {
    id: 9,
    nome: "Drogaria Dom Ferrão - Peró",
    tipo: "Farmácia",
    endereco: "Av. Deputado Renato Azeredo, 345",
    latitude: -21.68669460682073, 
    longitude: -45.2614572216295,
  },
  {
    id: 10,
    nome: "Drogaria São Judas Tadeu",
    tipo: "Farmácia",
    endereco: "Av. Pres. Getúlio Vargas, 105",
    latitude: -21.698893213628427, 
    longitude: -45.257722014451794,
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
    latitude: -21.691179793946336, 
    longitude: -45.24874383716827,
  },
  {
    id: 13,
    nome: "ESF CAIC",
    tipo: "Posto",
    endereco: "Rua Bem-Te-Vi, nº 522 – Bela Vista",
    latitude: -21.684859206731147, 
    longitude: -45.24817176266756,
  },
  {
    id: 14,
    nome: "ESF CINTURAO VERDE",
    tipo: "Posto",
    endereco: "Rua Miguel Jorge de Oliveira, nº 2 – Jardim Esperança",
    latitude: -21.710848734244195, 
    longitude: -45.24047428411223,
  },
  {
    id: 15,
    nome: "ESF COLINAS I, II",
    tipo: "Posto",
    endereco: "Rua Serenidade, nº 318 – Parque das Colinas",
    latitude: -21.714265918146385, 
    longitude: -45.26999455615063,
  },
  {
    id: 16,
    nome: "ESF FÁTIMA I e II",
    tipo: "Posto",
    endereco: "Rua Antônio Matias, nº 1093 – Vila Nossa Senhora de Fátima",
    latitude: -21.68877214104412, 
    longitude: -45.24054876230228,
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
    latitude: -21.68993288165221, 
    longitude: -45.25408610251524,
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
    latitude: -21.68891084539248, 
    longitude: -45.25139730381691,
  },
  {
    id: 22,
    nome: "ESF SÃO JOSÉ",
    tipo: "Posto",
    endereco: "Rua Nhá Chica, nº 345 – Parque São José",
    latitude: -21.68224132817339, 
    longitude: -45.25619173965633,
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
    latitude: -21.711114894616106,
    longitude: -45.28515663241246,
  },
  {
    id: 25,
    nome: "ESF TRIÂNGULO",
    tipo: "Posto",
    endereco: "Rua Luciano Andrade Peixoto, nº 291 – Triângulo",
    latitude: -21.696258902586713, 
    longitude: -45.26139935529823,
  },
  {
    id: 26,
    nome: "ESF VILA VIANA",
    tipo: "Posto",
    endereco: "Rua General Osório, nº 147 – Vila Viana",
    latitude: -21.700557347634298, 
    longitude: -45.26494762994837,
  },
];