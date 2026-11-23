import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ice-50/90 backdrop-blur-md border-b border-navy-900/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          className="group inline-flex items-baseline gap-2 font-display text-lg font-extrabold tracking-tight text-navy-900"
          aria-label={`${personalInfo.name} Home`}
        >
          <span>{personalInfo.name}</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cobalt-600 transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-900/75 hover:text-navy-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-navy-900 text-ice-50 rounded-full hover:bg-navy-800 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-navy-900 hover:bg-navy-900/5 transition-colors"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-ice-50 border-b border-navy-900/10 px-5 py-5 shadow-editorial">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-base font-medium text-navy-900 border-b border-navy-900/5 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenCV();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-navy-900 text-white rounded-full"
            >
              <FileText className="w-4 h-4" />
              View / Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
