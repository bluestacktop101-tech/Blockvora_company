import { useMemo, useState, type FormEvent } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { format } from "date-fns";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import setupSql from "../../supabase/migrations/20261116_admin_candidates.sql?raw";
import {
  candidateStatusLabel,
  candidateStatuses,
  type Candidate,
  type CandidateStatus,
} from "@/lib/candidates";
import {
  adminLogin,
  adminLogout,
  deleteCandidate,
  getAdminSession,
  listCandidates,
  resumeUrl,
  updateCandidate,
} from "@/lib/admin-functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Candidates · Blockvora" },
      { name: "description", content: "Review career applications." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: () => getAdminSession(),
  component: AdminPage,
});

function AdminPage() {
  const initial = Route.useLoaderData();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(initial.authenticated);
  const [configured] = useState(initial.configured);

  async function onLogin(password: string) {
    await adminLogin({ data: { password } });
    setAuthenticated(true);
    await router.invalidate();
  }

  async function onLogout() {
    await adminLogout();
    setAuthenticated(false);
    await router.invalidate();
  }

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
            Blockvora
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Candidates</h1>
        </div>
        {authenticated ? (
          <button
            type="button"
            onClick={() => void onLogout()}
            className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
          >
            Sign out
          </button>
        ) : null}
      </header>

      {authenticated ? (
        <CandidateDesk />
      ) : (
        <LoginPanel configured={configured} onLogin={onLogin} />
      )}
    </div>
  );
}

