import { createFileRoute } from "@tanstack/react-router";
import { ActivityFeed } from "@/components/home/ActivityFeed";
import { FeaturedRail } from "@/components/home/FeaturedRail";
import { HomeSlider } from "@/components/home/HomeSlider";
import { MainProjects } from "@/components/home/MainProjects";
import { TrendingGrid } from "@/components/home/TrendingGrid";
import { siteConfig } from "@/config/site";

const title = "Blockvora — Enterprise AI & RWA Delivery Network";
const description = siteConfig.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          description,
          email: siteConfig.email,
          slogan: siteConfig.tagline,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-10 pb-6 pt-2 sm:space-y-12">
      <HomeSlider />
      <FeaturedRail />
      <MainProjects />
      <ActivityFeed />
      <TrendingGrid />
    </div>
  );
}
