import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
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
            className="mt-6 text-hejaaz-accent font-semibold hover:underline inline-flex items-center gap-2"
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
      <section className="bg-hejaaz-dark text-hejaaz-white py-20 sm:py-24 lg:py-30">
        <div className="container-content">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-hejaaz-gray-muted hover:text-hejaaz-white font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label text-hejaaz-accent-light">{product.category}</span>
              <h1 className="mt-4 heading-xl text-hejaaz-white">{product.name}</h1>
              {product.tagline && (
                <p className="mt-6 text-lg text-hejaaz-gray-muted leading-relaxed">
                  {product.tagline}
                </p>
              )}
              <div className="mt-10">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden bg-hejaaz-white/5"
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <SectionHeading
                    title="Overview"
                    size="md"
                    animate={false}
                  />
                  <p className="mt-6 text-hejaaz-gray-light leading-relaxed text-lg">
                    {product.overview}
                  </p>
                </div>

                <div className="pt-8 border-t border-hejaaz-border">
                  <SectionHeading
                    title="Working Principle"
                    size="md"
                    animate={false}
                  />
                  <p className="mt-6 text-hejaaz-gray-light leading-relaxed">
                    {product.workingPrinciple}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sticky top-24"
              >
                <div className="bg-hejaaz-surface rounded-2xl border border-hejaaz-border p-8">
                  <h3 className="heading-sm">System Components</h3>
                  <ul className="mt-6 space-y-4">
                    {product.systemComponents.map((c, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-6 h-6 rounded-full bg-hejaaz-accent/10 flex items-center justify-center shrink-0 text-xs font-semibold text-hejaaz-accent">
                          {i + 1}
                        </span>
                        <span className="text-hejaaz-gray-light">{c}</span>
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
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-6 rounded-2xl bg-hejaaz-surface border border-hejaaz-border"
              >
                <CheckCircle2 className="shrink-0 w-6 h-6 text-hejaaz-accent mt-0.5" aria-hidden />
                <span className="text-hejaaz-gray-light leading-relaxed">{f}</span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-hejaaz-white rounded-2xl border border-hejaaz-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hejaaz-border">
                    <th className="px-6 py-4 text-left font-semibold text-hejaaz-dark bg-hejaaz-surface/50">
                      Parameter
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-hejaaz-dark bg-hejaaz-surface/50">
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
                      <td className="px-6 py-4 text-hejaaz-gray-light">{row.param}</td>
                      <td className="px-6 py-4 text-hejaaz-dark font-medium">{row.value}</td>
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
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label="Applications"
                title="Where It's Used"
                size="md"
                animate={false}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2.5 rounded-xl bg-hejaaz-surface border border-hejaaz-border text-hejaaz-gray-light text-sm font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
              <div className="mt-8 flex flex-wrap gap-3">
                {product.compliance.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2.5 rounded-xl bg-hejaaz-accent/10 text-hejaaz-accent text-sm font-semibold"
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
      <section className="section-padding bg-hejaaz-dark text-hejaaz-white">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-lg">
              <h2 className="heading-md text-hejaaz-white">
                Ready to get started with {product.name}?
              </h2>
              <p className="mt-4 text-hejaaz-gray-muted leading-relaxed">
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
