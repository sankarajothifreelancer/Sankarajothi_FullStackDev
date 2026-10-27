import React from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import {
  Code2,
  Smartphone,
  Layout,
  Server,
  Database,
  Terminal,
  CheckCircle,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Mobile')) return <Smartphone size={20} />;
    if (category.includes('Frontend')) return <Layout size={20} />;
    if (category.includes('Backend')) return <Server size={20} />;
    if (category.includes('Databases')) return <Database size={20} />;
    return <Terminal size={20} />;
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Code2 size={14} />
            Verified Competencies
          </div>
          <h2 className="section-title">Technical Skills &amp; Domain Expertise</h2>
          <p className="section-description">
            Substantiated through real client deliverables and production mobile engineering. Free of arbitrary percentage bars or unverified claims.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </p>

                {/* Skills List with Verified Context */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '0.65rem 0.85rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.2rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill.name}
                        </span>
                        <CheckCircle size={14} style={{ color: 'var(--accent-teal)' }} />
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.4,
                        }}
                      >
                        {skill.verifiedContext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
