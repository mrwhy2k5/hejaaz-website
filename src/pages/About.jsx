import { motion } from 'framer-motion'
import { Target, Eye, Shield, MapPin, Wrench, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'

const values = [
  {
    icon: Shield,
    title: 'Safety-First Philosophy',
    desc: 'We design and deliver systems that protect people and assets. Crane safety and automation are at the core of everything we do.',
  },
  {
    icon: Target,
    title: 'Engineering-Focused',
    desc: 'Our solutions are built on solid engineering — from load cells and sensors to PLCs and HMIs. We never compromise on quality.',
  },
  {
    icon: Wrench,
    title: 'After-Sales Strength',
    desc: 'Installation, calibration, and AMC across PAN-India. We stand behind our products with reliable, responsive support.',
  },
  {
    icon: MapPin,
    title: 'PAN-India Presence',
    desc: 'Wherever you are — factory, site, or port — we are equipped to serve you with installation and maintenance across all 28 states.',
  },
]

const timeline = [
  { year: 'Founded', title: 'Started Operations', desc: 'Began as a crane safety systems provider in Chennai' },
  { year: 'Expanded', title: 'Industrial Automation', desc: 'Added factory and process automation services' },
  { year: 'Certified', title: 'ISO 9001:2015', desc: 'Achieved quality management certification' },
  { year: 'Today', title: 'PAN-India Network', desc: 'Serving OEMs, EPCs, and factories across India' },
]

const highlights = [
  'ISO 9001:2015 certified quality management',
  'MSME registered — trusted by OEMs and EPCs',
  'Crane safety systems for all major crane types',
  'Factory and process automation solutions',
  'Industrial vision and safety system integration',
  'Proof of concept (POC) and custom projects',
]

export default function About() {
  return (
    <Layout>
      <SeoHead
        title="About Us"
        description="Hejaaz Technologies – Vision, mission, safety-first philosophy. PAN-India support and after-sales."
        path="/about"
      />
      <PageHeader
        label="About Us"
        title="Engineering Safety. Powering Industry."
        subtitle="Two decades of crane safety systems and industrial automation across India."
      />

      {/* Story Section */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="Built on Engineering Excellence"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 space-y-6 text-hejaaz-gray-light leading-relaxed"
              >
                <p className="text-lg">
                  Hejaaz Technologies is an industrial automation and crane safety company serving OEMs, EPCs, factories, and safety auditors across India.
                </p>
                <p>
                  We specialize in Safe Load Indicators (SLIs) for tower, EOT, gantry, crawler, telescopic, pick & carry cranes, forklifts, and tipper trucks — as well as factory automation, process automation, PC-based automation, industrial vision systems, and safety system integration.
                </p>
                <p>
                  Our engineering-led, safety-first approach ensures that every solution we deliver meets industry standards and your operational needs.
                </p>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="flex gap-6 p-6 rounded-2xl bg-hejaaz-surface border border-hejaaz-border"
                >
                  <span className="w-16 h-16 rounded-2xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0 text-sm font-bold text-hejaaz-accent">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-bold text-hejaaz-dark">{item.title}</h3>
                    <p className="mt-1 text-sm text-hejaaz-gray-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading
            label="Our Purpose"
            title="Vision & Mission"
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-hejaaz-accent/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-hejaaz-accent" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-bold text-hejaaz-dark">Vision</h3>
              <p className="mt-4 text-hejaaz-gray-light leading-relaxed">
                To be a trusted partner in industrial safety and automation, enabling our customers to operate reliably and comply with the highest standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-hejaaz-accent/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-hejaaz-accent" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-bold text-hejaaz-dark">Mission</h3>
              <p className="mt-4 text-hejaaz-gray-light leading-relaxed">
                To design, supply, and support best-in-class crane safety and automation solutions with strong after-sales service across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-6 rounded-2xl bg-hejaaz-surface border border-hejaaz-border"
              >
                <v.icon className="w-10 h-10 text-hejaaz-accent" aria-hidden />
                <h3 className="mt-5 font-bold text-hejaaz-dark">{v.title}</h3>
                <p className="mt-3 text-sm text-hejaaz-gray-light leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-hejaaz-dark text-hejaaz-white">
        <div className="container-content">
          <div className="max-w-narrow">
            <SectionHeading
              label="Why Us"
              title="Why Partner With Hejaaz"
              subtitle="Quality, compliance, and support you can rely on."
              animate={false}
            />
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, i) => (
                <li key={item} className="flex gap-4 p-4 rounded-xl bg-hejaaz-white/5">
                  <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent-light mt-0.5" aria-hidden />
                  <span className="text-hejaaz-gray-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
            <div className="mt-12">
              <CTAButtons variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
