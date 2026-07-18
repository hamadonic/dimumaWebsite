import type { SVGProps } from "react";

/**
 * Inline SVG icon set — no icon library.
 * House style: 24x24 viewBox, stroke 1.8, round caps + joins, currentColor.
 * Every icon is decorative by default (aria-hidden); pass a `title` only when
 * an icon carries meaning on its own.
 */

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Base({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/* ---- Navigation / chrome -------------------------------------------- */

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 9l6 6 6-6" />
  </Base>
);

export const Sun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Base>
);

export const Moon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 6L9 17l-5-5" />
  </Base>
);

/* ---- Collect --------------------------------------------------------- */

export const Table = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M3 14.5h18M9 4v16M15 4v16" />
  </Base>
);

export const UploadDoc = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M12 18v-5M9.5 15l2.5-2.5L14.5 15" />
  </Base>
);

export const Sparkles = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
    <path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8L16 17l1.8-.7Z" />
  </Base>
);

export const Droplet = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z" />
  </Base>
);

export const Bolt = (p: IconProps) => (
  <Base {...p}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6Z" />
  </Base>
);

export const Recycle = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17H4.5a1.5 1.5 0 0 1-1.3-2.3L5 11.5" />
    <path d="M9.5 7.2L11 4.6a1.5 1.5 0 0 1 2.6 0l1.6 2.8" />
    <path d="M17.3 12.3l1.5 2.6a1.5 1.5 0 0 1-1.3 2.3H14" />
    <path d="M9 20l-2-3 3.5-.6M15 4.2l.8 3.4-3.4.4M20.5 13.6l-3.2 1.5-1-3.3" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-2.3-4.5" />
  </Base>
);

/* ---- Prove ----------------------------------------------------------- */

export const Fingerprint = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4a8 8 0 0 0-8 8v2" />
    <path d="M12 8a4 4 0 0 0-4 4v4" />
    <path d="M12 12v5" />
    <path d="M16 12a4 4 0 0 0-4-4" />
    <path d="M20 13v-1a8 8 0 0 0-3-6.2" />
    <path d="M8 20a11 11 0 0 0 1-3" />
    <path d="M15.5 19.5A9 9 0 0 0 16 16" />
  </Base>
);

export const Gauge = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 13l4-3" />
    <path d="M4 16a8 8 0 1 1 16 0" />
    <path d="M4 16h2M18 16h2M12 6V4" />
  </Base>
);

export const Scale = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v16M6 20h12" />
    <path d="M12 6l-6 2 6-2 6 2-6-2Z" />
    <path d="M6 8l-2.5 5a2.5 2.5 0 0 0 5 0Z" />
    <path d="M18 8l-2.5 5a2.5 2.5 0 0 0 5 0Z" />
  </Base>
);

export const ShieldCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z" />
    <path d="M9 12l2 2 4-4" />
  </Base>
);

export const Lock = (p: IconProps) => (
  <Base {...p}>
    <rect x="4.5" y="10" width="15" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 14v2.5" />
  </Base>
);

export const Key = (p: IconProps) => (
  <Base {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2L20 3M17 6l2 2M14 9l2 2" />
  </Base>
);

export const History = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
    <path d="M3.5 4v4h4" />
    <path d="M12 8v4l3 2" />
  </Base>
);

export const Receipt = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 3.5l1.5 1.2L8 3.5l1.5 1.2L11 3.5l1.5 1.2L14 3.5l1.5 1.2L17 3.5v17l-1.5-1.2-1.5 1.2-1.5-1.2-1.5 1.2-1.5-1.2L8 20.5l-1.5-1.2L5 20.5Z" />
    <path d="M8 8.5h6M8 12h6M8 15.5h3.5" />
  </Base>
);

/* ---- Report ---------------------------------------------------------- */

export const BarChart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 20v-6M12.5 20V9M17 20v-9" />
  </Base>
);

export const FileText = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h2" />
  </Base>
);

export const Presentation = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 4h18M4 4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4" />
    <path d="M12 14v4M9 21l3-3 3 3" />
    <path d="M8 10l2.5-2.5L13 10l3-4" />
  </Base>
);

export const Index = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h14v16H5z" />
    <path d="M5 4v16" />
    <path d="M9 8.5h6M9 12h6M9 15.5h4" />
  </Base>
);

/* ---- Act / trust / misc --------------------------------------------- */

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
    <path d="M14 10h4a2 2 0 0 1 2 2v9" />
    <path d="M3 21h18" />
    <path d="M7.5 8h3M7.5 12h3M7.5 16h3M17 14h.01M17 18h.01" />
  </Base>
);

export const Leaf = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 4C10 4 4 9 4 17c0 1 0 2 .5 3C8 13 13 10 18 9c-4 2-7 5-9 11" />
  </Base>
);

export const Layers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l9 5-9 5-9-5Z" />
    <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
  </Base>
);

export const Server = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="4" width="17" height="7" rx="2" />
    <rect x="3.5" y="13" width="17" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
  </Base>
);

export const Route = (p: IconProps) => (
  <Base {...p}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M6 8.5V13a4 4 0 0 0 4 4h5.5" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5c0 8.3 6.7 15 15 15v-3.5l-4-1.5-2 2a11 11 0 0 1-5-5l2-2L8.5 5Z" />
  </Base>
);

export const Quote = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 7c-2.5 1-4 3-4 6v4h5v-5H7c0-1.5.8-2.8 2-3.5ZM19 7c-2.5 1-4 3-4 6v4h5v-5h-3c0-1.5.8-2.8 2-3.5Z" />
  </Base>
);

export const Trash = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
    <path d="M10 11v6M14 11v6" />
  </Base>
);

export const FuelPump = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15" />
    <path d="M4 21h11" />
    <path d="M7.5 8.5h6" />
    <path d="M14 10h3l2.5 2.5V17a2 2 0 0 1-4 0v-2.5H14" />
  </Base>
);

export const ListChecks = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 6l1.5 1.5L8 4.5" />
    <path d="M3.5 13l1.5 1.5L8 11.5" />
    <path d="M3.5 20l1.5 1.5L8 18.5" />
    <path d="M12 6h9M12 13h9M12 20h9" />
  </Base>
);

export const BookText = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 0 5 21.5Z" />
    <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H20" />
    <path d="M9 7h7M9 10.5h7" />
  </Base>
);
