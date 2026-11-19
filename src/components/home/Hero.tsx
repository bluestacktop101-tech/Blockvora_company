import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";

const stats = [
  { value: "12+", label: "Years engineering" },
  { value: "180+", label: "Systems shipped" },
  { value: "NDA", label: "Client engagements" },
];

const capabilities = ["Artificial Intelligence", "Blockchain", "RWA", "Healthcare AI", "Web3"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24">
      <Container className="relative">
        <div className="max-w-3xl">
          <span className="border-border text-muted-foreground inline-flex items-center rounded-md border px-3 py-1 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
            AI · Blockchain · RWA
          </span>

          <h1 className="mt-6 text-[2.4rem] leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
            Engineering systems for AI, blockchain and real-world assets
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
            Blockvora designs and builds production software where architecture, security and
            reliability matter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium"
            >
              Start a project <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/solutions"
              className="border-border text-foreground hover:bg-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium"
            >
              Explore solutions <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="border-border text-muted-foreground rounded-md border px-3 py-1 text-xs"
              >
                {item}
              </li>
            ))}
          </ul>

          <dl className="border-border mt-12 grid max-w-lg grid-cols-3 gap-4 border-t pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-muted-foreground text-xs">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
