import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary — Chrysolite gemstone (BRIGHTENED to emerald)
        chrysolite: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',  // PRIMARY - Bright emerald green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
          vivid: '#22c55e',  // Brighter lime accent
        },
        // Gold accent
        gold: {
          50:  '#fdf8eb',
          100: '#f9edd1',
          200: '#f3dba3',
          300: '#e4c36e',
          400: '#d4a847',  // PRIMARY GOLD
          500: '#c49530',
          600: '#b8902e',
          700: '#8f6d1f',
          800: '#664d15',
          900: '#3d2e0d',
        },
        // Electric accents for AI/tech features
        electric: {
          cyan: {
            50:  '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',  // PRIMARY - Electric cyan
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
          },
          purple: {
            50:  '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',  // PRIMARY - Electric purple
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
          },
        },
        // Surface — neutral grays (updated for modern feel)
        surface: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'chrysolite': '0 0 20px rgba(16, 185, 129, 0.3)',
        'chrysolite-lg': '0 0 40px rgba(16, 185, 129, 0.2)',
        'gold': '0 0 15px rgba(212, 168, 71, 0.25)',
        'electric-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'electric-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
