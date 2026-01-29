import { motion } from 'framer-motion'

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'left',
  className = '',
  animate = true,
  size = 'lg',
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
        <span className="block mb-3 text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary">{label}</span>
      )}
      <h2 className={titleClass}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-hejaaz-text-light leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
