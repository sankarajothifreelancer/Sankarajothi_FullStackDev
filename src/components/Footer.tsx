import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Smartphone } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#09090B',
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
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-headline)' }}>
                  {PERSONAL_INFO.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  Mobile Application Developer @ Tecstellar Solutions
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Specialized in production React Native mobile engineering, synchronized Supabase cloud backends, and full-stack web platforms for business clients.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.09em',
                  color: 'var(--text-headline)',
                  marginBottom: '1rem',
                }}
              >
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
                <li><a href="#mobile-apps" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Mobile Applications</a></li>
                <li><a href="#projects" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Selected Work</a></li>
                <li><a href="#freelance" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Freelance Experience</a></li>
                <li><a href="#experience" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Career Timeline</a></li>
                <li><a href="#skills" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Technical Skills</a></li>
                <li><a href="#about" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>About Me</a></li>
              </ul>
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.09em',
                  color: 'var(--text-headline)',
                  marginBottom: '1rem',
                }}
              >
                Connect
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <LinkedinIcon size={15} style={{ color: '#0A66C2' }} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <GithubIcon size={15} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Mail size={15} />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Sankarajothi_K_Resume.pdf"
                    style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 700 }}
                  >
                    Download Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Top Button */}
          <div>
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem', borderRadius: '9999px', padding: '0.55rem 1.15rem' }}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </motion.button>
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
            fontSize: '0.85rem',
            color: 'var(--text-tertiary)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Kalugumalai, Tamil Nadu, India • Open to Global Remote Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};
