import { useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import CertificateQuery from '../components/CertificateQuery';
import { CertificateUploader } from '../components/CertificateUploader';
import { seoData } from "../locales/seo";
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';
import { Toaster } from 'sonner';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function Certificate() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-deep)' }}>
            <Helmet>
                <title>{t(seoData.certificate.title, language)}</title>
                <meta name="description" content={t(seoData.certificate.description, language)} />
                <meta name="keywords" content={t(seoData.certificate.keywords, language)} />
                <meta property="og:title" content={t(seoData.certificate.title, language)} />
                <meta property="og:description" content={t(seoData.certificate.description, language)} />
                <meta property="twitter:title" content={t(seoData.certificate.title, language)} />
                <meta property="twitter:description" content={t(seoData.certificate.description, language)} />
            </Helmet>
            <Navigation />
            <section className="relative overflow-hidden pb-8 md:pb-[10vh]" style={{ paddingTop: '10vh' }}>
                <CertificateQuery />
                {import.meta.env.DEV && <CertificateUploader />}
            </section>
        </div>
    );
}