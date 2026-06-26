"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ecfdf5, #f0fdf4)",
        padding: "30px 16px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* HERO */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px 20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #d1fae5",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 36px)",
              textAlign: "center",
              marginBottom: "20px",
              color: "#064e3b",
            }}
          >
            💊 Descarte Correto de Medicamentos
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              textAlign: "center",
              color: "#374151",
              maxWidth: "700px",
              margin: "0 auto 25px auto",
            }}
          >
            Encontre pontos de coleta em Três Corações e descarte medicamentos de forma segura, protegendo o meio ambiente e a saúde da população.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/mapa"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "320px",
                textAlign: "center",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#ffffff",
                textDecoration: "none",
                padding: "14px 22px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow: "0 6px 16px rgba(34, 197, 94, 0.35)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              📍 Ver pontos de coleta
            </Link>
          </div>
        </section>

        {/* CARDS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {/* CARD 1 */}
          <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <div style={iconStyle("#dcfce7")}>📍</div>

            <h2 style={titleStyle}>Finalidade do site</h2>

            <p style={textStyle}>
              Facilitar o acesso às informações sobre descarte consciente e ajudar na localização dos pontos de coleta.
            </p>
          </div>

          {/* CARD 2 */}
          <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <div style={iconStyle("#fee2e2")}>⚠️</div>

            <h2 style={titleStyle}>Por que descartar corretamente?</h2>

            <p style={textStyle}>
              O descarte incorreto pode contaminar o solo, a água e causar riscos à saúde pública.
            </p>
          </div>

          {/* CARD 3 */}
          <div style={cardStyle} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <div style={iconStyle("#bbf7d0")}>💊</div>

            <h2 style={titleStyle}>Como descartar?</h2>

            <p style={textStyle}>
              Leve medicamentos vencidos ou em desuso até farmácias e drogarias participantes.
            </p>
          </div>
        </section>

        {/* IMPORTÂNCIA */}
        <section style={{ ...cardStyle, marginTop: "30px" }}>
          <div style={iconStyle("#bbf7d0")}>🌱</div>

          <h2 style={titleStyle}>Importância do mapeamento</h2>

          <p style={{ ...textStyle, lineHeight: "1.8" }}>
            O mapeamento facilita encontrar locais corretos para descarte, contribuindo para a saúde pública e preservação ambiental.
          </p>
        </section>

        {/* RODAPÉ */}
        <footer
          style={{
            marginTop: "35px",
            background: "#ffffff",
            border: "1px solid #d1fae5",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 16px 0",
              color: "#065f46",
              fontSize: "18px",
            }}
          >
            Informações do Projeto
          </h3>

          <p
            style={{
              color: "#374151",
              fontSize: "15px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Este sistema foi desenvolvido <strong>exclusivamente para fins acadêmicos</strong>,
            em apoio ao projeto de pesquisa de mestrado de{" "}
            <strong>Daiana Silva Reis Santos</strong>, vinculada ao{" "}
            <strong>Centro Universitário Vale do Rio Verde – UninCor</strong>.
          </p>

          <p
            style={{
              color: "#374151",
              fontSize: "15px",
              lineHeight: "1.8",
              marginTop: "16px",
            }}
          >
            Desenvolvido por{" "}
            <strong>Lucas Ribeiro Tavares Gabriel</strong>, acadêmico-estagiário do curso de{" "}
            <strong>Ciência da Computação</strong> do{" "}
            <strong>Centro Universitário Vale do Rio Verde – UninCor</strong>.
          </p>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid #d1fae5",
              color: "#6b7280",
              fontSize: "13px",
            }}
          >
            © 2026 • Plataforma desenvolvida exclusivamente para fins acadêmicos.
          </div>
        </footer>
      </div>
    </main>
  );
}

/* 🔥 ESTILOS */

const cardStyle = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "18px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  border: "1px solid #d1fae5",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const hoverEnter = (e: any) => {
  e.currentTarget.style.transform = "translateY(-6px)";
  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
};

const hoverLeave = (e: any) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
};

const iconStyle = (bg: string) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  marginBottom: "12px",
});

const titleStyle = {
  fontSize: "20px",
  marginBottom: "10px",
  color: "#065f46",
};

const textStyle = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#374151",
};