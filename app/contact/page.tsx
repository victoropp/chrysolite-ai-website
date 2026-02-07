'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  MessageSquare,
  Clock,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@chrysoliteai.com',
    href: 'mailto:hello@chrysoliteai.com',
  },
  {
    icon: Phone,
    label: 'Phone (UK)',
    value: '+44 7442 852675',
    href: 'tel:+447442852675',
  },
  {
    icon: Phone,
    label: 'Phone (Ghana)',
    value: '+233 277 390051',
    href: 'tel:+233277390051',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'London, United Kingdom',
    href: '#map',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 8am - 6pm GMT',
    href: null,
  },
]

const faqs = [
  {
    question: 'How quickly will I get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'Can I schedule a demo?',
    answer: 'Absolutely! Select "Sales Inquiry" in the form and we\'ll arrange a personalized demo.',
  },
  {
    question: 'Do you offer implementation support?',
    answer: 'Yes, we provide full implementation support with all Professional and Enterprise plans.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'sales',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'sales',
        message: '',
      })
    }, 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Talk About Your Business
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl mx-auto">
            Have questions about Chrysolite AI? Want to schedule a demo? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-chrysolite-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-chrysolite-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-surface-400 mb-8">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-chrysolite-400 hover:text-chrysolite-300 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface-950 border ${
                            errors.name ? 'border-red-500' : 'border-surface-800'
                          } rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface-950 border ${
                            errors.email ? 'border-red-500' : 'border-surface-800'
                          } rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-surface-950 border ${
                            errors.company ? 'border-red-500' : 'border-surface-800'
                          } rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors`}
                          placeholder="Acme Corp"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface-950 border border-surface-800 rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors"
                          placeholder="+44 7442 852675"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-950 border border-surface-800 rounded-xl text-white focus:outline-none focus:border-chrysolite-500/50 transition-colors"
                      >
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-surface-950 border ${
                          errors.message ? 'border-red-500' : 'border-surface-800'
                        } rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors resize-none`}
                        placeholder="Tell us about your business needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 disabled:from-surface-700 disabled:to-surface-700 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-chrysolite-400" />
                    </div>
                    <div>
                      <div className="text-surface-400 text-sm mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-chrysolite-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-6">
                <div className="aspect-video bg-surface-950 rounded-xl flex items-center justify-center border border-surface-800">
                  <MapPin size={32} className="text-surface-600" />
                </div>
                <p className="text-sm text-surface-400 mt-4 text-center">
                  Map integration coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-surface-400">
              Quick answers to common questions.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={24} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-surface-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-surface-400 mb-4">
              Still have questions?
            </p>
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              <MessageSquare size={18} />
              Visit our Help Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
