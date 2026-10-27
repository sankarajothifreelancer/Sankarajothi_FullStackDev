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
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
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

  const currentScreenshot =
    selectedApp.screenshots && selectedApp.screenshots[activeSlideIndex]
      ? selectedApp.screenshots[activeSlideIndex]
      : { url: selectedApp.heroImage, caption: selectedApp.name };

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
            Mobile Engineering Flagship
          </div>
          <h2 className="section-title">Production Mobile Applications</h2>
          <p className="section-description">
            Production-grade cross-platform mobile apps built <strong>from scratch for both Android and iOS</strong> using React Native, Expo, and Supabase at <strong>Tecstellar Solutions</strong> (my current professional role).
          </p>
        </div>

        {/* Current Employment & Architecture Banner */}
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
            gap: '1.25rem',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                backgroundColor: '#FFFFFF',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
                flexShrink: 0,
              }}
            >
              <Building2 size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-headline)' }}>
                  Tecstellar Solutions
                </span>
                <span className="badge badge-teal">Current Employment</span>
                <span className="badge badge-indigo">Built from Scratch</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                <strong>Role:</strong> Mobile Application Developer • Aug 2026 – Present • React Native (Android &amp; iOS)
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-secondary)',
              maxWidth: '460px',
              lineHeight: 1.5,
              borderLeft: '2px solid rgba(79, 70, 229, 0.25)',
              paddingLeft: '1rem',
            }}
          >
            I architected and built <strong>Counter 365</strong> and <strong>StyleFleet</strong> from blank canvas to production stores for both <strong>Android and iOS</strong>, managing state, native device modules, and Google Play Console distribution.
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
                  gap: '1rem',
                  padding: '1.15rem 1.75rem',
                  borderRadius: '24px',
                  backgroundColor: isSelected ? 'var(--text-headline)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-headline)',
                  border: isSelected ? '1px solid var(--text-headline)' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: isSelected ? '0 16px 32px -4px rgba(0, 0, 0, 0.18)' : '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  textAlign: 'left',
                  flex: '1 1 300px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.15)' : '#F4F4F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {app.iconImage ? (
                    <img
                      src={app.iconImage}
                      alt={`${app.name} icon`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Smartphone size={24} color={isSelected ? '#FFFFFF' : 'var(--accent-primary)'} />
                  )}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                      {app.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(5, 150, 105, 0.12)',
                        color: isSelected ? '#FFFFFF' : '#059669',
                      }}
                    >
                      Android &amp; iOS
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: isSelected ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-secondary)',
                      marginTop: '0.2rem',
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
                marginBottom: '2.5rem',
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
                  <span className="badge badge-indigo">
                    Built from Scratch (Android &amp; iOS)
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
                    padding: '0.8rem 1.6rem',
                    borderRadius: '9999px',
                    gap: '0.55rem',
                    boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <ExternalLink size={16} />
                  <span>View on Google Play Store</span>
                </motion.a>
              )}
            </div>

            {/* Split Grid: Left Device Visuals & Play Store Showcase, Right Technical Deep-Dive */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Left Column: Photorealistic Phone Frame Carousel + Store Banner */}
              <div>
                <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.09em',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    Google Play Store Interface ({selectedApp.screenshots.length} Screens)
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                    100% Full Screen View (Zero Crop)
                  </span>
                </div>

                {/* Photorealistic Flagship Phone Frame */}
                <div className="phone-mockup">
                  <div className="phone-speaker-bar" />
                  <div className="phone-screen">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${selectedApp.id}-${activeSlideIndex}`}
                        src={currentScreenshot.url}
                        alt={currentScreenshot.caption}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        loading="eager"
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* Slide Controls & Caption */}
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
                    aria-label="Previous screenshot"
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
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                  {currentScreenshot.caption}
                </p>

                {/* Interactive Thumbnail Scroller Strip */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    padding: '0.75rem 0.25rem',
                    marginTop: '0.75rem',
                    justifyContent: 'center',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {selectedApp.screenshots.map((s, idx) => {
                    const isActive = idx === activeSlideIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSlideIndex(idx)}
                        style={{
                          width: '42px',
                          height: '75px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: isActive ? '2px solid var(--accent-primary)' : '1px solid rgba(0, 0, 0, 0.12)',
                          boxShadow: isActive ? '0 0 0 2px rgba(79, 70, 229, 0.25)' : 'none',
                          cursor: 'pointer',
                          padding: 0,
                          backgroundColor: '#000',
                          flexShrink: 0,
                          opacity: isActive ? 1 : 0.65,
                          transition: 'all 150ms ease',
                        }}
                        aria-label={`Jump to screen ${idx + 1}`}
                      >
                        <img
                          src={s.url}
                          alt=""
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Primary Official Play Store Feature Banner Card */}
                <div
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.06)',
                    backgroundColor: '#FFFFFF',
                    marginTop: '2rem',
                  }}
                >
                  <img
                    src={selectedApp.heroImage}
                    alt={`${selectedApp.name} Official Play Store Feature Banner`}
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
                      Official Play Store Feature Graphic
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

                {/* StyleFleet Web Dashboard Preview if available */}
                {selectedApp.dashboardImage && (
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.06)',
                      backgroundColor: '#FFFFFF',
                      marginTop: '1.25rem',
                    }}
                  >
                    <img
                      src={selectedApp.dashboardImage}
                      alt="Companion Web Management Dashboard"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div
                      style={{
                        padding: '0.85rem 1.25rem',
                        backgroundColor: '#FFFFFF',
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                        Companion Web Management Portal (Royal Cuts &amp; Spa)
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        Synchronized with mobile apps in real-time via Supabase database triggers.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Verified Contributions & Engineering Architecture */}
              <div>
                {/* Built from Scratch Highlights Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(79, 70, 229, 0.2)',
                    borderRadius: '20px',
                    padding: '1.35rem 1.5rem',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Code2 size={18} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-headline)' }}>
                      Built from Scratch for Android &amp; iOS
                    </span>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Developed from scratch at <strong>Tecstellar Solutions</strong>. I established the cross-platform architecture using <strong>React Native &amp; Expo</strong>, ensuring single-codebase parity across Android APK/AAB and iOS builds, integrating Supabase authentication and offline local caching.
                  </p>
                </div>

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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selectedApp.verifiedContribution.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          style={{
                            width: '7px',
                            height: '7px',
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
                    Engineering Challenges &amp; Solutions
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
                    Verified Technologies &amp; Build Tools
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
