'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-surface-800 dark:bg-surface-800 border border-surface-700 dark:border-surface-700" />
    )
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-lg bg-surface-200 dark:bg-surface-800 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-surface-600 dark:text-surface-400 group-hover:text-chrysolite-500 dark:group-hover:text-chrysolite-400 transition-colors" />
      ) : (
        <Moon size={20} className="text-surface-600 dark:text-surface-400 group-hover:text-chrysolite-500 dark:group-hover:text-chrysolite-400 transition-colors" />
      )}
    </button>
  )
}
