import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const address = '192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012, Tamil Nadu'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

const footerLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-hejaaz-dark text-white">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-white font-bold text-xl tracking-tight">HEJAAZ</span>
              <span className="text-white/70 font-medium ml-1">Technologies</span>
            </Link>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Industrial Automation & Crane Safety Systems. Engineering safety. Powering industry.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="shrink-0 w-5 h-5 text-hejaaz-accent mt-0.5" aria-hidden />
                <span className="text-sm text-white/60 leading-relaxed">{address}</span>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex gap-4 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Phone className="shrink-0 w-5 h-5 text-hejaaz-accent" aria-hidden />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex gap-4 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail className="shrink-0 w-5 h-5 text-hejaaz-accent" aria-hidden />
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Hejaaz Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            ISO 9001:2015 Certified | MSME Registered
          </p>
        </div>
      </div>
    </footer>
  )
}
