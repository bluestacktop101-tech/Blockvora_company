import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const steps = [
  "Discovery",
  "Strategy",
  "Architecture",
  "Design",
  "Engineering",
  "Testing",
  "Deployment",
  "Scale",
] as const;

export function Process() {
  return (
    <Section id="process" tone="surface" className="overflow-hidden">
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="Development Process"
          title="From Ambiguity to Production"
          description="A disciplined delivery model that moves from problem framing to systems that scale — without skipping the hard parts."
        />
        <Reveal delay={0.1}>
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed lg:text-right lg:text-base">
            Eight stages. Clear ownership. Continuous validation at every gate.
          </p>
        </Reveal>
      </div>

      <ol className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal as="li" key={step} delay={index * 0.02} className="min-h-0">
            <div className="bg-surface hover:bg-card relative flex h-full min-h-[7.5rem] flex-col justify-between p-5 transition-colors sm:min-h-[9rem] sm:p-6">
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.16em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{step}</h3>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
