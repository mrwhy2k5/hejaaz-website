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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5">
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out directly or fill out the form. We're here to help with your crane safety and automation needs."
                animate={false}
              />

              <div className="mt-10 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-5 p-5 rounded-2xl bg-hejaaz-surface border border-hejaaz-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Office Address</h3>
                    <p className="mt-2 text-sm text-hejaaz-gray-light leading-relaxed">
                      {address}
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="flex gap-5 p-5 rounded-2xl bg-hejaaz-surface border border-hejaaz-border hover:border-hejaaz-accent/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Phone</h3>
                    <p className="mt-1 text-sm text-hejaaz-gray-light group-hover:text-hejaaz-accent transition-colors">
                      {phone}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${email}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl bg-hejaaz-surface border border-hejaaz-border hover:border-hejaaz-accent/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0 group-hover:bg-hejaaz-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Email</h3>
                    <p className="mt-1 text-sm text-hejaaz-gray-light group-hover:text-hejaaz-accent transition-colors">
                      {email}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex gap-5 p-5 rounded-2xl bg-hejaaz-surface border border-hejaaz-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-hejaaz-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-hejaaz-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hejaaz-dark">Response Time</h3>
                    <p className="mt-1 text-sm text-hejaaz-gray-light">
                      Within 24 business hours
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-8 lg:p-10"
              >
                <h2 className="heading-sm">Send us a message</h2>
                <p className="mt-2 text-hejaaz-gray-light">
                  Fill out the form and we will get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 p-8 rounded-2xl bg-hejaaz-accent/10 border border-hejaaz-accent/20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-hejaaz-accent/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-hejaaz-accent" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-hejaaz-dark">
                      Message Sent
                    </h3>
                    <p className="mt-3 text-hejaaz-gray-light">
                      Thank you for reaching out. We will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-hejaaz-accent font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-hejaaz-dark mb-2"
                        >
                          Name <span className="text-hejaaz-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-all"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-2 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-hejaaz-dark mb-2"
                        >
                          Email <span className="text-hejaaz-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-all"
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-hejaaz-dark mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-all"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-hejaaz-dark mb-2"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-all"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-hejaaz-dark mb-2"
                      >
                        Message <span className="text-hejaaz-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-hejaaz-border bg-hejaaz-white focus:ring-2 focus:ring-hejaaz-accent focus:border-hejaaz-accent outline-none transition-all resize-y"
                        placeholder="Tell us about your requirements..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-600">
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
