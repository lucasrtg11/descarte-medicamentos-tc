"use client";

import dynamic from "next/dynamic";

const MapaPontos = dynamic(() => import("@/components/MapaPontos"), {
  ssr: false,
});

type Props = {
  filtro: "todos" | "Farmácia" | "Posto";
};

export default function MapaClient({ filtro }: Props) {
  return <MapaPontos filtro={filtro} />;
}