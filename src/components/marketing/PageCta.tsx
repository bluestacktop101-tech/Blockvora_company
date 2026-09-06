import { Link } from "@tanstack/react-router";
import { Section } from "@/components/common/Section";
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
  primary?: { label: string; to: string; search?: Record<string, string> };
  secondary?: { label: string; to: string } | null;
}) {
  return (
    <Section tone="dark">
      <div className="border-border bg-card mx-auto max-w-3xl rounded-xl border p-8 text-center sm:p-10">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row">
          {primary.search ? (
            <Link
              to={primary.to}
              search={primary.search}
              className="bg-foreground text-background inline-flex min-h-10 items-center justify-center rounded-md px-4 text-sm font-medium"
            >
              {primary.label}
            </Link>
          ) : (
            <GradientButton to={primary.to}>{primary.label}</GradientButton>
          )}
          {secondary ? (
            <GradientButton to={secondary.to} variant="outline">
              {secondary.label}
            </GradientButton>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
