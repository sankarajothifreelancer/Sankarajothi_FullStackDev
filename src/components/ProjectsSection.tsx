import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '../data/portfolioData';
import {
  ExternalLink,
  CheckCircle2,
  X,
  Filter,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack Web', 'Client Solution', 'E-Commerce', 'Data & Extension'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const openModal = (project: Project) => {
    setActiveModalProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModalProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Globe size={14} />
            Independent Client Practice
          </div>
          <h2 className="section-title">Selected Client Projects</h2>
          <p className="section-description">
            10+ commercial web applications, portals, and e-commerce solutions built and deployed for real business clients.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginRight: '0.5rem' }}>
            <Filter size={15} />
            <span>Category:</span>
          </div>

          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--text-primary)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  boxShadow: isActive ? '0 4px 12px 0 rgba(15, 23, 42, 0.12)' : 'var(--shadow-sm)',
                  transition: 'all 150ms ease',
                  cursor: 'pointer',
                }}
              >
                {cat} {cat === 'All' && `(${PROJECTS.length})`}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid with Motion Layout */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.1)' }}
                className="card-base"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  transition: 'box-shadow 250ms ease',
                }}
              >
                {/* Browser Frame */}
                <div className="browser-mockup" style={{ borderRadius: 0, border: 'none', borderBottom: '1px solid var(--border-light)' }}>
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot dot-red" />
                      <span className="browser-dot dot-yellow" />
                      <span className="browser-dot dot-green" />
                    </div>
                    <div className="browser-url-bar">
                      {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.domain`}
                    </div>
                    <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                      {project.category}
                    </span>
                  </div>
                  <div
                    className="browser-content"
                    style={{
                      height: '220px',
                      position: 'relative',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Screenshot`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 300ms ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.25)',
                        opacity: 0,
                        transition: 'opacity 200ms ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = '0';
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: '#FFFFFF',
                          color: 'var(--text-primary)',
                          padding: '0.45rem 1rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          boxShadow: 'var(--shadow-md)',
                        }}
                      >
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        {project.client}
                      </span>
                      <span className="badge badge-indigo" style={{ fontSize: '0.7rem' }}>
                        {project.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.shortDesc}
                    </p>

                    {/* Tech Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.75rem',
                            backgroundColor: 'var(--bg-elevated)',
                            color: 'var(--text-secondary)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <button
                      onClick={() => openModal(project)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                      }}
                    >
                      Case Study
                      <ArrowRight size={14} />
                    </button>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title={`Open live site for ${project.title}`}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                          title="View source code on GitHub"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Case Study Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div
                  style={{
                    padding: '1.25rem 1.75rem',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--accent-primary)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {activeModalProject.client} • {activeModalProject.category}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '2px' }}>
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={closeModal}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-elevated)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                    }}
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Body */}
                <div style={{ padding: '1.75rem', maxHeight: 'calc(90vh - 140px)', overflowY: 'auto' }}>
                  <div className="browser-mockup" style={{ marginBottom: '1.75rem' }}>
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="browser-dot dot-red" />
                        <span className="browser-dot dot-yellow" />
                        <span className="browser-dot dot-green" />
                      </div>
                      <div className="browser-url-bar">
                        {activeModalProject.liveUrl || `${activeModalProject.id}.domain`}
                      </div>
                    </div>
                    <div className="browser-content" style={{ maxHeight: '340px' }}>
                      <img
                        src={activeModalProject.image}
                        alt={activeModalProject.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Attributes */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-elevated)',
                      borderRadius: '14px',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>MY ROLE</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {activeModalProject.role}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>DELIVERY</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {activeModalProject.badge}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>DEPLOYMENT STATUS</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-teal)' }}>
                        Active Production Website
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      Problem Solved &amp; Business Context
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      {activeModalProject.longDesc}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                      Implementation Highlights
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {activeModalProject.features.map((feat, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                      Tech Stack
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {activeModalProject.techStack.map((tech) => (
                        <span key={tech} className="badge badge-neutral" style={{ padding: '0.35rem 0.75rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: '0.75rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-light)',
                    }}
                  >
                    <button onClick={closeModal} className="btn btn-ghost">
                      Close Details
                    </button>

                    {activeModalProject.liveUrl && (
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={16} />
                        Visit Live Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
