import { useEffect, useState } from "react";
import { FRENTES } from "@/content/frentes";

/** Mobile hamburger button + full-screen menu panel. */
export function MobileMenu({ contactHref = "#contato" }: { contactHref?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="vx-mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] grid size-10 shrink-0 place-items-center rounded-full border border-bone/25 text-bone transition-colors duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay"
      >
        <span className="relative block h-[11px] w-[19px]">
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
              open ? "top-[5px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-[5px] left-0 block h-px w-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
              open ? "top-[5px] -rotate-45" : "top-[10px]"
            }`}
          />
        </span>
      </button>

      <div
        id="vx-mobile-menu"
        className={`fixed inset-0 z-50 bg-ink/98 backdrop-blur-md transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-7 pt-20 pb-10">
          {FRENTES.map((f, i) => (
            <a
              key={f.key}
              href={f.url}
              onClick={() => setOpen(false)}
              className={`block border-t border-bone/12 py-5 no-underline transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 70}ms` : "0ms" }}
            >
              <span className="block font-display text-[30px] leading-none text-bone italic">
                {f.title}
              </span>
              <span className="mt-2 block max-w-[34ch] font-mono text-[10.5px] leading-[1.5] tracking-[0.06em] text-bone/55 uppercase">
                {f.lead}
              </span>
            </a>
          ))}

          <a
            href={contactHref}
            onClick={() => setOpen(false)}
            className={`mt-8 inline-block self-start rounded-full bg-clay px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-bone uppercase no-underline transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            Fale conosco
          </a>
        </div>
      </div>
    </div>
  );
}
