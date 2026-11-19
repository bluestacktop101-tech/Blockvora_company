const steps = [
  {
    title: "Discover",
    body: "Map constraints, stakeholders, and the system that must survive review — not just a demo.",
  },
  {
    title: "Build",
    body: "Ship architecture, product surfaces, and integrations with senior ownership on the critical path.",
  },
  {
    title: "Deploy",
    body: "Hardened environments, observability, and handoff packages operators can actually run.",
  },
  {
    title: "Scale",
    body: "Iterate under load — eval gates, policy updates, and delivery that stays operable after launch.",
  },
] as const;

export function HowWeWork() {
  return (
    <section id="how-we-work" className="border-border border-t bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          How we work
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A clear path from problem to production
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
          Four stages. Explicit ownership. Continuous validation.
        </p>

        <div className="relative mt-10">
          <div
            className="bg-border absolute top-5 right-[12.5%] left-[12.5%] hidden h-px lg:block"
            aria-hidden="true"
          />
          <div
            className="bg-foreground absolute top-5 left-[12.5%] hidden h-px lg:block"
            style={{ width: "75%" }}
            aria-hidden="true"
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className="border-border bg-card relative h-full rounded-xl border p-5">
                  <span className="border-border bg-card text-foreground relative z-10 flex size-8 items-center justify-center rounded-full border font-mono text-[0.7rem] font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
