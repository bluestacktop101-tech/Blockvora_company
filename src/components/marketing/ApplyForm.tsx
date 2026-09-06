import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { CAREER_RESUMES_BUCKET, getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const fieldClass =
  "border-border bg-background focus-visible:ring-ring mt-2 w-full rounded-md border px-3 py-2.5 text-sm outline-none focus-visible:ring-2";

function emptyToNull(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function ApplyForm({
  defaultRole,
  roles = [],
}: {
  defaultRole?: string;
  roles?: string[];
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resumeName, setResumeName] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = emptyToNull(data.get("name"));
    const email = emptyToNull(data.get("email"));
    const workLocation = emptyToNull(data.get("workLocation"));
    const resume = data.get("resume");

    if (!name || !email || !workLocation) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("error");
      setErrorMessage("Please upload your resume.");
      return;
    }

    try {
      if (!isSupabaseConfigured) {
        throw new Error(
          "Applications are temporarily unavailable. Please email hello@blockvora.com with your resume.",
        );
      }

      const supabase = getSupabase();
      const safeName = resume.name.replace(/[^\w.\-]+/g, "_");
      const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from(CAREER_RESUMES_BUCKET)
        .upload(path, resume, {
          cacheControl: "3600",
          upsert: false,
          contentType: resume.type || "application/octet-stream",
        });

      if (uploadError) {
        throw new Error(uploadError.message || "Resume upload failed.");
      }

      const { error: insertError } = await supabase.from("career_applications").insert({
        role: emptyToNull(data.get("role")) ?? defaultRole ?? null,
        name,
        email,
        resume_path: path,
        resume_url: null,
        linkedin: emptyToNull(data.get("linkedin")),
        github: emptyToNull(data.get("github")),
        phone: emptyToNull(data.get("phone")),
        telegram: emptyToNull(data.get("telegram")),
        work_location: workLocation,
        cover_letter: emptyToNull(data.get("coverLetter")),
        blockchain_project: emptyToNull(data.get("blockchainProject")),
      });

      if (insertError) {
        throw new Error(insertError.message || "Could not save application.");
      }

      form.reset();
      setResumeName(null);
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border-border bg-card rounded-xl border p-6 sm:p-8">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Application received
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
          Thank you — we&apos;ll review your application.
        </h3>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          A hiring lead typically responds within a few business days. Questions? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/careers"
            className="bg-foreground text-background inline-flex min-h-10 items-center rounded-md px-4 text-sm font-medium"
          >
            Back to careers
          </Link>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setErrorMessage(null);
              setResumeName(null);
            }}
            className="border-border hover:bg-secondary inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-medium"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void onSubmit(event)}
      className="border-border bg-card space-y-5 rounded-xl border p-5 sm:p-8"
      encType="multipart/form-data"
    >
      {roles.length > 0 ? (
        <div>
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <select id="role" name="role" className={fieldClass} defaultValue={defaultRole ?? ""}>
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      ) : defaultRole ? (
        <input type="hidden" name="role" value={defaultRole} />
      ) : null}

      {defaultRole && roles.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Applying for <span className="text-foreground font-medium">{defaultRole}</span>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div>
        <label htmlFor="resume" className="text-sm font-medium">
          Resume <span className="text-muted-foreground">*</span>
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className={cn(
            fieldClass,
            "file:bg-secondary file:text-foreground file:mr-3 file:rounded-md file:border-0 file:px-3 file:py-1.5 file:text-xs",
          )}
          onChange={(event) => {
            const file = event.target.files?.[0];
            setResumeName(file?.name ?? null);
          }}
        />
        <p className="text-muted-foreground mt-1.5 text-xs">
          PDF or Word · {resumeName ? resumeName : "No file selected"}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="LinkedIn Profile"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/…"
        />
        <Field label="Github URL" name="github" type="url" placeholder="https://github.com/…" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Telegram" name="telegram" placeholder="@username" />
      </div>

      <Field
        label="Anticipated Work Location (City, State)"
        name="workLocation"
        required
        autoComplete="address-level2"
        placeholder="San Francisco, CA"
      />

      <div>
        <label htmlFor="coverLetter" className="text-sm font-medium">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={5}
          className={cn(fieldClass, "resize-y")}
          placeholder="Optional — a short note on what you've built and why this role."
        />
      </div>

      <div>
        <label htmlFor="blockchainProject" className="text-sm font-medium">
          What blockchain project are you most excited about, and how do you interact with it?
        </label>
        <textarea
          id="blockchainProject"
          name="blockchainProject"
          rows={4}
          className={cn(fieldClass, "resize-y")}
          placeholder="Tell us about a project you follow, use, or contribute to…"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-foreground text-background inline-flex min-h-10 w-full items-center justify-center rounded-md px-4 text-sm font-medium disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required ? <span className="text-muted-foreground"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
