import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';
import { Seg } from './Text';

const item = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

/** 首屏：与 beesigma.com 同款的奶油色圆角大卡，内含三张业务线卡片。 */
export function Hero() {
  const { language } = useLanguage();
  const isZh = language === 'ZH';
  // 子品牌色在奶油底上需要加深以保证可读
  const tileAccent: Record<string, string> = { Alpha: '#d96200', Beta: '#0e8fa3', Sigma: '#9a6900' };

  return (
    <section id="home" className="px-3.5 pt-[82px] md:pt-[86px] pb-3.5">
      <motion.div
        className="hero-card mx-auto flex flex-col items-center justify-center text-center px-6 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14"
        style={{ minHeight: 'calc(100svh - 100px)' }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
      >
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center">
          <motion.span variants={item} className="hero-eyebrow"><i />{t(homeContent.hero.eyebrow, language)}</motion.span>

          <motion.h1 variants={item} className="mt-8 md:mt-9 w-full" style={{ color: 'var(--ink)' }}>
            <Seg text={t(homeContent.hero.titleLine1, language)} />
            <br />
            <span className="text-amber-gradient"><Seg text={t(homeContent.hero.titleLine2, language)} /></span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-[680px] font-medium cjk-keep" style={{ color: 'var(--ink-2)', fontSize: 'clamp(15.5px, 1.7vw, 21px)', lineHeight: 1.7 }}>
            {t(homeContent.hero.subtitle, language)}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a href="#contact" className="btn btn-solid">{isZh ? '预约陪跑咨询' : 'Book a consultation'}<ArrowUpRight size={17} /></a>
            <a href="#platform" className="btn btn-ghost-light">{isZh ? '看看两条业务线' : 'See the two lines'}</a>
          </motion.div>

          <motion.div variants={item} className="mt-14 md:mt-16 w-full grid md:grid-cols-3 gap-3.5">
            {homeContent.hero.paths.map((path) => {
              const accent = tileAccent[path.code] ?? 'var(--ink-2)';
              const lite = path.code === 'Sigma';
              return (
                <a
                  key={path.code}
                  href={isZh ? path.href : path.hrefEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hero-tile group ${lite ? 'lite' : ''}`}
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] nowrap" style={{ color: accent }}>{t(path.stage, language)}</span>
                  <span className="font-latin-display font-extrabold mt-3 leading-none" style={{ fontSize: 'clamp(30px, 3.4vw, 38px)', color: 'var(--ink)' }}>{path.code}</span>
                  <span className="mt-3 flex-1 leading-7" style={{ color: 'var(--ink-2)', fontSize: '14.5px' }}>{t(path.tagline, language)}</span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-bold" style={{ color: 'var(--ink)' }}>
                    {t(path.cta, language)}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: accent }} />
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
