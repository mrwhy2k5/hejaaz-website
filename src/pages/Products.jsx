import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CTAButtons from '../components/CTAButtons'
import productsData from '../data/products.json'

export default function Products() {
  return (
    <Layout>
      <SeoHead
        title="Products"
        description="Safe Load Indicators for tower, EOT, gantry, crawler, telescopic, pick & carry cranes, forklifts, and tipper trucks."
        path="/products"
      />
      <PageHeader
        label="Our Products"
        title="Safe Load Indicators"
        subtitle="Comprehensive crane safety solutions for every application. Each system designed for reliability, accuracy, and compliance."
      />

      {/* Products Grid */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <SectionHeading
            label="Product Range"
            title="Complete Safety Solutions"
            subtitle="From tower cranes to tipper trucks, we have the right Safe Load Indicator for your equipment."
            align="center"
            animate={false}
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Why Our Products"
                title="Engineering-Grade Quality"
                subtitle="All products come with detailed technical specifications, compliance documentation, and support for installation and calibration."
              />
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {[
                  'Microcontroller-based digital systems',
                  'High-accuracy load cells and sensors',
                  'Real-time monitoring and alerts',
                  'Data logging with Modbus/RS485',
                  'IP65+ rated for harsh environments',
                  'Factory Act and IS 14475 compliant',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-hejaaz-secondary mt-2.5 shrink-0" />
                    <span className="text-hejaaz-text-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-hejaaz-white rounded-xl border border-hejaaz-border p-7"
            >
              <h3 className="heading-sm">Need Technical Support?</h3>
              <p className="mt-4 text-hejaaz-text-light leading-relaxed">
                Our engineering team can help you select the right system for your application. Get a detailed technical quote with specifications tailored to your requirements.
              </p>
              <div className="mt-6">
                <CTAButtons />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
