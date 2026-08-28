// src/pages/InfrastructurePage.jsx
import React, { useState } from "react";
import { Server, Cpu, HardDrive, Boxes, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InfrastructurePage() {
  const features = [
    {
      id: "integrations",
      title: "See across systems, apps, and services",
      description: "With 600+ turn-key integrations, InfraLogAPM seamlessly aggregates metrics and events across your full DevOps stack.",
      list: [
        "AWS, Azure, and Google Cloud providers",
        "Kubernetes, Docker, and container runtime engines",
        "eBPF low-overhead kernel socket telemetry",
        "PostgreSQL, MongoDB, and Redis database profiling"
      ],
      cta: "Explore 600+ Integrations",
      ctaLink: "/integrations",
      image: "https://corp.dd-static.net/img/products/product/homepage-screencaps-integrations-d.png?format=auto&w=710&q=55",
      align: "left"
    },
    {
      id: "apm",
      title: "Get full visibility into modern applications",
      description: "Monitor, troubleshoot, and optimize application performance down to individual method execution times.",
      list: [
        "Trace requests end-to-end across distributed microservices",
        "Track app performance with auto-generated service maps",
        "Graph and alert on error rates or latency percentiles (p95, p99)",
        "Instrument code using OpenTelemetry standards"
      ],
      cta: "Learn More About APM",
      ctaLink: "/apm",
      image: "https://corp.dd-static.net/img/products/apm/APM_thumbnail_200611_v4.png?ch=Width,DPR,Save-Data&auto=format,compress&fit=clip&w=1200",
      align: "right"
    },
    {
      id: "logs",
      title: "Analyze and explore log data in context",
      description: "Quickly search, filter, and analyze your logs for rapid incident response and open-ended data exploration.",
      list: [
        "Collect logs automatically from Kubernetes, AWS Lambda, and containers",
        "Navigate seamlessly between logs, host metrics, and APM traces",
        "Automatic sensitive data scanning (PII & secrets redaction)",
        "Rehydrate archived logs from cloud storage on-demand"
      ],
      cta: "Explore Log Management",
      ctaLink: "/log-management",
      image: "https://corp.dd-static.net/img/products/logging-without-limits-poster.png?ch=Width,DPR,Save-Data&auto=format,compress&fit=clip&w=1200",
      align: "left"
    }
  ];

  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Infrastructure Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #0d0925, #1f1442)",
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
            backgroundColor: "rgba(99, 44, 166, 0.4)",
            color: "#c084fc",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px"
          }}>
            <Server size={16} />
            <span>Cloud & Container Host Monitoring</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Complete Visibility Across Every Node, Cluster & Host
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Track CPU utilization, memory pressure, eBPF network sockets, and container lifecycle events across Kubernetes, AWS, GCP, Azure, and bare metal.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#632ca6",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start $100 Starter Trial
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
              View Live Hostmap Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        {features.map((item, idx) => (
          <div key={item.id} style={{
            display: "flex",
            flexDirection: item.align === "right" ? "row-reverse" : "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
            marginBottom: "60px",
            paddingBottom: "60px",
            borderBottom: idx < features.length - 1 ? "1px solid #e5e5e5" : "none"
          }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", marginBottom: "16px", fontFamily: "NationalWeb, sans-serif" }}>
                {item.title}
              </h2>
              <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                {item.description}
              </p>
              <ul style={{ listStyle: "none", padding: "0", margin: "0 0 24px 0" }}>
                {item.list.map((listItem, i) => (
                  <li key={i} style={{ fontSize: "15px", color: "#374151", padding: "6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={18} color="#632ca6" />
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
              <Link to={item.ctaLink} style={{
                display: "inline-block",
                padding: "10px 24px",
                border: "2px solid #632ca6",
                color: "#632ca6",
                borderRadius: "4px",
                fontWeight: "700",
                fontSize: "13px",
                textDecoration: "none",
                textTransform: "uppercase"
              }}>
                {item.cta}
              </Link>
            </div>

            <div style={{ flex: "1 1 500px" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  display: "block"
                }}
              />
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}