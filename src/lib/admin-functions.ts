import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { deleteCookie, getCookie, getRequestIP, setCookie } from "@tanstack/react-start/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  isCandidateStatus,
  type Candidate,
  type CandidateStatus,
} from "@/lib/candidates";
import { CAREER_RESUMES_BUCKET } from "@/lib/supabase";

type DbError = { message?: string; code?: string } | null;

const ADMIN_COOKIE = "blockvora-admin";
const SESSION_MAX_AGE = 60 * 60 * 12;

const attempts = new Map<string, { count: number; resetAt: number }>();

function envValue(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function readEnv() {
  const password = envValue("ADMIN_PASSWORD");
  const secret = envValue("ADMIN_SESSION_SECRET");
  // Static import.meta.env access is required. Vercel does not load .env into process.env at runtime.
  const url =
    envValue("VITE_SUPABASE_URL") ||
    envValue("SUPABASE_URL") ||
    (import.meta.env.VITE_SUPABASE_URL ?? "").trim();
  const anon =
    envValue("VITE_SUPABASE_PUBLISHABLE_KEY") ||
    envValue("SUPABASE_PUBLISHABLE_KEY") ||
    (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "").trim();
  const service = envValue("SUPABASE_SERVICE_ROLE_KEY");
  return {
    password,
    secret,
    url,
    anon,
    service,
    configured: password.length >= 8 && secret.length >= 32,
  };
}

function sessionSecret() {
  const { secret } = readEnv();
  if (secret.length < 32) {
    throw new Error("Set ADMIN_SESSION_SECRET to at least 32 characters.");
  }
  return secret;
}

function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: envValue("NODE_ENV") === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}

function signPayload(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function signaturesMatch(actual: string, expected: string) {
  const left = Buffer.from(actual);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

function readAdminSession() {
  const secret = readEnv().secret;
  if (secret.length < 32) return false;
  const raw = getCookie(ADMIN_COOKIE);
  if (!raw) return false;
  const dot = raw.lastIndexOf(".");
  if (dot <= 0) return false;
  const payload = raw.slice(0, dot);
  const mac = raw.slice(dot + 1);
  if (!signaturesMatch(mac, signPayload(payload, secret))) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      admin?: boolean;
      exp?: number;
    };
    return data.admin === true && typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

function writeAdminSession() {
  const secret = sessionSecret();
  const payload = Buffer.from(
    JSON.stringify({ admin: true, exp: Date.now() + SESSION_MAX_AGE * 1000 }),
    "utf8",
  ).toString("base64url");
  setCookie(ADMIN_COOKIE, `${payload}.${signPayload(payload, secret)}`, cookieOptions());
}

function clearAdminSession() {
  deleteCookie(ADMIN_COOKIE, { path: "/" });
}

function passwordsMatch(input: string, expected: string) {
  const left = createHash("sha256").update(input).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

function assertLoginAllowed() {
  const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 8) {
    throw new Error("Too many attempts. Try again in a few minutes.");
  }
  return ip;
}

function recordFailure(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return;
  }
  attempts.set(ip, { count: current.count + 1, resetAt: current.resetAt });
}

function requireAdmin() {
  if (!readAdminSession()) {
    throw new Error("Sign in required.");
  }
}

function adminClient(): SupabaseClient {
  const env = readEnv();
  if (!env.url || !(env.service || env.anon)) {
    throw new Error("Supabase is not configured.");
  }
  if (env.service) {
    return createClient(env.url, env.service, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return createClient(env.url, env.anon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "x-admin-password": env.password } },
  });
}

