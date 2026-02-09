'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Features',
    href: '#',
    submenu: [
      { label: 'Accounting', href: '/features/accounting' },
      { label: 'Inventory', href: '/features/inventory' },
      { label: 'Procurement', href: '/features/procurement' },
      { label: 'Sales', href: '/features/sales' },
      { label: 'Payroll', href: '/features/payroll' },
      { label: 'Fixed Assets', href: '/features/fixed-assets' },
      { label: 'CRM', href: '/features/crm' },
      { label: 'Banking', href: '/features/banking' },
      { label: 'AI Features', href: '/features/ai' },
      { label: 'Reporting', href: '/features/reporting' },
    ],
  },
  {
    label: 'Industries',
    href: '#',
    submenu: [
      { label: 'Oil & Gas', href: '/industries/oil-and-gas' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-surface-950/95 backdrop-blur-xl border-b border-surface-200 dark:border-surface-800 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-mark.svg"
                alt="Chrysolite AI"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-surface-900 dark:text-white">
                Chrysolite <span className="bg-gradient-to-r from-electric-cyan-400 to-electric-purple-400 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-xs text-surface-600 dark:text-surface-400 -mt-1">ERP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white transition-colors py-2">
                      {item.label}
                      <ChevronDown size={16} className={cn(
                        'transition-transform',
                        'group-hover:rotate-180'
                      )} />
                    </button>

                    {/* Submenu - appears on group hover with no gap */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-56 bg-white/95 dark:bg-surface-900/95 backdrop-blur-xl border border-surface-200 dark:border-surface-700 rounded-2xl shadow-2xl py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800/50 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://app.chrysoliteai.com/login"
              className="text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105"
            >
              Experience AI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-surface-900 dark:text-white p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-surface-900/98 backdrop-blur-xl border-t border-surface-200 dark:border-surface-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white py-2 transition-colors"
                    >
                      {item.label}
                      <ChevronDown size={16} className={cn(
                        'transition-transform',
                        openSubmenu === item.label && 'rotate-180'
                      )} />
                    </button>

                    {openSubmenu === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-surface-200 dark:border-surface-800">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between py-2">
                <span className="text-surface-600 dark:text-surface-300 font-medium">Theme</span>
                <ThemeToggle />
              </div>

              <Link
                href="https://app.chrysoliteai.com/login"
                className="block text-center text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white py-3 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="https://app.chrysoliteai.com/register"
                className="block text-center bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-electric-cyan/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience AI
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
