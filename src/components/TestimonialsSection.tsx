import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { MessageSquareQuote, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#FAF9F6', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <MessageSquareQuote size={14} />
            Verified Client Outcomes
          </div>
          <h2 className="section-title">Client Feedback &amp; Project Endorsements</h2>
          <p className="section-description">
            Feedback and delivered outcomes from commercial business clients whose platforms and web applications I developed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="card-base"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Quote Icon & Project Association */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span className="badge badge-indigo">
                    <ShieldCheck size={12} />
                    {t.projectAssociation}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 500 }}>
                    {t.dateOrYear}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    fontStyle: 'normal',
                    marginBottom: '1.5rem',
                    position: 'relative',
                  }}
                >
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Client Info & Outcome Verification */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {t.clientName}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {t.roleOrCompany}
                    </div>
                  </div>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    title="Verified Client Project"
                  >
                    <CheckCircle size={15} />
                  </div>
                </div>

                {/* Verified Outcome Note */}
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.75rem',
                    color: 'var(--accent-teal)',
                    backgroundColor: 'var(--bg-elevated)',
                    padding: '0.4rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 500,
                  }}
                >
                  <strong>Delivered:</strong> {t.verifiedOutcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency & Editable Content Note */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <strong>Client Project Verification:</strong> Reviews above correspond to confirmed live client deployments. Additional client feedback can be updated directly in <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', backgroundColor: '#FFFFFF', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>src/data/portfolioData.ts</code>.
          </div>
          <a href="#projects" className="btn btn-ghost btn-sm" style={{ padding: '0.25rem 0.5rem' }}>
            View project sources →
          </a>
        </div>
      </div>
    </section>
  );
};
