import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Map, Star, ChevronLeft, ChevronRight, Plane, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import './Home.css';
import './Tours.css';

const Home = () => {
    const { t, i18n } = useTranslation();

    // Get top 3 trending destinations
    const topDestinations = toursData.slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="hero-subtitle">{t('hero_subtitle')}</span>
                    <h1 className="hero-title">{t('hero_title').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>
                    <p className="hero-desc">{t('hero_desc')}</p>
                    <div className="hero-actions">
                        <Link to="/tours" className="btn btn-primary">{t('hero_btn_explore')} <ArrowRight size={20} /></Link>
                        <Link to="/about" className="btn btn-outline">{t('hero_btn_story')}</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><Map size={32} /></div>
                            <h3 className="feature-title">Curated Itineraries</h3>
                            <p className="feature-desc">Every journey is meticulously crafted by our luxury travel experts to ensure a seamless experience.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><Star size={32} /></div>
                            <h3 className="feature-title">Premium Stays</h3>
                            <p className="feature-desc">Gain access to the world's most exclusive resorts, boutique hotels, and hidden retreats.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><Compass size={32} /></div>
                            <h3 className="feature-title">Local immersion</h3>
                            <p className="feature-desc">Connect deeply with local cultures through private guides and authentic, off-the-beaten-path experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-title">
                        <span className="section-subtitle">Top Trending</span>
                        <h2 className="section-heading">Featured Destinations</h2>
                    </div>

                    <div className="tours-grid-dark mb-5">
                        {topDestinations.map(tour => {
                            const currentLang = i18n.language || 'ru';
                            const langKey = tour.title[currentLang] ? currentLang : 'ru';
                            const title = tour.title[langKey];

                            return (
                                <div key={tour.id} className="tour-card-dark" style={{ margin: '0 auto', maxWidth: '400px' }}>
                                    <div className="tour-img-wrapper">
                                        <img src={tour.image} alt={title} className="tour-img-dark" />
                                        <button className="carousel-arrow left"><ChevronLeft size={20} /></button>
                                        <button className="carousel-arrow right"><ChevronRight size={20} /></button>
                                    </div>
                                    <div className="tour-card-body">
                                        <div className="tour-card-header">
                                            <h3 className="tour-title-dark">{title}</h3>
                                            <div className="tour-price-info">
                                                <span className="price-label">{t('tour_price')}</span>
                                                <span className="price-value">{t('tour_from')} {tour.price} $</span>
                                            </div>
                                        </div>
                                        <div className="tour-details-grid">
                                            <div className="tour-detail-col">
                                                <div className="detail-title-flex">
                                                    <Plane className="detail-icon" size={24} />
                                                    <span className="detail-title">{t('tour_pkg')}</span>
                                                </div>
                                                <ul className="detail-list">
                                                    <li>{t('tour_flight')}</li>
                                                    <li>{t('tour_transfer')}</li>
                                                    <li>{t('tour_insurance')}</li>
                                                    <li>{t('tour_hotel')}</li>
                                                    <li>{t('tour_meals')}</li>
                                                </ul>
                                            </div>
                                            <div className="tour-detail-col">
                                                <div className="detail-title-flex">
                                                    <Clock className="detail-icon" size={22} />
                                                    <span className="detail-title">{t('tour_duration')}</span>
                                                </div>
                                                <ul className="detail-list">
                                                    <li>• {tour.days} {t('tour_days_nights', { days: tour.days, nights: tour.nights }).split(' / ')[0]} / {tour.nights} {t('tour_days_nights', { days: tour.days, nights: tour.nights }).split(' / ')[1]}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tour-actions-dark">
                                            <button className="btn-outline-darkcard">{t('btn_details')}</button>
                                            <Link to="/contact" className="btn-solid-darkcard">{t('btn_book')}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-center">
                        <Link to="/tours" className="btn btn-dark">View All Destinations</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-container">
                    <div className="cta-content">
                        <h2>Ready to start your next adventure?</h2>
                        <p>Our travel advisors are ready to craft your perfect getaway.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">Get a quote</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
