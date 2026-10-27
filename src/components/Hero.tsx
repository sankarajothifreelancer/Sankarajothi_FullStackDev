import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Mail,
  Smartphone,
  Layers,
  Database,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Sparkles,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'mobile' | 'fullstack' | 'metrics'>('mobile');

  const verifiedTechs = [
    { name: 'React Native', category: 'Mobile' },
    { name: 'Expo & EAS', category: 'Mobile' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Supabase', category: 'Backend / DB' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Google Play Console', category: 'Release' },
  ];

  return (
    <section id="home" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        {/* Top Availability Pill */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <span className="status-pulse-dot" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Available for Full Stack & Mobile Roles
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                borderLeft: '1px solid var(--border-light)',
                paddingLeft: '0.65rem',
              }}
            >
              Remote / On-site
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div>
            <h1
              style={{
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
                lineHeight: 1.12,
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
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '600px',
              }}
            >
              I'm a{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Full Stack & Mobile Application Developer
              </strong>{' '}
              focused on building reliable web applications, mobile experiences, and practical digital solutions.
              Experienced with React Native, Supabase, React.js, and 10+ freelance client deliveries.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <FileText size={18} />
                Download Resume
              </a>

              <a href="#contact" className="btn btn-ghost btn-lg">
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Quick Stat Highlights */}
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
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
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
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--accent-primary)',
                    lineHeight: 1,
                  }}
                >
                  2
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Production Mobile Apps
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  8.5
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  B.Tech CGPA (AI & DS)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Software Preview Canvas */}
          <div>
            <div
              className="card-base"
              style={{
                padding: '1.25rem',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
              }}
            >
              {/* Preview Window Header & Tab Selector */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '1rem',
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
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      marginLeft: '0.25rem',
                    }}
                  >
                    architecture-overview.ts
                  </span>
                </div>

                {/* Tab Switcher */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'var(--bg-elevated)',
                    padding: '3px',
                    borderRadius: 'var(--radius-md)',
                    gap: '2px',
                  }}
                >
                  <button
                    onClick={() => setActivePreviewTab('mobile')}
                    style={{
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'mobile' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'mobile' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'mobile' ? 'var(--shadow-sm)' : 'none',
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
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'fullstack' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'fullstack' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'fullstack' ? 'var(--shadow-sm)' : 'none',
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
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: activePreviewTab === 'metrics' ? '#FFFFFF' : 'transparent',
                      color: activePreviewTab === 'metrics' ? 'var(--text-primary)' : 'var(--text-muted)',
                      boxShadow: activePreviewTab === 'metrics' ? 'var(--shadow-sm)' : 'none',
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

              {/* Tab 1: Mobile Architecture */}
              {activePreviewTab === 'mobile' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Smartphone size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          Counter 365 (Point-of-Sale)
                        </span>
                      </div>
                      <span className="badge badge-indigo">Google Play Store</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Retail mobile POS checkout, inventory catalog virtualization, customer/vendor contact directory, and automated WhatsApp billing receipt generation.
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-neutral">React Native</span>
                      <span className="badge badge-neutral">Expo</span>
                      <span className="badge badge-neutral">Supabase</span>
                      <span className="badge badge-neutral">EAS Build</span>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Smartphone size={18} style={{ color: 'var(--accent-blue)' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          StyleFleet (Salon Operations)
                        </span>
                      </div>
                      <span className="badge badge-teal">Cross-Platform</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Real-time appointment calendar booking, staff allocation, service catalogs, and live sync with the Royal Cuts &amp; Spa web dashboard.
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-neutral">React Native</span>
                      <span className="badge badge-neutral">Expo</span>
                      <span className="badge badge-neutral">Supabase Realtime</span>
                      <span className="badge badge-neutral">Web Dashboard</span>
                    </div>
                  </div>

                  <a
                    href="#mobile-apps"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.25rem 0',
                    }}
                  >
                    View detailed mobile engineering case studies
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}

              {/* Tab 2: Full-Stack Pipeline */}
              {activePreviewTab === 'fullstack' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      backgroundColor: '#0F172A',
                      color: '#E2E8F0',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      lineHeight: 1.7,
                      overflowX: 'auto',
                    }}
                  >
                    <div><span style={{ color: '#818CF8' }}>const</span> deploymentPipeline = &#123;</div>
                    <div style={{ paddingLeft: '1.25rem' }}>frontend: <span style={{ color: '#34D399' }}>'React.js + Tailwind CSS (Vercel/Netlify)'</span>,</div>
                    <div style={{ paddingLeft: '1.25rem' }}>backend: <span style={{ color: '#34D399' }}>'Node.js + Express.js REST APIs'</span>,</div>
                    <div style={{ paddingLeft: '1.25rem' }}>database: <span style={{ color: '#34D399' }}>'Supabase (PostgreSQL) / MongoDB Atlas'</span>,</div>
                    <div style={{ paddingLeft: '1.25rem' }}>auth: <span style={{ color: '#FCD34D' }}>['JWT Tokens', 'Supabase Auth', 'Role RBAC']</span>,</div>
                    <div style={{ paddingLeft: '1.25rem' }}>status: <span style={{ color: '#60A5FA' }}>'10+ Production Deployments Active'</span></div>
                    <div>&#125;;</div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.65rem',
                    }}
                  >
                    <div style={{ padding: '0.75rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>CLIENT PLATFORMS</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                        Enterprise, Healthcare, BPO
                      </div>
                    </div>
                    <div style={{ padding: '0.75rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>CUSTOM DOMAINS</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                        DNS, SSL &amp; Live Handover
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Delivery Metrics */}
              {activePreviewTab === 'metrics' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                        10+
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                        Client Websites
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Delivered independently end-to-end
                      </div>
                    </div>

                    <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                        2 Apps
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                        Production Mobile
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Google Play Store &amp; cross-platform
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      background: '#F0FDF4',
                      border: '1px solid #DCFCE7',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: '#16A34A', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: '#15803D', fontWeight: 500 }}>
                      All showcase projects link directly to verified live domains with zero placeholder data.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compact Technology Strip */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          <div
            style={{
              fontSize: '0.8rem',
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
            Verified Core Technology Stack
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
              <div
                key={tech.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
