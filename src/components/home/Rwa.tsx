import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { RwaFlow } from "./RwaFlow";

const outcomes = [
  "Compliant issuance rails for real estate, funds and commodities",
  "Proof of title, custody and transfer in the critical path",
  "Primary markets and secondary liquidity with settlement ops",
];

export function Rwa() {
  return (
    <Section id="rwa" tone="surface">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Real World Assets"
          title="Turning assets into operable digital infrastructure"
          description="Issuance rails, compliance logic and investor experiences that move physical value onto programmable networks."
          className="mx-auto"
        />
      </div>

      <Reveal delay={0.05} className="mt-12">
        <div className="border-border bg-card relative overflow-hidden rounded-xl border px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-muted-foreground relative mb-8 text-center font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            Asset → Tokenization → Blockchain → Ownership → Marketplace
          </p>
          <RwaFlow />
        </div>
      </Reveal>

      <ul className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
        {outcomes.map((outcome, index) => (
          <Reveal as="li" key={outcome} delay={0.04 + index * 0.03}>
            <p className="text-muted-foreground border-border border-l-2 pl-4 text-sm leading-relaxed">
              {outcome}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
