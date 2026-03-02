# Operations Security Policy

**Document ID:** ISMS-POL-06
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / Head of Engineering
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure that information processing facilities are operated securely, with proper documentation, change control, malware protection, logging, and vulnerability management. Aligned with ISO/IEC 27001:2022 Annex A controls A.8.9–A.8.23.

---

## 2. Scope

All production, staging, and development environments operated or used by Chrysolite AI, including cloud-hosted services, developer workstations, and CI/CD pipelines.

---

## 3. Documented Operating Procedures

All critical operational processes must be documented in a runbook or Standard Operating Procedure (SOP), including:

- Deployment procedures (including rollback)
- Database backup and restore
- Incident response activation steps
- Key rotation procedures
- Onboarding and offboarding IT procedures

Operating procedures must be reviewed annually and updated whenever significant changes occur. They must be accessible to all authorised personnel who need them.

---

## 4. Capacity Management

- System resource usage (CPU, memory, storage, bandwidth) is monitored continuously via cloud platform dashboards and alerting
- Capacity projections are reviewed quarterly
- Alert thresholds are set at 80% utilisation to allow proactive scaling before service degradation

---

## 5. Environment Separation

| Environment | Purpose | Contains Real Customer Data? | Access |
|-------------|---------|------------------------------|--------|
| Production | Live customer-facing systems | YES | Restricted; engineers via break-glass only |
| Staging | Pre-release testing | No (anonymised or synthetic data only) | Engineering team |
| Development | Local development | No | Individual developers |

**Strictly prohibited:**
- Using real customer data in non-production environments
- Deploying directly to production without passing staging
- Developer workstations with direct write access to production databases (except break-glass emergency access, which must be logged and reviewed)

---

## 6. Malware Protection

### 6.1 Endpoint Protection

- All company-managed devices must have endpoint detection and response (EDR) software installed, active, and up to date
- EDR definitions must auto-update; manual updates required within 24 hours if auto-update fails
- Real-time protection must be enabled at all times; disabling EDR requires CISO approval

### 6.2 Software Sources

- Software must be installed only from verified, official sources (official package registries, vendor websites)
- Cracked, pirated, or unverified software is strictly prohibited
- Open-source dependencies must be reviewed for known vulnerabilities before introduction (see Vulnerability Management Policy ISMS-POL-16)

---

## 7. Logging and Monitoring

### 7.1 What Must Be Logged

| Event Category | Minimum Log Content | Retention |
|---------------|---------------------|-----------|
| Authentication events | User, timestamp, source IP, success/failure | 12 months |
| Privileged access | User, action, system, timestamp | 12 months |
| Admin operations (data access, export, delete) | User, action, record affected, timestamp | 12 months |
| API requests | Method, endpoint, status code, source IP, timestamp | 90 days |
| Security events (blocked requests, rate limits) | Source IP, event type, timestamp | 12 months |
| System errors | Service, error type, stack trace (server-side only) | 90 days |

### 7.2 Log Integrity

- Logs must be stored in a location separate from the systems generating them
- Log tampering must be technically prevented or detected
- Logs must not contain sensitive personal data (passwords, payment card numbers, full PII where avoidable)

### 7.3 Log Review

- Automated alerts must be configured for: repeated authentication failures, unusual access patterns, privilege escalation, large data exports, and system errors
- Security logs must be reviewed at minimum weekly by the CISO or delegated security engineer
- Alerts indicating potential incidents must be triaged within 1 hour (see Incident Management Policy ISMS-POL-09)

---

## 8. Clock Synchronisation

All servers and systems must synchronise their clocks to a reliable NTP source (UTC). Clock drift greater than 1 second must be investigated. Accurate timestamps are essential for log correlation during incidents.

---

## 9. Backup and Recovery

| Asset | Backup Frequency | Retention | Restore Test Frequency |
|-------|-----------------|-----------|------------------------|
| Production database (Neon) | Daily (automated by Neon) | 7 days (point-in-time) | Quarterly |
| Source code (GitHub) | Continuous (version control) | Permanent | N/A |
| Configuration / secrets | Documented in secure notes with CISO | On change | After any secret rotation |

- Backups must be encrypted at rest (AES-256)
- Backup restoration must be tested at minimum quarterly; results documented
- Backups must be stored in a separate geographic region from primary systems where feasible

---

## 10. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
