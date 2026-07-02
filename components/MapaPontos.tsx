"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { pontosColeta } from "@/data/pontos-coleta";

type Filtro = "todos" | "Farmácia" | "Posto";

type LocalizacaoUsuario = {
  latitude: number;
  longitude: number;
};

type Props = {
  filtro?: Filtro;
  localizacaoUsuario?: LocalizacaoUsuario | null;
};

const center: [number, number] = [-21.6955, -45.2575];

const iconFarmacia = L.icon({
  iconUrl: "/leaflet/farmacia.png",
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -45],
});

const iconPosto = L.icon({
  iconUrl: "/leaflet/posto.png",
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -45],
});

const iconUsuario = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 22px;
      height: 22px;
      background: #2563eb;
      border: 4px solid #ffffff;
      border-radius: 999px;
      box-shadow: 0 0 0 12px rgba(37, 99, 235, 0.22), 0 8px 20px rgba(37, 99, 235, 0.35);
    "></div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

function CentralizarMapa({
  localizacaoUsuario,
}: {
  localizacaoUsuario?: LocalizacaoUsuario | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (localizacaoUsuario) {
      map.flyTo(
        [localizacaoUsuario.latitude, localizacaoUsuario.longitude],
        16,
        {
          animate: true,
          duration: 1.2,
        }
      );
    }
  }, [localizacaoUsuario, map]);

  return null;
}

export default function MapaPontos({
  filtro = "todos",
  localizacaoUsuario,
}: Props) {
  const pontosFiltrados = pontosColeta
    .filter((p) => {
      if (filtro === "todos") return true;
      return p.tipo === filtro;
    })
    .filter((p) => p.latitude !== 0 && p.longitude !== 0);

  return (
    <div
      style={{
        height: "clamp(360px, 65vh, 680px)",
        width: "100%",
        maxWidth: "1050px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <MapContainer
        center={
          localizacaoUsuario
            ? [localizacaoUsuario.latitude, localizacaoUsuario.longitude]
            : center
        }
        zoom={localizacaoUsuario ? 16 : 15}
        style={{ height: "100%", width: "100%" }}
      >
        <CentralizarMapa localizacaoUsuario={localizacaoUsuario} />

        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {localizacaoUsuario && (
          <Marker
            position={[localizacaoUsuario.latitude, localizacaoUsuario.longitude]}
            icon={iconUsuario}
          >
            <Popup>
              <div style={{ fontFamily: "Inter", minWidth: "150px" }}>
                <strong style={{ color: "#2563eb" }}>📍 Você está aqui</strong>
                <p style={{ fontSize: "12px", marginBottom: 0 }}>
                  Sua localização atual aproximada.
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {pontosFiltrados.map((ponto) => {
          const destino = `${ponto.latitude},${ponto.longitude}`;

          const urlMaps = localizacaoUsuario
            ? `https://www.google.com/maps/dir/?api=1&origin=${localizacaoUsuario.latitude},${localizacaoUsuario.longitude}&destination=${destino}`
            : `https://www.google.com/maps?q=${destino}`;

          return (
            <Marker
              key={ponto.id}
              position={[ponto.latitude, ponto.longitude]}
              icon={ponto.tipo === "Posto" ? iconPosto : iconFarmacia}
            >
              <Popup>
                <div style={{ fontFamily: "Inter", minWidth: "180px" }}>
                  <strong
                    style={{
                      color: ponto.tipo === "Posto" ? "#2563eb" : "#16a34a",
                    }}
                  >
                    {ponto.nome}
                  </strong>

                  <p style={{ fontSize: "13px" }}>
                    {ponto.tipo === "Posto"
                      ? "🏥 Unidade de saúde"
                      : "💊 Farmácia"}
                  </p>

                  <p style={{ fontSize: "12px" }}>📍 {ponto.endereco}</p>

                  <a
                    href={urlMaps}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      marginTop: "8px",
                      textAlign: "center",
                      background: ponto.tipo === "Posto" ? "#2563eb" : "#16a34a",
                      color: "#fff",
                      padding: "8px",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        ponto.tipo === "Posto"
                          ? "0 8px 18px rgba(37, 99, 235, 0.35)"
                          : "0 8px 18px rgba(22, 163, 74, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    📍 Como chegar
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}