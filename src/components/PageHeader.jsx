import { motion } from 'framer-motion'

/**
 * Page hero: large bold title + optional subtitle.
 * Klug Avalon style: minimal, engineering-focused, strong typography.
 */
export default function PageHeader({ title, subtitle, label }) {
  return (
    <section className="bg-hejaaz-dark text-hejaaz-white py-24 sm:py-30 lg:py-34 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-narrow"
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block text-hejaaz-accent-light text-sm font-semibold uppercase tracking-wider mb-6"
            >
              {label}
            </motion.span>
          )}
          <h1 className="heading-xl text-hejaaz-white">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-hejaaz-gray-muted text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
