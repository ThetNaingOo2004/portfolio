import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Sparkle from './ui/Sparkle';
import { BottomLeftWave } from './ui/WaveAccent';

export default function Contact({ onCopyEmail }) {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="relative bg-ice-50 border border-navy-900/12 rounded-2xl shadow-editorial overflow-hidden"
        >
          <BottomLeftWave className="absolute bottom-0 left-0 w-72 h-auto opacity-80" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            {/* Left Statement — inspired by "Let's Work Together!" closing card */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:border-r border-navy-900/10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-4">
                  <span>06 / Contact</span>
                  <Sparkle className="w-3.5 h-3.5 text-cobalt-600" />
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.08]">
                  Let’s Work{' '}
                  <span className="font-serif italic font-normal text-cobalt-600">
                    Together.
                  </span>
                </h2>
                <p className="mt-5 text-sm sm:text-base text-slateink leading-relaxed max-w-md">
                  Open to international research opportunities, software engineering or data analysis internships, and thoughtful technical collaborations.
                </p>
              </div>

              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-navy-900/60">
                Based in {personalInfo.location} · Available for Remote & International Programs
              </p>
            </div>

            {/* Right Contact Links */}
            <div className="lg:col-span-6 p-8 sm:p-12 bg-white/75 flex flex-col justify-center space-y-4">
              <div className="p-5 rounded-xl bg-white border border-navy-900/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-full bg-navy-900 text-white inline-flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slateink">
                      Email {personalInfo.emailIsPlaceholder ? '(Configurable)' : ''}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-navy-900 truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-ice-100 hover:bg-ice-200 text-navy-900 text-xs font-semibold transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-navy-900/10 hover:border-cobalt-600/40 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-full bg-navy-900 text-white inline-flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slateink">
                      LinkedIn
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-navy-900 truncate">
                      linkedin.com/in/{personalInfo.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-navy-900/50 group-hover:text-cobalt-600 transition-colors shrink-0" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-navy-900/10 hover:border-cobalt-600/40 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-full bg-navy-900 text-white inline-flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slateink">
                      GitHub
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-navy-900 truncate">
                      github.com/{personalInfo.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-navy-900/50 group-hover:text-cobalt-600 transition-colors shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
