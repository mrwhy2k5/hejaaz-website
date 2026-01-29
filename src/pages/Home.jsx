import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Cog,
  Factory,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Award,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import industriesData from '../data/industries.json'

const stats = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'OEM Served', value: '50+' },
  { label: 'Systems Operational', value: '500+' },
  { label: 'PAN-India Support', value: 'Yes' },
]

const coreSolutions = [
  { icon: Shield, title: 'Crane Safety Systems', desc: 'Safe Load Indicators & overload protection for all crane types.' },
  { icon: Cog, title: 'Industrial Automation', desc: 'PLC-based factory & process automation, vision systems, and integration.' },
  { icon: Factory, title: 'PAN-India Support', desc: 'Installation, calibration, and AMC across India.' },
]

const whyChoose = [
  'ISO 9001:2015 certified quality management',
  'MSME registered — trusted by OEMs & EPCs',
  'Engineering-led, safety-first approach',
  'Strong after-sales and AMC support',
]

const certs = [
  { name: 'ISO 9001:2015', desc: 'Quality management systems' },
  { name: 'MSME', desc: 'Micro, Small & Medium Enterprises' },
]

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Home"
        description="Hejaaz Technologies – Engineering Safety. Powering Industry. Crane safety systems, Safe Load Indicators, and industrial automation for OEMs, EPCs, factories. PAN-India service."
        path="/"
      />

      {/* Hero */}
      <section className="relative bg-hejaaz-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hejaaz-dark via-hejaaz-dark to-hejaaz-gray/30" />
        <div className="relative container-content py-24 sm:py-30 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl text-white leading-tight">
              Engineering Safety.<br />Powering Industry.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Crane safety systems, Safe Load Indicators, and industrial automation for OEMs, EPCs, factories, and safety auditors. PAN-India service and support.
            </p>
            <div className="mt-12">
              <CTAButtons variant="dark" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-hejaaz-surface border-y border-hejaaz-surface">
        <div className="container-content py-12 sm:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-hejaaz-dark">{s.value}</p>
                <p className="mt-1 text-sm text-hejaaz-gray-light uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Hejaaz */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="About Hejaaz Technologies"
            subtitle="We design, supply, and support crane safety and automation solutions across India. From Safe Load Indicators for every crane type to factory and process automation, we help you operate safely and efficiently."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <CTAButtons />
          </motion.div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            title="Our Core Solutions"
            subtitle="Safety systems, automation, and nationwide support — all under one roof."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {coreSolutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-white border border-hejaaz-surface p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-hejaaz-accent/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-hejaaz-accent" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-bold text-hejaaz-dark">{item.title}</h3>
                <p className="mt-3 text-hejaaz-gray-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Systems for Cranes */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="Safety Systems for Cranes"
            subtitle="Safe Load Indicators (SLI) for tower, EOT, gantry, crawler, telescopic, pick & carry, forklift, and tipper trucks."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View all products <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            title="Industries Served"
            subtitle="Crane OEMs, EPCs, factories, ports, mining, power, and safety auditors."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industriesData.slice(0, 8).map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-white border border-hejaaz-surface p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <h3 className="font-bold text-hejaaz-dark">{ind.name}</h3>
                <p className="mt-2 text-sm text-hejaaz-gray-light line-clamp-2 leading-relaxed">{ind.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/industries" className="btn-secondary inline-flex items-center gap-2">
              Explore industries <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Quality, compliance, and after-sales you can rely on."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl"
          >
            {whyChoose.map((item, i) => (
              <div key={item} className="flex gap-4">
                <CheckCircle2 className="shrink-0 w-6 h-6 text-hejaaz-accent mt-0.5" aria-hidden />
                <span className="text-hejaaz-gray-light leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            title="Certifications"
            subtitle="ISO 9001:2015 and MSME registered. Industry compliance at the core."
          />
          <div className="mt-16 flex flex-wrap gap-8">
            {certs.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 px-8 py-5 bg-white rounded-xl border border-hejaaz-surface shadow-card"
              >
                <Award className="w-10 h-10 text-hejaaz-accent shrink-0" aria-hidden />
                <div>
                  <h3 className="font-bold text-hejaaz-dark">{c.name}</h3>
                  <p className="text-sm text-hejaaz-gray-light mt-0.5">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/certifications" className="text-hejaaz-accent font-semibold hover:underline inline-flex items-center gap-2">
              Certifications & compliance <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="section-padding bg-hejaaz-dark text-white">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="heading-md text-white">PAN-India Service Support</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Installation, calibration, and Annual Maintenance Contracts (AMC) across India. We're where you need us.
              </p>
              <div className="mt-6 flex items-center gap-3 text-hejaaz-accent-light">
                <MapPin className="w-5 h-5 shrink-0" aria-hidden />
                <span className="text-sm">192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012</span>
              </div>
            </div>
            <CTAButtons variant="dark" className="shrink-0" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
