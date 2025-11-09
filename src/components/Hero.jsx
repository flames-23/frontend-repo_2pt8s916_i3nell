import React from 'react';
import Spline from '@splinetool/react-spline';
import { Stethoscope, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0b1020]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette overlay (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/40 via-[#0b1020]/20 to-[#0b1020]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-24 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Stethoscope size={16} />
            Compassionate Care • Evidence-Based Practice • Patient Safety
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow md:text-5xl lg:text-6xl">
            Hi, I’m <span className="text-cyan-300">[Your Name]</span>, a dedicated
            <span className="text-cyan-200"> Registered Nurse</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Blending human-centered care with modern clinical practice. Experienced in acute care and patient education, passionate about improving outcomes through empathy, precision, and teamwork.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              download
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
