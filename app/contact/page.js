'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-20">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center">
              <span className="text-cyan-400">#</span> LET&apos;S CONNECT
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-12 mx-auto" />

            <p className="text-lg text-slate-300 mb-12 text-center leading-relaxed">
              I’m currently looking for junior developer, data, and technical support roles.
              If you think I’d be a good fit or just want to chat, feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.a href="https://github.com/Ders-vm" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, borderColor: '#06b6d4' }} className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300">
                <Github size={40} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-lg font-bold mb-2">GitHub</h3>
                <p className="text-sm text-slate-400">github.com/Ders-vm</p>
              </motion.a>

              <motion.a href="https://www.linkedin.com/in/anders-von-mirbach-2909a0272" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, borderColor: '#06b6d4' }} className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300">
                <Linkedin size={40} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <p className="text-sm text-slate-400">Connect professionally</p>
              </motion.a>

              <motion.a href="mailto:anders.von.93@gmail.com" whileHover={{ scale: 1.05, borderColor: '#06b6d4' }} className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300">
                <Mail size={40} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-sm text-slate-400 break-words">anders.von.93@gmail.com</p>
              </motion.a>

              <motion.a href="/resume/anders-von-mirbach-resume.pdf" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, borderColor: '#06b6d4' }} className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300">
                <FileText size={40} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-lg font-bold mb-2">Resume</h3>
                <p className="text-sm text-slate-400">View / Download PDF</p>
              </motion.a>
            </div>

            <p className="text-center text-slate-500 text-sm font-mono mt-12">
              © {new Date().getFullYear()} Anders von Mirbach
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}