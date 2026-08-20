import { FRENTES } from "@/content/frentes";
import logoAsset from "@/assets/vorticelab-logo.png.asset.json";
import { Icon } from "./icons";
import { Particles, QuoteField, Rings, SpiralCluster, WindField } from "./field";
import { Band, Highlight, HighlightBox, Reveal, SectionHead, Wrap } from "./primitives";
import { MobileMenu } from "./nav";



const WHATSAPP = "https://wa.me/5551999990101";
const EMAIL = "mailto:contato@vorticelab.com.br";

/* ------------------------------------------------------------------ hero */

export function Hero() {
  return (
    <Band tone="dark" id="hero">
      <Particles count={3} opacity={0.5} />

      <Wrap className="flex min-h-[100svh] flex-col">
        <nav className="relative flex items-center justify-between gap-4 py-4 sm:py-6">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="relative flex shrink-0 items-center justify-center"
              style={{ filter: "drop-shadow(0 0 10px color-mix(in oklab, var(--ember) 35%, transparent))" }}
            >
              <img src={logoAsset.url} alt="VórticeLab" className="size-11 sm:size-8" />
            </span>
            <span className="font-display text-[30px] leading-none tracking-[0.02em] sm:text-[19px]">
              <span className="font-light text-bone">Vórtice</span>
              <span className="text-ember italic">Lab</span>
            </span>
          </div>


          <div className="hidden items-center gap-7 sm:flex">
            {FRENTES.map((f) => (
              <a
                key={f.key}
                href={f.url}
                className="group relative inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] text-bone/75 uppercase no-underline transition-colors duration-250 hover:text-bone"
              >
                <span className="size-[3px] rounded-full bg-clay transition-transform duration-250 group-hover:scale-150" />
                {f.title}
                <span className="absolute -bottom-1.5 left-[11px] h-px w-0 bg-clay transition-all duration-300 group-hover:w-[calc(100%-11px)]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-bone/35 px-[18px] py-[9px] font-mono text-xs tracking-[0.08em] uppercase no-underline transition-colors duration-250 hover:border-clay hover:bg-clay hover:text-bone sm:inline-block"
              href="#contato"
            >
              Fale conosco
            </a>
            <MobileMenu />
          </div>
        </nav>



        <div className="flex flex-1 flex-col justify-center pb-12 sm:pb-20">
          <div className="max-w-[660px]">
            <Reveal delay={0.1}>
              <h1 className="m-0 mb-3 font-display text-[clamp(27px,6.6vw,60px)] leading-[1.06] font-light text-bone sm:mb-5">
                O próximo movimento já começou.
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="m-0 mb-3.5 max-w-[46ch] font-mono text-[11.5px] leading-[1.55] tracking-[0.01em] text-bone/70 sm:mb-6 sm:text-[15px] sm:leading-[1.65]">
                VórticeLab: Arquitetura energética e inteligência estratégica para quem molda o topo do mercado.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="m-0 mb-5 max-w-[52ch] text-[13.5px] leading-[1.55] text-bone/90 sm:mb-8 sm:text-[17px] sm:leading-[1.7]">
                Unimos a sabedoria das tecnologias ancestrais à dinâmica dos negócios de alta performance. Uma
                consultoria exclusiva para atletas, empresários e investidores que exigem{" "}
                <HighlightBox>precisão em cada tomada de decisão</HighlightBox>, seja na expansão de corporações, na
                gestão de carreiras ou em grandes transições de vida.
              </p>
            </Reveal>
            <Reveal delay={0.28} from={18}>
              <p className="m-0 mb-5 max-w-[34ch] font-display text-[19px] leading-[1.45] font-light text-ember-mid italic sm:mb-8 sm:text-[22px]">
                A engenharia sutil por trás das decisões que moldam o futuro.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <a
                className="inline-block rounded-full bg-ember px-6 py-3 font-mono text-[11.5px] font-medium tracking-[0.08em] text-ink uppercase no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ember)] sm:px-[30px] sm:py-[14px] sm:text-[13px]"
                href="#contato"
              >
                Fale conosco
              </a>
              <p className="m-0 mt-3 max-w-[34ch] font-mono text-[9.5px] leading-[1.45] tracking-[0.03em] text-bone/45 sm:mt-4 sm:text-[10.5px]">
                Atendimento mediante indicação ou avaliação de compatibilidade.
              </p>
            </Reveal>
          </div>
        </div>
      </Wrap>

      <span className="absolute top-[calc(100svh-2.2rem)] left-7 z-[1] flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-bone/45 uppercase">
        <span className="vx-cue relative block h-px w-7 overflow-hidden bg-bone/35" />
        rolar
      </span>

    </Band>
  );
}



/* ----------------------------------------------------------------- break */

export function Quote({
  tone,
  children,
  seed = 0,
}: {
  tone: "deep" | "light";
  children: React.ReactNode;
  seed?: number;
}) {
  return (
    <Band tone={tone} className="flex min-h-[42vh] items-center justify-center px-7 py-16 text-center sm:min-h-[46vh] sm:py-20">
      <QuoteField
        className="pointer-events-none absolute inset-0 size-full"
        color={tone === "light" ? "var(--clay)" : "var(--ember)"}
        seed={seed}
        count={5}
      />
      <Rings
        className="pointer-events-none absolute top-1/2 -left-32 size-[320px] -translate-y-1/2 sm:-left-24 sm:size-[420px]"
        color="var(--band-accent)"
        count={6}
        gap={28}
        sweep={0.55}
        rotate={90}
        opacity={0.2}
      />

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 aspect-[16/9] w-[min(1100px,120%)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(closest-side, var(--band-halo), color-mix(in oklab, var(--band) 70%, transparent) 55%, transparent 78%)",
        }}
      />
      <Reveal>
        <figure className="relative z-[1] m-0 flex flex-col items-center gap-6">
          <span aria-hidden="true" className="flex items-center gap-2.5">
            <span className="block h-px w-14 bg-band-line" />
            <span className="block size-1.5 rotate-45 bg-band-accent" />
            <span className="block h-px w-14 bg-band-line" />
          </span>
          <blockquote className="relative m-0 max-w-[20ch] font-display text-[clamp(28px,4.8vw,52px)] leading-[1.28] font-light text-band-accent italic">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -left-8 font-display text-[clamp(70px,10vw,130px)] leading-none text-band-accent/15 select-none"
            >
              “
            </span>
            <span className="relative">“{children}”</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-16 font-display text-[clamp(70px,10vw,130px)] leading-none text-band-accent/15 select-none"
            >
              ”
            </span>
          </blockquote>
          <span aria-hidden="true" className="flex items-center gap-2.5">
            <span className="block h-px w-14 bg-band-line" />
            <span className="block size-1.5 rotate-45 bg-band-accent" />
            <span className="block h-px w-14 bg-band-line" />
          </span>
        </figure>
      </Reveal>
    </Band>
  );
}

/* --------------------------------------------------------- 01 equilíbrio */

export function Equilibrio() {
  return (
    <Band tone="light" id="equilibrio" className="py-16 sm:py-24">
      <WindField
        className="pointer-events-none absolute inset-0 size-full opacity-25"
        color="var(--clay)"
        seed={2}
        count={5}
      />
      <Wrap>
        <SectionHead label="Equilíbrio Energético" icon="meridian" />

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_300px]">
          <div>
            <Reveal from={-24}>
              <p className="m-0 mb-10 max-w-[62ch] font-display text-[clamp(21px,2.6vw,28px)] leading-[1.55] font-light text-band-fg italic [&::first-letter]:float-left [&::first-letter]:pt-1 [&::first-letter]:pr-2.5 [&::first-letter]:font-display [&::first-letter]:text-[2.6em] [&::first-letter]:leading-[0.85] [&::first-letter]:font-normal [&::first-letter]:text-clay [&::first-letter]:not-italic">
                O que começa como o segredo de bastidores de grandes projetos — o mapeamento bioenergético do terroir
                que consagra as vinícolas mais valiosas do mundo, ou os milenares critérios de inteligência energética
                que orientam a engenharia e a alta arquitetura corporativa em Dubai, na China e no Japão — consolida-se,
                com o tempo, em <em className="text-clay italic">métrica reconhecida pelo próprio mercado</em>.
              </p>
            </Reveal>

            <ul className="m-0 grid list-none grid-cols-1 gap-x-11 gap-y-1 p-0 md:grid-cols-2">
              <li className="border-t border-band-line py-4">
                <Reveal delay={0.1} from={-16}>
                  <div className="flex gap-3 text-[15px] leading-[1.75] text-band-muted">
                    <span className="mt-1.5 text-band-accent">
                      <Icon name="field" className="size-[18px]" pulse />
                    </span>
                    <span>
                      O equilíbrio energético e a radiestesia integram práticas milenares, difundidas em diferentes
                      culturas, que hoje se traduzem no rigor técnico de auditorias de campo eletromagnético em
                      certificações imobiliárias internacionais e em protocolos oficiais que blindam{" "}
                      <Highlight>comitês olímpicos, clubes centenários</Highlight> e figuras de grande visibilidade
                      pública.
                    </span>
                  </div>
                </Reveal>
              </li>
              <li className="border-t border-band-line py-4">
                <Reveal delay={0.2} from={16}>
                  <div className="flex gap-3 text-[15px] leading-[1.75] text-band-muted">
                    <span className="mt-1.5 text-band-accent">
                      <Icon name="knot" className="size-[18px]" pulse />
                    </span>
                    <span>
                      Nos ambientes onde o capital e o talento em jogo são elevados — fundações de grandes
                      empreendimentos, decisões de expansão internacional ou a véspera de uma janela decisiva de
                      contratações e torneios — a leitura e a equalização energética raramente são anunciadas. Operam em
                      paralelo à governança e ao rigor operacional, sob{" "}
                      <Highlight>o mais estrito sigilo</Highlight>.
                    </span>
                  </div>
                </Reveal>
              </li>
            </ul>
          </div>

          <Reveal delay={0.2} from={24}>
            <aside className="relative overflow-hidden rounded-xl border border-clay/30 bg-band-surface p-7 shadow-[var(--shadow-light)]">
              <span className="mb-4 block text-clay">
                <Icon name="vortex" className="size-6" pulse />
              </span>
              <p className="m-0 font-display text-[19px] leading-[1.4] font-light text-ink-deep italic">
                Métrica reconhecida pelo próprio mercado.
              </p>
              <span className="mt-5 block font-mono text-[10px] tracking-[0.14em] text-ink-deep/55 uppercase">
                Equilíbrio Energético
              </span>
              <span className="absolute -right-9 -bottom-9 size-24 rounded-full border border-clay/25" />
            </aside>
          </Reveal>
        </div>

      </Wrap>
      <Rings
        className="pointer-events-none absolute -right-28 -bottom-32 size-[300px] sm:-right-20 sm:size-[420px]"
        color="var(--clay)"
        count={7}
        gap={26}
        sweep={0.62}
        rotate={200}
        opacity={0.25}
      />
    </Band>

  );
}

/* ---------------------------------------------------- frentes — três blocos */

/** Cartão de acesso compartilhado: link para o subdomínio. */
function FrenteLink({ url, accent = true }: { url: string; accent?: boolean }) {
  return (
    <span
      className={`relative z-[1] mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase ${accent ? "text-band-accent" : "text-clay"}`}
    >
      <span className="border-b border-band-accent/40 pb-1 transition-colors duration-300 group-hover:border-band-accent">
        Acessar
      </span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </span>
  );
}

const ATUACAO = FRENTES.find((f) => f.key === "atuacao")!;
const METODOLOGIA = FRENTES.find((f) => f.key === "metodologia")!;
const EDITORIAL = FRENTES.find((f) => f.key === "editorial")!;

/* ---- Atuação: faixa escura, cartão largo dividido ---- */

export function AtuacaoBlock() {
  return (
    <Band tone="dark" id="atuacao" className="py-16 sm:py-24">
      <WindField
        className="pointer-events-none absolute inset-0 size-full opacity-25"
        color="var(--moss-bright)"
        seed={6}
        count={5}
      />
      <Particles count={3} opacity={0.6} />
      <Wrap>
        <Reveal>
          <p className="m-0 mb-1.5 font-mono text-[11px] tracking-[0.22em] text-moss-bright uppercase">
            {ATUACAO.lead}
          </p>
          <h2 className="m-0 mb-10 font-display text-[clamp(26px,5vw,46px)] font-light text-bone">
            {ATUACAO.title}
          </h2>
        </Reveal>

        <Reveal from={-18}>
          <a
            href={ATUACAO.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[12px] border border-bone/12 bg-ink-raise no-underline shadow-[var(--shadow-deep)] transition-all duration-350 hover:-translate-y-1 hover:border-ember/40 hover:shadow-[var(--shadow-ember)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember sm:grid-cols-[180px_1fr]"
          >
            <span className="relative flex items-center justify-center border-b border-bone/10 bg-ink-void/40 px-7 py-10 sm:border-b-0 sm:border-r">
              <span className="pointer-events-none absolute -bottom-10 -left-6 size-28 rounded-full border border-ember/20 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative z-[1] text-moss-bright">
                <Icon name={ATUACAO.icon} className="size-9" pulse />
              </span>
            </span>
            <span className="relative flex flex-col justify-center px-7 py-9">
              <span className="relative z-[1] mb-2 block font-mono text-[10px] tracking-[0.2em] text-moss uppercase">
                {ATUACAO.title}
              </span>
              <p className="relative z-[1] m-0 max-w-[52ch] text-[15px] leading-[1.7] text-bone/80">
                {ATUACAO.line}
              </p>
              <FrenteLink url={ATUACAO.url} />
            </span>
          </a>
        </Reveal>
      </Wrap>
      <Rings
        className="pointer-events-none absolute -top-24 -right-32 size-[300px] sm:-right-20 sm:size-[440px]"
        color="var(--ember)"
        count={7}
        gap={26}
        sweep={0.6}
        rotate={20}
        opacity={0.16}
      />
    </Band>
  );
}

/* ---- Metodologia: faixa clara, banner com elemento circular ---- */

export function MetodologiaBlock() {
  return (
    <Band tone="light" id="metodologia" className="py-16 sm:py-24">
      <Rings
        className="pointer-events-none absolute -top-20 -right-24 size-[300px] sm:-right-16 sm:size-[420px]"
        color="var(--clay)"
        count={8}
        gap={24}
        sweep={0.58}
        rotate={120}
        opacity={0.22}
      />
      <Wrap>
        <Reveal>
          <p className="m-0 mb-1.5 font-mono text-[11px] tracking-[0.22em] text-clay uppercase">
            {METODOLOGIA.lead}
          </p>
          <h2 className="m-0 mb-10 font-display text-[clamp(26px,5vw,46px)] font-light text-ink-deep italic">
            {METODOLOGIA.title}
          </h2>
        </Reveal>

        <Reveal from={18}>
          <a
            href={METODOLOGIA.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex flex-col items-stretch overflow-hidden rounded-[12px] border border-clay/25 bg-band-surface p-7 no-underline shadow-[var(--shadow-light)] transition-all duration-350 hover:-translate-y-1 hover:border-clay/50 hover:shadow-[var(--shadow-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="relative mb-6 flex size-20 shrink-0 items-center justify-center rounded-full border border-clay/30 bg-bone-lift/40 sm:mb-0 sm:size-24">
              <span className="pointer-events-none absolute inset-0 rounded-full border border-clay/20 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative z-[1] text-clay">
                <Icon name={METODOLOGIA.icon} className="size-7 sm:size-8" pulse />
              </span>
            </span>
            <span className="relative flex-1">
              <span className="relative z-[1] mb-2 block font-mono text-[10px] tracking-[0.2em] text-moss uppercase">
                {METODOLOGIA.title}
              </span>
              <p className="relative z-[1] m-0 max-w-[54ch] text-[15px] leading-[1.7] text-ink-deep/85">
                {METODOLOGIA.line}
              </p>
              <FrenteLink url={METODOLOGIA.url} accent={false} />
            </span>
          </a>
        </Reveal>
      </Wrap>
    </Band>
  );
}

/* ---- Editorial: faixa escura, bloco editorial centralizado ---- */

export function EditorialBlock() {
  return (
    <Band tone="dark" id="editorial" className="py-16 sm:py-24">
      <WindField
        className="pointer-events-none absolute inset-0 size-full opacity-20"
        color="var(--moss-bright)"
        seed={11}
        count={4}
      />
      <Wrap className="flex flex-col items-center text-center">
        <Reveal>
          <p className="m-0 mb-3 font-mono text-[11px] tracking-[0.22em] text-moss-bright uppercase">
            {EDITORIAL.lead}
          </p>
          <span aria-hidden="true" className="mb-8 flex items-center justify-center gap-2.5">
            <span className="block h-px w-12 bg-band-line" />
            <span className="block size-1.5 rotate-45 bg-band-accent" />
            <span className="block h-px w-12 bg-band-line" />
          </span>
        </Reveal>

        <Reveal from={-12}>
          <a
            href={EDITORIAL.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative block max-w-[680px] overflow-hidden rounded-[14px] border border-bone/12 bg-ink-raise/60 px-8 py-11 no-underline shadow-[var(--shadow-deep)] backdrop-blur-[2px] transition-all duration-350 hover:-translate-y-1 hover:border-ember/40 hover:shadow-[var(--shadow-ember)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            <span className="pointer-events-none absolute -right-16 -bottom-16 size-44 rounded-full border border-ember/15 transition-transform duration-700 group-hover:scale-150" />
            <span className="relative z-[1] mb-5 block text-moss-bright">
              <Icon name={EDITORIAL.icon} className="mx-auto size-8" pulse />
            </span>
            <span className="relative z-[1] mb-3 block font-mono text-[10px] tracking-[0.2em] text-moss uppercase">
              {EDITORIAL.title}
            </span>
            <p className="relative z-[1] m-0 max-w-[46ch] font-display text-[clamp(19px,2.4vw,26px)] leading-[1.5] font-light text-bone/90 italic">
              {EDITORIAL.line}
            </p>
            <span className="relative z-[1] mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-ember-mid uppercase">
              <span className="border-b border-ember-mid/40 pb-1 transition-colors duration-300 group-hover:border-ember-mid">
                Acessar
              </span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </a>
        </Reveal>
      </Wrap>
      <Rings
        className="pointer-events-none absolute -bottom-24 -left-28 size-[280px] sm:-left-16 sm:size-[400px]"
        color="var(--moss-bright)"
        count={7}
        gap={26}
        sweep={0.55}
        rotate={210}
        opacity={0.16}
      />
    </Band>
  );
}

/* --------------------------------------------------------------- etapas */

const ETAPAS = [
  {
    n: "01",
    icon: "arc" as const,
    title: "Diagnóstico Inicial de Cenário",
    body: (
      <>
        Avaliação restrita das dinâmicas energéticas atuais do ativo, projeto ou liderança para identificação de{" "}
        <Highlight>pontos de fricção invisíveis</Highlight>.
      </>
    ),
  },
  {
    n: "02",
    icon: "wave" as const,
    title: "Equalização e Modulação",
    body: (
      <>
        Aplicação dos protocolos customizados de radiestesia e arquitetura energética em paralelo às decisões de
        governança do cliente.
      </>
    ),
  },
  {
    n: "03",
    icon: "meridian" as const,
    title: "Sustentação e Monitoramento",
    body: (
      <>
        Suporte contínuo de bastidores para assegurar a estabilidade do padrão de alta performance e a{" "}
        <Highlight>mitigação de riscos em momentos críticos</Highlight>.
      </>
    ),
  },
];

export function Etapas() {
  return (
    <Band tone="light" id="etapas" className="py-16 sm:py-24">
      <WindField
        className="pointer-events-none absolute inset-0 size-full opacity-20"
        color="var(--moss)"
        seed={8}
        count={4}
      />
      <Wrap>
        <p className="relative z-[1] m-0 mb-1.5 font-mono text-[11px] tracking-[0.18em] text-clay uppercase">
          As Etapas do Alinhamento
        </p>
        <svg viewBox="0 0 1000 26" preserveAspectRatio="none" className="relative z-[1] mb-6 block h-[26px] w-full" aria-hidden="true">
          <path
            className="draw-line"
            d="M0,13 C150,2 300,24 500,13 C700,2 850,24 1000,13"
            stroke="var(--clay)"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
        </svg>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ETAPAS.map((e, i) => (
            <Reveal key={e.n} delay={0.1 + i * 0.1} from={i % 2 === 0 ? -16 : 16}>
              <div className="rounded-[10px] border border-band-line bg-band-surface p-6 transition-all duration-350 hover:translate-x-1.5 hover:border-clay/30 hover:shadow-[var(--shadow-light)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-moss">{e.n}</span>
                  <span className="h-px w-4 bg-band-line" />
                  <span className="text-clay">
                    <Icon name={e.icon} className="size-[18px]" pulse />
                  </span>
                </div>
                <h4 className="m-0 mb-2 font-display text-[19px] font-normal text-ink-deep">{e.title}</h4>
                <p className="m-0 text-[15px] text-band-muted">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </Wrap>
      <Rings
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[360px] -translate-x-1/2 sm:size-[520px]"
        color="var(--moss)"
        count={8}
        gap={26}
        sweep={0.5}
        rotate={270}
        opacity={0.16}
      />
    </Band>

  );
}

/* --------------------------------------------------------------- contato */

export function Contato() {
  return (
    <Band tone="light" id="contato" className="py-20 text-center sm:py-28">
      <SpiralCluster strokes={["var(--clay)", "var(--moss)", "var(--ember)"]} intensity={0.55} clear="46%" />

      <Wrap>
        <Reveal>
          <p className="m-0 mb-4 font-mono text-[11px] tracking-[0.22em] text-band-muted uppercase">
            Contato
          </p>
          <h2 className="m-0 mb-8 font-display text-[clamp(34px,5vw,54px)] font-light text-ink-deep italic">
            Fale conosco.
          </h2>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full bg-clay px-7 py-4 font-mono text-[12px] font-medium tracking-[0.08em] text-bone-lift uppercase no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-light)] sm:px-[30px] sm:text-[13px]"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="wave" className="size-4" />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full border border-clay/45 px-7 py-4 font-mono text-[12px] font-medium tracking-[0.06em] text-ink-deep no-underline transition-colors duration-200 hover:border-clay hover:bg-clay/10 sm:px-[30px] sm:text-[13px]"
              href={EMAIL}
            >
              <Icon name="orbit" className="size-4 text-clay" />
              contato@vorticelab.com.br
            </a>
          </div>

          <p className="mx-auto mt-10 mb-0 flex max-w-[42ch] items-center justify-center gap-4 border-t border-band-line pt-5 font-mono text-[11px] leading-[1.7] tracking-[0.1em] text-band-muted uppercase">
            <span aria-hidden="true" className="text-clay">
              <Icon name="diamond" className="size-3" />
            </span>
            Atendimento mediante indicação ou avaliação de compatibilidade.
          </p>
        </Reveal>
      </Wrap>
    </Band>
  );
}


export function Footer() {
  return (
    <footer className="band-deep flex items-center justify-between px-7 py-10 font-mono text-[11px] tracking-[0.15em] text-bone/55">
      <span className="font-display text-[15px] tracking-[0.02em]">
        <span className="font-light text-bone/85">Vórtice</span>
        <span className="text-ember italic">Lab</span>
      </span>

      <span>51° · Porto Alegre</span>
    </footer>
  );
}
