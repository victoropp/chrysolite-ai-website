import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmails, type ContactData } from '@/lib/email'
import { insertContact } from '@/lib/db'

export async function POST(req: NextRequest) {
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
