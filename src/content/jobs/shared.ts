import type { JobPosting } from "../types";

/** Default benefits applied to every JD unless overridden. */
export const sharedBenefits = [
  "Work on modern Web3, RWA, and digital products",
  "High ownership and visible product impact",
  "Close collaboration with engineering, product, and design",
  "Fast-paced environment with real production systems",
  "Remote-friendly across global time zones",
];

export const defaultHowToApply = [
  "Resume or LinkedIn",
  "GitHub profile or portfolio (preferred)",
  "Examples of relevant work you're proud of",
];

export const defaultHiringProcess = [
  "Application review",
  "Technical interview",
  "Final discussion",
];

export type JobDraft = Omit<
  JobPosting,
  | "benefits"
  | "open"
  | "order"
  | "stage"
  | "techStack"
  | "howToApply"
  | "successLooksLike"
  | "hiringProcess"
  | "sourceUrl"
> & {
  /** Set to false to hide this role without deleting the file. Default: true */
  open?: boolean;
  /** Lower numbers appear first on /careers. Default: 100 */
  order?: number;
  stage?: string;
  techStack?: string[];
  howToApply?: string[];
  successLooksLike?: string[];
  hiringProcess?: string[];
  sourceUrl?: string;
  /** Omit to use sharedBenefits */
  benefits?: string[];
};

/** Helper so each JD file stays short and consistent. */
export function defineJob(draft: JobDraft): JobPosting {
  return {
    open: draft.open ?? true,
    order: draft.order ?? 100,
    benefits: draft.benefits ?? sharedBenefits,
    howToApply: draft.howToApply ?? defaultHowToApply,
    hiringProcess: draft.hiringProcess ?? defaultHiringProcess,
    slug: draft.slug,
    title: draft.title,
    department: draft.department,
    team: draft.team,
    location: draft.location,
    type: draft.type,
    ...(draft.stage ? { stage: draft.stage } : {}),
    ...(draft.techStack?.length ? { techStack: draft.techStack } : {}),
    ...(draft.successLooksLike?.length ? { successLooksLike: draft.successLooksLike } : {}),
    ...(draft.sourceUrl ? { sourceUrl: draft.sourceUrl } : {}),
    summary: draft.summary,
    about: draft.about,
    responsibilities: draft.responsibilities,
    requirements: draft.requirements,
    niceToHave: draft.niceToHave,
  };
}
