'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-surface-800 border border-surface-700" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-lg bg-surface-800 border border-surface-700 hover:border-chrysolite-500/50 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-surface-400 group-hover:text-chrysolite-400 transition-colors" />
      ) : (
        <Moon size={20} className="text-surface-400 group-hover:text-chrysolite-400 transition-colors" />
      )}
    </button>
  )
}
