import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { creditSteps, lendingMarkets } from "@/content/network";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

const description =
  "Supply liquidity against tokenized real-world assets — transparent APY, LTV, and custody-backed markets.";

export const Route = createFileRoute("/lending")({
  head: () => pageHead({ title: "Lending", description, path: "/lending" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Lending"
        title="Credit markets for tokenized assets"
        description={description}
        meta={
          <>
            <span>4 markets</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>Open beta</span>
          </>
        }
        actions={
          <>
            <Link
              to="/contact"
              className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
            >
              Join lender waitlist
            </Link>
            <Link
              to="/borrowing"
              className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
            >
              View borrowing
            </Link>
          </>
        }
      />

      <Section tone="surface" className="pt-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight">Markets</h2>
          <p className="text-muted-foreground text-xs">Rates indicative · subject to diligence</p>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {lendingMarkets.map((market) => (
            <li
              key={market.id}
              className="border-border bg-card overflow-hidden rounded-xl border"
            >
              <div className="grid sm:grid-cols-[7.5rem_1fr]">
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-full">
                  <img
                    src={market.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold tracking-tight">{market.name}</h3>
                      <p className="text-muted-foreground mt-1 text-xs">{market.asset}</p>
                    </div>
                    <span
                      className={cn(
                        "rounded px-2 py-0.5 text-[0.7rem]",
                        market.status === "open"
                          ? "bg-foreground text-background"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      {market.status === "open"
                        ? "Open"
                        : market.status === "paused"
                          ? "Paused"
                          : "Waitlist"}
                    </span>
                  </div>
                  <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground text-[0.7rem]">APY</dt>
                      <dd className="mt-0.5 font-medium">{market.apy}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-[0.7rem]">TVL</dt>
                      <dd className="mt-0.5 font-medium">{market.tvl}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-[0.7rem]">LTV</dt>
                      <dd className="mt-0.5 font-medium">{market.ltv}</dd>
                    </div>
                  </dl>
                  <p className="text-muted-foreground mt-3 text-xs">Tenor {market.tenor}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <h2 className="text-lg font-semibold tracking-tight">How lending works</h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {creditSteps.map((step, index) => (
            <li key={step.title} className="border-border bg-card rounded-xl border p-4">
              <p className="text-muted-foreground text-xs">0{index + 1}</p>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="border-border bg-card mt-8 flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">Ready to supply liquidity?</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Open markets are live in beta. Waitlisted pools open after diligence.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-foreground text-background inline-flex min-h-10 items-center justify-center rounded-md px-4 text-sm font-medium"
          >
            Talk to capital markets
          </Link>
        </div>
      </Section>
    </>
  );
}
