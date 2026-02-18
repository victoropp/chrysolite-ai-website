import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export interface ContactData {
  name: string
  email: string
  company: string
  phone?: string
  subject: string
  message: string
}

const subjectLabels: Record<string, string> = {
  sales: 'Sales Inquiry',
  support: 'Technical Support',
  partnership: 'Partnership',
  other: 'Other',
}

function contactAdminHtml(data: ContactData): string {
  const rows = [
    ['Name',    esc(data.name)],
    ['Email',   esc(data.email)],
    ['Company', esc(data.company)],
    ...(data.phone ? [['Phone', esc(data.phone)]] : []),
    ['Subject', esc(subjectLabels[data.subject] ?? data.subject)],
    ['Message', esc(data.message).replace(/\n/g, '<br>')],
  ] as [string, string][]

  const tableRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 12px;background:#f8f9fa;font-weight:600;font-size:13px;color:#374151;border:1px solid #e5e7eb;white-space:nowrap;">${label}</td>
      <td style="padding:8px 12px;font-size:13px;color:#1f2937;border:1px solid #e5e7eb;">${value}</td>
    </tr>`).join('')

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#06b6d4,#a855f7);padding:28px 32px;">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.8);text-transform:uppercase;">Chrysolite AI</p>
      <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;">New Contact Enquiry</h1>
    </div>
    <div style="padding:28px 32px;">
      <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">A new enquiry has been submitted via the contact form:</p>
      <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;">${tableRows}</table>
      <div style="margin-top:24px;padding:16px;background:#f0fdf4;border-left:4px solid #10b981;border-radius:4px;">
        <p style="margin:0;font-size:13px;color:#15803d;font-weight:600;">Reply directly to this email to respond to ${esc(data.name)}.</p>
      </div>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:11px;color:#9ca3af;">Chrysolite AI · <a href="https://chrysoliteai.com" style="color:#10b981;text-decoration:none;">chrysoliteai.com</a></p>
    </div>
  </div>
</body></html>`
}

function contactConfirmationHtml(data: ContactData): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#06b6d4,#a855f7);padding:28px 32px;">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.8);text-transform:uppercase;">Chrysolite AI</p>
      <h1 style="margin:8px 0 4px;font-size:22px;font-weight:700;color:#ffffff;">We&rsquo;ve received your message</h1>
      <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.85);">We&rsquo;ll be in touch within 24 hours</p>
    </div>
    <div style="padding:28px 32px;">
      <p style="margin:0 0 16px;font-size:15px;color:#1f2937;">Hi ${esc(data.name)},</p>
      <p style="margin:0 0 24px;font-size:14px;color:#6b7280;line-height:1.6;">
        Thank you for reaching out to Chrysolite AI. We&rsquo;ve received your enquiry regarding <strong style="color:#1f2937;">${esc(subjectLabels[data.subject] ?? data.subject)}</strong> and a member of our team will respond within one business day.
      </p>
      <div style="padding:16px 20px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
        <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#15803d;">Need immediate help?</p>
        <p style="margin:0;font-size:13px;color:#166534;">Email us at <a href="mailto:hello@chrysoliteai.com" style="color:#15803d;">hello@chrysoliteai.com</a> or call <a href="tel:+447442852675" style="color:#15803d;">+44 7442 852675</a>.</p>
      </div>
    </div>
    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:11px;color:#9ca3af;">Chrysolite AI · <a href="https://chrysoliteai.com" style="color:#10b981;text-decoration:none;">chrysoliteai.com</a></p>
    </div>
  </div>
</body></html>`
}

export async function sendContactEmails(data: ContactData): Promise<void> {
  const adminTo = process.env.CONTACT_EMAIL_TO ?? 'hello@chrysoliteai.com'

  const [adminResult, userResult] = await Promise.all([
    resend.emails.send({
      from: 'Chrysolite AI <noreply@chrysoliteai.com>',
      to: adminTo,
      replyTo: data.email,
      subject: `New Enquiry: ${subjectLabels[data.subject] ?? data.subject} — ${data.name}`,
      html: contactAdminHtml(data),
    }),
    resend.emails.send({
      from: 'Chrysolite AI <noreply@chrysoliteai.com>',
      to: data.email,
      subject: `We've received your message — Chrysolite AI`,
      html: contactConfirmationHtml(data),
    }),
  ])

  if (adminResult.error) throw new Error(`Admin email failed: ${adminResult.error.message}`)
  if (userResult.error) throw new Error(`Confirmation email failed: ${userResult.error.message}`)
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

export async function sendNewsletterNotification(email: string): Promise<void> {
  const adminTo = process.env.CONTACT_EMAIL_TO ?? 'hello@chrysoliteai.com'

  const result = await resend.emails.send({
    from: 'Chrysolite AI <noreply@chrysoliteai.com>',
    to: adminTo,
    subject: `New Newsletter Subscriber — ${esc(email)}`,
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;">
  <div style="max-width:500px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#06b6d4,#a855f7);padding:20px 28px;">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.8);text-transform:uppercase;">Chrysolite AI</p>
      <h2 style="margin:6px 0 0;font-size:18px;font-weight:700;color:#fff;">New Newsletter Subscriber</h2>
    </div>
    <div style="padding:24px 28px;">
      <p style="margin:0;font-size:14px;color:#374151;"><strong>${esc(email)}</strong> has subscribed to the Chrysolite AI newsletter.</p>
    </div>
  </div>
</body></html>`,
  })

  if (result.error) throw new Error(`Newsletter notification failed: ${result.error.message}`)
}
