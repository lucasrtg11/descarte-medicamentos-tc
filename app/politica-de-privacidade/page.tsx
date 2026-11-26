import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Descarte Certo+ EcoSaúde",
  description: "Política de privacidade do aplicativo Descarte Certo+ EcoSaúde.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ecfdf5",
        padding: "30px 16px",
        fontFamily: "Arial, sans-serif",
        color: "#334155",
        lineHeight: 1.8,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ color: "#065f46" }}>
          Política de Privacidade
        </h1>

        <p>
          <strong>Descarte Certo+ EcoSaúde</strong>
        </p>

        <p>Última atualização: 25 de novembro de 2026.</p>

        <h2 style={{ color: "#047857" }}>1. Sobre o aplicativo</h2>

        <p>
          O Descarte Certo+ EcoSaúde é um aplicativo educativo
          desenvolvido no âmbito de um projeto acadêmico da
          Universidade Vale do Rio Verde (UninCor), com o objetivo
          de orientar a população sobre o descarte correto de
          medicamentos e facilitar a localização de pontos de
          coleta no município de Três Corações, Minas Gerais.
        </p>

        <h2 style={{ color: "#047857" }}>2. Dados pessoais</h2>

        <p>
          O aplicativo não exige cadastro, criação de conta,
          login ou fornecimento de informações pessoais para
          acessar suas funcionalidades educativas.
        </p>

        <h2 style={{ color: "#047857" }}>3. Localização</h2>

        <p>
          O aplicativo poderá solicitar acesso à localização
          do dispositivo, mediante autorização do usuário,
          exclusivamente para facilitar a identificação de
          pontos de coleta próximos.
        </p>

        <p>
          A localização é utilizada durante a execução dessa
          funcionalidade e não é armazenada em banco de dados
          próprio do aplicativo.
        </p>

        <p>
          O usuário poderá negar ou revogar essa permissão
          nas configurações do dispositivo.
        </p>

        <h2 style={{ color: "#047857" }}>
          4. Serviços de terceiros
        </h2>

        <p>
          O aplicativo utiliza serviços externos para exibição
          de mapas e direcionamento de rotas, incluindo
          OpenStreetMap e Google Maps, além da infraestrutura
          de hospedagem do site na Vercel.
        </p>

        <p>
          Esses serviços poderão processar informações técnicas,
          como endereço IP, solicitações de acesso e informações
          de localização necessárias ao funcionamento dos mapas
          e das rotas, conforme suas próprias políticas de
          privacidade.
        </p>

        <h2 style={{ color: "#047857" }}>
          5. Publicidade e compartilhamento
        </h2>

        <p>
          O aplicativo não possui anúncios publicitários e não
          comercializa dados pessoais dos usuários.
        </p>

        <h2 style={{ color: "#047857" }}>
          6. Armazenamento e segurança
        </h2>

        <p>
          O aplicativo não mantém banco de dados próprio com
          informações pessoais dos usuários. Os serviços externos
          utilizados estão sujeitos às respectivas práticas de
          segurança e retenção de dados.
        </p>

        <h2 style={{ color: "#047857" }}>
          7. Direitos dos usuários
        </h2>

        <p>
          Em conformidade com a Lei Geral de Proteção de Dados
          Pessoais (Lei nº 13.709/2018), os usuários poderão
          solicitar esclarecimentos sobre o tratamento de dados
          pessoais por meio do contato informado nesta política.
        </p>

        <h2 style={{ color: "#047857" }}>
          8. Finalidade educativa
        </h2>

        <p>
          O aplicativo possui finalidade exclusivamente
          educativa e informativa. Seu conteúdo não substitui
          orientações médicas, farmacêuticas ou de outros
          profissionais de saúde.
        </p>

        <h2 style={{ color: "#047857" }}>
          9. Alterações nesta política
        </h2>

        <p>
          Esta Política de Privacidade poderá ser atualizada
          para refletir alterações nas funcionalidades do
          aplicativo ou nas exigências legais aplicáveis.
        </p>

        <h2 style={{ color: "#047857" }}>10. Contato</h2>

        <p>
          Em caso de dúvidas sobre esta Política de Privacidade,
          entre em contato pelo e-mail:
        </p>

        <p>
          <a
            href="mailto:daianasilvareissantos@gmail.com"
            style={{
              color: "#047857",
              overflowWrap: "anywhere",
            }}
          >
            daianasilvareissantos@gmail.com
          </a>
        </p>

        <hr style={{ margin: "30px 0", borderColor: "#e2e8f0" }} />

        <p style={{ textAlign: "center", color: "#64748b" }}>
          Descarte Certo+ EcoSaúde — UninCor
          <br />
          Três Corações - MG, Brasil
        </p>
      </div>
    </main>
  );
}