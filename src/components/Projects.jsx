import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Check, ChevronDown, Lock } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ProjectVisual from './ProjectVisual';
import { projects, academicProjects } from '../data/portfolioData';

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-cobalt-600">
            {project.number} · {project.category}
          </span>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-ice-100 text-navy-900/80 border border-navy-900/10">
            {project.context}
          </span>
        </div>

        <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 mb-3">
          {project.title}
        </h3>

        <p className="text-sm sm:text-[15px] text-slateink leading-relaxed mb-5">
          {project.overview}
        </p>

        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-navy-900/60 mb-2.5">
            Key Functionality
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-navy-900/85">
                <Check className="w-3.5 h-3.5 text-cobalt-600 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-5 border-t border-navy-900/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-ice-100 text-navy-900 font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-900 hover:text-cobalt-600 transition-colors"
            >
              Live Website
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-900 hover:text-cobalt-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [featured, second, third, fourth] = projects;

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="03 / Featured Projects"
          title="Selected Technical Work"
          subtitle="Practical web systems built with PHP, MySQL, JavaScript, and modern CSS—solving real community, commerce, and personal finance needs."
        />

        <div className="space-y-8">
          {/* 01 — Always visible on mobile & desktop */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-navy-900/12 rounded-2xl overflow-hidden shadow-editorial"
          >
            <div className="lg:col-span-5">
              <ProjectVisual project={featured} />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-9">
              <ProjectMeta project={featured} />
            </div>
          </motion.article>

          {/* 02, 03 & 04 — Hidden on mobile until expanded; always visible on md+ */}
          <div className={`${showAllMobile ? 'block' : 'hidden md:block'} space-y-8`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7 bg-white border border-navy-900/12 rounded-2xl overflow-hidden shadow-card flex flex-col"
              >
                <ProjectVisual project={second} />
                <div className="p-6 sm:p-8 flex-1">
                  <ProjectMeta project={second} />
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="lg:col-span-5 bg-white border border-navy-900/12 rounded-2xl overflow-hidden shadow-card flex flex-col"
              >
                <ProjectVisual project={third} />
                <div className="p-6 sm:p-8 flex-1">
                  <ProjectMeta project={third} />
                </div>
              </motion.article>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-12 bg-ice-50 border border-navy-900/12 rounded-2xl overflow-hidden shadow-card"
            >
              <div className="lg:col-span-5">
                <ProjectVisual project={fourth} />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-9">
                <ProjectMeta project={fourth} />
              </div>
            </motion.article>
          </div>
        </div>

        {/* Mobile-only Circular Dropdown Button */}
        <div className="mt-8 flex flex-col items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            aria-expanded={showAllMobile}
            aria-label={showAllMobile ? 'Show fewer projects' : 'Show all projects'}
            className="w-12 h-12 rounded-full bg-navy-900 text-ice-50 hover:bg-navy-800 shadow-editorial inline-flex items-center justify-center transition-colors"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                showAllMobile ? 'rotate-180' : ''
              }`}
            />
          </button>
          <span className="font-mono text-[11px] uppercase tracking-wider text-slateink">
            {showAllMobile ? 'Show less' : `View ${projects.length - 1} more`}
          </span>
        </div>

        {/* Academic & In-Progress Coursework Subsection */}
        <div className="mt-16 pt-12 border-t border-navy-900/12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-1.5">
                Current Semester · Kasem Bundit University
              </p>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
                Academic & In-Progress Projects
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slateink max-w-sm">
              Repositories are kept private during the active semester and will be published upon completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {academicProjects.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-ice-50 border border-navy-900/10 rounded-2xl p-6 flex flex-col justify-between shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] text-cobalt-600 font-medium">
                      {item.format}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-navy-900 border border-navy-900/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
                      {item.status}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-navy-900 leading-snug mb-2.5">
                    {item.course}
                  </h4>

                  <p className="text-xs sm:text-sm text-slateink leading-relaxed mb-5">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-900/10 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white text-navy-900/80 border border-navy-900/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.githubUrl ? (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy-900 hover:text-cobalt-600 shrink-0"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Repo
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-navy-900/45 shrink-0"
                      title="Repository is private during the active semester"
                    >
                      <Lock className="w-3 h-3" />
                      Private
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}