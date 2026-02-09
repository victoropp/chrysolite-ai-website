import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplet, Factory, ShoppingCart, Building2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve | Chrysolite AI ERP',
  description: 'Purpose-built ERP solutions for specific industries. From oil & gas to manufacturing—transform your operations with industry-specific intelligence.',
}

const industries = [
  {
    icon: Droplet,
    title: 'Oil & Gas',
    description: 'Transform petroleum operations from LPG distribution to filling station management.',
    href: '/industries/oil-and-gas',
    available: true,
    highlights: ['LPG Tracking', 'NPA Compliance', 'UPPF Claims'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Optimize production, inventory, and supply chain operations.',
    href: '#',
    available: false,
    highlights: ['Coming Soon'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & Distribution',
    description: 'Manage multi-location retail operations with real-time visibility.',
    href: '#',
    available: false,
    highlights: ['Coming Soon'],
  },
  {
    icon: Building2,
    title: 'Construction & Real Estate',
    description: 'Project management, cost tracking, and asset management.',
    href: '#',
    available: false,
    highlights: ['Coming Soon'],
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-electric-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-electric-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chrysolite-500/10 to-electric-cyan-500/10 border border-chrysolite-500/30 rounded-full mb-8">
              <span className="text-sm font-semibold bg-gradient-to-r from-chrysolite-500 to-electric-cyan-500 bg-clip-text text-transparent">
                Industry-Specific Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Built for Your Industry
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Generic ERPs force you to adapt. Chrysolite AI adapts to you. Choose purpose-built
              solutions that understand your industry's unique challenges, regulations, and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Purpose-Built Solutions
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Every industry has unique challenges. We've built specialized solutions that speak
              your language and solve your specific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 transition-all duration-300 ${
                  industry.available
                    ? 'hover:border-chrysolite-500/30 hover:shadow-lg hover:shadow-chrysolite/10 group cursor-pointer'
                    : 'opacity-75'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-electric-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon size={28} className="text-chrysolite-400" />
                  </div>
                  {!industry.available && (
                    <span className="px-3 py-1 bg-surface-200 dark:bg-surface-800 text-surface-600 dark:text-surface-400 text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-surface-900 dark:text-white mb-3">
                  {industry.title}
                </h3>

                <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-4">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {industry.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-chrysolite-500/10 text-chrysolite-600 dark:text-chrysolite-400 text-sm rounded-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {industry.available && (
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-chrysolite-500 hover:text-chrysolite-400 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Why Industry-Specific Matters
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Generic ERPs force you to bend your processes to fit their rigid structure.
                Industry-specific solutions understand your unique challenges from day one.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-chrysolite-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-chrysolite-500 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                      Pre-Configured for Your Industry
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      Start with workflows, reports, and features designed for your specific operations—not generic templates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-chrysolite-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-chrysolite-500 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                      Compliance Built-In
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      Industry-specific regulations and compliance requirements handled automatically—no customization needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-chrysolite-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-chrysolite-500 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                      Faster Implementation
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      Go live in weeks, not months. Pre-built processes mean less configuration and training time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h4 className="text-lg font-semibold text-surface-900 dark:text-white mb-6">
                  Generic ERP vs Industry-Specific
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div>
                      <p className="text-surface-900 dark:text-white font-medium">Implementation Time</p>
                      <p className="text-sm text-surface-500">Weeks vs Months</p>
                    </div>
                    <span className="text-chrysolite-500 font-bold">5x Faster</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div>
                      <p className="text-surface-900 dark:text-white font-medium">Customization Required</p>
                      <p className="text-sm text-surface-500">Hours vs Months</p>
                    </div>
                    <span className="text-chrysolite-500 font-bold">90% Less</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div>
                      <p className="text-surface-900 dark:text-white font-medium">Training Time</p>
                      <p className="text-sm text-surface-500">Intuitive vs Complex</p>
                    </div>
                    <span className="text-chrysolite-500 font-bold">70% Faster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Discover how industry-specific intelligence can revolutionize your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Talk to an Expert
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/industries/oil-and-gas"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Explore Oil & Gas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
