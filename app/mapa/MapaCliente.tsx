"use client";

import dynamic from "next/dynamic";

type Filtro = "todos" | "Farmácia" | "Posto";

type LocalizacaoUsuario = {
  latitude: number;
  longitude: number;
};

type Props = {
  filtro: Filtro;
  localizacaoUsuario?: LocalizacaoUsuario | null;
};

const MapaPontos = dynamic(() => import("@/components/MapaPontos"), {
  ssr: false,
});

export default function MapaClient({ filtro, localizacaoUsuario }: Props) {
  return (
    <MapaPontos
      filtro={filtro}
      localizacaoUsuario={localizacaoUsuario}
    />
  );
}