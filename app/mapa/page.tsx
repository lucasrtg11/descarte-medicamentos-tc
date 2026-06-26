"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pontosColeta } from "@/data/pontos-coleta";
import MapaClient from "../mapa/MapaCliente";

export default function MapaPage() {
  const [filtroLista, setFiltroLista] = useState<
    "todos" | "Farmácia" | "Posto"
  >("todos");

  const [colunas, setColunas] = useState(3);

  useEffect(() => {
    const ajustarColunas = () => {
      if (window.innerWidth <= 640) {
        setColunas(1);
      } else if (window.innerWidth <= 1024) {
        setColunas(2);
      } else {
        setColunas(3);
      }
    };

    ajustarColunas();
    window.addEventListener("resize", ajustarColunas);

    return () => window.removeEventListener("resize", ajustarColunas);
  }, []);

  const pontosFiltrados = pontosColeta.filter((p) =>
    filtroLista === "todos" ? true : p.tipo === filtroLista
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        background: "linear-gradient(135deg, #ecfdf5, #f0fdf4)",
        padding: "30px 16px",
        fontFamily: "Inter, Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 34px)",
              fontWeight: "700",
              color: "#064e3b",
              margin: 0,
            }}
          >
            💊 Descarte de Medicamentos
          </h1>

          <p style={{ color: "#374151", marginTop: "8px" }}>
            Encontre pontos de coleta em Três Corações
          </p>
        </div>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            textDecoration: "none",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#ffffff",
            padding: "10px 18px",
            borderRadius: "999px",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(34, 197, 94, 0.35)",
          }}
        >
          ← Voltar
        </Link>

        <section
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #d1fae5",
            marginBottom: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#065f46" }}>
            📍 Mapa de coleta
          </h2>

          <p style={{ color: "#4b5563", marginBottom: "20px" }}>
            Veja abaixo os locais disponíveis para descarte correto de medicamentos.
          </p>

          <MapaClient filtro={filtroLista} />
        </section>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["todos", "Farmácia", "Posto"].map((tipo) => {
            const ativo = filtroLista === tipo;

            return (
              <button
                key={tipo}
                onClick={() => setFiltroLista(tipo as any)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s",
                  background: ativo
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "#e5e7eb",
                  color: ativo ? "#ffffff" : "#374151",
                  boxShadow: ativo
                    ? "0 4px 12px rgba(34, 197, 94, 0.35)"
                    : "none",
                }}
              >
                {tipo === "todos"
                  ? "Todos"
                  : tipo === "Farmácia"
                  ? "💊 Farmácias"
                  : "🏥 Postos"}
              </button>
            );
          })}
        </div>

        <section
          style={{
            display: "grid",
            gap: "18px",
            gridTemplateColumns: `repeat(${colunas}, 1fr)`,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {pontosFiltrados.map((ponto) => {
            const urlMaps = `https://www.google.com/maps/search/?api=1&query=${ponto.latitude},${ponto.longitude}`;

            return (
              <div
                key={ponto.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #d1fae5",
                  transition: "all 0.25s ease",
                  color: "#1f2937",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "260px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      color: "#16a34a",
                      fontSize: "18px",
                    }}
                  >
                    {ponto.nome}
                  </h3>

                  <p style={{ margin: "8px 0", color: "#374151" }}>
                    {ponto.tipo === "Posto"
                      ? "🏥 Posto de saúde"
                      : "💊 Farmácia"}
                  </p>

                  <p style={{ margin: "8px 0 16px 0", color: "#6b7280" }}>
                    📍 {ponto.endereco}
                  </p>

                  <a
                    href={urlMaps}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      textDecoration: "none",
                      background:
                        ponto.tipo === "Posto"
                          ? "#2563eb"
                          : "linear-gradient(135deg, #22c55e, #16a34a)",
                      color: "#ffffff",
                      padding: "14px 22px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginTop: "auto",
                      boxSizing: "border-box",
                    }}
                  >
                    📍 Como chegar
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}