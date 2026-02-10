'use client'

import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import CompanyLogo from '@/components/ui/CompanyLogo'

const testimonials = [
  {
    name: 'Marcus Holloway',
    role: 'CEO',
    company: 'TechFlow Solutions',
    industry: 'Software Development',
    image: null,
    rating: 5,
    quote: 'Chrysolite AI transformed our financial operations. The AI-powered anomaly detection caught billing errors we never knew existed, saving us £45K in the first quarter alone. The real-time dashboards give our investors confidence in our numbers.',
  },
  {
    name: 'Kenji Tanaka',
    role: 'CFO',
    company: 'GlobalTrade Enterprises',
    industry: 'International Trade',
    image: null,
    rating: 5,
    quote: 'Managing multi-currency transactions across 15 countries was a nightmare. Chrysolite\'s automated reconciliation and exchange rate handling cut our month-end close from 10 days to 2 days. The compliance reporting alone is worth the investment.',
  },
  {
    name: 'Elena Volkov',
    role: 'Operations Director',
    company: 'Horizon Manufacturing',
    industry: 'Industrial Manufacturing',
    image: null,
    rating: 5,
    quote: 'We manufacture industrial equipment with 2,500+ SKUs. Chrysolite\'s AI demand forecasting reduced our inventory holding costs by 38% while preventing stockouts. The production planning integration is seamless—everything just works.',
  },
  {
    name: 'Callum Fitzgerald',
    role: 'Project Director',
    company: 'Apex Construction Group',
    industry: 'Construction',
    image: null,
    rating: 5,
    quote: 'Construction projects are complex with multiple cost centers, subcontractors, and compliance requirements. Chrysolite\'s project accounting and automated approval workflows have cut our administrative overhead by 50%. Game-changing.',
  },
  {
    name: 'Amara Okafor',
    role: 'General Manager',
    company: 'Evergreen Hospitality',
    industry: 'Hotel Management',
    image: null,
    rating: 5,
    quote: 'Operating 12 hotel properties means managing inventory, payroll, revenue management, and guest services simultaneously. Chrysolite unified everything into one platform. The AI revenue optimization alone increased our RevPAR by 18%.',
  },
  {
    name: 'Dr. Lena Bergström',
    role: 'Chief Operating Officer',
    company: 'MedCore Healthcare',
    industry: 'Healthcare Services',
    image: null,
    rating: 5,
    quote: 'Healthcare compliance is non-negotiable. Chrysolite\'s audit trails, automated regulatory reporting, and HIPAA-compliant workflows gave us peace of mind. The payroll integration with our shift scheduling saved our HR team 20 hours per week.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,transparent,black_20%,black_80%,transparent)] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-chrysolite-400">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Loved by <span className="gradient-text">Businesses Worldwide</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
            See what our customers have to say about their experience with Chrysolite AI
          </p>
        </div>

        {/* Trusted By Logo Strip */}
        <div className="mb-16 animate-fade-in">
          <div className="relative overflow-hidden bg-surface-50/50 dark:bg-surface-900/30 backdrop-blur-sm border-y border-surface-200 dark:border-surface-800 py-8">
            <p className="text-center text-sm font-medium text-surface-600 dark:text-surface-400 mb-6 uppercase tracking-wider">
              Trusted by leading companies across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 px-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.company} className="animate-fade-in-up">
                  <CompanyLogo
                    company={testimonial.company}
                    size="lg"
                    grayscale
                    className="transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                'relative group animate-fade-in-up',
                index === 0 && 'animation-delay-100',
                index === 1 && 'animation-delay-300',
                index === 2 && 'animation-delay-500'
              )}
            >
              {/* Card */}
              <div className="relative h-full bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite-500/10 hover:-translate-y-1">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/0 to-gold-400/0 group-hover:from-chrysolite-500/5 group-hover:to-gold-400/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-chrysolite-500 to-chrysolite-600 rounded-xl flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    <Quote size={24} className="text-surface-900 dark:text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-surface-200 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-full flex items-center justify-center text-surface-900 dark:text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="font-semibold text-surface-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-surface-600 dark:text-surface-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-surface-500 dark:text-surface-500 mt-0.5">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Logo Badge */}
                <div className="absolute bottom-4 right-4 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <div className="bg-white dark:bg-surface-900 rounded-lg p-2 shadow-lg">
                    <CompanyLogo
                      company={testimonial.company}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in-up animation-delay-1000">
          <div className="text-center p-6 bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
            <div className="text-4xl font-bold gradient-text-gold mb-2">4.9/5</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Customer Retention</div>
          </div>
          <div className="text-center p-6 bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
            <div className="text-4xl font-bold gradient-text-gold mb-2">50+</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Countries Served</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-2000">
          <p className="text-surface-600 dark:text-surface-400">
            Join hundreds of businesses transforming their operations.{' '}
            <a href="/case-studies" className="text-chrysolite-400 hover:text-chrysolite-300 font-medium underline underline-offset-4">
              Read more success stories →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
