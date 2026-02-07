import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Features | Chrysolite AI ERP',
  description: 'Transform your business with AI. Automated workflows, predictive analytics, intelligent insights, and an AI accountant that works 24/7.',
}

const features = [
  {
    icon: Brain,
    title: 'AI Accountant',
    description: 'Your virtual CFO assistant that answers questions, generates reports, and provides insights.',
  },
  {
    icon: Sparkles,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks, journal entries, and approvals with AI-powered workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast sales, cash flow, and inventory needs with machine learning models.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Queries',
    description: 'Ask questions in plain English and get instant answers from your ERP data.',
  },
  {
    icon: Target,
    title: 'Anomaly Detection',
    description: 'AI monitors transactions and alerts you to unusual patterns and potential fraud.',
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'AI analyzes workflows and suggests improvements to increase efficiency.',
  },
]

const benefits = [
  'Reduce manual data entry by 80% with intelligent automation',
  'Get instant answers to complex financial questions',
  'Predict cash flow shortfalls weeks in advance',
  'Detect fraud and errors before they impact financials',
  'Automated journal entry suggestions based on patterns',
  'Continuous learning from your business operations',
]

export default function AIFeaturePage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Brain size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Intelligence
            </h1>

            <p className="text-xl text-surface-300 mb-12 leading-relaxed">
              Experience the future of ERP with built-in artificial intelligence. Automate workflows,
              predict outcomes, and get insights that drive growth—all powered by advanced AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-900 hover:bg-surface-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI That Works For You
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Intelligent features that automate, predict, and optimize your entire business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your AI Accountant, Always Available
              </h2>
              <p className="text-lg text-surface-400 mb-8">
                Ask questions like "What's my cash position?" or "Show me AR aging" and get instant,
                accurate answers. Our AI understands your business and provides actionable insights.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-white font-semibold mb-6">AI Assistant Conversation</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="bg-surface-950/50 rounded-2xl rounded-tl-none p-4 flex-1">
                      <p className="text-surface-300 text-sm">What's my current cash position?</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-chrysolite-500/20 border border-chrysolite-500/30 rounded-2xl rounded-tr-none p-4 flex-1">
                      <p className="text-white text-sm mb-2">Your current cash position is <span className="font-semibold text-chrysolite-400">GH₵ 448,017</span> across 3 bank accounts.</p>
                      <p className="text-surface-300 text-xs">• Operating: GH₵ 234,567<br />• USD Account: $89,450 (GH₵ 88,450)<br />• Payroll: GH₵ 125,000</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                      <Brain size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="bg-surface-950/50 rounded-2xl rounded-tl-none p-4 flex-1">
                      <p className="text-surface-300 text-sm">Will I have enough cash next month?</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-chrysolite-500/20 border border-chrysolite-500/30 rounded-2xl rounded-tr-none p-4 flex-1">
                      <p className="text-white text-sm">Based on your payment schedule and forecasted revenue, you'll have <span className="font-semibold text-chrysolite-400">GH₵ 385,000</span> by month-end. However, there's a potential shortfall on Feb 15. I recommend accelerating AR collection.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                      <Brain size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            AI Across All Modules
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto mb-12">
            Our AI intelligence powers every module, from accounting to inventory,
            providing insights and automation everywhere you need it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Accounting', 'Inventory', 'Sales', 'Procurement', 'Payroll', 'Banking'].map((module) => (
              <div
                key={module}
                className="px-6 py-3 bg-surface-900 border border-surface-700 rounded-xl text-surface-300 hover:border-chrysolite-500/30 hover:text-white transition-all"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience the Future of ERP
          </h2>
          <p className="text-lg text-surface-400 mb-12">
            Join forward-thinking businesses leveraging AI to work smarter, not harder.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-900 hover:bg-surface-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
