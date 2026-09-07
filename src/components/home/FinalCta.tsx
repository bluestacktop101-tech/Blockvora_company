import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";

export function FinalCta() {
  return (
    <Section id="contact-cta" tone="surface">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          Start a project
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Have a system worth building?
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base leading-relaxed">
          Tell us about the architecture and constraints. We&apos;ll help you scope it and ship it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton to="/contact">Start a project</GradientButton>
          <GradientButton to="/case-studies" variant="outline">
            View projects
          </GradientButton>
        </div>
      </Reveal>
    </Section>
  );
}
