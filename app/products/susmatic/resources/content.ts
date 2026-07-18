/**
 * Resources content. Plain typed data — articles live here so copy is editable
 * without touching JSX. Rules honoured: no invented statistics, no fabricated
 * regulatory specifics (framing / how-it-works only), standards as support.
 *
 * To add an article: append to `articles`. It appears on the index, gets its
 * own /resources/[slug] page, Article + Breadcrumb structured data, and a
 * sitemap entry automatically.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  /** Meta description — keep ≤ 155 chars. */
  description: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  /** ISO dates. */
  published: string;
  updated: string;
  /**
   * Hero image — a free-to-use Unsplash photo (Unsplash License: free for
   * commercial use, no attribution required). Store the base URL only; sizing
   * params (?w=…) are added per context. Swap `src` to change the picture.
   */
  image: { src: string; alt: string };
  body: Block[];
};

export const resourcesHero = {
  eyebrow: "Resources",
  title: "Guides for defensible ESG reporting.",
  lead: "Practical, jargon-free notes on collecting ESG data, proving it, and getting a disclosure ready for assurance. No fluff, no invented numbers.",
};

export const articles: Article[] = [
  {
    slug: "esg-data-collection-spreadsheets-vs-system",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "A laptop screen showing data dashboards and charts.",
    },
    title: "ESG data collection: spreadsheets vs. a system",
    description:
      "Why spreadsheets break down for ESG data — version sprawl, inconsistent factors, no audit trail — and what a system of record changes.",
    excerpt:
      "Most ESG programs start in a spreadsheet — and get stuck there. Here's where it breaks down, and what changes when every figure lives on one record.",
    category: "Data & operations",
    readingMinutes: 5,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "Almost every ESG program starts in a spreadsheet. It's the fastest way to get moving: a tab per site, a column per month, a formula at the bottom. For a first report, that's often enough. The trouble starts when the numbers have to be defended — when someone asks where a figure came from, and the answer is a workbook nobody fully trusts anymore.",
      },
      { type: "h2", text: "Where the spreadsheet breaks down" },
      {
        type: "p",
        text: "The failure isn't the spreadsheet itself — it's what happens as an ESG program grows past one person and one reporting cycle:",
      },
      {
        type: "ul",
        items: [
          "Version sprawl. “Final_v3_updated” lands in three inboxes, and no one is sure which total is the real one.",
          "Inconsistent factors. Each team keeps its own emission factors, so two people report two different numbers for the same activity.",
          "Evidence lives elsewhere. The utility bill that justifies a figure sits in an email thread, disconnected from the number it supports.",
          "No audit trail. When a cell changes, there's no record of who changed it, when, or why.",
          "Error-prone consolidation. Rolling several entities into one group total by hand is exactly where a decimal slips.",
        ],
      },
      { type: "h2", text: "What changes with a system of record" },
      {
        type: "p",
        text: "A purpose-built ESG system doesn't just store the same numbers in a nicer grid. It changes what a number is — from a value in a cell to a record with evidence and accountability attached:",
      },
      {
        type: "ul",
        items: [
          "One record per figure, with its source document attached — the bill or receipt travels with the number.",
          "A central library of emission factors every team calculates against, so results are consistent and comparable.",
          "Maker/checker approvals: the person who enters a figure isn't the only one who stands behind it, and an approved record locks.",
          "An immutable audit log — every entry, change and approval is recorded and can't be quietly rewritten.",
          "Traceability end to end, so any reported figure can be followed back to its source and its approver on demand.",
        ],
      },
      { type: "h2", text: "The moment it matters: assurance" },
      {
        type: "p",
        text: "The difference is invisible right up until audit season, and then it's the whole game. An assuror doesn't just want the number; they want to see how it was reached. With a spreadsheet, reconstructing that costs days you don't have before the deadline. With a system of record, the chain — source document, factor applied, approver — is already intact and reviewable. The report stops being a scramble and becomes a matter of pressing a button.",
      },
      { type: "h2", text: "When a spreadsheet is still fine" },
      {
        type: "p",
        text: "None of this means spreadsheets are the enemy. For a single entity with a handful of indicators and a one-off report, a well-kept spreadsheet is perfectly reasonable. The tipping point is scale and scrutiny: multiple entities, several teams contributing, and a disclosure that carries someone's signature and external assurance behind it. That's the point where the spreadsheet's convenience turns into risk.",
      },
      {
        type: "p",
        text: "Susmatic ESG is built for exactly that transition — collecting ESG data, proving it against its source, and reporting it against the frameworks GCC regulators ask for, without each team maintaining its own version of the truth.",
      },
    ],
  },

  {
    slug: "fuel-receipt-to-emissions",
    image: {
      src: "https://images.unsplash.com/photo-1567777176186-dfa735f1fe20",
      alt: "A vehicle refuelling at a fuel-station pump.",
    },
    title: "Turning a fuel receipt into emissions: the litres-then-factor method",
    description:
      "A fuel receipt shows what you paid, not what you burned. Here's the litres-then-factor method that turns a GCC fuel receipt into a defensible emissions figure.",
    excerpt:
      "A receipt tells you the cost, not the carbon. Here's how to get from cost-at-the-pump to a defensible emissions figure — the GCC way.",
    category: "Emissions",
    readingMinutes: 5,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "A fuel receipt is one of the most common pieces of evidence behind a GCC fleet's emissions — and one of the most misread. It tells you what was paid, not what was burned. To report emissions you need litres; the receipt gives you a total in local currency. Bridging that gap correctly is the difference between a number you can defend and a guess.",
      },
      { type: "h2", text: "The two-step method" },
      {
        type: "p",
        text: "There are two moves, in order: turn the amount paid into litres using the pump price in force, then turn litres into emissions using an emission factor.",
      },
      {
        type: "ul",
        items: [
          "Cost → litres: divide the amount on the receipt by the pump price for that country, grade and month.",
          "Litres → emissions: multiply the litres by the emission factor for that fuel.",
        ],
      },
      { type: "h2", text: "Why the price has to be the right one" },
      {
        type: "p",
        text: "This is where generic tools fall down. Fuel prices in the GCC differ by country and by grade, and several change month to month. Use last year's price, or a neighbouring country's, and you quietly distort the litres — and therefore the emissions. The price you apply must be the one in force that month, for that country, for that exact grade.",
      },
      {
        type: "p",
        text: "A worked example, with illustrative figures: a receipt shows 500 in local currency for diesel. If the pump price that month was, say, 0.79 per litre, that's about 633 litres. Change the price and the litres change with it — which is exactly why the price source matters as much as the arithmetic.",
      },
      { type: "h2", text: "Applying the factor" },
      {
        type: "p",
        text: "With litres in hand, multiply by the emission factor for that fuel — a value taken from a maintained library rather than typed from memory. The point of a shared library is consistency: every team applies the same factor, so two people reporting the same activity reach the same number instead of two.",
      },
      { type: "h2", text: "Keep the trail" },
      {
        type: "p",
        text: "The point isn't only the answer; it's being able to show how you reached it. A defensible fleet-fuel figure can be traced back to the receipt it came from, the price applied that month, and the factor used. When an assuror asks, the whole chain is one click away — not a folder someone has to reconstruct under deadline.",
      },
      {
        type: "p",
        text: "This is exactly what Susmatic ESG automates: it reads the receipt, applies the maintained GCC price for that country and grade to derive litres, applies the factor from the Emission Library, and keeps every step attached to the record.",
      },
    ],
  },

  {
    slug: "esg-assurance-readiness-checklist",
    image: {
      src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      alt: "Printed financial reports and charts spread across a desk.",
    },
    title: "An audit-readiness checklist for your first ESG assurance",
    description:
      "Getting an ESG disclosure ready for external assurance? A practical, framework-agnostic checklist: traceability, evidence, factors, approvals and consistency.",
    excerpt:
      "External assurance rewards preparation. A practical checklist to get your ESG numbers — and their evidence — audit-ready before the assuror arrives.",
    category: "Assurance",
    readingMinutes: 6,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "External assurance on ESG data is becoming standard rather than optional, and it rewards preparation. An assuror doesn't just check whether a number looks right; they test whether you can demonstrate how it was produced and controlled. Here's a practical checklist to get there — framework-agnostic, so it holds whether you report against GRI, ISSB/IFRS S1 & S2 or CBB guidelines.",
      },
      { type: "h2", text: "1. Every number traces to its source" },
      {
        type: "p",
        text: "For each reported figure you should be able to produce the source document behind it — the bill, receipt or meter reading — without a search party. If evidence lives in inboxes disconnected from the numbers, that's the first thing to fix.",
      },
      { type: "h2", text: "2. Factors and methods are documented" },
      {
        type: "p",
        text: "Assurors will ask which emission factor you applied and where it came from. Keep factors in a maintained library, record the method used for each calculation, and make sure the same activity is calculated the same way across every team.",
      },
      { type: "h2", text: "3. There's a review step, not just an entry step" },
      {
        type: "p",
        text: "A figure entered by one person and never checked is a weak point. Maker/checker separation — where a second person reviews and signs off before a record locks — is precisely the control an assuror looks for.",
      },
      { type: "h2", text: "4. Changes are logged" },
      {
        type: "p",
        text: "An immutable audit trail that records who entered a figure, who approved it and what changed is what lets you answer “has this been altered?” with evidence rather than reassurance.",
      },
      { type: "h2", text: "5. The report maps to the framework" },
      {
        type: "p",
        text: "Keep a clear index showing which disclosure answers which requirement of the framework you're reporting against. It speeds the assuror's work and surfaces gaps before they do.",
      },
      { type: "h2", text: "6. Numbers are internally consistent" },
      {
        type: "p",
        text: "The figure in the board pack should equal the figure in the detailed report and on the dashboard. Draw them from the same approved records and they can't quietly disagree; re-key them between systems and you'll need to reconcile.",
      },
      { type: "h2", text: "7. You have a restatement position" },
      {
        type: "p",
        text: "Decide in advance how you'll handle a correction found after publication. A documented restatement approach signals maturity rather than panic.",
      },
      {
        type: "p",
        text: "Most of this comes down to one habit: treating each number as a record with evidence and accountability attached, not a value in a cell. That's the foundation Susmatic ESG is built on — role-based access, approvals and an immutable audit log behind every figure.",
      },
    ],
  },

  {
    slug: "scope-1-2-3-emissions-gcc",
    image: {
      src: "https://images.unsplash.com/photo-1468787737698-f5c03f0570dd",
      alt: "An industrial power plant with cooling towers at dusk.",
    },
    title: "Scope 1, 2 and 3 emissions explained — a GCC starter",
    description:
      "Scope 1, 2 and 3 emissions explained simply — and where common GCC activities like fleet fuel, purchased power and on-site generation actually fall.",
    excerpt:
      "The three ‘scopes’ decide where every emission belongs. Here's what each covers — and where GCC activities like fleet fuel and purchased electricity sit.",
    category: "Emissions",
    readingMinutes: 6,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "Almost every emissions report organises its numbers into three “scopes.” The idea comes from the GHG Protocol — the standard framework behind most corporate emissions accounting — and it exists to avoid double-counting, so the same tonne of CO₂ isn't claimed twice across companies. Here's what each scope covers, in plain terms, with the GCC activities that typically fall into each.",
      },
      { type: "h2", text: "Scope 1 — what you burn directly" },
      {
        type: "p",
        text: "Direct emissions from sources you own or control. In a GCC enterprise this is usually your company fleet's fuel and any on-site combustion — diesel generators, for instance, which are common wherever grid supply needs backing up.",
      },
      {
        type: "ul",
        items: [
          "Company fleet fuel (petrol, diesel)",
          "On-site power generation and gensets",
          "Any fuel burned on your own premises",
        ],
      },
      { type: "h2", text: "Scope 2 — the energy you buy" },
      {
        type: "p",
        text: "Indirect emissions from the electricity — and sometimes cooling or steam — you purchase. You don't burn anything on site, but generating that power produced emissions somewhere. Purchased grid electricity is the classic Scope 2 line for most GCC organisations.",
      },
      {
        type: "ul",
        items: [
          "Purchased grid electricity",
          "Purchased district cooling or steam, where applicable",
        ],
      },
      { type: "h2", text: "Scope 3 — everything else in your value chain" },
      {
        type: "p",
        text: "All other indirect emissions, up and down your value chain, that you don't own or control: business travel, employee commuting, purchased goods and services, waste, and more. It's the broadest and hardest category — most organisations start with the categories they can measure reliably and expand over time.",
      },
      { type: "h2", text: "Where the GCC specifics bite" },
      {
        type: "p",
        text: "The scopes are universal, but the inputs are local. Fleet fuel (Scope 1) has to be derived from receipts using per-country, per-grade pump prices. Purchased electricity (Scope 2) depends on a regional grid factor. Getting the boundaries and the local inputs right is what makes the totals defensible — not just the category labels.",
      },
      { type: "h2", text: "Start where the data is solid" },
      {
        type: "p",
        text: "A credible first report doesn't need every Scope 3 category on day one. Start with Scope 1 and 2, where the data is closest to hand — fleet fuel, generation and purchased power — prove those numbers against their source, and extend from there.",
      },
      {
        type: "p",
        text: "Susmatic ESG covers exactly these inputs — electricity, water, waste, company fleet fuel and power generation — and turns the evidence behind each into a figure you can defend.",
      },
    ],
  },

  {
    slug: "maker-checker-esg-approvals",
    image: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      alt: "Two professionals shaking hands across a desk.",
    },
    title: "Maker/checker for ESG data: approvals that survive an audit",
    description:
      "Maker/checker approval turns an ESG figure from one person's entry into a reviewed, locked record. Here's how the control works — and why auditors look for it.",
    excerpt:
      "A number entered by one person and never checked is an auditor's first question. Here's how maker/checker approval makes ESG data defensible.",
    category: "Governance",
    readingMinutes: 5,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "The weakest link in ESG data is often not the calculation — it's the control around it. When a figure is entered by one person and never independently checked, you're trusting a single point of judgment. Maker/checker is the control that removes that weakness, and it's one of the first things an assuror looks for.",
      },
      { type: "h2", text: "What maker/checker actually means" },
      {
        type: "p",
        text: "Two roles, kept separate. The maker enters the record; a different checker reviews and approves it. The person who enters a figure is never the only person who stands behind it. On approval, the record locks — no more silent edits.",
      },
      {
        type: "ul",
        items: [
          "The maker can't approve their own work.",
          "Approved records lock — any change requires a new, logged action.",
          "Every approved record names its approver.",
        ],
      },
      { type: "h2", text: "Why separation of duties matters here" },
      {
        type: "p",
        text: "Segregation of duties is a basic financial control, and ESG data deserves the same. It catches the ordinary errors — a mistyped reading, the wrong factor — and it removes the “one person's word” problem. Accountability stops being implied and becomes recorded: the figure carries the names of who entered it and who signed it off.",
      },
      { type: "h2", text: "The audit trail behind it" },
      {
        type: "p",
        text: "Approvals only count if they're recorded. An immutable audit log — who entered, who approved, what changed and when — is what turns “trust me” into “here's the evidence.” When an assuror asks whether a number was reviewed and whether it has been altered since, that log is the answer.",
      },
      { type: "h2", text: "Where teams get it wrong" },
      {
        type: "p",
        text: "The common failure modes are quiet ones: approvals done informally over email, with no record and no lock; the same person entering and approving; or a sign-off that doesn't actually prevent later edits. If the workflow doesn't lock the record and log the approval, it's theatre — it looks like a control without being one.",
      },
      { type: "h2", text: "What good looks like" },
      {
        type: "p",
        text: "A figure is entered under a named identity, submitted, reviewed by a second person, and approved — at which point it locks, and nothing reaches a report unreviewed. That's the standard an assuror expects, and it's the difference between a number you hope is right and one you can defend.",
      },
      {
        type: "p",
        text: "This is exactly how Approvals work in Susmatic ESG: maker/checker with record locking and an immutable audit log, so nothing reaches a report without a second set of eyes.",
      },
    ],
  },

  {
    slug: "board-esg-disclosure-risk",
    image: {
      src: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
      alt: "An executive team meeting around a boardroom table.",
    },
    title: "The board's ESG disclosure: managing the risk behind the signature",
    description:
      "An ESG disclosure carries the board's signature — and real regulatory and reputational risk. Three questions directors should ask before they sign.",
    excerpt:
      "The disclosure with a director's name on it carries real risk. Here's what the board should be able to see before it signs — and what to ask for.",
    category: "Leadership",
    readingMinutes: 5,
    published: "2026-07-18",
    updated: "2026-07-18",
    body: [
      {
        type: "p",
        text: "For an executive or board member, an ESG disclosure isn't a features conversation — it's a signature. And a signature carries risk: regulatory scrutiny if a number is wrong, reputational damage if it can't be defended. The question at board level isn't “what does the tool do,” it's “can we stand behind what we're about to publish.”",
      },
      { type: "h2", text: "The risk is personal now" },
      {
        type: "p",
        text: "As ESG disclosure moves from voluntary to expected, the numbers carry more weight — and directors are increasingly the ones who answer for them. A figure that can't be substantiated stops being a data-quality issue and becomes a liability with a name attached.",
      },
      { type: "h2", text: "Three questions before you sign" },
      {
        type: "ul",
        items: [
          "Can every number be traced to its source? If someone asks where a figure came from, is the answer a document — or a search?",
          "Was it reviewed, not just entered? Did a second person approve it before it was locked?",
          "Is it consistent everywhere? Does the board pack match the detailed report and the dashboard, because they're drawn from the same approved records?",
        ],
      },
      { type: "h2", text: "Control beats trust" },
      {
        type: "p",
        text: "The board doesn't need to re-check every number itself — it needs assurance that the system does. Role-based access, maker/checker approvals and an immutable audit log mean a reported figure is controlled before it ever carries a signature. That's the difference between trusting the process and being able to evidence it.",
      },
      { type: "h2", text: "Assurance readiness is a board issue" },
      {
        type: "p",
        text: "External assurance on ESG data is becoming standard. A disclosure that is already traceable, reviewed and internally consistent is one that survives that scrutiny — and one a board can sign with confidence rather than hope. Getting there is a governance decision, not a reporting afterthought.",
      },
      {
        type: "p",
        text: "Susmatic ESG is built so the disclosure that carries your name is defensible before you sign it — every figure traceable to its source and its approver, reviewed and locked, ready for assurance.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
