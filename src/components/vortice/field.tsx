/**
 * Pure SVG generators — spirals, wind currents and field layers.
 * These build path `d` strings and render as JSX (no imperative DOM work),
 * so they are safe to render during SSR.
 */

function spiralPath(
  cx: number,
  cy: number,
  turns: number,
  startR: number,
  endR: number,
  points: number,
  rot = 0,
) {
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const angle = t * turns * Math.PI * 2 + rot;
    const r = startR + (endR - startR) * t;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.94;
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  return d;
}

export function Spiral({
  className = "",
  strokes = ["var(--ember)", "var(--moss)", "var(--bone)"],
  spin = false,
}: {
  className?: string;
  strokes?: string[];
  spin?: boolean;
}) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g className={spin ? "vx-spin" : undefined}>
        {strokes.map((c, i) => (
          <path
            key={i}
            d={spiralPath(200, 200, 3.2 + i * 0.3, 6, 160 - i * 20, 200, i * 1.1)}
            stroke={c}
            strokeWidth={i === 0 ? 2 : 1}
            fill="none"
            opacity={i === 0 ? 0.55 : 0.3}
          />
        ))}
      </g>
    </svg>
  );
}

function windPaths(seed: number, w: number, h: number, count: number) {
  const out: { d: string; opacity: number }[] = [];
  for (let i = 0; i < count; i++) {
    const yBase = (h / count) * i + seed * 4;
    let d = `M -10 ${yBase} `;
    for (let x = 0; x <= w + 20; x += Math.max(20, w / 16)) {
      const y = yBase + Math.sin((x + seed * 30) / 55 + i * 0.8) * (h / 12 + i * 3);
      d += `L ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    out.push({ d, opacity: 0.3 + i * 0.08 });
  }
  return out;
}

export function WindField({
  className = "",
  color = "var(--band-accent)",
  seed = 0,
  width = 1000,
  height = 400,
  count = 5,
  draw = false,
  drift = true,
}: {
  className?: string;
  color?: string;
  seed?: number;
  width?: number;
  height?: number;
  count?: number;
  draw?: boolean;
  drift?: boolean;
}) {
  const paths = windPaths(seed, width, height, count);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g className={drift ? "vx-drift" : undefined}>
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke={color}
            strokeWidth={1.2}
            fill="none"
            opacity={p.opacity}
            className={draw ? "draw-line" : undefined}
            style={draw ? ({ "--dash": 2600 } as React.CSSProperties) : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

/** Concentric breathing rings — the "vibration" layer. */
export function PulseField({ className = "", rings = 5 }: { className?: string; rings?: number }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={40 + i * 34}
          fill="none"
          stroke="var(--band-accent)"
          strokeWidth={1}
          opacity={0.35 - i * 0.04}
          className="vx-breathe"
          style={{ animationDelay: `${i * 0.7}s`, transformOrigin: "200px 200px" }}
        />
      ))}
    </svg>
  );
}

const PARTICLES = [
  { left: "8%", color: "var(--ember)", delay: "0s", duration: "12s" },
  { left: "22%", color: "var(--bone)", delay: "3s", duration: "15s" },
  { left: "40%", color: "var(--ember)", delay: "6s", duration: "11s" },
  { left: "58%", color: "var(--moss-bright)", delay: "1.5s", duration: "16s" },
  { left: "74%", color: "var(--bone)", delay: "4.5s", duration: "13s" },
  { left: "88%", color: "var(--ember)", delay: "8s", duration: "14s" },
];

export function Particles({ count = 6, opacity = 1 }: { count?: number; opacity?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" style={{ opacity }}>
      {PARTICLES.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="vx-float absolute -bottom-2 size-[3px] rounded-full"
          style={{
            left: p.left,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Seam between two bands — a current line that stitches one band into the next.
 * `from` is the band colour above, `to` the band colour below.
 */
export function Seam({ from, to }: { from: string; to: string }) {
  const paths = windPaths(3, 1200, 90, 4);
  return (
    <div className="relative h-[90px] w-full overflow-hidden" style={{ backgroundColor: to }} aria-hidden="true">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <path d="M0,0 H1200 V34 C900,66 700,10 480,40 C300,64 150,28 0,52 Z" fill={from} />
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke="var(--ember)"
            strokeWidth={1}
            fill="none"
            opacity={0.16 + i * 0.05}
            className="vx-drift"
          />
        ))}
      </svg>
    </div>
  );
}

/** Focused line field for quote bands: few continuous curves, edge-faded. */
export function QuoteField({
  className = "",
  color = "var(--band-accent)",
  seed = 0,
  count = 5,
}: {
  className?: string;
  color?: string;
  seed?: number;
  count?: number;
}) {
  const w = 1200;
  const h = 340;
  const id = `qf-${seed}`;
  const lines = Array.from({ length: count }).map((_, i) => {
    const y = (h / (count + 1)) * (i + 1) + ((seed * 13) % 17) - 8;
    const amp = 26 + ((i * 7 + seed * 5) % 22);
    const dir = i % 2 === 0 ? 1 : -1;
    const d =
      `M -40 ${y.toFixed(1)} ` +
      `C 200 ${(y - amp * dir).toFixed(1)}, 400 ${(y + amp * dir).toFixed(1)}, 600 ${y.toFixed(1)} ` +
      `S 1000 ${(y + amp * dir * 1.1).toFixed(1)}, ${w + 40} ${(y - amp * dir * 0.4).toFixed(1)}`;
    const strong = i === 1 || i === count - 2;
    return { d, strong, opacity: strong ? 0.85 : 0.4 };
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="18%" stopColor="white" stopOpacity="1" />
          <stop offset="82%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect x="0" y="0" width={w} height={h} fill={`url(#${id}-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${id}-mask)`} className="vx-drift">
        {lines.map((l, i) => (
          <path
            key={i}
            d={l.d}
            stroke={color}
            strokeWidth={l.strong ? 1.9 : 1}
            fill="none"
            opacity={l.opacity}
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Moodboard rings — concentric circles / partial arcs, usually bled off an edge.
 * Purely decorative; `sweep` (0..1) cuts the circle into an arc.
 */
export function Rings({
  className = "",
  color = "var(--band-accent)",
  count = 6,
  gap = 26,
  start = 30,
  sweep = 1,
  rotate = 0,
  strokeWidth = 1,
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  count?: number;
  gap?: number;
  start?: number;
  sweep?: number;
  rotate?: number;
  strokeWidth?: number;
  opacity?: number;
}) {
  const size = 400;
  const c = size / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true" style={{ opacity }}>
      <g transform={`rotate(${rotate} ${c} ${c})`}>
        {Array.from({ length: count }).map((_, i) => {
          const r = start + i * gap;
          if (sweep >= 1) {
            return (
              <circle
                key={i}
                cx={c}
                cy={c}
                r={r}
                fill="none"
                stroke={color}
                strokeWidth={i % 3 === 0 ? strokeWidth * 1.8 : strokeWidth}
                opacity={0.85 - i * 0.08}
              />
            );
          }
          const a1 = -Math.PI / 2;
          const a2 = a1 + sweep * Math.PI * 2;
          const x1 = c + Math.cos(a1) * r;
          const y1 = c + Math.sin(a1) * r;
          const x2 = c + Math.cos(a2) * r;
          const y2 = c + Math.sin(a2) * r;
          const large = sweep > 0.5 ? 1 : 0;
          return (
            <path
              key={i}
              d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`}
              fill="none"
              stroke={color}
              strokeWidth={i % 3 === 0 ? strokeWidth * 1.8 : strokeWidth}
              strokeLinecap="round"
              opacity={0.85 - i * 0.08}
            />
          );
        })}
      </g>
    </svg>
  );
}

/**
 * Three spirals at clearly different scales, bled off distinct edges, each with
 * its own rotation speed/direction. A radial mask keeps the centre (where the
 * copy lives) clear so the lines never fight the type.
 */
export function SpiralCluster({
  className = "",
  strokes = ["var(--ember)", "var(--moss)", "var(--bone)"],
  intensity = 1,
  clear = "58%",
}: {
  className?: string;
  strokes?: string[];
  intensity?: number;
  clear?: string;
}) {
  const mask = `radial-gradient(closest-side at 50% 45%, transparent 0%, transparent ${clear}, black 100%)`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {/* large — top right, slowest */}
      <div
        className="absolute -top-[22vh] -right-[34vw] size-[92vw] sm:-top-[30vh] sm:-right-[16vw] sm:size-[62vw]"
        style={{ opacity: 0.4 * intensity }}
      >
        <Spiral className="vx-spin-slow size-full" strokes={[strokes[0]!]} />
      </div>
      {/* medium — bottom left, reverse */}
      <div
        className="absolute -bottom-[16vh] -left-[36vw] size-[70vw] sm:-bottom-[22vh] sm:-left-[14vw] sm:size-[42vw]"
        style={{ opacity: 0.26 * intensity }}
      >
        <Spiral className="vx-spin-rev size-full" strokes={[strokes[1] ?? strokes[0]!]} />
      </div>
      {/* small — mid right/low, fastest */}
      <div
        className="absolute right-[6vw] bottom-[6vh] size-[34vw] sm:right-[10vw] sm:bottom-[8vh] sm:size-[18vw]"
        style={{ opacity: 0.2 * intensity }}
      >
        <Spiral className="vx-spin-fast size-full" strokes={[strokes[2] ?? strokes[0]!]} />
      </div>
    </div>
  );
}
