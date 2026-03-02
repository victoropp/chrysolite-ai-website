'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Cookie, Shield, Settings2, BarChart3, Megaphone, ChevronDown, ChevronUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ConsentChoices {
  essential:     true
  functionality: boolean
  analytics:     boolean
  marketing:     boolean
}

interface ConsentRecord {
  version:   string
  timestamp: number
  choices:   ConsentChoices
}

// ─── Storage ──────────────────────────────────────────────────────────────────

const CONSENT_KEY     = 'chrysolite-cookie-consent'
const CONSENT_VERSION = '1' // bump whenever you add a new category

function readStored(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed: ConsentRecord = JSON.parse(raw)
    // Re-prompt the visitor if the policy version changed
    return parsed.version === CONSENT_VERSION ? parsed : null
  } catch {
    return null
  }
}

function persist(choices: ConsentChoices): void {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ version: CONSENT_VERSION, timestamp: Date.now(), choices }),
  )
}

// ─── Public helpers (import these wherever you need to gate scripts) ──────────

/** Returns true only if the user has accepted the given category. SSR-safe. */
export function hasConsent(category: keyof ConsentChoices): boolean {
  if (typeof window === 'undefined') return false
  return readStored()?.choices[category] ?? false
}

/** Dispatches a custom event that re-opens the banner. Use from the footer. */
export const OPEN_SETTINGS_EVENT = 'chrysolite:open-cookie-settings'
export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))
}

// ─── Category definitions ─────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id:          'essential' as const,
    label:       'Essential',
    Icon:        Shield,
    description: 'Required for the site to function — security, session management, and core features. Cannot be disabled.',
    locked:      true,
    cookies: [
      { name: 'chrysolite_erp_admin', purpose: 'Admin session token (httpOnly, only set on admin login)', lifetime: '8 hours' },
    ],
  },
  {
    id:          'functionality' as const,
    label:       'Functionality',
    Icon:        Settings2,
    description: 'Remembers your preferences, such as dark or light mode, for a consistent experience across visits.',
    locked:      false,
    cookies: [
      { name: 'chrysolite-theme', purpose: 'Stores your theme preference in localStorage — never sent to any server', lifetime: 'Persistent' },
    ],
  },
  {
    id:          'analytics' as const,
    label:       'Analytics',
    Icon:        BarChart3,
    description: 'Helps us understand how visitors use the site so we can improve it. No personally identifiable data is shared.',
    locked:      false,
    cookies: [
      { name: '—', purpose: 'Not currently active. Reserved for future privacy-first analytics.', lifetime: '—' },
    ],
  },
  {
    id:          'marketing' as const,
    label:       'Marketing',
    Icon:        Megaphone,
    description: 'Used to personalise ads and measure campaign effectiveness. Not currently active.',
    locked:      false,
    cookies: [
      { name: '—', purpose: 'Not currently active.', lifetime: '—' },
    ],
  },
] as const

type ToggleableId = 'functionality' | 'analytics' | 'marketing'

// ─── Toggle switch ─────────────────────────────────────────────────────────────

function Toggle({
  checked, onChange, disabled, label,
}: {
  checked: boolean
  onChange: () => void
  disabled?: boolean
  label: string
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={disabled ? undefined : onChange}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'relative inline-flex h-[22px] w-10 shrink-0 items-center rounded-full',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chrysolite-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950',
        checked
          ? disabled ? 'bg-chrysolite-700' : 'bg-chrysolite-500'
          : 'bg-surface-700',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:opacity-90',
      )}
    >
      <span
        className={cn(
          'block h-[14px] w-[14px] rounded-full bg-white shadow transition-transform duration-200',
          checked ? 'translate-x-5' : 'translate-x-1',
        )}
      />
    </button>
  )
}

// ─── Banner ────────────────────────────────────────────────────────────────────

