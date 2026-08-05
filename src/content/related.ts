import { getSolution, solutions } from "./solutions";
import { caseStudies, getCaseStudy } from "./case-studies";
import { blogPosts, getBlogPost } from "./blog";
import type { Solution } from "./types";
import type { LinkCardItem } from "@/components/marketing/LinkCards";

export function solutionCards(slugs?: string[]): LinkCardItem[] {
  const list: Solution[] = slugs
    ? slugs.flatMap((slug) => {
        const item = getSolution(slug);
        return item ? [item] : [];
      })
    : solutions;

  return list.map((item) => ({
    title: item.shortTitle,
    description: item.summary,
    to: `/solutions/${item.slug}`,
    meta: "Solution",
  }));
}

export function caseStudyCards(slugsOrLimit: string[] | number = 3): LinkCardItem[] {
  const list =
    typeof slugsOrLimit === "number"
      ? caseStudies.slice(0, slugsOrLimit)
      : slugsOrLimit.flatMap((slug) => {
          const item = getCaseStudy(slug);
          return item ? [item] : [];
        });

  return list.map((item) => ({
    title: item.title,
    description: item.summary,
    to: `/case-studies/${item.slug}`,
    meta: item.industry,
  }));
}

export function blogCards(slugs: string[]): LinkCardItem[] {
  return slugs.flatMap((slug) => {
    const post = getBlogPost(slug);
    if (!post) return [];
    return [
      {
        title: post.title,
        description: post.excerpt,
        to: `/blog/${post.slug}`,
        meta: `${post.category} · ${post.readTime}`,
      },
    ];
  });
}
