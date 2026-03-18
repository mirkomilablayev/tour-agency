import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Heart, Shield } from 'lucide-react';
import './About.css';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                <div className="overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="page-title text-white">{t('pg_about_title')}</h1>
                    <p className="page-subtitle text-white">{t('pg_about_subtitle')}</p>
                </div>
            </div>

            <section className="section">
                <div className="container about-grid">
                    <div className="about-content">
                        <span className="section-subtitle">{t('about_our_story')}</span>
                        <h2 className="section-heading mb-4">{t('about_heading')}</h2>
                        <p className="about-text mb-3">{t('about_p1')}</p>
                        <p className="about-text mb-4">{t('about_p2')}</p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-num">15+</span>
                                <span className="stat-label">{t('about_exp')}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-num">5k+</span>
                                <span className="stat-label">{t('about_clients')}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-num">50+</span>
                                <span className="stat-label">{t('about_dest')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Travelers" />
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">{t('about_why_us')}</span>
                        <h2 className="section-heading">{t('about_core_values')}</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <Shield className="value-icon" size={40} />
                            <h3 className="value-title">{t('about_trust_title')}</h3>
                            <p className="value-desc">{t('about_trust_desc')}</p>
                        </div>
                        <div className="value-card">
                            <Heart className="value-icon" size={40} />
                            <h3 className="value-title">{t('about_care_title')}</h3>
                            <p className="value-desc">{t('about_care_desc')}</p>
                        </div>
                        <div className="value-card">
                            <Users className="value-icon" size={40} />
                            <h3 className="value-title">{t('about_guide_title')}</h3>
                            <p className="value-desc">{t('about_guide_desc')}</p>
                        </div>
                        <div className="value-card">
                            <Award className="value-icon" size={40} />
                            <h3 className="value-title">{t('about_award_title')}</h3>
                            <p className="value-desc">{t('about_award_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
