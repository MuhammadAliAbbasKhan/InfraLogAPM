import React, { useState, useEffect } from 'react';
import { Activity, Terminal, AlertTriangle, Cpu, HardDrive, RefreshCw, CheckCircle, Flame } from 'lucide-react';
import { LIVE_LOG_SAMPLES, APM_SPAN_SAMPLES } from '../data/mockData';

const LiveTelemetryWidget = () => {
  const [activeTab, setActiveTab] = useState('metrics'); // metrics, logs, apm, alerts
  const [cpuUsage, setCpuUsage] = useState(42.8);
  const [memoryUsage, setMemoryUsage] = useState(68.2);
  const [rps, setRps] = useState(14850);
  const [alertTriggered, setAlertTriggered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => +(prev + (Math.random() * 4 - 2)).toFixed(1));
      setMemoryUsage((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
      setRps((prev) => Math.floor(prev + (Math.random() * 200 - 100)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-2xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-[#161033]">
      {/* Widget Control Top Bar */}
      <div className="bg-[#0F0B21]/90 px-4 py-3 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-mono font-semibold text-slate-200">CLUSTER: prod-us-east-k8s-01</span>
          <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">eBPF Active</span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition flex items-center space-x-1 ${
              activeTab === 'metrics' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Metrics</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition flex items-center space-x-1 ${
              activeTab === 'logs' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Live Logs</span>
          </button>
          <button
            onClick={() => setActiveTab('apm')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition flex items-center space-x-1 ${
              activeTab === 'apm' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>APM Spans</span>
          </button>
        </div>

        <button
          onClick={() => setAlertTriggered(!alertTriggered)}
          className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition flex items-center space-x-1 ${
            alertTriggered 
              ? 'bg-rose-950/80 text-rose-300 border-rose-500/40 animate-pulse' 
              : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          <span>{alertTriggered ? 'Anomaly Simulated!' : 'Simulate Spike'}</span>
        </button>
      </div>

      {/* Body Area */}
      <div className="p-6">
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0F0B21] p-4 rounded-xl border border-indigo-500/20">
                <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                  <span>Cluster CPU Allocation</span>
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-mono font-bold text-white">{cpuUsage}%</div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${cpuUsage}%` }}></div>
                </div>
              </div>

              <div className="bg-[#0F0B21] p-4 rounded-xl border border-indigo-500/20">
                <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                  <span>Memory RSS (RAM)</span>
                  <HardDrive className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-mono font-bold text-white">{memoryUsage}%</div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div className="bg-purple-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${memoryUsage}%` }}></div>
                </div>
              </div>

              <div className="bg-[#0F0B21] p-4 rounded-xl border border-indigo-500/20">
                <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                  <span>Requests Per Sec (RPS)</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-mono font-bold text-emerald-400">{rps.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400 mt-2">p99 Latency: <span className="text-white font-mono">14.2 ms</span></div>
              </div>
            </div>

            {/* Sparkline Metric Graph Simulation */}
            <div className="bg-[#0F0B21] p-4 rounded-xl border border-indigo-500/20 relative overflow-hidden">
              <div className="flex justify-between items-center text-xs mb-3 text-slate-400 font-mono">
                <span>METRIC: system.http.requests.latency_p99</span>
                <span className="text-indigo-400 font-semibold">LIVE TICKER (2s)</span>
              </div>
              <div className="h-28 flex items-end justify-between gap-1 pt-4">
                {[35, 42, 38, 45, 52, alertTriggered ? 95 : 48, alertTriggered ? 88 : 44, 40, 46, 50, 42, 39, 43, 47, 51].map((val, idx) => (
                  <div key={idx} className="w-full bg-slate-800 rounded-t flex flex-col justify-end h-full">
                    <div 
                      className={`w-full rounded-t transition-all duration-500 ${
                        val > 80 ? 'bg-rose-500 shadow-lg shadow-rose-500/50' : 'bg-gradient-to-t from-indigo-600 to-purple-400'
                      }`} 
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-[#0A0718] rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-2.5 overflow-x-auto max-h-72">
            {LIVE_LOG_SAMPLES.map((log) => (
              <div key={log.id} className="flex items-start space-x-3 py-1 border-b border-slate-900/60 hover:bg-slate-900/50 px-2 rounded">
                <span className="text-slate-500">{log.timestamp}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                  log.level === 'ERROR' ? 'bg-rose-950 text-rose-400 border border-rose-800' :
                  log.level === 'WARN' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                  'bg-indigo-950 text-indigo-400'
                }`}>
                  {log.level}
                </span>
                <span className="text-purple-400 font-medium">[{log.service}]</span>
                <span className="text-slate-200 flex-1 truncate">{log.message}</span>
                <span className="text-slate-500 text-[10px]">{log.traceId}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'apm' && (
          <div className="bg-[#0A0718] rounded-xl border border-indigo-500/20 p-4 space-y-3 font-mono text-xs">
            <div className="text-slate-400 text-xs flex justify-between border-b border-slate-800 pb-2">
              <span>TRACE ID: tr-94a8c1f00b (Root Span)</span>
              <span className="text-emerald-400 font-semibold">Total Duration: 148.5ms</span>
            </div>

            <div className="space-y-2 pt-1">
              {APM_SPAN_SAMPLES.map((span) => (
                <div key={span.id} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-200 font-semibold">{span.service} <span className="text-slate-400 font-normal">({span.name})</span></span>
                    <span className="text-indigo-300">{span.duration}</span>
                  </div>
                  <div className="w-full bg-slate-900 h-3 rounded-full relative overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${span.color}`}
                      style={{ width: span.widthPct, marginLeft: span.offsetPct }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LiveTelemetryWidget;
