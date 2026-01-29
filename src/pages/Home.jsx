import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Cog,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Award,
  Factory,
  Ship,
  Zap,
  Building2,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const stats = [
  { label: 'Years Experience', value: '20+' },
  { label: 'OEMs Served', value: '50+' },
  { label: 'Systems Deployed', value: '500+' },
  { label: 'States Covered', value: '28' },
]

const coreSolutions = [
  {
    icon: Shield,
    title: 'Crane Safety Systems',
    desc: 'Safe Load Indicators and overload protection for EOT, tower, gantry, and mobile cranes.',
  },
  {
    icon: Cog,
    title: 'Industrial Automation',
    desc: 'PLC-based factory and process automation, vision systems, and system integration.',
  },
  {
    icon: Wrench,
    title: 'PAN-India Service',
    desc: 'Installation, calibration, and Annual Maintenance Contracts across all Indian states.',
  },
]

const industries = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: Building2, name: 'Construction' },
  { icon: Ship, name: 'Ports & Logistics' },
  { icon: Zap, name: 'Power & Energy' },
]

const whyChoose = [
  { title: 'ISO 9001:2015 Certified', desc: 'Quality management systems' },
  { title: 'MSME Registered', desc: 'Trusted by OEMs and EPCs' },
  { title: 'Engineering-First', desc: 'Safety-focused approach' },
  { title: 'Strong After-Sales', desc: 'Dedicated AMC support' },
]

export default function Home() {
  return (
    <Layout>
      <SeoHead
        title="Home"
        description="Hejaaz Technologies – Engineering Safety. Powering Industry. Crane safety systems, Safe Load Indicators, and industrial automation for OEMs, EPCs, factories. PAN-India service."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative bg-hejaaz-primary text-hejaaz-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-content relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-hejaaz-secondary text-sm font-semibold uppercase tracking-wider mb-5">
                Industrial Safety & Automation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-hejaaz-white leading-[1.1]">
                Engineering Safety.
                <br />
                Powering Industry.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-hejaaz-text-muted leading-relaxed max-w-xl">
                Crane safety systems and industrial automation for OEMs, EPCs, and factories. Trusted across India for over two decades.
              </p>
              <div className="mt-8">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-hejaaz-white border-b border-hejaaz-border">
        <div className="container-content py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-hejaaz-primary tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-hejaaz-text-light font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="About Us"
                title="Two Decades of Industrial Excellence"
                subtitle="We design, supply, and support crane safety and automation solutions. From Safe Load Indicators for every crane type to factory automation, we help you operate safely and efficiently."
              />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <CTAButtons />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {industries.map((ind, i) => (
                <div
                  key={ind.name}
                  className={`p-5 rounded-xl bg-hejaaz-surface border border-hejaaz-border ${
                    i === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <ind.icon className="w-7 h-7 text-hejaaz-secondary" aria-hidden />
                  <p className="mt-3 font-semibold text-hejaaz-primary">{ind.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            label="What We Do"
            title="Our Core Solutions"
            subtitle="Safety systems, automation, and nationwide support — all under one roof."
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSolutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-hejaaz-secondary" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-hejaaz-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-hejaaz-text-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <SectionHeading
              label="Products"
              title="Safe Load Indicators"
              subtitle="For tower, EOT, gantry, crawler, telescopic, pick & carry cranes, forklifts, and tipper trucks."
              animate={false}
            />
            <Link
              to="/products"
              className="btn-ghost shrink-0"
            >
              View all products
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            label="Why Us"
            title="Why Partner With Hejaaz"
            subtitle="Quality, compliance, and after-sales you can rely on."
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex gap-3.5 p-5 rounded-xl bg-hejaaz-white border border-hejaaz-border"
              >
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-secondary mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-semibold text-hejaaz-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-hejaaz-text-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="section-padding-sm bg-hejaaz-white border-y border-hejaaz-border">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-hejaaz-secondary" aria-hidden />
              </div>
              <div>
                <h2 className="heading-sm">Certifications</h2>
                <p className="mt-1 text-hejaaz-text-light">
                  ISO 9001:2015 and MSME registered
                </p>
              </div>
            </div>
            <Link
              to="/certifications"
              className="btn-outline shrink-0"
            >
              View certifications
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-hejaaz-primary text-hejaaz-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block text-hejaaz-secondary text-sm font-semibold uppercase tracking-wider mb-5">
                Get Started
              </span>
              <h2 className="heading-lg text-hejaaz-white">
                Ready to enhance your operational safety?
              </h2>
              <p className="mt-5 text-hejaaz-text-muted text-lg leading-relaxed max-w-lg">
                Contact us for a technical consultation. We serve clients across all 28 Indian states with installation, calibration, and AMC support.
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
