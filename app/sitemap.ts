import type { MetadataRoute } from 'next'
import { siteOrigin, basePath as susmaticBasePath } from '@/lib/site'
import { articles } from '@/app/products/susmaticesg/resources/content'

/**
 * Single sitemap for the whole app (main site + the Susmatic ESG product
 * subtree) — one Next.js codebase, one domain, one sitemap at /sitemap.xml.
 * Anchors (e.g. /#about) aren't separate documents, so they're omitted;
 * only real routes are listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const mainSite: MetadataRoute.Sitemap = [
    { url: siteOrigin, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteOrigin}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const susmaticPages: MetadataRoute.Sitemap = [
    { url: `${siteOrigin}${susmaticBasePath}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteOrigin}${susmaticBasePath}/product`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteOrigin}${susmaticBasePath}/security`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteOrigin}${susmaticBasePath}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteOrigin}${susmaticBasePath}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteOrigin}${susmaticBasePath}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteOrigin}${susmaticBasePath}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ]

  const susmaticArticles: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteOrigin}${susmaticBasePath}/resources/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...mainSite, ...susmaticPages, ...susmaticArticles]
}
