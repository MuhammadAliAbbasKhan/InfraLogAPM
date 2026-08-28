// src/pages/PricingPage.jsx
import React, { useState } from 'react';
import { Check, Zap, Server, Database, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCalculator from '../components/PricingCalculator';

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Pricing Hero */}
      <section style={{
        backgroundColor: "#0d0925",
        color: "#ffffff",
        padding: "60px 20px 70px 20px",
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
            🏷️ Transparent InfraLogAPM Plans
          </span>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Simple, Powerful Telemetry Pricing
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Choose between our $100, $200, and $300 plans. 14-day free trial on all plans. No hidden fees.
          </p>
        </div>
      </section>

      {/* 3 Main Pricing Tiers ($100, $200, $300) */}
      <section style={{ maxWidth: "1240px", margin: "-40px auto 60px auto", padding: "0 20px", position: "relative", zIndex: "10" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px"
        }}>
          
          {/* Tier 1: $100 / month */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "32px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Starter Plan</span>
              <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "8px 0" }}>Essential Observability</h3>
              <div style={{ fontSize: "42px", fontWeight: "800", color: "#111827", margin: "16px 0" }}>
                $100 <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}>/ month</span>
              </div>
              <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "20px" }}>
                Ideal for growing dev teams monitoring core host infrastructure and application logs.
              </p>
              <ul style={{ listStyle: "none", padding: "0", margin: "0 0 24px 0" }}>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Up to 25 Agent Host Licenses
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 100GB FlexLog Ingestion
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 15-day Log & Metric Retention
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Standard Email & Chat Support
                </li>
              </ul>
            </div>
            <Link to="/contact-us" style={{
              display: "block",
              textAlign: "center",
              padding: "12px",
              border: "2px solid #632ca6",
              color: "#632ca6",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none"
            }}>
              Choose $100 Starter Plan
            </Link>
          </div>

          {/* Tier 2: $200 / month (Most Popular) */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "32px",
            border: "2px solid #632ca6",
            boxShadow: "0 8px 30px rgba(99, 44, 166, 0.15)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div style={{
              position: "absolute",
              top: "-14px",
              right: "24px",
              backgroundColor: "#632ca6",
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: "800",
              padding: "4px 12px",
              borderRadius: "12px",
              textTransform: "uppercase"
            }}>
              Most Popular
            </div>
            <div>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#632ca6", textTransform: "uppercase", letterSpacing: "1px" }}>Pro Growth Plan</span>
              <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "8px 0" }}>Full Stack APM & Logs</h3>
              <div style={{ fontSize: "42px", fontWeight: "800", color: "#111827", margin: "16px 0" }}>
                $200 <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}>/ month</span>
              </div>
              <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "20px" }}>
                Complete APM distributed tracing, eBPF network maps, and automated Bits AI anomaly detection.
              </p>
              <ul style={{ listStyle: "none", padding: "0", margin: "0 0 24px 0" }}>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Up to 75 Agent Host Licenses
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 500GB FlexLog & APM Traces
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 30-day Log & Trace Retention
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Bits AI Anomaly Root Cause Analysis
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Priority 24/7 Support SLA
                </li>
              </ul>
            </div>
            <Link to="/contact-us" style={{
              display: "block",
              textAlign: "center",
              padding: "12px",
              backgroundColor: "#632ca6",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none"
            }}>
              Choose $200 Pro Plan
            </Link>
          </div>

          {/* Tier 3: $300 / month */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "32px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Ultimate Enterprise</span>
              <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "8px 0" }}>Enterprise SIEM & AI</h3>
              <div style={{ fontSize: "42px", fontWeight: "800", color: "#111827", margin: "16px 0" }}>
                $300 <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}>/ month</span>
              </div>
              <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "20px" }}>
                Unlimited host monitoring, Cloud SIEM security rules, database profiling, and dedicated TAM.
              </p>
              <ul style={{ listStyle: "none", padding: "0", margin: "0 0 24px 0" }}>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Unlimited Agent Host Licenses
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 1.5 TB High-Volume Telemetry Ingestion
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> 15-Month Long-Term Metric Retention
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Cloud SIEM Threat Detection Rules
                </li>
                <li style={{ fontSize: "14px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Check size={16} color="#059669" /> Dedicated Technical Account Manager (TAM)
                </li>
              </ul>
            </div>
            <Link to="/contact-us" style={{
              display: "block",
              textAlign: "center",
              padding: "12px",
              backgroundColor: "#1f2937",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none"
            }}>
              Choose $300 Enterprise Plan
            </Link>
          </div>

        </div>
      </section>

      {/* Pricing Calculator */}
      <section style={{ maxWidth: "1000px", margin: "0 auto 80px auto", padding: "0 20px" }}>
        <PricingCalculator />
      </section>

    </div>
  );
}
