# Communications Security Policy

**Document ID:** ISMS-POL-07
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To protect information in transit across networks and to govern information transfer between Chrysolite AI and external parties. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.14, A.8.20–A.8.23.

---

## 2. Scope

All internal and external networks used by Chrysolite AI, including corporate Wi-Fi, remote access, cloud connectivity, and all methods of transferring information with third parties.

---

## 3. Network Security

### 3.1 Network Segmentation

- Production infrastructure must be logically separated from development and corporate networks
- Public-facing services must be separated from internal management interfaces
- Administrative interfaces must not be exposed to the public internet

### 3.2 Wireless Networks

- Corporate Wi-Fi must use WPA3 or WPA2-AES (minimum) with a strong passphrase (24+ characters)
- Guest Wi-Fi must be isolated from corporate networks
- Public or untrusted Wi-Fi must not be used to access Chrysolite AI systems without a full-tunnel VPN
- WPS must be disabled on all access points

### 3.3 Firewall and Network Controls

- Firewall rules must follow a default-deny posture: all traffic is blocked unless explicitly permitted
- Firewall rules must be documented, reviewed, and approved by IT/CISO
- Unused ports and services must be disabled
- Network access control lists (ACLs) must restrict administrative access to known management IP ranges

---

## 4. Encryption in Transit

- All information transmitted over public or untrusted networks must be encrypted
- TLS 1.2 is the minimum; TLS 1.3 is preferred for all services (see Cryptography Policy ISMS-POL-04)
- Unencrypted protocols (HTTP, FTP, Telnet, plain SMTP) are prohibited for any service handling Chrysolite AI information
- Email must use STARTTLS or SMTPS; DKIM, SPF, and DMARC must be configured for the chrysoliteai.com domain

### 4.1 Email Security (DKIM / SPF / DMARC)

| Control | Requirement |
|---------|-------------|
| SPF | Published TXT record authorising Chrysolite AI mail senders only |
| DKIM | All outgoing email signed with 2048-bit RSA key |
| DMARC | Policy set to `quarantine` minimum; target `reject` |
| BIMI | Recommended after DMARC `reject` is stable |

---

## 5. Information Transfer

### 5.1 Approved Transfer Methods

| Transfer Type | Approved Method |
|--------------|----------------|
| Internal file sharing | Approved cloud storage (e.g., Google Drive, SharePoint with access control) |
| External file sharing | Secure link-sharing from approved platform; password-protected for sensitive data |
| Email attachments | Acceptable for non-sensitive; encrypted archive (AES-256 ZIP or PGP) required for sensitive |
| API data exchange | HTTPS with mutual authentication where applicable |
| Physical media transfer | Encrypted USB drives; courier with tracking for physical documents |

### 5.2 Prohibited Transfer Methods

- Transferring sensitive data via personal email accounts
- Using unapproved cloud storage (personal Dropbox, Google Drive personal account) for company data
- Unencrypted USB drives or physical media for sensitive data
- Messaging apps without end-to-end encryption for sensitive information
- Screenshot or photograph of sensitive data shared through unsecured channels

### 5.3 Non-Disclosure Agreements

- All third parties receiving access to Chrysolite AI confidential information must sign an NDA before disclosure
- NDA templates are maintained by Legal; deviations require Legal approval
- NDAs must be retained for the duration of the relationship plus 5 years

---

## 6. Confidentiality of Communications

- Sensitive business discussions (financial projections, M&A activity, unannounced product plans, customer identities) must not take place in publicly accessible areas or over unencrypted channels
- Communications on public transport, in coffee shops, or at conferences must assume they may be overheard
- Video calls discussing sensitive matters must confirm only authorised participants are present before starting

---

## 7. Monitoring of Communications

Chrysolite AI may monitor network traffic and communications on company-owned systems and networks for the purposes of security monitoring, incident investigation, and compliance. Employees are informed of this monitoring through their employment contract and the Acceptable Use Policy (ISMS-POL-13).

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
