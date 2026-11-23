import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ index, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div
        className={`flex items-center gap-4 mb-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="font-mono text-xs font-medium tracking-widest uppercase text-cobalt-600">
          {index}
        </span>
        <span className="h-px w-12 bg-navy-900/25" aria-hidden="true" />
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-slateink max-w-md leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
