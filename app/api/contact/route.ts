import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmails, type ContactData } from '@/lib/email'
import { insertContact } from '@/lib/db'

// ─── Rate limiter (per-instance, best-effort in serverless) ──────────────────
const contactSubmissions = new Map<string, { count: number; resetAt: number }>()
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_SUBMISSIONS = 5

function getClientIP(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = contactSubmissions.get(ip)
  if (!record || now > record.resetAt) {
    contactSubmissions.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (record.count >= MAX_SUBMISSIONS) return true
  record.count++
  return false
}

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit check
  const ip = getClientIP(req)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, company, phone, subject, message } = body as Record<string, string>

  if (!name?.trim() || !email?.trim() || !company?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Field length limits to prevent oversized payload abuse
  if (name.trim().length > 200) {
    return NextResponse.json({ error: 'Name is too long' }, { status: 400 })
  }
  if (email.trim().length > 254) {
    return NextResponse.json({ error: 'Email is too long' }, { status: 400 })
  }
  if (company.trim().length > 200) {
    return NextResponse.json({ error: 'Company name is too long' }, { status: 400 })
  }
  if (phone && phone.trim().length > 30) {
    return NextResponse.json({ error: 'Phone number is too long' }, { status: 400 })
  }
  if (message.trim().length > 5000) {
    return NextResponse.json({ error: 'Message is too long (max 5000 characters)' }, { status: 400 })
  }

  const data: ContactData = {
    name:    name.trim(),
    email:   email.trim(),
    company: company.trim(),
    phone:   phone?.trim() || undefined,
    subject: subject?.trim() || 'other',
    message: message.trim(),
  }

  try {
    await sendContactEmails(data)
  } catch (err) {
    console.error('Failed to send contact emails:', err)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }

  // Save to DB — non-blocking so a DB issue doesn't break form submission
  insertContact(data).catch((err) => console.error('Failed to save contact to DB:', err))

  return NextResponse.json({ success: true })
}
