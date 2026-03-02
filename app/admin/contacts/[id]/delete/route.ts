import { NextRequest, NextResponse } from 'next/server'
import { deleteContact } from '@/lib/db'

/**
 * DELETE /admin/contacts/:id/delete
 *
 * GDPR Article 17 — right to erasure.
 * Permanently removes a contact record from the database.
 * Protected by middleware.ts — only authenticated admins can reach this route.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idStr } = await params
  const id = Number(idStr)

  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Invalid contact ID' }, { status: 400 })
  }

  try {
    await deleteContact(id)
    // Audit log — GDPR Article 17 requires accountability for erasure requests.
    console.log(JSON.stringify({
      event:     'gdpr.erasure',
      contactId: id,
      timestamp: new Date().toISOString(),
    }))
    return new NextResponse(null, { status: 204 })
  } catch (err) {
    console.error('Failed to delete contact:', err)
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 })
  }
}
