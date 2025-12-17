import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { differentiationContent, t } from '../locales/differentiationContent';

export function DifferentiationDetail() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-deep)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-16" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <Link 
            to="/#system" 
            className="inline-flex items-center gap-2 mb-8 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t(differentiationContent.backButton, language)}
          </Link>
          
          <h1 className="mb-6" style={{ 
            fontSize: '48px', 
            fontWeight: 600, 
            lineHeight: 1.25,
            letterSpacing: '0.5px',
            color: 'var(--text-primary)'
          }}>
            {t(differentiationContent.hero.title, language)}
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            marginBottom: '48px'
          }}>
            {t(differentiationContent.hero.subtitle, language)}
          </p>
        </div>
      </section>

      {/* Detail Content - 学习体系 */}
      <section id="learning-system" className="px-4 py-20" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t(differentiationContent.learningSystem.title, language)}</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-8 shadow-[0_0_20px_#ff6b00]" style={{ backgroundColor: 'var(--orange-primary)' }}></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">{t(differentiationContent.learningSystem.subtitle, language)}</p>
          </div>

          {/* 道法术器四大板块 */}
          <div className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 道中之道 */}
              <div className="group relative bg-[#0a0c10] border border-white/5 hover:border-orange-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="absolute -right-6 -bottom-10 text-[140px] font-black text-white/[0.02] group-hover:text-orange-500/[0.08] transition-colors duration-500 leading-none select-none pointer-events-none font-serif">道</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 border border-white/5">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white font-serif">{t(differentiationContent.learningSystem.modules.dao.title, language)}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-gray-300 tracking-wider uppercase border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-500 transition-colors">{t(differentiationContent.learningSystem.modules.dao.badge, language)}</span>
                  </div>
                  <div className="h-px w-12 bg-gray-800 my-4 group-hover:w-full group-hover:bg-orange-500/50 transition-all duration-500"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(differentiationContent.learningSystem.modules.dao.description, language)}</p>
                </div>
              </div>

              {/* 道中之术 */}
              <div className="group relative bg-[#0a0c10] border border-white/5 hover:border-orange-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="absolute -right-6 -bottom-10 text-[140px] font-black text-white/[0.02] group-hover:text-orange-500/[0.08] transition-colors duration-500 leading-none select-none pointer-events-none font-serif">法</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-6 h-6" aria-hidden="true">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white font-serif">{t(differentiationContent.learningSystem.modules.fa.title, language)}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-gray-300 tracking-wider uppercase border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-500 transition-colors">{t(differentiationContent.learningSystem.modules.fa.badge, language)}</span>
                  </div>
                  <div className="h-px w-12 bg-gray-800 my-4 group-hover:w-full group-hover:bg-orange-500/50 transition-all duration-500"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(differentiationContent.learningSystem.modules.fa.description, language)}</p>
                </div>
              </div>

              {/* 术中之道 */}
              <div className="group relative bg-[#0a0c10] border border-white/5 hover:border-orange-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="absolute -right-6 -bottom-10 text-[140px] font-black text-white/[0.02] group-hover:text-orange-500/[0.08] transition-colors duration-500 leading-none select-none pointer-events-none font-serif">术</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white font-serif">{t(differentiationContent.learningSystem.modules.shu.title, language)}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-gray-300 tracking-wider uppercase border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-500 transition-colors">{t(differentiationContent.learningSystem.modules.shu.badge, language)}</span>
                  </div>
                  <div className="h-px w-12 bg-gray-800 my-4 group-hover:w-full group-hover:bg-orange-500/50 transition-all duration-500"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(differentiationContent.learningSystem.modules.shu.description, language)}</p>
                </div>
              </div>

              {/* 术中之术 */}
              <div className="group relative bg-[#0a0c10] border border-white/5 hover:border-orange-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="absolute -right-6 -bottom-10 text-[140px] font-black text-white/[0.02] group-hover:text-orange-500/[0.08] transition-colors duration-500 leading-none select-none pointer-events-none font-serif">器</div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6" aria-hidden="true">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white font-serif">{t(differentiationContent.learningSystem.modules.qi.title, language)}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-gray-300 tracking-wider uppercase border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-500 transition-colors">{t(differentiationContent.learningSystem.modules.qi.badge, language)}</span>
                  </div>
                  <div className="h-px w-12 bg-gray-800 my-4 group-hover:w-full group-hover:bg-orange-500/50 transition-all duration-500"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(differentiationContent.learningSystem.modules.qi.description, language)}</p>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            <div className="flex items-center justify-center py-10 opacity-60">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" style={{ '--tw-gradient-to': 'var(--orange-primary)' } as React.CSSProperties}></div>
              <span className="mx-4 text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">{t(differentiationContent.learningSystem.divider, language)}</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" style={{ '--tw-gradient-to': 'var(--orange-primary)' } as React.CSSProperties}></div>
            </div>

            {/* 差异化说明卡片1 */}
            <div className="bg-[#111318]/80 border border-orange-500/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-colors"></div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center gap-2">
                  {t(differentiationContent.learningSystem.card1.title, language)}
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-orange-500 text-sm font-medium tracking-wide uppercase opacity-90">{t(differentiationContent.learningSystem.card1.subtitle, language)}</span>
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                  {t(differentiationContent.learningSystem.card1.content, language)}
                </p>
              </div>
            </div>
          </div>

          {/* 学习力公式 */}
          <div id="learning-formula" className="mb-32">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0c10]">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
              <div className="relative z-10 px-6 py-16 md:py-20 flex flex-col items-center justify-center text-center">
                <div className="inline-block mb-8 text-orange-500 font-mono text-sm tracking-[0.3em] opacity-80 uppercase border-b border-orange-500/30 pb-2">{t(differentiationContent.learningFormula.sectionTitle, language)}</div>
                <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-16">
                  {/* Q² 卡片 */}
                  <div className="bg-[#111318] border border-orange-500/20 rounded-xl p-4 flex flex-col items-center w-64 transform hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,0,0.05)]">
                    <span className="text-4xl font-bold text-orange-500 mb-1 font-mono">{t(differentiationContent.learningFormula.q2.title, language)}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">{t(differentiationContent.learningFormula.q2.label, language)}</span>
                    <p className="text-sm text-gray-300">{t(differentiationContent.learningFormula.q2.name, language)}</p>
                    <p className="text-[10px] text-gray-500 mt-2">{t(differentiationContent.learningFormula.q2.note, language)}</p>
                  </div>

                  {/* 公式 */}
                  <div className="flex items-center gap-4 md:gap-8 font-mono text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    <span className="text-gray-500 text-4xl">L</span>
                    <span className="text-gray-700 text-3xl">=</span>
                    <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">Q²</span>
                    <span className="text-gray-700 text-3xl">×</span>
                    <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">P</span>
                  </div>

                  {/* P 卡片 */}
                  <div className="bg-[#111318] border border-blue-500/20 rounded-xl p-4 flex flex-col items-center w-64 transform hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.05)]">
                    <span className="text-4xl font-bold text-blue-400 mb-1 font-mono">{t(differentiationContent.learningFormula.p.title, language)}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">{t(differentiationContent.learningFormula.p.label, language)}</span>
                    <p className="text-sm text-gray-300">{t(differentiationContent.learningFormula.p.name, language)}</p>
                    <p className="text-[10px] text-gray-500 mt-2">{t(differentiationContent.learningFormula.p.note, language)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            <div className="flex items-center justify-center py-10 opacity-60">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="mx-4 text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">{t(differentiationContent.learningFormula.divider, language)}</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>

            {/* 差异化说明卡片2 */}
            <div className="bg-[#111318]/80 border border-orange-500/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-colors"></div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center gap-2">
                  {t(differentiationContent.learningFormula.card2.title, language)}
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-orange-500 text-sm font-medium tracking-wide uppercase opacity-90">{t(differentiationContent.learningFormula.card2.subtitle, language)}</span>
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                  {t(differentiationContent.learningFormula.card2.content, language)}
                </p>
              </div>
            </div>
          </div>

          {/* 三维能力模型 */}
          <div id="three-dimensions" className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-bold text-white mb-6">{t(differentiationContent.threeDimensions.title, language)}</h3>
                <div className="w-12 h-1 bg-orange-500 rounded-full mb-8"></div>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {t(differentiationContent.threeDimensions.description, language)}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <span>{t(differentiationContent.threeDimensions.list.creativity, language)}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
                    <span>{t(differentiationContent.threeDimensions.list.competitiveness, language)}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-400"></div>
                    <span>{t(differentiationContent.threeDimensions.list.leadership, language)}</span>
                  </li>
                </ul>
              </div>

              {/* 三个能力卡片 */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* AI 创造力 10% */}
                <div className="relative rounded-2xl p-6 border bg-[#111318] border-white/5 opacity-80 hover:opacity-100 flex flex-col items-center text-center group transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">{t(differentiationContent.threeDimensions.cards.creativity.percentage, language)}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{t(differentiationContent.threeDimensions.cards.creativity.title, language)}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{t(differentiationContent.threeDimensions.cards.creativity.description, language)}</p>
                </div>

                {/* AI 竞争力 60% - 中间高亮 */}
                <div className="relative rounded-2xl p-6 border bg-[#1a1c23] border-orange-500/50 ring-1 ring-orange-500/20 shadow-[0_0_30px_-10px_rgba(255,107,0,0.3)] scale-105 z-10 flex flex-col items-center text-center group transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-4">{t(differentiationContent.threeDimensions.cards.competitiveness.percentage, language)}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{t(differentiationContent.threeDimensions.cards.competitiveness.title, language)}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{t(differentiationContent.threeDimensions.cards.competitiveness.description, language)}</p>
                </div>

                {/* AI 领导力 30% */}
                <div className="relative rounded-2xl p-6 border bg-[#111318] border-white/5 opacity-80 hover:opacity-100 flex flex-col items-center text-center group transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">{t(differentiationContent.threeDimensions.cards.leadership.percentage, language)}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{t(differentiationContent.threeDimensions.cards.leadership.title, language)}</h4>
                  <p className="text-xs text-gray-400 leading-normal">{t(differentiationContent.threeDimensions.cards.leadership.description, language)}</p>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            <div className="flex items-center justify-center py-10 opacity-60">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="mx-4 text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">{t(differentiationContent.threeDimensions.divider, language)}</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>

            {/* 差异化说明卡片3 */}
            <div className="bg-[#111318]/80 border border-orange-500/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-colors"></div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center gap-2">
                  {t(differentiationContent.threeDimensions.card3.title, language)}
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-orange-500 text-sm font-medium tracking-wide uppercase opacity-90">{t(differentiationContent.threeDimensions.card3.subtitle, language)}</span>
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                  {t(differentiationContent.threeDimensions.card3.content, language)}
                </p>
              </div>
            </div>
          </div>

          {/* 蜂道四式 */}
          <div id="bee-method">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-2">{t(differentiationContent.beeMethod.title, language)}</h3>
              <div className="flex items-center justify-center gap-2 text-orange-500 text-sm font-mono tracking-widest uppercase opacity-80">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                {t(differentiationContent.beeMethod.subtitle, language)}
              </div>
            </div>

            {/* 四个六边形图标 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent -z-10"></div>

              {/* 01 采集 */}
              <div className="relative group w-full max-w-[220px]">
                <div className="aspect-square relative flex items-center justify-center transform transition-transform duration-300 hover:scale-110 z-10">
                  <svg className="absolute inset-0 w-full h-full text-[#111318] group-hover:text-[#16181e] transition-colors duration-300 drop-shadow-2xl" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="group-hover:stroke-orange-500/50 transition-colors duration-300"></path>
                  </svg>
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="text-orange-500/80 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database" aria-hidden="true">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{t(differentiationContent.beeMethod.steps.collect.title, language)}</div>
                    <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-3">{t(differentiationContent.beeMethod.steps.collect.label, language)}</div>
                    <p className="text-xs text-gray-400 max-w-[120px]">{t(differentiationContent.beeMethod.steps.collect.description, language)}</p>
                  </div>
                  <div className="absolute top-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono py-1 px-2 rounded-full shadow-lg">01</div>
                </div>
              </div>

              {/* 02 精炼 */}
              <div className="relative group w-full max-w-[220px]">
                <div className="aspect-square relative flex items-center justify-center transform transition-transform duration-300 hover:scale-110 z-10">
                  <svg className="absolute inset-0 w-full h-full text-[#111318] group-hover:text-[#16181e] transition-colors duration-300 drop-shadow-2xl" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="group-hover:stroke-orange-500/50 transition-colors duration-300"></path>
                  </svg>
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="text-orange-500/80 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{t(differentiationContent.beeMethod.steps.refine.title, language)}</div>
                    <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-3">{t(differentiationContent.beeMethod.steps.refine.label, language)}</div>
                    <p className="text-xs text-gray-400 max-w-[120px]">{t(differentiationContent.beeMethod.steps.refine.description, language)}</p>
                  </div>
                  <div className="absolute top-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono py-1 px-2 rounded-full shadow-lg">02</div>
                </div>
              </div>

              {/* 03 酿造 */}
              <div className="relative group w-full max-w-[220px]">
                <div className="aspect-square relative flex items-center justify-center transform transition-transform duration-300 hover:scale-110 z-10">
                  <svg className="absolute inset-0 w-full h-full text-[#111318] group-hover:text-[#16181e] transition-colors duration-300 drop-shadow-2xl" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="group-hover:stroke-orange-500/50 transition-colors duration-300"></path>
                  </svg>
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="text-orange-500/80 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical" aria-hidden="true">
                        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                        <path d="M6.453 15h11.094"></path>
                        <path d="M8.5 2h7"></path>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{t(differentiationContent.beeMethod.steps.brew.title, language)}</div>
                    <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-3">{t(differentiationContent.beeMethod.steps.brew.label, language)}</div>
                    <p className="text-xs text-gray-400 max-w-[120px]">{t(differentiationContent.beeMethod.steps.brew.description, language)}</p>
                  </div>
                  <div className="absolute top-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono py-1 px-2 rounded-full shadow-lg">03</div>
                </div>
              </div>

              {/* 04 协作 */}
              <div className="relative group w-full max-w-[220px]">
                <div className="aspect-square relative flex items-center justify-center transform transition-transform duration-300 hover:scale-110 z-10">
                  <svg className="absolute inset-0 w-full h-full text-[#111318] group-hover:text-[#16181e] transition-colors duration-300 drop-shadow-2xl" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="group-hover:stroke-orange-500/50 transition-colors duration-300"></path>
                  </svg>
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="text-orange-500/80 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 lucide-share-2" aria-hidden="true">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{t(differentiationContent.beeMethod.steps.share.title, language)}</div>
                    <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-3">{t(differentiationContent.beeMethod.steps.share.label, language)}</div>
                    <p className="text-xs text-gray-400 max-w-[120px]">{t(differentiationContent.beeMethod.steps.share.description, language)}</p>
                  </div>
                  <div className="absolute top-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono py-1 px-2 rounded-full shadow-lg">04</div>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            <div className="flex items-center justify-center py-10 opacity-60">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <span className="mx-4 text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">{t(differentiationContent.beeMethod.divider, language)}</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>

            {/* 差异化说明卡片4 */}
            <div className="bg-[#111318]/80 border border-orange-500/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-colors"></div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex flex-col md:flex-row md:items-center gap-2">
                  {t(differentiationContent.beeMethod.card4.title, language)}
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-orange-500 text-sm font-medium tracking-wide uppercase opacity-90">{t(differentiationContent.beeMethod.card4.subtitle, language)}</span>
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                  {t(differentiationContent.beeMethod.card4.content, language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 border-t border-white/10" style={{ backgroundColor: 'var(--bg-deep)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">{t(differentiationContent.cta.title, language)}</h2>
          <p className="mb-8" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            {t(differentiationContent.cta.subtitle, language)}
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/#contact"
              className="px-8 py-4 rounded-lg transition-colors"
              style={{
                backgroundColor: 'var(--orange-primary)',
                color: '#fff',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--orange-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--orange-primary)'}
            >
              {t(differentiationContent.cta.button1, language)}
            </Link>
            <Link 
              to="/"
              className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              style={{
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              {t(differentiationContent.cta.button2, language)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}