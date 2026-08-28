// src/pages/DocsPage.jsx
import React, { useState } from "react";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openProductSection, setOpenProductSection] = useState("Observability");

  // Product sections for the browse section
  const productSections = [
    {
      name: "Observability",
      icon: "icon-eye-4",
      columns: [
        {
          title: "Infrastructure",
          links: [
            { label: "Infrastructure", href: "/infrastructure", desc: "Host and infra health" },
            { label: "Metrics", href: "/infrastructure", desc: "Explore and distribute metrics" },
            { label: "Container Monitoring", href: "/infrastructure", desc: "Container health and security" },
            { label: "Serverless", href: "/serverless", desc: "Serverless performance" },
            { label: "Network Monitoring", href: "/network", desc: "Network traffic data" }
          ]
        },
        {
          title: "Applications",
          links: [
            { label: "APM & Tracing", href: "/apm", desc: "Distributed traces and dashboards" },
            { label: "Universal Service Monitoring", href: "/apm", desc: "Codeless service monitoring" },
            { label: "Continuous Profiler", href: "/apm", desc: "Performance bottlenecks" }
          ]
        },
        {
          title: "Logs & Data",
          links: [
            { label: "Log Management", href: "/log-management", desc: "Log processing and archival" },
            { label: "Database Profiling", href: "/database", desc: "Query metrics and samples" },
            { label: "Sensitive Data Scanner", href: "/security", desc: "PII detection and redaction" }
          ]
        }
      ]
    },
    {
      name: "Digital Experience",
      icon: "icon-rum",
      columns: [
        {
          title: "Synthetic Testing",
          links: [
            { label: "Synthetic Monitoring", href: "/synthetic-monitoring", desc: "Uptime and performance tests" }
          ]
        },
        {
          title: "Real User Monitoring",
          links: [
            { label: "Real User Monitoring", href: "/real-user-monitoring", desc: "Frontend user experience" }
          ]
        }
      ]
    },
    {
      name: "AI & Security",
      icon: "icon-security-platform",
      columns: [
        {
          title: "AI & Security",
          links: [
            { label: "Bits AI Copilot", href: "/ai-copilot", desc: "Automated AI root cause analysis" },
            { label: "Cloud SIEM", href: "/security", desc: "Threat detection and response" }
          ]
        }
      ]
    }
  ];

  const guideSteps = [
    { number: "1.", title: "Install the Agent", description: "Collect events and metrics from your hosts that send data to InfraLogAPM.", link: "/docs", linkText: "Agent Setup Guide →" },
    { number: "2.", title: "Set Up Integrations", description: "Gather metrics, traces, and logs with over 600+ built-in integrations.", link: "/integrations", linkText: "Integrations Catalog →" },
    { number: "3.", title: "Get Started in App", description: "Visualize the data collected in InfraLogAPM and create custom dashboards and alerts.", link: "/live-demo", linkText: "Live Interactive Playground →" }
  ];

  return (
    <div className="docs-page" style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff", color: "#1a1a1a" }}>
      
      {/* Search Hero Section (No embedded header) */}
      <section className="home-hero" style={{ background: "linear-gradient(135deg, #632ca6, #3b156b)", padding: "50px 0 60px 0", color: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", fontWeight: "800", fontSize: "38px", margin: "0 0 16px 0", fontFamily: "NationalWeb, sans-serif" }}>
            InfraLogAPM Documentation & API Reference
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)", maxWidth: "700px", margin: "0 auto 24px auto" }}>
            Search documentation for agent setup, OpenTelemetry SDKs, REST APIs, and log collection pipelines.
          </p>

          <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
            <input 
              type="text" 
              placeholder="Search documentation, APIs, and guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                outline: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>
      </section>

      {/* Guide Steps */}
      <div style={{ padding: "50px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {guideSteps.map((step, idx) => (
              <div key={idx} style={{
                padding: "24px",
                borderRadius: "8px",
                border: "1px solid #e5e5e5",
                backgroundColor: "#f9fafb",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div>
                  <span style={{ fontSize: "24px", fontWeight: "800", color: "#632ca6", display: "block", marginBottom: "8px" }}>
                    {step.number}
                  </span>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.5", marginBottom: "16px" }}>
                    {step.description}
                  </p>
                </div>
                <a href={step.link} style={{ fontSize: "14px", fontWeight: "700", color: "#632ca6", textDecoration: "none" }}>
                  {step.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "50px 0", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", marginBottom: "32px", textAlign: "center" }}>
            Browse Documentation Categories
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {productSections.map((section) => (
              <div key={section.name} style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                overflow: "hidden"
              }}>
                <div 
                  onClick={() => setOpenProductSection(openProductSection === section.name ? null : section.name)}
                  style={{
                    padding: "18px 24px",
                    backgroundColor: "#fafafa",
                    borderBottom: openProductSection === section.name ? "1px solid #e5e5e5" : "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: "0" }}>
                    {section.name}
                  </h3>
                  <span style={{ fontSize: "14px", color: "#632ca6", fontWeight: "700" }}>
                    {openProductSection === section.name ? '▲ Collapse' : '▼ Expand'}
                  </span>
                </div>

                {openProductSection === section.name && (
                  <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
                    {section.columns.map((col, cIdx) => (
                      <div key={cIdx}>
                        <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                          {col.title}
                        </h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                          {col.links.map((lnk, lIdx) => (
                            <li key={lIdx} style={{ marginBottom: "10px" }}>
                              <a href={lnk.href} style={{ color: "#632ca6", fontWeight: "600", fontSize: "14px", textDecoration: "none", display: "block" }}>
                                {lnk.label}
                              </a>
                              <span style={{ fontSize: "12px", color: "#6b7280" }}>{lnk.desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}