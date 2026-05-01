'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const mainProjects = [
    {
      title: 'Learned Index Structures',
      description:
        'A database systems project focused on benchmarking learned index structures against traditional B-Trees to understand where prediction-based indexing becomes worthwhile.',
      tech: ['Python', 'NumPy', 'Machine Learning', 'Benchmarking'],
      image: '/projects/learned-index.png',
      imageNote: 'Performance benchmark graph',
      built:
        'Implemented single-stage and recursive learned index models, then compared them against B-Trees across different dataset sizes and distributions.',
      learned:
        'Early results did not show much improvement, which made the added complexity seem questionable. Once we scaled to around 100 million keys, the learned index began to outperform. This taught me a lot about choosing the right tool for the job: B-Trees are strong general-purpose structures, but at the right scale, a specialized approach can be worth the effort.',
      github: 'https://github.com/Ders-vm/Learned-Index-Structures',
      demo: '#',
    },
    {
      title: 'Cannabiz POS',
      description:
        'A collaborative full-stack point-of-sale system with inventory tracking, transaction handling, and database-driven retail workflows.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      image: '/projects/cannabiz-pos.png',
      imageNote: 'Main POS dashboard screenshot',
      built:
        'Focused heavily on the database side of the project, including schema design and PostgreSQL scripts for generating large amounts of semi-realistic test data.',
      learned:
        'This was my first major full-stack project and where a lot of the pieces started to click. I had a lot of fun generating realistic data at scale, and jokingly called that part my "money laundering code" because of how convincingly it simulated transactions. The repository name reflects an early naming mistake from the project, but the portfolio uses the cleaned-up project name.',
      github: 'https://github.com/JonathanDeleff/cannabuis',
      demo: '#',
    },
    {
      title: 'Snek AI',
      description:
        'A Snake AI project using A* pathfinding, Q-learning, and neural network training to improve survival and average score over time.',
      tech: ['Python', 'Pygame', 'A*', 'Q-Learning', 'Neural Networks'],
      image: '/projects/snek-ai.png',
      imageNote: 'Average score improvement graph',
      built:
        'Started with a fully graphical training setup, then moved to a headless environment to speed up training. Added Q-learning and stored state data through a neural-network-based approach.',
      learned:
        'At first, the agent had no heuristics and was learning too slowly for the resources available. Giving it a small jumpstart made the training more practical. Watching the average score rise over time was one of the coolest parts because it genuinely felt like watching the system learn.',
      github: 'https://github.com/Ders-vm/Snek',
      demo: '#',
    },
  ];

  return (
    <main className="page-shell">
      <section className="projects-section">
        <div className="max-content">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="section-heading"><span className="accent">#</span> PROJECTS</h1>
            <div className="section-underline" />

            <p className="section-intro">
              A closer look at the projects that best show how I approach systems, data, and practical software.
            </p>

            <div className="featured-projects">
              {mainProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`featured-project-card ${index === 0 ? 'featured-project-card-primary' : ''}`}
                >
                  <div className="project-image-wrap">
                    <Image src={project.image} alt={`${project.title} preview`} fill className="project-image" />
                    <div className="project-image-fallback">
                      <span>📊</span>
                      <p>{project.imageNote}</p>
                    </div>
                  </div>

                  <div className="project-content">
                    <h2 className="project-title">
                      {project.title}
                      {index === 0 && <span className="featured-badge">Featured</span>}
                    </h2>

                    <p className="project-description">{project.description}</p>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag-primary">{tech}</span>
                      ))}
                    </div>

                    <div className="project-notes">
                      <div>
                        <h4 className="project-subtitle">What I Built</h4>
                        <p>{project.built}</p>
                      </div>

                      <div>
                        <h4 className="project-subtitle">What I Learned</h4>
                        <p>{project.learned}</p>
                      </div>
                    </div>

                    <div className="project-links">
                      {project.github !== '#' && (
                        <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                          <Github size={15} />
                          Code
                        </a>
                      )}

                      {project.demo !== '#' && (
                        <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                          <ExternalLink size={15} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}