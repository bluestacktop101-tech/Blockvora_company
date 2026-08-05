import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";

export function FinalCta() {
  return (
    <Section id="contact-cta" tone="dark" className="overflow-hidden">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div
        className="glow-orb top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-55"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <span className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
          <span className="bg-primary size-1.5 rounded-full" />
          Start a project
        </span>
        <h2 className="mt-8 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
          Have an Idea Worth Building?
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty">
          Tell us about the system you need. We&apos;ll help you scope it, architect it and ship it
          with the rigor your stakeholders expect.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton to="/contact">Start a Project</GradientButton>
          <GradientButton to="/case-studies" variant="outline">
            View Case Studies
          </GradientButton>
        </div>
      </Reveal>
    </Section>
  );
}
