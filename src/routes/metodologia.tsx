import { createFileRoute } from "@tanstack/react-router";
import { HeroSpiral, P2Shell } from "@/components/vortice/p2";
import { ETAPAS } from "@/content/etapas";
import { FRENTES } from "@/content/frentes";

const F = FRENTES.find((f) => f.key === "metodologia")!;
const TITLE = "Metodologia — VórticeLab";
const DESCRIPTION =
  "Um protocolo próprio, desenhado para se integrar com absoluta invisibilidade às rotinas operacionais e estratégicas de nossos clientes.";

export const Route = createFileRoute("/metodologia")({
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
  component: MetodologiaPage,
});

function MetodologiaPage() {
  return (
    <P2Shell current="metodologia">
      <header className="page-head" style={{ ["--acc" as string]: F.accent }}>
        <HeroSpiral />
        <div className="hero-content">
          <p className="kicker reveal">{F.lead}</p>
          <h1 className="reveal d1">{F.title}</h1>
          <p className="lead reveal d2">{F.line}</p>
        </div>
      </header>

      <section>
        <p className="section-label reveal">As Etapas do Alinhamento</p>
        <div className="etapas-grid">
          {ETAPAS.map((e, i) => (
            <div className={`etapa reveal d${i + 1}`} key={e.n}>
              <span className="num">{e.n}</span>
              <h3>{e.title}</h3>
              <p>
                {e.parts.map((p, j) =>
                  p.highlight ? <strong key={j}>{p.text}</strong> : <span key={j}>{p.text}</span>,
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="prose">
        <p className="section-label reveal">Confidencialidade</p>
        <p className="reveal d1">
          Todo o trabalho ocorre em paralelo à governança do cliente, sob o mais estrito sigilo. Não
          divulgamos nomes, ativos ou contextos — a discrição é parte do método, não um acessório.
        </p>
      </section>
    </P2Shell>
  );
}
