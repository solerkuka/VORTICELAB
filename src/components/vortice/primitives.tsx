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
 * Chapter head. The numeral is promoted to a large stylized outlined glyph
 * that anchors the section visually, with the label set beside/over it.
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
    <div className="relative mb-12">
      <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
        {/* Large stylized numeral — outlined gradient, breathing */}
        <span
          aria-hidden="true"
          className="vx-breathe select-none font-mono font-bold leading-[0.8] tracking-tighter"
          style={{
            fontSize: "clamp(3.5rem,9vw,6.5rem)",
            lineHeight: 0.78,
            color: "transparent",
            WebkitTextStroke: "1.4px var(--band-accent)",
            textShadow: "0 0 28px color-mix(in oklab, var(--band-accent) 35%, transparent)",
            opacity: 0.92,
          }}
        >
          {index}
        </span>
        {/* Meta line: icon + label */}
        <div className="flex items-center gap-3 pb-1 font-mono uppercase sm:gap-4">
          <span className="text-band-accent">
            <Icon name={icon} className="size-6 sm:size-7" pulse />
          </span>
          <span className="text-[clamp(1.05rem,2.6vw,1.6rem)] font-semibold tracking-[0.16em] text-band-fg">
            {label}
          </span>
        </div>
      </div>
      <svg
        viewBox="0 0 1000 6"
        preserveAspectRatio="none"
        className="mt-5 block h-[6px] w-full"
        aria-hidden="true"
      >
        <path
          className="draw-line"
          d="M0,3 C220,0 420,6 620,3 C800,0 900,5 1000,3"
          stroke="var(--band-accent)"
          strokeWidth="1.6"
          fill="none"
          opacity="0.75"
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
