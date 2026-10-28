import React from 'react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Award,
  CheckCircle2,
  FileCode,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <User size={14} />
            Background &amp; Philosophy
          </div>
          <h2 className="section-title">About Sankarajothi K</h2>
          <p className="section-description">
            A developer who bridges client requirements, mobile engineering, and full-stack software delivery.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'flex-start',
            marginBottom: '3.5rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          {/* Left Column: Narrative */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Pragmatic Engineering Grounded in Real Delivery
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              My software development journey is shaped by direct accountability. Prior to joining Tecstellar Solutions, I operated as an independent freelance developer for over a year (<strong>July 2025 – August 2026</strong>), working directly with business clients across retail, healthcare, civil contracting, and data services to translate requirements into dependable digital products with 100% verified production deployments.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              At <strong>Tecstellar Solutions</strong> (my current professional role as Mobile Application Developer), I architected and built two production mobile applications from scratch for both <strong>Android and iOS</strong> using <strong>React Native, Expo, and Supabase</strong>: <strong>Counter 365</strong> (retail POS mobile application published on Google Play) and <strong>StyleFleet</strong> (salon and spa business operations platform). This experience has given me end-to-end expertise in mobile architecture from scratch, state management, cross-device ergonomics, offline data synchronization, and rigorous store release validation.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Graduating with a <strong>B.Tech in Artificial Intelligence &amp; Data Science (8.5 CGPA)</strong> from P.S.R. Engineering College, I combine systematic engineering discipline with modern full-stack web and mobile frameworks. I am seeking opportunities where I can contribute to user-facing applications, take ownership of feature delivery, and build reliable software alongside ambitious teams.
            </p>

            {/* Core Working Principles */}
            <div
              style={{
                backgroundColor: 'var(--bg-elevated)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.85rem',
                }}
              >
                Core Engineering Principles
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)' }} />
                  <span>Pragmatic Architecture</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)' }} />
                  <span>Mobile-First Ergonomics</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)' }} />
                  <span>Production Accountability</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)' }} />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Verified Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Education Card */}
            <div
              className="card-base"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
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
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="badge badge-indigo">Academic Foundation</span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {EDUCATION.degree}
                  </h4>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {EDUCATION.major}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {EDUCATION.institution} • {EDUCATION.affiliation}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                    Cumulative GPA: {EDUCATION.cgpa}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>{EDUCATION.period}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {EDUCATION.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent-teal)', marginTop: '2px' }}>•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications Card */}
            <div
              className="card-base"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--accent-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <span className="badge badge-teal">Verified Credentials</span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Industry Certifications
                  </h4>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {cert.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {cert.issuer}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)' }}>
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
