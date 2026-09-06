import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { caseStudies } from "@/content/case-studies";
import { imageForCaseStudy, imageForSolution } from "@/content/media";
import { solutions } from "@/content/solutions";
import { pageHead } from "@/lib/seo";

const description =
  "Marketplace of shipped platforms, listed programs, and high-signal outcomes across AI, blockchain, and RWA.";

export const Route = createFileRoute("/marketplace")({
  head: () => pageHead({ title: "Marketplace", description, path: "/marketplace" }),
  component: Page,
});

function Page() {
  const listings = [
    ...caseStudies.map((item) => ({
      type: "Listed" as const,
      title: item.title,
      meta: item.industry,
      value: item.results[0]?.value ?? "—",
      valueLabel: item.results[0]?.label ?? "result",
      kind: "case" as const,
      slug: item.slug,
      image: imageForCaseStudy(item.slug),
    })),
    ...solutions.map((item) => ({
      type: "Make an offer" as const,
      title: item.shortTitle,
      meta: "Platform",
      value: item.outcomes?.[0]?.value ?? "Build",
      valueLabel: item.outcomes?.[0]?.label ?? "engage",
      kind: "solution" as const,
      slug: item.slug,
      image: imageForSolution(item.slug),
    })),
  ];

  return (
    <>
      <PageHeader eyebrow="Marketplace" title="Browse live listings" description={description} />
      <Section tone="surface">
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {listings.map((item) => (
            <li key={`${item.kind}-${item.slug}`}>
              {item.kind === "case" ? (
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: item.slug }}
                  className="border-border bg-card hover:border-white/20 group flex h-full flex-col overflow-hidden rounded-xl border transition-colors"
                >
                  <ListingBody item={item} />
                </Link>
              ) : (
                <Link
                  to="/solutions/$slug"
                  params={{ slug: item.slug }}
                  className="border-border bg-card hover:border-white/20 group flex h-full flex-col overflow-hidden rounded-xl border transition-colors"
                >
                  <ListingBody item={item} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function ListingBody({
  item,
}: {
  item: {
    type: string;
    title: string;
    meta: string;
    value: string;
    valueLabel: string;
    image: string;
  };
}) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-muted-foreground text-xs">{item.meta}</span>
            <span className="border-border bg-background/70 rounded border px-2 py-0.5 text-[0.65rem] backdrop-blur-sm">
              {item.type}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-lg font-semibold tracking-tight">{item.title}</p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 p-4">
        <div>
          <p className="text-sm font-medium">{item.value}</p>
          <p className="text-muted-foreground text-xs">{item.valueLabel}</p>
        </div>
        <span className="text-muted-foreground group-hover:text-foreground inline-flex items-center gap-1 text-xs">
          Open <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </>
  );
}
