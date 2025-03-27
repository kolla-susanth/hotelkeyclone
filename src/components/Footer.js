import React from 'react';
import pci from '../assets/Images/pci.png';
import ssl from '../assets/Images/ssl.png';
import './Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  const aboutLinks = [
    { title: 'Company', href: '#company' },
    { title: 'Services', href: '#services' },
    { title: 'News & Blog', href: '#news' },
    { title: 'Careers', href: '#careers' },
    { title: 'Contact Us', href: '#contact' },
    { title: 'Support', href: '#support' }
  ];

  const clientLinks = [
    { title: 'Testimonials', href: '#testimonials' }
  ];

  const legalLinks = [
    { title: 'Privacy', href: '#privacy' },
    { title: 'Terms & Conditions', href: '#terms' },
    { title: 'ISMS Policy', href: '#isms' },
    { title: 'Privacy Objectives', href: '#privacy-objectives' }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: 'fab fa-facebook-f', href: '#' },
    { platform: 'Twitter', icon: 'fab fa-twitter', href: '#' },
    { platform: 'Instagram', icon: 'fab fa-instagram', href: '#' },
    { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', href: '#' },
    { platform: 'WhatsApp', icon: 'fab fa-whatsapp', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="HotelKey Logo" className="footer-logo" />
            <p className="footer-tagline">Simple. Secure. Mobile.</p>
            <div className="footer-legal">
              <p>©2025 HotelKey, Inc. All Rights Reserved.</p>
              <p>HotelKey, the HotelKey logo, and all HotelKey product names are trademarks of HotelKey, Inc.</p>
            </div>
            <div className="security-badges">
              <img src={pci} alt="PCI DSS Compliant" className="security-badge" />
              <img src={ssl} alt="SSL Secured" className="security-badge" />
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                {aboutLinks.map(link => (
                  <li key={link.title}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Clients</h3>
              <ul>
                {clientLinks.map(link => (
                  <li key={link.title}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.title}>
                <a href={link.href}>{link.title}</a>
                {index < legalLinks.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="social-connect">
            <span>CONNECT WITH US - </span>
            <div className="social-icons">
              {socialLinks.map(social => (
                <a 
                  key={social.platform}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.platform}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 