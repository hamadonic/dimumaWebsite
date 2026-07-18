import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dimuma — A sustainability software company',
  description:
    'Dimuma is a Bahrain-based sustainability software company. We build a SaaS platform of focused products that help organizations measure, manage, and improve their sustainability performance.',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    title: 'Dimuma — A sustainability software company',
    description: 'A SaaS platform of focused sustainability products.',
    type: 'website',
    url: 'https://dimuma.com',
    siteName: 'Dimuma',
  },
  twitter: {
    card: 'summary',
    title: 'Dimuma',
    description: 'A SaaS platform of focused sustainability products.',
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
