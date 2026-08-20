import type { ReactNode } from "react";
import { Icon, type VorticeIcon } from "./icons";

export type BandTone = "dark" | "deep" | "light";

const BAND_CLASS: Record<BandTone, string> = {
  dark: "band-dark",
  deep: "band-deep",
  light: "band-light",
};

export function Band({
  tone,
  id,
  className = "",
  children,
}: {
  tone: BandTone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${BAND_CLASS[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function Wrap({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`relative z-[1] mx-auto w-full max-w-[1080px] px-7 ${className}`}>{children}</div>;
}

export function Reveal({
  delay = 0,
  from = 0,
  className = "",
  children,
}: {
  delay?: number;
  /** horizontal entry offset in px — alternate signs to give reading direction */
  from?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-x": `${from}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * Chapter head — editorial. A quiet serif numeral on the left margin, a hairline
 * rule between it and the label, and a thin chapter ruler underneath.
 */
export function SectionHead({
  index,
  label,
  icon,
}: {
  index: string;
  label: string;
  icon: VorticeIcon;
}) {
  return (
    <div className="group relative mb-12">
      <div className="flex items-center gap-5 sm:gap-7">
        <span
          aria-hidden="true"
          className="select-none font-display leading-none text-band-accent/70"
          style={{ fontSize: "clamp(2.4rem,5vw,3.4rem)", fontWeight: 300, letterSpacing: "-0.02em" }}
        >
          {index}
        </span>

        <span aria-hidden="true" className="h-[clamp(2rem,4vw,2.8rem)] w-px bg-band-line" />

        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="text-band-accent transition-transform duration-500 group-hover:scale-110">
            <Icon name={icon} className="size-5" />
          </span>
          <h2 className="font-mono text-[clamp(0.95rem,2.2vw,1.35rem)] font-medium uppercase tracking-[0.22em] text-band-fg">
            {label}
          </h2>
        </div>
      </div>

      <svg
        viewBox="0 0 1000 2"
        preserveAspectRatio="none"
        className="mt-6 block h-px w-full"
        aria-hidden="true"
      >
        <path
          className="draw-line"
          d="M0,1 L1000,1"
          stroke="var(--band-line)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <span
        aria-hidden="true"
        className="mt-[-1px] block h-px w-16 bg-band-accent"
      />
    </div>
  );
}



export function Highlight({ children }: { children: ReactNode }) {
  return <span className="font-medium text-band-accent">{children}</span>;
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[4px] bg-band-accent/15 px-[0.4em] py-[0.04em] font-medium text-band-accent">
      {children}
    </span>
  );
}
