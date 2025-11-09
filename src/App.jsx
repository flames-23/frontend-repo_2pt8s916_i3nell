import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] font-inter">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-cyan-500/20 p-1.5 text-cyan-300"><User size={18} /></span>
            <span className="text-sm font-medium">RN Portfolio</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
