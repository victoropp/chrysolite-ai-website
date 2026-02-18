import { NextResponse } from 'next/server'
import { getContacts } from '@/lib/db'

function csvCell(val: string | number | null | undefined): string {
  const s = String(val ?? '')
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`
  }
  return s
}

export async function GET() {
  const rows = await getContacts()

  const headers = ['ID', 'Date', 'Name', 'Email', 'Company', 'Phone', 'Subject', 'Message']

  const csvLines = [
    headers.join(','),
    ...rows.map((r) =>
      [r.id, r.created_at, r.name, r.email, r.company, r.phone, r.subject, r.message]
        .map(csvCell)
        .join(',')
    ),
  ]

  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse('\uFEFF' + csvLines.join('\r\n'), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="contacts-${date}.csv"`,
    },
  })
}
