import { motion } from 'framer-motion'
import { Award, Shield, FileCheck } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'

const certs = [
  {
    id: 'iso',
    name: 'ISO 9001:2015',
    desc: 'Quality Management Systems',
    detail: 'Hejaaz Technologies is certified for ISO 9001:2015, demonstrating our commitment to consistent quality in design, supply, and support of crane safety and automation solutions.',
    icon: Award,
  },
  {
    id: 'msme',
    name: 'MSME Registration',
    desc: 'Micro, Small & Medium Enterprises',
    detail: 'We are MSME registered, supporting our credibility with OEMs, EPCs, and government tenders. We align with national initiatives for small and medium enterprises.',
    icon: FileCheck,
  },
]

const complianceFocus = [
  'Factory Act requirements for cranes and lifting equipment',
  'IS 14475 and related standards for Safe Load Indicators',
  'ISO 4301 for cranes and lifting equipment',
  'Client-specific and EPC project specifications',
  'Safety audits and documentation support',
]

export default function Certifications() {
  return (
    <Layout>
      <SeoHead title="Certifications & Compliance" description="ISO 9001:2015, MSME. Industry compliance for crane safety and automation." path="/certifications" />
      <PageHeader
        title="Certifications & Compliance"
        subtitle="ISO 9001:2015 certified. MSME registered. Industry compliance at the core of what we do."
      />

      <section className="section-padding bg-white">
        <div className="container-content max-w-narrow mx-auto">
          <SectionHeading
            title="Our Certifications"
            subtitle="Quality and compliance you can trust."
            animate={false}
          />
          <div className="mt-16 space-y-8">
            {certs.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-xl border border-hejaaz-surface bg-hejaaz-surface/30 shadow-card"
              >
                <div className="shrink-0 w-16 h-16 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center">
                  <c.icon className="w-8 h-8 text-hejaaz-accent" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-hejaaz-dark">{c.name}</h2>
                  <p className="text-sm text-hejaaz-accent font-medium mt-1">{c.desc}</p>
                  <p className="mt-4 text-hejaaz-gray-light leading-relaxed">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-hejaaz-dark text-white">
        <div className="container-content max-w-narrow mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-hejaaz-accent-light" aria-hidden />
            </div>
            <h2 className="heading-md text-white">Industry compliance focus</h2>
          </div>
          <ul className="space-y-4">
            {complianceFocus.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-3 text-white/90 leading-relaxed"
              >
                <span className="text-hejaaz-accent-light shrink-0">•</span> {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-14">
            <CTAButtons variant="dark" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
