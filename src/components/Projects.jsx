import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Check } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ProjectVisual from './ProjectVisual';
import { projects } from '../data/portfolioData';

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
          {/* 01 — Full-Width Editorial Feature */}
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

          {/* 02 & 03 — Asymmetric Split Row */}
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

          {/* 04 — Wide Reversed Showcase */}
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
    </section>
  );
}
