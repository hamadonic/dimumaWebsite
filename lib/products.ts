export type Product = {
  slug: string
  name: string
  full: string
  tagline: string
  description: string
  href?: string
  status: 'live' | 'coming-soon'
  icon: 'leaf' | 'route'
}

// Each product lives under /products/<slug>. Live products link out to their own
// app (proxied under the main site); coming-soon products render a disabled box.
export const products: Product[] = [
  {
    slug: 'susmatic',
    name: 'Susmatic',
    full: 'Susmatic ESG',
    tagline: 'Simplify Sustainability',
    description:
      'Bring sustainability, HSE, finance, and operations into one workflow. Collect ESG data, prove every figure back to its source, and report against GRI, ISSB / IFRS S1 & S2, and CBB.',
    href: '/products/susmatic',
    status: 'live',
    icon: 'leaf',
  },
  {
    slug: 'masar',
    name: 'Project Masar',
    full: 'Project Masar',
    tagline: 'Coming soon',
    description:
      'The next product on the Dimuma platform — charting a new path for sustainability teams. Details coming soon.',
    status: 'coming-soon',
    icon: 'route',
  },
]