function plainClient(): SupabaseClient {
  const env = readEnv();
  if (!env.url || !env.anon) {
    throw new Error("Supabase is not configured.");
  }
  return createClient(env.url, env.anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function isMissingFunction(error: DbError) {
  if (!error) return false;
  return (
    error.code === "PGRST202" ||
    /could not find the function/i.test(error.message ?? "") ||
    /schema cache/i.test(error.message ?? "")
  );
}

function isMissingColumn(error: DbError) {
  return error?.code === "42703" || /column .+ does not exist/i.test(error?.message ?? "");
}

const columns =
  "id, created_at, role, name, email, linkedin, github, work_location, resume_path, phone, telegram, cover_letter, blockchain_project, status, notes, applicant_ip, applicant_os, wallet_installed";

const baseColumns =
  "id, created_at, role, name, email, linkedin, github, work_location, resume_path, phone, telegram, cover_letter, blockchain_project";

function text(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function read(row: Record<string, unknown>, key: string) {
  return row[key];
}

function flag(value: unknown) {
  return typeof value === "boolean" ? value : null;
}

function mapRow(row: Record<string, unknown>, withStatus: boolean): Candidate {
  const statusValue = read(row, "status");
  const status = withStatus && isCandidateStatus(statusValue) ? statusValue : "new";
  return {
    id: String(read(row, "id") ?? ""),
    createdAt: String(read(row, "created_at") ?? ""),
    role: text(read(row, "role")),
    name: String(read(row, "name") ?? ""),
    email: String(read(row, "email") ?? ""),
    linkedin: text(read(row, "linkedin")),
    github: text(read(row, "github")),
    workLocation: String(read(row, "work_location") ?? ""),
    resumePath: text(read(row, "resume_path")),
    phone: text(read(row, "phone")),
    telegram: text(read(row, "telegram")),
    coverLetter: text(read(row, "cover_letter")),
    blockchainProject: text(read(row, "blockchain_project")),
    status,
    notes: withStatus ? text(read(row, "notes")) : null,
    applicantIp: text(read(row, "applicant_ip")),
    applicantOs: text(read(row, "applicant_os")),
    walletInstalled: flag(read(row, "wallet_installed")),
  };
}

async function ensureAdminPassword(client: SupabaseClient) {
  const env = readEnv();
  if (env.service) return { ready: true as const, needsMigration: false };

  const configured = await client.rpc("admin_is_configured");
  if (configured.error) {
    if (isMissingFunction(configured.error)) return { ready: false as const, needsMigration: true };
    throw new Error(configured.error.message || "Could not check admin setup.");
  }
  if (configured.data !== true) {
    const boot = await client.rpc("bootstrap_admin_password", { new_password: env.password });
    if (boot.error && !/already configured/i.test(boot.error.message)) {
      if (isMissingFunction(boot.error)) return { ready: false as const, needsMigration: true };
      throw new Error(boot.error.message || "Could not save the admin password.");
    }
  }
  return { ready: true as const, needsMigration: false };
}

function asUnauthorized(error: DbError) {
  return /unauthorized/i.test(error?.message ?? "");
}

async function migrationFallback() {
  const fallback = await plainClient()
    .from("career_applications")
    .select(baseColumns)
    .order("created_at", { ascending: false })
    .limit(500);

  if (fallback.error && !isMissingColumn(fallback.error)) {
    throw new Error(fallback.error.message || "Could not load applications.");
  }

  return {
    needsMigration: true,
    canManage: false,
    warning:
      "Run the SQL migration once so this page can read, update, and delete applications. Until then, candidate records stay private.",
    candidates: (fallback.data ?? []).map((row) => mapRow(row as Record<string, unknown>, false)),
  };
}

function parseId(value: unknown) {
  if (typeof value !== "string" || !/^[0-9a-f-]{36}$/i.test(value)) {
    throw new Error("Unknown application.");
  }
  return value;
}

export const getAdminSession = createServerFn({ method: "GET" }).handler(async () => {
  const env = readEnv();
  if (!env.configured) return { authenticated: false, configured: false };
  return { authenticated: readAdminSession(), configured: true };
});

export const adminLogin = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const password =
      input && typeof input === "object" && "password" in input ? input.password : undefined;
    if (typeof password !== "string" || password.trim().length === 0 || password.length > 200) {
      throw new Error("Enter the admin password.");
    }
    return { password };
  })
  .handler(async ({ data }) => {
    const env = readEnv();
    if (!env.configured) {
      throw new Error(
        "ADMIN_PASSWORD and ADMIN_SESSION_SECRET are missing on this server. Add them in Vercel and redeploy. The secret must be at least 32 characters.",
      );
    }
    const ip = assertLoginAllowed();
    if (!passwordsMatch(data.password, env.password)) {
      recordFailure(ip);
      throw new Error("Incorrect password.");
    }
    attempts.delete(ip);
    writeAdminSession();
    return { ok: true };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  clearAdminSession();
  return { ok: true };
});

export const listCandidates = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdmin();
  const env = readEnv();
  const client = adminClient();
  const setup = await ensureAdminPassword(client);

  if (setup.ready && env.service) {
    const loaded = await client
      .from("career_applications")
      .select(columns)
      .order("created_at", { ascending: false })
      .limit(500);
    const query =
      loaded.error &&
      isMissingColumn(loaded.error) &&
      /applicant_ip|applicant_os|wallet_installed/i.test(loaded.error.message ?? "")
        ? await client
            .from("career_applications")
            .select(
              columns.replace(", applicant_ip, applicant_os, wallet_installed", ""),
            )
            .order("created_at", { ascending: false })
            .limit(500)
        : loaded;
    if (query.error) {
      if (isMissingColumn(query.error)) {
        return migrationFallback();
      }
      throw new Error(query.error.message || "Could not load applications.");
    }
    const rows = (query.data ?? []) as Record<string, unknown>[];
    return {
      needsMigration: false,
      canManage: true,
      warning: null as string | null,
      candidates: rows.map((row) => mapRow(row, true)),
    };
  }

  if (setup.ready) {
    const listed = await client.rpc("admin_list_applications", { admin_password: env.password });
    if (listed.error) {
      if (isMissingFunction(listed.error) || isMissingColumn(listed.error)) return migrationFallback();
      if (asUnauthorized(listed.error)) {
        throw new Error(
          "The database admin password does not match ADMIN_PASSWORD. Delete the row in public.admin_credentials and sign in again.",
        );
      }
      throw new Error(listed.error.message || "Could not load applications.");
    }
    const rows = Array.isArray(listed.data) ? listed.data : [];
    return {
      needsMigration: false,
      canManage: true,
      warning: null as string | null,
      candidates: rows.map((row) => mapRow(row as Record<string, unknown>, true)),
    };
  }

  return migrationFallback();
});

