// src/pages/RealUserMonitoringPage.jsx
import React from 'react';
import { Smartphone, Activity, Eye, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealUserMonitoringPage() {
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
            backgroundColor: "rgba(236, 72, 153, 0.2)",
            color: "#f472b6",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(236, 72, 153, 0.3)"
          }}>
            <Smartphone size={16} />
            <span>Frontend & Mobile User Telemetry</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Real User Monitoring (RUM) & Core Web Vitals
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Track frontend Javascript errors, LCP/FID/CLS Core Web Vitals, and session replays across Web, iOS, and Android applications.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#db2777",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start RUM Free Trial
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
              Mobile SDK Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
              backgroundColor: "#fce7f3",
              color: "#db2777",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Activity size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Core Web Vitals Performance
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Measure Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) per browser and OS.
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
              backgroundColor: "#fce7f3",
              color: "#db2777",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Session Replay Playback
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Replay real user sessions visually to see where users encounter UI errors, broken forms, or slow network calls.
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
              backgroundColor: "#fce7f3",
              color: "#db2777",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Smartphone size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              iOS & Android Mobile SDKs
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Native Swift, Kotlin, React Native, and Flutter SDKs to capture ANR freezes and mobile crash stack traces.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
