import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import logo from "@/assets/vorticelab-logo.png.asset.json";
import { FRENTES } from "@/content/frentes";

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
        <g key={c} className={`spin spin-${i}`} style={{ transformOrigin: "200px 200px" }}>
          <path
            d={spiralPath(200, 200, 3.2 + i * 0.3, 6, 160 - i * 20, 200, i * 1.1)}
            stroke={c}
            strokeWidth={i === 0 ? 2 : 1}
            fill="none"
            opacity={i === 0 ? 0.5 : 0.28}
          />
        </g>
      ))}
    </svg>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Pagina2() {
  const ref = useReveal();

  return (
    <div className="p2" ref={ref}>
      <style>{CSS}</style>
      <div className="wrap">
        <nav>
          <a className="brand" href="#top">
            <img src={logo.url} alt="VórticeLab" />
            <span className="wordmark">
              Vórtice<i>Lab</i>
            </span>
          </a>
          <div className="nav-links">
            {FRENTES.map((f) => (
              <a key={f.key} className="nav-link" href={f.url}>
                {f.title}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contato">
            Fale conosco
          </a>
        </nav>

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
              <a className={`frente reveal d${i + 1}`} href={f.url} key={f.key}>
                <h3>{f.title}</h3>
                <p className="subhead">{f.lead}</p>
                <p>{f.line}</p>
                <span className="go">Acessar →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contato" id="contato">
          <p className="section-label reveal" style={{ textAlign: "center" }}>
            Contato
          </p>
          <h2 className="reveal d1">Fale conosco.</h2>
          <div className="reveal d2">
            <a className="btn-primary" href="mailto:contato@vorticelab.com.br">
              contato@vorticelab.com.br
            </a>
            <p className="fineprint">
              Atendimento mediante indicação ou avaliação de compatibilidade.
            </p>
          </div>
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

.p2 nav{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:22px 0;flex-wrap:wrap;}
.p2 .brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none;}
.p2 .brand img{width:38px;height:38px;object-fit:contain;filter:drop-shadow(0 0 12px rgba(201,138,75,0.35));transition:transform .5s ease;}
.p2 .brand:hover img{transform:rotate(25deg);}
.p2 .wordmark{font-family:'Fraunces', serif;font-weight:400;font-size:21px;letter-spacing:0.02em;}
.p2 .wordmark i{color:var(--ember);font-style:italic;}
.p2 .nav-links{display:flex;gap:26px;}
.p2 .nav-link{position:relative;font-family:'IBM Plex Mono', monospace;font-size:11.5px;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;color:rgba(237,227,208,0.7);padding-bottom:4px;transition:color .25s ease;}
.p2 .nav-link::after{content:'';position:absolute;left:0;bottom:0;height:1px;width:100%;background:var(--ember);transform:scaleX(0);transform-origin:right;transition:transform .3s ease;}
.p2 .nav-link:hover{color:var(--bone);}
.p2 .nav-link:hover::after{transform:scaleX(1);transform-origin:left;}
.p2 .nav-cta{font-family:'IBM Plex Mono', monospace;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;border:1px solid rgba(237,227,208,0.35);padding:9px 18px;border-radius:30px;text-decoration:none;transition:all .25s ease;}
.p2 .nav-cta:hover{background:var(--ember);border-color:var(--ember);color:var(--ink);}

.p2 .hero{position:relative;padding:64px 0 88px;overflow:hidden;}
.p2 .hero-bg{position:absolute;top:-60px;right:-120px;width:520px;height:520px;opacity:.5;z-index:0;}
.p2 .spin{animation:p2spin 90s linear infinite;}
.p2 .spin-1{animation-duration:140s;animation-direction:reverse;}
.p2 .spin-2{animation-duration:200s;}
@keyframes p2spin{to{transform:rotate(360deg);}}
.p2 .hero-content{position:relative;z-index:1;max-width:640px;}
.p2 .hero h1{font-family:'Fraunces', serif;font-weight:300;font-size:clamp(38px,6vw,58px);line-height:1.08;margin:0 0 22px;color:var(--bone);}
.p2 .hero p.tagline{font-size:16px;color:rgba(237,227,208,0.6);margin:0 0 14px;font-family:'IBM Plex Mono', monospace;letter-spacing:0.02em;}
.p2 .hero p.body{font-size:17px;max-width:50ch;color:rgba(237,227,208,0.82);margin:0 0 22px;}
.p2 .hero p.closing{font-family:'Fraunces', serif;font-style:italic;font-weight:300;font-size:18px;color:var(--ember);max-width:40ch;margin:0 0 30px;}
.p2 .btn-primary{display:inline-block;background:var(--ember);color:var(--ink);font-family:'IBM Plex Mono', monospace;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;padding:14px 30px;border-radius:30px;text-decoration:none;font-weight:500;transition:transform .25s ease, box-shadow .25s ease;}
.p2 .btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px -12px rgba(201,138,75,0.8);}
.p2 .fineprint{font-family:'IBM Plex Mono', monospace;font-size:11.5px;letter-spacing:0.04em;color:rgba(237,227,208,0.4);margin:16px 0 0;}

.p2 section{padding:60px 0;border-top:1px solid rgba(237,227,208,0.08);}
.p2 .section-label{font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(237,227,208,0.45);margin:0 0 28px;}
.p2 .legit p.lead{font-family:'Fraunces', serif;font-weight:300;font-style:italic;font-size:clamp(21px,2.6vw,27px);line-height:1.55;color:var(--bone);max-width:52ch;margin:0 0 26px;}
.p2 .legit p.support{font-size:16px;line-height:1.75;color:rgba(237,227,208,0.7);max-width:58ch;margin:0 0 18px;}
.p2 .legit em{color:var(--ember);font-style:italic;}

.p2 .frentes-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.p2 .frente{position:relative;display:block;text-decoration:none;overflow:hidden;border:1px solid rgba(237,227,208,0.12);border-radius:10px;padding:28px 24px;background:linear-gradient(160deg, rgba(43,74,61,0.14), rgba(18,24,26,0));transition:border-color .3s ease, transform .3s ease, background .3s ease;}
.p2 .frente::after{content:'';position:absolute;inset:auto -40% -60% auto;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle, rgba(201,138,75,0.18), transparent 70%);opacity:0;transition:opacity .35s ease, transform .6s ease;}
.p2 .frente:hover{border-color:var(--ember);transform:translateY(-4px);}
.p2 .frente:hover::after{opacity:1;transform:translate(-20px,-20px);}
.p2 .frente h3{font-family:'Fraunces', serif;font-weight:400;font-size:21px;margin:0 0 10px;color:var(--ember);}
.p2 .frente p.subhead{font-family:'Fraunces', serif;font-style:italic;font-weight:300;font-size:15px;color:var(--bone);opacity:.85;margin:0 0 14px;}
.p2 .frente p{font-size:14.5px;color:rgba(237,227,208,0.68);margin:0;}
.p2 .frente .go{display:inline-block;margin-top:18px;font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ember);transition:transform .25s ease;}
.p2 .frente:hover .go{transform:translateX(5px);}

.p2 .contato{text-align:center;padding:90px 0 100px;}
.p2 .contato h2{font-family:'Fraunces', serif;font-weight:300;font-size:clamp(30px,5vw,44px);margin:0 0 26px;}
.p2 footer{padding:32px 0 50px;display:flex;justify-content:space-between;align-items:center;opacity:.4;font-family:'IBM Plex Mono', monospace;font-size:11px;letter-spacing:0.12em;border-top:1px solid rgba(237,227,208,0.08);}

.p2 .reveal{opacity:0;transform:translateY(16px);transition:opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1);}
.p2 .reveal.in{opacity:1;transform:none;}
.p2 .d1{transition-delay:.08s;} .p2 .d2{transition-delay:.16s;}
.p2 .d3{transition-delay:.24s;} .p2 .d4{transition-delay:.32s;}

@media (max-width:760px){
  .p2 nav{gap:14px;padding:18px 0;}
  .p2 .nav-cta{display:none;}
  .p2 .nav-links{order:3;width:100%;gap:0;justify-content:space-between;border-top:1px solid rgba(237,227,208,0.1);padding-top:12px;}
  .p2 .frentes-grid{grid-template-columns:1fr;}
  .p2 .hero-bg{display:block;top:auto;bottom:-140px;right:-160px;width:400px;height:400px;opacity:.28;}
  .p2 .hero{padding:36px 0 64px;}
}
@media (prefers-reduced-motion: reduce){
  .p2 .spin{animation:none;}
  .p2 .reveal{opacity:1;transform:none;transition:none;}
}
`;
