import { neon } from '@neondatabase/serverless'
import type { ContactData } from './email'

function sql() {
  const url = (process.env.DATABASE_URL ?? '').trim()
  if (!url) throw new Error('DATABASE_URL is not configured')
  return neon(url)
}

// ─── Schema (run once in Neon SQL editor) ────────────────────────────────────
// CREATE TABLE IF NOT EXISTS contacts (
//   id          SERIAL PRIMARY KEY,
//   created_at  TIMESTAMPTZ DEFAULT NOW(),
//   name        TEXT NOT NULL,
//   email       TEXT NOT NULL,
//   company     TEXT NOT NULL,
//   phone       TEXT,
//   subject     TEXT NOT NULL,
//   message     TEXT NOT NULL
// );

export async function insertContact(data: ContactData): Promise<void> {
  const db = sql()
  await db`
    INSERT INTO contacts (name, email, company, phone, subject, message)
    VALUES (
      ${data.name},
      ${data.email},
      ${data.company},
      ${data.phone ?? null},
      ${data.subject},
      ${data.message}
    )
  `
}

export interface ContactRow {
  id: number
  created_at: string
  name: string
  email: string
  company: string
  phone: string | null
  subject: string
  message: string
}

export async function getContacts(): Promise<ContactRow[]> {
  const db = sql()
  const rows = await db`SELECT * FROM contacts ORDER BY created_at DESC`
  return rows as ContactRow[]
}
