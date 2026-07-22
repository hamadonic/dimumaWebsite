import Script from 'next/script'

// GA4 property for dimuma.com. Update here if the property ever changes.
const GA_MEASUREMENT_ID = 'G-0SKCFH1C1T'

/**
 * Google Analytics 4 (gtag.js). Rendered once in the root layout, so it loads
 * on every route — the main site, /products, and /products/susmaticesg alike.
 *
 * Uses next/script with `afterInteractive` (Next's recommended strategy for
 * analytics: it loads after the page is interactive, so it never blocks
 * first paint or hydration — see https://nextjs.org/docs/app/guides/scripts).
 *
 * Skipped outside production so local `npm run dev` traffic and Netlify
 * deploy previews never pollute real visitor data.
 */
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