function LoginPanel({
  configured,
  onLogin,
}: {
  configured: boolean;
  onLogin: (password: string) => Promise<void>;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      await onLogin(password);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not sign in.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={(event) => void submit(event)}
      className="border-border bg-card mx-auto mt-16 max-w-md rounded-xl border p-6"
    >
      <h2 className="text-lg font-semibold">Sign in</h2>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        Review applications submitted from the careers page.
      </p>
      {configured ? null : (
        <p className="mt-4 text-sm text-red-600" role="alert">
          This deployment cannot see ADMIN_PASSWORD and ADMIN_SESSION_SECRET. Add both in
          the Vercel project environment variables, then redeploy. The secret must be at least 32
          characters.
        </p>
      )}
      <label htmlFor="admin-password" className="mt-5 block text-sm font-medium">
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="border-border bg-background mt-2 w-full rounded-md border px-3 py-2.5 text-sm outline-none focus-visible:ring-2"
      />
      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending || !configured}
        className="bg-foreground text-background mt-5 inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function CandidateDesk() {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["admin-candidates"],
    queryFn: () => listCandidates(),
  });
  const [queryText, setQueryText] = useState("");
  const [statusFilter, setStatusFilter] = useState<CandidateStatus | "all">("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const candidates = query.data?.candidates ?? [];
  const roles = useMemo(() => {
    const names = new Set<string>();
    for (const candidate of candidates) {
      if (candidate.role) names.add(candidate.role);
    }
    return [...names].sort((a, b) => a.localeCompare(b));
  }, [candidates]);

  const visible = candidates.filter((candidate) => {
    if (statusFilter !== "all" && candidate.status !== statusFilter) return false;
    if (roleFilter !== "all" && candidate.role !== roleFilter) return false;
    const haystack = [candidate.name, candidate.email, candidate.role, candidate.workLocation]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(queryText.trim().toLowerCase());
  });

  const selected = visible.find((candidate) => candidate.id === selectedId) ?? visible[0] ?? null;

  async function save(candidate: Candidate, status: CandidateStatus, notes: string) {
    setActionError(null);
    try {
      await updateCandidate({ data: { id: candidate.id, status, notes } });
      await queryClient.invalidateQueries({ queryKey: ["admin-candidates"] });
    } catch (cause) {
      setActionError(cause instanceof Error ? cause.message : "Could not save.");
    }
  }

  async function remove(candidate: Candidate) {
    setActionError(null);
    try {
      await deleteCandidate({ data: { id: candidate.id } });
      setSelectedId(null);
      await queryClient.invalidateQueries({ queryKey: ["admin-candidates"] });
    } catch (cause) {
      setActionError(cause instanceof Error ? cause.message : "Could not delete.");
    }
  }

  async function openResume(candidate: Candidate) {
    setActionError(null);
    try {
      const result = await resumeUrl({ data: { id: candidate.id } });
      window.open(result.url, "_blank", "noopener,noreferrer");
    } catch (cause) {
      setActionError(cause instanceof Error ? cause.message : "Could not open the resume.");
    }
  }

  return (
    <div className="mt-8">
      {query.data?.needsMigration ? (
        <section className="border-border bg-card rounded-xl border p-5">
          <h2 className="text-sm font-semibold">One-time database setup</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {query.data.warning} Paste this into the Supabase SQL editor, run it, then check again.
            The first check stores the admin password from the server.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="bg-foreground text-background inline-flex min-h-9 items-center rounded-md px-3 text-sm font-medium"
              onClick={() => {
                void navigator.clipboard.writeText(setupSql).then(() => {
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 2000);
                });
              }}
            >
              {copied ? "Copied" : "Copy SQL"}
            </button>
            <a
              href="https://supabase.com/dashboard/project/omdcyfewrmcqflfxopqz/sql/new"
              target="_blank"
              rel="noreferrer"
              className="border-border inline-flex min-h-9 items-center rounded-md border px-3 text-sm font-medium"
            >
              Open SQL editor
            </a>
            <button
              type="button"
              onClick={() => void query.refetch()}
              className="border-border inline-flex min-h-9 items-center rounded-md border px-3 text-sm font-medium"
            >
              Check again
            </button>
          </div>
          <pre className="border-border bg-background mt-4 max-h-48 overflow-auto rounded-md border p-3 text-xs leading-relaxed">
            {setupSql}
          </pre>
        </section>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <input
          value={queryText}
          onChange={(event) => setQueryText(event.target.value)}
          placeholder="Search name, email, role"
          className="border-border bg-background h-10 min-w-56 flex-1 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
          aria-label="Search candidates"
        />
        <select
          value={roleFilter}
          onChange={(event) => setRoleFilter(event.target.value)}
          className="border-border bg-background h-10 rounded-md border px-3 text-sm"
          aria-label="Filter by role"
        >
          <option value="all">All roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(event) => {
            const value = event.target.value;
            setStatusFilter(value === "all" ? "all" : (value as CandidateStatus));
          }}
          className="border-border bg-background h-10 rounded-md border px-3 text-sm"
          aria-label="Filter by status"
        >
          <option value="all">All statuses</option>
          {candidateStatuses.map((status) => (
            <option key={status} value={status}>
              {candidateStatusLabel[status]}
            </option>
          ))}
        </select>
        <p className="text-muted-foreground text-sm">
          {query.isLoading ? "Loading…" : `${visible.length} shown`}
        </p>
      </div>

      {query.error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {query.error instanceof Error ? query.error.message : "Could not load candidates."}
        </p>
      ) : null}
      {actionError ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {actionError}
        </p>
      ) : null}

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ul className="border-border divide-border bg-card divide-y overflow-hidden rounded-xl border">
          {visible.length === 0 && !query.isLoading ? (
            <li className="text-muted-foreground px-4 py-10 text-sm">No applications match.</li>
          ) : null}
          {visible.map((candidate) => (
            <li key={candidate.id}>
              <button
                type="button"
                onClick={() => setSelectedId(candidate.id)}
                className={cn(
                  "hover:bg-secondary/60 flex w-full items-start justify-between gap-3 px-4 py-3 text-left",
                  selected?.id === candidate.id && "bg-secondary",
                )}
              >
                <span>
                  <span className="block text-sm font-medium">{candidate.name}</span>
                  <span className="text-muted-foreground mt-0.5 block text-xs">
                    {candidate.role ?? "General application"} · {formatWhen(candidate.createdAt)}
                    {candidate.applicantOs ? ` · ${candidate.applicantOs}` : ""}
                    {walletLabel(candidate.walletInstalled)
                      ? ` · ${walletLabel(candidate.walletInstalled)}`
                      : ""}
                  </span>
                </span>
                <StatusBadge status={candidate.status} />
              </button>
            </li>
          ))}
        </ul>

        {selected ? (
          <CandidateDetail
            key={selected.id}
            candidate={selected}
            canManage={query.data?.canManage === true}
            onSave={save}
            onDelete={remove}
            onResume={openResume}
          />
        ) : (
          <div className="border-border text-muted-foreground hidden rounded-xl border border-dashed p-6 text-sm lg:block">
            Select a candidate to review their application.
          </div>
        )}
      </div>
    </div>
  );
}

