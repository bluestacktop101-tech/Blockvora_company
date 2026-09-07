export type HomeSlide = {
  id: string;
  category: "People" | "Product" | "Tech" | "Markets" | "Craft";
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: {
    label: string;
    to:
      | "/platforms"
      | "/marketplace"
      | "/contact"
      | "/careers"
      | "/about"
      | "/lending"
      | "/technologies";
  };
};

/** Documentary photography slides — real offices/workspaces, not AI renders. */
export const homeSlides: HomeSlide[] = [
  {
    id: "people-team",
    category: "People",
    image: "/slides/slide-team-eng-photo.jpg",
    eyebrow: "People",
    title: "Built by operators who ship",
    body: "Senior engineers, product leads, and domain partners building production AI and RWA systems together.",
    cta: { label: "Meet the team", to: "/about" },
  },
  {
    id: "product-platforms",
    category: "Product",
    image: "/slides/slide-product-photo.jpg",
    eyebrow: "Product",
    title: "Live machines on the network",
    body: "ATLAS, CLINIC, LEDGER, and NOVA — product surfaces you can open, fund, and operate.",
    cta: { label: "View platforms", to: "/platforms" },
  },
  {
    id: "tech-infra",
    category: "Tech",
    image: "/slides/slide-tech-photo.jpg",
    eyebrow: "Tech",
    title: "Infrastructure that clears review",
    body: "Private AI serving, ledger rails, custody coordination, and observability built for regulated load.",
    cta: { label: "Explore technologies", to: "/technologies" },
  },
  {
    id: "people-leader",
    category: "People",
    image: "/slides/slide-leader-photo.jpg",
    eyebrow: "People",
    title: "Leadership close to the work",
    body: "Leads who still own architecture, risk language, and delivery outcomes — not slide theater.",
    cta: { label: "Open roles", to: "/careers" },
  },
  {
    id: "product-rwa",
    category: "Product",
    image: "/slides/slide-rwa-product-photo.jpg",
    eyebrow: "Product",
    title: "RWA product you can operate",
    body: "Issuance, secondary markets, and credit rails with custody-aware controls from day one.",
    cta: { label: "Browse marketplace", to: "/marketplace" },
  },
  {
    id: "markets",
    category: "Markets",
    image: "/slides/slide-product-photo.jpg",
    eyebrow: "Markets",
    title: "Lending & borrowing rails",
    body: "Transparent APY, LTV, and settlement visibility for tokenized collateral programs.",
    cta: { label: "View lending", to: "/lending" },
  },
  {
    id: "craft-code",
    category: "Craft",
    image: "/slides/slide-code-photo.jpg",
    eyebrow: "Craft",
    title: "Still on the critical path",
    body: "Hands-on engineering across AI, contracts, and product — measured by systems that ship.",
    cta: { label: "Start a project", to: "/contact" },
  },
  {
    id: "people-partners",
    category: "People",
    image: "/slides/slide-partners-photo.jpg",
    eyebrow: "People",
    title: "Partners who stay for day two",
    body: "Client and partner teams collaborating on systems that have to work under regulation and load.",
    cta: { label: "Talk to us", to: "/contact" },
  },
  {
    id: "people-builder",
    category: "People",
    image: "/slides/slide-builder-photo.jpg",
    eyebrow: "People",
    title: "Builders, not spectators",
    body: "Everyone ships — design docs, reviews, demos, and the code on the critical path.",
    cta: { label: "We're hiring", to: "/careers" },
  },
];
