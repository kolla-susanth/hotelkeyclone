import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'us', name: 'English' },
    { code: 'za', name: 'Africa' },
    { code: 'es', name: 'Spanish' },
    { code: 'it', name: 'Italian' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'th', name: 'Thai' }
  ];

  const menuItems = [
    { title: 'Services', link: '#services' },
    { title: 'Contact Us', link: '#contact' },
    { title: 'Support', link: '#support' },
    { title: 'News & Blog', link: '#news' },
    { title: 'Join Our Team', link: '#careers' }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: 'fab fa-facebook-f', link: '#' },
    { platform: 'Twitter', icon: 'fab fa-twitter', link: '#' },
    { platform: 'Instagram', icon: 'fab fa-instagram', link: '#' },
    { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', link: '#' },
    { platform: 'WhatsApp', icon: 'fab fa-whatsapp', link: '#' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="HotelKey Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/about-us">About Us</Link>  {/* Change this to Link */}
        <div className="dropdown">
          <a href="#products">Products ▼</a>
        </div>
        <div className="dropdown language-dropdown">
          <button 
            className="language-button"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            us English ▼
          </button>
          {isLanguageOpen && (
            <div className="dropdown-content">
              {languages.map((lang) => (
                <a 
                  key={lang.code} 
                  href={`#${lang.code}`}
                  className="dropdown-item"
                >
                  <span className="lang-code">{lang.code}</span> {lang.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <button 
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <button 
            className="close-menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <div className="menu-items">
            {menuItems.map((item) => (
              <a key={item.title} href={item.link} className="menu-item">
                {item.title}
              </a>
            ))}
          </div>
          <div className="social-links">
            <p className="connect-text">CONNECT WITH US - </p>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.link}
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
    </nav>
  );
};

export default Navbar;
