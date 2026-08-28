// src/pages/TermsPage.jsx
import React from 'react';

export default function TermsPage() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff", color: "#1a1a1a" }}>
      
      {/* Hero */}
      <section style={{
        backgroundColor: "#0d0925",
        color: "#ffffff",
        padding: "50px 20px 60px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "40px",
            fontWeight: "800",
            marginBottom: "16px",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            InfraLogAPM Terms of Service
          </h1>
          <p style={{ fontSize: "16px", color: "#cbd5e1" }}>
            Effective Date: January 1, 2026 | Domain: infralogapm.com
          </p>
        </div>
      </section>

      {/* Terms Body */}
      <section style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px", lineHeight: "1.7", color: "#374151" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          1. Acceptance of Terms
        </h2>
        <p style={{ marginBottom: "24px" }}>
          By creating an account or subscribing to InfraLogAPM services ($100 Starter, $200 Pro, or $300 Enterprise), you agree to be bound by these Terms of Service between your entity and InfraLogAPM Inc.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          2. Subscription Billing & Stripe Processing
        </h2>
        <p style={{ marginBottom: "24px" }}>
          Subscriptions automatically renew on a monthly or annual billing cycle. Payments are processed securely via Stripe. You may cancel your subscription at any time by contacting <a href="mailto:sales@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>sales@infralogapm.com</a>.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          3. Platform Availability & SLA
        </h2>
        <p style={{ marginBottom: "24px" }}>
          InfraLogAPM commits to a 99.99% operational uptime SLA for telemetry ingestion endpoints.
        </p>

        <div style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "40px"
        }}>
          <strong>Legal & Support Address:</strong><br />
          InfraLogAPM Inc. | 620 8th Ave, Floor 42, New York, NY 10018, USA<br />
          Support Email: <a href="mailto:support@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>support@infralogapm.com</a><br />
          Sales Email: <a href="mailto:sales@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>sales@infralogapm.com</a>
        </div>
      </section>

    </div>
  );
}
