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
 * Chapter head. The numeral is deliberately demoted to a small mono marker
 * next to the label — it no longer competes with the title.
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
    <div className="relative mb-8">
      <p className="m-0 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase">
        <span className="text-moss-mid">{index}</span>
        <span className="h-px w-6 bg-band-line" />
        <span className="text-band-accent">
          <Icon name={icon} className="size-4" pulse />
        </span>
        <span className="text-band-muted">{label}</span>
      </p>
      <svg
        viewBox="0 0 1000 6"
        preserveAspectRatio="none"
        className="mt-4 block h-[6px] w-full"
        aria-hidden="true"
      >
        <path
          className="draw-line"
          d="M0,3 C220,0 420,6 620,3 C800,0 900,5 1000,3"
          stroke="var(--band-accent)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
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
