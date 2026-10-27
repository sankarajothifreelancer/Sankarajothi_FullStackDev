import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Menu,
  X,
  FileText,
  Send,
  ArrowUpRight,
  Smartphone,
  Layers,
  Briefcase,
  User,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHoverLink, setActiveHoverLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 4 curated, high-priority destinations for an airy, elegant layout
  const primaryNavLinks = [
    { label: 'Mobile Apps', href: '#mobile-apps', isFeatured: true, icon: <Smartphone size={13} /> },
    { label: 'Projects', href: '#projects', icon: <Layers size={13} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={13} /> },
    { label: 'About', href: '#about', icon: <User size={13} /> },
  ];

  const allNavLinks = [
    { label: 'Mobile Applications', href: '#mobile-apps', isFeatured: true },
    { label: 'Selected Client Projects', href: '#projects' },
    { label: 'Freelance Practice', href: '#freelance' },
    { label: 'Career Experience', href: '#experience' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'About Sankarajothi', href: '#about' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 500,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.25rem',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          width: '100%',
          maxWidth: '920px',
          height: '56px',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: scrolled
            ? '0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)'
            : '0 10px 25px -8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 0.75rem 0 0.85rem',
          pointerEvents: 'auto',
          transition: 'all 200ms ease',
        }}
      >
        {/* Clean, Non-Crowded Brand Identifier */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
          aria-label="Sankarajothi K Home"
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: '#09090B',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            SK
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                border: '1.5px solid #FFFFFF',
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.98rem',
              letterSpacing: '-0.025em',
              color: 'var(--text-headline)',
              whiteSpace: 'nowrap',
            }}
          >
            {PERSONAL_INFO.name}
          </div>
        </a>

        {/* Spacious, Curated Navigation (No Overcrowding) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
          }}
          className="desktop-nav"
        >
          {primaryNavLinks.map((link) => {
            const isHovered = activeHoverLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setActiveHoverLink(link.label)}
                onMouseLeave={() => setActiveHoverLink(null)}
                style={{
                  position: 'relative',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: link.isFeatured ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: link.isFeatured ? 'var(--accent-soft)' : 'transparent',
                  transition: 'color 150ms ease',
                  textDecoration: 'none',
                }}
              >
                {link.icon}
                <span>{link.label}</span>
                {isHovered && !link.isFeatured && (
                  <motion.div
                    layoutId="navHoverPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      borderRadius: '9999px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Refined Action CTAs */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.45rem',
          }}
          className="desktop-actions"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: '9999px', padding: '0.4rem 0.95rem', fontSize: '0.82rem' }}
          >
            <FileText size={13} />
            Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '9999px', padding: '0.4rem 1rem', fontSize: '0.82rem' }}
          >
            <Send size={12} />
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: 'var(--text-headline)',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              zIndex: 490,
              pointerEvents: 'auto',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '24px',
                padding: '1.25rem',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {allNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      color: link.isFeatured ? 'var(--accent-primary)' : 'var(--text-headline)',
                      backgroundColor: link.isFeatured ? 'var(--accent-soft)' : 'transparent',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={15} style={{ opacity: 0.4 }} />
                  </a>
                ))}
              </div>

              <div
                style={{
                  marginTop: '0.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  gap: '0.65rem',
                }}
              >
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md"
                  style={{ flex: 1, borderRadius: '14px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={16} />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="btn btn-primary btn-md"
                  style={{ flex: 1, borderRadius: '14px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Send size={16} />
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 800px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
