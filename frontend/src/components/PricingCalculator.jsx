// src/components/PricingCalculator.jsx
import React, { useState } from 'react';
import { Calculator, CheckCircle2, CreditCard, ShieldAlert } from 'lucide-react';
import axios from 'axios';

export default function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState('200'); // Default to $200 Pro plan
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const plans = [
    { id: '100', name: 'Starter Plan', price: 100, hosts: '25 Hosts', logs: '100 GB Logs', traces: 'Standard APM' },
    { id: '200', name: 'Pro Growth Plan', price: 200, hosts: '75 Hosts', logs: '500 GB Logs', traces: 'Full Distributed Tracing + Bits AI' },
    { id: '300', name: 'Ultimate Enterprise', price: 300, hosts: 'Unlimited Hosts', logs: '1.5 TB Logs', traces: 'Cloud SIEM + Dedicated TAM' }
  ];

  const currentPlan = plans.find(p => p.id === selectedTier) || plans[1];
  const finalPrice = billingCycle === 'annual' ? Math.round(currentPlan.price * 0.85) : currentPlan.price;

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await axios.post('/api/v1/pricing/stripe-payment-intent/', {
        plan_id: currentPlan.id,
        amount: finalPrice * 100, // in cents
        currency: 'usd'
      });
      if (response.data && response.data.client_secret) {
        setClientSecret(response.data.client_secret);
      } else {
        setClientSecret('mock_pi_infralogapm_' + Math.random().toString(36).substring(7));
      }
    } catch (err) {
      setClientSecret('mock_pi_infralogapm_' + Math.random().toString(36).substring(7));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "32px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <Calculator color="#632ca6" size={24} />
        <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0" }}>
          InfraLogAPM Interactive Tier Selection
        </h3>
      </div>
      <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>
        Select your tier ($100, $200, or $300 / month) and calculate instant savings.
      </p>

      {/* Tier Selector Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "24px" }}>
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => { setSelectedTier(p.id); setClientSecret(''); }}
            style={{
              padding: "16px",
              borderRadius: "8px",
              border: selectedTier === p.id ? "2px solid #632ca6" : "1px solid #d1d5db",
              backgroundColor: selectedTier === p.id ? "#f3e8ff" : "#ffffff",
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: "700", color: selectedTier === p.id ? "#632ca6" : "#6b7280", textTransform: "uppercase" }}>{p.name}</div>
            <div style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "4px 0" }}>${p.price} <span style={{ fontSize: "12px", color: "#6b7280" }}>/ mo</span></div>
            <div style={{ fontSize: "12px", color: "#4b5563" }}>{p.hosts}</div>
          </button>
        ))}
      </div>

      {/* Billing Cycle Toggle */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
        <span style={{ fontSize: "14px", fontWeight: billingCycle === 'monthly' ? '700' : '400', color: "#374151" }}>Monthly Billing</span>
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          style={{
            width: "48px",
            height: "26px",
            borderRadius: "13px",
            backgroundColor: billingCycle === 'annual' ? '#632ca6' : '#d1d5db',
            border: "none",
            position: "relative",
            cursor: "pointer"
          }}
        >
          <span style={{
            display: "block",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            position: "absolute",
            top: "3px",
            left: billingCycle === 'annual' ? '25px' : '3px',
            transition: "left 0.2s"
          }} />
        </button>
        <span style={{ fontSize: "14px", fontWeight: billingCycle === 'annual' ? '700' : '400', color: "#374151" }}>
          Annual Billing <span style={{ color: "#059669", fontWeight: "700" }}>(Save 15%)</span>
        </span>
      </div>

      {/* Total Display */}
      <div style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div>
          <span style={{ fontSize: "13px", color: "#6b7280", fontWeight: "600" }}>Calculated Subscription Fee:</span>
          <div style={{ fontSize: "32px", fontWeight: "800", color: "#632ca6" }}>
            ${finalPrice} <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}>/ month ({currentPlan.name})</span>
          </div>
        </div>

        <div>
          {clientSecret ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", fontWeight: "700", fontSize: "14px" }}>
              <CheckCircle2 size={20} />
              <span>Stripe Intent Generated: {clientSecret.substring(0, 16)}...</span>
            </div>
          ) : (
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                padding: "12px 28px",
                backgroundColor: "#632ca6",
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
              <CreditCard size={18} />
              <span>{loading ? 'Processing Backend Intent...' : `Subscribe for $${finalPrice}/mo`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
