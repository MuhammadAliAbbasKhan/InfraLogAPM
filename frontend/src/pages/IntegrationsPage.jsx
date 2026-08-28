// src/pages/IntegrationsPage.jsx
import React, { useState } from 'react';
import { Search, Server, Layers, Cpu, Database, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const INTEGRATION_CATEGORIES = [
  "All (600+)", "AWS", "Kubernetes", "GCP", "Azure", "Databases", "Serverless", "Security", "CI/CD", "Messaging"
];

const POPULAR_INTEGRATIONS = [
  { name: "Amazon Web Services (AWS)", category: "AWS", logo: "https://corp.dd-static.net/img/products/integrations/aws_logo.png", metrics: "140+ Services", desc: "EC2, EKS, Lambda, S3, RDS telemetry ingestion in seconds." },
  { name: "Kubernetes & Helm", category: "Kubernetes", logo: "https://corp.dd-static.net/img/products/integrations/kubernetes_logo.png", metrics: "Container Autodiscovery", desc: "Pod lifecycle metrics, cgroup v2 stats, and eBPF network maps." },
  { name: "Google Cloud Platform (GCP)", category: "GCP", logo: "https://corp.dd-static.net/img/products/integrations/gcp_logo.png", metrics: "85+ Services", desc: "GKE, BigQuery, Cloud Run, Pub/Sub metrics sync." },
  { name: "Microsoft Azure", category: "Azure", logo: "https://corp.dd-static.net/img/products/integrations/azure_logo.png", metrics: "90+ Services", desc: "AKS, Azure Functions, CosmosDB, Event Hubs telemetry." },
  { name: "PostgreSQL", category: "Databases", logo: "https://corp.dd-static.net/img/products/integrations/postgres_logo.png", metrics: "EXPLAIN Visualizer", desc: "Lock contention, query performance, and active connection profiling." },
  { name: "Kafka & Confluent", category: "Messaging", logo: "https://corp.dd-static.net/img/products/integrations/kafka_logo.png", metrics: "Consumer Lag", desc: "Topic throughput, consumer group lag, and broker partition health." },
  { name: "Docker & Containerd", category: "Kubernetes", logo: "https://corp.dd-static.net/img/products/integrations/docker_logo.png", metrics: "Runtime Metrics", desc: "Container CPU/Memory stats, image vulnerabilities, and logs." },
  { name: "Nginx & HAProxy", category: "Serverless", logo: "https://corp.dd-static.net/img/products/integrations/nginx_logo.png", metrics: "HTTP Status Codes", desc: "Request rates, latency percentiles (p95, p99), and error logs." },
  { name: "MongoDB Atlas", category: "Databases", logo: "https://corp.dd-static.net/img/products/integrations/mongodb_logo.png", metrics: "Opcounter Stats", desc: "Replication lag, page faults, and slow query logs." }
];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All (600+)");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = POPULAR_INTEGRATIONS.filter(item => {
    const matchesCategory = selectedCategory === "All (600+)" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #632ca6, #3b156b)",
        color: "#ffffff",
        padding: "60px 20px 80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.15)",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px"
          }}>
            🔌 Turn-Key Telemetry Ecosystem
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px", lineHeight: "1.2" }}>
            600+ Integrations to Monitor Your Whole Stack
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "750px", margin: "0 auto 32px auto", lineHeight: "1.6" }}>
            Aggregate metrics, logs, traces, and security events from any cloud provider, database, container engine, or SaaS tool in 1-click.
          </p>

          {/* Search Box */}
          <div style={{
            maxWidth: "640px",
            margin: "0 auto",
            position: "relative"
          }}>
            <input
              type="text"
              placeholder="Search integrations (e.g. AWS, Kubernetes, Postgres, Kafka)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px 16px 50px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
            <Search style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#632ca6",
              width: "22px",
              height: "22px"
            }} />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div style={{
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e5e5e5",
        padding: "16px 20px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "4px"
        }}>
          {INTEGRATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: selectedCategory === cat ? "none" : "1px solid #ddd",
                backgroundColor: selectedCategory === cat ? "#632ca6" : "#ffffff",
                color: selectedCategory === cat ? "#ffffff" : "#444444",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1a1a1a", marginBottom: "24px" }}>
          Showing {filteredIntegrations.length} Popular Integrations
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px"
        }}>
          {filteredIntegrations.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: "10px",
              padding: "24px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f3ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#632ca6"
                  }}>
                    ⚡
                  </div>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor: "#eef2ff",
                    color: "#4f46e5"
                  }}>
                    {item.metrics}
                  </span>
                </div>

                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.5", marginBottom: "16px" }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ paddingTop: "12px", borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "600" }}>Category: {item.category}</span>
                <Link to="/docs" style={{ color: "#632ca6", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>
                  Install Specs →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
