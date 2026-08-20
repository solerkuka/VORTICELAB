import { createFileRoute } from "@tanstack/react-router";
import { IconSprite } from "@/components/vortice/icons";
import { Seam } from "@/components/vortice/field";
import {
  Contato,
  Equilibrio,
  Etapas,
  Footer,
  Frentes,
  Hero,
  Quote,
} from "@/components/vortice/sections";
import { useVorticeMotion } from "@/components/vortice/use-vortice-motion";

const TITLE = "VórticeLab — Arquitetura energética e inteligência estratégica";
const DESCRIPTION =
  "Consultoria exclusiva em arquitetura energética e inteligência estratégica para atletas, empresários e investidores que moldam o topo do mercado.";

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

const CHAPTERS = [
  { id: "equilibrio", label: "Equilíbrio" },
  { id: "frentes", label: "Frentes" },
  { id: "etapas", label: "Etapas" },
  { id: "contato", label: "Contato" },
];

const CHAPTER_IDS = CHAPTERS.map((c) => c.id);

const INK = "var(--ink)";
const INK_VOID = "var(--ink-void)";
const LIGHT = "var(--surface-light)";

function Index() {
  const { progress, active } = useVorticeMotion(CHAPTER_IDS);

  return (
    <main className="relative">
      <IconSprite />

      <div
        className="fixed top-0 left-0 z-[80] h-0.5 bg-ember opacity-85"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <nav
        className="fixed top-1/2 right-2 z-[70] flex -translate-y-1/2 flex-col items-end gap-3 sm:right-5 sm:gap-4"
        aria-label="Capítulos"
      >
        {CHAPTERS.map((c) => {
          const isActive = active === c.id;
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              aria-label={c.label}
              aria-current={isActive ? "true" : undefined}
              className="group flex items-center justify-end gap-2 rounded-full py-1 pr-1 pl-2 no-underline backdrop-blur-[2px]"
            >
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-band/70 text-ember opacity-100"
                    : "text-band-muted opacity-0 group-hover:bg-band/70 group-hover:opacity-70"
                }`}
              >
                {c.label}
              </span>

              <span
                aria-hidden="true"
                className={`block h-px transition-all duration-300 ${
                  isActive ? "w-6 bg-ember" : "w-3 bg-bone/30 group-hover:w-5 group-hover:bg-bone/60"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <Hero />
      <Seam from={INK} to={INK_VOID} soft />
      <Quote tone="deep" seed={0}>
        A energia já existe — o trabalho é lê-la.
      </Quote>
      <Seam from={INK_VOID} to={LIGHT} />
      <Equilibrio />
      <Seam from={LIGHT} to={INK_VOID} />
      <Quote tone="deep" seed={4}>
        A certeza do alinhamento antes do aperto de mãos.
      </Quote>
      <Seam from={INK_VOID} to={INK} soft />
      <Frentes />
      <Seam from={INK} to={LIGHT} />
      <Etapas />
      <Seam from={LIGHT} to={INK_VOID} />
      <Quote tone="deep" seed={7}>
        A privacidade da sua prática é, também, a sua maior proteção competitiva.
      </Quote>
      <Seam from={INK_VOID} to={LIGHT} />
      <Contato />
      <Footer />
    </main>
  );
}

