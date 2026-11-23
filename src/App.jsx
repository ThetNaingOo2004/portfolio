import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResearchInterests from './components/ResearchInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setToastMessage('Email copied to clipboard');
    } catch {
      setToastMessage(personalInfo.email);
    }
    setTimeout(() => setToastMessage(''), 2600);
  };

  return (
    <div className="min-h-screen bg-ice-100 text-navy-900 flex flex-col">
      <Navbar onOpenCV={() => setCvOpen(true)} />

      <main className="flex-1">
        <Hero onOpenCV={() => setCvOpen(true)} onCopyEmail={handleCopyEmail} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ResearchInterests />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      <Footer />

      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy-900 text-ice-50 text-xs font-medium shadow-editorial"
        >
          <CheckCircle2 className="w-4 h-4 text-ice-300" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
