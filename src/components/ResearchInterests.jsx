import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { researchInterests } from '../data/portfolioData';

export default function ResearchInterests() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="interests" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="05 / Research & Interests"
          title="Areas of Exploration"
          subtitle="Academic and technical domains guiding my coursework, independent projects, and future research goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {researchInterests.map((item, idx) => {
            const hiddenOnMobile = idx >= 3 && !showAllMobile;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className={`${
                  hiddenOnMobile ? 'hidden md:block' : 'block'
                } group bg-ice-50 hover:bg-white border border-navy-900/10 hover:border-cobalt-600/35 rounded-xl p-5 transition-all`}
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
            );
          })}
        </div>

        {/* Mobile-only Circular Dropdown Button */}
        <div className="mt-7 flex flex-col items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            aria-expanded={showAllMobile}
            aria-label={showAllMobile ? 'Show fewer interests' : 'Show all interests'}
            className="w-12 h-12 rounded-full bg-navy-900 text-ice-50 hover:bg-navy-800 shadow-editorial inline-flex items-center justify-center transition-colors"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                showAllMobile ? 'rotate-180' : ''
              }`}
            />
          </button>
          <span className="font-mono text-[11px] uppercase tracking-wider text-slateink">
            {showAllMobile ? 'Show less' : `View ${researchInterests.length - 3} more`}
          </span>
        </div>
      </div>
    </section>
  );
}