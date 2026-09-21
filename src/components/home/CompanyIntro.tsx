import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export function CompanyIntro() {
  return (
    <section id="company" className="border-border border-t bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
              Company
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A technology company building the next stack
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty">
              {siteConfig.vision}
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty">
              We are early. The platforms on this site are prototypes — real engineering direction,
              honest scope, based in {siteConfig.address}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
              >
                About Blockvora
              </Link>
              <Link
                to="/careers"
                className="border-border text-foreground hover:bg-card inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
              >
                Careers
              </Link>
            </div>
          </div>

          <dl className="border-border bg-card grid overflow-hidden rounded-xl border sm:grid-cols-2">
            {[
              { label: "Focus", value: "AI · Blockchain · RWA" },
              { label: "Stage", value: "Prototype platforms" },
              { label: "HQ", value: siteConfig.address },
              { label: "Contact", value: siteConfig.email },
            ].map((row) => (
              <div
                key={row.label}
                className="border-border border-b p-5 sm:border-r sm:odd:border-r sm:even:border-r-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0"
              >
                <dt className="text-muted-foreground text-xs">{row.label}</dt>
                <dd className="mt-1.5 text-sm font-medium break-all">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
