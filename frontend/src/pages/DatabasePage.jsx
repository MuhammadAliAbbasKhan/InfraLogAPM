// src/pages/DatabasePage.jsx
import React from 'react';
import { Database, Zap, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DatabasePage() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* Database Hero */}
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
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            color: "#93c5fd",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(59, 130, 246, 0.3)"
          }}>
            <Database size={16} />
            <span>Database Monitoring & SQL Execution Profiling</span>
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Optimize Slow SQL Queries & Database Locks
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            lineHeight: "1.6"
          }}>
            Analyze PostgreSQL, MySQL, Redis, MongoDB, and Oracle query execution plans with EXPLAIN visualizers, lock contention graphs, and connection pool metrics.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/pricing" style={{
              padding: "14px 32px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "15px"
            }}>
              Start Database Profiler Trial
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
              View SQL EXPLAIN Demo
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
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Zap size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Visual SQL EXPLAIN Plans
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Identify sequential table scans, missing indexes, and expensive hash joins across production databases.
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
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Lock & Deadlock Analysis
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Graph blocked transactions, row-level locks, and active connection pool starvation in real-time.
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
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              <Database size={24} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
              Multi-Engine Support
            </h3>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
              Unified telemetry for Amazon Aurora, PostgreSQL, MySQL, Redis Cluster, MongoDB Atlas, and Oracle DB.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
