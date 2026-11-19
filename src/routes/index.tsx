import { createFileRoute } from "@tanstack/react-router";
import { AgencyHome } from "@/components/home/AgencyHome";
import { siteConfig } from "@/config/site";

const title = "Blockvora — AI & Web3 Innovation";
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
          slogan: siteConfig.vision,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <AgencyHome />;
}
