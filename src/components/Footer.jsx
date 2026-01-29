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
    <footer className="bg-hejaaz-primary">
      {/* Main footer content */}
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-hejaaz-white flex items-center justify-center">
                <span className="text-hejaaz-primary font-bold text-base">H</span>
              </div>
              <div>
                <span className="text-hejaaz-white font-bold text-base tracking-tight block leading-none">
                  HEJAAZ
                </span>
                <span className="text-hejaaz-text-muted text-[11px] tracking-wide">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="mt-5 text-hejaaz-text-muted leading-relaxed max-w-sm text-sm">
              Engineering safety. Powering industry. Crane safety systems and industrial automation solutions for OEMs, EPCs, and factories across India.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-md bg-hejaaz-white/10 text-hejaaz-text-muted text-xs font-medium">
                ISO 9001:2015
              </span>
              <span className="px-3 py-1.5 rounded-md bg-hejaaz-white/10 text-hejaaz-text-muted text-xs font-medium">
                MSME
              </span>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-hejaaz-text-muted hover:text-hejaaz-white transition-colors duration-150 text-sm inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-5">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-hejaaz-text-muted hover:text-hejaaz-white transition-colors duration-150 text-sm inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h3 className="text-hejaaz-white font-semibold text-sm mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-md bg-hejaaz-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-hejaaz-secondary" aria-hidden />
                </div>
                <span className="text-sm text-hejaaz-text-muted leading-relaxed">{address}</span>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-hejaaz-white/5 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-secondary/20 transition-colors">
                    <Phone className="w-4 h-4 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <span className="text-sm text-hejaaz-text-muted group-hover:text-hejaaz-white transition-colors self-center">
                    {phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-hejaaz-white/5 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-secondary/20 transition-colors">
                    <Mail className="w-4 h-4 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <span className="text-sm text-hejaaz-text-muted group-hover:text-hejaaz-white transition-colors self-center">
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
        <div className="container-content py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-hejaaz-text-muted">
              © {new Date().getFullYear()} Hejaaz Technologies. All rights reserved.
            </p>
            <p className="text-xs text-hejaaz-text-muted/60">
              Chennai, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
