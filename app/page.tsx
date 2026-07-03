"use client";

import Link from "next/link";

const hoverEnter = (
  e: React.MouseEvent<HTMLElement>,
  shadow = "0 20px 40px rgba(0,0,0,0.12)"
) => {
  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
  e.currentTarget.style.boxShadow = shadow;
};

const hoverLeave = (
  e: React.MouseEvent<HTMLElement>,
  shadow = "0 8px 22px rgba(0,0,0,0.06)"
) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = shadow;
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #bbf7d0 0, transparent 28%), linear-gradient(135deg, #ecfdf5, #f0fdf4)",
        padding: "28px 16px",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#1f2937",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src="/unincor-banner.png"
            alt="Centro Universitário UninCor"
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "auto",
              display: "block",
              borderRadius: "16px",
            }}
          />
        </div>

        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(135deg, #ffffff, #f0fdf4)",
            borderRadius: "28px",
            padding: "34px 22px",
            border: "1px solid #bbf7d0",
            boxShadow: "0 18px 45px rgba(21, 128, 61, 0.12)",
            marginBottom: "22px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-45px",
              top: "-45px",
              width: "140px",
              height: "140px",
              borderRadius: "999px",
              background: "rgba(34, 197, 94, 0.12)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "-40px",
              bottom: "-50px",
              width: "120px",
              height: "120px",
              borderRadius: "999px",
              background: "rgba(37, 99, 235, 0.08)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "22px",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                margin: "0 auto 18px auto",
                boxShadow: "0 12px 24px rgba(34, 197, 94, 0.28)",
              }}
            >
              💊
            </div>

            <h1
              style={{
                fontSize: "clamp(30px, 6vw, 48px)",
                lineHeight: "1.08",
                textAlign: "center",
                margin: "0 0 16px 0",
                color: "#064e3b",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              Descarte Correto de Medicamentos
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 3vw, 19px)",
                lineHeight: "1.7",
                textAlign: "center",
                color: "#374151",
                maxWidth: "720px",
                margin: "0 auto 26px auto",
              }}
            >
              Encontre pontos de coleta em Três Corações, localize farmácias e
              unidades de saúde e descarte medicamentos vencidos ou em desuso de
              forma segura.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/mapa?localizacao=1"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "330px",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "15px 24px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  fontSize: "15px",
                  boxShadow: "0 10px 22px rgba(34, 197, 94, 0.34)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.06)";
                }}
              >
                📍 Encontrar pontos próximos
              </Link>
            </div>
          </div>
        </section>

        {/* ACESSOS RÁPIDOS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
            gap: "14px",
            marginBottom: "22px",
          }}
        >
          <Link
            href="/mapa"
            style={quickCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <div style={quickIconStyle("#dcfce7")}>🗺️</div>
            <strong style={quickTitleStyle}>Mapa interativo</strong>
            <span style={quickTextStyle}>Ver todos os locais</span>
          </Link>

          <Link
            href="/mapa"
            style={quickCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <div style={quickIconStyle("#dcfce7")}>💊</div>
            <strong style={quickTitleStyle}>Farmácias</strong>
            <span style={quickTextStyle}>Pontos de coleta</span>
          </Link>

          <Link
            href="/mapa"
            style={quickCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <div style={quickIconStyle("#dbeafe")}>🏥</div>
            <strong style={quickTitleStyle}>Unidades de saúde</strong>
            <span style={quickTextStyle}>Locais de informação</span>
          </Link>

          <Link
            href="/mapa"
            style={quickCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <div style={quickIconStyle("#fef3c7")}>🌱</div>
            <strong style={quickTitleStyle}>Meio ambiente</strong>
            <span style={quickTextStyle}>Descarte consciente</span>
          </Link>
        </section>

        {/* LOCALIZAÇÃO */}
        <section
          style={locationCardStyle}
          onMouseEnter={(e) => hoverEnter(e)}
          onMouseLeave={(e) => hoverLeave(e, "0 10px 28px rgba(0,0,0,0.06)")}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "18px",
                background: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              📍
            </div>

            <div>
              <h2
                style={{
                  margin: "0 0 6px 0",
                  color: "#065f46",
                  fontSize: "22px",
                }}
              >
                Localização inteligente
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#4b5563",
                  lineHeight: "1.6",
                  fontSize: "15px",
                }}
              >
                Na página do mapa, permita o acesso à sua localização para ver os
                pontos mais próximos primeiro.
              </p>
            </div>
          </div>

          <Link
            href="/mapa?localizacao=1"
            style={{
              marginTop: "18px",
              display: "block",
              width: "100%",
              textAlign: "center",
              background: "#064e3b",
              color: "#ffffff",
              textDecoration: "none",
              padding: "14px 18px",
              borderRadius: "999px",
              fontWeight: "700",
              boxSizing: "border-box",
            }}
          >
            Abrir mapa e usar localização
          </Link>
        </section>

        {/* NÚMEROS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "22px",
          }}
        >
          <div
            style={statCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <strong style={statNumberStyle}>26</strong>
            <span style={statTextStyle}>Locais cadastrados</span>
          </div>

          <div
            style={statCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <strong style={statNumberStyle}>10</strong>
            <span style={statTextStyle}>Farmácias</span>
          </div>

          <div
            style={statCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          >
            <strong style={statNumberStyle}>16</strong>
            <span style={statTextStyle}>Unidades de saúde</span>
          </div>
        </section>
        <div
          style={{
            marginTop: "36px",
            marginBottom: "24px",
            width: "100%",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "16px",
            boxSizing: "border-box",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            border: "1px solid #d1fae5",
          }}
        >
          <img
            src="/unincor-banner.png"
            alt="Centro Universitário UninCor"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* INFORMAÇÕES */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
            marginBottom: "22px",
          }}
        >
          <div
            style={infoCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e, "0 8px 24px rgba(0,0,0,0.06)")}
          >
            <div style={infoIconStyle("#dcfce7")}>📍</div>
            <h2 style={titleStyle}>Finalidade do site</h2>
            <p style={textStyle}>
              Facilitar o acesso às informações sobre descarte consciente e ajudar
              a população a localizar pontos adequados para entrega de medicamentos.
            </p>
          </div>

          <div
            style={infoCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e, "0 8px 24px rgba(0,0,0,0.06)")}
          >
            <div style={infoIconStyle("#fee2e2")}>⚠️</div>
            <h2 style={titleStyle}>Por que descartar corretamente?</h2>
            <p style={textStyle}>
              O descarte incorreto pode contaminar solo e água, além de oferecer
              riscos à saúde pública e ao meio ambiente.
            </p>
          </div>

          <div
            style={infoCardStyle}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e, "0 8px 24px rgba(0,0,0,0.06)")}
          >
            <div style={infoIconStyle("#bbf7d0")}>💊</div>
            <h2 style={titleStyle}>Como descartar?</h2>
            <p style={textStyle}>
              Leve medicamentos vencidos ou em desuso até farmácias, drogarias e
              locais indicados para orientação e coleta.
            </p>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section
          style={locationCardStyle}
          onMouseEnter={(e) => hoverEnter(e)}
          onMouseLeave={(e) => hoverLeave(e, "0 10px 28px rgba(0,0,0,0.06)")}
        >
          <h2
            style={{
              margin: "0 0 18px 0",
              color: "#065f46",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            Benefícios do descarte consciente
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
            }}
          >
            <div
              style={benefitStyle}
              onMouseEnter={(e) => hoverEnter(e, "0 14px 28px rgba(0,0,0,0.10)")}
              onMouseLeave={(e) => hoverLeave(e, "none")}
            >
              <span style={benefitIconStyle}>♻️</span>
              <strong>Protege o meio ambiente</strong>
            </div>

            <div
              style={benefitStyle}
              onMouseEnter={(e) => hoverEnter(e, "0 14px 28px rgba(0,0,0,0.10)")}
              onMouseLeave={(e) => hoverLeave(e, "none")}
            >
              <span style={benefitIconStyle}>💧</span>
              <strong>Evita contaminação da água</strong>
            </div>

            <div
              style={benefitStyle}
              onMouseEnter={(e) => hoverEnter(e, "0 14px 28px rgba(0,0,0,0.10)")}
              onMouseLeave={(e) => hoverLeave(e, "none")}
            >
              <span style={benefitIconStyle}>👨‍👩‍👧</span>
              <strong>Cuida da saúde da população</strong>
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section
          style={finalCardStyle}
          onMouseEnter={(e) =>
            hoverEnter(e, "0 20px 42px rgba(6, 78, 59, 0.32)")
          }
          onMouseLeave={(e) =>
            hoverLeave(e, "0 12px 28px rgba(6, 78, 59, 0.24)")
          }
        >
          <h2
            style={{
              margin: "0 0 10px 0",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            Pronto para encontrar um ponto de descarte?
          </h2>

          <p
            style={{
              color: "#d1fae5",
              margin: "0 auto 18px auto",
              maxWidth: "620px",
              lineHeight: "1.6",
            }}
          >
            Acesse o mapa, filtre por farmácias ou unidades de saúde e veja as
            opções mais próximas de você.
          </p>

          <Link
            href="/mapa?localizacao=1"
            style={{
              display: "inline-block",
              width: "100%",
              maxWidth: "330px",
              background: "#ffffff",
              color: "#065f46",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: "800",
            }}
          >
            🗺️ Ver mapa completo
          </Link>
        </section>

        {/* RODAPÉ */}
        <footer
          style={{
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
            Este sistema foi desenvolvido{" "}
            <strong>exclusivamente para fins acadêmicos</strong>, em apoio ao
            projeto de pesquisa de mestrado de{" "}
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
            <strong>Lucas Ribeiro Tavares Gabriel</strong>, acadêmico-estagiário
            do curso de <strong>Ciência da Computação</strong> do{" "}
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

const quickCardStyle = {
  background: "#ffffff",
  borderRadius: "20px",
  padding: "18px 14px",
  border: "1px solid #d1fae5",
  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
  textDecoration: "none",
  color: "#1f2937",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  textAlign: "center" as const,
  gap: "8px",
  minHeight: "132px",
  justifyContent: "center",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const quickIconStyle = (bg: string) => ({
  width: "54px",
  height: "54px",
  borderRadius: "18px",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
});

const quickTitleStyle = {
  color: "#065f46",
  fontSize: "15px",
  lineHeight: "1.2",
};

const quickTextStyle = {
  color: "#6b7280",
  fontSize: "13px",
  lineHeight: "1.3",
};

const statCardStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  padding: "18px 10px",
  border: "1px solid #d1fae5",
  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
  textAlign: "center" as const,
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const statNumberStyle = {
  display: "block",
  color: "#16a34a",
  fontSize: "28px",
  fontWeight: 800,
  lineHeight: "1",
  marginBottom: "8px",
};

const statTextStyle = {
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.3",
};

const infoCardStyle = {
  background: "#ffffff",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  border: "1px solid #d1fae5",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const infoIconStyle = (bg: string) => ({
  width: "50px",
  height: "50px",
  borderRadius: "16px",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  marginBottom: "12px",
});

const titleStyle = {
  fontSize: "20px",
  margin: "0 0 10px 0",
  color: "#065f46",
};

const textStyle = {
  fontSize: "15px",
  lineHeight: "1.65",
  color: "#374151",
  margin: 0,
};

const benefitStyle = {
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "18px",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: "#065f46",
  minHeight: "72px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const locationCardStyle = {
  background: "#ffffff",
  borderRadius: "22px",
  padding: "24px",
  border: "1px solid #d1fae5",
  boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
  marginBottom: "22px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const benefitsContainerStyle = {
  background: "#ffffff",
  borderRadius: "22px",
  padding: "24px",
  border: "1px solid #d1fae5",
  boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
  marginBottom: "22px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const finalCardStyle = {
  background: "linear-gradient(135deg, #064e3b, #047857)",
  borderRadius: "24px",
  padding: "26px 20px",
  textAlign: "center" as const,
  marginBottom: "26px",
  boxShadow: "0 12px 28px rgba(6, 78, 59, 0.24)",
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const benefitIconStyle = {
  width: "42px",
  height: "42px",
  borderRadius: "14px",
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  flexShrink: 0,
};
