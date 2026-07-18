import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Marketing photograph with a brand duotone treatment, so real photography
 * reads as intentional and cohesive rather than generic stock. The wrapper
 * carries a brand-gradient background, so if an image ever fails to load the
 * frame still looks deliberate.
 *
 * Uses next/image (remote hosts allow-listed in next.config.ts).
 */
export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  duotone = true,
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  duotone?: boolean;
  rounded?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-brand-gradient",
        rounded,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        className={cn(
          "object-cover",
          duotone && "opacity-90 [filter:saturate(0.55)_contrast(1.05)]",
        )}
      />
      {duotone && (
        <>
          {/* brand tint */}
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-brand-green/45 to-brand-blue/55 mix-blend-multiply"
          />
          {/* depth for any overlaid text */}
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent"
          />
        </>
      )}
      {/* hairline inner ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}
