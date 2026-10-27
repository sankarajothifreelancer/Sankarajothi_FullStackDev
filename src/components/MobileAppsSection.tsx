import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOBILE_APPS, MobileApp } from '../data/portfolioData';
import {
  Smartphone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  ExternalLink,
  Layers,
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
    <section
      id="mobile-apps"
      className="section"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Smartphone size={14} />
            Mobile Engineering Deep-Dive
          </div>
          <h2 className="section-title">Production Mobile Applications</h2>
          <p className="section-description">
            Mobile applications engineered at <strong>Tecstellar Solutions</strong> (my current professional role as Mobile Application Developer), powering retail POS counters and salon business ecosystems.
          </p>
        </div>

        {/* Current Employment Context Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.75rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'var(--accent-light)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Building2 size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  Tecstellar Solutions
                </span>
                <span className="badge badge-teal">Current Organization</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong>Role:</strong> Mobile Application Developer • Aug 2026 – Present
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.5 }}>
            Both applications below (<strong>Counter 365</strong> &amp; <strong>StyleFleet</strong>) represent core mobile systems I personally developed and shipped in this role.
          </div>
        </motion.div>

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
              <motion.button
                key={app.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedAppId(app.id);
                  setActiveSlideIndex(0);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1.1rem 1.75rem',
                  borderRadius: '20px',
                  backgroundColor: isSelected ? 'var(--text-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  boxShadow: isSelected ? '0 12px 28px -4px rgba(15, 23, 42, 0.15)' : 'var(--shadow-sm)',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  textAlign: 'left',
                  flex: '1 1 280px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.18)' : 'var(--accent-light)',
                    color: isSelected ? '#FFFFFF' : 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  <Smartphone size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem' }}>
                    {app.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-muted)',
                    }}
                  >
                    Tecstellar Solutions • {app.statusBadge}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Application Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="card-base"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
            }}
          >
            {/* Header Strip */}
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
                  <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                    {selectedApp.name}
                  </h3>
                  <span className="badge badge-indigo">
                    <ShieldCheck size={13} />
                    {selectedApp.statusBadge}
                  </span>
                  {selectedApp.internalOrAltName && (
                    <span className="badge badge-neutral">
                      Ref: {selectedApp.internalOrAltName}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {selectedApp.tagline}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  backgroundColor: 'var(--bg-elevated)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Building2 size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span><strong>Organization:</strong> Tecstellar Solutions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span><strong>Timeline:</strong> {selectedApp.timeline}</span>
                </div>
              </div>
            </div>

            {/* Split Grid: Left Device Frames & Mockups, Right Architecture Breakdown */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Left Column: Phone/Desktop Mockups */}
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
                    Product Visuals &amp; Screen Evidence
                  </span>
                </div>

                {selectedApp.id === 'stylefleet' ? (
                  <div>
                    {/* StyleFleet Real Phone Frame Mockup */}
                    <div className="phone-mockup">
                      <div className="phone-notch" />
                      <div className="phone-screen">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeSlideIndex}
                            src={selectedApp.screenshots[activeSlideIndex].url}
                            alt={selectedApp.screenshots[activeSlideIndex].caption}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            loading="lazy"
                          />
                        </AnimatePresence>
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
                        style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                        Screen {activeSlideIndex + 1} of {selectedApp.screenshots.length}
                      </span>

                      <button
                        onClick={handleNextSlide}
                        className="btn btn-secondary btn-sm"
                        style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                        aria-label="Next slide"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.65rem',
                      }}
                    >
                      {selectedApp.screenshots[activeSlideIndex].caption}
                    </p>

                    {/* Companion Web Dashboard */}
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
                          Companion Web Management Dashboard (Royal Cuts &amp; Spa)
                        </div>
                        <div className="browser-mockup">
                          <div className="browser-header">
                            <div className="browser-dots">
                              <span className="browser-dot dot-red" />
                              <span className="browser-dot dot-yellow" />
                              <span className="browser-dot dot-green" />
                            </div>
                            <div className="browser-url-bar">
                              stylefleet.salon/dashboard/royal-cuts-spa
                            </div>
                          </div>
                          <div className="browser-content" style={{ maxHeight: '200px' }}>
                            <img
                              src={selectedApp.dashboardImage}
                              alt="StyleFleet Web Dashboard"
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
                          counter365.pos/operations/catalog
                        </div>
                      </div>
                      <div className="browser-content" style={{ maxHeight: '230px' }}>
                        <img
                          src="/assets/mobile/pc1.png"
                          alt="Counter 365 Catalog Operations"
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
                      <div className="browser-content" style={{ maxHeight: '230px' }}>
                        <img
                          src="/assets/mobile/pc2.png"
                          alt="Counter 365 Sales and Billing Workflow"
                          loading="lazy"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Contributions & Features */}
              <div>
                {/* Product Purpose */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                    Product Purpose &amp; Business Value
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {selectedApp.overview}
                  </p>
                </div>

                {/* Verified Personal Contribution */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      marginBottom: '0.85rem',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-teal)' }} />
                    What I Personally Implemented at Tecstellar Solutions
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {selectedApp.verifiedContribution.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.94rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-primary)',
                            marginTop: '9px',
                            flexShrink: 0,
                          }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features Implemented */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                    Core Functionality Delivered
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
                          padding: '1.15rem',
                          borderRadius: '16px',
                          backgroundColor: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.35rem',
                          }}
                        >
                          {feat.title}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {feat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Challenges & Solutions */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                    Key Engineering Challenges &amp; Solutions
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {selectedApp.technicalChallenges.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '1rem 1.25rem',
                          borderRadius: '14px',
                          borderLeft: '3px solid var(--accent-primary)',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          Challenge: {item.challenge}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <strong style={{ color: 'var(--accent-teal)' }}>Solution:</strong> {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Applied */}
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                    Technologies &amp; Libraries Applied
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedApp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-neutral" style={{ padding: '0.35rem 0.85rem', fontSize: '0.85rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
