import { createFileRoute } from "@tanstack/react-router";

const TITLE = "VórticeLab — Arquitetura energética e inteligência estratégica";
const DESCRIPTION =
  "Consultoria exclusiva para atletas, empresários e investidores: alinhamento de parcerias, blindagem de lideranças e arquitetura de expansão, sob absoluta confidencialidade.";

export const Route = createFileRoute("/pagina2")({
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
  component: Pagina2,
});

function spiralPath(
  cx: number,
  cy: number,
  turns: number,
  startR: number,
  endR: number,
  points: number,
  rot = 0,
) {
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const angle = t * turns * Math.PI * 2 + rot;
    const r = startR + (endR - startR) * t;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.94;
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  return d;
}

const SPIRAL_COLORS = ["#c98a4b", "#2b4a3d", "#ede3d0"];

function HeroSpiral() {
  return (
    <svg className="hero-bg" viewBox="0 0 400 400" aria-hidden="true">
      {SPIRAL_COLORS.map((c, i) => (
        <path
          key={c}
          d={spiralPath(200, 200, 3.2 + i * 0.3, 6, 160 - i * 20, 200, i * 1.1)}
          stroke={c}
          strokeWidth={i === 0 ? 2 : 1}
          fill="none"
          opacity={i === 0 ? 0.5 : 0.28}
        />
      ))}
    </svg>
  );
}

const ATUACAO = [
  {
    title: "Alinhamento de Parcerias e Contratos",
    subhead: "Mitigação de riscos em sociedades, fusões e alianças de longo prazo.",
    body: "Diagnóstico de compatibilidade bioenergética e análise de timing estratégico antes de movimentos que definem o futuro do capital: entrada de novos sócios, captação de investidores, fusões corporativas ou assinaturas de contratos de transferência de alto valor. A certeza do alinhamento antes do aperto de mãos.",
  },
  {
    title: "Blindagem de Ativos e Lideranças",
    subhead: "Preservação energética e estabilidade para quem opera sob extrema pressão.",
    body: "Protocolos customizados de equalização e proteção para figuras de proa — atletas, empresárias, grandes agentes e executivos — que carregam o peso estratégico e a visibilidade de marcas ou delegações. A sustentação necessária para manter o foco e a performance intactos sob exposição constante.",
  },
  {
    title: "Arquitetura de Expansão",
    subhead: "A inteligência sutil por trás da ocupação de novos espaços e mudanças de rota.",
    body: "Auditoria bioenergética de terrenos e imóveis antes de incorporações imobiliárias, aberturas de redes de varejo ou plantas industriais. Este pilar também orienta transições complexas de carreira ou de posicionamento de mercado, apontando o solo fértil e o momento exato para o crescimento quando os métodos tradicionais já não bastam.",
  },
];

const ETAPAS = [
  {
    num: "01",
    title: "Diagnóstico Inicial de Cenário",
    body: "Avaliação restrita das dinâmicas energéticas atuais do ativo, projeto ou liderança para identificação de pontos de fricção invisíveis.",
  },
  {
    num: "02",
    title: "Equalização e Modulação",
    body: "Aplicação dos protocolos customizados de radiestesia e arquitetura energética em paralelo às decisões de governança do cliente.",
  },
  {
    num: "03",
    title: "Sustentação e Monitoramento",
    body: "Suporte contínuo de bastidores para assegurar a estabilidade do padrão de alta performance e a mitigação de riscos em momentos críticos.",
  },
];

const EDITORIAL = [
  {
    title: "Quando o rigor encontra o invisível",
    body: "Como instituições de alta exigência incorporam leitura energética ao próprio método.",
  },
  {
    title: "Decisões de expansão e o momento certo",
    body: "O que muda quando o timing é lido, não apenas calculado.",
  },
  {
    title: "Instituições centenárias, método atual",
    body: "A trajetória de práticas antigas até virarem métrica reconhecida pelo mercado.",
  },
];

