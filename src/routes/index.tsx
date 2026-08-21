import { createFileRoute } from "@tanstack/react-router";
import { IconSprite } from "@/components/vortice/icons";
import { Seam } from "@/components/vortice/field";
import {
  AtuacaoBlock,
  Contato,
  EditorialBlock,
  Equilibrio,
  Footer,
  Hero,
  MetodologiaBlock,
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
  { id: "atuacao", label: "Atuação" },
  { id: "metodologia", label: "Metodologia" },
  { id: "editorial", label: "Editorial" },
  { id: "contato", label: "Contato" },
];

const CHAPTER_IDS = CHAPTERS.map((c) => c.id);

const INK = "var(--ink)";
const INK_VOID = "var(--ink)";
const LIGHT = "var(--surface-light)";

function Index() {
  const { progress } = useVorticeMotion(CHAPTER_IDS);

  return (
    <main className="relative">
      <IconSprite />

      <div
        className="fixed top-0 left-0 z-[80] h-0.5 bg-ember opacity-85"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />



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
      <AtuacaoBlock />
      <Seam from={INK} to={LIGHT} />
      <MetodologiaBlock />
      <Seam from={LIGHT} to={INK} />
      <EditorialBlock />
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

