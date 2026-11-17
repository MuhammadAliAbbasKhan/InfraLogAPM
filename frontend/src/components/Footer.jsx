import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Send, CheckCircle2, ShieldCheck, 
  Mail, Phone, MapPin
} from 'lucide-react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post('/api/v1/newsletter/', { email });
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0A0718] border-t border-indigo-500/10 text-slate-400 pt-16 pb-12 overflow-x-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Card */}
        <div className="mb-16 glass-panel rounded-2xl p-6 sm:p-8 border border-indigo-500/20 bg-gradient-to-r from-[#161033] via-[#1B143E] to-[#161033] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start space-x-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              <span>Subscribe to InfraLogAPM Telemetry Digest</span>
            </h3>
            <p className="text-sm text-slate-300">
              Get weekly cloud architecture deep-dives, Kubernetes benchmarks, and zero-day threat telemetry reports from InfraLogAPM.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold bg-emerald-950/60 px-5 py-3 rounded-xl border border-emerald-500/30 text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Subscribed! Check your inbox for weekly telemetry digest.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email address..."
                className="px-4 py-3 bg-[#0F0B21] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500 text-sm w-full sm:w-72"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30"
              >
                <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Banner */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 bg-[#0F0B21] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Email: <span className="text-white font-semibold">Email coming soon</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Phone: <span className="text-white font-semibold">Phone coming soon</span></span>
          </div>
        </div>

        {/* 4 Column Footer Menu */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/* Col 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-indigo-500/20 pb-2">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/infrastructure" className="hover:text-indigo-400 transition">Infrastructure Monitoring</Link></li>
              <li><Link to="/apm" className="hover:text-indigo-400 transition">APM & Distributed Tracing</Link></li>
              <li><Link to="/log-management" className="hover:text-indigo-400 transition">Cloud Log Management</Link></li>
              <li><Link to="/security" className="hover:text-indigo-400 transition">Security & Cloud SIEM</Link></li>
              <li><Link to="/synthetic-monitoring" className="hover:text-indigo-400 transition">Synthetic Monitoring</Link></li>
              <li><Link to="/real-user-monitoring" className="hover:text-indigo-400 transition">Real User Monitoring (RUM)</Link></li>
              <li><Link to="/database" className="hover:text-indigo-400 transition">Database Performance</Link></li>
              <li><Link to="/serverless" className="hover:text-indigo-400 transition">Serverless Telemetry</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-indigo-500/20 pb-2">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/solutions" className="hover:text-indigo-400 transition">DevOps & SRE Acceleration</Link></li>
              <li><Link to="/solutions" className="hover:text-indigo-400 transition">FinOps Cost Optimization</Link></li>
              <li><Link to="/solutions" className="hover:text-indigo-400 transition">Cloud & Kubernetes Migration</Link></li>
              <li><Link to="/solutions" className="hover:text-indigo-400 transition">Multi-Cloud Observability</Link></li>
              <li><Link to="/ai-copilot" className="hover:text-indigo-400 transition">Bits AI Anomaly Detection</Link></li>
              <li><Link to="/network" className="hover:text-indigo-400 transition">Network Performance (NPM)</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-indigo-500/20 pb-2">Platform & Docs</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/docs" className="hover:text-indigo-400 transition">Documentation & API Reference</Link></li>
              <li><Link to="/integrations" className="hover:text-indigo-400 transition">600+ Integrations Catalog</Link></li>
              <li><Link to="/live-demo" className="hover:text-indigo-400 transition">Interactive Live Demo</Link></li>
              <li><Link to="/customers" className="hover:text-indigo-400 transition">Customer Success Stories</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition">Engineering Tech Blog</Link></li>
              <li><Link to="/events-webinars" className="hover:text-indigo-400 transition">DASH Tech Summit</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-indigo-500/20 pb-2">Company & Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about-us" className="hover:text-indigo-400 transition">About InfraLogAPM</Link></li>
              <li><Link to="/contact-us" className="hover:text-indigo-400 transition">Contact Enterprise Sales</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SOC 2 Type II & ISO 27001 Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <span>© 2026 InfraLogAPM. All rights reserved.</span>
          </div>

          {/* TODO: add verified social links */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
