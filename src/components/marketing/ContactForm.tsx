import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="glass rounded-3xl p-8 sm:p-10">
        <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-cyan">
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
    <form onSubmit={onSubmit} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
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
          className="border-border bg-background/70 focus-visible:ring-ring mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          defaultValue="AI platform"
        >
          <option>AI platform</option>
          <option>Blockchain / RWA</option>
          <option>Healthcare AI</option>
          <option>Smart contracts</option>
          <option>Careers</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border-border bg-background/70 focus-visible:ring-ring mt-2 w-full resize-y rounded-2xl border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          placeholder="Share goals, timelines and constraints…"
        />
      </div>
      <button
        type="submit"
        className="text-primary-foreground bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)] inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Send message
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
        className="border-border bg-background/70 focus-visible:ring-ring mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus-visible:ring-2"
      />
    </div>
  );
}
