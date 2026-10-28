import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Full-Stack Web App');
  const [senderName, setSenderName] = useState<string>('');
  const [senderMessage, setSenderMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectTypes = [
    'Full-Stack Web App',
    'React Native Mobile App',
    'Software Developer Role',
    'Independent Freelance Project',
    'General Inquiry',
  ];

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedProjectType} - ${senderName || 'Prospective Partner'}`);
    const body = encodeURIComponent(
      `Hi Sankarajothi,\n\nI came across your portfolio and would like to discuss a project / role regarding: ${selectedProjectType}.\n\nDetails:\n${senderMessage || 'I would like to schedule a conversation regarding opportunities and timelines.'}\n\nBest regards,\n${senderName || 'Team'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-elevated)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={14} />
            Let's Collaborate
          </div>
          <h2 className="section-title">Have a Product to Build? Let's Talk.</h2>
          <p className="section-description">
            Whether you are hiring for a Full Stack / React Native Developer position, or need a dedicated freelance engineer to build your next web or mobile product, I am available.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'flex-start',
            width: '100%',
            minWidth: 0,
          }}
        >
          {/* Left Column: Direct Contact Channels & Quick Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Primary Email Card */}
            <div
              className="card-base"
              style={{
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Primary Email
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Direct Inbox
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  title="Copy email address"
                  style={{ gap: '0.35rem' }}
                >
                  {copiedEmail ? <Check size={14} style={{ color: 'var(--accent-teal)' }} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.92rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                }}
              >
                {PERSONAL_INFO.email}
              </a>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Quick turnaround time • Typically responds within a few hours.
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div
              className="card-base"
              style={{
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Phone &amp; WhatsApp
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Direct Contact
                  </h4>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {PERSONAL_INFO.phone}
                </a>

                <a
                  href={`https://wa.me/919360396190?text=${encodeURIComponent('Hello Sankarajothi, I reviewed your developer portfolio and would like to connect.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  WhatsApp
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Professional Profiles & Resume Strip */}
            <div
              className="card-base"
              style={{
                padding: '1.5rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Verified Professional Links
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'flex-start' }}
                >
                  <LinkedinIcon size={16} style={{ color: '#0A66C2' }} />
                  LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'flex-start' }}
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>

                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sankarajothi_K_Resume.pdf"
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'flex-start' }}
                >
                  <FileText size={16} style={{ color: 'var(--accent-primary)' }} />
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Pre-Formatted Email Composer (Functional Mailto Fallback) */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Start a Conversation
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Select your inquiry type to open a pre-formatted email message directly in your preferred email client.
            </p>

            <form onSubmit={handleMailtoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Project Type Picker */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  I'm reaching out regarding:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {projectTypes.map((type) => {
                    const isSelected = selectedProjectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedProjectType(type)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-elevated)',
                          color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                          border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-subtle)',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Your Name */}
              <div>
                <label
                  htmlFor="sender-name"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Your Name / Organization
                </label>
                <input
                  id="sender-name"
                  type="text"
                  placeholder="e.g. Alex Johnson (Engineering Lead or Founder)"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              {/* Message Details */}
              <div>
                <label
                  htmlFor="sender-message"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Brief Overview / Scope
                </label>
                <textarea
                  id="sender-message"
                  rows={4}
                  placeholder="Outline your project scope, target launch timeline, or job description details..."
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Submit / Mailto Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send size={18} />
                Open Email Draft with Details
              </button>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Launches your default mail app addressing <span style={{ fontFamily: 'var(--font-mono)' }}>{PERSONAL_INFO.email}</span>. No data sent to third-party servers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
