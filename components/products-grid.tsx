import { Leaf, Route, ArrowRight } from 'lucide-react'
import { products, type Product } from '@/lib/products'

const ICONS = { leaf: Leaf, route: Route } as const

function ProductCard({ product }: { product: Product }) {
  const Icon = ICONS[product.icon]
  const isLive = product.status === 'live'

  const inner = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition ${
        isLive
          ? 'border-subtle bg-white hover:-translate-y-1 hover:border-emerald hover:shadow-[0_24px_48px_-24px_rgba(5,150,105,0.4)]'
          : 'border-dashed border-subtle bg-canvas'
      }`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-[3px] ${
          isLive ? 'bg-gradient-to-r from-emerald to-indigo' : 'bg-subtle'
        }`}
      />
      <div className="mb-6 flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
            isLive ? 'bg-gradient-to-br from-emerald/10 to-indigo/10' : 'bg-white'
          }`}
        >
          <Icon
            className={`h-7 w-7 ${isLive ? 'text-emerald' : 'text-muted'}`}
            strokeWidth={2}
          />
        </div>
        {isLive ? (
          <span className="rounded-full bg-emerald/10 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-emerald">
            Available now
          </span>
        ) : (
          <span className="rounded-full bg-subtle px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-muted">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="text-[24px] font-extrabold tracking-tight text-navy">{product.name}</h3>
      <p className="mt-1 text-[14px] font-semibold uppercase tracking-wide text-emerald">
        {product.tagline}
      </p>
      <p className="mt-4 flex-1 text-[15px] text-muted">{product.description}</p>

      {isLive ? (
        <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-emerald">
          Explore {product.name}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.5} />
        </span>
      ) : (
        <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-muted">
          In development
        </span>
      )}
    </div>
  )

  // Live products link to their own app (proxied under the main site) — plain
  // anchor so navigation crosses cleanly into the separate Next.js app.
  return isLive && product.href ? (
    <a href={product.href} className="block h-full">
      {inner}
    </a>
  ) : (
    <div className="h-full cursor-default">{inner}</div>
  )
}

export function ProductsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  )
}
