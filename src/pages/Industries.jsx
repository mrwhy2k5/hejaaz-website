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
      <SeoHead
        title="Industries Served"
        description="Crane OEMs, EPCs, factories, ports, mining, power, safety auditors."
        path="/industries"
      />
      <PageHeader
        label="Industries"
        title="Who We Serve"
        subtitle="Industrial automation and crane safety solutions tailored for your sector."
      />

      {/* Industries Grid */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <SectionHeading
            label="Our Clients"
            title="Industries & Sectors"
            subtitle="From crane OEMs to safety auditors, we serve clients across the industrial spectrum."
            align="center"
            animate={false}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industriesData.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="card p-8 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-hejaaz-accent/10 flex items-center justify-center group-hover:bg-hejaaz-accent/15 transition-colors">
                    <Icon className="w-7 h-7 text-hejaaz-accent" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-hejaaz-dark">
                    {ind.name}
                  </h3>
                  <p className="mt-3 text-sm text-hejaaz-gray-light leading-relaxed">
                    {ind.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionHeading
                label="Our Value"
                title="Industry-Specific Expertise"
                subtitle="We understand the unique requirements of each sector. Our solutions are tailored to meet specific operational and compliance needs."
              />
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 space-y-4"
              >
                {[
                  'Custom solutions for each industry vertical',
                  'Compliance with sector-specific regulations',
                  'Understanding of operational environments',
                  'Industry-standard documentation and support',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-hejaaz-accent mt-2.5 shrink-0" />
                    <span className="text-hejaaz-gray-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-hejaaz-white rounded-2xl border border-hejaaz-border p-8 lg:p-10"
            >
              <h3 className="heading-sm">Work With Us</h3>
              <p className="mt-4 text-hejaaz-gray-light leading-relaxed">
                Whether you're an OEM, EPC, factory, or safety auditor, we have the expertise to support your crane safety and automation needs.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hejaaz-dark text-hejaaz-white">
        <div className="container-content">
          <div className="max-w-narrow">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="label text-hejaaz-accent-light">Get Started</span>
              <h2 className="mt-4 heading-lg text-hejaaz-white">
                Ready to discuss your requirements?
              </h2>
              <p className="mt-6 text-hejaaz-gray-muted text-lg leading-relaxed max-w-lg">
                Contact us for a consultation tailored to your industry and operational needs.
              </p>
              <div className="mt-10">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
