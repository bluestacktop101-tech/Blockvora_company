export type HomeSlide = {
  id: string;
  image: string;
  title: string;
  body: string;
  cta: {
    label: string;
    to: "/platforms" | "/contact" | "/careers" | "/about" | "/technologies";
  };
};

/** Company hero slides — auto-advancing documentary backgrounds. */
export const homeSlides: HomeSlide[] = [
  {
    id: "office",
    image: "/slides/slide-01-office.jpg",
    title: "Building the next stack for intelligent systems",
    body: "Production AI, institutional blockchain, and real-world assets — designed to be accessible, transparent, and connected.",
    cta: { label: "Explore platforms", to: "/platforms" },
  },
  {
    id: "builder",
    image: "/slides/slide-builder-photo.jpg",
    title: "Builders, not spectators",
    body: "Everyone ships — design docs, reviews, demos, and the code on the critical path.",
    cta: { label: "View careers", to: "/careers" },
  },
  {
    id: "product",
    image: "/slides/slide-product-photo.jpg",
    title: "Platform prototypes across AI, chain, and RWA",
    body: "ATLAS, CLINIC, LEDGER, and NOVA — early product surfaces with clear architecture and honest scope.",
    cta: { label: "See platforms", to: "/platforms" },
  },
  {
    id: "rwa",
    image: "/slides/slide-rwa-product-photo.jpg",
    title: "Real-world assets with operator control",
    body: "Issuance, policy, and secondary-market rails for funds, property, and private markets.",
    cta: { label: "Talk with us", to: "/contact" },
  },
  {
    id: "tech",
    image: "/slides/slide-tech-photo.jpg",
    title: "Production AI you can operate",
    body: "Private LLM systems, agents, and evaluation gates built for regulated data and day-two operations.",
    cta: { label: "View technologies", to: "/technologies" },
  },
];
