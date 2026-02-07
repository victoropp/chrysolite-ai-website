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
        // Primary — Chrysolite gemstone
        chrysolite: {
          50:  '#f2f7e9',
          100: '#e2eecf',
          200: '#c5dda0',
          300: '#a8cc71',
          400: '#9dbe54',
          500: '#84a63c',  // PRIMARY
          600: '#6b8a2a',
          700: '#526b20',
          800: '#3a4d17',
          900: '#22300e',
          950: '#111a08',
          vivid: '#a4cc3c',
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
        // Surface — green-tinted neutrals (dark mode)
        surface: {
          50:  '#f0f5f0',
          100: '#dae8da',
          200: '#b5cfb5',
          300: '#8fb08f',
          400: '#6a8f6a',
          500: '#4a6b4a',
          600: '#2e4530',
          700: '#243524',
          800: '#1a2a1a',
          900: '#111a11',
          950: '#0a0f0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'chrysolite': '0 0 20px rgba(132, 166, 60, 0.3)',
        'chrysolite-lg': '0 0 40px rgba(132, 166, 60, 0.2)',
        'gold': '0 0 15px rgba(212, 168, 71, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
