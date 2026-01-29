import { motion } from 'framer-motion'
import { Award, Shield, FileCheck, CheckCircle2 } from 'lucide-react'
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
      <SeoHead
        title="Certifications & Compliance"
        description="ISO 9001:2015, MSME. Industry compliance for crane safety and automation."
        path="/certifications"
      />
      <PageHeader
        label="Certifications"
        title="Quality & Compliance"
        subtitle="ISO 9001:2015 certified. MSME registered. Industry compliance at the core of what we do."
      />

      {/* Certifications Section */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <SectionHeading
            label="Our Credentials"
            title="Certifications"
            subtitle="Quality and compliance credentials you can trust."
            align="center"
            animate={false}
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certs.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-7"
              >
                <div className="w-14 h-14 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center">
                  <c.icon className="w-7 h-7 text-hejaaz-secondary" aria-hidden />
                </div>
                <h2 className="mt-5 text-xl font-bold text-hejaaz-primary">{c.name}</h2>
                <p className="mt-1 text-hejaaz-secondary font-medium text-sm">{c.desc}</p>
                <p className="mt-5 text-hejaaz-text-light leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Focus */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Standards"
                title="Industry Compliance Focus"
                subtitle="Our products and services are designed to meet industry regulations and client specifications."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {complianceFocus.map((item) => (
                <div
                  key={item}
                  className="flex gap-3.5 p-4 rounded-xl bg-hejaaz-white border border-hejaaz-border"
                >
                  <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-secondary mt-0.5" aria-hidden />
                  <span className="text-hejaaz-text-light leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hejaaz-primary text-hejaaz-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-hejaaz-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-hejaaz-secondary" aria-hidden />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary">Trusted Partner</span>
                  <h2 className="text-lg font-bold text-hejaaz-white">Compliance Support</h2>
                </div>
              </div>
              <p className="text-hejaaz-text-muted text-lg leading-relaxed max-w-lg">
                Need help with compliance documentation or safety audits? Our team can assist with documentation, calibration certificates, and technical support.
              </p>
              <div className="mt-8">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
