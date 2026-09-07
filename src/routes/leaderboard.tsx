import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { leaderboard } from "@/content/network";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

const description =
  "Live rankings across Blockvora platforms and shipped programs — score, volume, and momentum.";

const filters = ["All", "RWA", "AI", "Blockchain", "Healthcare", "Case study"] as const;

export const Route = createFileRoute("/leaderboard")({
  head: () => pageHead({ title: "Leaderboard", description, path: "/leaderboard" }),
  component: Page,
});

function Page() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const rows = useMemo(() => {
    if (filter === "All") return leaderboard;
    if (filter === "AI") {
      return leaderboard.filter(
        (row) => row.category === "AI" || row.category === "Agents",
      );
    }
    if (filter === "Blockchain") {
      return leaderboard.filter(
        (row) => row.category === "Blockchain" || row.category === "Contracts",
      );
    }
    return leaderboard.filter((row) => row.category === filter);
  }, [filter]);

  return (
    <>
      <PageHeader
        eyebrow="Leaderboard"
        title="Network leaderboard"
        description={description}
        meta={
          <>
            <span>{leaderboard.length} ranked</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>Updated weekly</span>
          </>
        }
        actions={
          <Link
            to="/platforms"
            className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
          >
            Browse platforms
          </Link>
        }
      />

      <Section tone="surface" className="pt-8">
        <div
          className="mb-4 flex flex-wrap gap-1.5"
          role="tablist"
          aria-label="Filter leaderboard"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs transition-colors",
                filter === item
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="border-border overflow-hidden rounded-xl border">
          <div className="text-muted-foreground border-border hidden grid-cols-[3rem_1fr_6rem_5rem_5rem_5rem] gap-3 border-b px-4 py-2 text-[0.7rem] sm:grid">
            <span>#</span>
            <span>Name</span>
            <span>Category</span>
            <span className="text-right">Score</span>
            <span className="text-right">24h</span>
            <span className="text-right">Volume</span>
          </div>
          <ul className="divide-border divide-y">
            {rows.map((row) => (
              <li key={row.rank}>
                {row.href === "/solutions/$slug" && row.slug ? (
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: row.slug }}
                    className="hover:bg-secondary/50 grid grid-cols-[3rem_1fr] items-center gap-3 px-4 py-3 transition-colors sm:grid-cols-[3rem_1fr_6rem_5rem_5rem_5rem]"
                  >
                    <RowBody row={row} />
                  </Link>
                ) : row.href === "/case-studies/$slug" && row.slug ? (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: row.slug }}
                    className="hover:bg-secondary/50 grid grid-cols-[3rem_1fr] items-center gap-3 px-4 py-3 transition-colors sm:grid-cols-[3rem_1fr_6rem_5rem_5rem_5rem]"
                  >
                    <RowBody row={row} />
                  </Link>
                ) : (
                  <Link
                    to="/platforms"
                    className="hover:bg-secondary/50 grid grid-cols-[3rem_1fr] items-center gap-3 px-4 py-3 transition-colors sm:grid-cols-[3rem_1fr_6rem_5rem_5rem_5rem]"
                  >
                    <RowBody row={row} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {rows.length === 0 ? (
          <p className="text-muted-foreground mt-4 text-sm">No rows in this category.</p>
        ) : null}
      </Section>
    </>
  );
}

function RowBody({
  row,
}: {
  row: (typeof leaderboard)[number];
}) {
  const up = row.change.startsWith("+");
  return (
    <>
      <span className="text-muted-foreground text-sm tabular-nums">{row.rank}</span>
      <span className="flex min-w-0 items-center gap-3">
        <img
          src={row.image}
          alt=""
          className="size-9 shrink-0 rounded-md object-cover"
          loading="lazy"
        />
        <span className="truncate text-sm font-medium">{row.name}</span>
      </span>
      <span className="text-muted-foreground hidden text-sm sm:block">{row.category}</span>
      <span className="hidden text-right text-sm font-medium tabular-nums sm:block">
        {row.score}
      </span>
      <span
        className={cn(
          "hidden text-right text-sm tabular-nums sm:block",
          up ? "text-emerald-700" : "text-red-700",
        )}
      >
        {row.change}
      </span>
      <span className="hidden text-right text-sm tabular-nums sm:block">{row.volume}</span>
    </>
  );
}
