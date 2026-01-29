import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle, label }) {
  return (
    <section className="bg-hejaaz-primary text-hejaaz-white py-16 sm:py-20 lg:py-24 overflow-hidden relative">
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

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          {label && (
            <span className="inline-block text-hejaaz-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              {label}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-hejaaz-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-hejaaz-text-muted leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
