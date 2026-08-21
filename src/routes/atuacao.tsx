import { createFileRoute } from "@tanstack/react-router";
import { HeroSpiral, P2Shell } from "@/components/vortice/p2";
import { FRENTES } from "@/content/frentes";

const F = FRENTES.find((f) => f.key === "atuacao")!;
const TITLE = "Atuação — VórticeLab";
const DESCRIPTION =
  "Alta estratégia e engenharia sutil: como a VórticeLab atua em corporações, carreiras e grandes transições, sob absoluta confidencialidade.";

export const Route = createFileRoute("/atuacao")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AtuacaoPage,
});

function AtuacaoPage() {
  return (
    <P2Shell current="atuacao">
      <header className="page-head" style={{ ["--acc" as string]: F.accent }}>
        <HeroSpiral />
        <div className="hero-content">
          <p className="kicker reveal">{F.lead}</p>
          <h1 className="reveal d1">{F.title}</h1>
          <p className="lead reveal d2">{F.line}</p>
        </div>
      </header>

      <section className="prose">
        <p className="section-label reveal">Onde atuamos</p>
        <p className="reveal d1">
          A VórticeLab opera em três frentes independentes: expansão de corporações, gestão de
          carreiras de alta performance e grandes transições de vida. Em cada uma delas, a leitura
          energética entra como camada de precisão sobre o rigor analítico que o cliente já pratica.
        </p>
        <p className="reveal d2">
          Nos ambientes onde o capital e o talento em jogo são elevados — fundações de grandes
          empreendimentos, decisões de expansão internacional ou a véspera de uma janela decisiva de
          contratações e torneios — a leitura e a equalização energética raramente são anunciadas.
          Operam em paralelo à governança e ao rigor operacional, sob o mais estrito sigilo.
        </p>
        <p className="reveal d3">
          Atendimento mediante indicação ou avaliação de compatibilidade.
        </p>
      </section>
    </P2Shell>
  );
}
