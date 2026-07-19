/**
 * Lead-form email rules, used by the client form for instant UX feedback.
 * Submissions go straight to Netlify Forms (see lib/site.ts) — there is no
 * server route, so this check is client-side only; Netlify's own spam
 * filtering plus the form's honeypot are the backstop against abuse.
 *
 * Personal / free inboxes are rejected — this is a work-email-only form. Matched
 * on the exact domain, so a company on Google Workspace (its own domain) passes;
 * only literal consumer inboxes are blocked.
 */
export const personalEmailDomains = new Set<string>([
  "gmail.com", "googlemail.com",
  "yahoo.com", "yahoo.co.uk", "yahoo.co.in", "yahoo.fr", "yahoo.de", "ymail.com", "rocketmail.com",
  "hotmail.com", "hotmail.co.uk", "hotmail.fr", "outlook.com", "outlook.fr", "live.com", "live.co.uk", "msn.com", "windowslive.com",
  "icloud.com", "me.com", "mac.com",
  "aol.com", "aim.com",
  "gmx.com", "gmx.net", "gmx.de", "mail.com", "email.com",
  "proton.me", "protonmail.com", "pm.me",
  "yandex.com", "yandex.ru", "zoho.com",
  "qq.com", "163.com", "126.com", "sina.com", "foxmail.com",
]);

export const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function isPersonalEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  return personalEmailDomains.has(email.slice(at + 1).trim().toLowerCase());
}
