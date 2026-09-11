import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sigmaCasesContent as c } from '../locales/sigmaCasesContent';
import { t } from '../locales/homeContent';
import { SectionHeader } from './SectionHeader';
import { Reveal, Stagger, StaggerItem } from './Reveal';

/**
 * 首页「咨询落地 · 三条工作流」：三张 24px 面板卡，与 beesigma.com 的 .case 卡同规格；只做摘要与导流。
 */
export function SigmaCasesSection() {
  const { language } = useLanguage();
  const isZh = language === 'ZH';

  return (
    <section id="sigma-cases" className="relative pt-[110px] md:pt-[140px] pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[50vh] glow-gold pointer-events-none" aria-hidden="true" />
      <div className="wrap relative">
        <SectionHeader eyebrow={t(c.eyebrow, language)} title={t(c.title, language)} subtitle={t(c.subtitle, language)} />

        <Stagger as="ol" className="mt-14 md:mt-16 grid lg:grid-cols-3 gap-5" gap={0.12}>
          {c.flows.map((f) => (
            <StaggerItem as="li" key={f.code} className="panel p-7 md:p-8 flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <span className="kicker" style={{ fontSize: '11.5px', letterSpacing: '0.24em' }}>{f.code}</span>
                <span className="font-latin-display font-extrabold text-gold-gradient leading-none nowrap" style={{ fontSize: 'clamp(30px, 2.6vw, 38px)' }}>{t(f.metric, language)}</span>
              </div>
              <h3 className="mt-4 nowrap" style={{ color: 'var(--txt)', fontSize: '19px' }}>{t(f.name, language)}</h3>
              <p className="text-[12px] mt-1" style={{ color: 'var(--txt-3)' }}>{t(f.metricLabel, language)}</p>

              <ol className="mt-5 flex flex-wrap items-center gap-y-2">
                {f.agents.map((a, i) => (
                  <li key={i} className="flex items-center">
                    <span className="tag tag-muted" style={{ letterSpacing: '0.06em', fontWeight: 500 }}>{t(a, language)}</span>
                    {i < f.agents.length - 1 && <span className="mx-1.5 text-[11px]" style={{ color: 'var(--txt-3)' }}>→</span>}
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-6 flex-1 flex flex-col" style={{ borderTop: '1px solid var(--bd)' }}>
                <p className="font-mono text-[10.5px] tracking-[0.16em]" style={{ color: 'var(--txt-3)' }}>{t(f.caseTag, language)}</p>
                <p className="mt-2.5 font-bold leading-7" style={{ color: 'var(--txt)', fontSize: '16px' }}>{t(f.caseTitle, language)}</p>
                <p className="mt-4 text-[13.5px] leading-6" style={{ color: 'var(--txt-3)' }}><span className="mr-2">✕</span>{t(f.before, language)}</p>
                <p className="mt-2 text-[13.5px] leading-6" style={{ color: 'var(--txt-2)' }}><span className="mr-2" style={{ color: 'var(--honey)' }}>✓</span>{t(f.after, language)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" delay={0.1}>
          <p className="text-[13.5px] leading-6 max-w-2xl" style={{ color: 'var(--txt-3)' }}>{t(c.guardrail, language)}</p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a href={isZh ? c.links.cases : c.links.casesEn} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">{t(c.ctaCases, language)}<ArrowUpRight size={15} /></a>
            <a href={isZh ? c.links.demo : c.links.demoEn} target="_blank" rel="noopener noreferrer" className="text-[13.5px] inline-flex items-center gap-1.5 transition-colors hover:text-[var(--honey-2)]" style={{ color: 'var(--txt-2)' }}>{t(c.ctaDemo, language)}<ArrowUpRight size={14} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
