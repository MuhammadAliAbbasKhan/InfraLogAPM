// src/pages/NetworkPage.jsx
import React from 'react';
import { Share2, Activity, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NetworkPage() {
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
            backgroundColor: "rgba(14, 165, 233, 0.2)",
            color: "#38bdf8",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(14, 165, 233, 0.3)"
          }}>
            <Share2 size={16} />
            <span>eBPF TCP Socket & Network Performance (NPM)</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Unify Network Visibility Across Multi-Cloud Environments
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Track TCP retransmissions, DNS lookup latencies, and cross-availability zone network traffic throughput using eBPF probes.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#0284c7",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start NPM Free Trial
            </Link>
            <Link to="/live-demo" style={{
              padding: "14px 32px",
              border: "2px solid #ffffff",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              View Network Map Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
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
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Share2 size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Interactive eBPF Topology Map
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Map pod-to-pod, host-to-host, and cloud availability zone network traffic connections automatically.
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
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Activity size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              TCP Retransmit & Packet Drop Detection
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Identify network interface drops, TCP window sizing bottlenecks, and cloud VPC peering latency spikes.
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
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Cpu size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              DNS Health & SRV Monitoring
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Monitor Kubernetes CoreDNS lookup failures, response time distributions, and NXDOMAIN error rates.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
