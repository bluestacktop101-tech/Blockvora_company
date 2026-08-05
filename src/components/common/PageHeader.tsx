import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="glow-orb bg-primary/40 -top-24 left-1/4 size-[26rem]" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <span className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
            <span className="bg-primary size-1.5 rounded-full" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.03] font-semibold text-balance sm:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
              {description}
            </p>
          ) : null}
          {meta ? (
            <div className="text-muted-foreground mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {meta}
            </div>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </Reveal>
      </Container>
    </header>
  );
}
