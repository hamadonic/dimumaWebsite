import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { site, siteUrl } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Susmatic ESG — Prove every ESG number you report',
    template: '%s · Susmatic ESG',
  },
  description:
    'Automated ESG reporting for enterprises: collect ESG data, prove it against its source, and generate a full sustainability report with a GRI & CBB index.',
  applicationName: 'Susmatic ESG',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    siteName: 'Susmatic ESG',
    url: siteUrl,
    title: 'Susmatic ESG — Prove every ESG number you report',
    description:
      'Collect ESG data, prove it against its source, and report it — built for enterprises.',
  },
}

export const viewport: Viewport = { themeColor: '#f7f9fb' }

// Structured data for search engines — factual fields only.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: `${site.name} — ${site.parentPlatform}`, url: siteUrl },
    {
      '@type': 'Organization',
      name: site.name,
      url: siteUrl,
      slogan: site.tagline,
      email: site.email,
      parentOrganization: { '@type': 'Organization', name: site.parentPlatform },
    },
    {
      '@type': 'SoftwareApplication',
      name: site.name,
      url: siteUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'ESG data collection, evidence and reporting for enterprises — collect ESG data, prove it against its source, and report against GRI, ISSB/IFRS S1 & S2 and CBB guidelines.',
    },
  ],
}

/**
 * Susmatic product shell — a self-contained subtree under /products/susmaticesg.
 * It carries its own Tailwind v4 tokens (scoped globals) and fonts. Light
 * theme by default (2026 brand refresh) via the `:root` tokens in
 * globals.css; `bg-background` on the wrapper picks those up without
 * touching the main site's theme.
 */
export default function SusmaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="susmatic-root"
      className={`${inter.variable} ${sora.variable} flex min-h-dvh flex-col bg-background text-foreground`}
      style={{ colorScheme: 'light' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-md focus:outline-2 focus:outline-ring"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
