import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Descarte Correto de Medicamentos",
  description:
    "Encontre pontos de coleta em Três Corações para o descarte correto de medicamentos vencidos ou em desuso.",
  openGraph: {
    title: "Descarte Correto de Medicamentos",
    description:
      "Mapa interativo com pontos de coleta de medicamentos em Três Corações.",
    url: "https://descarte-medicamentos-tc.vercel.app",
    siteName: "Descarte Correto de Medicamentos",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Descarte Correto de Medicamentos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
