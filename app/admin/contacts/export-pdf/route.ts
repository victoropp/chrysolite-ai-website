import { NextResponse } from 'next/server'
import PDFDocument from 'pdfkit'
import { getContacts } from '@/lib/db'

const CYAN   = '#06b6d4'
const PURPLE = '#a855f7'

const COLS = [
  { label: 'Date',    width: 85  },
  { label: 'Name',    width: 110 },
  { label: 'Email',   width: 155 },
  { label: 'Company', width: 120 },
  { label: 'Subject', width: 85  },
  { label: 'Message', width: 207 },
]
// Total: 762 — fits inside landscape A4 content width (841 − 80 margin = 761)

const MARGIN   = 40
const ROW_H    = 16
const HEADER_H = 55
const TABLE_Y  = 85

const subjectLabel: Record<string, string> = {
  sales:       'Sales',
  support:     'Support',
  partnership: 'Partnership',
  other:       'Other',
}

export async function GET() {
  const rows = await getContacts()

  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margin: MARGIN,
    info: { Title: 'Chrysolite AI — Contact Submissions', Author: 'Chrysolite AI Admin' },
  })

  const chunks: Buffer[] = []
  doc.on('data', (c: Buffer) => chunks.push(c))
  const done = new Promise<Buffer>((resolve) => doc.on('end', () => resolve(Buffer.concat(chunks))))

  const W = doc.page.width

  // ── Stats ─────────────────────────────────────────────────────────────────
  const now = new Date()
  const thisMonth = rows.filter((r) => {
    const d = new Date(r.created_at)
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
  }).length
  const monday = new Date(now)
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7))
  monday.setHours(0, 0, 0, 0)
  const thisWeek = rows.filter((r) => new Date(r.created_at) >= monday).length

  // ── Helpers ───────────────────────────────────────────────────────────────
  function drawPageHeader() {
    const grad = doc.linearGradient(0, 0, W, 0)
    grad.stop(0, CYAN)
    grad.stop(1, PURPLE)
    doc.rect(0, 0, W, HEADER_H).fill(grad)

    doc.fill('white').font('Helvetica-Bold').fontSize(16)
      .text('Chrysolite AI', MARGIN, 12, { lineBreak: false })

    doc.font('Helvetica').fontSize(9).fill('rgba(255,255,255,0.8)')
      .text('Contact Submissions Report', MARGIN, 33, { lineBreak: false })

    const dateStr = new Date().toLocaleString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
    doc.fontSize(7.5).fill('rgba(255,255,255,0.7)')
      .text(`${rows.length} records · ${dateStr}`, MARGIN, 15, {
        width: W - MARGIN * 2, align: 'right', lineBreak: false,
      })
  }

  function drawTableHeader(y: number): number {
    const TH = ROW_H + 4
    doc.rect(MARGIN, y, W - MARGIN * 2, TH).fill('#f3f4f6')
    doc.strokeColor('#e5e7eb').lineWidth(0.5)
      .moveTo(MARGIN, y + TH).lineTo(W - MARGIN, y + TH).stroke()

    doc.fill('#6b7280').font('Helvetica-Bold').fontSize(6.5)
    let x = MARGIN
    for (const col of COLS) {
      doc.text(col.label.toUpperCase(), x + 4, y + 6, {
        width: col.width - 8, lineBreak: false, ellipsis: true,
      })
      x += col.width
    }
    return y + TH
  }

  function drawFooter() {
    doc.fill('#9ca3af').font('Helvetica').fontSize(6.5)
      .text('Chrysolite AI · Confidential', MARGIN, doc.page.height - 25, {
        width: W - MARGIN * 2, align: 'center', lineBreak: false,
      })
  }

  // ── First page ────────────────────────────────────────────────────────────
  drawPageHeader()

  doc.fill('#374151').font('Helvetica').fontSize(8)
    .text(
      `Total: ${rows.length}   ·   This month: ${thisMonth}   ·   This week: ${thisWeek}`,
      MARGIN, HEADER_H + 8, { lineBreak: false }
    )

  let y = drawTableHeader(TABLE_Y)

  // ── Rows ──────────────────────────────────────────────────────────────────
  rows.forEach((row, i) => {
    if (y + ROW_H > doc.page.height - 45) {
      drawFooter()
      doc.addPage()
      drawPageHeader()
      y = drawTableHeader(TABLE_Y - 10)
    }

    if (i % 2 === 0) {
      doc.rect(MARGIN, y, W - MARGIN * 2, ROW_H).fill('#f9fafb')
    }

    const values = [
      new Date(row.created_at).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric',
      }),
      row.name,
      row.email,
      row.company,
      subjectLabel[row.subject] ?? row.subject,
      row.message,
    ]

    doc.fill('#1f2937').font('Helvetica').fontSize(7)
    let x = MARGIN
    values.forEach((val, j) => {
      doc.text(val, x + 4, y + 4, {
        width: COLS[j].width - 8, lineBreak: false, ellipsis: true,
      })
      x += COLS[j].width
    })

    doc.strokeColor('#e5e7eb').lineWidth(0.3)
      .moveTo(MARGIN, y + ROW_H).lineTo(W - MARGIN, y + ROW_H).stroke()

    y += ROW_H
  })

  drawFooter()
  doc.end()

  const buffer = await done
  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="contacts-${date}.pdf"`,
    },
  })
}
