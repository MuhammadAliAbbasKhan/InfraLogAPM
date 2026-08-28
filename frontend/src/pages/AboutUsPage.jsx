// src/pages/AboutUsPage.jsx
import React from 'react';
import { Activity, ShieldCheck, Users, Globe, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff", color: "#1a1a1a" }}>
      
      {/* About Hero */}
      <section style={{
        backgroundColor: "#0d0925",
        color: "#ffffff",
        padding: "60px 20px 80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "20px",
            backgroundColor: "rgba(99, 44, 166, 0.3)",
            color: "#c084fc",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px"
          }}>
            ⚡ About InfraLogAPM Inc.
          </span>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Pioneering AI-Powered Cloud Observability & Security
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            InfraLogAPM (infralogapm.com) provides real-time telemetry processing across hosts, Kubernetes clusters, microservice APM traces, and cloud SIEM security events for enterprise engineering teams worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "60px"
        }}>
          <div style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "42px", fontWeight: "800", color: "#632ca6", marginBottom: "8px" }}>14.5M+</div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: "#111827" }}>Telemetry Events / Sec</div>
            <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Sub-second global processing speed</p>
          </div>

          <div style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "42px", fontWeight: "800", color: "#632ca6", marginBottom: "8px" }}>600+</div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: "#111827" }}>Turn-Key Integrations</div>
            <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>AWS, GCP, Azure, K8s, Postgres</p>
          </div>

          <div style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "42px", fontWeight: "800", color: "#632ca6", marginBottom: "8px" }}>99.99%</div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: "#111827" }}>Platform Availability SLA</div>
            <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>SOC 2 Type II Certified</p>
          </div>
        </div>

        {/* Official Contact Info Box */}
        <div style={{
          backgroundColor: "#f3e8ff",
          border: "1px solid #c084fc",
          borderRadius: "12px",
          padding: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px"
        }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#3b0764", marginBottom: "12px" }}>
              InfraLogAPM Corporate HQ
            </h3>
            <p style={{ fontSize: "14px", color: "#581c87", lineHeight: "1.6", margin: "0" }}>
              <strong>Address:</strong> 620 8th Ave, Floor 42, New York, NY 10018, USA<br />
              <strong>Domain:</strong> infralogapm.com
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#3b0764", marginBottom: "12px" }}>
              Direct Inquiries
            </h3>
            <p style={{ fontSize: "14px", color: "#581c87", lineHeight: "1.6", margin: "0" }}>
              <strong>Support:</strong> <a href="mailto:support@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>support@infralogapm.com</a><br />
              <strong>Sales:</strong> <a href="mailto:sales@infralogapm.com" style={{ color: "#632ca6", fontWeight: "700" }}>sales@infralogapm.com</a><br />
              <strong>Phone:</strong> +1 (800) 883-9201
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
