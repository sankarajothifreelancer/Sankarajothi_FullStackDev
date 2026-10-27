import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: '#FAF9F6', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            Career History
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            A track record combining professional mobile application engineering with direct freelance software development and engineering internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '1.5rem',
            borderLeft: '2px solid var(--border-light)',
          }}
        >
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                marginBottom: idx === WORK_EXPERIENCE.length - 1 ? 0 : '3rem',
                paddingLeft: '1.5rem',
              }}
            >
              {/* Timeline Marker Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.15rem',
                  top: '0.25rem',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: idx === 0 ? 'var(--accent-primary)' : '#FFFFFF',
                  border: idx === 0 ? '3px solid #EEF2FF' : '3px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              />

              {/* Experience Card */}
              <div
                className="card-base"
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                }}
              >
                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <span className="badge badge-indigo" style={{ marginBottom: '0.4rem' }}>
                      {exp.type}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginTop: '0.25rem',
                      }}
                    >
                      <Building2 size={16} style={{ color: 'var(--accent-primary)' }} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '0.25rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-elevated)',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {exp.summary}
                </p>

                {/* Responsibilities Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--accent-teal)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Key Technologies &amp; Tools
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-secondary)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
