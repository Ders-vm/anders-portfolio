'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import LoadingAnimation from './components/LoadingAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
      <div className="grid-bg">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="content-wrapper">
        <LoadingAnimation />

        <section id="about" className="min-h-screen pt-32 pb-20 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <h2 className="section-heading"><span className="accent">#</span> ABOUT ME</h2>
              <div className="section-underline" />

              <div className="grid md:grid-cols-3 gap-12 items-center">
                <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="md:col-span-1">
                  <div className="relative w-full max-w-sm mx-auto aspect-square rounded-lg overflow-hidden border border-cyan-500/30 bg-slate-800/50">
                    <Image src="/photos/profile.jpg" alt="Anders von Mirbach" fill className="object-cover" priority />
                  </div>
                </motion.div>

                <div className="md:col-span-2 space-y-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} className="max-w-3xl">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      I’m a computer science student and developer who likes building practical things: database-heavy apps, performance experiments, and projects that mix software with real problem solving.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      My projects range from full-stack systems to learned index structures and a self-playing Snake AI. I like work where I can dig into how something behaves, improve it, and explain the tradeoffs clearly.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="info-box">
                      <h3 className="section-title">FOCUS AREAS</h3>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>⚡ Backend systems and databases</li>
                        <li>📊 Data-driven applications</li>
                        <li>🤖 AI-assisted tools and automation</li>
                        <li>🎮 Game AI and pathfinding</li>
                      </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.05 }} className="info-box">
                      <h3 className="section-title">TECH STACK</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Git', 'Docker'].map((tech) => (
                          <span key={tech} className="tech-tag-primary">{tech}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="section-heading"><span className="accent">#</span> MY WORK</h2>
              <div className="section-underline" />

              <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
                A few projects that show how I approach systems, data, full-stack development, and AI experiments.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="project-preview">
                  <h3>Learned Index Structures</h3>
                  <p>Featured project exploring when learned indexes can outperform traditional B-Trees at larger scales.</p>
                </div>

                <div className="project-preview">
                  <h3>Cannabiz POS</h3>
                  <p>Full-stack POS system focused on PostgreSQL workflows, inventory logic, and realistic generated test data.</p>
                </div>

                <div className="project-preview">
                  <h3>Snek AI</h3>
                  <p>Snake AI using pathfinding, Q-learning, and training changes that improved average score over time.</p>
                </div>
              </div>

              <Link href="/projects">
                <motion.div whileHover={{ scale: 1.05 }} className="inline-block btn-primary cursor-pointer">
                  VIEW PROJECT DETAILS
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-slate-700/50">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <h2 className="section-heading"><span className="accent">#</span> LET&apos;S CONNECT</h2>
            <div className="section-underline mx-auto" />

            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              I’m currently looking for junior developer, data, and technical support roles where I can keep building useful things and growing as a developer.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} className="inline-block btn-primary cursor-pointer">
                  GET IN TOUCH
                </motion.div>
              </Link>

              <a href="/resume/anders-von-mirbach-resume.pdf" target="_blank" rel="noreferrer" className="inline-block btn-primary">
                VIEW RESUME
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}