function CandidateDetail({
  candidate,
  canManage,
  onSave,
  onDelete,
  onResume,
}: {
  candidate: Candidate;
  canManage: boolean;
  onSave: (candidate: Candidate, status: CandidateStatus, notes: string) => Promise<void>;
  onDelete: (candidate: Candidate) => Promise<void>;
  onResume: (candidate: Candidate) => Promise<void>;
}) {
  const [status, setStatus] = useState<CandidateStatus>(candidate.status);
  const [notes, setNotes] = useState(candidate.notes ?? "");
  const [pending, setPending] = useState<"save" | "delete" | "resume" | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function run(kind: "save" | "delete" | "resume") {
    setPending(kind);
    try {
      if (kind === "save") await onSave(candidate, status, notes);
      if (kind === "delete") await onDelete(candidate);
      if (kind === "resume") await onResume(candidate);
    } finally {
      setPending(null);
    }
  }

  return (
    <article className="border-border bg-card h-fit rounded-xl border p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{candidate.name}</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            {candidate.role ?? "General application"}
          </p>
        </div>
        <StatusBadge status={status} />
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <Row label="Email" value={candidate.email} href={`mailto:${candidate.email}`} />
        <Row label="Phone" value={candidate.phone} />
        <Row label="Location" value={candidate.workLocation} />
        <Row label="Telegram" value={candidate.telegram} />
        <Row label="LinkedIn" value={candidate.linkedin} href={candidate.linkedin} />
        <Row label="GitHub" value={candidate.github} href={candidate.github} />
        <Row label="Applied" value={formatWhen(candidate.createdAt)} />
        <Row label="IP" value={candidate.applicantIp} />
        <Row label="OS" value={candidate.applicantOs} />
        <Row label="Wallet" value={walletLabel(candidate.walletInstalled) || "—"} />
      </dl>

      <label htmlFor="candidate-status" className="mt-5 block text-sm font-medium">
        Status
      </label>
      <select
        id="candidate-status"
        value={status}
        disabled={!canManage || pending !== null}
        onChange={(event) => setStatus(event.target.value as CandidateStatus)}
        className="border-border bg-background mt-2 w-full rounded-md border px-3 py-2 text-sm disabled:opacity-60"
      >
        {candidateStatuses.map((item) => (
          <option key={item} value={item}>
            {candidateStatusLabel[item]}
          </option>
        ))}
      </select>

      <label htmlFor="candidate-notes" className="mt-4 block text-sm font-medium">
        Notes
      </label>
      <textarea
        id="candidate-notes"
        value={notes}
        disabled={!canManage || pending !== null}
        onChange={(event) => setNotes(event.target.value)}
        rows={4}
        className="border-border bg-background mt-2 w-full resize-y rounded-md border px-3 py-2 text-sm disabled:opacity-60"
        placeholder="Interview notes, next step, or why this person is on hold."
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!canManage || pending !== null}
          onClick={() => void run("save")}
          className="bg-foreground text-background inline-flex min-h-9 items-center rounded-md px-3 text-sm font-medium disabled:opacity-60"
        >
          {pending === "save" ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          disabled={!candidate.resumePath || pending !== null}
          onClick={() => void run("resume")}
          className="border-border inline-flex min-h-9 items-center rounded-md border px-3 text-sm font-medium disabled:opacity-60"
        >
          {pending === "resume" ? "Opening…" : "Open resume"}
        </button>
        {confirmDelete ? (
          <button
            type="button"
            disabled={!canManage || pending !== null}
            onClick={() => void run("delete")}
            className="inline-flex min-h-9 items-center rounded-md bg-red-600 px-3 text-sm font-medium text-white disabled:opacity-60"
          >
            {pending === "delete" ? "Deleting…" : "Confirm delete"}
          </button>
        ) : (
          <button
            type="button"
            disabled={!canManage || pending !== null}
            onClick={() => setConfirmDelete(true)}
            className="text-red-600 inline-flex min-h-9 items-center rounded-md px-3 text-sm font-medium disabled:opacity-60"
          >
            Delete
          </button>
        )}
      </div>

      {candidate.coverLetter ? (
        <section className="mt-5">
          <h3 className="text-sm font-medium">Cover letter</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed whitespace-pre-wrap">
            {candidate.coverLetter}
          </p>
        </section>
      ) : null}
      {candidate.blockchainProject ? (
        <section className="mt-5">
          <h3 className="text-sm font-medium">Blockchain project</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed whitespace-pre-wrap">
            {candidate.blockchainProject}
          </p>
        </section>
      ) : null}
    </article>
  );
}

function Row({ label, value, href }: { label: string; value: string | null; href?: string | null }) {
  return (
    <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="truncate">
        {value && href ? (
          <a href={href} className="underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          (value ?? "—")
        )}
      </dd>
    </div>
  );
}

function StatusBadge({ status }: { status: CandidateStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full px-2 py-0.5 text-[0.7rem] font-medium",
        status === "new" && "bg-zinc-100 text-zinc-700",
        status === "reviewing" && "bg-blue-50 text-blue-700",
        status === "interview" && "bg-violet-50 text-violet-700",
        status === "offer" && "bg-amber-50 text-amber-800",
        status === "hired" && "bg-emerald-50 text-emerald-700",
        status === "rejected" && "bg-red-50 text-red-700",
      )}
    >
      {candidateStatusLabel[status]}
    </span>
  );
}

function walletLabel(installed: boolean | null) {
  if (installed === true) return "Installed";
  if (installed === false) return "Not installed";
  return "";
}

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "—";
  return format(date, "MMM d, yyyy");
}
