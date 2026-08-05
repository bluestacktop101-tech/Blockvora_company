import {
  BrainCircuit,
  Boxes,
  ShieldCheck,
  Network,
  Lightbulb,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI Expertise",
    description: "Production LLM systems, agents and evaluation loops built for regulated data.",
    icon: BrainCircuit,
  },
  {
    title: "Blockchain Expertise",
    description:
      "Protocol design, smart contracts and tokenization platforms at institutional grade.",
    icon: Boxes,
  },
  {
    title: "Security First",
    description: "Threat modeling, audits and hardened delivery from architecture through ops.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed for load, observability and long-term evolution — not demos.",
    icon: Network,
  },
  {
    title: "Product Thinking",
    description: "Outcomes over features. We shape roadmaps that users and operators adopt.",
    icon: Lightbulb,
  },
  {
    title: "Enterprise Engineering",
    description: "Process, documentation and reliability that hold up under enterprise scrutiny.",
    icon: Building2,
  },
];

export function WhyBlockvora() {
  return (
    <Section id="why-blockvora" tone="dark" className="overflow-hidden">
      <div
        className="glow-orb top-1/3 -left-24 size-[26rem] opacity-35"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Why Blockvora"
          title="Built for the Hard Problems"
          description="Deep technical fluency paired with the rigor enterprises expect — so ambitious products actually ship."
        />
      </div>

      <ul className="relative mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal as="li" key={reason.title} delay={index * 0.05}>
              <article className="border-border/60 h-full border-t py-8">
                <Icon className="text-primary size-5" aria-hidden="true" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{reason.title}</h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
