import React from 'react';
import { Calendar, Video, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsWebinarsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-white">DASH Conference & Webinars</h1>
        <p className="text-slate-300 text-sm">Join global engineers for live keynotes, hands-on eBPF workshops, and incident response strategy sessions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl border border-indigo-500/20 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 bg-amber-950/60 px-3 py-1 rounded w-fit">
            <Calendar className="w-4 h-4" />
            <span>October 14-16, 2026 — San Francisco, CA</span>
          </div>
          <h3 className="text-2xl font-bold text-white">DASH 2026 Observability Summit</h3>
          <p className="text-sm text-slate-400">
            3 days of technical keynotes from Kubernetes maintainers, cloud architects, and security pioneers.
          </p>
          <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-500 transition">Register for Keynote Access</button>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-indigo-500/20 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 bg-purple-950/60 px-3 py-1 rounded w-fit">
            <Video className="w-4 h-4" />
            <span>Live Interactive Webinar — Sept 5, 2026</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Mastering Cloud SIEM Runtime Threat Hunting</h3>
          <p className="text-sm text-slate-400">
            Learn how to write custom detection rules for container breakouts and Kubernetes API access anomalies.
          </p>
          <button className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-xl text-sm hover:bg-purple-500 transition">Reserve Virtual Seat</button>
        </div>
      </div>
    </div>
  );
};

export default EventsWebinarsPage;
