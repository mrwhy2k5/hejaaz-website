import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Download,
  FileText,
  MessageCircle,
  CheckCircle2,
  Wifi,
  Settings,
} from 'lucide-react'
import Layout from './Layout'
import SeoHead from './SeoHead'

const SAFETY_ICONS = {
  overload: '/images/products/safety-overload.svg',
  'anti-tilt': '/images/products/safety-anti-tilt.svg',
  'rope-slack': '/images/products/safety-rope-slack.svg',
  anemometer: '/images/products/safety-anemometer.svg',
  error: '/images/products/safety-error.svg',
}

export default function ManualProductDetail({ manual, slug }) {
  const img = (path) => {
    const fallback = '/images/products/placeholder.svg'
    return (
      <img
        src={path}
        alt=""
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = fallback
        }}
      />
    )
  }

  return (
    <Layout>
      <SeoHead
        title={manual.name}
        description={manual.tagline || (manual.overview && manual.overview.slice(0, 160))}
        path={`/products/${slug}`}
      />

      <section className="section-padding-sm bg-white">
        <div className="container-content">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-hejaaz-gray-light hover:text-hejaaz-accent font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden /> Back to Products
          </Link>

          {/* Hero */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-hejaaz-surface border border-hejaaz-surface">
                {img(manual.heroImage || manual.imagePlaceholder)}
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="heading-lg">{manual.name}</h1>
              {manual.tagline && (
                <p className="mt-4 text-lg text-hejaaz-gray-light leading-relaxed max-w-xl">
                  {manual.tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-14 lg:py-18 bg-hejaaz-surface">
        <div className="container-content max-w-3xl">
          <h2 className="heading-md mb-6">Product overview</h2>
          <p className="text-hejaaz-gray-light leading-relaxed">{manual.overview}</p>
        </div>
      </section>

      {/* System Layout */}
      <section className="section-padding-sm bg-[#f5f6f8]">
        <div className="container-content max-w-4xl">
          <h2 className="heading-md mb-10 text-center md:text-left">
            EOT & Gantry Crane Safe Load Indicator – System Layout
          </h2>
          <div className="rounded-2xl border border-[#e2e5ea] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <div className="flex min-h-[200px] items-center justify-center bg-[#f8f9fb] rounded-xl border border-[#e8eaef] py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
              <img
                src={manual.systemLayout.image}
                alt="EOT and Gantry crane safe load indicator system layout showing main hook, auxiliary hook, load pin, tensiometer, 4-inch display, and ATP/Modbus modules"
                className="max-w-full h-auto max-h-[320px] sm:max-h-[360px] lg:max-h-[400px] w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/images/products/placeholder.svg'
                }}
              />
            </div>
            <ul className="mt-10 space-y-4 sm:space-y-5" role="list">
              <li className="flex gap-3 text-hejaaz-gray-light leading-relaxed">
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span>Main Hook & Auxiliary Hook Load Monitoring</span>
              </li>
              <li className="flex gap-3 text-hejaaz-gray-light leading-relaxed">
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span>Load Pin / Tensiometer Based Measurement</span>
              </li>
              <li className="flex gap-3 text-hejaaz-gray-light leading-relaxed">
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span>4&quot; Digital Display with Live Load & Capacity</span>
              </li>
              <li className="flex gap-3 text-hejaaz-gray-light leading-relaxed">
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span>ATP / Modbus Support for Automation</span>
              </li>
              <li className="flex gap-3 text-hejaaz-gray-light leading-relaxed">
                <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span>Overload, Anti-Tilt & Safety Interlocks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-14 lg:py-18 bg-hejaaz-surface">
        <div className="container-content">
          <h2 className="heading-md mb-10">Key features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manual.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex gap-4 p-5 rounded-xl bg-white border border-hejaaz-surface"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-hejaaz-accent/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                </div>
                <p className="text-hejaaz-gray-light leading-relaxed text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Parameters */}
      <section className="section-padding-sm bg-white">
        <div className="container-content">
          <h2 className="heading-md mb-10">Safety parameters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manual.safetyParameters.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 p-6 rounded-xl border border-hejaaz-surface bg-hejaaz-surface/30"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-hejaaz-surface flex items-center justify-center">
                  <img
                    src={SAFETY_ICONS[s.icon] || SAFETY_ICONS.error}
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-hejaaz-dark">{s.title}</h3>
                  <p className="mt-2 text-sm text-hejaaz-gray-light leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Calibration */}
      <section className="py-14 lg:py-18 bg-hejaaz-surface">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="aspect-video max-w-sm rounded-xl overflow-hidden bg-white border border-hejaaz-surface flex items-center justify-center">
                {img('/images/products/display-4inch-mockup.svg')}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6 text-hejaaz-accent" aria-hidden />
              </div>
              <h2 className="heading-md mb-4">{manual.smartCalibration.title}</h2>
              <p className="text-hejaaz-gray-light leading-relaxed mb-6">
                {manual.smartCalibration.description}
              </p>
              <ul className="space-y-3">
                {manual.smartCalibration.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                    <span className="text-hejaaz-gray-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Applications + Compliance */}
      <section className="section-padding-sm bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="heading-md mb-6">Technical specifications</h2>
              <div className="rounded-xl border border-hejaaz-surface overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {manual.specs.map((row) => (
                      <tr key={row.param} className="border-b border-hejaaz-surface last:border-0">
                        <td className="px-4 py-3 text-sm text-hejaaz-gray-light">{row.param}</td>
                        <td className="px-4 py-3 text-sm font-medium text-hejaaz-dark">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-6">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {manual.applications.map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1.5 rounded-lg bg-hejaaz-surface text-hejaaz-gray-light text-sm"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-6">Compliance</h2>
              <ul className="flex flex-wrap gap-2">
                {manual.compliance.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1.5 rounded-lg bg-hejaaz-accent/10 text-hejaaz-accent font-medium text-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-hejaaz-dark text-white">
        <div className="container-content">
          <h2 className="heading-md text-white mb-8">Get started</h2>
          <div className="flex flex-wrap gap-4">
            {manual.manualPdfUrl && (
              <a
                href={manual.manualPdfUrl}
                download
                className="btn-outline-light inline-flex items-center gap-2"
              >
                <Download size={18} aria-hidden />
                Download product manual (PDF)
              </a>
            )}
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <FileText size={18} aria-hidden />
              Request quote
            </Link>
            <a href="tel:+919361227290" className="btn-outline-light inline-flex items-center gap-2">
              <MessageCircle size={18} aria-hidden />
              Contact technical team
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
