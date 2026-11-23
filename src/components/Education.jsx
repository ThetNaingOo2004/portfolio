import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { educationList, certificationsList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-ice-50/70 border-y border-navy-900/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="04 / Academic Foundation"
          title="Education & Certifications"
          subtitle="Formal university education paired with focused technical and language coursework."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-cobalt-600" />
              <h3 className="font-display text-lg font-bold text-navy-900">Education</h3>
              <span className="h-px flex-1 bg-navy-900/15 ml-2" aria-hidden="true" />
            </div>

            <div className="space-y-6 relative before:content-[''] before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-px before:bg-navy-900/15">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative pl-8"
                >
                  <span
                    className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-cobalt-600 border-4 border-ice-100"
                    aria-hidden="true"
                  />
                  <div className="bg-white border border-navy-900/10 rounded-2xl p-6 shadow-card">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-medium text-cobalt-600">
                        {edu.period}
                      </span>
                      {edu.metric && (
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-navy-900 text-ice-50">
                          {edu.metric}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-xl font-bold text-navy-900">
                      {edu.credential}
                    </h4>
                    <p className="text-sm font-medium text-navy-800/80 mt-1">
                      {edu.institution} — {edu.location}
                    </p>
                    <p className="text-sm text-slateink mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Additional Learning */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-cobalt-600" />
              <h3 className="font-display text-lg font-bold text-navy-900">
                Certifications & Additional Learning
              </h3>
              <span className="h-px flex-1 bg-navy-900/15 ml-2" aria-hidden="true" />
            </div>

            <div className="space-y-5">
              {certificationsList.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`rounded-2xl p-6 border ${
                    cert.highlight
                      ? 'bg-navy-900 text-ice-50 border-navy-900 shadow-editorial'
                      : 'bg-white text-navy-900 border-navy-900/10 shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span
                      className={`font-mono text-xs font-medium ${
                        cert.highlight ? 'text-ice-300' : 'text-cobalt-600'
                      }`}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      className={`font-mono text-xs px-2.5 py-0.5 rounded-full ${
                        cert.highlight
                          ? 'bg-white/15 text-white'
                          : 'bg-ice-100 text-navy-900'
                      }`}
                    >
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold tracking-tight">
                    {cert.title}
                  </h4>
                  <p
                    className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                      cert.highlight ? 'text-ice-200/85' : 'text-slateink'
                    }`}
                  >
                    {cert.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
