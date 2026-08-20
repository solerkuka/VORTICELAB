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
