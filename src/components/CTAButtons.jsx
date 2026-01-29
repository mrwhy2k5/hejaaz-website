import { Link } from 'react-router-dom'
import { FileText, MessageCircle } from 'lucide-react'

/**
 * Hero CTA pair: "Request Quote" (primary) | "Talk to Engineer" (secondary).
 * variant="dark" for dark backgrounds (hero), "light" for light backgrounds.
 */
export default function CTAButtons({ className = '', variant = 'light' }) {
  const secondaryClass = variant === 'dark' ? 'btn-outline-light' : 'btn-secondary'
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link to="/contact" className="btn-primary">
        <FileText size={18} aria-hidden />
        Request Quote
      </Link>
      <a href="tel:+919361227290" className={secondaryClass}>
        <MessageCircle size={18} aria-hidden />
        Talk to Engineer
      </a>
    </div>
  )
}
