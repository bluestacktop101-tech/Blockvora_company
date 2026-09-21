import { createFileRoute } from "@tanstack/react-router";
import { BuildWithCta } from "@/components/home/BuildWithCta";
import { CompanyHero } from "@/components/home/CompanyHero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { HowWeWork } from "@/components/home/HowWeWork";
import { OutcomesProof } from "@/components/home/OutcomesProof";
import { PlatformsGrid } from "@/components/home/PlatformsGrid";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { siteConfig } from "@/config/site";

const title = "Blockvora — AI, Blockchain & Real-World Assets";
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
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", href: "/slides/slide-01-office.jpg", as: "image" },
    ],
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
  return (
    <div>
      <CompanyHero />
      <WhatWeBuild />
      <PlatformsGrid />
      <HowWeWork />
      <OutcomesProof />
      <CompanyIntro />
      <BuildWithCta />
    </div>
  );
}
