import { useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Link, BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { DifferentiationDetail } from './pages/DifferentiationDetail';
import { ArrowRight } from 'react-feather';
import { Anchor, Layers, Target, Zap, Lightbulb, Database, Funnel, FlaskConical, Share2, Sparkles } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { homeContent, t } from './locales/homeContent';
import { seoData } from "./locales/seo";
import { ContactForm } from './components/ContactForm';
import { Toaster } from 'sonner';
import { StudentWorksSection } from './components/StudentWorksSection';
import { HelmetProvider, Helmet } from 'react-helmet-async';

function ScrollManager() {
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const isPageChange = prevPathnameRef.current !== location.pathname;

    // 如果有 hash，滚动到对应的锚点
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const top = element.getBoundingClientRect().top + window.pageYOffset;
          // 跨页面跳转用 instant，页面内跳转用 smooth
          window.scrollTo({
            top,
            behavior: isPageChange ? ('instant' as ScrollBehavior) : 'smooth'
          });
        }
      }, 0);
    } else {
      // 没有 hash，直接跳到顶部，无动画
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    // 更新 prev pathname
    prevPathnameRef.current = location.pathname;
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-deep)' }}>
      <Helmet>
        <title>{t(seoData.home.title, language)}</title>
        <meta name="description" content={t(seoData.home.description, language)} />
        <meta name="keywords" content={t(seoData.home.keywords, language)} />
        <meta property="og:title" content={t(seoData.home.title, language)} />
        <meta property="og:description" content={t(seoData.home.description, language)} />
        <meta property="twitter:title" content={t(seoData.home.title, language)} />
        <meta property="twitter:description" content={t(seoData.home.description, language)} />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="flex items-start px-4 relative overflow-hidden pb-8 md:pb-[10vh]" style={{ paddingTop: '20vh' }}>
        {/* Honeycomb Background Pattern */}
        <div className="overflow-hidden absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Standard honeycomb pattern - flat-top hexagons */}
              <pattern id="honeycomb" x="0" y="0" width="90" height="52" patternUnits="userSpaceOnUse">
                {/* Row 1 - Left hexagon */}
                <path d="M15,0 L45,0 L60,26 L45,52 L15,52 L0,26 Z"
                  fill="none"
                  stroke="#FF6900"
                  strokeWidth="1.5"
                  opacity="0.3" />
                {/* Row 2 - Right hexagon (offset) */}
                <path d="M60,26 L90,26 L105,52 L90,78 L60,78 L45,52 Z"
                  fill="none"
                  stroke="#FF6900"
                  strokeWidth="1.5"
                  opacity="0.3" />
              </pattern>

              {/* Radial gradient mask for center fade-out effect */}
              <radialGradient id="centerFade">
                <stop offset="0%" stopColor="#FFB380" stopOpacity="0" />
                <stop offset="30%" stopColor="#FFB380" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFA366" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#FFB380" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFB380" stopOpacity="0" />
              </radialGradient>

              <mask id="honeycombMask">
                <rect width="100%" height="100%" fill="url(#centerFade)" />
              </mask>
            </defs>

            {/* Honeycomb grid with mask */}
            <rect width="100%" height="100%" fill="url(#honeycomb)" mask="url(#honeycombMask)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl text-center" style={{ marginTop: '-8vh' }}>
          <h1 className="px-4 mb-0" style={{
            fontSize: 'clamp(32px, 8vw, 70px)',
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: '0.5px',
            color: '#fffffe'
          }}>
            {language === 'ZH' ? (
              <>
                用 <span style={{
                  color: 'var(--orange-primary)',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  AI
                  <svg
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: 'clamp(8px, 1.5vw, 12px)',
                      overflow: 'visible'
                    }}
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 2 Q 50 12 100 2"
                      fill="none"
                      stroke="var(--orange-primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span> 进化学习力
              </>
            ) : (
              <>
                Evolve Learning with <span style={{
                  color: 'var(--orange-primary)',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  AI
                  <svg
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: 'clamp(8px, 1.5vw, 12px)',
                      overflow: 'visible'
                    }}
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 2 Q 50 12 100 2"
                      fill="none"
                      stroke="var(--orange-primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </>
            )}
          </h1>
          <p className="px-4 mx-auto" style={{
            fontSize: 'clamp(18px, 3.5vw, 24px)',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            marginTop: 'clamp(24px, 4vw, 32px)',
            marginBottom: 'clamp(48px, 8vw, 80px)'
          }}>
            {t(homeContent.hero.subtitle, language)}
          </p>
          <a
            href="#platform"
            className="inline-flex gap-3 items-center transition-all"
            style={{
              height: 'clamp(48px, 7vw, 52px)',
              lineHeight: 'clamp(48px, 7vw, 52px)',
              paddingLeft: 'clamp(24px, 4vw, 32px)',
              paddingRight: 'clamp(24px, 4vw, 32px)',
              backgroundColor: '#FFFFFF',
              color: '#FF6900',
              borderRadius: 'clamp(24px, 3.5vw, 26px)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 'clamp(14px, 2.5vw, 16px)'
            }}
          >
            {t(homeContent.hero.cta, language)}
            <div style={{
              width: 'clamp(20px, 3.5vw, 24px)',
              height: 'clamp(20px, 3.5vw, 24px)',
              borderRadius: '50%',
              backgroundColor: '#FF6900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ArrowRight size={14} color="#FFFFFF" strokeWidth={2.5} />
            </div>
          </a>
        </div>
      </section>

      {/* Learning Power Platform Section (includes both bootcamps and learning platform) */}
      <section id="platform" className="px-4 pt-8 pb-8 border-t border-white/10 md:pt-20 md:pb-20" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="mx-auto w-full max-w-7xl">
          {/* Learning Power Platform - Bootcamps */}
          <h2 className="mb-4 text-center" style={{
            color: 'var(--text-primary)',
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.platform.title, language)}</h2>
          <p className="mb-8 text-center md:mb-16" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
            {t(homeContent.platform.subtitle, language)}
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4 md:gap-6 md:mb-20">
            {/* Stat 1 */}
            <div className="text-center rounded-lg border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300" style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
              <div style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                display: 'inline-block',
                marginBottom: 'clamp(8px, 1.5vw, 12px)'
              }}>
                {t(homeContent.platform.stats.students.number, language)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.4 }}>{t(homeContent.platform.stats.students.label, language)}</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300" style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
              <div style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                display: 'inline-block',
                marginBottom: 'clamp(8px, 1.5vw, 12px)'
              }}>
                {t(homeContent.platform.stats.projects.number, language)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.4 }}>{t(homeContent.platform.stats.projects.label, language)}</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center rounded-lg border border-white/5 bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300" style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
              <div style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #A855F7 0%, #C084FC 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                display: 'inline-block',
                marginBottom: 'clamp(8px, 1.5vw, 12px)'
              }}>
                {t(homeContent.platform.stats.satisfaction.number, language)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.4 }}>{t(homeContent.platform.stats.satisfaction.label, language)}</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center rounded-lg border border-white/5 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300" style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
              <div style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--orange-primary) 0%, #ff8c42 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                display: 'inline-block',
                marginBottom: 'clamp(8px, 1.5vw, 12px)'
              }}>
                {t(homeContent.platform.stats.support.number, language)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.4 }}>{t(homeContent.platform.stats.support.label, language)}</p>
            </div>
          </div>

          <div className="max-w-[1154px] mx-auto">
            <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 md:mb-16">
              {/* Alpha 实战营 */}
              <div className="group p-8 border border-white/10 rounded-lg hover:border-orange-500/50 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br transition-all duration-300 from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0"></div>

                <div className="relative z-10">
                  <h3 className="mb-2" style={{ color: 'var(--orange-primary)', fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 700 }}>{t(homeContent.platform.alpha.title, language)}</h3>
                  <p className="mb-6" style={{ color: '#9CA3AF', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.platform.alpha.subtitle, language)}</p>
                  <p className="mb-6" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#9CA3AF' }}>
                    {t(homeContent.platform.alpha.description, language)}
                  </p>
                  <ul className="mb-8 space-y-3">
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.alpha.features.feature1, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.alpha.features.feature2, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.alpha.features.feature3, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.alpha.features.feature4, language)}</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <a
                      href="https://bee-alpha.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1.5px solid var(--orange-primary)',
                        color: 'var(--orange-primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 105, 0, 0.15)';
                        e.currentTarget.style.borderColor = 'var(--orange-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'var(--orange-primary)';
                      }}
                    >
                      {t(homeContent.platform.alpha.cta, language)}
                    </a>
                  </div>
                </div>
              </div>

              {/* Beta 实战营 */}
              <div className="group p-8 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br transition-all duration-300 from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/0"></div>

                <div className="relative z-10">
                  <h3 className="mb-2" style={{ color: '#06B6D4', fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 700 }}>{t(homeContent.platform.beta.title, language)}</h3>
                  <p className="mb-6" style={{ color: '#9CA3AF', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.platform.beta.subtitle, language)}</p>
                  <p className="mb-6" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#9CA3AF' }}>
                    {t(homeContent.platform.beta.description, language)}
                  </p>
                  <ul className="mb-8 space-y-3">
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.beta.features.feature1, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.beta.features.feature2, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.beta.features.feature3, language)}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      </div>
                      <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.beta.features.feature4, language)}</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <a
                      href="https://bee-beta.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1.5px solid #06B6D4',
                        color: '#06B6D4',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.15)';
                        e.currentTarget.style.borderColor = '#06B6D4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = '#06B6D4';
                      }}
                    >
                      {t(homeContent.platform.beta.cta, language)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Platform App - Part of the same section */}
          <div>
            <div className="p-8 rounded-lg border transition-colors border-white/10 hover:border-purple-500/30">
              <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
                {/* Left - Visual/Image Area */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-lg border border-white/10 overflow-hidden relative group">
                    {/* Real Image */}
                    <img
                      src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/beebee_edu.jpg"
                      alt="学习平台界面"
                      className="object-cover w-full h-full"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60 via-black/20"></div>
                  </div>
                </div>

                {/* Right - Content Area */}
                <div>
                  <h3 className="mb-2" style={{ color: '#A855F7', fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 700 }}>{t(homeContent.platform.learningPlatform.title, language)}</h3>
                  <p className="mb-6" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.platform.learningPlatform.subtitle, language)}</p>
                  <p className="mb-10" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>
                    {t(homeContent.platform.learningPlatform.description, language)}
                  </p>

                  <h4 className="mb-6" style={{ color: '#A855F7', fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.platform.learningPlatform.featuresTitle, language)}</h4>
                  <div className="mb-10 space-y-4">
                    <div className="flex gap-3 items-center">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.learningPlatform.features.feature1, language)}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.learningPlatform.features.feature2, language)}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.learningPlatform.features.feature3, language)}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', lineHeight: '1.75', color: '#D1D5DB' }}>{t(homeContent.platform.learningPlatform.features.feature4, language)}</p>
                    </div>
                  </div>

                  <a
                    href="https://learn.beebee.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1.5px solid #A855F7',
                      color: '#A855F7',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
                      e.currentTarget.style.borderColor = '#A855F7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#A855F7';
                    }}
                  >
                    {t(homeContent.platform.learningPlatform.cta, language)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Curriculum Section - 我们的差异化 */}
      <section id="system" className="px-4 pt-8 pb-8 bg-black border-t border-white/10 md:pt-20 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-4 text-center" style={{
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.differentiation.title, language)}</h2>
          <p className="mb-8 text-center text-gray-400 md:mb-20" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.differentiation.subtitle, language)}</p>

          {/* Staggered Layout */}
          <div className="mx-auto space-y-8 max-w-6xl md:space-y-24">
            {/* Item 01 - Left aligned */}
            <div className="grid relative gap-8 items-center md:grid-cols-12">
              <div className="md:col-span-7 group">
                <div className="relative p-6 md:p-8 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden bg-gradient-to-br from-cyan-500/[0.03] to-transparent">
                  {/* Icon - Background positioned at top right */}
                  <div className="flex absolute -top-4 -right-4 justify-center items-center w-24 h-24 rounded-2xl border transition-all duration-300 rotate-12 bg-cyan-500/5 border-cyan-500/10 group-hover:bg-cyan-500/10 group-hover:rotate-6">
                    <Lightbulb className="w-12 h-12 text-cyan-400/40" />
                  </div>

                  <h3 className="relative mb-4 font-semibold" style={{ fontSize: 'clamp(18px, 3.5vw, 24px)' }}>{t(homeContent.differentiation.item1.title, language)}</h3>
                  <p className="relative mb-6 font-medium leading-snug text-cyan-400" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>{t(homeContent.differentiation.item1.subtitle, language)}</p>
                  <p className="relative leading-relaxed text-gray-400" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                    {t(homeContent.differentiation.item1.description, language)}
                  </p>

                  {/* Accent line */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r to-transparent from-cyan-500/50 via-cyan-500/20"></div>
                </div>
              </div>

              {/* Right side - decorative number */}
              <div className="hidden justify-center items-center md:flex md:col-span-5">
                <div className="text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400/50 to-cyan-600/20 select-none" style={{ lineHeight: 1 }}>
                  01
                </div>
              </div>
            </div>

            {/* Item 02 - Right aligned */}
            <div className="grid relative gap-8 items-center md:grid-cols-12">
              {/* Left side - decorative number */}
              <div className="hidden order-1 justify-center items-center md:flex md:col-span-5 md:order-none">
                <div className="text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400/50 to-blue-600/20 select-none" style={{ lineHeight: 1 }}>
                  02
                </div>
              </div>

              <div className="order-2 md:col-span-7 group md:order-none">
                <div className="relative p-6 md:p-8 border border-white/10 rounded-2xl hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden bg-gradient-to-br from-blue-500/[0.03] to-transparent">
                  {/* Icon - Background positioned at top right */}
                  <div className="flex absolute -top-4 -right-4 justify-center items-center w-24 h-24 rounded-2xl border transition-all duration-300 rotate-12 bg-blue-500/5 border-blue-500/10 group-hover:bg-blue-500/10 group-hover:rotate-6">
                    <Target className="w-12 h-12 text-blue-400/40" />
                  </div>

                  <h3 className="relative mb-4 font-semibold" style={{ fontSize: 'clamp(18px, 3.5vw, 24px)' }}>{t(homeContent.differentiation.item2.title, language)}</h3>
                  <p className="relative mb-6 font-medium leading-snug text-blue-400" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>{t(homeContent.differentiation.item2.subtitle, language)}</p>
                  <p className="relative leading-relaxed text-gray-400" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                    {t(homeContent.differentiation.item2.description, language)}
                  </p>

                  {/* Accent line */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-blue-500/50"></div>
                </div>
              </div>
            </div>

            {/* Item 03 - Left aligned */}
            <div className="grid relative gap-8 items-center md:grid-cols-12">
              <div className="md:col-span-7 group">
                <div className="relative p-6 md:p-8 border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 overflow-hidden bg-gradient-to-br from-purple-500/[0.03] to-transparent">
                  {/* Icon - Background positioned at top right */}
                  <div className="flex absolute -top-4 -right-4 justify-center items-center w-24 h-24 rounded-2xl border transition-all duration-300 rotate-12 bg-purple-500/5 border-purple-500/10 group-hover:bg-purple-500/10 group-hover:rotate-6">
                    <Layers className="w-12 h-12 text-purple-400/40" />
                  </div>

                  <h3 className="relative mb-4 font-semibold" style={{ fontSize: 'clamp(18px, 3.5vw, 24px)' }}>{t(homeContent.differentiation.item3.title, language)}</h3>
                  <p className="relative mb-6 font-medium leading-snug text-purple-400" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>{t(homeContent.differentiation.item3.subtitle, language)}</p>
                  <p className="relative leading-relaxed text-gray-400" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                    {t(homeContent.differentiation.item3.description, language)}
                  </p>

                  {/* Accent line */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r to-transparent from-purple-500/50 via-purple-500/20"></div>
                </div>
              </div>

              {/* Right side - decorative number */}
              <div className="hidden justify-center items-center md:flex md:col-span-5">
                <div className="text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400/50 to-purple-600/20 select-none" style={{ lineHeight: 1 }}>
                  03
                </div>
              </div>
            </div>

            {/* Item 04 - Right aligned */}
            <div className="grid relative gap-8 items-center md:grid-cols-12">
              {/* Left side - decorative number */}
              <div className="hidden order-1 justify-center items-center md:flex md:col-span-5 md:order-none">
                <div className="text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500/50 to-orange-600/20 select-none" style={{ lineHeight: 1 }}>
                  04
                </div>
              </div>

              <div className="order-2 md:col-span-7 group md:order-none">
                <div className="relative p-6 md:p-8 border border-white/10 rounded-2xl hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(255,105,0,0.15)] transition-all duration-500 overflow-hidden bg-gradient-to-br from-orange-500/[0.03] to-transparent">
                  {/* Icon - Background positioned at top right */}
                  <div className="flex absolute -top-4 -right-4 justify-center items-center w-24 h-24 rounded-2xl border transition-all duration-300 rotate-12 bg-orange-500/5 border-orange-500/10 group-hover:bg-orange-500/10 group-hover:rotate-6">
                    <Sparkles className="w-12 h-12 text-orange-500/40" />
                  </div>

                  <h3 className="relative mb-4 font-semibold" style={{ fontSize: 'clamp(18px, 3.5vw, 24px)' }}>{t(homeContent.differentiation.item4.title, language)}</h3>
                  <p className="relative mb-6 font-medium leading-snug text-orange-500" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>{t(homeContent.differentiation.item4.subtitle, language)}</p>
                  <p className="relative leading-relaxed text-gray-400" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                    {t(homeContent.differentiation.item4.description, language)}
                  </p>

                  {/* Accent line */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-orange-500/50"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/differentiation"
              className="inline-flex gap-2 items-center px-8 py-3 text-white rounded-lg border-2 transition-all duration-300 group border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-500"
              style={{ textDecoration: 'none' }}
            >
              {t(homeContent.differentiation.cta, language)}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Works Section */}
      <StudentWorksSection />

      {/* Brand Philosophy Section */}
      <section id="philosophy" className="px-4 pt-8 pb-8 bg-black border-t border-white/10 md:pt-20 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-4 text-center" style={{
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.philosophy.title, language)}</h2>
          <p className="mb-8 text-center text-gray-400 md:mb-16" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.philosophy.subtitle, language)}</p>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column - Vision and Core Concepts */}
            <div className="space-y-10">
              {/* Vision and Mission */}
              <div className="flex gap-4">
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-cyan-400 rounded-full border-2 border-cyan-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)', fontWeight: 600 }}>{t(homeContent.philosophy.visionMission.title, language)}</h3>
                  <p className="mb-1 text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>
                    {t(homeContent.philosophy.visionMission.content, language)}
                  </p>
                </div>
              </div>

              {/* AI Era Enterprise */}
              <div className="flex gap-4">
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-purple-400 rounded-full border-2 border-purple-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)', fontWeight: 600 }}>{t(homeContent.philosophy.aiEra.title, language)}</h3>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>
                    {t(homeContent.philosophy.aiEra.content, language)}
                  </p>
                </div>
              </div>

              {/* System */}
              <div className="flex gap-4">
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-blue-400 rounded-full border-2 border-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)', fontWeight: 600 }}>{t(homeContent.philosophy.system.title, language)}</h3>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>
                    {t(homeContent.philosophy.system.content, language)}
                  </p>
                </div>
              </div>

              {/* Human-AI Co-creation */}
              <div className="flex gap-4">
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-green-400 rounded-full border-2 border-green-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)', fontWeight: 600 }}>{t(homeContent.philosophy.humanAI.title, language)}</h3>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>
                    {t(homeContent.philosophy.humanAI.content, language)}
                  </p>
                </div>
              </div>

              {/* Lifelong Learning */}
              <div className="flex gap-4">
                <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 text-orange-500 rounded-full border-2 border-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)', fontWeight: 600 }}>{t(homeContent.philosophy.lifelongLearning.title, language)}</h3>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>
                    {t(homeContent.philosophy.lifelongLearning.content, language)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Core Values */}
            <div>
              <div className="mb-8">
                <p className="mb-2 text-white" style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>{t(homeContent.philosophy.coreValues.label, language)}</p>
                <h2 className="mb-4 text-orange-500" style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 600 }}>{t(homeContent.philosophy.coreValues.title, language)}</h2>
                <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>{t(homeContent.philosophy.coreValues.subtitle, language)}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-lg border transition-colors bg-white/5 border-white/10 hover:border-orange-500/50">
                  <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-orange-500/10">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <p className="text-white" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>{t(homeContent.philosophy.coreValues.value1, language)}</p>
                </div>

                <div className="p-8 rounded-lg border transition-colors bg-white/5 border-white/10 hover:border-orange-500/50">
                  <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-orange-500/10">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-white" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>{t(homeContent.philosophy.coreValues.value2, language)}</p>
                </div>

                <div className="p-8 rounded-lg border transition-colors bg-white/5 border-white/10 hover:border-orange-500/50">
                  <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-orange-500/10">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-white" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>{t(homeContent.philosophy.coreValues.value3, language)}</p>
                </div>

                <div className="p-8 rounded-lg border transition-colors bg-white/5 border-white/10 hover:border-orange-500/50">
                  <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-orange-500/10">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white" style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', lineHeight: 1.6 }}>{t(homeContent.philosophy.coreValues.value4, language)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 border-t border-white/10 pt-8 md:pt-20 pb-8 md:pb-20 bg-white/[0.08]">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-center md:mb-16" style={{
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.about.title, language)}</h2>

          {/* Company Introduction */}
          <div className="mb-8 md:mb-20">
            <div className="mx-auto mb-12 max-w-5xl">
              <div className="space-y-6 text-gray-300" style={{ lineHeight: '2', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                <p>
                  {t(homeContent.about.intro.p1, language)}
                </p>
                <p>
                  {t(homeContent.about.intro.p2, language)}
                </p>
                <p>
                  {t(homeContent.about.intro.p3, language)}
                </p>
              </div>
            </div>

            {/* Company Highlights */}
            <div className="grid grid-cols-3 gap-3 mx-auto max-w-5xl sm:gap-4 md:gap-6">
              <div className="rounded-lg border transition-colors border-white/10 hover:border-cyan-500/50" style={{ padding: 'clamp(12px, 3vw, 24px)' }}>
                <div className="flex justify-center items-center mx-auto rounded-full bg-cyan-500/10" style={{ width: 'clamp(32px, 6vw, 48px)', height: 'clamp(32px, 6vw, 48px)', marginBottom: 'clamp(8px, 2vw, 16px)' }}>
                  <svg className="text-cyan-400" style={{ width: 'clamp(16px, 3vw, 24px)', height: 'clamp(16px, 3vw, 24px)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-center" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>{t(homeContent.about.highlights.globalTeam.title, language)}</h4>
                <p className="text-center text-gray-400" style={{ fontSize: 'clamp(11px, 2vw, 14px)', lineHeight: 1.5 }}>{t(homeContent.about.highlights.globalTeam.desc, language)}</p>
              </div>

              <div className="rounded-lg border transition-colors border-white/10 hover:border-purple-500/50" style={{ padding: 'clamp(12px, 3vw, 24px)' }}>
                <div className="flex justify-center items-center mx-auto rounded-full bg-purple-500/10" style={{ width: 'clamp(32px, 6vw, 48px)', height: 'clamp(32px, 6vw, 48px)', marginBottom: 'clamp(8px, 2vw, 16px)' }}>
                  <svg className="text-purple-400" style={{ width: 'clamp(16px, 3vw, 24px)', height: 'clamp(16px, 3vw, 24px)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-center" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>{t(homeContent.about.highlights.deepExperience.title, language)}</h4>
                <p className="text-center text-gray-400" style={{ fontSize: 'clamp(11px, 2vw, 14px)', lineHeight: 1.5 }}>{t(homeContent.about.highlights.deepExperience.desc, language)}</p>
              </div>

              <div className="rounded-lg border transition-colors border-white/10 hover:border-blue-500/50" style={{ padding: 'clamp(12px, 3vw, 24px)' }}>
                <div className="flex justify-center items-center mx-auto rounded-full bg-blue-500/10" style={{ width: 'clamp(32px, 6vw, 48px)', height: 'clamp(32px, 6vw, 48px)', marginBottom: 'clamp(8px, 2vw, 16px)' }}>
                  <svg className="text-blue-400" style={{ width: 'clamp(16px, 3vw, 24px)', height: 'clamp(16px, 3vw, 24px)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-center" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>{t(homeContent.about.highlights.enterprise.title, language)}</h4>
                <p className="text-center text-gray-400" style={{ fontSize: 'clamp(11px, 2vw, 14px)', lineHeight: 1.5 }}>{t(homeContent.about.highlights.enterprise.desc, language)}</p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="pt-8 border-t border-white/10 md:pt-20">
            <h3 className="mb-12 text-center" style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 600 }}>{t(homeContent.about.founderSection, language)}</h3>
            <div className="mx-auto max-w-5xl">
              <div className="space-y-6" style={{ lineHeight: '2' }}>
                {/* Founder Photo & Bio - Responsive layout */}
                <div className="mb-8">
                  {/* Mobile: Left-right layout with avatar on left */}
                  <div className="flex gap-4 items-start mb-6 md:hidden">
                    <div className="flex-shrink-0">
                      <div className="overflow-hidden w-32 h-32 rounded-full border border-white/10">
                        <img
                          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png"
                          alt="周品 - BEEBEE AI 创始人 & CEO"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="mt-2 w-32 text-center">
                        <h4 className="mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.about.ceo.name, language)}</h4>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2vw, 14px)' }}>{t(homeContent.about.ceo.title, language)}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                        {t(homeContent.about.ceo.bio, language)}
                      </p>
                    </div>
                  </div>

                  {/* Desktop: Large image on left side */}
                  <div className="hidden gap-12 items-start md:flex">
                    <div className="flex-shrink-0" style={{ width: '280px' }}>
                      <div className="overflow-hidden mb-6 rounded-lg border border-white/10">
                        <img
                          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png"
                          alt="周品 - BEEBEE AI 创始人 & CEO"
                          className="object-cover w-full h-auto"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.about.ceo.name, language)}</h4>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2vw, 14px)' }}>{t(homeContent.about.ceo.title, language)}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-8 text-gray-300" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                        {t(homeContent.about.ceo.bio, language)}
                      </p>

                      {/* Career History - Desktop version inside right column */}
                      <div>
                        <h4 className="mb-4 text-orange-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.careerTitle, language)}</h4>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.beebee.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.beebee.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.quwan.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.quwan.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.cheetah.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.cheetah.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.baidu.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.baidu.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.early.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.early.desc, language)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career History - Mobile version */}
                <div className="clear-both md:hidden">
                  <h4 className="mb-4 text-orange-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.careerTitle, language)}</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.beebee.title, language)}</p>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.beebee.desc, language)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.quwan.title, language)}</p>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.quwan.desc, language)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.cheetah.title, language)}</p>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.cheetah.desc, language)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.baidu.title, language)}</p>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.baidu.desc, language)}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="mb-1 text-white" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.early.title, language)}</p>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.early.desc, language)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Philosophy */}
                <div>
                  <h4 className="mb-4 text-orange-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.philosophyTitle, language)}</h4>
                  <p className="mb-6 text-gray-300" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                    {t(homeContent.about.ceo.philosophy, language)}
                  </p>
                  <div className="py-4 pr-6 pl-6 border-l-4 border-orange-500 bg-white/5">
                    <p className="mb-2 italic text-gray-300" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                      "{t(homeContent.about.ceo.quote.text, language)}"
                    </p>
                    <p className="text-right text-gray-500" style={{ fontSize: 'clamp(12px, 2vw, 13px)' }}>{t(homeContent.about.ceo.quote.author, language)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 pt-8 pb-8 bg-black border-t border-white/10 md:pt-20 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-12 text-center" style={{
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.contact.title, language)}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 space-y-6 md:order-1">
              {/* Image above address - PC端全宽但固定高度 */}
              <div className="mb-6">
                <img
                  src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/b_hive.png"
                  alt="BEEBEE AI Location"
                  className="w-full rounded-lg md:mb-8 md:h-84 md:object-cover"
                />
              </div>

              {/* Email section - moved above address */}
              <div>
                <h3 className="mb-3" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.contact.info.email, language)}</h3>
                <div className="flex gap-3 items-start">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 14px)' }}>
                    <a href={`mailto:${homeContent.contact.info.emailBusiness}`} className="transition-colors hover:text-orange-500">
                      {homeContent.contact.info.emailBusiness}
                    </a>
                  </p>
                </div>
              </div>

              {/* Address section */}
              <div>
                <h3 className="mb-3" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.contact.info.address, language)}</h3>
                <div className="space-y-3">
                  {t(homeContent.contact.info.addressValue, language).split('\n').map((addr, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-400" style={{ fontSize: 'clamp(13px, 2.2vw, 14px)' }}>{addr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-6" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.contact.formTitle, language)}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 border-t border-white/10" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="pt-8 mx-auto max-w-7xl md:pt-20">
          <div className="grid grid-cols-2 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-4">
                <img src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/beebee_ico.png" alt="BEEBEE Logo" className="mb-3 w-10 h-10" />
                <p className="mb-3" style={{ color: 'var(--orange-primary)', fontSize: 'clamp(13px, 2.2vw, 15px)' }}>{t(homeContent.footer.tagline, language)}</p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(15px, 2.5vw, 16px)' }}>{t(homeContent.footer.quickNav, language)}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.nav.home, language)}
                  </a>
                </li>
                <li>
                  <a href="#platform" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.nav.platform, language)}
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.nav.philosophy, language)}
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.nav.about, language)}
                  </a>
                </li>
              </ul>
            </div>

            {/* Training Camps Links */}
            <div>
              <h4 className="mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(15px, 2.5vw, 16px)' }}>{t(homeContent.footer.trainingCamps, language)}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#platform" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.footer.platformLinks.alpha, language)}
                  </a>
                </li>
                <li>
                  <a href="#platform" className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {t(homeContent.footer.platformLinks.beta, language)}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(15px, 2.5vw, 16px)' }}>{t(homeContent.nav.contact, language)}</h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--orange-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${homeContent.contact.info.emailBusiness}`} className="transition-colors" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {homeContent.contact.info.emailBusiness}
                  </a>
                </li>
                <li>
                  <div className="space-y-1.5">
                    {t(homeContent.footer.contactInfo.address, language).split('\n').map((addr, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--orange-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}>{addr}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 pb-4 text-center border-t border-white/10">
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(12px, 2vw, 14px)' }}>
              © {new Date().getFullYear()} BEEBEE AI {language === 'ZH' ? '学习力平台' : 'Learning Platform'}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/differentiation" element={<DifferentiationDetail />} />
          </Routes>
          {/* Toast notifications */}
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}