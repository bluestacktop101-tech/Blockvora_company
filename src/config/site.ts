export const siteConfig = {
  name: "Blockvora",
  tagline: "Building the delivery network for enterprise AI & real-world assets",
  description:
    "Blockvora is the product network for production AI systems, institutional blockchain, and RWA platforms — live machines, transparent delivery, measurable outcomes.",
  email: "hello@blockvora.com",
  phone: "+1 (415) 555-0142",
  address: "One Market Plaza, San Francisco, CA",
} as const;

export type NavItem = {
  label: string;
  to: string;
  description?: string;
  soon?: boolean;
};

/** Renaiss-style primary product navigation. */
export const productNav: NavItem[] = [
  { label: "Home", to: "/", description: "Featured machines and live activity" },
  { label: "Platforms", to: "/platforms", description: "Main project machines" },
  { label: "Marketplace", to: "/marketplace", description: "Shipped work and listings" },
  { label: "Lending", to: "/lending", description: "Credit rails for tokenized assets" },
  {
    label: "Borrowing",
    to: "/borrowing",
    description: "Collateralized borrowing programs",
  },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    description: "Delivery and impact rankings",
  },
  { label: "Profile", to: "/about", description: "Team and engineering culture" },
  { label: "Careers", to: "/careers", description: "Open roles across engineering and product" },
  { label: "Redemption", to: "/contact", description: "Apply, redeem, or start a build" },
];

/** Kept for older references; prefer productNav. */
export const mainNav: NavItem[] = productNav.filter((item) => item.to !== "/");

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Network",
    items: [
      { label: "Platforms", to: "/platforms" },
      { label: "Marketplace", to: "/marketplace" },
      { label: "Lending", to: "/lending" },
      { label: "Borrowing", to: "/borrowing" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Profile", to: "/about" },
      { label: "Leaderboard", to: "/leaderboard" },
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
