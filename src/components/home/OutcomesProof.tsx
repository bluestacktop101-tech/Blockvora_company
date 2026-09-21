const outcomes = [
  {
    value: "5",
    label: "Active prototypes",
    detail: "ATLAS, Agents, CLINIC, LEDGER, and NOVA — early product surfaces in development.",
  },
  {
    value: "3",
    label: "Core domains",
    detail: "Production AI, institutional blockchain, and real-world assets.",
  },
  {
    value: "Open",
    label: "Build partners",
    detail: "We collaborate with teams who need serious systems — not pitch-deck demos.",
  },
  {
    value: "Day two",
    label: "Design standard",
    detail: "Architecture, security, and operability planned in from the first prototype.",
  },
];

export function OutcomesProof() {
  return (
    <section id="outcomes" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          Focus
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Early stage. Clear direction.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
          Blockvora is building in public as prototypes mature — without inventing marketplace
          metrics or trading-terminal theater.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <li key={item.label}>
              <div className="border-border bg-card h-full rounded-xl border p-5">
                <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-2 text-sm font-medium">{item.label}</p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
