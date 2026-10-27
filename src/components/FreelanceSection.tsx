import React from 'react';
import { FREELANCE_METRICS } from '../data/portfolioData';
import {
  Briefcase,
  Compass,
  Layout,
  Server,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const FreelanceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Synthesis',
      description:
        'Engage directly with founders and business owners to clarify operational goals, technical constraints, user workflows, and delivery milestones without intermediaries.',
      icon: <Compass size={20} />,
    },
    {
      step: '02',
      title: 'UI/UX & Responsive Prototyping',
      description:
        'Translate requirements into clean, componentized design systems, prioritizing mobile-first ergonomics, fast visual loading, and intuitive navigation.',
      icon: <Layout size={20} />,
    },
    {
      step: '03',
      title: 'Full-Stack Engineering & Data Architecture',
      description:
        'Implement clean React frontend code, configure RESTful endpoints or Supabase backend connections, and optimize databases for reliability and security.',
      icon: <Server size={20} />,
    },
    {
      step: '04',
      title: 'Production Deployment & Operations Handover',
      description:
        'Manage DNS configuration, SSL provisioning, CI/CD automated deployments (Vercel/Netlify), and deliver clear operations manuals to client teams.',
      icon: <Rocket size={20} />,
    },
  ];

  return (
    <section id="freelance" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            Prior Freelance Practice (Jul 2025 – Aug 2026)
          </div>
          <h2 className="section-title">From Client Requirements to Real Digital Products</h2>
          <p className="section-description">
            Prior to joining <strong>Tecstellar Solutions</strong> in August 2026, I operated as an independent software developer for over a year (<strong>July 2025 – August 2026</strong>), delivering 10+ custom client websites, portals, and e-commerce systems with end-to-end responsibility and 100% verified production uptime.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {FREELANCE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.45rem',
                }}
              >
                {metric.label}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Engineering Workflow */}
        <div style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            How I Execute Independent Client Projects
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {steps.map((item) => (
              <div
                key={item.step}
                className="card-base"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  position: 'relative',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--text-light)',
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ownership Assurance Callout */}
        <div
          style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              flexShrink: 0,
            }}
          >
            <CheckCircle2 size={22} />
          </div>

          <div style={{ flex: 1, minWidth: '260px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Direct Ownership — No Agency Overhead
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              I work directly with clients as a solo technical partner. Clients communicate directly with the engineer writing their code, resulting in faster decision loops, rapid bug fixes, realistic timelines, and reliable digital products deployed on production infrastructure.
            </p>
          </div>

          <a href="#contact" className="btn btn-secondary btn-sm" style={{ alignSelf: 'center' }}>
            Start a Project
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
