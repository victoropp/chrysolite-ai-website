'use client'

import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Solutions',
    image: null, // Placeholder for avatar
    rating: 5,
    quote: 'Chrysolite AI transformed how we manage our operations. The AI-powered insights have helped us reduce costs by 30% while improving efficiency across all departments. It\'s like having a team of expert consultants working 24/7.',
  },
  {
    name: 'David Chen',
    role: 'CFO',
    company: 'GlobalTrade Enterprises',
    image: null,
    rating: 5,
    quote: 'The financial management module is exceptional. Real-time reporting and automated reconciliation have saved our team countless hours. The customizable pricing model meant we only paid for what we needed.',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Operations Director',
    company: 'Horizon Manufacturing',
    image: null,
    rating: 5,
    quote: 'We\'ve tried multiple ERP systems, but Chrysolite AI stands out with its intuitive design and powerful automation. The inventory forecasting alone has prevented stockouts and reduced excess inventory by 45%.',
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                    <div>
                      <div className="font-semibold text-surface-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-surface-600 dark:text-surface-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-chrysolite-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-chrysolite-500 rounded-full"></div>
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
