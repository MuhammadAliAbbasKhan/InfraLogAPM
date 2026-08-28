import React, { useState } from 'react';
import { Search, X, Server, Activity, Terminal, ShieldAlert, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEARCH_SUGGESTIONS = [
  { title: "Kubernetes Agent Helm Installation", category: "Docs", path: "/docs", icon: BookOpen },
  { title: "APM Distributed Tracing & Flamegraphs", category: "Products", path: "/apm", icon: Activity },
  { title: "eBPF Network Performance Monitoring", category: "Products", path: "/network", icon: Server },
  { title: "Cloud SIEM & Container Posture Management", category: "Security", path: "/security", icon: ShieldAlert },
  { title: "Log Pipeline Rehydration & Index Filters", category: "Log Management", path: "/log-management", icon: Terminal },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredResults = query
    ? SEARCH_SUGGESTIONS.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()))
    : SEARCH_SUGGESTIONS;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#161033] border border-indigo-500/30 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-indigo-500/20 flex items-center space-x-3 bg-[#0F0B21]">
          <Search className="w-5 h-5 text-indigo-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, integrations, metrics, API docs..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm font-medium focus:outline-none"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2 bg-[#0A0718]">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
            {query ? `Search Results (${filteredResults.length})` : 'Popular Searches'}
          </div>

          {filteredResults.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No matching observability documents found for "{query}".
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#161033] transition group border border-transparent hover:border-indigo-500/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
                </Link>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-[#0F0B21] border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
          <span>Press ESC to close</span>
          <span>InfraLogAPM Search Engine v2.4</span>
        </div>

      </div>
    </div>
  );
};

export default SearchModal;
