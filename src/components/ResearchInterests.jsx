import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { researchInterests } from '../data/portfolioData';

export default function ResearchInterests() {
  return (
    <section id="interests" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="05 / Research & Interests"
          title="Areas of Exploration"
          subtitle="Academic and technical domains guiding my coursework, independent projects, and future research goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {researchInterests.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group bg-ice-50 hover:bg-white border border-navy-900/10 hover:border-cobalt-600/35 rounded-xl p-5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt-600">
                  {item.area}
                </span>
                <span className="font-mono text-[11px] text-navy-900/35">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-navy-900 mb-1.5">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-slateink leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
