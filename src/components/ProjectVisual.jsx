import React from 'react';
import { Calendar, MessageSquare, Bell, ShoppingBag, Send, Layers, FileDown, Filter, Lock } from 'lucide-react';

export default function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="w-full h-full min-h-[240px] bg-ice-200 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  // Bespoke editorial UI mockups tailored to each project's actual functionality
  if (project.visualType === 'dawah') {
    return (
      <div className="w-full h-full min-h-[260px] bg-navy-900 p-6 sm:p-8 flex flex-col justify-between text-ice-50 relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-ice-300" />
            <span className="font-mono text-xs text-ice-200">myanmardawah.com</span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/10 text-ice-200">
            Community Portal
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <div className="bg-white/10 border border-white/10 rounded-xl p-4">
            <Calendar className="w-4 h-4 text-ice-300 mb-2" />
            <p className="font-display text-sm font-bold">Islamic Events</p>
            <p className="text-xs text-ice-200/75 mt-1">Schedules & announcements</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-xl p-4">
            <MessageSquare className="w-4 h-4 text-ice-300 mb-2" />
            <p className="font-display text-sm font-bold">Community Q&A</p>
            <p className="text-xs text-ice-200/75 mt-1">Structured knowledge archive</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-xl p-4">
            <Bell className="w-4 h-4 text-ice-300 mb-2" />
            <p className="font-display text-sm font-bold">Notifications</p>
            <p className="text-xs text-ice-200/75 mt-1">Subscriber updates</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-ice-300/80">
          <span>PHP · MySQL · Bootstrap</span>
          <span>Educational Resources</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'afaaf') {
    return (
      <div className="w-full h-full min-h-[240px] bg-ice-200/80 p-6 flex flex-col justify-between text-navy-900 border-b lg:border-b-0 border-navy-900/10">
        <div className="flex items-center justify-between border-b border-navy-900/10 pb-3">
          <span className="font-mono text-xs text-navy-900/80">afaaf.store</span>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-navy-900 text-white">
            E-Commerce + POS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-5">
          <div className="bg-white rounded-xl p-3.5 border border-navy-900/10">
            <ShoppingBag className="w-4 h-4 text-cobalt-600 mb-2" />
            <p className="font-display text-xs font-bold">Variants & Stock</p>
            <p className="text-[11px] text-slateink mt-0.5">Live inventory control</p>
          </div>
          <div className="bg-white rounded-xl p-3.5 border border-navy-900/10">
            <Send className="w-4 h-4 text-cobalt-600 mb-2" />
            <p className="font-display text-xs font-bold">Telegram Alerts</p>
            <p className="text-[11px] text-slateink mt-0.5">Instant order dispatch</p>
          </div>
        </div>

        <div className="bg-white/90 rounded-lg px-3.5 py-2 border border-navy-900/10 flex items-center justify-between text-xs">
          <span className="font-medium text-navy-900">Checkout Workflow</span>
          <span className="font-mono text-[11px] text-cobalt-600">PHP + MySQL</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'vanta') {
    return (
      <div className="w-full h-full min-h-[240px] bg-ice-50 p-6 flex flex-col justify-between text-navy-900 bg-editorial-grid border-b border-navy-900/10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-cobalt-600">vantatech.site</span>
          <Layers className="w-4 h-4 text-navy-900/60" />
        </div>

        <div className="my-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cobalt-600 mb-1">
            Digital & Education
          </p>
          <p className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
            Vanta Tech
          </p>
          <div className="mt-4 flex gap-2">
            <span className="h-1.5 w-16 rounded-full bg-navy-900" />
            <span className="h-1.5 w-10 rounded-full bg-cobalt-500/60" />
            <span className="h-1.5 w-6 rounded-full bg-cobalt-500/30" />
          </div>
        </div>

        <div className="text-[11px] font-mono text-slateink">
          Static Architecture · HTML / CSS / JS
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[240px] bg-white p-6 sm:p-8 flex flex-col justify-between text-navy-900 border-b lg:border-b-0 lg:border-r border-navy-900/10">
      <div className="flex items-center justify-between border-b border-navy-900/10 pb-3">
        <span className="font-mono text-xs font-medium text-navy-900">Personal Finance Ledger</span>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-cobalt-600">
          <Lock className="w-3 h-3" /> Authenticated
        </span>
      </div>

      <div className="space-y-2.5 my-5">
        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-ice-100/80 text-xs">
          <span className="font-medium">Income & Expense Records</span>
          <span className="font-mono text-cobalt-600">CRUD</span>
        </div>
        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-ice-100/80 text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5 text-cobalt-600" /> Multi-Criteria Filtering
          </span>
          <span className="font-mono text-slateink">Category / Date</span>
        </div>
        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-navy-900 text-ice-50 text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <FileDown className="w-3.5 h-3.5 text-ice-300" /> Financial Statement
          </span>
          <span className="font-mono text-ice-300">PDF Export</span>
        </div>
      </div>

      <div className="text-[11px] font-mono text-slateink">PHP · MySQL · Tailwind CSS</div>
    </div>
  );
}
