"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { pontosColeta } from "@/data/pontos-coleta";

type Props = {
  filtro?: "todos" | "Farmácia" | "Posto"; // 👈 agora opcional
};

const center: [number, number] = [-21.6955, -45.2575];

const iconFarmacia = L.icon({
  iconUrl: "/leaflet/farmacia.png",
  iconSize: [35, 50],
  iconAnchor: [11, 36],
  popupAnchor: [1, -30],
});

const iconPosto = L.icon({
  iconUrl: "/leaflet/posto.png",
  iconSize: [35, 50],
  iconAnchor: [11, 36],
  popupAnchor: [1, -30],
});

export default function MapaPontos({ filtro = "todos" }: Props) {
  // 🔥 FILTRO SEGURO
  const pontosFiltrados = pontosColeta
    .filter((p) => {
      if (filtro === "todos") return true;
      return p.tipo === filtro;
    })
    .filter((p) => p.latitude !== 0 && p.longitude !== 0);

  return (
    <div
      style={{
        height: "clamp(300px, 50vh, 500px)",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {pontosFiltrados.map((ponto) => (
          <Marker
            key={ponto.id}
            position={[ponto.latitude, ponto.longitude]}
            icon={ponto.tipo === "Posto" ? iconPosto : iconFarmacia}
          >
            <Popup>
              <div style={{ fontFamily: "Inter", minWidth: "180px" }}>
                <strong
                  style={{
                    color:
                      ponto.tipo === "Posto" ? "#2563eb" : "#16a34a",
                  }}
                >
                  {ponto.nome}
                </strong>

                <p style={{ fontSize: "13px" }}>
                  {ponto.tipo === "Posto"
                    ? "🏥 Posto de saúde"
                    : "💊 Farmácia"}
                </p>

                <p style={{ fontSize: "12px" }}>
                  📍 {ponto.endereco}
                </p>

                <a
                  href={`https://www.google.com/maps?q=${ponto.latitude},${ponto.longitude}`}
                  target="_blank"
                  style={{
                    display: "block",
                    marginTop: "8px",
                    textAlign: "center",
                    background:
                      ponto.tipo === "Posto"
                        ? "#2563eb"
                        : "#16a34a",
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "999px",
                    textDecoration: "none",
                  }}
                >
                  📍 Como chegar
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}