import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { growthPathContent as c } from '../locales/growthPathContent';
import { t } from '../locales/homeContent';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

/**
 * 首页「成长路径」板块（保留 id="platform" 以兼容旧锚点）。
 * 三张 24px 圆角面板：左列 编号 / 阶段码 / 人群，右列 定位 / 内容 / 收获 / 入口。
 */
export function GrowthPathSection() {
  const { language } = useLanguage();
  const isZh = language === 'ZH';

  return (
    <section id="platform" className="pt-[110px] md:pt-[140px] pb-8">
      <div className="wrap">
        <SectionHeader eyebrow={isZh ? '成长路径 · Alpha → Beta → Sigma' : 'Growth Path · Alpha → Beta → Sigma'} title={t(c.title, language)} subtitle={t(c.subtitle, language)} />

        <div className="mt-14 md:mt-16 grid gap-5">
          {c.stages.map((s, index) => (
            <Reveal key={s.code} as="article" className="panel relative p-7 md:p-10 lg:grid lg:grid-cols-[240px_1fr] lg:gap-14" delay={0.04 * index}>
              <div id={s.code.toLowerCase()} className="absolute -top-24" aria-hidden="true" />

              {/* 左：编号 + 阶段码 */}
              <div className="mb-8 lg:mb-0">
                <p className="font-mono text-[12.5px] tracking-[0.24em] nowrap" style={{ color: s.color }}>{String(index + 1).padStart(2, '0')} · {t(s.stage, language)}</p>
                <h3 className="font-latin-display font-extrabold mt-4 leading-none" style={{ fontSize: 'clamp(44px, 5.6vw, 68px)', color: 'var(--txt)' }}>{s.code}</h3>
                <p className="mt-4 text-[13.5px] leading-6" style={{ color: 'var(--txt-3)' }}>{t(s.audience, language)}</p>
              </div>

              {/* 右：定位 / 内容 / 收获 / 入口 */}
              <div>
                <p className="max-w-3xl cjk-keep" style={{ color: 'var(--txt)', fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.75, fontWeight: 500 }}>{t(s.positioning, language)}</p>

                <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] mb-4" style={{ color: 'var(--txt-3)' }}>{t(s.contentTitle, language)}</p>
                    <ul className="space-y-3">
                      {s.content.map((item, i) => (
                        <li key={i} className="flex gap-3.5 text-[14.5px] leading-7" style={{ color: 'var(--txt-2)' }}>
                          <span className="font-mono text-[11px] mt-1.5 shrink-0" style={{ color: s.color }}>{String(i + 1).padStart(2, '0')}</span>
                          <span>{t(item, language)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] mb-4" style={{ color: 'var(--txt-3)' }}>{t(s.outcomeTitle, language)}</p>
                    <ul className="space-y-3">
                      {s.outcomes.map((item, i) => (
                        <li key={i} className="flex gap-3.5 text-[14.5px] leading-7" style={{ color: 'var(--txt)' }}>
                          <Check size={15} className="mt-1.5 shrink-0" style={{ color: s.color }} />
                          <span>{t(item, language)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ borderTop: '1px solid var(--bd)' }}>
                  <div className="text-[13px] leading-6 space-y-1 max-w-2xl" style={{ color: 'var(--txt-3)' }}>
                    <p className="text-[13px]">{t(s.tracks, language)}</p>
                    <p className="text-[13px]">{t(s.format, language)}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 shrink-0">
                    <a href={isZh ? s.hrefExternal : s.hrefExternalEn} target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${s.code === 'Sigma' ? 'btn-solid' : 'btn-ghost'}`}>
                      {t(s.ctaExternal, language)}<ArrowUpRight size={15} />
                    </a>
                    <Link to={s.hrefInternal} className="text-[13.5px] transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{t(s.ctaInternal, language)} →</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
