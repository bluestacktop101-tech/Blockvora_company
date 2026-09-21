export const siteConfig = {
  name: "Blockvora",
  tagline: "Intelligent, decentralized technology for complex systems",
  vision:
    "To build the next generation of intelligent, decentralized technology that makes complex systems more accessible, transparent, and connected.",
  description:
    "Blockvora is a technology company building production AI, institutional blockchain, and real-world asset platforms — systems that are accessible, transparent, and connected.",
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

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Platforms", to: "/platforms" },
      { label: "Solutions", to: "/solutions" },
      { label: "Technologies", to: "/technologies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];
