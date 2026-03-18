import React from 'react';
import { Compass, Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col about">
                    <Link to="/" className="brand">
                        <Compass className="brand-icon" size={28} />
                        <span>Lumina<strong>Tours</strong></span>
                    </Link>
                    <p className="footer-text mt-3">
                        Embark on unforgettable journeys with LuminaTours. We curate luxury travel experiences that go beyond the ordinary, connecting you with the heart of every destination.
                    </p>
                    <div className="social-links mt-4">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tours">Destinations</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="#">Reviews</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-list contact-info">
                        <li><MapPin size={20} className="icon" /> 123 Adventure Lane, NY 10001, USA</li>
                        <li><Phone size={20} className="icon" /> +1 (800) 123 4567</li>
                        <li><Mail size={20} className="icon" /> info@luminatours.com</li>
                    </ul>
                </div>

                <div className="footer-col newsletter">
                    <h4 className="footer-heading">Newsletter</h4>
                    <p className="footer-text">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form className="newsletter-form mt-3" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                        <button type="submit" className="newsletter-btn"><ArrowRight size={20} /></button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} LuminaTours. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
