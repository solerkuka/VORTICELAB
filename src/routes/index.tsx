import { createFileRoute } from "@tanstack/react-router";
import { IconSprite } from "@/components/vortice/icons";
import { Seam } from "@/components/vortice/field";
import {
  Atuacao,
  Contato,
  Editorial,
  Equilibrio,
  Etapas,
  Footer,
  Hero,
  Metodologia,
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
  { id: "equilibrio", label: "Equilíbrio Energético" },
  { id: "atuacao", label: "Atuação" },
  { id: "metodologia", label: "Metodologia" },
  { id: "editorial", label: "Editorial" },
  { id: "contato", label: "Contato" },
];

const CHAPTER_IDS = CHAPTERS.map((c) => c.id);

const INK = "var(--ink)";
const INK_VOID = "var(--ink-void)";
const BONE = "var(--bone)";

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
        className="fixed top-1/2 right-5 z-[70] hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
        aria-label="Capítulos"
      >
        {CHAPTERS.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            aria-label={c.label}
            title={c.label}
            className={`block size-1.5 rounded-full transition-all duration-300 ${
              active === c.id ? "scale-150 bg-ember shadow-[0_0_14px_var(--ember)]" : "bg-bone/30 hover:bg-bone/60"
            }`}
          />
        ))}
      </nav>

      <Hero />
      <Seam from={INK} to={INK_VOID} />
      <Quote tone="deep" seed={0}>
        A energia já existe — o trabalho é lê-la.
      </Quote>
      <Seam from={INK_VOID} to={BONE} />
      <Equilibrio />
      <Seam from={BONE} to={INK_VOID} />
      <Quote tone="deep" seed={4}>
        A certeza do alinhamento antes do aperto de mãos.
      </Quote>
      <Seam from={INK_VOID} to={INK} />
      <Atuacao />
      <Seam from={INK} to={BONE} />
      <Quote tone="light" seed={7}>
        A privacidade da sua prática é, também, a sua maior proteção competitiva.
      </Quote>
      <Seam from={BONE} to={INK_VOID} />
      <Metodologia />
      <Seam from={INK_VOID} to={BONE} />
      <Etapas />
      <Seam from={BONE} to={INK} />
      <Editorial />
      <Seam from={INK} to={BONE} />
      <Contato />
      <Footer />
    </main>
  );
}
