import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestIP } from "@tanstack/react-start/server";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

function optionalText(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

function requiredText(value: unknown, max: number, label: string) {
  const text = optionalText(value, max);
  if (!text) throw new Error(`${label} is required.`);
  return text;
}

function applicantOs() {
  const headers = getRequest().headers;
  const platform = (headers.get("sec-ch-ua-platform") ?? "").replace(/"/g, "").trim();
  const fromHint = osFromPlatform(platform);
  if (fromHint) return fromHint;
  return osFromUserAgent(headers.get("user-agent") ?? "");
}

function osFromPlatform(platform: string) {
  const name = platform.toLowerCase();
  if (!name) return null;
  if (name.includes("android")) return "Android";
  if (name.includes("ipad")) return "iPad";
  if (name.includes("ios") || name.includes("iphone")) return "iOS";
  if (name.includes("mac")) return "Mac";
  if (name.includes("win")) return "Windows";
  if (name.includes("chrome") || name.includes("cros")) return "ChromeOS";
  if (name.includes("linux")) return "Linux";
  return null;
}

function osFromUserAgent(ua: string) {
  const value = ua.toLowerCase();
  if (!value) return "Unknown";
  if (value.includes("ipad")) return "iPad";
  if (value.includes("iphone") || value.includes("ipod")) return "iOS";
  if (value.includes("android")) return "Android";
  if (value.includes("cros")) return "ChromeOS";
  if (value.includes("windows phone")) return "Mobile";
  if (value.includes("mac os") || value.includes("macintosh")) return "Mac";
  if (value.includes("windows")) return "Windows";
  if (value.includes("linux")) return "Linux";
  if (value.includes("mobile") || value.includes("tablet")) return "Mobile";
  return "Other";
}

function applicantIp() {
  const headers = getRequest().headers;
  const forwarded =
    headers.get("cf-connecting-ip") ??
    headers.get("x-real-ip") ??
    getRequestIP({ xForwardedFor: true }) ??
    "";
  const ip = forwarded.split(",")[0]?.trim() ?? "";
  return ip.length > 0 ? ip.slice(0, 64) : null;
}

export const submitCareerApplication = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    if (!input || typeof input !== "object") throw new Error("Invalid application.");
    const body = input as Record<string, unknown>;
    const email = requiredText(body["email"], 320, "Email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Enter a valid email.");
    const resumePath = requiredText(body["resumePath"], 300, "Resume");
    if (!/^[A-Za-z0-9._-]+$/.test(resumePath)) throw new Error("Invalid resume.");
    if (typeof body["walletInstalled"] !== "boolean") {
      throw new Error("Could not read the wallet check.");
    }
    return {
      role: optionalText(body["role"], 200),
      name: requiredText(body["name"], 200, "Name"),
      email,
      linkedin: optionalText(body["linkedin"], 500),
      github: optionalText(body["github"], 500),
      workLocation: requiredText(body["workLocation"], 200, "Work location"),
      resumePath,
      phone: optionalText(body["phone"], 50),
      telegram: optionalText(body["telegram"], 80),
      coverLetter: optionalText(body["coverLetter"], 8000),
      blockchainProject: optionalText(body["blockchainProject"], 8000),
      walletInstalled: body["walletInstalled"],
    };
  })
  .handler(async ({ data }) => {
    if (!isSupabaseConfigured) {
      throw new Error(
        "Applications are temporarily unavailable. Please email hello@blockvora.org with your resume.",
      );
    }

    const { error } = await getSupabase()
      .from("career_applications")
      .insert({
        role: data.role,
        name: data.name,
        email: data.email,
        linkedin: data.linkedin,
        github: data.github,
        work_location: data.workLocation,
        resume_path: data.resumePath,
        resume_url: null,
        phone: data.phone,
        telegram: data.telegram,
        cover_letter: data.coverLetter,
        blockchain_project: data.blockchainProject,
        applicant_ip: applicantIp(),
        applicant_os: applicantOs(),
        wallet_installed: data.walletInstalled,
      });

    if (error) {
      if (error.code === "42703" || /applicant_ip|applicant_os|wallet_installed/i.test(error.message)) {
        throw new Error(
          "Applications are missing the IP, OS, or wallet columns. Run supabase/migrations/20261116_application_signals.sql in the Supabase SQL editor, then submit again.",
        );
      }
      throw new Error(error.message || "Could not save application.");
    }

    return { ok: true };
  });
