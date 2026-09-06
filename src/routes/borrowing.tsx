import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { borrowOffers, creditSteps } from "@/content/network";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

const description =
  "Borrow against tokenized collateral with clear LTV limits, liquidation rules, and operator visibility.";

export const Route = createFileRoute("/borrowing")({
  head: () => pageHead({ title: "Borrowing", description, path: "/borrowing" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Borrowing"
        title="Collateralized borrowing"
        description={description}
        meta={
          <>
            <span>4 offer types</span>
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
              Request borrow access
            </Link>
            <Link
              to="/lending"
              className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
            >
              View lending markets
            </Link>
          </>
        }
      />

      <Section tone="surface" className="pt-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight">Borrow offers</h2>
          <p className="text-muted-foreground text-xs">Rates indicative · subject to collateral review</p>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {borrowOffers.map((offer) => (
            <li key={offer.id} className="border-border bg-card overflow-hidden rounded-xl border">
              <div className="grid sm:grid-cols-[7.5rem_1fr]">
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-full">
                  <img
                    src={offer.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold tracking-tight">{offer.name}</h3>
                      <p className="text-muted-foreground mt-1 text-xs">{offer.collateral}</p>
                    </div>
                    <span
                      className={cn(
                        "rounded px-2 py-0.5 text-[0.7rem]",
                        offer.status === "open"
                          ? "bg-foreground text-background"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      {offer.status === "open" ? "Open" : "Waitlist"}
                    </span>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-muted-foreground text-[0.7rem]">Max LTV</dt>
                      <dd className="mt-0.5 font-medium">{offer.maxLtv}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-[0.7rem]">Rate</dt>
                      <dd className="mt-0.5 font-medium">{offer.rate}</dd>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <dt className="text-muted-foreground text-[0.7rem]">Liquidation</dt>
                      <dd className="mt-0.5 font-medium">{offer.liquidation}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <h2 className="text-lg font-semibold tracking-tight">Borrower flow</h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {creditSteps.map((step, index) => (
            <li key={step.title} className="border-border bg-card rounded-xl border p-4">
              <p className="text-muted-foreground text-xs">0{index + 1}</p>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="border-border bg-card mt-8 rounded-xl border p-5">
          <p className="font-medium">Collateral checklist</p>
          <ul className="text-muted-foreground mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>Verified ownership / custody attestation</li>
            <li>Eligibility & transfer restrictions mapped</li>
            <li>Valuation source + refresh cadence</li>
            <li>Liquidation path agreed with partners</li>
          </ul>
          <Link
            to="/contact"
            className="bg-foreground text-background mt-5 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
          >
            Start collateral review
          </Link>
        </div>
      </Section>
    </>
  );
}
