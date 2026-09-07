import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/content/case-studies";
import { imageForCaseStudy, imageForSolution } from "@/content/media";
import { solutions } from "@/content/solutions";

export function TrendingGrid() {
  const caseCards = caseStudies.map((item) => ({
    title: item.title,
    meta: item.industry,
    status: "Listed" as const,
    price: item.results[0]?.value ?? "—",
    fmv: item.results[0]?.label ?? "result",
    slug: item.slug,
    type: "case" as const,
    image: imageForCaseStudy(item.slug),
  }));

  const solutionCards = solutions.slice(0, 6).map((item) => ({
    title: item.shortTitle,
    meta: "Platform",
    status: "Make an offer" as const,
    price: item.outcomes?.[0]?.value ?? "—",
    fmv: item.outcomes?.[0]?.label ?? "engage",
    slug: item.slug,
    type: "solution" as const,
    image: imageForSolution(item.slug),
  }));

  const cards = [...caseCards, ...solutionCards].slice(0, 12);

  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Trending</h2>
        <Link to="/marketplace" className="text-muted-foreground hover:text-foreground text-sm">
          View all
        </Link>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {cards.map((card) => (
          <li key={`${card.type}-${card.slug}`}>
            {card.type === "case" ? (
              <Link
                to="/case-studies/$slug"
                params={{ slug: card.slug }}
                className="border-border bg-card hover:border-foreground/20 group flex h-full flex-col overflow-hidden rounded-xl border transition-colors"
              >
                <CardBody card={card} />
              </Link>
            ) : (
              <Link
                to="/solutions/$slug"
                params={{ slug: card.slug }}
                className="border-border bg-card hover:border-foreground/20 group flex h-full flex-col overflow-hidden rounded-xl border transition-colors"
              >
                <CardBody card={card} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CardBody({
  card,
}: {
  card: {
    title: string;
    meta: string;
    status: string;
    price: string;
    fmv: string;
    image: string;
  };
}) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={card.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-muted-foreground text-xs">{card.meta}</p>
          <p className="mt-1 line-clamp-2 text-base font-semibold leading-snug">{card.title}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium">{card.price}</p>
            <p className="text-muted-foreground text-xs">FMV {card.fmv}</p>
          </div>
          <span className="text-muted-foreground group-hover:text-foreground text-xs">
            {card.status}
          </span>
        </div>
      </div>
    </>
  );
}
