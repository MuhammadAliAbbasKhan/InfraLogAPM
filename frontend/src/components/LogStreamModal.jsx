import React from 'react';
import { X, Terminal, Filter, RefreshCw, Copy, Check } from 'lucide-react';
import { LIVE_LOG_SAMPLES } from '../data/mockData';

const LogStreamModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(LIVE_LOG_SAMPLES, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#161033] border border-indigo-500/30 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-indigo-500/20 flex items-center justify-between bg-[#0F0B21]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-pink-950/60 text-pink-400 border border-pink-500/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Live Ingested Telemetry Log Stream</h3>
              <p className="text-xs text-slate-400">Stream query filter: <span className="font-mono text-indigo-400">env:production service:* level:ANY</span></p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              title="Copy JSON Payload"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Input */}
        <div className="p-4 bg-[#0A0718] border-b border-slate-800 flex items-center space-x-3">
          <Filter className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            readOnly
            value="service:payment-service OR service:api-gateway status:5xx"
            className="w-full bg-[#0F0B21] border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-200 focus:outline-none"
          />
          <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs rounded-lg transition flex items-center space-x-1">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Poll</span>
          </button>
        </div>

        {/* Logs Console Container */}
        <div className="p-6 overflow-y-auto space-y-3 font-mono text-xs bg-[#0A0718] flex-1">
          {LIVE_LOG_SAMPLES.map((log) => (
            <div key={log.id} className="p-3 bg-[#0F0B21] rounded-xl border border-slate-800 hover:border-indigo-500/40 transition">
              <div className="flex items-center justify-between text-slate-400 mb-1 text-[11px]">
                <span className="text-slate-500">{log.timestamp}</span>
                <span className="text-purple-400 font-semibold">{log.service}</span>
                <span className="text-slate-500">{log.traceId}</span>
              </div>
              <div className="text-slate-200">{log.message}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0F0B21] border-t border-indigo-500/20 flex justify-between items-center text-xs text-slate-400">
          <span>Showing 6 of 600,000 index entries</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
};

export default LogStreamModal;
