export type CreditMarket = {
  id: string;
  name: string;
  asset: string;
  apy: string;
  tvl: string;
  ltv: string;
  status: "open" | "waitlist" | "paused";
  tenor: string;
  image: string;
};

export type BorrowOffer = {
  id: string;
  name: string;
  collateral: string;
  maxLtv: string;
  rate: string;
  liquidation: string;
  status: "open" | "waitlist";
  image: string;
};

export type LeaderboardRow = {
  rank: number;
  name: string;
  category: string;
  score: string;
  change: string;
  volume: string;
  image: string;
  href: "/platforms" | "/marketplace" | "/solutions/$slug" | "/case-studies/$slug";
  slug?: string;
};

export const lendingMarkets: CreditMarket[] = [
  {
    id: "rwa-senior",
    name: "NOVA Senior Credit",
    asset: "Tokenized fund interests",
    apy: "8.4%",
    tvl: "$42.1M",
    ltv: "55%",
    status: "waitlist",
    tenor: "30–90 day",
    image: "/listings/sol-rwa-tokenization.jpg",
  },
  {
    id: "real-estate",
    name: "Property Income Pool",
    asset: "Tokenized real estate notes",
    apy: "9.1%",
    tvl: "$18.6M",
    ltv: "50%",
    status: "waitlist",
    tenor: "90 day",
    image: "/listings/cs-asset-tokenization.jpg",
  },
  {
    id: "ledger-stable",
    name: "LEDGER Settlement Float",
    asset: "Cash + stable settlement",
    apy: "5.2%",
    tvl: "$27.4M",
    ltv: "70%",
    status: "open",
    tenor: "7–30 day",
    image: "/listings/sol-blockchain.jpg",
  },
  {
    id: "clinic-ops",
    name: "CLINIC Ops Reserve",
    asset: "Healthcare receivables (pilot)",
    apy: "7.0%",
    tvl: "$6.2M",
    ltv: "45%",
    status: "waitlist",
    tenor: "60 day",
    image: "/listings/sol-healthcare-ai.jpg",
  },
];

export const borrowOffers: BorrowOffer[] = [
  {
    id: "against-rwa",
    name: "Borrow against RWA",
    collateral: "Tokenized funds / RE notes",
    maxLtv: "50%",
    rate: "9.8% APR",
    liquidation: "Soft auction + pause",
    status: "waitlist",
    image: "/listings/cs-rwa-marketplace.jpg",
  },
  {
    id: "against-inventory",
    name: "Borrow against inventory",
    collateral: "Vaulted collectible / RWA lots",
    maxLtv: "40%",
    rate: "11.2% APR",
    liquidation: "Timed notice window",
    status: "waitlist",
    image: "/listings/listing-rwa.jpg",
  },
  {
    id: "against-ledger",
    name: "Borrow on settlement float",
    collateral: "Pending DvP positions",
    maxLtv: "35%",
    rate: "8.5% APR",
    liquidation: "Margin call ladder",
    status: "open",
    image: "/listings/sol-smart-contracts.jpg",
  },
  {
    id: "against-ai",
    name: "Working capital (AI ops)",
    collateral: "Contracted delivery milestones",
    maxLtv: "30%",
    rate: "10.0% APR",
    liquidation: "Milestone clawback",
    status: "waitlist",
    image: "/listings/sol-ai-agents.jpg",
  },
];

export const leaderboard: LeaderboardRow[] = [
  {
    rank: 1,
    name: "NOVA EDEN",
    category: "RWA",
    score: "98.4",
    change: "+2.1",
    volume: "$124M",
    image: "/projects/nova-eden.jpg",
    href: "/solutions/$slug",
    slug: "rwa-tokenization",
  },
  {
    rank: 2,
    name: "LEDGER 248",
    category: "Blockchain",
    score: "96.1",
    change: "+1.4",
    volume: "$89M",
    image: "/projects/ledger-248.jpg",
    href: "/solutions/$slug",
    slug: "blockchain",
  },
  {
    rank: 3,
    name: "ATLAS 48",
    category: "Agents",
    score: "94.7",
    change: "+3.0",
    volume: "$61M",
    image: "/projects/atlas-48.jpg",
    href: "/solutions/$slug",
    slug: "ai-agents",
  },
  {
    rank: 4,
    name: "CLINIC 88",
    category: "Healthcare",
    score: "93.2",
    change: "+0.8",
    volume: "$44M",
    image: "/projects/clinic-88.jpg",
    href: "/solutions/$slug",
    slug: "healthcare-ai",
  },
  {
    rank: 5,
    name: "ATLAS 28",
    category: "AI",
    score: "91.5",
    change: "+1.1",
    volume: "$52M",
    image: "/projects/atlas-28.jpg",
    href: "/solutions/$slug",
    slug: "ai-development",
  },
  {
    rank: 6,
    name: "RWA Marketplace",
    category: "Case study",
    score: "90.0",
    change: "+0.4",
    volume: "$38M",
    image: "/listings/cs-rwa-marketplace.jpg",
    href: "/case-studies/$slug",
    slug: "rwa-marketplace",
  },
  {
    rank: 7,
    name: "Smart Contracts",
    category: "Contracts",
    score: "88.6",
    change: "-0.2",
    volume: "$29M",
    image: "/listings/sol-smart-contracts.jpg",
    href: "/solutions/$slug",
    slug: "smart-contracts",
  },
  {
    rank: 8,
    name: "Enterprise AI Assistant",
    category: "Case study",
    score: "87.3",
    change: "+0.9",
    volume: "$21M",
    image: "/listings/cs-enterprise-ai.jpg",
    href: "/case-studies/$slug",
    slug: "enterprise-ai-assistant",
  },
];

export const creditSteps = [
  {
    title: "Select a market",
    body: "Choose an asset class and tenor that matches your risk and custody setup.",
  },
  {
    title: "Complete diligence",
    body: "KYC/KYB, eligibility, and policy checks run before capital is allocated.",
  },
  {
    title: "Fund or draw",
    body: "Lenders supply liquidity; borrowers post collateral and draw under LTV limits.",
  },
  {
    title: "Monitor & settle",
    body: "Live LTV, margin calls, and settlement status stay visible to operators.",
  },
];
