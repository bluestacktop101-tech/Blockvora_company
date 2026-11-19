import { Link } from "@tanstack/react-router";
import { BrainCircuit, Landmark, Boxes } from "lucide-react";

const areas = [
  {
    title: "Production AI",
    description:
      "Private LLM systems, retrieval, agents, and evaluation gates built for regulated data and day-two operations.",
    icon: BrainCircuit,
    to: "/solutions/$slug" as const,
    slug: "ai-development",
  },
  {
    title: "Institutional blockchain",
    description:
      "Smart contracts, settlement rails, custody coordination, and ops tooling that clear security review.",
    icon: Boxes,
    to: "/solutions/$slug" as const,
    slug: "blockchain",
  },
  {
    title: "Real-world assets",
    description:
      "Issuance, policy, secondary markets, and investor experiences for funds, property, and private markets.",
    icon: Landmark,
    to: "/solutions/$slug" as const,
    slug: "rwa-tokenization",
  },
];

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="border-border border-t bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          What we build
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Three domains. One engineering direction.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
          We prototype where architecture, security, and operability matter — before claiming
          production theater.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <li key={area.title}>
                <Link
                  to={area.to}
                  params={{ slug: area.slug }}
                  className="border-border bg-card hover:border-foreground/25 flex h-full flex-col rounded-xl border p-6"
                >
                  <span className="border-border bg-secondary text-foreground inline-flex size-10 items-center justify-center rounded-md border">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{area.title}</h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <span className="text-foreground mt-5 text-sm font-medium">Learn more</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
