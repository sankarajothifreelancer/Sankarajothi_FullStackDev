import React, { useState } from 'react';
import { MOBILE_APPS, MobileApp } from '../data/portfolioData';
import {
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Building,
  Calendar,
} from 'lucide-react';

export const MobileAppsSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>('counter365');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const selectedApp: MobileApp =
    MOBILE_APPS.find((app) => app.id === selectedAppId) || MOBILE_APPS[0];

  const handleNextSlide = () => {
    if (selectedApp.screenshots && selectedApp.screenshots.length > 0) {
      setActiveSlideIndex((prev) => (prev + 1) % selectedApp.screenshots.length);
    }
  };

  const handlePrevSlide = () => {
    if (selectedApp.screenshots && selectedApp.screenshots.length > 0) {
      setActiveSlideIndex(
        (prev) => (prev - 1 + selectedApp.screenshots.length) % selectedApp.screenshots.length
      );
    }
  };

  return (
    <section id="mobile-apps" className="section" style={{ backgroundColor: 'var(--bg-elevated)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Smartphone size={14} />
            Dedicated Engineering Showcase
          </div>
          <h2 className="section-title">Mobile Application Development</h2>
          <p className="section-description">
            Production cross-platform mobile software built with React Native, Expo, and Supabase at Tecstellar Solutions, distributed on Android and iOS.
          </p>
        </div>

        {/* App Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {MOBILE_APPS.map((app) => {
            const isSelected = app.id === selectedAppId;
            return (
              <button
                key={app.id}
                onClick={() => {
                  setSelectedAppId(app.id);
                  setActiveSlideIndex(0);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isSelected ? 'var(--text-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : 'var(--accent-light)',
                    color: isSelected ? '#FFFFFF' : 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                  }}
                >
                  <Smartphone size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                    {app.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: isSelected ? 'rgba(255, 255, 255, 0.75)' : 'var(--text-muted)',
                    }}
                  >
                    {app.role} • {app.statusBadge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Application Detailed Showcase Card */}
        <div
          className="card-base"
          style={{
            backgroundColor: '#FFFFFF',
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* App Header & Meta Info */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                  {selectedApp.name}
                </h3>
                {selectedApp.internalOrAltName && (
                  <span className="badge badge-neutral" style={{ fontSize: '0.78rem' }}>
                    Internal ref: {selectedApp.internalOrAltName}
                  </span>
                )}
                <span className="badge badge-indigo">
                  <ShieldCheck size={13} />
                  {selectedApp.statusBadge}
                </span>
              </div>
              <p style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                {selectedApp.tagline}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                backgroundColor: 'var(--bg-elevated)',
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Building size={15} style={{ color: 'var(--accent-primary)' }} />
                <span><strong>Company:</strong> {selectedApp.company}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Calendar size={15} style={{ color: 'var(--accent-primary)' }} />
                <span><strong>Timeline:</strong> {selectedApp.timeline}</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Left Mockup Visuals, Right Technical Deep-Dive */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Device Mockups & Real Screenshots */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Verified Application Visuals
                </span>
              </div>

              {selectedApp.id === 'stylefleet' ? (
                /* StyleFleet Phone Carousel */
                <div>
                  <div className="phone-mockup">
                    <div className="phone-notch" />
                    <div className="phone-screen">
                      <img
                        src={selectedApp.screenshots[activeSlideIndex].url}
                        alt={selectedApp.screenshots[activeSlideIndex].caption}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      marginTop: '1.5rem',
                    }}
                  >
                    <button
                      onClick={handlePrevSlide}
                      className="btn btn-secondary btn-sm"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Screen {activeSlideIndex + 1} of {selectedApp.screenshots.length}
                    </span>

                    <button
                      onClick={handleNextSlide}
                      className="btn btn-secondary btn-sm"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {selectedApp.screenshots[activeSlideIndex].caption}
                  </p>

                  {/* Web Dashboard Companion Preview */}
                  {selectedApp.dashboardImage && (
                    <div style={{ marginTop: '2rem' }}>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Companion Web Management Portal (Royal Cuts &amp; Spa)
                      </div>
                      <div className="browser-mockup">
                        <div className="browser-header">
                          <div className="browser-dots">
                            <span className="browser-dot dot-red" />
                            <span className="browser-dot dot-yellow" />
                            <span className="browser-dot dot-green" />
                          </div>
                          <div className="browser-url-bar">
                            https://stylefleet.salon/dashboard/royal-cuts-spa
                          </div>
                        </div>
                        <div className="browser-content" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                          <img
                            src={selectedApp.dashboardImage}
                            alt="StyleFleet Royal Cuts and Spa Web Dashboard"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Counter 365 Device Frames */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="browser-dot dot-red" />
                        <span className="browser-dot dot-yellow" />
                        <span className="browser-dot dot-green" />
                      </div>
                      <div className="browser-url-bar">
                        counter365.pos/management/catalog
                      </div>
                    </div>
                    <div className="browser-content" style={{ maxHeight: '240px', overflow: 'hidden' }}>
                      <img
                        src="/assets/mobile/pc1.png"
                        alt="Counter 365 Operations and Management"
                        loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>

                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="browser-dot dot-red" />
                        <span className="browser-dot dot-yellow" />
                        <span className="browser-dot dot-green" />
                      </div>
                      <div className="browser-url-bar">
                        counter365.pos/billing/checkout-flow
                      </div>
                    </div>
                    <div className="browser-content" style={{ maxHeight: '240px', overflow: 'hidden' }}>
                      <img
                        src="/assets/mobile/pc2.png"
                        alt="Counter 365 Billing and Sales Workflow"
                        loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Verified Contributions, Features & Challenges */}
            <div>
              {/* Product Purpose */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                  Product Purpose &amp; Architecture
                </h4>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {selectedApp.overview}
                </p>
              </div>

              {/* Verified Personal Contribution */}
              <div style={{ marginBottom: '2rem' }}>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.85rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-teal)' }} />
                  My Verified Personal Contribution
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {selectedApp.verifiedContribution.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-primary)',
                          marginTop: '8px',
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Features */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                  Key Functionality Implemented
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {selectedApp.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {feat.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {feat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                  Engineering Challenges &amp; Solutions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {selectedApp.technicalChallenges.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid var(--accent-primary)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Challenge: {item.challenge}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--accent-teal)' }}>Solution:</strong> {item.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  Technologies Applied
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedApp.technologies.map((tech) => (
                    <span key={tech} className="badge badge-neutral" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
