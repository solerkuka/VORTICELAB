/**
 * Abstract thin-stroke icon set for VórticeLab.
 * Per the moodboard's image direction: no literal iconography (hands, crystals,
 * chakras) — only fields, currents, orbits and convergences.
 */

export type VorticeIcon =
  | "diamond"
  | "wave"
  | "orbit"
  | "arc"
  | "dot"
  | "spiral"
  | "knot"
  | "field"
  | "meridian"
  | "vortex"
  | "converge";

export function IconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <g id="vx-diamond">
          <path d="M12 2 L22 12 L12 22 L2 12 Z" />
        </g>
        <g id="vx-wave">
          <path d="M2 12 Q7 4 12 12 T22 12" />
        </g>
        <g id="vx-orbit">
          <circle cx="12" cy="12" r="7" />
          <circle cx="19" cy="8" r="1.6" fill="currentColor" stroke="none" />
        </g>
        <g id="vx-arc">
          <path d="M4 18 A14 14 0 0 1 20 6" />
        </g>
        <g id="vx-dot">
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="9" />
        </g>
        <g id="vx-spiral">
          <path d="M12 12 m0 -1.2 a1.2 1.2 0 1 1 -1.2 1.2 a3 3 0 1 0 3 -3 a5.4 5.4 0 1 0 -5.4 5.4 a7.8 7.8 0 1 0 7.8 -7.8" />
        </g>
        <g id="vx-knot">
          <path d="M6 8 C14 2 10 16 18 10" />
          <path d="M6 16 C14 22 10 8 18 14" />
        </g>
        <g id="vx-field">
          <path d="M3 9 Q12 3 21 9" />
          <path d="M3 13 Q12 7 21 13" />
          <path d="M3 17 Q12 11 21 17" />
        </g>
        <g id="vx-meridian">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 C6.5 7 6.5 17 12 21" />
          <path d="M12 3 C17.5 7 17.5 17 12 21" />
        </g>
        <g id="vx-vortex">
          <path d="M3 12 C7 5 17 5 21 12" />
          <path d="M5 15 C9 9.5 15 9.5 19 15" />
          <path d="M8.5 18 C10.5 15 13.5 15 15.5 18" />
        </g>
        <g id="vx-converge">
          <path d="M3 4 L12 12 L3 20" />
          <path d="M21 4 L12 12 L21 20" />
        </g>
      </defs>
    </svg>
  );
}

export function Icon({
  name,
  className = "size-4",
  pulse = false,
}: {
  name: VorticeIcon;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-none items-center justify-center ${pulse ? "vx-icon-pulse" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-full [&_*]:fill-none [&_*]:stroke-current [&_*]:[stroke-width:1.4] [&_*]:[vector-effect:non-scaling-stroke]"
      >
        <use href={`#vx-${name}`} />
      </svg>
    </span>
  );
}
