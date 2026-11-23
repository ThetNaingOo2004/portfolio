import React, { useEffect } from 'react';
import { X, Download, Printer } from 'lucide-react';
import {
  personalInfo,
  educationList,
  certificationsList,
  skillCategories,
  projects,
} from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-navy-900/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-10 bg-ice-50 border-b border-navy-900/10 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h2 id="cv-modal-title" className="font-display font-bold text-navy-900 text-base">
              Curriculum Vitae — {personalInfo.name}
            </h2>
            <p className="text-xs text-slateink">Academic & Technical Summary</p>
          </div>
          <div className="flex items-center gap-2">
            {personalInfo.cvUrl ? (
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            ) : (
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-navy-900/70 hover:bg-navy-900/5 hover:text-navy-900"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet */}
        <div className="p-6 sm:p-10 space-y-7 text-navy-900">
          <div className="border-b border-navy-900/15 pb-5">
            <h3 className="font-display text-2xl font-extrabold">{personalInfo.name}</h3>
            <p className="text-sm text-cobalt-600 font-medium mt-1">{personalInfo.roleLine}</p>
            <p className="text-xs text-slateink mt-2">
              {personalInfo.location} · {personalInfo.email} · github.com/{personalInfo.githubHandle}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-3">
              Education
            </h4>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.institution} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="font-semibold text-sm">{edu.credential}</p>
                    <p className="text-xs text-slateink">
                      {edu.institution}, {edu.location} {edu.metric ? `· ${edu.metric}` : ''}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slateink">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-3">
              Certifications
            </h4>
            <ul className="space-y-1.5 text-sm">
              {certificationsList.map((cert) => (
                <li key={cert.title} className="flex justify-between gap-4">
                  <span>
                    <strong>{cert.title}</strong> — {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-slateink">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-3">
              Technical Skills
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillCategories.map((cat) => (
                <p key={cat.id}>
                  <strong className="text-navy-900">{cat.title}:</strong>{' '}
                  <span className="text-slateink">{cat.items.join(', ')}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cobalt-600 mb-3">
              Selected Projects
            </h4>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.id}>
                  <p className="text-sm font-semibold">
                    {p.title}{' '}
                    <span className="font-mono text-xs font-normal text-cobalt-600">
                      ({p.tech.join(', ')})
                    </span>
                  </p>
                  <p className="text-xs text-slateink mt-0.5">{p.overview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
