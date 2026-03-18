import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [phone, setPhone] = useState('+998 ');

    const handlePhoneChange = (e) => {
        let val = e.target.value;
        if (!val.startsWith('+998')) {
            val = '+998 ';
        }
        val = val.replace(/[^\d\s\+\-\(\)]/g, '');
        setPhone(val);
    };

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516483638261-f40af5eb2756?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                <div className="overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="page-title text-white">{t('pg_contact_title')}</h1>
                    <p className="page-subtitle text-white">{t('pg_contact_subtitle')}</p>
                </div>
            </div>

            <section className="section bg-light">
                <div className="container contact-container">
                    <div className="contact-info-panel">
                        <h2 className="mb-4 text-primary">{t('contact_get_in_touch')}</h2>
                        <p className="mb-5 text-muted">{t('contact_ready')}</p>

                        <div className="info-item mb-4">
                            <div className="info-icon"><MapPin size={24} /></div>
                            <div>
                                <h4 className="info-title">{t('contact_hq')}</h4>
                                <p className="info-text">{t('contact_hq_loc').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
                            </div>
                        </div>

                        <div className="info-item mb-4">
                            <div className="info-icon"><Phone size={24} /></div>
                            <div>
                                <h4 className="info-title">{t('contact_phone_title')}</h4>
                                <p className="info-text">{t('contact_phone_num').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Mail size={24} /></div>
                            <div>
                                <h4 className="info-title">{t('contact_email_title')}</h4>
                                <p className="info-text">{t('contact_email_addr').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel">
                        <h3 className="mb-4">{t('contact_send_msg')}</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">{t('contact_fname')}</label>
                                    <input type="text" id="firstName" className="form-control" placeholder="John" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">{t('contact_lname')}</label>
                                    <input type="text" id="lastName" className="form-control" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">{t('contact_phone_label')}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="+998 90 123 45 67"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">{t('contact_subject')}</label>
                                <select id="subject" className="form-control" required>
                                    <option value="">{t('contact_subj_sel')}</option>
                                    <option value="booking">{t('contact_subj_tour')}</option>
                                    <option value="custom">{t('contact_subj_cust')}</option>
                                    <option value="support">{t('contact_subj_supp')}</option>
                                    <option value="other">{t('contact_subj_oth')}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact_message')}</label>
                                <textarea id="message" className="form-control" rows="5" placeholder={t('contact_msg_ph')} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">{t('contact_btn_send')} <Send size={20} /></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