function Pagina2() {
  return (
    <div className="p2">
      <style>{CSS}</style>
      <div className="wrap">
        <nav>
          <span className="wordmark">VórticeLab</span>
          <a className="nav-cta" href="#contato">
            Fale conosco
          </a>
        </nav>

        <header className="hero">
          <HeroSpiral />
          <div className="hero-content">
            <h1>O próximo movimento já começou.</h1>
            <p className="tagline">
              VórticeLab: Arquitetura energética e inteligência estratégica para quem molda o topo do
              mercado.
            </p>
            <p className="body">
              Unimos a sabedoria das tecnologias ancestrais à dinâmica dos negócios de alta
              performance. Uma consultoria exclusiva para atletas, empresários e investidores que
              exigem precisão em cada tomada de decisão, seja na expansão de corporações, na gestão de
              carreiras ou em grandes transições de vida.
            </p>
            <p className="closing">
              A engenharia sutil por trás das decisões que moldam o futuro.
            </p>
            <a className="btn-primary" href="#contato">
              Fale conosco
            </a>
          </div>
        </header>

        <section className="legit">
          <p className="section-label">Equilíbrio Energético</p>
          <p className="lead">
            O que começa como o segredo de bastidores de grandes projetos — o mapeamento bioenergético
            do terroir que consagra as vinícolas mais valiosas do mundo, ou os milenares critérios de
            inteligência energética que orientam a engenharia e a alta arquitetura corporativa em
            Dubai, na China e no Japão — consolida-se, com o tempo, em{" "}
            <em>métrica reconhecida pelo próprio mercado</em>.
          </p>
          <p className="support">
            O equilíbrio energético e a radiestesia integram práticas milenares, difundidas em
            diferentes culturas, que hoje se traduzem no rigor técnico de auditorias de campo
            eletromagnético em certificações imobiliárias internacionais e em protocolos oficiais que
            blindam comitês olímpicos, clubes centenários e figuras de grande visibilidade pública.
          </p>
          <p className="support">
            Nos ambientes onde o capital e o talento em jogo são elevados — fundações de grandes
            empreendimentos, decisões de expansão internacional ou a véspera de uma janela decisiva de
            contratações e torneios — a leitura e a equalização energética raramente são anunciadas.
            Operam em paralelo à governança e ao rigor operacional, sob o mais estrito sigilo, e
            tendem a aparecer com mais força justamente quando as ferramentas tradicionais já não
            sustentam sozinhas a decisão.
          </p>
        </section>

        <section>
          <p className="section-label">Atuação</p>
          <p className="atuacao-intro">
            A VórticeLab opera na intersecção entre a alta estratégia e a engenharia sutil, entregando
            clareza e precisão em três pilares independentes:
          </p>
          <div className="atuacao-grid">
            {ATUACAO.map((item) => (
              <article className="atuacao-item" key={item.title}>
                <h3>{item.title}</h3>
                <p className="subhead">{item.subhead}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="section-label">Metodologia e Protocolo de Confidencialidade</p>
          <div className="metodo">
            <p>
              A atuação da VórticeLab baseia-se em um protocolo próprio, desenhado para se integrar com
              absoluta invisibilidade às rotinas operacionais e estratégicas de nossos clientes, onde
              cada etapa é conduzida sob o mais estrito rigor analítico e técnico.
            </p>
            <p>
              Por diretriz institucional e respeito aos negócios e carreiras que blindamos
              energeticamente, a VórticeLab adota uma política de absoluta confidencialidade onde
              nenhuma informação, contrato, diagnóstico ou alinhamento é divulgado, referenciado ou
              utilizado como portfólio. Por esse motivo não publicamos depoimentos, não divulgamos
              logotipos de parceiros e não expomos estudos de caso.
            </p>
            <p className="small">
              Entendemos que a privacidade da sua prática é, também, a sua maior proteção competitiva.
              Por isso, aceitamos um número limitado de clientes por ciclo, mediante avaliação de
              compatibilidade.
            </p>
          </div>

          <p className="etapas-label">As Etapas do Alinhamento</p>
          <div className="etapas-list">
            {ETAPAS.map((etapa) => (
              <div className="etapa" key={etapa.num}>
                <span className="num">{etapa.num}</span>
                <h4>{etapa.title}</h4>
                <p>{etapa.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="section-label">Editorial</p>
          <div className="editorial-grid">
            {EDITORIAL.map((card) => (
              <article className="editorial-card" key={card.title}>
                <span className="tag">Por VórticeLab</span>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contato" id="contato">
          <p className="section-label" style={{ textAlign: "center" }}>
            Contato
          </p>
          <h2>Fale conosco.</h2>
          <a className="btn-primary" href="mailto:contato@vorticelab.com.br">
            contato@vorticelab.com.br
          </a>
          <p className="fineprint">
            Atendimento mediante indicação ou avaliação de compatibilidade.
          </p>
        </section>

        <footer>
          <span>VórticeLab</span>
          <span>51° · Porto Alegre</span>
        </footer>
      </div>
    </div>
  );
}

const CSS = `
.p2{
  --ink:#12181a; --moss:#2b4a3d; --ember:#c98a4b; --bone:#ede3d0;
  background:var(--ink); color:var(--bone);
  font-family:'Manrope', sans-serif; font-weight:300; line-height:1.65;
  min-height:100vh;
}
.p2 *{box-sizing:border-box;}
.p2 a{color:inherit;}
.p2 .wrap{max-width:1040px;margin:0 auto;padding:0 28px;}
.p2 nav{display:flex;justify-content:space-between;align-items:center;padding:26px 0;}
.p2 .wordmark{font-family:'Fraunces', serif;font-style:italic;font-weight:400;font-size:19px;letter-spacing:0.02em;}
.p2 .nav-cta{font-family:'IBM Plex Mono', monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;border:1px solid rgba(237,227,208,0.35);padding:9px 18px;border-radius:30px;text-decoration:none;transition:all .25s ease;}
.p2 .nav-cta:hover{background:var(--ember);border-color:var(--ember);color:var(--ink);}
.p2 .hero{position:relative;padding:70px 0 90px;overflow:hidden;}
.p2 .hero-bg{position:absolute;top:-60px;right:-120px;width:520px;height:520px;opacity:.5;z-index:0;}
.p2 .hero-content{position:relative;z-index:1;max-width:640px;}
.p2 .hero h1{font-family:'Fraunces', serif;font-weight:300;font-size:clamp(38px,6vw,58px);line-height:1.08;margin:0 0 22px;color:var(--bone);}
.p2 .hero p.tagline{font-size:16px;color:rgba(237,227,208,0.6);margin:0 0 14px;font-family:'IBM Plex Mono', monospace;letter-spacing:0.02em;}
.p2 .hero p.body{font-size:17px;max-width:50ch;color:rgba(237,227,208,0.82);margin:0 0 22px;}
.p2 .hero p.closing{font-family:'Fraunces', serif;font-style:italic;font-weight:300;font-size:18px;color:var(--ember);max-width:40ch;margin:0 0 34px;}
.p2 .btn-primary{display:inline-block;background:var(--ember);color:var(--ink);font-family:'IBM Plex Mono', monospace;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;padding:14px 30px;border-radius:30px;text-decoration:none;font-weight:500;transition:transform .2s ease;}
.p2 .btn-primary:hover{transform:translateY(-2px);}
.p2 section{padding:60px 0;border-top:1px solid rgba(237,227,208,0.08);}
.p2 .section-label{font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(237,227,208,0.45);margin:0 0 28px;}
.p2 .legit p.lead{font-family:'Fraunces', serif;font-weight:300;font-style:italic;font-size:clamp(21px,2.6vw,27px);line-height:1.55;color:var(--bone);max-width:52ch;margin:0 0 26px;}
.p2 .legit p.support{font-size:16px;line-height:1.75;color:rgba(237,227,208,0.7);max-width:58ch;margin:0 0 18px;}
.p2 .legit em{color:var(--ember);font-style:italic;}
.p2 .atuacao-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;}
.p2 .atuacao-intro{font-size:16px;max-width:62ch;color:rgba(237,227,208,0.75);margin:0 0 40px;}
.p2 .atuacao-item h3{font-family:'Fraunces', serif;font-weight:400;font-size:21px;margin:0 0 10px;color:var(--ember);}
.p2 .atuacao-item p.subhead{font-family:'Fraunces', serif;font-style:italic;font-weight:300;font-size:15px;color:var(--bone);opacity:.85;margin:0 0 14px;}
.p2 .atuacao-item p{font-size:15px;color:rgba(237,227,208,0.7);margin:0;}
.p2 .metodo{background:rgba(43,74,61,0.15);border:1px solid rgba(43,74,61,0.4);border-radius:10px;padding:38px 40px;}
.p2 .metodo p{font-size:16px;max-width:58ch;color:rgba(237,227,208,0.85);margin:0;}
.p2 .metodo p.small{font-family:'IBM Plex Mono', monospace;font-size:12px;letter-spacing:0.04em;color:rgba(237,227,208,0.45);margin-top:16px;}
.p2 .metodo p + p{margin-top:16px;}
.p2 .etapas-label{font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ember);margin:44px 0 24px;}
.p2 .etapas-list{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
.p2 .etapa .num{font-family:'IBM Plex Mono', monospace;font-size:12px;color:var(--moss);display:block;margin-bottom:10px;}
.p2 .etapa h4{font-family:'Fraunces', serif;font-weight:400;font-size:18px;margin:0 0 8px;color:var(--bone);}
.p2 .etapa p{font-size:14px;color:rgba(237,227,208,0.65);margin:0;}
.p2 .editorial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.p2 .editorial-card{border:1px solid rgba(237,227,208,0.12);border-radius:8px;padding:26px 22px;transition:border-color .25s ease;}
.p2 .editorial-card:hover{border-color:var(--ember);}
.p2 .editorial-card .tag{font-family:'IBM Plex Mono', monospace;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:var(--moss);background:rgba(43,74,61,0.35);display:inline-block;padding:3px 10px;border-radius:20px;margin-bottom:16px;}
.p2 .editorial-card h4{font-family:'Fraunces', serif;font-weight:400;font-size:18px;line-height:1.3;margin:0 0 10px;}
.p2 .editorial-card p{font-size:13px;color:rgba(237,227,208,0.55);margin:0;}
.p2 .contato{text-align:center;padding:90px 0 100px;}
.p2 .contato h2{font-family:'Fraunces', serif;font-weight:300;font-size:clamp(30px,5vw,44px);margin:0 0 26px;}
.p2 .contato .fineprint{font-family:'IBM Plex Mono', monospace;font-size:12px;letter-spacing:0.04em;color:rgba(237,227,208,0.4);margin-top:22px;}
.p2 footer{padding:32px 0 50px;display:flex;justify-content:space-between;align-items:center;opacity:.4;font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.12em;border-top:1px solid rgba(237,227,208,0.08);}
@media (max-width:760px){
  .p2 .atuacao-grid,.p2 .editorial-grid,.p2 .etapas-list{grid-template-columns:1fr;}
  .p2 .hero-bg{display:none;}
  .p2 .metodo{padding:28px 22px;}
}
`;
