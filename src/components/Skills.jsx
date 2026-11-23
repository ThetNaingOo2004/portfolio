import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Server,
  BarChart3,
  Wrench,
  ArrowUpRight,
  ChevronDown,
  Check,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { capabilities } from '../data/portfolioData';

const iconMap = {
  'web-development': Layout,
  'backend-systems': Server,
  'data-analysis': BarChart3,
  'workflow-tools': Wrench,
};

export default function Skills() {
  const [activeId, setActiveId] = useState('web-development');

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 bg-ice-50/70 border-y border-navy-900/10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="02 / Capabilities"
          title="What I Build & Explore"
          subtitle="How my technical foundation translates into practical web systems, backend architecture, and data-oriented problem-solving."
        />

        <div className="border-t border-navy-900/15">
          {capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.id] || Layout;
            const isOpen = activeId === cap.id;
            const isNavy = cap.accent === 'navy';

            return (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border-b border-navy-900/15 transition-colors duration-300 ${
                  isOpen
                    ? isNavy
                      ? 'bg-navy-900 text-ice-50 rounded-2xl my-4 px-6 sm:px-9 border-transparent shadow-editorial'
                      : 'bg-white text-navy-900 rounded-2xl my-4 px-6 sm:px-9 border-navy-900/10 shadow-card'
                    : 'hover:bg-white/60 px-2 sm:px-4'
                }`}
              >
                {/* Interactive Header Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(cap.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-7 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center group"
                >
                  {/* Large Editorial Number */}
                  <div className="lg:col-span-2 flex items-center justify-between lg:justify-start gap-4">
                    <span
                      className={`font-serif italic text-4xl sm:text-5xl leading-none transition-colors ${
                        isOpen && isNavy
                          ? 'text-ice-300'
                          : isOpen
                          ? 'text-cobalt-600'
                          : 'text-navy-900/35 group-hover:text-cobalt-600'
                      }`}
                    >
                      {cap.number}
                    </span>
                    <span
                      className={`lg:hidden w-8 h-8 rounded-full inline-flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      } ${
                        isOpen && isNavy
                          ? 'bg-white/10 text-ice-100'
                          : 'bg-ice-200/70 text-navy-900'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title & Eyebrow */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <Icon
                        className={`w-4 h-4 ${
                          isOpen && isNavy ? 'text-ice-300' : 'text-cobalt-600'
                        }`}
                      />
                      <span
                        className={`font-mono text-[11px] uppercase tracking-widest ${
                          isOpen && isNavy ? 'text-ice-300' : 'text-cobalt-600'
                        }`}
                      >
                        {cap.eyebrow}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Concise Summary */}
                  <div className="lg:col-span-4">
                    <p
                      className={`text-sm leading-relaxed ${
                        isOpen && isNavy ? 'text-ice-200/85' : 'text-slateink'
                      }`}
                    >
                      {cap.summary}
                    </p>
                  </div>

                  {/* Desktop Expand Indicator */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <span
                      className={`w-9 h-9 rounded-full inline-flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      } ${
                        isOpen && isNavy
                          ? 'bg-white/15 text-white'
                          : isOpen
                          ? 'bg-navy-900 text-white'
                          : 'bg-ice-200/70 text-navy-900'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Expandable Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`pt-6 pb-8 border-t grid grid-cols-1 lg:grid-cols-12 gap-8 ${
                          isNavy ? 'border-white/15' : 'border-navy-900/10'
                        }`}
                      >
                        {/* Practical Outcomes / Areas of Experience */}
                        <div className="lg:col-span-6 lg:col-start-3">
                          <p
                            className={`font-mono text-[11px] uppercase tracking-widest mb-3.5 ${
                              isNavy ? 'text-ice-300' : 'text-navy-900/60'
                            }`}
                          >
                            In Practice
                          </p>
                          <ul className="space-y-2.5">
                            {cap.deliverables.map((item) => (
                              <li
                                key={item}
                                className={`flex items-start gap-2.5 text-sm ${
                                  isNavy ? 'text-ice-100' : 'text-navy-900/85'
                                }`}
                              >
                                <Check
                                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                                    isNavy ? 'text-ice-300' : 'text-cobalt-600'
                                  }`}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {cap.note && (
                            <p
                              className={`mt-5 text-xs leading-relaxed pl-3.5 border-l-2 ${
                                isNavy
                                  ? 'border-ice-300/50 text-ice-200/80'
                                  : 'border-cobalt-600/40 text-slateink'
                              }`}
                            >
                              {cap.note}
                            </p>
                          )}
                        </div>

                        {/* Technologies & Related Projects */}
                        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                          <div>
                            <p
                              className={`font-mono text-[11px] uppercase tracking-widest mb-3.5 ${
                                isNavy ? 'text-ice-300' : 'text-navy-900/60'
                              }`}
                            >
                              Technologies & Focus
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cap.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                                    isNavy
                                      ? 'bg-white/10 text-ice-50 border border-white/15'
                                      : 'bg-ice-100 text-navy-900 border border-navy-900/10'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {cap.relatedProjects.length > 0 && (
                            <div
                              className={`pt-4 border-t ${
                                isNavy ? 'border-white/15' : 'border-navy-900/10'
                              }`}
                            >
                              <p
                                className={`font-mono text-[11px] uppercase tracking-widest mb-2.5 ${
                                  isNavy ? 'text-ice-300' : 'text-navy-900/60'
                                }`}
                              >
                                Applied In
                              </p>
                              <div className="flex flex-wrap gap-3">
                                {cap.relatedProjects.map((proj) => (
                                  <a
                                    key={proj.title}
                                    href={proj.href}
                                    className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                                      isNavy
                                        ? 'text-ice-100 hover:text-white'
                                        : 'text-navy-900 hover:text-cobalt-600'
                                    }`}
                                  >
                                    {proj.title}
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}