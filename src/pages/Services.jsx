import { motion } from 'framer-motion'
import {
  Factory,
  Settings,
  Monitor,
  Camera,
  Shield,
  FlaskConical,
  Wrench,
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
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Settings
              return (
                <motion.article
                  key={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="card p-6 group hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-secondary/10 flex items-center justify-center group-hover:bg-hejaaz-secondary/15 transition-colors">
                    <Icon className="w-6 h-6 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-hejaaz-primary">
                    {svc.title}
                  </h2>
                  <p className="mt-3 text-hejaaz-text-light leading-relaxed text-sm">
                    {svc.value}
                  </p>

                  <div className="mt-5 pt-5 border-t border-hejaaz-border space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary mb-1.5">Problem Solved</h3>
                      <p className="text-sm text-hejaaz-text-light leading-relaxed">
                        {svc.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary mb-1.5">Our Approach</h3>
                      <p className="text-sm text-hejaaz-text-light leading-relaxed">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Support"
                title="PAN-India Service Network"
                subtitle="Installation, calibration, and Annual Maintenance Contracts across all 28 Indian states. We're where you need us."
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
              {[
                { label: 'Installation', desc: 'On-site system setup' },
                { label: 'Calibration', desc: 'Precision tuning' },
                { label: 'AMC', desc: 'Annual maintenance' },
                { label: 'Training', desc: 'Operator support' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-hejaaz-white border border-hejaaz-border"
                >
                  <p className="font-bold text-hejaaz-primary">{item.label}</p>
                  <p className="mt-1 text-sm text-hejaaz-text-light">{item.desc}</p>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary">Get Started</span>
              <h2 className="mt-3 heading-lg text-hejaaz-white">
                Need a custom solution?
              </h2>
              <p className="mt-5 text-hejaaz-text-muted text-lg leading-relaxed max-w-lg">
                Our engineering team can help you scope and implement the right automation solution for your specific requirements.
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
