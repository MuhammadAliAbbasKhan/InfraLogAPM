// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Telemetry Status Bar */}
      <div style={{
        backgroundColor: "#632ca6",
        color: "#ffffff",
        padding: "6px 16px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        zIndex: "10001"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#34d399"
          }}></span>
          <span style={{ fontWeight: "600" }}>InfraLogAPM Status: 99.99% Operational</span>
          <span style={{ opacity: 0.8 }} className="d-none d-md-inline">| Ingesting 14.5M telemetry events/sec</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <Link to="/live-demo" style={{ color: "#fbbf24", textDecoration: "none", fontWeight: "600" }}>
            ⚡ Live Playground
          </Link>
          <span>|</span>
          <Link to="/contact-us" style={{ color: "#ffffff", textDecoration: "none" }}>
            sales@infralogapm.com
          </Link>
        </div>
      </div>

      {/* Main Sticky Non-Overlapping Header */}
      <div style={{
        backgroundColor: "#ffffff",
        borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid #f0f0f0",
        position: "sticky",
        top: "0",
        zIndex: "10000",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.08)" : "0 2px 4px rgba(0,0,0,0.03)",
        transition: "all 0.2s ease"
      }}>
        <nav style={{ padding: "8px 0", width: "100%", boxSizing: "border-box" }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            boxSizing: "border-box"
          }}>
            
            {/* Desktop Navigation Row */}
            <div className="d-none d-lg-flex" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              boxSizing: "border-box"
            }}>
              
              {/* Brand Logo */}
              <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #632ca6, #4a1a7a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>
                  ⚡
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "18px", fontWeight: "800", color: "#1a1a1a", lineHeight: "1.1" }}>
                    Infra<span style={{ color: "#632ca6" }}>Log</span><span style={{ color: "#4a1a7a" }}>APM</span>
                  </span>
                  <span style={{ fontSize: "10px", color: "#666", fontWeight: "600", letterSpacing: "0.5px" }}>
                    infralogapm.com
                  </span>
                </div>
              </Link>

              {/* Main Nav Items */}
              <ul style={{
                display: "flex",
                alignItems: "center",
                listStyle: "none",
                margin: "0",
                padding: "0",
                gap: "4px"
              }}>
                
                {/* Product Dropdown */}
                <li 
                  style={{ position: "relative" }}
                  onMouseEnter={() => setActiveDropdown('product')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to="/infrastructure" style={navLinkStyle}>
                    <span>Products & Sub-Pages</span>
                    <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>
                  </Link>

                  {activeDropdown === 'product' && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      width: "480px",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
                      border: "1px solid #e5e5e5",
                      padding: "16px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      zIndex: "10002"
                    }}>
                      <Link to="/infrastructure" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Infrastructure</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Kubernetes & Hosts</span>
                      </Link>

                      <Link to="/apm" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>APM & Tracing</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Flamegraphs & Spans</span>
                      </Link>

                      <Link to="/log-management" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Log Management</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>FlexLogs Ingestion</span>
                      </Link>

                      <Link to="/security" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Security SIEM</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Runtime Threat Detection</span>
                      </Link>

                      <Link to="/synthetic-monitoring" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Synthetic Testing</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Global 40+ Probes</span>
                      </Link>

                      <Link to="/real-user-monitoring" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Real User (RUM)</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Core Web Vitals</span>
                      </Link>

                      <Link to="/database" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Database Profiling</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Visual SQL EXPLAIN</span>
                      </Link>

                      <Link to="/network" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Network NPM</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>eBPF TCP Topology</span>
                      </Link>

                      <Link to="/serverless" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Serverless Lambda</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Cold Start Optimization</span>
                      </Link>

                      <Link to="/ai-copilot" style={dropdownLinkStyle}>
                        <strong style={{ color: "#632ca6", display: "block", fontSize: "13px" }}>Bits AI Copilot</strong>
                        <span style={{ fontSize: "11px", color: "#666" }}>Automated Root Cause</span>
                      </Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/integrations" style={navLinkStyle}>Integrations</Link>
                </li>

                <li>
                  <Link to="/customers" style={navLinkStyle}>Customers</Link>
                </li>

                <li>
                  <Link to="/pricing" style={navLinkStyle}>Pricing</Link>
                </li>

                <li>
                  <Link to="/solutions" style={navLinkStyle}>Solutions</Link>
                </li>

                <li>
                  <Link to="/docs" style={{ ...navLinkStyle, color: "#632ca6", fontWeight: "700" }}>Docs & API</Link>
                </li>

              </ul>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <button
                  onClick={() => setSearchModalOpen(true)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "6px 8px",
                    color: "#555"
                  }}
                  title="Search Documentation & Metrics"
                >
                  🔍
                </button>

                <Link to="/contact-us" style={{
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  padding: "6px 14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px"
                }}>
                  Login
                </Link>

                <Link to="/pricing" style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  background: "linear-gradient(135deg, #632ca6, #4a1a7a)",
                  color: "#ffffff",
                  borderRadius: "4px",
                  fontWeight: "700",
                  textDecoration: "none",
                  fontSize: "13px",
                  boxShadow: "0 4px 10px rgba(99, 44, 166, 0.25)"
                }}>
                  GET STARTED FREE
                </Link>
              </div>

            </div>

       
       
          </div>
        </nav>

        {/* Mobile / Android / iOS Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "300px",
            maxWidth: "85vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.2)",
            zIndex: "10005",
            padding: "20px",
            overflowY: "auto",
            boxSizing: "border-box"
          }}>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#555"
              }}
            >
              ×
            </button>

            <div style={{ marginTop: "32px", borderBottom: "1px solid #eee", paddingBottom: "12px" }}>
              <strong style={{ color: "#632ca6", fontSize: "12px", textTransform: "uppercase" }}>InfraLogAPM Sub-Pages</strong>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <Link to="/infrastructure" style={mobileNavLinkStyle}>Infrastructure Monitoring</Link>
                <Link to="/apm" style={mobileNavLinkStyle}>APM & Distributed Tracing</Link>
                <Link to="/log-management" style={mobileNavLinkStyle}>Log Management</Link>
                <Link to="/security" style={mobileNavLinkStyle}>Security & Cloud SIEM</Link>
                <Link to="/synthetic-monitoring" style={mobileNavLinkStyle}>Synthetic Testing</Link>
                <Link to="/real-user-monitoring" style={mobileNavLinkStyle}>Real User Monitoring (RUM)</Link>
                <Link to="/database" style={mobileNavLinkStyle}>Database Profiling</Link>
                <Link to="/network" style={mobileNavLinkStyle}>Network Performance (NPM)</Link>
                <Link to="/serverless" style={mobileNavLinkStyle}>Serverless Telemetry</Link>
                <Link to="/ai-copilot" style={mobileNavLinkStyle}>Bits AI Copilot</Link>
              </div>
            </div>

            <div style={{ marginTop: "16px", borderBottom: "1px solid #eee", paddingBottom: "12px" }}>
              <strong style={{ color: "#632ca6", fontSize: "12px", textTransform: "uppercase" }}>Ecosystem & Support</strong>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <Link to="/integrations" style={mobileNavLinkStyle}>600+ Integrations</Link>
                <Link to="/solutions" style={mobileNavLinkStyle}>Solutions</Link>
                <Link to="/customers" style={mobileNavLinkStyle}>Customer Stories</Link>
                <Link to="/pricing" style={mobileNavLinkStyle}>Pricing Tiers ($100, $200, $300)</Link>
                <Link to="/docs" style={mobileNavLinkStyle}>API Docs</Link>
                <Link to="/blog" style={mobileNavLinkStyle}>Tech Blog</Link>
                <Link to="/contact-us" style={mobileNavLinkStyle}>Contact: sales@infralogapm.com</Link>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link to="/pricing" style={{
                display: "block",
                padding: "12px",
                backgroundColor: "#632ca6",
                color: "#ffffff",
                textAlign: "center",
                borderRadius: "4px",
                fontWeight: "700",
                textDecoration: "none"
              }}>
                GET STARTED FREE
              </Link>
            </div>
          </div>
        )}

      </div>

      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
}

// Nav Styles
const navLinkStyle = {
  color: "#333333",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "600",
  padding: "6px 10px",
  display: "block",
  borderRadius: "4px",
  transition: "color 0.2s"
};

const dropdownLinkStyle = {
  textDecoration: "none",
  padding: "8px 10px",
  borderRadius: "6px",
  backgroundColor: "#f9f8fc",
  display: "block",
  transition: "background-color 0.2s"
};

const mobileNavLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "14px",
  fontWeight: "500",
  padding: "4px 0"
};