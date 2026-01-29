import { motion } from 'framer-motion'
import {
  Factory,
  Settings,
  Monitor,
  Camera,
  Shield,
  FlaskConical,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CTAButtons from '../components/CTAButtons'
import servicesData from '../data/services.json'

const iconMap = {
  Factory,
  Settings,
  Monitor,
  Camera,
  Shield,
  FlaskConical,
  Wrench,
}

export default function Services() {
  return (
    <Layout>
      <SeoHead
        title="Services"
        description="Factory automation, process automation, PC-based automation, vision systems, safety integration, POC, installation & AMC."
        path="/services"
      />
      <PageHeader
        label="Our Services"
        title="Automation & Support"
        subtitle="From factory automation to nationwide AMC support. Technical expertise you can rely on."
      />

      {/* Services Grid */}
      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <SectionHeading
            label="What We Offer"
            title="Engineering Services"
            subtitle="Each service addresses a specific problem with a clear technical approach and measurable value."
            align="center"
            animate={false}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Settings
              return (
                <motion.article
                  key={svc.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="card p-8 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-hejaaz-accent/10 flex items-center justify-center group-hover:bg-hejaaz-accent/15 transition-colors">
                    <Icon className="w-7 h-7 text-hejaaz-accent" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-hejaaz-dark">
                    {svc.title}
                  </h2>
                  <p className="mt-3 text-hejaaz-gray-light leading-relaxed">
                    {svc.value}
                  </p>

                  <div className="mt-6 pt-6 border-t border-hejaaz-border space-y-5">
                    <div>
                      <h3 className="label mb-2">Problem Solved</h3>
                      <p className="text-sm text-hejaaz-gray-light leading-relaxed">
                        {svc.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="label mb-2">Our Approach</h3>
                      <p className="text-sm text-hejaaz-gray-light leading-relaxed">
                        {svc.approach}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-hejaaz-surface">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionHeading
                label="Support"
                title="PAN-India Service Network"
                subtitle="Installation, calibration, and Annual Maintenance Contracts across all 28 Indian states. We're where you need us."
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <CTAButtons />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Installation', desc: 'On-site system setup' },
                { label: 'Calibration', desc: 'Precision tuning' },
                { label: 'AMC', desc: 'Annual maintenance' },
                { label: 'Training', desc: 'Operator support' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-hejaaz-white border border-hejaaz-border"
                >
                  <p className="font-bold text-hejaaz-dark">{item.label}</p>
                  <p className="mt-1 text-sm text-hejaaz-gray-light">{item.desc}</p>
                </div>
              ))}
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
                Need a custom solution?
              </h2>
              <p className="mt-6 text-hejaaz-gray-muted text-lg leading-relaxed max-w-lg">
                Our engineering team can help you scope and implement the right automation solution for your specific requirements.
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
