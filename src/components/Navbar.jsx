import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const isHome = location.pathname === '/';
  const navClass = `navbar ${isScrolled || !isHome ? 'navbar-scrolled' : ''}`;

  return (
    <nav className={navClass}>
      <div className="container nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <Compass className="brand-icon" size={28} />
          <span>Lumina<strong>Tours</strong></span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>{t("nav_home")}</Link>
          <Link to="/tours" className={`nav-link ${location.pathname === '/tours' ? 'active' : ''}`} onClick={closeMenu}>{t("nav_tours")}</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>{t("nav_about")}</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>{t("nav_contact")}</Link>

          <div className="lang-switcher">
            <button onClick={() => changeLanguage('uz')} className={i18n.language === 'uz' ? 'active' : ''}>UZ</button>
            <span className="lang-divider">|</span>
            <button onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? 'active' : ''}>RU</button>
            <span className="lang-divider">|</span>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
          </div>

          <Link to="/contact" className="btn btn-primary nav-btn" onClick={closeMenu}>{t("nav_book")}</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
