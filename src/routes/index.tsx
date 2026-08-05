import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { TechTrust } from "@/components/home/TechTrust";
import { siteConfig } from "@/config/site";

const Solutions = lazy(() =>
  import("@/components/home/Solutions").then((m) => ({ default: m.Solutions })),
);
const Rwa = lazy(() => import("@/components/home/Rwa").then((m) => ({ default: m.Rwa })));
const HealthcareAi = lazy(() =>
  import("@/components/home/HealthcareAi").then((m) => ({ default: m.HealthcareAi })),
);
const Services = lazy(() =>
  import("@/components/home/Services").then((m) => ({ default: m.Services })),
);
const CaseStudies = lazy(() =>
  import("@/components/home/CaseStudies").then((m) => ({ default: m.CaseStudies })),
);
const Process = lazy(() =>
  import("@/components/home/Process").then((m) => ({ default: m.Process })),
);
const WhyBlockvora = lazy(() =>
  import("@/components/home/WhyBlockvora").then((m) => ({ default: m.WhyBlockvora })),
);
const FinalCta = lazy(() =>
  import("@/components/home/FinalCta").then((m) => ({ default: m.FinalCta })),
);

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

function SectionFallback() {
  return <div className="section-pad" aria-hidden="true" />;
}

function HomePage() {
  return (
    <>
      <Hero />
      <TechTrust />
      <Suspense fallback={<SectionFallback />}>
        <Solutions />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Rwa />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <HealthcareAi />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyBlockvora />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FinalCta />
      </Suspense>
    </>
  );
}
