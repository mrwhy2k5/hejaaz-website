import { motion } from 'framer-motion'
import {
  Building2,
  Factory,
  Warehouse,
  Ship,
  Mountain,
  Zap,
  Users,
  ClipboardCheck,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import industriesData from '../data/industries.json'

const iconMap = {
  Building2,
  Factory,
  Warehouse,
  Ship,
  Mountain,
  Zap,
  Users,
  ClipboardCheck,
}

export default function Industries() {
  return (
    <Layout>
      <SeoHead title="Industries Served" description="Crane OEMs, EPCs, factories, ports, mining, power, safety auditors." path="/industries" />
      <PageHeader
        title="Industries Served"
        subtitle="Crane OEMs, EPCs, factories, ports, mining, power, and safety auditors. We serve clients across sectors."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="Who We Serve"
            subtitle="Industrial automation and crane safety solutions tailored to your industry."
            animate={false}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industriesData.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-hejaaz-surface p-8 bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-hejaaz-accent" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-bold text-hejaaz-dark">{ind.name}</h3>
                  <p className="mt-3 text-sm text-hejaaz-gray-light leading-relaxed">{ind.description}</p>
                </motion.div>
              )
            })}
          </div>
          <div className="mt-16">
            <CTAButtons />
          </div>
        </div>
      </section>
    </Layout>
  )
}
