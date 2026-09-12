import { lazy, Suspense, useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Link, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DifferentiationDetail } from './pages/DifferentiationDetail';
import { ArrowUpRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { homeContent, t } from './locales/homeContent';
import { ContactForm } from './components/ContactForm';
import { Toaster } from 'sonner';
import { StudentWorksSection } from './components/StudentWorksSection';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Seo } from './components/Seo';
import { FaqSection, faqItems } from './components/FaqSection';
import { GrowthPathSection } from './components/GrowthPathSection';
import { SigmaCasesSection } from './components/SigmaCasesSection';
import { Reveal } from './components/Reveal';
import { Hero } from './components/Hero';
import { SectionHeader } from './components/SectionHeader';
import { StudentProjectsPage } from './pages/StudentProjectsPage';
import { IntentLandingPage } from './pages/IntentLandingPage';
const CertificatePage = lazy(() => import('./pages/CertificatePage').then(module => ({ default: module.CertificatePage })));

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--txt)' }}>
      <Seo
        title="BEEBEE AI｜企业 AI 陪跑专家"
        description="BEEBEE AI 是企业 AI 陪跑专家：AI Native、可管理的企业 Agent 平台，连接企业现有系统，持续构建、运营和优化 AI Agent，从第一个 Agent 上线到 AI 真正进入企业日常业务。"
        structuredData={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://beebee.ai/#organization', name: 'BEEBEE AI', url: 'https://beebee.ai/', email: 'service@beebee.ai', logo: 'https://beebee.ai/brand/icon-512.png', sameAs: ['https://bee-alpha.com/', 'https://bee-beta.com/', 'https://beesigma.com/'], contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'service@beebee.ai', availableLanguage: ['Chinese', 'English'] }, knowsAbout: ['企业 AI 陪跑', 'AI Agent', '企业 Agent 平台', '业务流程自动化', 'RAG', 'AI 项目制实训', 'AI 人才培养'], address: [{ '@type': 'PostalAddress', streetAddress: 'B:Hive, 74 Taharoto Road, Smales Farm, Takapuna', addressLocality: 'Auckland', addressCountry: 'NZ' }, { '@type': 'PostalAddress', streetAddress: '成都高新孵化园 1 号楼 A 座', addressLocality: '成都', addressRegion: '四川', addressCountry: 'CN' }] },
          { '@context': 'https://schema.org', '@type': 'Person', name: '周品', alternateName: 'Pin Zhou', jobTitle: 'BEEBEE AI 创始人 / 创业导师', worksFor: { '@id': 'https://beebee.ai/#organization' }, description: '拥有 25 年以上 IT 与互联网产品运营创业经验和 8 年 AI 实战经验。' },
          { '@context': 'https://schema.org', '@type': 'Person', name: 'Vito Liu', jobTitle: '高级 AI 工程师', worksFor: { '@id': 'https://beebee.ai/#organization' }, alumniOf: { '@type': 'CollegeOrUniversity', name: 'McGill University' }, description: '计算机科学与数学双学位，专注 RAG 系统和 LLM 应用开发。' },
          { '@context': 'https://schema.org', '@type': 'Person', name: 'Fred Chi', alternateName: '池老师', jobTitle: '首席程序员', worksFor: { '@id': 'https://beebee.ai/#organization' }, description: '拥有 25 年技术经验，擅长私有模型部署、分布式系统架构和高性能数据处理。' },
          { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.zh[0], acceptedAnswer: { '@type': 'Answer', text: item.zh[1] } })) },
          { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-alpha.com/#course', name: 'BEEBEE AI Alpha 实训营', description: '面向青少年的 AI 教育训练营，围绕真实任务、AI 工具与工作流搭建形成可展示成果。', url: 'https://bee-alpha.com/', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '12–19 岁青少年' }, hasCourseInstance: [{ '@type': 'CourseInstance', name: 'Alpha 启航营（Genesis）', courseMode: 'Online', timeRequired: 'PT18H' }, { '@type': 'CourseInstance', name: 'Alpha 远航营（Odyssey）', courseMode: 'Online', timeRequired: 'PT27H' }] },
          { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-beta.com/#course', name: 'BEEBEE AI Beta 实训营', description: '通过真实项目训练 AI Native 产品、全栈工程与市场验证能力。', url: 'https://bee-beta.com/', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '18 岁以上大学生、研究生、在职工程师与创业者' }, hasCourseInstance: [{ '@type': 'CourseInstance', name: 'Beta 星空营（Galaxy）', courseMode: 'Online', timeRequired: 'P6W' }, { '@type': 'CourseInstance', name: 'Beta 深空营（Cosmos）', courseMode: 'Online', timeRequired: 'P8W' }, { '@type': 'CourseInstance', name: 'Beta 无界营（Infinity）', courseMode: 'Online', timeRequired: 'P12W' }] },
        ]}
      />
      <Helmet>
        <meta name="keywords" content="企业 AI 陪跑, 企业 Agent 平台, AI Agent 落地, 企业 AI 咨询, 业务流程自动化, AI Native, 可管理的 Agent, 新西兰 AI 落地, BEEBEE AI, BEE Sigma" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Growth Path Section: Alpha → Beta → Sigma (keeps id="platform") */}
      <GrowthPathSection />

      {/* BEE Sigma cases: three workflows */}
      <SigmaCasesSection />

      {/* Student Works Section */}
      <StudentWorksSection compact />

      {/* About Us Section */}
      <section id="about" className="pt-[110px] md:pt-[140px] pb-8">
        <div className="wrap">
          <SectionHeader eyebrow={language === 'ZH' ? '关于我们 · BEEBEE AI Ltd' : 'About · BEEBEE AI Ltd'} title={t(homeContent.about.title, language)} />

          <div className="mt-12 grid lg:grid-cols-[1.15fr_.85fr] gap-5">
            {/* 公司介绍 */}
            <Reveal className="panel p-7 md:p-10">
              <div className="space-y-5 lead" style={{ fontSize: '15.5px' }}>
                <p style={{ fontSize: '15.5px' }}>{t(homeContent.about.intro.p1, language)}</p>
                <p style={{ fontSize: '15.5px' }}>{t(homeContent.about.intro.p2, language)}</p>
                <p style={{ fontSize: '15.5px' }}>{t(homeContent.about.intro.p3, language)}</p>
              </div>
            </Reveal>

            {/* 两条业务线 */}
            <div className="grid gap-5" aria-label={language === 'ZH' ? '两条业务线' : 'Two lines of business'}>
              <Reveal className="panel p-7 md:p-8" delay={0.05}>
                <p className="kicker" style={{ letterSpacing: '0.22em' }}>Alpha · Beta</p>
                <h3 className="mt-3" style={{ color: 'var(--txt)' }}>{language === 'ZH' ? '教育培训' : 'Training'}</h3>
                <p className="mt-2" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '培养能把 AI 用到真实任务里的人：青少年从 Alpha 入门，专业人士在 Beta 进阶为 AI Master。' : 'Developing people who put AI to work on real tasks: teenagers start with Alpha, professionals advance to AI Master through Beta.'}</p>
              </Reveal>
              <Reveal className="panel p-7 md:p-8" delay={0.1}>
                <p className="kicker" style={{ letterSpacing: '0.22em' }}>Sigma</p>
                <h3 className="mt-3" style={{ color: 'var(--txt)' }}>{language === 'ZH' ? '咨询落地' : 'Consulting & delivery'}</h3>
                <p className="mt-2" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? 'BEE Sigma：AI Native、可管理的企业 Agent 平台，陪企业从第一个 Agent 上线走到 AI 进入日常业务。' : 'BEE Sigma: an AI-native, manageable enterprise agent platform that walks you from the first agent going live to AI in daily operations.'}</p>
              </Reveal>
            </div>
          </div>

          {/* Company Highlights */}
          <Reveal className="mt-5 grid md:grid-cols-3 gap-5" delay={0.05}>
              <div className="panel p-6 md:p-7">
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-5" style={{ background: 'rgba(255,176,40,0.1)', color: 'var(--honey)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div>
                <h4 style={{ color: 'var(--txt)' }}>{t(homeContent.about.highlights.globalTeam.title, language)}</h4>
                <p className="mt-2" style={{ color: 'var(--txt-2)' }}>{t(homeContent.about.highlights.globalTeam.desc, language)}</p>
              </div>
              <div className="panel p-6 md:p-7">
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-5" style={{ background: 'rgba(255,176,40,0.1)', color: 'var(--honey)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg></div>
                <h4 style={{ color: 'var(--txt)' }}>{t(homeContent.about.highlights.deepExperience.title, language)}</h4>
                <p className="mt-2" style={{ color: 'var(--txt-2)' }}>{t(homeContent.about.highlights.deepExperience.desc, language)}</p>
              </div>
              <div className="panel p-6 md:p-7">
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center mb-5" style={{ background: 'rgba(255,176,40,0.1)', color: 'var(--honey)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M4 21h16M16 9h3a1 1 0 0 1 1 1v11M9 7h2M9 11h2M9 15h2" /></svg></div>
                <h4 style={{ color: 'var(--txt)' }}>{t(homeContent.about.highlights.enterprise.title, language)}</h4>
                <p className="mt-2" style={{ color: 'var(--txt-2)' }}>{t(homeContent.about.highlights.enterprise.desc, language)}</p>
              </div>
          </Reveal>

          <Reveal delay={0.05}>
          {/* Founder Section */}
          <div className="panel p-7 md:p-10 mt-5">
            <p className="kicker">{t(homeContent.about.founderSection, language)}</p>
            <div className="mt-8">
              <div className="space-y-6" style={{ lineHeight: '2' }}>
                {/* Founder Photo & Bio - Responsive layout */}
                <div className="mb-8">
                  {/* Mobile: Left-right layout with avatar on left */}
                  <div className="md:hidden flex gap-4 items-start mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 rounded-[18px] overflow-hidden border">
                        <img 
                          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png" 
                          alt="周品 - BEEBEE AI 创始人 & CEO" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center mt-2 w-32">
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
                  <div className="hidden md:flex gap-12 items-start">
                    <div className="flex-shrink-0" style={{ width: '280px' }}>
                      <div className="rounded-[18px] overflow-hidden border mb-6">
                        <img 
                          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png" 
                          alt="周品 - BEEBEE AI 创始人 & CEO" 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{t(homeContent.about.ceo.name, language)}</h4>
                        <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2vw, 14px)' }}>{t(homeContent.about.ceo.title, language)}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 mb-8" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                        {t(homeContent.about.ceo.bio, language)}
                      </p>
                      
                      {/* Career History - Desktop version inside right column */}
                      <div>
                        <h4 className="mb-4 text-gold-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.careerTitle, language)}</h4>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                            <div>
                              <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.beebee.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.beebee.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                            <div>
                              <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.quwan.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.quwan.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                            <div>
                              <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.cheetah.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.cheetah.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                            <div>
                              <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.baidu.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.baidu.desc, language)}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                            <div>
                              <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.early.title, language)}</p>
                              <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.early.desc, language)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career History - Mobile version */}
                <div className="md:hidden clear-both">
                    <h4 className="mb-4 text-gold-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.careerTitle, language)}</h4>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                        <div>
                          <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.beebee.title, language)}</p>
                          <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.beebee.desc, language)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                        <div>
                          <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.quwan.title, language)}</p>
                          <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.quwan.desc, language)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                        <div>
                          <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.cheetah.title, language)}</p>
                          <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.cheetah.desc, language)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                        <div>
                          <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.baidu.title, language)}</p>
                          <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.baidu.desc, language)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                        <div>
                          <p className="text-white mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{t(homeContent.about.ceo.career.early.title, language)}</p>
                          <p className="text-gray-400" style={{ fontSize: 'clamp(14px, 2.2vw, 14px)' }}>{t(homeContent.about.ceo.career.early.desc, language)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Philosophy */}
                <div>
                  <h4 className="mb-4 text-gold-500" style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}>{t(homeContent.about.ceo.philosophyTitle, language)}</h4>
                  <p className="text-gray-300 mb-6" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                    {t(homeContent.about.ceo.philosophy, language)}
                  </p>
                  <div className="panel-flat px-6 py-5" style={{ borderLeft: '3px solid var(--honey)' }}>
                    <p className="text-gray-300 italic mb-2" style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', lineHeight: 1.8 }}>
                      "{t(homeContent.about.ceo.quote.text, language)}"
                    </p>
                    <p className="text-gray-500 text-right" style={{ fontSize: 'clamp(12px, 2vw, 13px)' }}>{t(homeContent.about.ceo.quote.author, language)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />

      {/* Contact Section */}
      <section id="contact" className="pt-[110px] md:pt-[140px] pb-[110px] md:pb-[140px]">
        <div className="wrap">
          <SectionHeader eyebrow={language === 'ZH' ? '联系我们 · Contact' : 'Contact'} title={t(homeContent.contact.title, language)} subtitle={t(homeContent.contact.subtitle, language)} />
          <div className="mt-12 grid lg:grid-cols-[.9fr_1.1fr] gap-5">
            <Reveal className="panel p-7 md:p-8 flex flex-col">
              <div className="rounded-[18px] overflow-hidden mb-7" style={{ border: '1px solid var(--bd)' }}>
                <img src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/b_hive.png" alt="BEEBEE AI Auckland office" loading="lazy" className="w-full h-52 md:h-60 object-cover" />
              </div>
              <p className="kicker" style={{ letterSpacing: '0.22em' }}>{t(homeContent.contact.info.email, language)}</p>
              <a href={`mailto:${homeContent.contact.info.emailBusiness}`} className="mt-2 font-bold transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt)', fontSize: '17px' }}>{homeContent.contact.info.emailBusiness}</a>
              <p className="kicker mt-7" style={{ letterSpacing: '0.22em' }}>{t(homeContent.contact.info.address, language)}</p>
              <div className="mt-2 space-y-2">
                {t(homeContent.contact.info.addressValue, language).split('\n').map((addr, idx) => (
                  <p key={idx} className="leading-6" style={{ color: 'var(--txt-2)', fontSize: '14px' }}>{addr}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="panel p-7 md:p-8" delay={0.08}>
              <h3 className="mb-6" style={{ color: 'var(--txt)' }}>{t(homeContent.contact.formTitle, language)}</h3>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--bd)', padding: '72px 0 40px', color: 'var(--txt-3)', fontSize: '14px' }}>
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-1">
              <Link to="/" aria-label="BEEBEE AI" className="inline-flex items-center gap-2.5 font-latin-display" style={{ fontSize: '19px' }}>
                <img src="/brand/beebee-mark.png" alt="" width={29} height={29} className="w-[29px] h-[29px] rounded-[8px]" />
                <span><b className="font-bold" style={{ color: 'var(--honey)' }}>BEEBEE</b><span className="font-medium ml-1" style={{ color: 'var(--txt-2)' }}>AI</span></span>
              </Link>
              <p className="mt-5 max-w-xs leading-7" style={{ color: 'var(--txt-2)', fontSize: '14px' }}>{t(homeContent.footer.tagline, language)} · {language === 'ZH' ? '从第一个 Agent 上线，到 AI 真正进入企业日常业务。' : 'From the first agent going live to AI in daily business.'}</p>
              <a href={`mailto:${homeContent.contact.info.emailBusiness}`} className="mt-5 inline-block transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{homeContent.contact.info.emailBusiness}</a>
              <div className="mt-4 space-y-1.5 text-[13px] leading-6">
                {t(homeContent.footer.contactInfo.address, language).split('\n').map((addr, idx) => <p key={idx} className="text-[13px]">{addr}</p>)}
              </div>
            </div>

            {/* 教育培训 */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] mb-5" style={{ color: 'var(--txt-3)' }}>{language === 'ZH' ? '教育培训' : 'Training'}</p>
              <ul className="space-y-3 cjk-keep">
                <li><a href="https://bee-alpha.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? 'Alpha 实训营' : 'Alpha program'} ↗</a></li>
                <li><a href="https://bee-beta.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? 'Beta 实训营' : 'Beta program'} ↗</a></li>
                <li><Link to="/youth-ai-training" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '青少年\u00A0AI\u00A0实训营课程推荐' : 'AI training for youth'}</Link></li>
                <li><Link to="/university-ai-project-training" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '大学生\u00A0AI\u00A0项目实训选择' : 'AI project training for adults'}</Link></li>
                <li><Link to="/how-to-improve-ai-skills" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '如何提升\u00A0AI\u00A0能力' : 'How to improve AI skills'}</Link></li>
                <li><Link to="/student-projects" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '学员作品' : 'Student projects'}</Link></li>
                <li><Link to="/certificate" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '证书查询' : 'Certificate lookup'}</Link></li>
              </ul>
            </div>

            {/* 咨询落地 */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] mb-5" style={{ color: 'var(--txt-3)' }}>{language === 'ZH' ? '咨询落地' : 'Consulting & Delivery'}</p>
              <ul className="space-y-3 cjk-keep">
                <li><a href="https://beesigma.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? 'BEE\u00A0Sigma 企业\u00A0Agent\u00A0平台' : 'BEE Sigma agent platform'} ↗</a></li>
                <li><Link to="/enterprise-ai-consulting" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '企业\u00A0AI\u00A0陪跑服务' : 'Enterprise AI services'}</Link></li>
                <li><a href="https://aiv.beesigma.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '免费 AIV 诊断' : 'Free AIV diagnosis'} ↗</a></li>
                <li><a href="https://aim.beesigma.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '免费 AIM 评估' : 'Free AIM assessment'} ↗</a></li>
                <li><a href="https://beesigma.com/cases" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '脱敏案例' : 'Case studies'} ↗</a></li>
              </ul>
            </div>

            {/* 公司 */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] mb-5" style={{ color: 'var(--txt-3)' }}>{language === 'ZH' ? '公司' : 'Company'}</p>
              <ul className="space-y-3 cjk-keep">
                <li><a href="#platform" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{t(homeContent.nav.platform, language)}</a></li>
                <li><a href="#sigma-cases" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '工作流案例' : 'Workflow cases'}</a></li>
                <li><a href="#about" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{t(homeContent.nav.about, language)}</a></li>
                <li><a href="#faq" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '常见问题' : 'FAQ'}</a></li>
                <li><a href="#contact" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{t(homeContent.nav.contact, language)}</a></li>
                <li><Link to="/differentiation" className="transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{language === 'ZH' ? '项目制学习方法' : 'Project-based learning method'}</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12.5px]" style={{ borderTop: '1px solid var(--bd)' }}>
            <p className="text-[12.5px]">© {new Date().getFullYear()} BEEBEE AI Ltd. All rights reserved.</p>
            <p className="text-[12.5px]">{language === 'ZH' ? '新西兰注册运营 · 奥克兰 / 成都' : 'Registered in New Zealand · Auckland / Chengdu'}</p>
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
            <Route path="/student-projects" element={<StudentProjectsPage />} />
            <Route path="/certificate" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><CertificatePage /></Suspense>} />
            <Route path="/youth-ai-training" element={<IntentLandingPage pageKey="youth" />} />
            <Route path="/university-ai-project-training" element={<IntentLandingPage pageKey="university" />} />
            <Route path="/enterprise-ai-consulting" element={<IntentLandingPage pageKey="enterprise" />} />
            <Route path="/how-to-improve-ai-skills" element={<IntentLandingPage pageKey="skills" />} />
          </Routes>
          {/* Toast notifications */}
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
