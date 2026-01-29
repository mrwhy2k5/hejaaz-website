import { motion } from 'framer-motion'

/**
 * Reusable section title + optional subtitle.
 * Klug Avalon style: large bold headings, generous spacing.
 */
export default function SectionHeading({ title, subtitle, className = '', animate = true }) {
  const content = (
    <div className={className}>
      <h2 className="heading-lg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-hejaaz-gray-light text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
