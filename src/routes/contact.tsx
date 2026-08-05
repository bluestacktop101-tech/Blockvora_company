import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/marketing/ContactForm";
import { siteConfig } from "@/config/site";
import { pageHead } from "@/lib/seo";

const description =
  "Tell us about your AI, blockchain or platform initiative. We'll respond within one business day.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title: "Contact", description, path: "/contact" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description={description}
      />
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Direct channels</h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Prefer email? Start there. For RFP timelines or security questionnaires, mention it in
              your note so we route the right people.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <Mail className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.phone}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Studio</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.address}</p>
                </div>
              </li>
            </ul>
          </Reveal>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
