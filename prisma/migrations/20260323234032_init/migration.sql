-- CreateTable
CREATE TABLE "PontoColeta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "telefone" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "recebeMedicamentos" BOOLEAN NOT NULL DEFAULT true,
    "observacao" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);
