'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, X } from 'lucide-react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, title) => {
    setSelectedImage({
      src,
      title,
      alt: `${title} preview`,
    });
  };

  const mainProjects = [
    {
      id: 'learned-index',
      title: 'Learned Index Structures',
      description:
        'A database systems project focused on benchmarking learned index structures against traditional B-Trees to understand where prediction-based indexing becomes worthwhile.',
      tech: ['Python', 'NumPy', 'Machine Learning', 'Benchmarking'],
      image: '/projects/learned-index.png',
      built:
        'Implemented single-stage and recursive learned index models, then compared them against B-Trees across different dataset sizes and distributions.',
      learned:
        'Early results did not show much improvement, which made the added complexity seem questionable. Once we scaled to around 100 million keys, the learned index began to outperform. This taught me a lot about choosing the right tool for the job: B-Trees are strong general-purpose structures, but at the right scale, a specialized approach can be worth the effort.',
      github: 'https://github.com/Ders-vm/Learned-Index-Structures',
    },
    {
      id: 'cannabiz-pos',
      title: 'Cannabiz POS',
      description:
        'A collaborative full-stack point-of-sale system with inventory tracking, transaction handling, and database-driven retail workflows.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      image: '/projects/cannabiz-pos.png',
      built:
        'Focused heavily on the database side of the project, including schema design and PostgreSQL scripts for generating large amounts of semi-realistic test data.',
      learned:
        'This was my first major full-stack project and where a lot of the pieces started to click. I had a lot of fun generating realistic data at scale, and jokingly called that part my "money laundering code" because of how convincingly it simulated transactions.',
      github: 'https://github.com/JonathanDeleff/cannabuis',
    },
    {
      id: 'snek-ai',
      title: 'Snek AI',
      description:
        'A Snake AI project using A* pathfinding, Q-learning, and neural network training to improve survival and average score over time.',
      tech: ['Python', 'Pygame', 'A*', 'Q-Learning', 'Neural Networks'],
      image: '/projects/snek-ai.png',
      built:
        'Started with a fully graphical training setup, then moved to a headless environment to speed up training. Added Q-learning and stored state data through a neural-network-based approach.',
      learned:
        'At first, the agent had no heuristics and was learning too slowly for the resources available. Giving it a small jumpstart made the training more practical. Watching the average score rise over time was one of the coolest parts because it genuinely felt like watching the system learn.',
      github: 'https://github.com/Ders-vm/Snek',
    },
  ];

  const moreProjects = [
    {
      title: 'Mapping Algorithms',
      description:
        '3D graph visualization and shortest-path / MST exploration using spatial data, including Dijkstra’s, Prim’s, and Kruskal’s algorithms.',
      image: '/projects/mapping-algorithms.png',
      github: 'https://github.com/Ders-vm/Mapping-Algorithms',
    },
    {
      title: 'Excel/VBA Workflow Automation',
      description:
        'Built macro-enabled Excel tools to automate repetitive business processes, including data formatting and Word mail merge workflows. Reduced a process that previously took over an hour to under five minutes.',
      label: 'Automation / VBA',
    },
    {
      title: 'Snake in Excel',
      description:
        'A fully playable Snake game built inside a macro-enabled Excel workbook. It started as a challenge after a conversation about Excel’s limitations, and became a fun experiment in pushing the tool beyond its intended use.',
      image: '/projects/excel-snake.png',
    },
  ];

  return (
    <main className="page-shell">
      <section className="projects-section">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="section-heading">
              <span className="accent">#</span> PROJECTS
            </h1>

            <div className="section-underline" />

            <p className="section-intro">
              A closer look at the projects that best show how I approach systems, data, and practical software.
            </p>

            <div className="featured-projects">
              {mainProjects.map((project, index) => (
                <motion.article
                  id={project.id}
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`featured-project-card ${index === 0 ? 'featured-project-card-primary' : ''}`}
                >
                  <div className="project-image-wrap">
                    <button
                      type="button"
                      className="image-expand-button"
                      onClick={() => openImage(project.image, project.title)}
                      aria-label={`Expand ${project.title} image`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="project-image"
                      />
                    </button>
                  </div>

                  <div className="project-content">
                    <h2 className="project-title">
                      {project.title}
                      {index === 0 && <span className="featured-badge">Featured</span>}
                    </h2>

                    <p className="project-description">{project.description}</p>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag-primary">
                          {tech}
                        </span>
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
                      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                        <Github size={15} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <section className="more-work-section">
              <h2 className="section-heading">
                <span className="accent">#</span> MORE WORK
              </h2>

              <div className="section-underline" />

              <p className="section-intro">
                Smaller projects and experiments that show range across algorithms, automation, and creative problem solving.
              </p>

              <div className="more-work-grid">
                {moreProjects.map((project) => (
                  <article key={project.title} className="more-work-card">
                    <div className="more-work-image-wrap">
                      {project.image ? (
                        <button
                          type="button"
                          className="image-expand-button"
                          onClick={() => openImage(project.image, project.title)}
                          aria-label={`Expand ${project.title} image`}
                        >
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            className="more-work-image"
                          />
                        </button>
                      ) : (
                        <div className="more-work-placeholder">
                          {project.label}
                        </div>
                      )}
                    </div>

                    <div className="more-work-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      {project.github && (
                        <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </section>

<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="image-modal"
      onClick={() => setSelectedImage(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.button
        type="button"
        className="image-modal-close"
        onClick={() => setSelectedImage(null)}
        aria-label="Close image preview"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.2 }}
      >
        <X size={24} />
      </motion.button>

      <motion.div
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 24 }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p className="image-modal-title">{selectedImage.title}</p>

        <div className="image-modal-frame">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="image-modal-img"
          />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </main>
  );
}