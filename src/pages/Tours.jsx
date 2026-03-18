import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plane, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { toursData } from '../data/toursData';
import './Tours.css';

const Tours = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                <div className="overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="page-title text-white">{t('pg_tours_title')}</h1>
                    <p className="page-subtitle text-white">{t('pg_tours_subtitle')}</p>
                </div>
            </div>

            <section className="section bg-light">
                <div className="container">
                    <div className="filters mb-5">
                        <div className="search-bar">
                            <input type="text" placeholder={t('search_dest')} className="search-input" />
                            <button className="btn btn-primary">{t('btn_search')}</button>
                        </div>
                    </div>

                    <div className="tours-grid-dark">
                        {toursData.map(tour => {
                            const currentLang = i18n.language || 'ru';
                            const langKey = tour.title[currentLang] ? currentLang : 'ru';
                            const title = tour.title[langKey];

                            return (
                                <div key={tour.id} className="tour-card-dark">
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
                </div>
            </section>
        </div>
    );
};

export default Tours;
