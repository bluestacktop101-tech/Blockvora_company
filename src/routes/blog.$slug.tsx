import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogArticle } from "@/components/marketing/BlogArticle";
import { PendingPage } from "@/components/marketing/PendingPage";
import { getBlogPost } from "@/content/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  pendingComponent: PendingPage,
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.title,
      description: loaderData.excerpt,
      path: `/blog/${loaderData.slug}`,
      type: "article",
    });
  },
  component: Page,
});

function Page() {
  const post = Route.useLoaderData();
  return <BlogArticle post={post} />;
}
