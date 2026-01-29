import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import SystemLayoutDiagram from '../components/SystemLayoutDiagram'
import productsData from '../data/products.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = productsData.find((p) => (p.slug || p.id) === slug)

  if (!product) {
    return (
      <Layout>
        <SeoHead title="Product not found" />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="heading-md">Product not found</h1>
          <Link
            to="/products"
            className="mt-5 text-hejaaz-secondary font-semibold hover:underline inline-flex items-center gap-2"
          >
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

      {/* Hero Section */}
      <section className="bg-hejaaz-primary text-hejaaz-white py-16 sm:py-20 lg:py-24">
        <div className="container-content">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-hejaaz-text-muted hover:text-hejaaz-white font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary">{product.category}</span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-hejaaz-white leading-tight">{product.name}</h1>
              {product.tagline && (
                <p className="mt-5 text-lg text-hejaaz-text-muted leading-relaxed">
                  {product.tagline}
                </p>
              )}
              <div className="mt-8">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl overflow-hidden bg-hejaaz-white/5"
            >
              <img
                src={product.imagePlaceholder || '/images/products/placeholder.svg'}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/images/products/placeholder.svg'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <SectionHeading
                    title="Overview"
                    size="md"
                    animate={false}
                  />
                  <p className="mt-5 text-hejaaz-text-light leading-relaxed text-lg">
                    {product.overview}
                  </p>
                </div>

                <div className="pt-8 border-t border-hejaaz-border">
                  <SectionHeading
                    title="Working Principle"
                    size="md"
                    animate={false}
                  />
                  <p className="mt-5 text-hejaaz-text-light leading-relaxed">
                    {product.workingPrinciple}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sticky top-24"
              >
                <div className="bg-hejaaz-surface rounded-xl border border-hejaaz-border p-6">
                  <h3 className="heading-sm">System Components</h3>
                  <ul className="mt-5 space-y-3">
                    {product.systemComponents.map((c, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-hejaaz-secondary/10 flex items-center justify-center shrink-0 text-xs font-semibold text-hejaaz-secondary">
                          {i + 1}
                        </span>
                        <span className="text-hejaaz-text-light">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* System Layout Diagram for EOT and Gantry cranes */}
      {(product.id === 'sli-eot-crane' || product.id === 'sli-gantry-crane') && (
        <section className="section-padding bg-hejaaz-surface">
          <div className="container-content">
            <SystemLayoutDiagram productType={product.id === 'sli-gantry-crane' ? 'gantry' : 'eot'} />
          </div>
        </section>
      )}

      {/* Key Features */}
      <section className="section-padding bg-hejaaz-white border-t border-hejaaz-border">
        <div className="container-content">
          <SectionHeading
            label="Features"
            title="Key Safety Features"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.keyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-3.5 p-5 rounded-xl bg-hejaaz-surface border border-hejaaz-border"
              >
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-secondary mt-0.5" aria-hidden />
                <span className="text-hejaaz-text-light leading-relaxed">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            label="Specifications"
            title="Technical Details"
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 max-w-3xl mx-auto"
          >
            <div className="bg-hejaaz-white rounded-xl border border-hejaaz-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hejaaz-border">
                    <th className="px-5 py-3.5 text-left font-semibold text-hejaaz-primary bg-hejaaz-surface/50 text-sm">
                      Parameter
                    </th>
                    <th className="px-5 py-3.5 text-left font-semibold text-hejaaz-primary bg-hejaaz-surface/50 text-sm">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((row, i) => (
                    <tr
                      key={row.param}
                      className={`border-b border-hejaaz-border last:border-0 ${
                        i % 2 === 0 ? '' : 'bg-hejaaz-surface/30'
                      }`}
                    >
                      <td className="px-5 py-3.5 text-hejaaz-text-light text-sm">{row.param}</td>
                      <td className="px-5 py-3.5 text-hejaaz-primary font-medium text-sm">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications & Compliance */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label="Applications"
                title="Where It's Used"
                size="md"
                animate={false}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="px-3.5 py-2 rounded-lg bg-hejaaz-surface border border-hejaaz-border text-hejaaz-text-light text-sm font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SectionHeading
                label="Compliance"
                title="Standards & Certifications"
                size="md"
                animate={false}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {product.compliance.map((c) => (
                  <span
                    key={c}
                    className="px-3.5 py-2 rounded-lg bg-hejaaz-secondary/10 text-hejaaz-secondary text-sm font-semibold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hejaaz-primary text-hejaaz-white">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="heading-md text-hejaaz-white">
                Ready to get started with {product.name}?
              </h2>
              <p className="mt-4 text-hejaaz-text-muted leading-relaxed">
                Contact us for a detailed technical quote with specifications tailored to your requirements.
              </p>
            </div>
            <CTAButtons variant="dark" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
