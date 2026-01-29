import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'

const address = '192-2A, Haji Mohammed Abdul Hafiz Sahib Street, Dashamakan, Chennai – 600012, Tamil Nadu'
const phone = '+91 9361227290'
const email = 'hejaaztechnologies@gmail.com'

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
    setErrors({})
  }

  return (
    <Layout>
      <SeoHead title="Contact" description="Hejaaz Technologies – Chennai. Phone, email, contact form. Request a quote or technical support." path="/contact" />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for quotes, technical support, or partnership inquiries. We're here to help."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: company info */}
            <div className="lg:col-span-5">
              <SectionHeading title="Get in touch" animate={false} />
              <div className="mt-10 space-y-8">
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Address</h3>
                    <p className="mt-2 text-hejaaz-gray-light text-sm leading-relaxed">{address}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Phone</h3>
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="mt-2 text-hejaaz-gray-light text-sm hover:text-hejaaz-accent transition-colors block">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Email</h3>
                    <a href={`mailto:${email}`} className="mt-2 text-hejaaz-gray-light text-sm hover:text-hejaaz-accent transition-colors block">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-hejaaz-surface bg-hejaaz-surface/30 p-8 lg:p-10 shadow-card">
                <SectionHeading title="Send a message" subtitle="We'll get back to you as soon as we can." animate={false} />
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 rounded-lg bg-hejaaz-accent/10 border border-hejaaz-accent/20 text-hejaaz-dark"
                  >
                    <p className="font-semibold">Thank you for your message.</p>
                    <p className="mt-2 text-sm text-hejaaz-gray-light">We'll respond shortly. You can also call us at {phone} for urgent inquiries.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-hejaaz-dark mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-surface bg-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-shadow"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-hejaaz-dark mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-surface bg-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-shadow"
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-hejaaz-dark mb-2">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-surface bg-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-shadow"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-hejaaz-dark mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-surface bg-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-shadow"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-hejaaz-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-hejaaz-surface bg-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-shadow resize-y"
                        placeholder="How can we help?"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary inline-flex items-center gap-2">
                      <Send size={18} aria-hidden />
                      Send message
                    </button>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
