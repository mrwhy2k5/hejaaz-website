import { motion } from 'framer-motion'
import { Target, Eye, Shield, MapPin, Wrench, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'

const values = [
  { icon: Shield, title: 'Safety-first philosophy', desc: 'We design and deliver systems that protect people and assets. Crane safety and automation are at the core of everything we do.' },
  { icon: Target, title: 'Engineering-focused', desc: "Our solutions are built on solid engineering — from load cells and sensors to PLCs and HMIs. We don't compromise on quality." },
  { icon: Wrench, title: 'After-sales strength', desc: 'Installation, calibration, and AMC across PAN-India. We stand behind our products with reliable support.' },
  { icon: MapPin, title: 'PAN-India support', desc: "Wherever you are — factory, site, or port — we're equipped to serve you with installation and maintenance." },
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
      <SeoHead title="About Us" description="Hejaaz Technologies – Vision, mission, safety-first philosophy. PAN-India support and after-sales." path="/about" />
      <PageHeader
        title="About Us"
        subtitle="Engineering safety. Powering industry. We deliver crane safety systems and industrial automation across India."
      />

      {/* Who we are */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-narrow mx-auto">
          <SectionHeading title="Our Story" subtitle="Hejaaz Technologies is an industrial automation and crane safety company serving OEMs, EPCs, factories, and safety auditors." animate={false} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 space-y-6 text-hejaaz-gray-light leading-relaxed"
          >
            <p>
              We specialize in Safe Load Indicators (SLIs) for tower, EOT, gantry, crawler, telescopic, pick & carry cranes, forklifts, and tipper trucks — as well as factory automation, process automation, PC-based automation, industrial vision systems, and safety system integration.
            </p>
            <p>
              Our engineering-led, safety-first approach ensures that every solution we deliver meets industry standards and your operational needs. With PAN-India installation, calibration, and AMC support, we're committed to keeping your operations safe and efficient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission blocks */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <SectionHeading title="Vision & Mission" />
          <div className="mt-16 grid sm:grid-cols-2 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 bg-white rounded-xl border border-hejaaz-surface shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-hejaaz-accent" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-bold text-hejaaz-dark">Vision</h3>
                <p className="mt-3 text-hejaaz-gray-light leading-relaxed">
                  To be a trusted partner in industrial safety and automation, enabling our customers to operate reliably and comply with the highest standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 bg-white rounded-xl border border-hejaaz-surface shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-hejaaz-accent" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-bold text-hejaaz-dark">Mission</h3>
                <p className="mt-3 text-hejaaz-gray-light leading-relaxed">
                  To design, supply, and support best-in-class crane safety and automation solutions with strong after-sales service across India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading title="What We Stand For" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-xl border border-hejaaz-surface bg-hejaaz-surface/50 hover:shadow-card transition-shadow duration-300"
              >
                <v.icon className="w-10 h-10 text-hejaaz-accent" aria-hidden />
                <h3 className="mt-5 font-bold text-hejaaz-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-hejaaz-gray-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="section-padding bg-hejaaz-dark text-white">
        <div className="container-content max-w-narrow mx-auto">
          <SectionHeading title="Why Partner With Us" subtitle="Quality, compliance, and support you can rely on." />
          <ul className="mt-12 space-y-5">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="shrink-0 w-6 h-6 text-hejaaz-accent mt-0.5" aria-hidden />
                <span className="text-white/90 leading-relaxed">{item}</span>
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
