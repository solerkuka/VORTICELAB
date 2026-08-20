import { useEffect, useState } from "react";

/**
 * Wires scroll-driven motion for the page:
 *  - reveals elements in cascade as they enter the viewport
 *  - draws SVG line paths (stroke-dashoffset) on entry
 *  - tracks reading progress and the active chapter
 */
export function useVorticeMotion(chapterIds: string[]) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(chapterIds[0] ?? "");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanupObservers: (() => void) | undefined;

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      );
      revealEls.forEach((el) => io.observe(el));

      const paths = Array.from(document.querySelectorAll<SVGPathElement>(".draw-line"));
      const drawIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const path = entry.target as SVGPathElement;
            try {
              const len = path.getTotalLength();
              path.style.setProperty("--dash", String(len));
            } catch {
              /* getTotalLength unsupported — CSS fallback applies */
            }
            requestAnimationFrame(() => path.classList.add("in-view"));
            drawIO.unobserve(path);
          });
        },
        { threshold: 0.3 },
      );
      paths.forEach((p) => drawIO.observe(p));

      const chapterIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      chapterIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) chapterIO.observe(el);
      });

      var cleanupObservers = () => {
        io.disconnect();
        drawIO.disconnect();
        chapterIO.disconnect();
      };
    }

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanupObservers?.();
    };
  }, [chapterIds]);

  return { progress, active };
}

/** Small parallax offset in px, driven by window scroll. */
export function useParallax(factor: number, limit = 1400) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(y < limit ? y * factor : limit * factor);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor, limit]);

  return offset;
}
