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
  ExternalLink,
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
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Smartphone size={14} />
            Mobile Engineering Showcase
          </div>
          <h2 className="section-title">Production Mobile Applications</h2>
          <p className="section-description">
            Published cross-platform applications built at <strong>Tecstellar Solutions</strong> (my current professional role as Mobile Application Developer), powering retail POS checkout and salon business ecosystems.
          </p>
        </div>

        {/* Current Employment Context Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '24px',
            padding: '1.25rem 1.75rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                flexShrink: 0,
              }}
            >
              <Building2 size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-headline)' }}>
                  Tecstellar Solutions
                </span>
                <span className="badge badge-teal">Active Employment</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong>Role:</strong> Mobile Application Developer • Aug 2026 – Present
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.5 }}>
            Both applications below (<strong>Counter 365</strong> &amp; <strong>StyleFleet</strong>) are production mobile apps I personally contributed to and published on the Google Play Store.
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
                  borderRadius: '24px',
                  backgroundColor: isSelected ? 'var(--text-headline)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-headline)',
                  border: isSelected ? '1px solid var(--text-headline)' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isSelected ? '0 16px 32px -4px rgba(0, 0, 0, 0.18)' : '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  textAlign: 'left',
                  flex: '1 1 280px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.18)' : 'var(--accent-soft)',
                    color: isSelected ? '#FFFFFF' : 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  <Smartphone size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                    {app.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-secondary)',
                    }}
                  >
                    Tecstellar Solutions • {app.statusBadge}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Application Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              backgroundColor: 'var(--bg-canvas)',
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              borderRadius: '32px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Header Strip with Live Play Store CTA */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                marginBottom: '2rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.4rem)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                    {selectedApp.name}
                  </h3>
                  <span className="badge badge-teal">
                    <ShieldCheck size={13} />
                    {selectedApp.statusBadge}
                  </span>
                  {selectedApp.internalOrAltName && (
                    <span className="badge badge-neutral">
                      Ref: {selectedApp.internalOrAltName}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  {selectedApp.tagline}
                </p>
              </div>

              {/* Direct Play Store Link Button */}
              {selectedApp.playStoreUrl && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={selectedApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: '#09090B',
                    padding: '0.75rem 1.45rem',
                    borderRadius: '9999px',
                    gap: '0.5rem',
                  }}
                >
                  <ExternalLink size={16} />
                  <span>View on Google Play Store</span>
                </motion.a>
              )}
            </div>

            {/* Split Grid: Left Device Visuals & Official Play Store Showcase, Right Technical Deep-Dive */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Left Column: Official Store Showcase & Slides */}
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.09em',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    Official Store Assets &amp; Product Interface
                  </span>
                </div>

                {/* Primary Official Play Store Banner Card */}
                <div
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#FFFFFF',
                    marginBottom: '1.75rem',
                  }}
                >
                  <img
                    src={selectedApp.heroImage}
                    alt={`${selectedApp.name} Official Play Store Banner`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div
                    style={{
                      padding: '0.85rem 1.25rem',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                      Official Google Play Store Graphic
                    </span>
                    {selectedApp.playStoreUrl && (
                      <a
                        href={selectedApp.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                      >
                        Open Store Listing <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Additional Screenshots Carousel (StyleFleet or Operations) */}
                {selectedApp.id === 'stylefleet' ? (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                      Interactive App Screens ({selectedApp.screenshots.length} Screens)
                    </div>

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

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '1.25rem',
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

                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-headline)' }}>
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

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                      {selectedApp.screenshots[activeSlideIndex].caption}
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                      <div className="browser-content" style={{ maxHeight: '210px' }}>
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
                      <div className="browser-content" style={{ maxHeight: '210px' }}>
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

              {/* Right Column: Verified Contributions & Engineering Architecture */}
              <div>
                {/* Product Purpose */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-headline)' }}>
                    Product Purpose &amp; Business Value
                  </h4>
                  <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {selectedApp.overview}
                  </p>
                </div>

                {/* Verified Contribution */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      marginBottom: '0.85rem',
                      color: 'var(--text-headline)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} />
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
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
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

                {/* Core Key Features */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.85rem', color: 'var(--text-headline)' }}>
                    Key Functionality Delivered
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
                          padding: '1.25rem',
                          borderRadius: '20px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 800,
                            fontSize: '0.98rem',
                            color: 'var(--text-headline)',
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
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.85rem', color: 'var(--text-headline)' }}>
                    Key Engineering Challenges &amp; Solutions
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {selectedApp.technicalChallenges.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '1.15rem 1.35rem',
                          borderRadius: '16px',
                          borderLeft: '4px solid var(--accent-primary)',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '0.35rem' }}>
                          Challenge: {item.challenge}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <strong style={{ color: 'var(--accent-emerald)' }}>Solution:</strong> {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.65rem' }}>
                    Technologies &amp; Libraries Applied
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedApp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-neutral" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>
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
