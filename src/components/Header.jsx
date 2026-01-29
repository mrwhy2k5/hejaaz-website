import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Support' },
  { to: '/#news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_3px_0_rgb(0_0_0_/0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">
          <Link
            to="/"
            className="shrink-0 text-hejaaz-dark font-bold text-lg sm:text-xl tracking-tight"
            aria-label="Hejaaz Technologies Home"
          >
            Hejaaz Technologies
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map(({ to, label }) => {
              const isNews = to === '/#news'
              const active = isNews ? false : location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2.5 text-sm font-medium text-hejaaz-gray-light hover:text-hejaaz-dark transition-colors duration-200 ${
                    active ? 'text-hejaaz-dark' : ''
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2.5 rounded-lg text-hejaaz-dark hover:bg-hejaaz-surface transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-hejaaz-surface bg-white"
          >
            <nav className="flex flex-col py-4 px-4 gap-0.5" aria-label="Mobile navigation">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-hejaaz-gray-light hover:text-hejaaz-dark hover:bg-hejaaz-surface rounded-lg transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
