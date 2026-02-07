import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Brain,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Zap,
  Target,
  Eye,
  Mic,
  Database,
  BarChart3,
  Shield,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Features | Chrysolite AI ERP',
  description: 'Transform your business with AI. Intelligent automation, predictive analytics, natural language queries, and voice assistance—working 24/7 for your business.',
}

const aiCapabilities = [
  {
    icon: Brain,
    title: 'Specialized AI Agents',
    description: 'Domain-expert AI agents for Finance, Inventory, Sales, Procurement, HR, and more. Each agent understands its specialty deeply and collaborates to solve complex cross-functional challenges.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'AI Orchestration',
    description: 'Multiple AI agents work together seamlessly—one validates compliance, another optimizes inventory, while a third analyzes cash flow. Coordinated intelligence across your entire business.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'ML-powered forecasting for cash flow, revenue trends, customer churn, and inventory demand. AI analyzes historical patterns and market signals to predict business outcomes with accuracy.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'RAG-Powered Knowledge',
    description: 'AI retrieves and synthesizes information from your company knowledge base, policies, contracts, and procedures. Get instant, cited answers with source references.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Interface',
    description: 'Ask complex business questions in plain English: "Which customers are overdue and what\'s our collection rate?" AI understands context, intent, and follows up intelligently.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision & OCR',
    description: 'Automatically extract data from invoices, receipts, delivery notes, and contracts. AI reads, validates, and posts transactions—reducing manual entry by up to 90%.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Hands-free business intelligence through voice commands. Ask questions while driving, get spoken dashboards, dictate approvals—your ERP responds naturally with real-time data.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Autonomous Reporting',
    description: 'AI generates executive summaries, variance analyses, and trend reports automatically. Dashboards that highlight anomalies, opportunities, and risks without manual configuration.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Intelligent Monitoring',
    description: 'AI continuously monitors transactions for fraud patterns, compliance violations, data anomalies, and operational inefficiencies. Real-time alerts with recommended actions.',
    color: 'from-emerald-500 to-green-500',
  },
]

const automationFeatures = [
  {
    icon: Zap,
    title: 'End-to-End Automation',
    description: 'From purchase order to payment posting—AI automates the entire accounting cycle. Journal entries, bank reconciliations, period-end close, and intercompany eliminations run autonomously.',
  },
  {
    icon: FileText,
    title: 'AI-Powered Accounting',
    description: 'Virtual CFO validates compliance, suggests GL accounts, calculates tax implications, and identifies posting errors before they hit your books. IFRS and GAAP expertise built-in.',
  },
  {
    icon: Target,
    title: 'Intelligent Recommendations',
    description: 'ML models recommend optimal pricing strategies, reorder quantities, cash allocation, credit limits, and discount structures based on historical performance and market conditions.',
  },
  {
    icon: Lightbulb,
    title: 'Market & Supply Chain Intelligence',
    description: 'AI monitors supplier performance, tracks commodity prices, analyzes competitor moves, and identifies supply chain risks—giving you strategic foresight.',
  },
  {
    icon: Clock,
    title: 'Adaptive Learning',
    description: 'AI learns your business rules, approval patterns, data preferences, and reporting needs. The system becomes more personalized and accurate the longer you use it.',
  },
]

const benefits = [
  'Reduce manual data entry and reconciliation by up to 90%',
  'Get instant, accurate answers to complex multi-dimensional business questions',
  'Predict cash flow, revenue, and demand with ML-powered accuracy',
  'Detect fraud, anomalies, and compliance violations in real-time',
  'Automate journal entries, approvals, reconciliations, and close processes',
  'Natural language and voice access to your entire business intelligence',
  'Extract and validate data from documents, invoices, and contracts automatically',
  'Continuous learning adapts to your unique business patterns and preferences',
]

export default function AIFeaturePage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Brain size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              AI That Transforms Your Business
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Experience the future of ERP with built-in artificial intelligence. Automate workflows, predict outcomes, and get expert insights—all powered by advanced AI that works 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Book AI Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Intelligent Features That Work For You
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Built-in AI that automates, predicts, and optimizes every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <capability.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Powerful Automation & Insights
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              AI capabilities that save time, reduce errors, and deliver actionable business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {automationFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center">
              Real Business Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Demo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Your AI Assistant, Always Available
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Ask questions in plain English and get instant, accurate answers. Talk to your ERP through voice or chat, and let AI handle the complex queries while you focus on growing your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Natural Conversations</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Ask questions like you would to your CFO. AI understands context and provides detailed, actionable answers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Voice Enabled</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Speak your questions and get spoken answers. Hands-free access to your entire business intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Contextual Intelligence</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      AI remembers your preferences, learns from your decisions, and adapts to your business over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center">
                    <Brain size={20} className="text-white" />
                  </div>
                  <h3 className="text-surface-900 dark:text-white font-semibold">AI Assistant</h3>
                  <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Online</span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="bg-white dark:bg-surface-950/50 rounded-2xl rounded-tl-none p-4 flex-1">
                      <p className="text-surface-600 dark:text-surface-300 text-sm">What's my current cash position and will I have enough for next month's payroll?</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-chrysolite-500/20 border border-chrysolite-500/30 rounded-2xl rounded-tr-none p-4 flex-1">
                      <p className="text-surface-900 dark:text-white text-sm mb-3">Your current cash position is strong at <span className="font-semibold text-chrysolite-400">GH₵ 448,017</span> across all accounts.</p>
                      <p className="text-surface-600 dark:text-surface-300 text-xs mb-3">Based on expected collections and upcoming payroll, you'll have sufficient cash. However, I've identified a potential shortfall mid-month if certain payments delay.</p>
                      <p className="text-surface-900 dark:text-white text-sm">Recommendation: Accelerate collection from your top overdue accounts to maintain healthy cash reserves.</p>
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

      {/* Advanced Features Highlights */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Enterprise-Grade AI Technology
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Cutting-edge AI capabilities that give you a competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Multi-Model AI Architecture</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Leverages the best AI models from leading providers (OpenAI, Anthropic, Google, and more). The system automatically selects the optimal model for each task—from fast classification to complex reasoning.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Context-Aware Memory Systems</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Advanced memory architecture maintains conversation context, user preferences, business rules, and historical decisions. AI remembers what you told it weeks ago and applies it intelligently.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Retrieval-Augmented Generation</h3>
              <p className="text-surface-600 dark:text-surface-400">
                RAG system grounds AI responses in your actual business data and documents. Every answer is accurate, up-to-date, and cites specific sources from your knowledge base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Experience AI That Works For You
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join forward-thinking companies using AI to work smarter, faster, and more profitably.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule AI Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
