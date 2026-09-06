import type { JobPosting } from "../types";

/**
 * Auto-loads every role file in ./roles (except _template).
 *
 * Add a JD  → create roles/<name>.ts with `export default defineJob({...})`
 * Close a JD → set `open: false` in that file, or delete the file
 * Reorder    → change `order` (lower = higher on /careers)
 */
const modules = import.meta.glob("./roles/*.ts", { eager: true }) as Record<
  string,
  { default: JobPosting }
>;

function isTemplate(path: string) {
  return path.includes("/_template") || path.includes("\\_template");
}

function collectJobs(includeClosed: boolean): JobPosting[] {
  return Object.entries(modules)
    .filter(([path]) => !isTemplate(path))
    .map(([, mod]) => mod.default)
    .filter((job): job is JobPosting => Boolean(job?.slug))
    .filter((job) => includeClosed || job.open !== false)
    .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title));
}

/** Open roles shown on /careers and reachable at /careers/:slug */
export const jobs: JobPosting[] = collectJobs(false);

/** All JDs including closed — useful for reuse / admin later */
export const allJobs: JobPosting[] = collectJobs(true);

export function getJob(slug: string) {
  return jobs.find((item) => item.slug === slug);
}

export function getAnyJob(slug: string) {
  return allJobs.find((item) => item.slug === slug);
}
