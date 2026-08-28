// src/pages/PrivacyPage.jsx
import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
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
            InfraLogAPM Privacy Policy
          </h1>
          <p style={{ fontSize: "16px", color: "#cbd5e1" }}>
            Effective Date: January 1, 2026 | Last Updated: August 28, 2026
          </p>
        </div>
      </section>

      {/* Main Privacy Body */}
      <section style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px", lineHeight: "1.7", color: "#374151" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          1. Data Collection & Telemetry Ingestion
        </h2>
        <p style={{ marginBottom: "24px" }}>
          InfraLogAPM Inc. ("infralogapm.com", "we", "us", or "our") collects application performance telemetry metrics, log lines, APM traces, and agent system performance data exclusively to provide monitoring and security services to our enterprise customers.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          2. Edge Sensitive Data Redaction
        </h2>
        <p style={{ marginBottom: "24px" }}>
          Our Sensitive Data Scanner automatically inspects log streams at the agent edge to redact Personally Identifiable Information (PII), credit card primary account numbers, and API authentication tokens before data is transmitted to our cloud backend.
        </p>

        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          3. Contact Information & Privacy Inquiries
        </h2>
        <p style={{ marginBottom: "24px" }}>
          For GDPR Data Subject Requests, CCPA opt-outs, or privacy inquiries regarding InfraLogAPM services, please contact our Data Protection Officer at:
        </p>

        <div style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "40px"
        }}>
          <strong>InfraLogAPM Privacy Office</strong><br />
          Email: <a href="mailto:support@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>support@infralogapm.com</a><br />
          Phone: +1 (800) 883-9201<br />
          Address: 620 8th Ave, Floor 42, New York, NY 10018, USA
        </div>
      </section>

    </div>
  );
}
