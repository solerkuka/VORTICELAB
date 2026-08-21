import type { ReactNode } from "react";
import logoAsset from "@/assets/vorticelab-logo.png.asset.json";
import { FRENTES } from "@/content/frentes";
import { Reveal } from "./primitives";

/**
 * Institutional variant of the VórticeLab page.
 * Structural, corporate register: hairline rules, editorial grid, no spirals,
 * no halos, no looping motion. Same copy as the home page.
 */

const WHATSAPP = "https://wa.me/5551999990101";
const EMAIL = "mailto:contato@vorticelab.com.br";

export const INST_NAV = FRENTES.map((f) => ({ title: f.title, url: f.url }));

/* --------------------------------------------------------------- shell */

export function InstBand({
  tone,
  id,
  className = "",
  children,
}: {
  tone: "dark" | "light";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`inst-band ${tone === "dark" ? "inst-dark" : "inst-light"} relative ${className}`}
    >
      {children}
    </section>
  );
}

export function InstWrap({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1140px] px-6 sm:px-10 ${className}`}>{children}</div>;
}

/** Section label in the left column of the editorial grid. */
export function ColumnHead({ label, note }: { label: string; note?: string }) {
  return (
    <div className="border-t border-inst-rule pt-4">
      <p className="m-0 font-mono text-[10.5px] tracking-[0.24em] text-inst-accent uppercase">{label}</p>
      {note ? (
        <p className="m-0 mt-3 max-w-[26ch] font-mono text-[11px] leading-[1.7] tracking-[0.02em] text-inst-muted">
          {note}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------- header */

export function InstHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-inst-rule bg-inst-dark-bg/95 backdrop-blur-[6px]">
      <InstWrap className="flex items-center justify-between gap-6 py-4">
        <a href="#topo" className="flex items-center gap-3 no-underline">
          <img src={logoAsset.url} alt="VórticeLab" className="size-7 opacity-90" />
          <span className="font-display text-[18px] leading-none font-light tracking-[0.03em] text-bone">
            VórticeLab
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {INST_NAV.map((n) => (
            <a
              key={n.title}
              href={n.url}
              className="font-mono text-[11px] tracking-[0.18em] text-bone/65 uppercase no-underline transition-colors duration-200 hover:text-bone"
            >
              {n.title}
            </a>
          ))}
          <a
            href="#contato"
            className="border-b border-ember/60 pb-1 font-mono text-[11px] tracking-[0.18em] text-ember uppercase no-underline transition-colors duration-200 hover:border-ember hover:text-ember-bright"
          >
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="border-b border-ember/60 pb-0.5 font-mono text-[10.5px] tracking-[0.16em] text-ember uppercase no-underline md:hidden"
        >
          Contato
        </a>
      </InstWrap>
    </header>
  );
}

/* ------------------------------------------------------------- abertura */

export function InstHero() {
  return (
    <InstBand tone="dark" id="topo" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <InstWrap>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Reveal>
              <p className="m-0 mb-7 font-mono text-[10.5px] tracking-[0.26em] text-inst-accent uppercase">
                Arquitetura energética · Inteligência estratégica
              </p>
              <h1 className="m-0 max-w-[16ch] font-display text-[clamp(34px,6vw,66px)] leading-[1.04] font-light text-bone">
                O próximo movimento já começou.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="m-0 mt-8 max-w-[62ch] text-[16px] leading-[1.8] text-bone/80 sm:text-[17px]">
                Unimos a sabedoria das tecnologias ancestrais à dinâmica dos negócios de alta performance. Uma
                consultoria exclusiva para atletas, empresários e investidores que exigem precisão em cada tomada de
                decisão, seja na expansão de corporações, na gestão de carreiras ou em grandes transições de vida.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center border border-ember bg-ember px-8 py-3.5 font-mono text-[12px] font-medium tracking-[0.12em] text-ink uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-ember"
                >
                  Fale conosco
                </a>
                <p className="m-0 max-w-[34ch] font-mono text-[10.5px] leading-[1.6] tracking-[0.04em] text-bone/45">
                  Atendimento mediante indicação ou avaliação de compatibilidade.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <aside className="h-full border-l border-inst-rule pl-8 lg:pl-10">
              <p className="m-0 font-mono text-[10.5px] tracking-[0.24em] text-bone/45 uppercase">Posicionamento</p>
              <p className="m-0 mt-5 max-w-[30ch] font-display text-[20px] leading-[1.5] font-light text-bone/90">
                A engenharia sutil por trás das decisões que moldam o futuro.
              </p>
              <p className="m-0 mt-8 max-w-[34ch] font-mono text-[11.5px] leading-[1.8] text-bone/60">
                VórticeLab: arquitetura energética e inteligência estratégica para quem molda o topo do mercado.
              </p>
            </aside>
          </Reveal>
        </div>
      </InstWrap>
    </InstBand>
  );
}

/* ------------------------------------------------------------ indicadores */

const INDICADORES = [
  { k: "Confidencialidade", v: "Integral", d: "Operação de bastidores, sob sigilo contratual." },
  { k: "Acesso", v: "Por indicação", d: "Avaliação prévia de compatibilidade." },
  { k: "Escopo", v: "Três frentes", d: "Atuação, metodologia e editorial." },
  { k: "Base", v: "Porto Alegre", d: "Atendimento nacional e internacional." },
];

export function InstIndicadores() {
  return (
    <InstBand tone="dark" className="border-t border-inst-rule py-12 sm:py-16">
      <InstWrap>
        <div className="grid grid-cols-1 gap-px bg-inst-rule sm:grid-cols-2 lg:grid-cols-4">
          {INDICADORES.map((i, n) => (
            <Reveal key={i.k} delay={0.05 * n}>
              <div className="h-full bg-inst-dark-bg px-6 py-7">
                <p className="m-0 font-mono text-[10px] tracking-[0.22em] text-bone/45 uppercase">{i.k}</p>
                <p className="m-0 mt-3 font-display text-[24px] leading-tight font-light text-bone">{i.v}</p>
                <p className="m-0 mt-3 max-w-[26ch] text-[13.5px] leading-[1.7] text-bone/55">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </InstWrap>
    </InstBand>
  );
}

/* ----------------------------------------------------------- equilíbrio */

export function InstEquilibrio() {
  return (
    <InstBand tone="light" id="equilibrio" className="py-20 sm:py-28">
      <InstWrap>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <ColumnHead label="Equilíbrio Energético" note="Métrica reconhecida pelo próprio mercado." />
          </Reveal>

          <div className="border-t border-inst-rule pt-4">
            <Reveal delay={0.06}>
              <p className="m-0 max-w-[64ch] font-display text-[clamp(20px,2.4vw,27px)] leading-[1.55] font-light text-inst-fg">
                O que começa como o segredo de bastidores de grandes projetos — o mapeamento bioenergético do terroir
                que consagra as vinícolas mais valiosas do mundo, ou os milenares critérios de inteligência energética
                que orientam a engenharia e a alta arquitetura corporativa em Dubai, na China e no Japão — consolida-se,
                com o tempo, em métrica reconhecida pelo próprio mercado.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-px bg-inst-rule md:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="h-full bg-inst-light-bg px-0 py-7 md:px-7">
                  <p className="m-0 mb-3 font-mono text-[10px] tracking-[0.22em] text-inst-accent uppercase">
                    Prática e rigor técnico
                  </p>
                  <p className="m-0 max-w-[46ch] text-[15px] leading-[1.85] text-inst-muted">
                    O equilíbrio energético e a radiestesia integram práticas milenares, difundidas em diferentes
                    culturas, que hoje se traduzem no rigor técnico de auditorias de campo eletromagnético em
                    certificações imobiliárias internacionais e em protocolos oficiais que blindam comitês olímpicos,
                    clubes centenários e figuras de grande visibilidade pública.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="h-full bg-inst-light-bg px-0 py-7 md:px-7">
                  <p className="m-0 mb-3 font-mono text-[10px] tracking-[0.22em] text-inst-accent uppercase">
                    Discrição operacional
                  </p>
                  <p className="m-0 max-w-[46ch] text-[15px] leading-[1.85] text-inst-muted">
                    Nos ambientes onde o capital e o talento em jogo são elevados — fundações de grandes
                    empreendimentos, decisões de expansão internacional ou a véspera de uma janela decisiva de
                    contratações e torneios — a leitura e a equalização energética raramente são anunciadas. Operam em
                    paralelo à governança e ao rigor operacional, sob o mais estrito sigilo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </InstWrap>
    </InstBand>
  );
}

/* -------------------------------------------------------------- citação */

export function InstQuote({ tone, children }: { tone: "dark" | "light"; children: ReactNode }) {
  return (
    <InstBand tone={tone} className="border-y border-inst-rule py-16 sm:py-20">
      <InstWrap>
        <Reveal>
          <figure className="m-0 mx-auto max-w-[38ch] text-center">
            <span aria-hidden="true" className="mx-auto mb-7 block h-px w-12 bg-inst-accent" />
            <blockquote className="m-0 font-display text-[clamp(23px,3.4vw,38px)] leading-[1.35] font-light text-inst-fg">
              {children}
            </blockquote>
          </figure>
        </Reveal>
      </InstWrap>
    </InstBand>
  );
}

/* -------------------------------------------------------------- frentes */

export function InstFrentes() {
  return (
    <InstBand tone="dark" id="frentes" className="py-20 sm:py-28">
      <InstWrap>
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-inst-rule pb-6 sm:flex-row sm:items-end">
            <h2 className="m-0 font-display text-[clamp(26px,4vw,40px)] leading-tight font-light text-bone">
              Frentes de trabalho
            </h2>
            <p className="m-0 max-w-[40ch] font-mono text-[11px] leading-[1.7] tracking-[0.04em] text-bone/50">
              Cada frente opera de forma independente, com seu próprio corpo técnico e protocolo.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-inst-rule lg:grid-cols-3">
          {FRENTES.map((f, i) => (
            <Reveal key={f.key} delay={0.06 * i}>
              <a
                href={f.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col bg-inst-dark-bg px-7 py-9 no-underline transition-colors duration-250 hover:bg-ink-raise focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] text-bone/40 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mt-4 font-display text-[26px] leading-tight font-light text-bone">{f.title}</h3>
                <p className="m-0 mt-3 font-mono text-[11px] leading-[1.7] tracking-[0.04em] text-inst-accent">
                  {f.lead}
                </p>
                <p className="m-0 mt-5 flex-1 text-[14.5px] leading-[1.8] text-bone/70">{f.line}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-bone/75 uppercase">
                  <span className="border-b border-bone/25 pb-1 transition-colors duration-250 group-hover:border-ember group-hover:text-ember">
                    Acessar
                  </span>
                  <span aria-hidden="true" className="transition-transform duration-250 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </InstWrap>
    </InstBand>
  );
}

/* --------------------------------------------------------------- etapas */

const INST_ETAPAS = [
  {
    n: "01",
    title: "Diagnóstico Inicial de Cenário",
    body: "Avaliação restrita das dinâmicas energéticas atuais do ativo, projeto ou liderança para identificação de pontos de fricção invisíveis.",
  },
  {
    n: "02",
    title: "Equalização e Modulação",
    body: "Aplicação dos protocolos customizados de radiestesia e arquitetura energética em paralelo às decisões de governança do cliente.",
  },
  {
    n: "03",
    title: "Sustentação e Monitoramento",
    body: "Suporte contínuo de bastidores para assegurar a estabilidade do padrão de alta performance e a mitigação de riscos em momentos críticos.",
  },
];

export function InstEtapas() {
  return (
    <InstBand tone="light" id="etapas" className="py-20 sm:py-28">
      <InstWrap>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <ColumnHead label="As Etapas do Alinhamento" note="Sequência aplicada em todos os contratos." />
          </Reveal>

          <div>
            {INST_ETAPAS.map((e, i) => (
              <Reveal key={e.n} delay={0.06 * i}>
                <div className="grid grid-cols-[46px_minmax(0,1fr)] gap-6 border-t border-inst-rule py-8 last:border-b">
                  <span className="font-mono text-[12px] tracking-[0.14em] text-inst-accent">{e.n}</span>
                  <div>
                    <h3 className="m-0 font-display text-[21px] leading-tight font-normal text-inst-fg">{e.title}</h3>
                    <p className="m-0 mt-3 max-w-[62ch] text-[15px] leading-[1.85] text-inst-muted">{e.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </InstWrap>
    </InstBand>
  );
}

/* -------------------------------------------------------------- contato */

export function InstContato() {
  return (
    <InstBand tone="dark" id="contato" className="py-20 sm:py-28">
      <InstWrap>
        <div className="grid grid-cols-1 gap-12 border-t border-inst-rule pt-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
          <Reveal>
            <p className="m-0 font-mono text-[10.5px] tracking-[0.24em] text-inst-accent uppercase">Contato</p>
            <h2 className="m-0 mt-5 max-w-[16ch] font-display text-[clamp(30px,4.6vw,48px)] leading-[1.1] font-light text-bone">
              Fale conosco.
            </h2>
            <p className="m-0 mt-6 max-w-[46ch] text-[15.5px] leading-[1.8] text-bone/70">
              Atendimento mediante indicação ou avaliação de compatibilidade. O primeiro contato é conduzido em caráter
              reservado.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="divide-y divide-inst-rule border-y border-inst-rule">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-baseline justify-between gap-6 py-6 no-underline"
              >
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-bone/45 uppercase">WhatsApp</span>
                <span className="font-display text-[19px] font-light text-bone transition-colors duration-200 group-hover:text-ember">
                  (51) 99999-0101
                </span>
              </a>
              <a href={EMAIL} className="group flex items-baseline justify-between gap-6 py-6 no-underline">
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-bone/45 uppercase">E-mail</span>
                <span className="font-mono text-[13.5px] text-bone transition-colors duration-200 group-hover:text-ember">
                  contato@vorticelab.com.br
                </span>
              </a>
              <div className="flex items-baseline justify-between gap-6 py-6">
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-bone/45 uppercase">Base</span>
                <span className="font-mono text-[13.5px] text-bone/80">Porto Alegre · 51°</span>
              </div>
            </div>
          </Reveal>
        </div>
      </InstWrap>
    </InstBand>
  );
}

export function InstFooter() {
  return (
    <footer className="inst-band inst-dark border-t border-inst-rule">
      <InstWrap className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <span className="flex items-center gap-3">
          <img src={logoAsset.url} alt="" aria-hidden="true" className="size-5 opacity-70" />
          <span className="font-display text-[15px] font-light tracking-[0.03em] text-bone/85">VórticeLab</span>
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.18em] text-bone/45 uppercase">
          © {new Date().getFullYear()} VórticeLab · Todos os direitos reservados
        </span>
      </InstWrap>
    </footer>
  );
}
