import { Reveal } from './Reveal';
import { Seg } from './Text';

/**
 * 全站统一的板块标题：kicker（等宽金色小字）+ 900 字重大标题 + lead 副题。与 beesigma.com 的 .wf-head 同规格。
 */
export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: { eyebrow?: string; title: string; subtitle?: string; align?: 'left' | 'center' }) {
  const center = align === 'center';
  return (
    <Reveal className={center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow && <p className="kicker" style={{ wordSpacing: '0.1em' }}>{eyebrow}</p>}
      <h2 className="mt-3.5" style={{ color: 'var(--txt)' }}><Seg text={title} /></h2>
      {subtitle && <p className="lead mt-5">{subtitle}</p>}
    </Reveal>
  );
}
