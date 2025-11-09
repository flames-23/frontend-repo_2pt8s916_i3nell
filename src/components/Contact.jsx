import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0b1020] py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-cyan-500/20 p-2 text-cyan-300">
            <Mail size={20} />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-medium text-white">Get in touch</h3>
            <p className="text-white/80">
              I’m open to nursing roles, patient education projects, and healthcare collaborations. Feel free to reach out.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><Mail size={18} className="text-cyan-300" /> youremail@example.com</p>
              <p className="flex items-center gap-2"><Phone size={18} className="text-cyan-300" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-cyan-300" /> Your City, Country</p>
            </div>
          </div>

          <form className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm text-white/70">Name</label>
                <input id="name" type="text" className="rounded-md border border-white/10 bg-[#0b1020] px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm text-white/70">Email</label>
                <input id="email" type="email" className="rounded-md border border-white/10 bg-[#0b1020] px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm text-white/70">Message</label>
              <textarea id="message" rows={4} className="rounded-md border border-white/10 bg-[#0b1020] px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="How can I help?" />
            </div>
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 border-t border-white/10/50 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Registered Nurse
      </footer>
    </section>
  );
};

export default Contact;
