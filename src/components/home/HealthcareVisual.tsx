import { Activity, BrainCircuit, FileText } from "lucide-react";

const signals = [
  { label: "Triage accuracy", value: "Eval-gated" },
  { label: "Chart review", value: "Assisted" },
  { label: "Data plane", value: "PHI-safe" },
];

export function HealthcareVisual() {
  return (
    <div className="border-border bg-card relative overflow-hidden rounded-xl border p-6 sm:p-8">
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="border-border bg-secondary text-foreground flex size-9 items-center justify-center rounded-md border">
            <BrainCircuit className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">Clinical intelligence</p>
            <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.14em] uppercase">
              Private deployment
            </p>
          </div>
        </div>
        <span className="border-border text-muted-foreground rounded-md border px-2.5 py-1 font-mono text-[0.65rem]">
          FHIR · HL7
        </span>
      </div>

      <div className="bg-muted relative mt-8 flex h-28 items-end gap-1.5 rounded-md p-3" aria-hidden="true">
        {[38, 62, 48, 80, 56, 92, 70, 84, 60, 96].map((height, index) => (
          <span
            key={index}
            className="bg-foreground/70 flex-1 rounded-t-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <dl className="relative mt-6 grid grid-cols-3 gap-3">
        {signals.map((signal) => (
          <div key={signal.label} className="border-border bg-background rounded-md border p-3">
            <dt className="text-muted-foreground text-[0.68rem] leading-snug">{signal.label}</dt>
            <dd className="mt-1.5 text-sm font-semibold tracking-tight">{signal.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-border bg-background relative mt-4 rounded-md border p-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Summaries cite source encounters. Clinicians accept, edit, or reject before anything
          reaches the chart.
        </p>
      </div>

      <div className="text-muted-foreground relative mt-4 flex items-center gap-4 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
        <span className="flex items-center gap-1.5">
          <FileText className="size-3.5" aria-hidden="true" /> FHIR
        </span>
        <span className="flex items-center gap-1.5">
          <Activity className="size-3.5" aria-hidden="true" /> HL7
        </span>
        <span>HIPAA</span>
      </div>
    </div>
  );
}
