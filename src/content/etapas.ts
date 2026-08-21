export type EtapaPart = { text: string; highlight?: boolean };

export type Etapa = {
  n: string;
  icon: "arc" | "wave" | "meridian";
  title: string;
  parts: EtapaPart[];
};

export const ETAPAS: Etapa[] = [
  {
    n: "01",
    icon: "arc",
    title: "Diagnóstico Inicial de Cenário",
    parts: [
      {
        text: "Avaliação restrita das dinâmicas energéticas atuais do ativo, projeto ou liderança para identificação de ",
      },
      { text: "pontos de fricção invisíveis", highlight: true },
      { text: "." },
    ],
  },
  {
    n: "02",
    icon: "wave",
    title: "Equalização e Modulação",
    parts: [
      {
        text: "Aplicação dos protocolos customizados de radiestesia e arquitetura energética em paralelo às decisões de governança do cliente.",
      },
    ],
  },
  {
    n: "03",
    icon: "meridian",
    title: "Sustentação e Monitoramento",
    parts: [
      {
        text: "Suporte contínuo de bastidores para assegurar a estabilidade do padrão de alta performance e a ",
      },
      { text: "mitigação de riscos em momentos críticos", highlight: true },
      { text: "." },
    ],
  },
];
