import { createClient } from "@supabase/supabase-js";

const url = import.meta.env["VITE_SUPABASE_URL"] as string | undefined;
const key = import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] as string | undefined;

if (!url || !key) {
  console.warn(
    "[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY — apply form submits will fail.",
  );
}

export const supabase = createClient(url ?? "", key ?? "");

export type CareerApplicationInsert = {
  role?: string | null;
  name: string;
  email: string;
  resume_path?: string | null;
  resume_url?: string | null;
  linkedin?: string | null;
  github?: string | null;
  phone?: string | null;
  telegram?: string | null;
  work_location: string;
  cover_letter?: string | null;
  blockchain_project?: string | null;
};

export const CAREER_RESUMES_BUCKET = "career-resumes";
