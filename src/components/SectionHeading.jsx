import { motion } from 'framer-motion'

/**
 * Reusable section title + optional subtitle.
 * Industrial style: bold headings, safety teal accent, generous spacing.
 */
export default function SectionHeading({
  title,
  subtitle,
  className = '',
  animate = true,
  centered = false,
  accent = true
}) {
  const content = (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {/* Accent indicator */}
      {accent && (
        <div className={`flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}`}>
          <div className="w-8 h-0.5 rounded-full bg-hejaaz-secondary" />
          <div className="w-1.5 h-0.5 rounded-full bg-hejaaz-secondary/50" />
        </div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-3xl lg:text-4xl font-black tracking-tight transition-colors"
        style={{ color: 'var(--text-main)' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className={`mt-2 text-[var(--text-muted)] text-sm leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-xl'} transition-colors`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )

  return content;
}
