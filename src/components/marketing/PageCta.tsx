import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { GradientButton } from "@/components/common/GradientButton";

export function PageCta({
  eyebrow = "Start a project",
  title = "Have an Idea Worth Building?",
  description = "Tell us about the system you need. We'll help you scope it, architect it and ship it with the rigor your stakeholders expect.",
  primary = { label: "Start a Project", to: "/contact" },
  secondary = { label: "View Case Studies", to: "/case-studies" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string } | null;
}) {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div
        className="glow-orb top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <span className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
          <span className="bg-primary size-1.5 rounded-full" />
          {eyebrow}
        </span>
        <h2 className="mt-8 text-3xl leading-[1.05] font-semibold text-balance sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton to={primary.to}>{primary.label}</GradientButton>
          {secondary ? (
            <GradientButton to={secondary.to} variant="outline">
              {secondary.label}
            </GradientButton>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
