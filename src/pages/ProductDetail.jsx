import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import productsData from '../data/products.json'
import productManuals from '../data/productManuals.json'
import ManualProductDetail from '../components/ManualProductDetail'
import SeoHead from '../components/SeoHead'

/**
 * PRODUCT DETAIL PAGE - V6 (THEME-AWARE INDUSTRIAL ARCHITECTURE)
 * - Full Dark/Light mode synchronization
 * - Dynamic color mapping for technical parameters
 */

export default function ProductDetail() {
  const { slug } = useParams()

  const manual = productManuals[slug]
  const product = productsData.find((p) => (p.slug || p.id) === slug)

  // Prioritize manual-style high-performance detail page
  if (manual) {
    return <ManualProductDetail manual={manual} slug={slug} />
  }

  // Fallback for systemic products without unique manuals
  if (product) {
    return (
      <Layout>
        <SeoHead title={product.name} description={product.tagline} />
        <div className="py-32 bg-[var(--bg-main)] min-h-screen">
          <div className="container-content">
            <Link to="/products" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-hejaaz-secondary hover:translate-x-[-4px] transition-transform mb-12">
              Back to Catalog
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 heading-reveal uppercase tracking-tighter">{product.name}</h1>
            <p className="text-xl text-[var(--text-muted)] font-bold uppercase tracking-tight max-w-2xl">{product.tagline || product.overview}</p>
          </div>
        </div>
      </Layout>
    )
  }

  // Not Found State
  return (
    <Layout>
      <div className="py-40 text-center bg-[var(--bg-main)] min-h-screen">
        <h1 className="text-4xl font-black heading-reveal mb-8">System Not Found</h1>
        <Link to="/products" className="btn-primary">
          Return to Systems Matrix
        </Link>
      </div>
    </Layout>
  )
}
