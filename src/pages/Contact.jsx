import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2 } from 'lucide-react'
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
      <SeoHead
        title="Contact"
        description="Hejaaz Technologies – Chennai. Phone, email, contact form. Request a quote or technical support."
        path="/contact"
      />
      <PageHeader
        label="Contact"
        title="Get in Touch"
        subtitle="Request a quote, technical support, or partnership inquiry. We respond within 24 hours."
      />

      <section className="section-padding bg-hejaaz-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5">
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out directly or fill out the form. We're here to help with your crane safety and automation needs."
                animate={false}
              />

              <div className="mt-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl bg-hejaaz-surface border border-hejaaz-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-primary text-sm">Office Address</h3>
                    <p className="mt-1 text-sm text-hejaaz-text-light leading-relaxed">
                      {address}
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="flex gap-4 p-4 rounded-xl bg-hejaaz-surface border border-hejaaz-border hover:border-hejaaz-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-secondary/20 transition-colors">
                    <Phone className="w-5 h-5 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-primary text-sm">Phone</h3>
                    <p className="mt-1 text-sm text-hejaaz-text-light group-hover:text-hejaaz-secondary transition-colors">
                      {phone}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${email}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-hejaaz-surface border border-hejaaz-border hover:border-hejaaz-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-primary text-sm">Email</h3>
                    <p className="mt-1 text-sm text-hejaaz-text-light group-hover:text-hejaaz-secondary transition-colors">
                      {email}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex gap-4 p-4 rounded-xl bg-hejaaz-surface border border-hejaaz-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-hejaaz-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-hejaaz-secondary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-primary text-sm">Response Time</h3>
                    <p className="mt-1 text-sm text-hejaaz-text-light">
                      Within 24 business hours
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 lg:p-8"
              >
                <h2 className="heading-sm">Send us a message</h2>
                <p className="mt-2 text-hejaaz-text-light text-sm">
                  Fill out the form and we will get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 rounded-xl bg-hejaaz-secondary/10 border border-hejaaz-secondary/20 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-hejaaz-secondary/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-hejaaz-secondary" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-hejaaz-primary">
                      Message Sent
                    </h3>
                    <p className="mt-2 text-hejaaz-text-light text-sm">
                      Thank you for reaching out. We will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 text-hejaaz-secondary font-semibold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-hejaaz-primary mb-1.5"
                        >
                          Name <span className="text-hejaaz-secondary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-secondary focus:border-hejaaz-secondary outline-none transition-all text-sm"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-hejaaz-primary mb-1.5"
                        >
                          Email <span className="text-hejaaz-secondary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-secondary focus:border-hejaaz-secondary outline-none transition-all text-sm"
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-hejaaz-primary mb-1.5"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-secondary focus:border-hejaaz-secondary outline-none transition-all text-sm"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-hejaaz-primary mb-1.5"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-secondary focus:border-hejaaz-secondary outline-none transition-all text-sm"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-hejaaz-primary mb-1.5"
                      >
                        Message <span className="text-hejaaz-secondary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-secondary focus:border-hejaaz-secondary outline-none transition-all resize-y text-sm"
                        placeholder="Tell us about your requirements..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                      <Send size={18} aria-hidden />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
