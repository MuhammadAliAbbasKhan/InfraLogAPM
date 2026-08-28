// src/pages/ContactUsPage.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    hosts: '1-50',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      
      {/* Contact Hero */}
      <section style={{
        backgroundColor: "#0d0925",
        color: "#ffffff",
        padding: "60px 20px 80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            💬 Connect With Observability Engineers
          </span>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "16px",
            lineHeight: "1.2",
            fontFamily: "NationalWeb, sans-serif"
          }}>
            Contact InfraLogAPM Enterprise Sales & Support
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Speak directly with our solutions architects about custom telemetry volume discounts, security compliance, or platform migration.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ maxWidth: "1100px", margin: "-40px auto 80px auto", padding: "0 20px", position: "relative", zIndex: "10" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px"
        }}>
          
          {/* Direct Email Cards */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "32px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", marginBottom: "24px" }}>
                We respond to all technical support tickets and sales inquiries within 1 hour.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                backgroundColor: "#f3e8ff",
                color: "#632ca6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div>
                <strong style={{ fontSize: "15px", color: "#111827", display: "block" }}>Enterprise Sales</strong>
                <a href="mailto:sales@infralogapm.com" style={{ color: "#632ca6", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                  sales@infralogapm.com
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                backgroundColor: "#f3e8ff",
                color: "#632ca6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div>
                <strong style={{ fontSize: "15px", color: "#111827", display: "block" }}>Technical Support & SLA</strong>
                <a href="mailto:support@infralogapm.com" style={{ color: "#632ca6", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                  support@infralogapm.com
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                backgroundColor: "#f3e8ff",
                color: "#632ca6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>
              <div>
                <strong style={{ fontSize: "15px", color: "#111827", display: "block" }}>Global Sales Phone Line</strong>
                <span style={{ color: "#4b5563", fontSize: "14px", fontWeight: "600" }}>
                  +1 (800) 883-9201
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                backgroundColor: "#f3e8ff",
                color: "#632ca6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <strong style={{ fontSize: "15px", color: "#111827", display: "block" }}>Headquarters Address</strong>
                <span style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.5" }}>
                  InfraLogAPM Inc.<br />
                  620 8th Ave, Floor 42<br />
                  New York, NY 10018, USA
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "32px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <CheckCircle2 size={48} color="#059669" style={{ margin: "0 auto 16px auto" }} />
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", marginBottom: "8px" }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6" }}>
                  An InfraLogAPM solutions architect will email you back at <strong>{formData.email}</strong> within 1 business hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "20px" }}>
                  Request Sales Consultation
                </h3>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Work Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Estimated Infrastructure Size</label>
                  <select
                    value={formData.hosts}
                    onChange={(e) => setFormData({ ...formData, hosts: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", boxSizing: "border-box" }}
                  >
                    <option value="1-50">1 - 50 Hosts / Containers</option>
                    <option value="51-250">51 - 250 Hosts / Containers</option>
                    <option value="251-1000">251 - 1,000 Hosts / Containers</option>
                    <option value="1000+">1,000+ Enterprise Clusters</option>
                  </select>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Message / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your telemetry requirements or current monitoring challenges..."
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: "#632ca6",
                    color: "#ffffff",
                    borderRadius: "6px",
                    fontWeight: "700",
                    fontSize: "15px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
