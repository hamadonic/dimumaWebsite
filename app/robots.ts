import type { MetadataRoute } from 'next'
import { siteOrigin } from '@/lib/site'

/** One robots.txt for the whole app — main site + the Susmatic ESG subtree. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/health'],
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  }
}
