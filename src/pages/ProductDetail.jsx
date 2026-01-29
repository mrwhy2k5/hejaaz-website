import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2, ArrowLeft } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import ManualProductDetail from '../components/ManualProductDetail'
import productsData from '../data/products.json'
import productManuals from '../data/productManuals.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const manual = productManuals[slug]
  const product = productsData.find((p) => (p.slug || p.id) === slug)

  if (manual) {
    return <ManualProductDetail manual={manual} slug={slug} />
  }

  if (!product) {
    return (
      <Layout>
        <SeoHead title="Product not found" />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h1 className="heading-md">Product not found</h1>
          <Link to="/products" className="mt-6 text-hejaaz-accent font-semibold hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Products
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SeoHead
        title={product.name}
        description={product.tagline || (product.overview && product.overview.slice(0, 160))}
        path={`/products/${product.slug || product.id}`}
      />
      <PageHeader title={product.name} subtitle={product.tagline} />

      <section className="section-padding bg-white">
        <div className="container-content">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-hejaaz-gray-light hover:text-hejaaz-accent font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[4/3] rounded-xl overflow-hidden bg-hejaaz-surface"
              >
                <img
                  src={product.imagePlaceholder || '/images/products/placeholder.svg'}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/products/placeholder.svg'
                  }}
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <h2 className="heading-md mb-4">Product overview</h2>
                <p className="text-hejaaz-gray-light leading-relaxed">{product.overview}</p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="heading-md mb-4">System components</h2>
                <ul className="list-disc list-inside space-y-2 text-hejaaz-gray-light leading-relaxed">
                  {product.systemComponents.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="heading-md mb-4">Working principle</h2>
                <p className="text-hejaaz-gray-light leading-relaxed">{product.workingPrinciple}</p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="heading-md mb-4">Key safety features</h2>
                <ul className="space-y-3">
                  {product.keyFeatures.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                      <span className="text-hejaaz-gray-light leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-hejaaz-surface space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6">Technical specifications</h2>
              <div className="overflow-x-auto rounded-xl border border-hejaaz-surface">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-hejaaz-surface">
                      <th className="px-6 py-4 font-semibold text-hejaaz-dark">Parameter</th>
                      <th className="px-6 py-4 font-semibold text-hejaaz-dark">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((row, i) => (
                      <tr key={row.param} className={i % 2 ? 'bg-hejaaz-surface/50' : 'bg-white'}>
                        <td className="px-6 py-4 text-hejaaz-gray-light">{row.param}</td>
                        <td className="px-6 py-4 text-hejaaz-dark font-medium">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6">Applications</h2>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 rounded-lg bg-hejaaz-surface text-hejaaz-gray-light text-sm"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-6">Compliance & standards</h2>
              <ul className="flex flex-wrap gap-3">
                {product.compliance.map((c) => (
                  <li
                    key={c}
                    className="px-4 py-2 rounded-lg bg-hejaaz-accent/10 text-hejaaz-accent font-medium text-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <FileText size={18} aria-hidden />
                Get Technical Quote
              </Link>
            </motion.section>
          </div>
        </div>
      </section>
    </Layout>
  )
}
