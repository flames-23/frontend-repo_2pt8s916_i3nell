import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Registered Nurse',
    place: 'City General Hospital — Medical-Surgical Unit',
    period: '2021 — Present',
    points: [
      'Provide patient-centered care to a 5:1 ratio, ensuring safety and comfort.',
      'Administer medications, IV therapy, and wound care per protocols.',
      'Collaborate with physicians and allied health professionals for care plans.',
    ],
  },
  {
    role: 'Clinical Rotation (RN Intern)',
    place: 'Regional Health Center — Emergency Department',
    period: '2020 — 2021',
    points: [
      'Assisted triage, vital sign monitoring, and rapid patient assessments.',
      'Supported emergency procedures and prepared equipment as needed.',
      'Engaged in patient education for discharge planning and follow-up.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0b1020] py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-cyan-500/20 p-2 text-cyan-300">
            <Briefcase size={20} />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-white/70">{exp.place}</p>
                </div>
                <span className="text-sm text-cyan-300/90">{exp.period}</span>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-white/80">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-0.5 text-cyan-300" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
