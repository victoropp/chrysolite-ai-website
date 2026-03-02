# Business Continuity Policy

**Document ID:** ISMS-POL-10
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / COO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure Chrysolite AI can continue delivering its core services and protect customer data during and after significant disruptions. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.29–A.5.30.

---

## 2. Scope

All Chrysolite AI business processes, systems, and personnel critical to the delivery of the Chrysolite AI ERP platform and associated services.

---

## 3. Business Impact Analysis

### 3.1 Critical Services

The following services are designated **Mission Critical** and must be recovered within defined timeframes:

| Service | Recovery Time Objective (RTO) | Recovery Point Objective (RPO) | Dependencies |
|---------|-------------------------------|-------------------------------|--------------|
| Chrysolite AI ERP platform | 4 hours | 1 hour | Vercel, Neon, Resend |
| chrysoliteai.com website | 2 hours | 24 hours | Vercel |
| Customer data database | 1 hour | 15 minutes | Neon (point-in-time recovery) |
| Email / communications | 4 hours | N/A | Resend, backup SMTP |
| Internal source code repository | 8 hours | 0 (version controlled) | GitHub |

### 3.2 Maximum Tolerable Downtime

| Service Category | Maximum Tolerable Downtime |
|-----------------|---------------------------|
| Customer-facing ERP | 8 hours |
| Marketing website | 48 hours |
| Internal development tools | 72 hours |

---

## 4. Business Continuity Plan (BCP)

### 4.1 Invocation

The BCP is invoked by the CEO or CISO when:

- Any Mission Critical service is disrupted beyond its RTO
- A significant security incident affects service availability
- A major external event (natural disaster, infrastructure provider outage) affects operations

### 4.2 BCP Response Team

| Role | Primary | Backup |
|------|---------|--------|
| Incident Commander | CISO | CEO |
| Technical Lead | Head of Engineering | Senior Engineer |
| Communications Lead | CEO / Marketing | CISO |
| Customer Relations | Account Manager | CEO |

### 4.3 Communication During Disruption

- Internal team: Designated messaging app (or phone tree if primary comms unavailable)
- Customers: Email notification + status page update within 30 minutes of BCP invocation
- Status page: status.chrysoliteai.com (must be hosted independently of primary infrastructure)

---

## 5. Disaster Recovery Procedures

### 5.1 Infrastructure Provider Outage (Vercel)

1. Confirm outage via Vercel status page and support channels
2. Estimate duration from provider communications
3. If duration > 2 hours: activate Disaster Recovery deployment to backup region or alternate provider
4. Redirect DNS to backup deployment
5. Notify customers via status page and email

### 5.2 Database Failure (Neon)

1. Confirm via Neon status page
2. Engage Neon support for critical incidents
3. If unresolvable within RTO: restore from latest backup (point-in-time recovery)
4. Validate data integrity before restoring service
5. Communicate RPO gap to customers if applicable

### 5.3 Complete Infrastructure Loss

In the event of a catastrophic, multi-provider failure:

1. Activate BCP team
2. Deploy minimum viable services from documented recovery runbook
3. Restore database from offsite backup (encrypted backup stored in separate geographic region)
4. Communicate with customers through backup communication channels (email list, social media)

---

## 6. Testing and Exercises

| Activity | Frequency | Responsible |
|----------|-----------|-------------|
| Database restore test | Quarterly | Head of Engineering |
| Tabletop exercise (simulate major incident) | Annual | CISO |
| Full BCP drill | Annual | CISO + COO |
| Review and update BCP | Annual or after any real invocation | CISO |

All test results must be documented. Failures or gaps identified during testing must generate action items with owners and deadlines.

---

## 7. Dependencies and Single Points of Failure

| Dependency | Risk | Mitigation |
|-----------|------|------------|
| Single cloud provider (Vercel) | Provider outage stops service | Multi-region deployment; documented failover to alternate provider |
| Single database provider (Neon) | Provider outage; data loss | Neon point-in-time recovery; daily encrypted backups to separate provider |
| Single email provider (Resend) | Email delivery failure | Backup SMTP provider pre-configured; DNS failover |
| Key personnel (CISO, Head of Engineering) | Knowledge/access loss | Runbooks documented; access details held in secure escrow |

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
