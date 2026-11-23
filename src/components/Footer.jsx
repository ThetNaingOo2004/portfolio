import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 bg-ice-50/80 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slateink">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-navy-900">{personalInfo.name}</span>
          <span className="text-navy-900/25">·</span>
          <span>© {year} All rights reserved.</span>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-navy-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-900 transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
