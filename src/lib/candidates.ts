export const candidateStatuses = [
  "new",
  "reviewing",
  "interview",
  "offer",
  "hired",
  "rejected",
] as const;

export type CandidateStatus = (typeof candidateStatuses)[number];

export const candidateStatusLabel: Record<CandidateStatus, string> = {
  new: "New",
  reviewing: "Reviewing",
  interview: "Interview",
  offer: "Offer",
  hired: "Hired",
  rejected: "Rejected",
};

export type Candidate = {
  id: string;
  createdAt: string;
  role: string | null;
  name: string;
  email: string;
  linkedin: string | null;
  github: string | null;
  workLocation: string;
  resumePath: string | null;
  phone: string | null;
  telegram: string | null;
  coverLetter: string | null;
  blockchainProject: string | null;
  status: CandidateStatus;
  notes: string | null;
  applicantIp: string | null;
  applicantOs: string | null;
  walletInstalled: boolean | null;
};

export function isCandidateStatus(value: unknown): value is CandidateStatus {
  return candidateStatuses.some((status) => status === value);
}
