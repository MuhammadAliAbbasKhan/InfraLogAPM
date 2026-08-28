import React, { useState } from 'react';
import LiveTelemetryWidget from '../components/LiveTelemetryWidget';
import LogStreamModal from '../components/LogStreamModal';
import { Zap, Terminal, Activity, Flame, ShieldAlert, Sparkles } from 'lucide-react';

const LiveDemoPage = () => {
  const [logModalOpen, setLogModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-semibold border border-indigo-500/30">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Telemetry Playground</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">Experience Live Observability in Real Time</h1>
        <p className="text-slate-300 text-sm">
          Simulate CPU load spikes, query live stdout log streams, and inspect APM flamegraph spans without installing an agent.
        </p>
      </div>

      <LiveTelemetryWidget />

      <div className="glass-panel p-8 rounded-2xl border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Want to query raw log streams directly?</h3>
          <p className="text-xs text-slate-400">Open the full terminal console to filter logs by service, level, and trace IDs.</p>
        </div>

        <button
          onClick={() => setLogModalOpen(true)}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-pink-600/30 transition flex items-center space-x-2 shrink-0"
        >
          <Terminal className="w-4 h-4" />
          <span>Launch Log Terminal Console</span>
        </button>
      </div>

      <LogStreamModal isOpen={logModalOpen} onClose={() => setLogModalOpen(false)} />

    </div>
  );
};

export default LiveDemoPage;
