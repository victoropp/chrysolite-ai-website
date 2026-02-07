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
  Users,
  FileText,
  Eye,
  Mic,
  Database,
  BarChart3,
  Shield,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Bot,
  Network,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Features | Chrysolite AI ERP',
  description: 'Transform your business with AI. 9 specialized AI agents, predictive analytics, intelligent automation, vision capabilities, and voice assistance—all working 24/7 for your business.',
}

const aiCapabilities = [
  {
    icon: Users,
    title: '9 Specialized AI Agents',
    description: 'Domain-expert AI agents for Inventory, Finance, Sales, Procurement, Logistics, Operations, HR, Analytics, and Accounting—each with deep expertise in their field.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bot,
    title: 'AI Hive Intelligence',
    description: 'Multiple AI agents collaborate to solve complex business problems, debate solutions, and reach consensus on strategic decisions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Advanced Memory System',
    description: '8 types of AI memory ensure your assistants remember context, learn from past interactions, and provide personalized insights based on your business patterns.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Knowledge Base (RAG)',
    description: 'AI-powered document search across manuals, policies, procedures, and FAQs. Get instant answers grounded in your company knowledge.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast demand, predict cash flow, identify customer churn risk, and anticipate inventory needs with machine learning models.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'AI waybill scanner extracts data from delivery documents. Process invoices, receipts, and forms automatically with image recognition.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Talk to your ERP naturally. Real-time voice conversations with AI agents, text-to-speech reports, and multimodal interactions.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Describe transactions in plain English and AI creates the journal entries. Ask questions in your own words and get instant answers.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'AI-powered KPI dashboards, trend analysis, anomaly detection, and automated executive summaries of complex reports.',
    color: 'from-cyan-500 to-blue-500',
  },
]

const automationFeatures = [
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Automated journal entries for sales, procurement, inventory, and asset transactions. AI handles repetitive accounting tasks 24/7.',
  },
  {
    icon: FileText,
    title: 'AI Accountant',
    description: 'Your virtual CFO that validates IFRS compliance, calculates tax implications, suggests GL accounts, and previews financial impact before posting.',
  },
  {
    icon: Target,
    title: 'Smart Recommendations',
    description: 'AI analyzes patterns and recommends optimal reorder points, pricing strategies, route optimizations, and workflow improvements.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Real-time anomaly detection monitors transactions for unusual patterns, duplicate entries, and suspicious activities.',
  },
  {
    icon: Lightbulb,
    title: 'Market Intelligence',
    description: 'AI tracks market trends, competitor movements, regulatory changes, and supply chain developments—delivering actionable insights.',
  },
  {
    icon: Network,
    title: 'Process Optimization',
    description: 'AI analyzes your workflows, identifies bottlenecks, and suggests efficiency improvements across all business operations.',
  },
]

const agentCapabilities = [
  { name: 'Inventory Agent', tools: '10+ tools for stock management, reorder points, and warehouse optimization' },
  { name: 'Finance Agent', tools: 'AR/AP aging, cash flow analysis, financial ratios, and overdue tracking' },
  { name: 'Sales Agent', tools: 'Client intelligence, pricing optimization, target achievement, and quotation management' },
  { name: 'Procurement Agent', tools: 'Supplier performance, price comparisons, and automated reorder suggestions' },
  { name: 'Logistics Agent', tools: 'Route optimization, fleet tracking, delivery scheduling, and driver performance' },
  { name: 'Operations Agent', tools: 'Production monitoring, quality control, loss analysis, and inventory reconciliation' },
  { name: 'HR Agent', tools: 'Employee management, shift scheduling, headcount reporting, and department analytics' },
  { name: 'Analytics Agent', tools: 'KPI tracking, sales trends, customer segmentation, and predictive forecasting' },
  { name: 'Accountant Agent', tools: 'IFRS-compliant accounting, tax calculations, depreciation, and GL automation' },
]

const benefits = [
  'Reduce manual data entry by 80% with intelligent automation',
  'Get instant answers to complex financial questions in plain English',
  'Predict cash flow shortfalls and revenue trends weeks in advance',
  'Detect fraud, errors, and anomalies before they impact financials',
  '100+ AI-powered tools available for business operations',
  'Continuous learning from your business patterns and preferences',
  'Multi-provider AI (Anthropic Claude, OpenAI, Google Gemini)',
  'Real-time voice and chat conversations with specialized agents',
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
              The Most Advanced AI-Powered ERP
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              9 specialized AI agents, predictive analytics, voice assistance, computer vision, and intelligent automation—all working together to transform your business operations.
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
              Comprehensive AI Capabilities
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Built-in artificial intelligence that powers every aspect of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
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

      {/* Specialized Agents Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              9 Specialized AI Agents
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Each agent is an expert in their domain with 10+ specialized tools and deep business knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentCapabilities.map((agent) => (
              <div
                key={agent.name}
                className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot size={20} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{agent.name}</h3>
                    <p className="text-sm text-surface-600 dark:text-surface-400">{agent.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Intelligent Automation & Insights
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              AI that works 24/7 to automate tasks, detect issues, and deliver actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* AI Assistant Demo */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Your AI Assistant, Always Available
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Ask questions in plain English and get instant, accurate answers. Talk to your ERP through voice or chat, and let AI handle the complex queries while you focus on strategy.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center">
                    <Brain size={20} className="text-white" />
                  </div>
                  <h3 className="text-surface-900 dark:text-white font-semibold">AI Finance Agent</h3>
                  <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Online</span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="bg-white dark:bg-surface-950/50 rounded-2xl rounded-tl-none p-4 flex-1">
                      <p className="text-surface-600 dark:text-surface-300 text-sm">What's my current cash position and will I have enough to cover February payroll?</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-chrysolite-500/20 border border-chrysolite-500/30 rounded-2xl rounded-tr-none p-4 flex-1">
                      <p className="text-surface-900 dark:text-white text-sm mb-3">Current cash position: <span className="font-semibold text-chrysolite-400">GH₵ 448,017</span> across 3 accounts.</p>
                      <p className="text-surface-600 dark:text-surface-300 text-xs mb-2">• Operating: GH₵ 234,567<br />• USD Account: $89,450 (GH₵ 88,450)<br />• Payroll: GH₵ 125,000</p>
                      <p className="text-surface-900 dark:text-white text-sm mt-3">Forecast: Based on expected collections and February payroll of GH₵ 385,000, you'll have sufficient cash. However, there's a potential shortfall on Feb 15 if Client X payment delays. Recommend accelerating AR collection from top 3 overdue accounts (GH₵ 127,000).</p>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Enterprise-grade AI features that give you a competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">Multi-Provider AI</h3>
              <p className="text-surface-600 dark:text-surface-400 mb-6">
                Choose from Anthropic Claude, OpenAI GPT, or Google Gemini—or let the system automatically select the best model for each task.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">Anthropic Claude</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">OpenAI GPT</span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">Google Gemini</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">8-Type Memory System</h3>
              <p className="text-surface-600 dark:text-surface-400 mb-6">
                Advanced memory architecture ensures AI remembers your preferences, learns from interactions, and maintains context across conversations.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Core Memory', 'Semantic Memory', 'Episodic Memory', 'Procedural Memory', 'Archival Memory', 'Graph Memory', 'Working Memory', 'Resource Memory'].map((memory) => (
                  <div key={memory} className="px-3 py-1.5 bg-chrysolite-500/10 border border-chrysolite-500/20 rounded-lg text-xs text-surface-900 dark:text-white">
                    {memory}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Experience AI That Transforms Business
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join forward-thinking companies leveraging enterprise AI to work smarter, faster, and more profitably.
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
