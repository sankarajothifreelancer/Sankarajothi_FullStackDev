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
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'mobile' | 'fullstack' | 'metrics'>('mobile');

  const verifiedTechs = [
    { name: 'React Native', category: 'Mobile' },
    { name: 'Expo & EAS', category: 'Mobile' },
    { name: 'Supabase', category: 'Backend & DB' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Google Play Console', category: 'Release' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: 'calc(100dvh - 74px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Floating Pill: Active Role at Textural Art Solutions */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.25rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              padding: '0.45rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 4px 14px 0 rgba(15, 23, 42, 0.04)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="status-pulse-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
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
                gap: '0.45rem',
                borderLeft: '1px solid var(--border-light)',
                paddingLeft: '0.65rem',
                fontSize: '0.8rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
              }}
            >
              <Building2 size={14} />
              <span>Textural Art Solutions (Current)</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading, Context & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
              }}
            >
              Building Digital Products That{' '}
              <span
                style={{
                  color: 'var(--accent-primary)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Solve Real Problems.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.18rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '580px',
              }}
            >
              I am a{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                Mobile Application &amp; Full Stack Developer
              </strong>{' '}
              currently engineering cross-platform products at{' '}
              <strong style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Textural Art Solutions</strong>.
              Developer of <strong>Counter 365</strong> (retail POS on Google Play) and <strong>StyleFleet</strong> (salon management platform), alongside 10+ independent client deliverables.
            </p>

            {/* Action Buttons with Spring Feedback */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#mobile-apps"
                className="btn btn-primary btn-lg"
              >
                <Smartphone size={18} />
                Explore Mobile Apps
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <FileText size={18} />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="btn btn-ghost btn-lg"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </div>

            {/* Credibility Stats Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  2 Apps
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Textural Art Solutions
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--accent-primary)',
                    lineHeight: 1,
                  }}
                >
                  10+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Client Deliveries
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  8.5
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  B.Tech CGPA (AI &amp; DS)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Bento Preview with Perpetual Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Header Bar with Architecture State Switcher */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#EF4444' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#F59E0B' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    textural-art-solutions.ts
                  </span>
                </div>

                {/* Tab Pill Buttons */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'var(--bg-elevated)',
                    padding: '3px',
                    borderRadius: 'var(--radius-full)',
                    gap: '2px',
                  }}
                >
                  <button
                    onClick={() => setActivePreviewTab('mobile')}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'mobile' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'mobile' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'mobile' ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 200ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Smartphone size={13} />
                    Mobile Apps
                  </button>

                  <button
                    onClick={() => setActivePreviewTab('fullstack')}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'fullstack' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'fullstack' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'fullstack' ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 200ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Layers size={13} />
                    Full-Stack
                  </button>

                  <button
                    onClick={() => setActivePreviewTab('metrics')}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'metrics' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'metrics' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'metrics' ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 200ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Sparkles size={13} />
                    Delivery
                  </button>
                </div>
              </div>

              {/* Dynamic Tab Content with Animation */}
              <AnimatePresence mode="wait">
                {activePreviewTab === 'mobile' && (
                  <motion.div
                    key="mobile-preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                  >
                    {/* App 1: Counter 365 */}
                    <div
                      style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: 'var(--bg-elevated)',
                        borderRadius: '16px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Smartphone size={17} style={{ color: 'var(--accent-primary)' }} />
                          <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                            Counter 365
                          </span>
                        </div>
                        <span className="badge badge-indigo">Google Play Store</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                        Mobile point-of-sale: touch checkout, virtualized retail item catalog, WhatsApp billing dispatch &amp; supervisor security.
                      </p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-neutral">React Native</span>
                        <span className="badge badge-neutral">Expo &amp; EAS</span>
                        <span className="badge badge-neutral">Supabase</span>
                      </div>
                    </div>

                    {/* App 2: StyleFleet */}
                    <div
                      style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: 'var(--bg-elevated)',
                        borderRadius: '16px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Smartphone size={17} style={{ color: 'var(--accent-blue)' }} />
                          <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                            StyleFleet
                          </span>
                        </div>
                        <span className="badge badge-teal">Cross-Platform</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                        Salon &amp; spa platform: real-time appointment scheduling, stylist allocation, and synchronized web dashboard.
                      </p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-neutral">React Native</span>
                        <span className="badge badge-neutral">Supabase Realtime</span>
                        <span className="badge badge-neutral">Web Dashboard</span>
                      </div>
                    </div>

                    <a
                      href="#mobile-apps"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.25rem 0',
                      }}
                    >
                      Explore live mobile engineering breakdown &amp; slides
                      <ArrowRight size={14} />
                    </a>
                  </motion.div>
                )}

                {activePreviewTab === 'fullstack' && (
                  <motion.div
                    key="fullstack-preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        backgroundColor: '#0F172A',
                        color: '#E2E8F0',
                        padding: '1.1rem',
                        borderRadius: '16px',
                        lineHeight: 1.7,
                      }}
                    >
                      <div><span style={{ color: '#818CF8' }}>const</span> activeArchitecture = &#123;</div>
                      <div style={{ paddingLeft: '1.25rem' }}>company: <span style={{ color: '#34D399' }}>'Textural Art Solutions'</span>,</div>
                      <div style={{ paddingLeft: '1.25rem' }}>mobileApps: [<span style={{ color: '#60A5FA' }}>'Counter 365'</span>, <span style={{ color: '#60A5FA' }}>'StyleFleet'</span>],</div>
                      <div style={{ paddingLeft: '1.25rem' }}>stack: <span style={{ color: '#FCD34D' }}>['React Native', 'Expo', 'Supabase', 'Node.js']</span>,</div>
                      <div style={{ paddingLeft: '1.25rem' }}>freelanceDeployments: <span style={{ color: '#F472B6' }}>'10+ verified live clients'</span></div>
                      <div>&#125;;</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                      <div style={{ padding: '0.75rem', background: 'var(--bg-elevated)', borderRadius: '12px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>BACKEND SYNC</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                          Supabase Realtime
                        </div>
                      </div>
                      <div style={{ padding: '0.75rem', background: 'var(--bg-elevated)', borderRadius: '12px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>DISTRIBUTION</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                          EAS &amp; Play Console
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
                      <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                          10+
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                          Client Deliveries
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          100% active live websites
                        </div>
                      </div>

                      <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                          2 Apps
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                          Textural Art Solutions
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Published on Google Play Store
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        background: '#F0FDF4',
                        border: '1px solid #DCFCE7',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: '#16A34A', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', color: '#15803D', fontWeight: 600 }}>
                        Every project features verified live demo links and transparent client attributions.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Verified Technology Strip */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              marginBottom: '1rem',
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
                whileHover={{ y: -2, boxShadow: '0 6px 16px -2px rgba(15, 23, 42, 0.08)' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  transition: 'all 150ms ease',
                }}
              >
                <span>{tech.name}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-elevated)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-sm)',
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
