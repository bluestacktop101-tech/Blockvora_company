import type { MetricItem } from "@/content/types";
import { Reveal } from "@/components/common/Reveal";

export function MetricStrip({ items }: { items: MetricItem[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.05}>
          <div className="border-border/70 rounded-3xl border px-5 py-6">
            <dt className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
              {item.label}
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight">{item.value}</dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
