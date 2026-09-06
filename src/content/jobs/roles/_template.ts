/**
 * Copy this file to add a role, e.g. `roles/new-role.ts`
 * 1. Rename file (not `_template.ts`)
 * 2. Fill defineJob({...})
 * 3. Save — /careers picks it up automatically
 * 4. Set open: false to hide without deleting
 *
 * Reference JD style: https://rwa-jd.notion.site/
 */
import { defineJob } from "../shared";

export default defineJob({
  open: false,
  order: 999,
  slug: "example-role",
  title: "Example Role",
  department: "Engineering",
  team: "Delivery",
  location: "Remote (Global)",
  type: "Full-time / Part-time",
  summary: "One-line summary shown on the careers listing card.",
  about:
    "We are hiring for this role. Describe the mission, ownership, and why the work matters.",
  responsibilities: [
    "Primary responsibility",
    "Another responsibility",
  ],
  requirements: [
    "Must-have experience",
    "Core skill requirement",
  ],
  niceToHave: ["Bonus skill or domain experience"],
  techStack: ["TypeScript", "React", "Node.js"],
  successLooksLike: ["Clear outcome that means this hire is succeeding"],
  hiringProcess: ["Application review", "Technical interview", "Final discussion"],
  howToApply: ["Resume or LinkedIn", "GitHub or portfolio", "Relevant work samples"],
});
