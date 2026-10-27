import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send, ArrowUpRight, Smartphone, Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
        position: 'sticky',
        top: 0,
        zIndex: 500,
        backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'all 200ms ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px',
          }}
        >
          {/* Brand Logo / Wordmark */}
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
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--text-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
              }}
            >
              SK
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                }}
              >
                {PERSONAL_INFO.name}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                }}
              >
                Mobile App Developer @ Tecstellar Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: link.isPill ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: link.isPill ? '0.35rem 0.85rem' : '0.25rem 0',
                  borderRadius: link.isPill ? 'var(--radius-full)' : '0',
                  backgroundColor: link.isPill ? 'var(--accent-light)' : 'transparent',
                  transition: 'all 150ms ease',
                }}
              >
                {link.isPill && <Smartphone size={14} />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.75rem',
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
              title="Download or view Sankarajothi's Resume"
            >
              <FileText size={15} />
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn btn-primary btn-sm"
            >
              <Send size={14} />
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.45)',
              backdropFilter: 'blur(6px)',
              zIndex: 490,
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{
                backgroundColor: '#FFFFFF',
                padding: '1.5rem',
                borderBottom: '1px solid var(--border-light)',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Active Role Tag in Mobile Drawer */}
              <div
                style={{
                  padding: '0.65rem 1rem',
                  backgroundColor: 'var(--bg-elevated)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                }}
              >
                <Building2 size={15} />
                <span>Mobile App Dev @ Tecstellar Solutions</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      color: link.isPill ? 'var(--accent-primary)' : 'var(--text-primary)',
                      backgroundColor: link.isPill ? 'var(--accent-light)' : 'transparent',
                      fontWeight: 700,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {link.isPill && <Smartphone size={16} />}
                      {link.label}
                    </span>
                    <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
                  </a>
                ))}
              </div>

              <div
                style={{
                  marginTop: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={18} />
                  Download Resume (PDF)
                </a>
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
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
