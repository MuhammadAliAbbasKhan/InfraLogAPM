// src/pages/AiCopilotPage.jsx
import React, { useState } from 'react';
import { Bot, Sparkles, Send, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AiCopilotPage() {
  const [promptText, setPromptText] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskBitsAI = (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    setLoading(true);
    setAiOutput("");

    setTimeout(() => {
      setLoading(false);
      setAiOutput(`🤖 [Bits AI Copilot Root Cause Diagnosis]:
Analysis of Kubernetes cluster k8s-worker-node-04 (15:20:10 UTC):
1. Root Cause: Memory leak in container payment-service:v2.4.1 allocated 4.2GB out of 4.0GB limit, triggering OOMKilled kernel signal.
2. Correlated Logs: 142 HTTP 500 status codes on POST /api/v1/payments.
3. Recommended Remediation: Scale deployment replicas to 5 and roll back commit #8a3f91 (memory buffer unclosed file handle).`);
    }, 1200);
  };

  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Hero */}
      <section style={{
        backgroundColor: "#0d0925",
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
            backgroundColor: "rgba(168, 85, 247, 0.3)",
            color: "#e9d5ff",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(168, 85, 247, 0.3)"
          }}>
            <Sparkles size={16} />
            <span>Autonomous Incident Investigation & AI Remediation</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Bits AI Copilot: Automated Telemetry Root Cause Analysis
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Ask natural language questions about your microservices, log spikes, and APM latency bottlenecks to get instant AI-generated root cause diagnoses.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#7e22ce",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start Bits AI Trial ($200 Pro)
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
              Try Interactive AI Playground
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive AI Prompt Simulator */}
      <section style={{ maxWidth: "900px", margin: "-40px auto 60px auto", padding: "0 20px", position: "relative", zIndex: "10" }}>
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "32px",
          border: "2px solid #a855f7",
          boxShadow: "0 8px 30px rgba(168, 85, 247, 0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Bot size={28} color="#7e22ce" />
            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0" }}>
              Ask Bits AI Copilot Live
            </h3>
          </div>

          <form onSubmit={handleAskBitsAI} style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="e.g. Why did memory usage spike on k8s-worker-node-04 at 15:20?"
              style={{
                flex: "1 1 300px",
                padding: "14px 18px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
                outline: "none"
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "14px 28px",
                backgroundColor: "#7e22ce",
                color: "#ffffff",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Send size={16} />
              <span>{loading ? "Analyzing..." : "Ask AI"}</span>
            </button>
          </form>

          {aiOutput && (
            <div style={{
              backgroundColor: "#f3e8ff",
              border: "1px solid #c084fc",
              borderRadius: "8px",
              padding: "20px",
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#3b0764",
              whiteSpace: "pre-line",
              fontFamily: "monospace"
            }}>
              {aiOutput}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
