import { createFileRoute } from "@tanstack/react-router";
import {
  InstContato,
  InstEquilibrio,
  InstEtapas,
  InstFooter,
  InstFrentes,
  InstHeader,
  InstHero,
  InstIndicadores,
  InstQuote,
} from "@/components/vortice/institutional";
import { useVorticeMotion } from "@/components/vortice/use-vortice-motion";

const TITLE = "VórticeLab — Consultoria institucional em inteligência estratégica";
const DESCRIPTION =
  "Versão institucional: arquitetura energética e inteligência estratégica para lideranças, corporações e investidores, com atuação reservada e protocolo próprio.";

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

const CHAPTERS = ["equilibrio", "frentes", "etapas", "contato"];

function Pagina2() {
  const { progress } = useVorticeMotion(CHAPTERS);

  return (
    <main className="inst-page relative bg-inst-dark-bg">
      <div
        className="fixed top-0 left-0 z-[80] h-px bg-inst-accent/70"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <InstHeader />
      <InstHero />
      <InstIndicadores />
      <InstQuote tone="light">A energia já existe — o trabalho é lê-la.</InstQuote>
      <InstEquilibrio />
      <InstQuote tone="dark">A certeza do alinhamento antes do aperto de mãos.</InstQuote>
      <InstFrentes />
      <InstEtapas />
      <InstQuote tone="dark">
        A privacidade da sua prática é, também, a sua maior proteção competitiva.
      </InstQuote>
      <InstContato />
      <InstFooter />
    </main>
  );
}
