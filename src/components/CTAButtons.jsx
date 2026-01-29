import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTAButtons({ className = '', variant = 'light' }) {
  const secondaryClass = variant === 'dark' ? 'btn-outline-light' : 'btn-secondary'

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link to="/contact" className="btn-primary">
        Request Quote
        <ArrowRight size={16} aria-hidden />
      </Link>
      <a href="tel:+919361227290" className={secondaryClass}>
        <Phone size={16} aria-hidden />
        Talk to Engineer
      </a>
    </div>
  )
}
