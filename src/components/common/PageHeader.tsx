import type { ReactNode } from "react";
import { Container } from "./Container";

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
    <header className="border-border border-b pt-8 pb-10 sm:pt-10 sm:pb-12">
      <Container>
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            {description}
          </p>
        ) : null}
        {meta ? (
          <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {meta}
          </div>
        ) : null}
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </header>
  );
}
