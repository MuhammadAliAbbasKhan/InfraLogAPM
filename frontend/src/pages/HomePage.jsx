import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Server, Terminal, ShieldAlert, Cpu, Globe, 
  ArrowRight, CheckCircle2, Zap, Layers, Sparkles, Building2, Flame, Wifi, Smartphone, Database
} from 'lucide-react';
import LiveTelemetryWidget from '../components/LiveTelemetryWidget';
import PricingCalculator from '../components/PricingCalculator';
import ContactModal from '../components/ContactModal';
import LogStreamModal from '../components/LogStreamModal';
import { INTEGRATIONS_LIST, CUSTOMER_STORIES } from '../data/mockData';

const HomePage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [logModalOpen, setLogModalOpen] = useState(false);

  return (
    <div className="space-y-24 pb-20 bg-[#0F0B21] text-slate-100 min-h-screen">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-8 lg:pt-16 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI-Powered Observability & Cloud Security</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-200">Gartner® Magic Quadrant™ Leader</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              See Inside Any Stack, Any App, <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
                At Any Scale, Anywhere.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              InfraLogAPM integrates infrastructure monitoring, distributed APM tracing, real-time log management, user session replays, and cloud SIEM security into one unified observability platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#632CA6] to-indigo-600 hover:from-[#4A1A7A] hover:to-indigo-500 text-white font-bold text-base rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 border border-purple-500/30 bg-[#161033]/80 hover:bg-[#161033] text-slate-200 hover:text-white font-semibold text-base rounded-xl transition flex items-center justify-center space-x-2"
              >
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span>Get Enterprise Demo</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>5-Minute Helm / Agent Deployment</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>600+ Turnkey Integrations</span>
              </span>
            </div>

          </div>

          {/* Live Telemetry Playground Widget */}
          <div className="mt-12 max-w-5xl mx-auto">
            <LiveTelemetryWidget />
          </div>

        </div>
      </section>

      {/* ===== PLATFORM PRODUCTS GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Unified Observability Across Every Layer
          </h2>
          <p className="text-slate-400">
            Eliminate operational blind spots with end-to-end telemetry correlation between metrics, traces, logs, and security alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link to="/infrastructure" className="glass-panel p-6 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition">Infrastructure</h3>
            <p className="text-sm text-slate-400 mb-4">
              Real-time health, CPU, memory, and disk telemetry across Kubernetes clusters, EC2, and bare-metal nodes.
            </p>
            <div className="text-xs font-semibold text-indigo-400 flex items-center space-x-1">
              <span>Explore Infrastructure</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/apm" className="glass-panel p-6 rounded-2xl border border-indigo-500/20 hover:border-amber-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition">APM & Tracing</h3>
            <p className="text-sm text-slate-400 mb-4">
              Auto-instrument microservices with flamegraphs, latency profiling, and distributed OpenTelemetry context.
            </p>
            <div className="text-xs font-semibold text-amber-400 flex items-center space-x-1">
              <span>Explore APM</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/log-management" className="glass-panel p-6 rounded-2xl border border-indigo-500/20 hover:border-pink-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-pink-950 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition">Log Management</h3>
            <p className="text-sm text-slate-400 mb-4">
              Ingest terabytes of logs daily without indexing lock-in. Filter, rehydrate, and analyze queries instantly.
            </p>
            <div className="text-xs font-semibold text-pink-400 flex items-center space-x-1">
              <span>Explore Log Management</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/security" className="glass-panel p-6 rounded-2xl border border-indigo-500/20 hover:border-emerald-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition">Security & SIEM</h3>
            <p className="text-sm text-slate-400 mb-4">
              Continuous cloud security posture management, runtime container threat detection, and compliance auditing.
            </p>
            <div className="text-xs font-semibold text-emerald-400 flex items-center space-x-1">
              <span>Explore Security</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* ===== INTEGRATIONS SHOWCASE ===== */}
      <section className="bg-[#120D2C] py-16 border-y border-indigo-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">600+ Turnkey Integrations</h2>
              <p className="text-sm text-slate-400 mt-1">Connect your existing tech stack in under 2 minutes with official agent plugins.</p>
            </div>
            <Link
              to="/integrations"
              className="px-5 py-2.5 bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white font-semibold text-sm rounded-xl border border-indigo-500/30 transition"
            >
              Browse Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INTEGRATIONS_LIST.slice(0, 6).map((item) => (
              <div key={item.id} className="bg-[#0F0B21] p-4 rounded-xl border border-slate-800 hover:border-indigo-500/40 text-center space-y-2 transition">
                <div className="w-10 h-10 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center mx-auto">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="text-[10px] text-slate-400">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER SUCCESS STORIES ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Trusted by Global Engineering Pioneers</h2>
          <p className="text-slate-400 text-sm">Empowering Fortune 500 enterprises to scale cloud workloads with 99.999% uptime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_STORIES.map((story, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-indigo-500/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-2xl font-black text-indigo-400 tracking-tight">{story.stats}</div>
                <p className="text-sm text-slate-300 italic">"{story.quote}"</p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="font-semibold text-white">{story.company}</span>
                <span className="text-slate-400">{story.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ESTIMATOR ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCalculator />
      </section>

      {/* ===== MODALS ===== */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <LogStreamModal isOpen={logModalOpen} onClose={() => setLogModalOpen(false)} />

    </div>
  );
};

export default HomePage;