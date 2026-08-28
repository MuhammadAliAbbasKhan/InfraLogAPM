// src/pages/SecurityPage.jsx
import React from 'react';
import { ShieldAlert, Lock, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityPage() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Hero */}
      <section style={{
        backgroundColor: "#0F172A",
        color: "#ffffff",
        padding: "60px 20px 80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "20px",
            backgroundColor: "rgba(225, 29, 72, 0.2)",
            color: "#fda4af",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(225, 29, 72, 0.3)"
          }}>
            <ShieldAlert size={16} />
            <span>Cloud SIEM & Real-Time Runtime Threat Protection</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Outpace Attackers from Prevention to Remediation
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Unify security posture management, workload protection, and SIEM event detection on a single telemetry platform.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#e11d48",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start Cloud SIEM Trial
            </Link>
            <Link to="/docs" style={{
              padding: "14px 32px",
              border: "2px solid #ffffff",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Security Rules Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px"
        }}>
          <div style={{
            padding: "30px",
            borderRadius: "8px",
            border: "1px solid #e5e5e5",
            backgroundColor: "#fafafa"
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#ffe4e6",
              color: "#e11d48",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Cloud Workload Protection
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Detect privilege escalation, shell spawns in production containers, and unauthorized file modifications with eBPF probes.
            </p>
          </div>

          <div style={{
            padding: "30px",
            borderRadius: "8px",
            border: "1px solid #e5e5e5",
            backgroundColor: "#fafafa"
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#ffe4e6",
              color: "#e11d48",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <AlertTriangle size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Automated SIEM Detection Rules
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Evaluate cloud audit logs, VPC flow logs, and application events against 400+ out-of-the-box threat detection rules.
            </p>
          </div>

          <div style={{
            padding: "30px",
            borderRadius: "8px",
            border: "1px solid #e5e5e5",
            backgroundColor: "#fafafa"
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#ffe4e6",
              color: "#e11d48",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Posture Management (CSPM)
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Continuously audit AWS, Azure, and GCP IAM permissions, public storage buckets, and Kubernetes CIS benchmarks.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
