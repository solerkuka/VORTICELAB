import type { VorticeIcon } from "@/components/vortice/icons";

export type Frente = {
  key: string;
  title: string;
  line: string;
  icon: VorticeIcon;
  /** Subdomain address — provisional until the domains are live. */
  url: string;
};

export const FRENTES: Frente[] = [
  {
    key: "atuacao",
    title: "Atuação",
    line: "A VórticeLab opera na intersecção entre a alta estratégia e a engenharia sutil, entregando clareza e precisão em três pilares independentes.",
    icon: "vortex",
    url: "https://atuacao.vorticelab.com.br",
  },
  {
    key: "metodologia",
    title: "Metodologia",
    line: "Um protocolo próprio, desenhado para se integrar com absoluta invisibilidade às rotinas operacionais e estratégicas de nossos clientes.",
    icon: "knot",
    url: "https://metodologia.vorticelab.com.br",
  },
  {
    key: "editorial",
    title: "Editorial",
    line: "Como instituições de alta exigência incorporam a leitura energética ao próprio rigor operacional.",
    icon: "field",
    url: "https://editorial.vorticelab.com.br",
  },
];
