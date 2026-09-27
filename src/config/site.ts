export const siteConfig = {
  name: "Blockvora",
  tagline: "We build AI & Web3 products that drive revenue",
  vision:
    "To build the next generation of intelligent, decentralized technology that makes complex systems more accessible, transparent, and connected.",
  description:
    "Blockvora is an AI and Web3 company. We design, build, secure, and scale digital products — strategy, development, launch, and security from one partner.",
  email: "hello@blockvora.com",
  phone: "+41 58 728 90 23",
  address: "Zug, Switzerland",
  /** Google Maps place query for HQ */
  mapQuery: "Zug, Switzerland",
  logo: "/logo.png",
  socials: {
    github: "https://github.com/blockvora",
    linkedin: "https://www.linkedin.com/company/blockvora",
    twitter: "https://x.com/blockvora",
  },
} as const;

/** Embed URL — no API key required. */
export function googleMapsEmbedUrl(query = siteConfig.mapQuery, zoom = 13) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps?q=${q}&hl=en&z=${zoom}&output=embed`;
}

/** Open in Google Maps app / site. */
export function googleMapsLink(query = siteConfig.mapQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export type NavItem = {
  label: string;
  to: string;
  description?: string;
  soon?: boolean;
};

/** Primary company-site navigation — marketing only. */
export const productNav: NavItem[] = [
  { label: "Home", to: "/", description: "Company overview" },
  { label: "Platforms", to: "/platforms", description: "Products we build and operate" },
  { label: "About", to: "/about", description: "Who we are" },
  { label: "Careers", to: "/careers", description: "Open roles" },
  { label: "Contact", to: "/contact", description: "Work with us" },
];

export const mainNav: NavItem[] = productNav.filter((item) => item.to !== "/");

export const headerMenus: { label: string; items: NavItem[] }[] = [
  {
    label: "Consulting",
    items: [
      { label: "AI Consulting", to: "/solutions/ai-development", description: "Use cases, RAG, and production AI" },
      { label: "IT Consulting", to: "/services", description: "Architecture, delivery, and platforms" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All Services", to: "/services" },
      { label: "AI Solutions", to: "/solutions/ai-development" },
      { label: "Web3 Solutions", to: "/solutions/blockchain" },
      { label: "Security Audits", to: "/solutions/smart-contracts" },
      { label: "MVP Development", to: "/services" },
      { label: "Technical Leadership", to: "/about" },
      { label: "Technical Due Diligence", to: "/case-studies" },
      { label: "Consulting", to: "/contact" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Company", to: "/about" },
      { label: "Portfolio", to: "/case-studies" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

export const headerLinks: NavItem[] = [
  { label: "Technology", to: "/technologies" },
  { label: "Insights", to: "/blog" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Main Menu",
    items: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "AI Solutions", to: "/solutions/ai-development" },
      { label: "Web3 Solutions", to: "/solutions/blockchain" },
      { label: "Security Audits", to: "/solutions/smart-contracts" },
      { label: "Technology", to: "/technologies" },
      { label: "About", to: "/about" },
      { label: "Portfolio", to: "/case-studies" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "Terms", to: "/terms" },
      { label: "Privacy", to: "/privacy" },
    ],
  },
];
