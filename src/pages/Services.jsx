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
      <SeoHead title="Services" description="Factory automation, process automation, PC-based automation, vision systems, safety integration, POC, installation & AMC." path="/services" />
      <PageHeader
        title="Services"
        subtitle="Factory automation, process automation, vision systems, safety integration, POC, and installation, calibration & AMC across PAN-India."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="What We Offer"
            subtitle="Each service addresses a specific problem, uses a clear technical approach, and delivers measurable value."
            animate={false}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Settings
              return (
                <motion.article
                  key={svc.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-hejaaz-surface bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-hejaaz-accent" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-hejaaz-dark">{svc.title}</h2>
                  <p className="mt-3 text-sm text-hejaaz-gray-light leading-relaxed line-clamp-2">
                    {svc.value}
                  </p>
                  <div className="mt-6 pt-6 border-t border-hejaaz-surface space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold text-hejaaz-accent uppercase tracking-wider mb-1">Problem solved</h3>
                      <p className="text-sm text-hejaaz-gray-light leading-relaxed">{svc.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-hejaaz-accent uppercase tracking-wider mb-1">Technical approach</h3>
                      <p className="text-sm text-hejaaz-gray-light leading-relaxed">{svc.approach}</p>
                    </div>
                  </div>
                </motion.article>
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
