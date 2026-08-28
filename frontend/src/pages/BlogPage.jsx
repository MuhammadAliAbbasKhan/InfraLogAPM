import React from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Engineering Tech Blog</h1>
        <p className="text-slate-300 text-sm">Deep dives into distributed systems, eBPF kernel probes, eBPF telemetry, and cloud observability architecture.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="glass-panel p-6 rounded-2xl border border-indigo-500/20 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-indigo-400 font-mono">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">{post.title}</h3>
              <p className="text-xs text-slate-400">{post.snippet}</p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
              <span>{post.date}</span>
              <span className="text-indigo-400 font-semibold flex items-center space-x-1">Read Article <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