export default function CookieConsentBanner() {
  const prefersReducedMotion = useReducedMotion()

  // undefined = not yet hydrated (avoid SSR flash)
  const [visible,  setVisible]  = useState<boolean | undefined>(undefined)
  const [expanded, setExpanded] = useState(false)
  const [choices,  setChoices]  = useState<Record<ToggleableId, boolean>>({
    functionality: true,
    analytics:     false,
    marketing:     false,
  })

  // Hydrate from localStorage; show banner only if no consent is stored
  useEffect(() => {
    const stored = readStored()
    if (stored) {
      setChoices({
        functionality: stored.choices.functionality,
        analytics:     stored.choices.analytics,
        marketing:     stored.choices.marketing,
      })
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [])

  // Re-open when footer "Cookie Preferences" is clicked
  useEffect(() => {
    const handler = () => {
      const stored = readStored()
      if (stored) {
        setChoices({
          functionality: stored.choices.functionality,
          analytics:     stored.choices.analytics,
          marketing:     stored.choices.marketing,
        })
      }
      setExpanded(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, handler)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler)
  }, [])

  const close = () => { setVisible(false); setExpanded(false) }

  const acceptAll = useCallback(() => {
    persist({ essential: true, functionality: true, analytics: true, marketing: true })
    close()
  }, [])

  const essentialOnly = useCallback(() => {
    persist({ essential: true, functionality: false, analytics: false, marketing: false })
    close()
  }, [])

  const savePreferences = useCallback(() => {
    persist({ essential: true, ...choices })
    close()
  }, [choices])

  const toggle = (id: ToggleableId) =>
    setChoices(prev => ({ ...prev, [id]: !prev[id] }))

  // Don't render anything until hydrated (avoids banner flash on pages where
  // consent was already given, and avoids SSR/CSR mismatch)
  if (visible === undefined || visible === false) return null

  const spring = { type: 'spring', stiffness: 420, damping: 38 } as const
  const noMotion = prefersReducedMotion

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-banner"
        initial={{ y: noMotion ? 0 : 80, opacity: noMotion ? 1 : 0 }}
        animate={{ y: 0, opacity: 1, transition: spring }}
        exit={{ y: noMotion ? 0 : 60, opacity: 0, transition: { duration: 0.18 } }}
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        className="fixed bottom-0 left-0 right-0 z-[9999]"
      >
        {/* Gradient top border */}
        <div className="h-px w-full bg-gradient-to-r from-chrysolite-500 via-electric-cyan-500 to-electric-purple-500" />

        <div className="bg-surface-950/[0.97] backdrop-blur-xl shadow-[0_-8px_40px_-4px_rgba(0,0,0,0.6)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Expanded: category toggles ─────────────────────────── */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="prefs-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1, transition: { duration: noMotion ? 0 : 0.22, ease: 'easeOut' } }}
                  exit={{ height: 0, opacity: 0, transition: { duration: noMotion ? 0 : 0.18, ease: 'easeIn' } }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 pb-1">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Cookie size={15} className="text-chrysolite-400" />
                        Manage cookie preferences
                      </h2>
                      <button
                        onClick={() => setExpanded(false)}
                        aria-label="Collapse preferences"
                        className="p-1.5 rounded-lg text-surface-500 hover:text-surface-300 hover:bg-surface-800/60 transition-colors"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-1">
                      {CATEGORIES.map((cat) => {
                        const isOn = cat.id === 'essential'
                          ? true
                          : choices[cat.id as ToggleableId]

                        return (
                          <div
                            key={cat.id}
                            className={cn(
                              'flex items-start gap-2.5 p-3 rounded-xl border transition-colors',
                              isOn
                                ? 'bg-surface-900/70 border-surface-700/60'
                                : 'bg-surface-900/40 border-surface-800/40',
                            )}
                          >
                            <cat.Icon
                              size={14}
                              className={cn(
                                'mt-0.5 shrink-0',
                                cat.id === 'essential' ? 'text-chrysolite-400' : 'text-surface-500',
                              )}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-xs font-semibold text-white">{cat.label}</span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  {cat.locked && (
                                    <span className="text-[9px] uppercase tracking-wide font-bold text-chrysolite-600">
                                      Always on
                                    </span>
                                  )}
                                  <Toggle
                                    checked={isOn}
                                    onChange={() => !cat.locked && toggle(cat.id as ToggleableId)}
                                    disabled={cat.locked}
                                    label={`Toggle ${cat.label} cookies`}
                                  />
                                </div>
                              </div>
                              <p className="text-[11px] leading-relaxed text-surface-500">
                                {cat.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Always-visible strip ───────────────────────────────── */}
            <div className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3">

              {/* Left: icon + message */}
              <div className="flex items-start gap-2.5 flex-1 min-w-0">
                <Cookie size={16} className="text-chrysolite-400 shrink-0 mt-0.5" />
                <p className="text-[13px] text-surface-400 leading-relaxed">
                  {expanded ? (
                    <>
                      Toggle categories below then save, or choose a quick option.{' '}
                      <a href="/cookies" className="text-chrysolite-400 hover:text-chrysolite-300 underline underline-offset-2 transition-colors">
                        Cookie Policy
                      </a>
                    </>
                  ) : (
                    <>
                      We use <span className="text-surface-200 font-medium">essential cookies</span> to operate this site, and optional cookies for functionality and analytics.{' '}
                      <a href="/cookies" className="text-chrysolite-400 hover:text-chrysolite-300 underline underline-offset-2 transition-colors whitespace-nowrap">
                        Cookie Policy
                      </a>
                    </>
                  )}
                </p>
              </div>

              {/* Right: action buttons */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    aria-expanded={false}
                    className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-surface-400 hover:text-surface-200 rounded-lg hover:bg-surface-800/50 transition-all"
                  >
                    Customise
                    <ChevronUp size={13} />
                  </button>
                )}

                <button
                  onClick={essentialOnly}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-surface-300 border border-surface-700 hover:border-surface-500 hover:text-white rounded-lg transition-all duration-150"
                >
                  Essential only
                </button>

                {expanded && (
                  <button
                    onClick={savePreferences}
                    className="px-3.5 py-1.5 text-[13px] font-medium text-surface-200 border border-surface-600 hover:border-chrysolite-500/40 hover:text-white rounded-lg transition-all duration-150"
                  >
                    Save preferences
                  </button>
                )}

                <button
                  onClick={acceptAll}
                  className={cn(
                    'px-3.5 py-1.5 text-[13px] font-semibold text-white rounded-lg transition-all duration-150',
                    'bg-gradient-to-r from-chrysolite-500 to-chrysolite-600',
                    'hover:from-chrysolite-400 hover:to-chrysolite-500',
                    'shadow-lg shadow-chrysolite-500/20 hover:shadow-chrysolite-500/35',
                  )}
                >
                  Accept all
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
