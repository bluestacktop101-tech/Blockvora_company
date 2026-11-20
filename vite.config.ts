// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { loadEnv, type UserConfig } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

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

/** Vercel can store the public Supabase settings without a VITE_ prefix. */
function publicEnv(viteName: string, plainName: string, fileEnv: Record<string, string>) {
  for (const value of [process.env[viteName], fileEnv[viteName], process.env[plainName], fileEnv[plainName]]) {
    if (typeof value !== "string") continue;
    const cleaned = unquote(value);
    if (cleaned) return cleaned;
  }
  return "";
}

const fileEnv = loadEnv(
  process.env["NODE_ENV"] === "production" ? "production" : "development",
  process.cwd(),
  "",
);
const supabaseUrl = publicEnv("VITE_SUPABASE_URL", "SUPABASE_URL", fileEnv);
const supabaseKey = publicEnv("VITE_SUPABASE_PUBLISHABLE_KEY", "SUPABASE_PUBLISHABLE_KEY", fileEnv);

const vitePublicEnv: UserConfig = {
  define: {
    ...(supabaseUrl ? { "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(supabaseUrl) } : {}),
    ...(supabaseKey ? { "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(supabaseKey) } : {}),
  },
};

export default defineConfig({
  vite: vitePublicEnv,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Pin Nitro to Vercel so CI/local production builds compile for Vercel Functions.
  // Inside Lovable sandboxes this remains forced to Cloudflare.
  nitro: {
    preset: "vercel",
    // This Nitro release only knows Node 20–24. On Node 26 it writes nodejs24.x and Vercel rejects the deploy.
    ...({ vercel: { functions: { runtime: "nodejs22.x" } } } as Record<string, unknown>),
  },
});
