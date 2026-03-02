# Data Classification Policy

**Document ID:** ISMS-POL-14
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To establish a consistent framework for classifying Chrysolite AI information based on its sensitivity, ensuring appropriate controls are applied to protect it throughout its lifecycle. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.12–A.5.13.

---

## 2. Scope

All information created, received, processed, or stored by Chrysolite AI, regardless of format (digital, printed, verbal).

---

## 3. Classification Levels

### Level 1 — Public

**Definition:** Information that is approved for public release and presents no risk if disclosed.

**Examples:**
- Marketing materials, press releases, blog posts
- Product documentation and public API documentation
- Job postings
- Public website content

**Controls:**
- No special handling required
- May be shared freely externally

---

### Level 2 — Internal

**Definition:** Information intended for internal use only. Unauthorised disclosure could cause minor embarrassment or operational disruption but would not cause material harm.

**Examples:**
- Internal process documentation
- Meeting notes (non-sensitive topics)
- General business correspondence
- IT asset inventories

**Controls:**
- Do not share externally without approval
- Store in company-approved systems only
- Do not send to personal email accounts
- Dispose of securely (cross-cut shredding / secure deletion)

---

### Level 3 — Confidential

**Definition:** Sensitive business information whose unauthorised disclosure could cause significant harm to Chrysolite AI, its customers, or its partners — financial loss, reputational damage, competitive disadvantage, or regulatory breach.

**Examples:**
- Customer data (names, contact details, company information)
- Financial data, forecasts, pricing models
- Source code and proprietary algorithms
- Security configurations, penetration test reports, vulnerability data
- Employee personal data (salary, performance reviews, HR records)
- Business strategy, M&A plans, product roadmap
- Partner agreements, contracts, NDAs

**Controls:**
- Restricted to named individuals with a business need
- Must be encrypted in transit (TLS) and at rest (AES-256)
- Must not be stored on personal devices unless via approved MDM
- Must not be shared with third parties without NDA and CISO approval
- Must not be sent via unencrypted email; use encrypted channel or secure file share
- Printed copies must be collected immediately and shredded when done
- Disposal: secure deletion (cryptographic erasure) or certified physical destruction

---

### Level 4 — Restricted

**Definition:** The most sensitive category. Unauthorised disclosure would cause severe, potentially irreversible harm including regulatory enforcement, major financial penalties, or criminal liability.

**Examples:**
- Personal data revealing health, biometric, or other special category data (under GDPR Article 9)
- Authentication secrets (passwords, private keys, API keys)
- Active security incident details and investigation data
- Legal advice subject to privilege
- Regulatory investigation correspondence
- Individual financial account data (if processed)

**Controls:**
- Access on strict need-to-know basis; CISO approval required for access changes
- Must be encrypted at rest and in transit; encryption keys separately secured
- Must not be transmitted by email under any circumstances; use end-to-end encrypted secure channel
- Must never be stored in version control, code, or unencrypted notes
- Audit log of all access events
- Physical: printed only where absolutely necessary; immediate collection and destruction
- Disposal: certified physical destruction and written confirmation

---

## 4. Labelling

Information assets should be labelled with their classification wherever practical:

| Format | Labelling Method |
|--------|----------------|
| Documents | Header/footer: "PUBLIC / INTERNAL / CONFIDENTIAL / RESTRICTED" |
| Emails | Subject line prefix: `[CONFIDENTIAL]` or `[RESTRICTED]` where applicable |
| Code / config | Comments noting classification of sensitive values |
| Databases | Table/column documentation in schema noting data classification |
| File shares | Folder naming convention and access controls reflecting classification |

Verbal communications: speakers should indicate when discussing Confidential or Restricted information ("What I'm about to share is confidential — please do not repeat outside this meeting").

---

## 5. Handling Customer Data

All data provided by customers or processed on their behalf is classified as **Confidential** at minimum, regardless of its apparent sensitivity. If the data falls into a special category (health data, financial account details), it is **Restricted**.

Customer data must:

- Be processed only for the purposes set out in the customer contract and privacy policy
- Never be used for Chrysolite AI's own commercial purposes without explicit consent
- Be deleted or returned to the customer upon contract termination per agreed terms
- Not be shared with any third party without customer consent and a valid legal basis

---

## 6. Classification Review

When handling existing information assets, if the classification is unclear or has changed:

- The Asset Owner is responsible for reviewing and updating the classification
- Reclassification must be approved by the CISO if moving between Confidential and Restricted
- The Asset Register must be updated to reflect any reclassification

---

## 7. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
