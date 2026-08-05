import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { RwaFlow } from "./RwaFlow";

const outcomes = [
  "Compliant issuance rails for real estate, funds and commodities",
  "Cryptographic proof of title, custody and transfer",
  "Primary markets and secondary liquidity with automated settlement",
];

export function Rwa() {
  return (
    <Section id="rwa" tone="surface" className="overflow-hidden">
      <div
        className="glow-orb top-1/2 -right-24 size-[28rem] -translate-y-1/2 opacity-40"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Real World Assets"
          title="Turning Real-World Assets Into Digital Infrastructure"
          description="Blockvora builds the issuance rails, compliance logic and investor experiences that move physical value onto programmable networks."
          className="mx-auto"
        />
      </div>

      <Reveal delay={0.12} className="relative mt-16">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
          <div
            className="grid-lines pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          />
          <p className="text-muted-foreground relative mb-10 text-center font-mono text-[0.65rem] tracking-[0.28em] uppercase">
            Asset → Tokenization → Blockchain → Digital Ownership → Marketplace
          </p>
          <RwaFlow />
        </div>
      </Reveal>

      <ul className="relative mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {outcomes.map((outcome, index) => (
          <Reveal as="li" key={outcome} delay={0.08 + index * 0.06}>
            <p className="text-muted-foreground border-border/70 border-l-2 pl-4 text-sm leading-relaxed sm:text-[0.95rem]">
              {outcome}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
