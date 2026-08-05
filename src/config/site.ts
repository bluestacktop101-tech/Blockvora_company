export const siteConfig = {
  name: "Blockvora",
  tagline: "Enterprise AI & Blockchain Engineering",
  description:
    "Blockvora designs and engineers enterprise-grade AI systems, blockchain networks and tokenization platforms for regulated industries.",
  email: "hello@blockvora.com",
  phone: "+1 (415) 555-0142",
  address: "One Market Plaza, San Francisco, CA",
} as const;

export type NavItem = {
  label: string;
  to: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "Solutions", to: "/solutions", description: "AI, blockchain and data platforms" },
  { label: "Services", to: "/services", description: "How we design, build and scale" },
  { label: "Industries", to: "/industries", description: "Regulated sectors we serve" },
  { label: "Technologies", to: "/technologies", description: "Our engineering stack" },
  { label: "Case Studies", to: "/case-studies", description: "Measured client outcomes" },
  { label: "About", to: "/about", description: "Our team and engineering culture" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Solutions",
    items: [
      { label: "Solutions", to: "/solutions" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Technologies", to: "/technologies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
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
