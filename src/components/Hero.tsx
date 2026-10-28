import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Mail,
  Smartphone,
  Layers,
  CheckCircle2,
  Code2,
  Sparkles,
  Building2,
  Cpu,
  Activity,
  Terminal,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'mobile' | 'tecstellar' | 'metrics'>('mobile');

  const verifiedTechs = [
    { name: 'React Native', category: 'Mobile' },
    { name: 'Expo & EAS', category: 'Tooling' },
    { name: 'Supabase', category: 'Database & Auth' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'MongoDB Atlas', category: 'Database' },
    { name: 'Google Play Console', category: 'Distribution' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Architectural Floating Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              boxShadow: '0 4px 16px -2px rgba(0, 0, 0, 0.04)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="status-pulse-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--text-headline)',
                  letterSpacing: '-0.01em',
                }}
              >
                Mobile Application Developer
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
                paddingLeft: '0.75rem',
                fontSize: '0.82rem',
                color: 'var(--accent-primary)',
                fontWeight: 700,
              }}
            >
              <Building2 size={14} />
              <span>Tecstellar Solutions (Current Company)</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
            width: '100%',
            minWidth: 0,
          }}
          className="hero-grid"
        >
          {/* Left Column: Authoritative Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                marginBottom: '1.5rem',
                color: 'var(--text-headline)',
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
              }}
            >
              Building Digital Products That{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Solve Real Problems.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '580px',
              }}
            >
              I am a{' '}
              <strong style={{ color: 'var(--text-headline)', fontWeight: 800 }}>
                Mobile Application Developer
              </strong>{' '}
              at{' '}
              <strong style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>Tecstellar Solutions</strong>{' '}
              (Aug 2026 – Present). I architect and build production mobile applications from scratch for both{' '}
              <strong style={{ color: 'var(--text-headline)' }}>Android and iOS</strong> using React Native (<strong>Counter 365</strong> on Google Play &amp; <strong>StyleFleet</strong>). Previously delivered 10+ commercial client websites during 1+ year independent freelance practice (Jul 2025 – Aug 2026).
            </p>

            {/* Tactile Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.75rem',
              }}
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#mobile-apps"
                className="btn btn-primary btn-lg"
              >
                <Smartphone size={18} />
                Explore Mobile Apps
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Sankarajothi_K_Developer_Resume.pdf"
                className="btn btn-secondary btn-lg"
              >
                <FileText size={18} />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="btn btn-ghost btn-lg"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </div>

            {/* Key Verified Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--text-headline)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  2 Apps
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem', fontWeight: 600 }}>
                  Android &amp; iOS From Scratch
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--accent-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  10+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem', fontWeight: 600 }}>
                  Client Sites (2025–26)
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--text-headline)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  8.5
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem', fontWeight: 600 }}>
                  B.Tech CGPA (AI &amp; DS)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Bento Sandbox with Perpetual Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                padding: 'clamp(1.15rem, 2.5vw, 1.75rem)',
                borderRadius: '32px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              {/* Header Bar with Code Tab Selector */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    app-engine.config.ts
                  </span>
                </div>

                {/* Pill Tab Switcher */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    padding: '3px',
                    borderRadius: '9999px',
                    gap: '2px',
                    maxWidth: '100%',
                    overflowX: 'auto',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  <button
                    onClick={() => setActivePreviewTab('mobile')}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: activePreviewTab === 'mobile' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'mobile' ? 'var(--text-headline)' : 'var(--text-secondary)',
                      boxShadow: activePreviewTab === 'mobile' ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                      transition: 'all 150ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Smartphone size={13} />
                    Mobile Apps
                  </button>

                  <button
                    onClick={() => setActivePreviewTab('tecstellar')}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: activePreviewTab === 'tecstellar' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'tecstellar' ? 'var(--text-headline)' : 'var(--text-secondary)',
                      boxShadow: activePreviewTab === 'tecstellar' ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                      transition: 'all 150ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Building2 size={13} />
                    Tecstellar
                  </button>

                  <button
                    onClick={() => setActivePreviewTab('metrics')}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: activePreviewTab === 'metrics' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'metrics' ? 'var(--text-headline)' : 'var(--text-secondary)',
                      boxShadow: activePreviewTab === 'metrics' ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                      transition: 'all 150ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Sparkles size={13} />
                    Delivery
                  </button>
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <AnimatePresence mode="wait">
                {activePreviewTab === 'mobile' && (
                  <motion.div
                    key="mobile-preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}
                  >
                    {/* App 1: Counter 365 */}
                    <div
                      style={{
                        padding: '1.15rem',
                        backgroundColor: 'var(--bg-canvas)',
                        borderRadius: '20px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Smartphone size={17} style={{ color: 'var(--accent-primary)' }} />
                          <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-headline)' }}>
                            Counter 365
                          </span>
                        </div>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.counterpro.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="badge badge-indigo"
                          style={{ textDecoration: 'none' }}
                        >
                          Google Play ↗
                        </a>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5, overflowWrap: 'break-word', wordBreak: 'normal', width: '100%' }}>
                        Retail POS mobile checkout, sub-second item catalog virtualization, automated WhatsApp digital receipts &amp; supervisor security controls.
                      </p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-neutral">React Native</span>
                        <span className="badge badge-neutral">Expo &amp; EAS</span>
                        <span className="badge badge-neutral">Supabase Sync</span>
                      </div>
                    </div>

                    {/* App 2: StyleFleet */}
                    <div
                      style={{
                        padding: '1.15rem',
                        backgroundColor: 'var(--bg-canvas)',
                        borderRadius: '20px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Smartphone size={17} style={{ color: 'var(--accent-azure)' }} />
                          <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-headline)' }}>
                            StyleFleet
                          </span>
                        </div>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.stylefleet.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="badge badge-teal"
                          style={{ textDecoration: 'none' }}
                        >
                          Google Play ↗
                        </a>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5, overflowWrap: 'break-word', wordBreak: 'normal', width: '100%' }}>
                        End-to-end salon management: real-time appointment booking, stylist seat allocation, and live service catalogs.
                      </p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-neutral">React Native</span>
                        <span className="badge badge-neutral">Expo</span>
                        <span className="badge badge-neutral">Supabase Realtime</span>
                      </div>
                    </div>

                    <a
                      href="#mobile-apps"
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--accent-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.25rem 0',
                      }}
                    >
                      View live device slides and architectural deep-dive
                      <ArrowRight size={14} />
                    </a>
                  </motion.div>
                )}

                {activePreviewTab === 'tecstellar' && (
                  <motion.div
                    key="tecstellar-preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        backgroundColor: '#09090B',
                        color: '#E4E4E7',
                        padding: '1.25rem',
                        borderRadius: '20px',
                        lineHeight: 1.7,
                      }}
                    >
                      <div><span style={{ color: '#818CF8' }}>export const</span> currentRole = &#123;</div>
                      <div style={{ paddingLeft: '1.25rem' }}>company: <span style={{ color: '#34D399' }}>'Tecstellar Solutions'</span>,</div>
                      <div style={{ paddingLeft: '1.25rem' }}>title: <span style={{ color: '#60A5FA' }}>'Mobile Application Developer'</span>,</div>
                      <div style={{ paddingLeft: '1.25rem' }}>timeline: <span style={{ color: '#FCD34D' }}>'Aug 2026 – Present (Remote)'</span>,</div>
                      <div style={{ paddingLeft: '1.25rem' }}>appsBuiltFromScratch: [<span style={{ color: '#34D399' }}>'Counter 365'</span>, <span style={{ color: '#34D399' }}>'StyleFleet'</span>],</div>
                      <div style={{ paddingLeft: '1.25rem' }}>platforms: [<span style={{ color: '#60A5FA' }}>'Android'</span>, <span style={{ color: '#60A5FA' }}>'iOS'</span>],</div>
                      <div>&#125;;</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div style={{ padding: '0.85rem', background: 'var(--bg-canvas)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-tertiary)' }}>MOBILE ARCHITECTURE</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-headline)', marginTop: '2px' }}>
                          React Native &amp; Expo
                        </div>
                      </div>
                      <div style={{ padding: '0.85rem', background: 'var(--bg-canvas)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-tertiary)' }}>CLOUD DATABASE</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-headline)', marginTop: '2px' }}>
                          Supabase Realtime
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activePreviewTab === 'metrics' && (
                  <motion.div
                    key="metrics-preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div style={{ padding: '1.15rem', background: 'var(--bg-canvas)', borderRadius: '20px' }}>
                        <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
                          10+
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-headline)', marginTop: '4px' }}>
                          Client Deployments
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          100% live verified URLs
                        </div>
                      </div>

                      <div style={{ padding: '1.15rem', background: 'var(--bg-canvas)', borderRadius: '20px' }}>
                        <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-headline)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
                          2 Apps
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-headline)', marginTop: '4px' }}>
                          Tecstellar Solutions
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          Google Play Store release
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '0.85rem 1.15rem',
                        background: '#ECFDF5',
                        border: '1px solid #D1FAE5',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: '#059669', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: '#065F46', fontWeight: 600 }}>
                        All 11 project cards link to live domains. Zero simulated mock domains.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Verified Technical Stack Strip */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.09em',
              color: 'var(--text-tertiary)',
              marginBottom: '1.15rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Code2 size={15} />
            Verified Technical Stack Applied in Production
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              alignItems: 'center',
            }}
          >
            {verifiedTechs.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -3, boxShadow: '0 8px 20px -2px rgba(15, 23, 42, 0.08)' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-headline)',
                  transition: 'all 150ms ease',
                }}
              >
                <span>{tech.name}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    padding: '0.12rem 0.45rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                  }}
                >
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
