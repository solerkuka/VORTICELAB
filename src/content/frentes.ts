import type { VorticeIcon } from "@/components/vortice/icons";

export type Frente = {
  key: string;
  title: string;
  line: string;
  lead: string;
  icon: VorticeIcon;
  /** Internal route for the frente page. */
  url: string;
  /** Accent color used to distinguish the frente. */
  accent: string;
};

export const FRENTES: Frente[] = [
  {
    key: "atuacao",
    title: "Atuação",
    lead: "Veja como funciona a nossa atuação",
    line: "A VórticeLab opera na intersecção entre a alta estratégia e a engenharia sutil, entregando clareza e precisão em três pilares independentes.",
    icon: "vortex",
    url: "/atuacao",
    accent: "#c98a4b",
  },
  {
    key: "metodologia",
    title: "Metodologia",
    lead: "Entenda melhor como funciona nossa metodologia",
    line: "Um protocolo próprio, desenhado para se integrar com absoluta invisibilidade às rotinas operacionais e estratégicas de nossos clientes.",
    icon: "knot",
    url: "/metodologia",
    accent: "#5c8a72",
  },
  {
    key: "editorial",
    title: "Editorial",
    lead: "Como instituições de alta exigência incorporam a leitura energética ao próprio rigor operacional",
    line: "Como instituições de alta exigência incorporam a leitura energética ao próprio rigor operacional.",
    icon: "field",
    url: "/editorial",
    accent: "#b8674f",
  },
];

