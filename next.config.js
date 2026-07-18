/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// Content-Security-Policy for the site. Directives that never interfere with
// Turbopack HMR are always enforced; the stricter source allowlists are
// production-only so the dev server's eval + HMR keep working.
const cspDirectives = [
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
]
if (isProd) {
  cspDirectives.unshift(
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    // Susmatic marketing pages use next/image with Unsplash + Picsum sources.
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
  )
}

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Content-Security-Policy', value: cspDirectives.join('; ') },
]
if (isProd) {
  securityHeaders.push({ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' })
}

const nextConfig = {
  reactStrictMode: true,

  // Susmatic's marketing imagery is served from these hosts via next/image.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
