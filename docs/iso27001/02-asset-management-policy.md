# Asset Management Policy

**Document ID:** ISMS-POL-02
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure all information assets are identified, owned, classified, and protected appropriately throughout their lifecycle, in accordance with ISO/IEC 27001:2022 Annex A controls A.5.9 through A.5.12.

---

## 2. Scope

All information assets owned, leased, or used by Chrysolite AI, including hardware, software, data, services, and personnel.

---

## 3. Asset Inventory

### 3.1 Requirement

Chrysolite AI shall maintain a comprehensive Asset Inventory (Register) of all information assets. The inventory is owned by the CISO and reviewed quarterly.

### 3.2 Asset Categories

| Category | Examples |
|----------|---------|
| **Data / Information** | Customer data, employee records, source code, financial records, contracts |
| **Software** | Production applications, development tools, SaaS subscriptions, operating systems |
| **Hardware** | Laptops, servers, mobile devices, network equipment |
| **Services** | Cloud hosting (Vercel), database (Neon), email (Resend), CI/CD pipelines |
| **Facilities** | Office premises, data centre co-location (if applicable) |
| **People** | Staff and contractors with access to sensitive information |

### 3.3 Asset Register Fields

Each asset entry must record:

- Unique Asset ID
- Asset name and description
- Category
- Owner (named individual or team)
- Classification level (see Data Classification Policy ISMS-POL-14)
- Location (physical or logical)
- Date added / last reviewed
- Disposal method (when decommissioned)

---

## 4. Asset Ownership

Every asset must have a named **Asset Owner** who is responsible for:

- Ensuring the asset is appropriately classified
- Ensuring appropriate access controls are applied
- Approving changes to the asset
- Ensuring secure disposal when the asset reaches end of life

Asset ownership transfers with role changes. HR must notify the CISO of any role change or departure that affects asset ownership within 2 business days.

---

## 5. Acceptable Use of Assets

All assets must be used in accordance with the Acceptable Use Policy (ISMS-POL-13). Assets are provided for business purposes. Personal use is permitted only where it does not compromise security, performance, or compliance.

---

## 6. Return of Assets

Upon termination of employment or contract, all Chrysolite AI assets must be returned on or before the last day of engagement. This includes:

- Company-issued hardware (laptops, phones, security tokens)
- Physical access credentials (keys, access cards)
- Any printed or physical copies of Chrysolite AI information

HR is responsible for ensuring asset return is confirmed before final payroll processing.

---

## 7. Secure Disposal

Assets must be disposed of securely to prevent information leakage:

| Asset Type | Disposal Method |
|------------|----------------|
| Hard drives / SSDs | Cryptographic erasure (AES-256) or physical destruction via certified provider |
| Laptops / Desktops | Factory reset + BIOS/firmware reset; certification of destruction if hardware is damaged |
| Mobile devices | Remote wipe via MDM before physical disposal |
| Paper records | Cross-cut shredding (DIN 66399 Level P-4 or higher) |
| Cloud accounts / SaaS | Formal offboarding and access revocation; data export and deletion per retention policy |
| USB drives / media | Physical destruction; no reuse of media containing confidential data |

A disposal certificate must be obtained from external destruction providers and retained for 5 years.

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
