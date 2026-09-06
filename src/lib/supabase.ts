import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Must use static `import.meta.env.VITE_*` access — Vite does not replace bracket keys.
const url = (import.meta.env.VITE_SUPABASE_URL ?? "").trim();
const key = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "").trim();

export const isSupabaseConfigured = Boolean(url && key);

let client: SupabaseClient | null = null;

/** Lazy client — never throws at module load (empty env crashes SSR on Vercel). */
export function getSupabase(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.",
    );
  }
  if (!client) {
    client = createClient(url, key);
  }
  return client;
}

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
