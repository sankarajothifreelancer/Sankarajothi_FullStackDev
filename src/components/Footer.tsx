import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Smartphone, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '2rem',
          }}
        >
          {/* Brand & Summary */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--text-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                SK
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Full Stack &amp; Mobile Application Developer
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Crafting dependable mobile applications with React Native and production-ready full-stack web platforms for business clients and technology companies.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                <li><a href="#projects" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Selected Work</a></li>
                <li><a href="#mobile-apps" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Mobile Applications</a></li>
                <li><a href="#freelance" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Freelance Experience</a></li>
                <li><a href="#experience" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Career Timeline</a></li>
                <li><a href="#skills" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Technical Skills</a></li>
                <li><a href="#about" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>About Me</a></li>
              </ul>
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Connect
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <Mail size={14} />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 600 }}
                  >
                    Download Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem' }}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; modern design tokens.
          </div>
          <div>
            Reference: <strong>{PERSONAL_INFO.subBrand}</strong> • Kalugumalai, Tamil Nadu, India
          </div>
        </div>
      </div>
    </footer>
  );
};
