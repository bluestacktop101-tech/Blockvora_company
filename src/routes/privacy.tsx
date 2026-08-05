import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { siteConfig } from "@/config/site";
import { pageHead } from "@/lib/seo";

const description = "How Blockvora collects, uses and protects personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy Policy", description, path: "/privacy" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description={description} />
      <Section size="narrow" tone="dark">
        <div className="prose-like space-y-8 text-sm leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            Last updated: August 5, 2026. This summary explains how {siteConfig.name} handles
            information when you use our website or contact us. For enterprise agreements, the
            contract and DPA control.
          </p>
          {[
            {
              title: "Information we collect",
              body: "Contact details you submit (name, email, company, message), basic technical logs (IP, user agent, pages viewed) and cookies needed for site operation and analytics where enabled.",
            },
            {
              title: "How we use information",
              body: "To respond to inquiries, operate and secure the website, improve content and — only with appropriate consent or legitimate interest — communicate about Blockvora services.",
            },
            {
              title: "Sharing",
              body: "We use subprocessors for hosting, email and analytics under contractual protections. We do not sell personal information.",
            },
            {
              title: "Retention & rights",
              body: "We retain inquiry records as needed for business and legal purposes. Depending on your location, you may have rights to access, correct or delete personal data. Contact us to exercise them.",
            },
            {
              title: "Contact",
              body: `Privacy questions: ${siteConfig.email}`,
            },
          ].map((block) => (
            <section key={block.title}>
              <h2 className="text-xl font-semibold tracking-tight">{block.title}</h2>
              <p className="text-muted-foreground mt-3">{block.body}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
