import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

const interests = [
  "AI platform",
  "Blockchain / RWA",
  "Healthcare AI",
  "Smart contracts",
  "Careers",
  "Other",
] as const;

const fieldClass =
  "border-border bg-background focus-visible:ring-ring mt-2 w-full rounded-md border px-3 py-2.5 text-sm outline-none focus-visible:ring-2";

export function ContactForm({
  defaultInterest,
  defaultRole,
}: {
  defaultInterest?: string;
  defaultRole?: string;
} = {}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const interestValue =
    defaultInterest && interests.includes(defaultInterest as (typeof interests)[number])
      ? defaultInterest
      : defaultRole
        ? "Careers"
        : "AI platform";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border-border bg-card rounded-xl border p-8 sm:p-10">
        <p className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.16em] uppercase">
          Message received
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          Thank you — we&apos;ll be in touch.
        </h3>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          A Blockvora lead typically responds within one business day. For urgent matters, email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-border bg-card space-y-5 rounded-xl border p-6 sm:p-8">
      {defaultRole ? <input type="hidden" name="role" value={defaultRole} /> : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Field label="Company" name="company" autoComplete="organization" />
      <div>
        <label htmlFor="interest" className="text-sm font-medium">
          Interest
        </label>
        <select
          id="interest"
          name="interest"
          className={fieldClass}
          defaultValue={interestValue}
        >
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {defaultRole ? "Why this role?" : "How can we help?"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder={
            defaultRole
              ? `I'm applying for ${defaultRole}. Here's what I've built and why I'm interested…`
              : "Share goals, timelines and constraints…"
          }
          defaultValue={defaultRole ? `I'm applying for ${defaultRole}.\n\n` : undefined}
        />
      </div>
      <button
        type="submit"
        className="bg-foreground text-background hover:bg-foreground/90 inline-flex min-h-10 w-full items-center justify-center rounded-md px-5 text-sm font-medium sm:w-auto"
      >
        {defaultRole ? "Submit application" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
