// src/pages/LogManagementPage.jsx
import React, { useState } from 'react';
import { Database, Search, Filter, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogStreamModal from '../components/LogStreamModal';

export default function LogManagementPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Hero */}
      <section style={{
        backgroundColor: "#0A0718",
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
            backgroundColor: "rgba(99, 44, 166, 0.3)",
            color: "#c084fc",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px"
          }}>
            <Database size={16} />
            <span>FlexLogs Ingestion Architecture</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Unified Cloud Log Management Without Storage Limits
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Ingest, parse, index, and archive petabytes of application and infrastructure logs with sub-second search speed.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                padding: "14px 32px",
                backgroundColor: "#632ca6",
                color: "#ffffff",
                borderRadius: "4px",
                fontWeight: "700",
                fontSize: "15px",
                border: "none",
                cursor: "pointer"
              }}
            >
              ▶ Open Live Stream Console
            </button>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              border: "2px solid #ffffff",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Calculate Log Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
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
              backgroundColor: "#f3e8ff",
              color: "#632ca6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Search size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Live Log Rehydration
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Archive 100% of raw logs into cheap S3/GCS buckets and rehydrate specific time windows on-demand for compliance audits.
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
              backgroundColor: "#f3e8ff",
              color: "#632ca6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Filter size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Automated Parsing & Pipelines
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Automatically convert JSON, Syslog, Apache, and Nginx logs into structured key-value attributes.
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
              backgroundColor: "#f3e8ff",
              color: "#632ca6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Sensitive Data Scanner
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Detect and redact PII, credit card numbers, and API tokens at the agent edge before logs cross network boundaries.
            </p>
          </div>
        </div>
      </section>

      <LogStreamModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
