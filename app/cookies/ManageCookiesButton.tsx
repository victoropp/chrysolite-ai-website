'use client'

import { SlidersHorizontal } from 'lucide-react'
import { openCookieSettings } from '@/components/CookieConsentBanner'

export default function ManageCookiesButton() {
  return (
    <button
      onClick={openCookieSettings}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-chrysolite-500/30 text-chrysolite-400 hover:text-chrysolite-300 hover:border-chrysolite-500/60 hover:bg-chrysolite-500/5 text-sm font-medium transition-all duration-150"
    >
      <SlidersHorizontal size={15} />
      Manage Cookie Preferences
    </button>
  )
}
