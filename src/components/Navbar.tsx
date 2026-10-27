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
  Building2,
  Sparkles,
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

  const navLinks = [
    { label: 'Mobile Apps', href: '#mobile-apps', isPill: true },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Freelance', href: '#freelance' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 500,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          width: '100%',
          maxWidth: '1060px',
          height: '60px',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.07)',
          boxShadow: scrolled
            ? '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04)'
            : '0 12px 30px -10px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 0.85rem 0 1rem',
          pointerEvents: 'auto',
          transition: 'all 200ms ease',
        }}
      >
        {/* Brand Monogram & Live Status */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label="Sankarajothi K Home"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
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
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              position: 'relative',
            }}
          >
            SK
            <span
              style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                border: '2px solid #FFFFFF',
              }}
            />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-headline)',
                lineHeight: 1.15,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: 'var(--accent-primary)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              Tecstellar Solutions
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation with Tactile Hover Pill */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            padding: '4px',
            borderRadius: '9999px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isHovered = activeHoverLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setActiveHoverLink(link.label)}
                onMouseLeave={() => setActiveHoverLink(null)}
                style={{
                  position: 'relative',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: link.isPill ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: link.isPill ? 'var(--accent-soft)' : 'transparent',
                  transition: 'color 150ms ease',
                  textDecoration: 'none',
                }}
              >
                {link.isPill && <Smartphone size={13} style={{ color: 'var(--accent-primary)' }} />}
                <span>{link.label}</span>
                {isHovered && !link.isPill && (
                  <motion.div
                    layoutId="navHoverPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '9999px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          className="desktop-actions"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: '9999px', padding: '0.45rem 1rem' }}
          >
            <FileText size={14} />
            Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '9999px', padding: '0.45rem 1.15rem' }}
          >
            <Send size={13} />
            Contact
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: 'var(--text-headline)',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Mobile Drawer with Glass Blur & Spring Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '5.25rem',
              left: '1rem',
              right: '1rem',
              zIndex: 490,
              pointerEvents: 'auto',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -15, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -15, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '24px',
                padding: '1.25rem',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Status Header inside mobile menu */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 0.85rem',
                  backgroundColor: 'var(--bg-canvas)',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                }}
              >
                <Building2 size={15} />
                <span>Mobile App Dev @ Tecstellar Solutions</span>
              </div>

              {/* Navigation Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '14px',
                      color: link.isPill ? 'var(--accent-primary)' : 'var(--text-headline)',
                      backgroundColor: link.isPill ? 'var(--accent-soft)' : 'transparent',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {link.isPill && <Smartphone size={16} />}
                      {link.label}
                    </span>
                    <ArrowUpRight size={15} style={{ opacity: 0.4 }} />
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  marginTop: '0.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ width: '100%', borderRadius: '16px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={18} />
                  Download Resume (PDF)
                </a>
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', borderRadius: '16px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Send size={18} />
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
