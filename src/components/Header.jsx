import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-hejaaz-white ${
        scrolled ? 'shadow-header' : ''
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Hejaaz Technologies Home"
          >
            <div className="w-9 h-9 rounded-lg bg-hejaaz-primary flex items-center justify-center">
              <span className="text-hejaaz-white font-bold text-base">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-hejaaz-primary font-bold text-base tracking-tight block leading-none">
                HEJAAZ
              </span>
              <span className="text-hejaaz-text-light text-[11px] tracking-wide">
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
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  location.pathname === to
                    ? 'text-hejaaz-primary bg-hejaaz-surface'
                    : 'text-hejaaz-text-light hover:text-hejaaz-primary hover:bg-hejaaz-surface'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Get Quote
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg text-hejaaz-primary hover:bg-hejaaz-surface transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-hejaaz-border bg-hejaaz-white">
          <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === to
                    ? 'bg-hejaaz-surface text-hejaaz-primary'
                    : 'text-hejaaz-text-light hover:bg-hejaaz-surface'
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
        </div>
      )}
    </header>
  )
}
