import { motion } from 'framer-motion'

/**
 * Reusable section title + optional subtitle + optional label.
 * Klug Avalon style: large bold headings, generous spacing, minimal text.
 */
export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'left',
  className = '',
  animate = true,
  size = 'lg', // 'lg' | 'md' | 'sm'
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  }[align]

  const titleClass = {
    lg: 'heading-lg',
    md: 'heading-md',
    sm: 'heading-sm',
  }[size]

  const content = (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <span className="label block mb-4">{label}</span>
      )}
      <h2 className={titleClass}>{title}</h2>
      {subtitle && (
        <p className={`mt-5 body-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
