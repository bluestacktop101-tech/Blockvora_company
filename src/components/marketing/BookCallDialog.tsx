import { useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

const fieldClass =
  "border-border bg-background focus-visible:ring-ring mt-1.5 w-full rounded-md border px-3 py-2.5 text-sm outline-none focus-visible:ring-2";

export function BookCallDialog({ children }: { children: ReactNode }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setSent(false);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[min(90vh,44rem)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a free strategy call</DialogTitle>
          <DialogDescription>
            Tell us what you are building. We reply within one business day.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            Thank you. A Blockvora lead will follow up shortly. For anything urgent, email{" "}
            <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                First name <span className="text-destructive">*</span>
                <input name="firstName" required autoComplete="given-name" className={fieldClass} />
              </label>
              <label className="text-sm font-medium">
                Last name <span className="text-destructive">*</span>
                <input name="lastName" required autoComplete="family-name" className={fieldClass} />
              </label>
            </div>
            <label className="text-sm font-medium">
              Email address <span className="text-destructive">*</span>
              <input name="email" type="email" required autoComplete="email" className={fieldClass} />
            </label>
            <label className="text-sm font-medium">
              Phone number
              <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
            </label>
            <label className="text-sm font-medium">
              Company name
              <input name="company" autoComplete="organization" className={fieldClass} />
            </label>
            <label className="text-sm font-medium">
              Message
              <textarea name="message" rows={4} className={fieldClass} />
            </label>
            <button
              type="submit"
              className={bookCallClassName("w-full")}
            >
              Submit
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function bookCallClassName(className = "") {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,oklch(0.78_0.14_205),oklch(0.62_0.21_264)_46%,oklch(0.6_0.23_300))] px-5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_oklch(0.6_0.23_300)] transition-transform hover:-translate-y-0.5 ${className}`;
}
