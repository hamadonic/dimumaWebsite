"use client";

import { useEffect, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Check } from "@/components/ui/icons";
import { basePath, gccCountries } from "@/lib/site";
import { isPersonalEmail } from "@/lib/lead";

type Intent = "trial" | "demo";
type Status = "idle" | "submitting" | "success" | "error";

const roles = [
  "Sustainability / HSE",
  "Finance",
  "C-suite / Board",
  "ESG consultant",
  "Other",
];

/** Text half of the human check — phrased to parallel the math question. */
const TEXT_QUESTION = "What's the opposite of “hot”?";
const TEXT_ANSWER = "cold";

function newMathPair() {
  return {
    a: 2 + Math.floor(Math.random() * 7), // 2–8
    b: 1 + Math.floor(Math.random() * 8), // 1–8
  };
}

const inputClass =
  "h-11 w-full rounded-lg border border-subtle bg-background px-3.5 text-sm text-foreground placeholder:text-muted/70 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

const errorStyle = {
  color: "var(--chart-up)",
  borderColor: "color-mix(in oklab, var(--chart-up) 40%, transparent)",
  backgroundColor: "color-mix(in oklab, var(--chart-up) 10%, transparent)",
} as const;

/**
 * Request-a-trial / book-a-demo form.
 *
 * Submissions are delivered by Formsubmit (see lib/site.ts) — emailed to the
 * configured inbox(es). Guards: honeypot, a work-email-only rule (no Gmail/
 * Outlook/etc.), and a two-part human check (a word + a small sum). All checks
 * are client-side; a determined bot posting directly to Formsubmit bypasses
 * them, so the honeypot + Formsubmit's own spam handling remain the backstop.
 * Deliberately no password or payment field — the product has no self-serve
 * signup, so we never imply an account is created.
 */
export function RequestForm({ initialIntent = "trial" }: { initialIntent?: Intent }) {
  const [intent, setIntent] = useState<Intent>(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [challengeError, setChallengeError] = useState<string | null>(null);
  // Fixed initial values (server + first client render match, no hydration
  // mismatch); randomised after mount.
  const [math, setMath] = useState({ a: 3, b: 4 });

  useEffect(() => {
    setMath(newMathPair());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Native `required` / `type=email` validation gates this handler.
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field; bots do.
    if (String(data.get("_honey") ?? "").length > 0) return;

    // Work-email only.
    const emailVal = String(data.get("email") ?? "").trim();
    if (isPersonalEmail(emailVal)) {
      setEmailError(
        "Please use your organisation's email — personal inboxes (Gmail, Outlook, etc.) aren't accepted.",
      );
      form.querySelector<HTMLInputElement>("#email")?.focus();
      return;
    }
    setEmailError(null);

    // Human check: word + sum.
    const textOk =
      String(data.get("challenge_text") ?? "").trim().toLowerCase() === TEXT_ANSWER;
    const mathOk = Number(data.get("challenge_math")) === math.a + math.b;
    if (!textOk || !mathOk) {
      setChallengeError("Those answers don't look right — please check and try again.");
      return;
    }
    setChallengeError(null);

    setFirstName(String(data.get("name") ?? "").trim().split(" ")[0] ?? "");
    setEmail(emailVal);
    setStatus("submitting");

    // Posts to our own origin; the server route validates and forwards to the
    // delivery provider (see app/api/lead/route.ts).
    const payload = {
      intent,
      name: data.get("name"),
      email: emailVal,
      company: data.get("company"),
      country: data.get("country"),
      role: data.get("role"),
      _honey: data.get("_honey") ?? "",
    };

    try {
      const res = await fetch(`${basePath}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (res.ok && json.ok === true) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col gap-4 rounded-2xl border border-brand-green/30 bg-brand-green/5 p-7"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Thanks{firstName ? `, ${firstName}` : ""} — request received.
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          Here&apos;s what happens next: a Susmatic ESG specialist reviews your request,
          configures your entities and indicators, and emails a link
          {email ? (
            <>
              {" "}
              to <span className="font-medium text-foreground">{email}</span>
            </>
          ) : null}
          . No account is created automatically, and we never ask for a password or
          payment details here.
        </p>
        <p className="text-xs text-muted">
          Prefer to talk first? You can also book a demo.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/products/susmatic/product" variant="secondary">
            Explore the product
          </ButtonLink>
          <Button type="button" variant="ghost" onClick={() => setStatus("idle")}>
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-subtle bg-surface p-6 sm:p-8"
    >
      {/* Intent */}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1.5 text-sm font-medium text-foreground">
          What can we set up?
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { value: "trial", label: "Set up a trial" },
              { value: "demo", label: "Book a demo" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                intent === opt.value
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-subtle bg-background text-muted hover:text-foreground"
              }`}
            >
              <input
                type="radio"
                name="intent"
                value={opt.value}
                checked={intent === opt.value}
                onChange={() => setIntent(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Layla Ahmed"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="layla@company.com"
            className={inputClass}
            aria-invalid={emailError ? true : undefined}
            onBlur={(e) => {
              const v = e.target.value.trim();
              setEmailError(v && isPersonalEmail(v) ? "Please use your work email, not a personal one." : null);
            }}
          />
          {emailError && (
            <p role="alert" className="mt-1.5 text-xs" style={{ color: "var(--chart-up)" }}>
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Company name"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <select id="country" name="country" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a country
            </option>
            {gccCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Your role
          </label>
          <select id="role" name="role" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Human check — a word and a small sum. */}
      <div className="flex flex-col gap-3 rounded-lg border border-subtle bg-background p-4">
        <p className="text-sm font-medium text-foreground">
          Quick check{" "}
          <span className="font-normal text-muted">— confirms you&apos;re human</span>
        </p>
        <div className="grid items-end gap-4 sm:grid-cols-2">
          <div className="flex h-full flex-col">
            <label htmlFor="challenge_text" className={labelClass}>
              {TEXT_QUESTION}
            </label>
            <input
              id="challenge_text"
              name="challenge_text"
              type="text"
              required
              autoComplete="off"
              className={`${inputClass} mt-auto`}
            />
          </div>
          <div className="flex h-full flex-col">
            <label htmlFor="challenge_math" className={labelClass}>
              What is {math.a} + {math.b}?
            </label>
            <input
              id="challenge_math"
              name="challenge_math"
              type="text"
              inputMode="numeric"
              required
              autoComplete="off"
              className={`${inputClass} mt-auto`}
            />
          </div>
        </div>
        {challengeError && (
          <p role="alert" className="text-xs" style={{ color: "var(--chart-up)" }}>
            {challengeError}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from people, catches bots. Do not remove. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="rounded-lg border px-3.5 py-2.5 text-sm" style={errorStyle}>
          We couldn&apos;t send that just now. Please try again in a moment.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-1 w-full" disabled={submitting}>
        {submitting
          ? "Sending…"
          : intent === "demo"
            ? "Request a demo"
            : "Request a trial"}
      </Button>

      <p className="text-xs leading-relaxed text-muted">
        Please use your work email. We&apos;ll use your details only to respond to
        this request — no password or payment is ever requested on this site.
      </p>
    </form>
  );
}
