import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Headset, MessageCircle } from 'lucide-react'

/**
 * Global Hero CTA pair: 
 * 1. "Request Quote" (Primary / Filled / WhatsApp)
 * 2. "Technical Support" (Secondary / Outline / Internal Link)
 */
export default function CTAButtons({ className = '', variant = 'dark' }) {
  // variant dark means we are on a dark background
  const secondaryClass = variant === 'dark'
    ? "border-2 border-white/30 hover:bg-white/10 text-white rounded-lg px-5 py-2.5 font-semibold text-sm inline-flex items-center gap-2 transition-all"
    : "border-2 border-hejaaz-secondary/50 hover:border-hejaaz-secondary hover:bg-hejaaz-secondary/10 text-hejaaz-secondary rounded-lg px-5 py-2.5 font-semibold text-sm inline-flex items-center gap-2 transition-all"

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`flex flex-wrap gap-3 ${className}`}
    >
      <a
        href="https://wa.me/919361227290?text=Hello%20Hejaaz%20Technologies%2C%20I%20would%20like%20to%20request%20a%20technical%20quote%20for%20your%20crane%20safety%20system."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        aria-label="Request Quote via WhatsApp"
        title="Chat with our sales engineer"
      >
        <MessageCircle size={14} aria-hidden className="flex-shrink-0" />
        <span>Request Quote</span>
      </a>
      <Link
        to="/contact"
        className={secondaryClass}
        aria-label="Go to Technical Support Contact Page"
        title="Get engineering & service support"
      >
        <Headset size={14} aria-hidden className="flex-shrink-0" />
        <span>Technical Support</span>
      </Link>
    </motion.div>
  )
}
