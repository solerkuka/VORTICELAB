import { Link, createFileRoute } from "@tanstack/react-router";
import { HeroSpiral, P2Shell } from "@/components/vortice/p2";
import { ARTICLES } from "@/content/editorial";
import { FRENTES } from "@/content/frentes";

const F = FRENTES.find((f) => f.key === "editorial")!;
const TITLE = "Editorial — VórticeLab";
const DESCRIPTION =
  "Como instituições de alta exigência incorporam a leitura energética ao próprio rigor operacional.";

export const Route = createFileRoute("/editorial/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditorialIndex,
});

function EditorialIndex() {
  return (
    <P2Shell current="editorial">
      <header className="page-head" style={{ ["--acc" as string]: F.accent }}>
        <HeroSpiral />
        <div className="hero-content">
          <p className="kicker reveal">Editorial</p>
          <h1 className="reveal d1">{F.title}</h1>
          <p className="lead reveal d2">{F.line}</p>
        </div>
      </header>

      <section style={{ ["--acc" as string]: F.accent }}>
        <p className="section-label reveal">Artigos</p>
        <div className="articles">
          {ARTICLES.map((a, i) => (
            <Link
              key={a.slug}
              className={`article-card reveal d${i + 1}`}
              to="/editorial/$slug"
              params={{ slug: a.slug }}
            >
              <h3>{a.title}</h3>
              <p>{a.subtitle}</p>
              <span className="go">Leia na íntegra →</span>
            </Link>
          ))}
        </div>
      </section>
    </P2Shell>
  );
}
