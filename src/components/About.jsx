import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="01 / About"
          title="Background & Direction"
          subtitle="Combining practical software development with analytical thinking and data-oriented problem-solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-8 bg-ice-50 border border-navy-900/10 rounded-2xl p-7 sm:p-10 shadow-card"
          >
            <p className="font-serif italic text-2xl sm:text-[1.7rem] text-navy-900 leading-snug mb-6">
              “{aboutContent.lead}”
            </p>
            <div className="space-y-4 text-slateink text-sm sm:text-base leading-relaxed">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Academic Snapshot Column */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="bg-navy-900 text-ice-50 rounded-2xl p-7 shadow-editorial">
              <p className="font-mono text-xs uppercase tracking-widest text-ice-300 mb-5">
                Academic Snapshot
              </p>
              <dl className="divide-y divide-white/10">
                {aboutContent.highlights.map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-ice-200/80">{item.label}</dt>
                    <dd className="font-display font-bold text-sm sm:text-base text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white border border-navy-900/10 rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-2">
                Core Philosophy
              </p>
              <p className="font-display text-lg font-bold text-navy-900 leading-snug">
                Build. Analyze. Iterate.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slateink leading-relaxed">
                Learning through real implementation—turning coursework and curiosity into working applications and verifiable analysis.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
