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

      <ol className="relative mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/50 sm:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal as="li" key={step} delay={index * 0.04} className="min-h-0">
            <div className="group bg-surface hover:bg-card relative flex h-full min-h-[8.5rem] flex-col justify-between p-5 transition-colors duration-500 sm:min-h-[10rem] sm:p-6">
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.22em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{step}</h3>
                <span
                  className="mt-3 block h-px w-8 origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
