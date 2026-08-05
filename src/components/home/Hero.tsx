import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";

const NetworkVisual = lazy(() =>
  import("./NetworkVisual").then((module) => ({ default: module.NetworkVisual })),
);

const stats = [
  { value: "12+", label: "Years engineering" },
  { value: "180+", label: "Systems shipped" },
  { value: "$2.4B", label: "Assets tokenized" },
];

const capabilities = ["Artificial Intelligence", "Blockchain", "RWA", "Healthcare AI", "Web3"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[image:var(--gradient-glow)] opacity-40"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <span
              className="border-border text-muted-foreground animate-hero-in inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.65rem] tracking-[0.22em] uppercase"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="bg-cyan size-1.5 rounded-full" />
              AI · Blockchain · RWA
            </span>

            <h1
              className="animate-hero-in mt-7 text-[2.6rem] leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-[4.2rem]"
              style={{ animationDelay: "0.12s" }}
            >
              Building the Future with <span className="text-gradient">AI &amp; Blockchain</span>
            </h1>

            <p
              className="text-muted-foreground animate-hero-in mt-7 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              Blockvora engineers intelligent software, blockchain infrastructure, RWA platforms,
              and AI-powered products for the next generation of businesses.
            </p>

            <div
              className="animate-hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.28s" }}
            >
              <Link
                to="/contact"
                className="text-primary-foreground focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Start a Project <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/solutions"
                className="border-border text-foreground hover:bg-secondary focus-visible:ring-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Explore Solutions <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ul
              className="animate-hero-in mt-10 flex flex-wrap gap-x-5 gap-y-2"
              style={{ animationDelay: "0.36s" }}
            >
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="text-muted-foreground font-mono text-[0.68rem] tracking-[0.16em] uppercase"
                >
                  {c}
                </li>
              ))}
            </ul>

            <dl
              className="border-border animate-hero-in mt-10 grid max-w-lg grid-cols-3 gap-6 border-t pt-8"
              style={{ animationDelay: "0.42s" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display block text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="text-muted-foreground mt-1 block text-xs leading-snug">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[18rem] sm:min-h-[22rem]">
            <Suspense
              fallback={
                <div
                  className="bg-card/30 mx-auto aspect-square w-full max-w-[34rem] rounded-full opacity-40"
                  aria-hidden="true"
                />
              }
            >
              <div className="animate-float-slow">
                <NetworkVisual />
              </div>
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