export const updateCandidate = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    if (!input || typeof input !== "object") throw new Error("Invalid update.");
    const body = input as { id?: unknown; status?: unknown; notes?: unknown };
    const id = parseId(body.id);
    if (!isCandidateStatus(body.status)) throw new Error("Unknown status.");
    const notes = typeof body.notes === "string" ? body.notes.slice(0, 5000) : "";
    return { id, status: body.status, notes };
  })
  .handler(async ({ data }) => {
    await requireAdmin();
    const env = readEnv();
    const client = adminClient();
    const setup = await ensureAdminPassword(client);
    if (!setup.ready) throw new Error("Run the SQL migration before updating applications.");
    if (env.service) {
      const { error } = await client
        .from("career_applications")
        .update({
          status: data.status,
          notes: data.notes.trim().length > 0 ? data.notes.trim() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", data.id);
      if (error) throw new Error(error.message || "Could not update the application.");
    } else {
      const updated = await client.rpc("admin_update_application", {
        admin_password: env.password,
        application_id: data.id,
        next_status: data.status,
        next_notes: data.notes,
      });
      if (updated.error) throw new Error(updated.error.message || "Could not update the application.");
    }
    return { ok: true, status: data.status satisfies CandidateStatus };
  });

export const deleteCandidate = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    if (!input || typeof input !== "object") throw new Error("Invalid request.");
    return { id: parseId((input as { id?: unknown }).id) };
  })
  .handler(async ({ data }) => {
    await requireAdmin();
    const env = readEnv();
    const client = adminClient();
    const setup = await ensureAdminPassword(client);
    if (!setup.ready) throw new Error("Run the SQL migration before deleting applications.");
    let resumePath: string | null = null;
    if (env.service) {
      const existing = await client
        .from("career_applications")
        .select("resume_path")
        .eq("id", data.id)
        .maybeSingle();
      if (existing.error) throw new Error(existing.error.message || "Could not find the application.");
      resumePath =
        existing.data && typeof existing.data.resume_path === "string" ? existing.data.resume_path : null;
      const { error } = await client.from("career_applications").delete().eq("id", data.id);
      if (error) throw new Error(error.message || "Could not delete the application.");
    } else {
      const removed = await client.rpc("admin_delete_application", {
        admin_password: env.password,
        application_id: data.id,
      });
      if (removed.error) throw new Error(removed.error.message || "Could not delete the application.");
      resumePath = typeof removed.data === "string" ? removed.data : null;
    }
    if (resumePath) {
      await client.storage.from(CAREER_RESUMES_BUCKET).remove([resumePath]);
    }
    return { ok: true };
  });

export const resumeUrl = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    if (!input || typeof input !== "object") throw new Error("Invalid request.");
    return { id: parseId((input as { id?: unknown }).id) };
  })
  .handler(async ({ data }) => {
    await requireAdmin();
    const env = readEnv();
    const client = adminClient();
    const setup = await ensureAdminPassword(client);
    if (!setup.ready) throw new Error("Run the SQL migration before opening resumes.");
    let path: string | null = null;
    if (env.service) {
      const existing = await client
        .from("career_applications")
        .select("resume_path")
        .eq("id", data.id)
        .maybeSingle();
      if (existing.error) throw new Error(existing.error.message || "Could not find the resume.");
      path =
        existing.data && typeof existing.data.resume_path === "string" ? existing.data.resume_path : null;
    } else {
      const listed = await client.rpc("admin_list_applications", { admin_password: env.password });
      if (listed.error) throw new Error(listed.error.message || "Could not find the resume.");
      const rows = Array.isArray(listed.data) ? listed.data : [];
      const match = rows.find((row) => {
        const record = row as Record<string, unknown>;
        return record["id"] === data.id;
      }) as Record<string, unknown> | undefined;
      const stored = match?.["resume_path"];
      path = typeof stored === "string" ? stored : null;
    }
    if (!path) throw new Error("This application has no resume.");
    const signed = await client.storage.from(CAREER_RESUMES_BUCKET).createSignedUrl(path, 60 * 5);
    if (signed.error || !signed.data?.signedUrl) {
      throw new Error(signed.error?.message || "Could not open the resume.");
    }
    return { url: signed.data.signedUrl };
  });
