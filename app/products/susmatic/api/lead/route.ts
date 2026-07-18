import { NextResponse } from "next/server";
import { leadFormCc, leadFormEndpoint, siteUrl } from "@/lib/site";
import { emailPattern, isPersonalEmail } from "@/lib/lead";

/**
 * Server-side proxy for the demo/trial form.
 *
 * Why this exists (security):
 *  - Enforces the work-email rule + required fields + honeypot server-side, so a
 *    bot POSTing directly can't bypass the client checks.
 *  - Keeps the Formsubmit inbox/endpoint out of the client bundle — the browser
 *    only ever talks to same-origin /api/lead.
 *  - Applies a best-effort rate limit.
 *
 * The Formsubmit forward happens server-to-server (not subject to browser CSP).
 */

// Best-effort in-memory limiter — per warm server instance only. For hard
// guarantees across instances use an edge KV / Upstash; this is a light deterrent.
const hits = new Map<string, number[]>();
function rateLimited(ip: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > max;
}

const asString = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  const ip =
    (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: bots fill this. Pretend success and drop silently.
  if (asString(body._honey).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const intent = body.intent === "demo" ? "demo" : "trial";
  const name = asString(body.name);
  const email = asString(body.email);
  const company = asString(body.company);
  const country = asString(body.country);
  const role = asString(body.role);

  if (!name || !email || !company || !country || !role) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }
  if (!emailPattern.test(email) || isPersonalEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  try {
    const res = await fetch(leadFormEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Formsubmit rejects server-side requests without a browser Referer/Origin
        // ("open this page through a web server"); send the site's own origin.
        Referer: siteUrl,
        Origin: siteUrl,
      },
      body: JSON.stringify({
        _subject: `New Susmatic ESG ${intent} request`,
        _template: "table",
        _captcha: "false",
        ...(leadFormCc ? { _cc: leadFormCc } : {}),
        intent,
        name,
        email,
        company,
        country,
        role,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: unknown };
    const ok = res.ok && (json.success === "true" || json.success === true);
    return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
