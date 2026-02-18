import { NextRequest, NextResponse } from 'next/server'
import { sendNewsletterNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { email } = body as Record<string, string>

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 })
  }

  try {
    await sendNewsletterNotification(email.trim())
  } catch (err) {
    console.error('Newsletter notification failed:', err)
    // Non-blocking — still return success so the user experience isn't broken
  }

  return NextResponse.json({ success: true })
}
