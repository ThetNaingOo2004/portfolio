import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Sparkle from './ui/Sparkle';
import { TopRightWave, BottomLeftWave } from './ui/WaveAccent';

export default function Hero({ onOpenCV, onCopyEmail }) {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main Editorial Sheet Container — inspired by reference presentation board */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-ice-50 border border-navy-900/12 rounded-2xl shadow-editorial overflow-hidden"
        >
          <TopRightWave className="absolute top-0 right-0 w-72 sm:w-96 h-auto" />
          <BottomLeftWave className="absolute bottom-0 left-0 w-64 sm:w-80 h-auto" />

          {/* Top Editorial Metadata Row */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 sm:px-10 pt-7 pb-5 border-b border-navy-900/10">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-navy-900/80">
              <span>B.Sc. Digital Technology & Innovation</span>
              <span className="hidden sm:inline text-navy-900/25">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-cobalt-600">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-navy-900">
              <span>{personalInfo.yearLabel}</span>
              <span aria-hidden="true" className="text-cobalt-600">→</span>
            </div>
          </div>

          {/* Center Hero Composition */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center px-6 sm:px-10 py-10 sm:py-14">
            {/* Left Typography & Actions */}
            <div className="lg:col-span-7">
              <div className="relative inline-block mb-4">
                <Sparkle className="w-4 h-4 text-cobalt-600 absolute -top-2 -left-5 hidden sm:block" />
                <p className="font-mono text-xs sm:text-sm text-cobalt-600 font-medium tracking-wide">
                  Software Engineering · Data Analysis · Data Science
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-navy-900 leading-[1.03]">
                {personalInfo.name}
                <span className="block font-serif italic font-normal text-3xl sm:text-5xl text-cobalt-600 mt-1.5">
                  Digital Technology & Innovation
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slateink leading-relaxed max-w-xl">
                {personalInfo.intro}
              </p>

              {/* Primary & Secondary Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 text-ice-50 text-sm font-semibold hover:bg-navy-800 transition-colors shadow-sm"
                >
                  Explore My Work
                  <ArrowDownRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy-900 border border-navy-900/20 text-sm font-semibold hover:border-navy-900/50 hover:bg-ice-100/60 transition-colors"
                >
                  <FileText className="w-4 h-4 text-cobalt-600" />
                  View / Download CV
                </button>
              </div>
            </div>

            {/* Right Profile Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 md:w-80">
                <Sparkle className="w-5 h-5 text-navy-900 absolute -top-3 -right-3 z-20" />
                <Sparkle className="w-3 h-3 text-cobalt-600 absolute top-4 -right-6 z-20" />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-navy-900/15 bg-ice-200 shadow-card">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} portrait`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Subtle Academic Caption Card */}
                <div className="mt-3 flex items-center justify-between px-4 py-2.5 bg-white/95 border border-navy-900/10 rounded-xl text-xs">
                  <span className="font-semibold text-navy-900">Kasem Bundit University</span>
                  <span className="font-mono text-cobalt-600 font-medium">GPA {personalInfo.gpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contact Strip — directly echoing the pipe-separated footer strip of the reference */}
          <div className="relative z-10 bg-white/80 border-t border-navy-900/10 px-6 sm:px-10 py-4">
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs sm:text-sm text-navy-900">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cobalt-600 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white inline-flex items-center justify-center">
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">linkedin.com/in/{personalInfo.linkedinHandle}</span>
              </a>

              <span className="hidden md:inline-block h-4 w-px bg-navy-900/20" aria-hidden="true" />

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 hover:text-cobalt-600 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white inline-flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">{personalInfo.email}</span>
              </button>

              <span className="hidden md:inline-block h-4 w-px bg-navy-900/20" aria-hidden="true" />

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cobalt-600 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white inline-flex items-center justify-center">
                  <Github className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">github.com/{personalInfo.githubHandle}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
