import React from 'react';
import { User, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1020] py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-cyan-500/20 p-2 text-cyan-300">
            <User size={20} />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="text-white/80">
              I am a Registered Nurse with a strong foundation in acute and medical-surgical care. My approach centers on compassionate, evidence-based practice—prioritizing patient safety, clear communication, and interdisciplinary collaboration.
            </p>
            <p className="mt-4 text-white/80">
              I thrive in fast-paced environments, advocate for patient dignity, and continuously develop my clinical skills in alignment with the latest guidelines.
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2 text-cyan-300">
                <HeartPulse size={20} />
                <span className="font-medium">Core Competencies</span>
              </div>
              <ul className="grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
                <li className="rounded-md bg-white/5 px-3 py-2">Vital signs & monitoring</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Medication administration</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Wound care</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Patient & family education</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Care coordination</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Electronic health records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
