import { Link, createFileRoute } from "@tanstack/react-router";
import { HeroSpiral, P2Shell } from "@/components/vortice/p2";
import { FRENTES } from "@/content/frentes";

const TITLE = "VórticeLab — Arquitetura energética e inteligência estratégica";
const DESCRIPTION =
  "Consultoria exclusiva para atletas, empresários e investidores: alinhamento de parcerias, blindagem de lideranças e arquitetura de expansão, sob absoluta confidencialidade.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <P2Shell>
      <header className="hero" id="top">
        <HeroSpiral />
        <div className="hero-content">
          <h1 className="reveal">O próximo movimento já começou.</h1>
          <p className="tagline reveal d1">
            VórticeLab: Arquitetura energética e inteligência estratégica para quem molda o topo do
            mercado.
          </p>
          <p className="body reveal d2">
            Unimos a sabedoria das tecnologias ancestrais à dinâmica dos negócios de alta
            performance. Uma consultoria exclusiva para atletas, empresários e investidores que
            exigem precisão em cada tomada de decisão, seja na expansão de corporações, na gestão de
            carreiras ou em grandes transições de vida.
          </p>
          <p className="closing reveal d3">
            A engenharia sutil por trás das decisões que moldam o futuro.
          </p>
          <div className="reveal d4">
            <a className="btn-primary" href="#contato">
              Fale conosco
            </a>
            <p className="fineprint">
              Atendimento mediante indicação ou avaliação de compatibilidade.
            </p>
          </div>
        </div>
      </header>

      <section className="legit">
        <p className="section-label reveal">Equilíbrio Energético</p>
        <p className="lead reveal d1">
          O que começa como o segredo de bastidores de grandes projetos — o mapeamento bioenergético
          do terroir que consagra as vinícolas mais valiosas do mundo, ou os milenares critérios de
          inteligência energética que orientam a engenharia e a alta arquitetura corporativa em
          Dubai, na China e no Japão — consolida-se, com o tempo, em{" "}
          <em>métrica reconhecida pelo próprio mercado</em>.
        </p>
        <p className="support reveal d2">
          O equilíbrio energético e a radiestesia integram práticas milenares, difundidas em
          diferentes culturas, que hoje se traduzem no rigor técnico de auditorias de campo
          eletromagnético em certificações imobiliárias internacionais e em protocolos oficiais que
          blindam comitês olímpicos, clubes centenários e figuras de grande visibilidade pública.
        </p>
        <p className="support reveal d3">
          Nos ambientes onde o capital e o talento em jogo são elevados — fundações de grandes
          empreendimentos, decisões de expansão internacional ou a véspera de uma janela decisiva de
          contratações e torneios — a leitura e a equalização energética raramente são anunciadas.
          Operam em paralelo à governança e ao rigor operacional, sob o mais estrito sigilo, e
          tendem a aparecer com mais força justamente quando as ferramentas tradicionais já não
          sustentam sozinhas a decisão.
        </p>
      </section>

      <section className="frentes">
        <p className="section-label reveal">Frentes</p>
        <div className="frentes-grid">
          {FRENTES.map((f, i) => (
            <Link
              className={`frente reveal d${i + 1}`}
              to={f.url}
              key={f.key}
              style={{ ["--acc" as string]: f.accent }}
            >
              <h3>{f.title}</h3>
              <p className="subhead">{f.lead}</p>
              <p>{f.line}</p>
              <span className="go">Acessar →</span>
            </Link>
          ))}
        </div>
      </section>
    </P2Shell>
  );
}
