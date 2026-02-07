'use client'

import Link from 'next/link'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Modules', href: '/modules' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Security', href: '/security' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press Kit', href: '/press' },
    { label: 'Partners', href: '/partners' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Help Center', href: '/help' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Community', href: '/community' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'DPA', href: '/dpa' },
    { label: 'SLA', href: '/sla' },
    { label: 'Compliance', href: '/compliance' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/chrysoliteai', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/chrysoliteai', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/chrysoliteai', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@chrysoliteai.com', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-900">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-chrysolite-500/30 transition-shadow">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-surface-900 dark:text-white group-hover:text-chrysolite-400 transition-colors">
                Chrysolite AI
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-surface-600 dark:text-surface-400 mb-6 leading-relaxed">
              The AI-powered ERP platform that transforms how businesses operate.
              Automate, optimize, and scale with confidence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-surface-600 dark:text-surface-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-chrysolite-400" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-chrysolite-400" />
                <span>+44 7442 852675</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-chrysolite-400" />
                <span>+233 277 390051</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-chrysolite-400" />
                <a href="mailto:hello@chrysoliteai.com" className="hover:text-chrysolite-400 transition-colors">
                  hello@chrysoliteai.com
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-600 dark:text-surface-400 hover:text-chrysolite-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-600 dark:text-surface-400 hover:text-chrysolite-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-600 dark:text-surface-400 hover:text-chrysolite-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface-600 dark:text-surface-400 hover:text-chrysolite-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-surface-200 dark:border-surface-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                Get the latest product updates and industry insights
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white dark:bg-surface-900 border border-surface-300 dark:border-surface-800 rounded-xl text-surface-900 dark:text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/30 hover:shadow-chrysolite/50">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-surface-200 dark:border-surface-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-surface-500 text-sm text-center md:text-left">
              © {currentYear} Chrysolite AI, Inc. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-surface-100 dark:bg-surface-900 border border-surface-300 dark:border-surface-800 rounded-lg text-surface-600 dark:text-surface-400 hover:text-chrysolite-400 hover:border-chrysolite-500/30 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center gap-3 text-xs text-surface-500">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                SOC 2 Compliant
              </span>
              <span className="text-surface-400 dark:text-surface-700">|</span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                GDPR Compliant
              </span>
              <span className="text-surface-400 dark:text-surface-700">|</span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                ISO 27001 Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
