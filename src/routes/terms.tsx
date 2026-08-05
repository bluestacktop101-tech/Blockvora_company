import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { siteConfig } from "@/config/site";
import { pageHead } from "@/lib/seo";

const description = "Terms governing use of the Blockvora website and related online materials.";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ title: "Terms of Service", description, path: "/terms" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description={description} />
      <Section size="narrow" tone="dark">
        <div className="space-y-8 text-sm leading-relaxed sm:text-base">
          <p className="text-muted-foreground">
            Last updated: August 5, 2026. By using {siteConfig.name}&apos;s website, you agree to
            these terms. Client delivery work is governed by separate statements of work and master
            agreements.
          </p>
          {[
            {
              title: "Use of the site",
              body: "You may browse and share public pages for lawful purposes. Do not attempt to disrupt the service, scrape in an abusive manner or misrepresent affiliation with Blockvora.",
            },
            {
              title: "Intellectual property",
              body: "Site content, branding and materials are owned by Blockvora or its licensors. You receive a limited license to view them; you do not receive rights to reuse our marks or proprietary materials without permission.",
            },
            {
              title: "No professional advice",
              body: "Blog posts and case studies are informational. They are not legal, clinical, investment or security advice. Engagement outcomes depend on scope, data and constraints defined in contracts.",
            },
            {
              title: "Disclaimer & liability",
              body: "The website is provided as-is. To the fullest extent permitted by law, Blockvora disclaims warranties and limits liability for damages arising from site use.",
            },
            {
              title: "Contact",
              body: `Questions about these terms: ${siteConfig.email}`,
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
