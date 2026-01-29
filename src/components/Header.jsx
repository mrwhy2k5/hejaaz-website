import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/certifications', label: 'Certifications' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-hejaaz-white/95 backdrop-blur-md shadow-sm'
          : 'bg-hejaaz-white'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-[4.5rem] lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Hejaaz Technologies Home"
          >
            <div className="w-10 h-10 rounded-xl bg-hejaaz-dark flex items-center justify-center">
              <span className="text-hejaaz-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-hejaaz-dark font-bold text-lg tracking-tight block leading-none">
                HEJAAZ
              </span>
              <span className="text-hejaaz-gray-light text-xs tracking-wide">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-hejaaz-dark bg-hejaaz-surface'
                    : 'text-hejaaz-gray-light hover:text-hejaaz-dark hover:bg-hejaaz-surface/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get Quote
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2.5 rounded-xl text-hejaaz-dark hover:bg-hejaaz-surface transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-hejaaz-border bg-hejaaz-white"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === to
                      ? 'bg-hejaaz-surface text-hejaaz-dark'
                      : 'text-hejaaz-gray-light hover:bg-hejaaz-surface/50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-hejaaz-border">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get Quote
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
