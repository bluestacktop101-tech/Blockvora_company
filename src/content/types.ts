export type FeatureItem = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  title: string;
  caption: string;
  accent?: "primary" | "cyan" | "violet";
};

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  problem: string;
  challenges: string[];
  solution: string;
  capabilities: FeatureItem[];
  technologies: string[];
  process: string[];
  benefits: string[];
  outcomes: MetricItem[];
  faqs: FaqItem[];
  relatedCaseStudies: string[];
  relatedSolutions: string[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  challenges: string[];
  solution: string;
  capabilities: FeatureItem[];
  useCases: string[];
  technologies: string[];
  process: string[];
  benefits: string[];
  compliance: string[];
  faqs: FaqItem[];
  relatedSolutions: string[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  offerings: FeatureItem[];
  process: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  client: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string[];
  architecture: FeatureItem[];
  stack: string[];
  keyFeatures: FeatureItem[];
  results: MetricItem[];
  gallery: GalleryItem[];
  faqs: FaqItem[];
  relatedSolutions: string[];
  relatedCaseStudies: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  sections: { heading: string; body: string }[];
  relatedPosts: string[];
};

export type JobPosting = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

export type TechCategory = {
  title: string;
  description: string;
  items: string[];
};
