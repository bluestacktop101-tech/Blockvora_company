import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkCards } from "@/components/marketing/LinkCards";
import { PageCta } from "@/components/marketing/PageCta";
import { blogPosts } from "@/content/blog";
import { pageHead } from "@/lib/seo";

const description =
  "Notes from Blockvora engineers on production AI, tokenization, agents and systems that survive scrutiny.";

export const Route = createFileRoute("/blog")({
  head: () => pageHead({ title: "Blog", description, path: "/blog" }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the engineering floor"
        description={description}
      />
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Latest"
          title="Practical writing for builders and buyers"
        />
        <LinkCards
          className="mt-12"
          columns={2}
          items={blogPosts.map((post) => ({
            title: post.title,
            description: post.excerpt,
            to: `/blog/${post.slug}`,
            meta: `${post.category} · ${post.date} · ${post.readTime}`,
          }))}
        />
      </Section>
      <PageCta
        title="Want deeper technical diligence?"
        description="We can walk your team through architectures, threat models and delivery plans in a working session."
        secondary={null}
      />
    </>
  );
}
