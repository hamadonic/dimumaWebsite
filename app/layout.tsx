import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dimuma — Empowering Sustainable Excellence',
  description:
    'Dimuma is a Bahrain-based sustainability ESG solution provider. Collect, report, and analyze your ESG data on one intuitive platform for comprehensive sustainability management.',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    title: 'Dimuma — Empowering Sustainable Excellence',
    description: 'Collect, report, and analyze your ESG data.',
    type: 'website',
    url: 'https://dimuma.com',
    siteName: 'Dimuma',
  },
  twitter: {
    card: 'summary',
    title: 'Dimuma',
    description: 'Collect, report, and analyze your ESG data.',
  },
  themeColor: '#a4e5d9',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
