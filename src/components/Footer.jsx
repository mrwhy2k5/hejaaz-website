import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const address = '192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012, Tamil Nadu'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

const footerLinks = {
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ],
  solutions: [
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-hejaaz-dark">
      {/* Main footer content */}
      <div className="container-content py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-hejaaz-white flex items-center justify-center">
                <span className="text-hejaaz-dark font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-hejaaz-white font-bold text-lg tracking-tight block leading-none">
                  HEJAAZ
                </span>
                <span className="text-hejaaz-gray-muted text-xs tracking-wide">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="mt-6 text-hejaaz-gray-muted leading-relaxed max-w-sm">
              Engineering safety. Powering industry. Crane safety systems and industrial automation solutions for OEMs, EPCs, and factories across India.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-hejaaz-white/10 text-hejaaz-gray-muted text-xs font-medium">
                ISO 9001:2015
              </span>
              <span className="px-3 py-1.5 rounded-full bg-hejaaz-white/10 text-hejaaz-gray-muted text-xs font-medium">
                MSME
              </span>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-hejaaz-gray-muted hover:text-hejaaz-white transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-6">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-hejaaz-gray-muted hover:text-hejaaz-white transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-hejaaz-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-hejaaz-accent-light" aria-hidden />
                </div>
                <span className="text-sm text-hejaaz-gray-muted leading-relaxed">{address}</span>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-hejaaz-white/5 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-hejaaz-accent-light" aria-hidden />
                  </div>
                  <span className="text-sm text-hejaaz-gray-muted group-hover:text-hejaaz-white transition-colors self-center">
                    {phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-hejaaz-white/5 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-hejaaz-accent-light" aria-hidden />
                  </div>
                  <span className="text-sm text-hejaaz-gray-muted group-hover:text-hejaaz-white transition-colors self-center">
                    {email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hejaaz-white/10">
        <div className="container-content py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-hejaaz-gray-muted">
              © {new Date().getFullYear()} Hejaaz Technologies. All rights reserved.
            </p>
            <p className="text-xs text-hejaaz-gray-muted/60">
              Chennai, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
