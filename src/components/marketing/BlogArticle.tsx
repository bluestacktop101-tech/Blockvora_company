import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { LinkCards } from "./LinkCards";
import { PageCta } from "./PageCta";
import { blogCards } from "@/content/related";
import type { BlogPost } from "@/content/types";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = blogCards(post.relatedPosts);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        meta={
          <>
            <span>
              <span className="text-foreground font-medium">{post.author}</span>
              <span className="text-muted-foreground"> · {post.authorRole}</span>
            </span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span>{post.readTime} read</span>
          </>
        }
      />

      <Section tone="dark" size="narrow" id="article">
        <article>
          <div className="space-y-12">
            {post.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.04}>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </article>
        <p className="text-muted-foreground mt-14 border-t border-border/70 pt-8 text-sm">
          Written by {post.author}, {post.authorRole}.{" "}
          <Link to="/blog" className="text-foreground underline-offset-4 hover:underline">
            Back to blog
          </Link>
        </p>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface" id="related">
          <SectionHeading align="left" eyebrow="Related articles" title="Keep reading" />
          <LinkCards items={related} className="mt-12" columns={related.length === 2 ? 2 : 3} />
        </Section>
      ) : null}

      <PageCta
        title="Want help applying this?"
        description="We can walk your team through architecture, threat models and delivery plans in a working session."
        secondary={{ label: "All articles", to: "/blog" }}
      />
    </>
  );
}
