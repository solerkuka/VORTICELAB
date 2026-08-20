import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ARTICLES, getArticle } from "@/content/editorial";
import { Rings } from "@/components/vortice/field";
import { Footer } from "@/components/vortice/sections";

export const Route = createFileRoute("/editorial/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Editorial — VórticeLab" }, { name: "robots", content: "noindex" }],
      };
    }
    const { title, subtitle } = loaderData.article;
    const full = `${title} — VórticeLab`;
    return {
      meta: [
        { title: full },
        { name: "description", content: subtitle },
        { property: "og:title", content: full },
        { property: "og:description", content: subtitle },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const others = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <main className="band-dark relative min-h-screen overflow-hidden">
      <Rings
        className="pointer-events-none absolute -top-24 -right-24 size-[280px] opacity-60 sm:size-[420px]"
        color="var(--ember)"
        count={6}
        gap={28}
        sweep={0.4}
        rotate={200}
        opacity={0.16}
      />

      <div className="relative z-[1] mx-auto w-full max-w-[1040px] px-7">
        <nav className="flex items-center justify-between py-6">
          <Link to="/" className="font-display text-[19px] italic tracking-[0.02em] no-underline">
            VórticeLab
          </Link>
          <a
            className="rounded-full border border-bone/35 px-[18px] py-[9px] font-mono text-xs tracking-[0.08em] uppercase no-underline transition-colors duration-250 hover:border-ember hover:bg-ember hover:text-ink"
            href="/#contato"
          >
            Fale conosco
          </a>
        </nav>
      </div>

      <article className="relative z-[1] mx-auto w-full max-w-[720px] px-7 pb-4">
        <a
          href="/#editorial"
          className="mt-2 mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[0.06em] text-bone/50 uppercase no-underline transition-colors hover:text-ember"
        >
          ← Editorial
        </a>

        <header className="mb-12 border-b border-bone/10 pb-11">
          <span className="mb-5 block font-mono text-[11px] tracking-[0.22em] text-ember uppercase">
            Editorial
          </span>
          <h1 className="m-0 mb-[18px] font-display text-[clamp(30px,5vw,46px)] leading-[1.12] font-light text-bone">
            {article.title}
          </h1>
          <p className="m-0 mb-[26px] max-w-[52ch] font-display text-[19px] font-light text-bone/65 italic">
            {article.subtitle}
          </p>
          <span className="font-mono text-xs tracking-[0.04em] text-bone/40">Por VórticeLab</span>
        </header>

        <div className="article-body">
          {article.paragraphs.map((p, i) => (
            <p key={i} className="m-0 mb-7 max-w-[66ch] text-[17px] leading-[1.85] text-bone/88 sm:text-[18px]">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-[10px] border border-bone/12 bg-ink-raise px-8 py-11 text-center">
          <p className="m-0 mb-6 font-display text-[19px] font-light text-bone/80 italic">
            Discrição e método, aplicados à sua próxima decisão.
          </p>
          <a
            href="/#contato"
            className="inline-block rounded-full bg-ember px-7 py-3 font-mono text-xs tracking-[0.12em] text-ink uppercase no-underline transition-colors duration-250 hover:bg-ember-bright"
          >
            Fale conosco
          </a>
        </div>

        <div className="mt-16 border-t border-bone/10 pt-10 pb-16">
          <p className="m-0 mb-6 font-mono text-[11px] tracking-[0.18em] text-bone/45 uppercase">
            Continue lendo
          </p>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/editorial/$slug"
                params={{ slug: o.slug }}
                className="block rounded-lg border border-bone/12 px-[22px] py-5 no-underline transition-colors duration-250 hover:border-ember"
              >
                <span className="mb-2 block font-mono text-[10px] tracking-[0.1em] text-moss-bright uppercase">
                  Editorial
                </span>
                <h2 className="m-0 font-display text-[16px] leading-[1.35] font-normal text-bone">
                  {o.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
