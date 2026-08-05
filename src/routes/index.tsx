import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { TechTrust } from "@/components/home/TechTrust";
import { Solutions } from "@/components/home/Solutions";
import { Rwa } from "@/components/home/Rwa";
import { HealthcareAi } from "@/components/home/HealthcareAi";
import { Services } from "@/components/home/Services";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Process } from "@/components/home/Process";
import { WhyBlockvora } from "@/components/home/WhyBlockvora";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/config/site";

const title = "Blockvora — Enterprise AI & Blockchain Software Engineering";
const description =
  "Blockvora engineers enterprise AI systems, blockchain networks and tokenization platforms for banks, healthcare and global supply chains.";

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
    <>
      <Hero />
      <TechTrust />
      <Solutions />
      <Rwa />
      <HealthcareAi />
      <Services />
      <CaseStudies />
      <Process />
      <WhyBlockvora />
      <FinalCta />
    </>
  );
}
