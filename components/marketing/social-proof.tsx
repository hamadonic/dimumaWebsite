/**
 * Social proof — INTENTIONALLY NOT RENDERED.
 *
 * Susmatic ESG has no public customers, testimonials, logos, case studies or
 * certification badges we can show truthfully yet. Fabricated proof loses a
 * bank on the first click, so this component ships commented out.
 *
 * TODO: real logos only. When permission-cleared customer logos exist, drop
 * them into `/public/logos`, populate `logos` below, and render <SocialProof />
 * from the home page. Do not use placeholder or illustrative brand marks.
 */

// import Image from "next/image";
// import { Container, Section } from "@/components/ui/layout";
//
// const logos: { src: string; alt: string; width: number; height: number }[] = [
//   // { src: "/logos/example.svg", alt: "Example Bank", width: 140, height: 40 },
// ];
//
// export function SocialProof() {
//   if (logos.length === 0) return null;
//   return (
//     <Section className="py-12">
//       <Container>
//         <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-muted">
//           Trusted by sustainability teams across the GCC
//         </p>
//         <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-80">
//           {logos.map((logo) => (
//             <li key={logo.src}>
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.height}
//                 className="h-8 w-auto"
//               />
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </Section>
//   );
// }

export {};
