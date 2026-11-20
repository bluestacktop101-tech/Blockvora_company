import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function unquote(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function serverEnv(name: string) {
  if (typeof process === "undefined") return "";
  const value = process.env[name];
  return typeof value === "string" ? unquote(value) : "";
}

// Static `import.meta.env.VITE_*` is inlined for the browser. The server also accepts SUPABASE_* at runtime.
const url = unquote(
  import.meta.env.VITE_SUPABASE_URL || serverEnv("VITE_SUPABASE_URL") || serverEnv("SUPABASE_URL"),
);
const key = unquote(
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    serverEnv("VITE_SUPABASE_PUBLISHABLE_KEY") ||
    serverEnv("SUPABASE_PUBLISHABLE_KEY"),
);

export const isSupabaseConfigured = Boolean(url && key);

let client: SupabaseClient | null = null;

/** Lazy client — never throws at module load (empty env crashes SSR on Vercel). */
export function getSupabase(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new Error(
      "Supabase is not configured. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY, then redeploy.",
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
  linkedin?: string | null;
  github?: string | null;
  work_location: string;
  resume_path?: string | null;
  resume_url?: string | null;
  phone?: string | null;
  telegram?: string | null;
  cover_letter?: string | null;
  blockchain_project?: string | null;
  applicant_ip?: string | null;
  applicant_os?: string | null;
  wallet_installed?: boolean | null;
};

export const CAREER_RESUMES_BUCKET = "career-resumes";
