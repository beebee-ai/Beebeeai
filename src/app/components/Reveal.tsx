import { motion, type Variants } from 'motion/react';
import type { ReactNode, CSSProperties } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

/**
 * 滚动进入视口时淡入上浮。用 `stagger` 包裹一组子元素可做错落出场。
 */
export function Reveal({ children, delay = 0, className, style, as = 'div' }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties; as?: 'div' | 'section' | 'li' | 'article' | 'p' | 'span' }) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, className, gap = 0.1, as = 'div' }: { children: ReactNode; className?: string; gap?: number; as?: 'div' | 'ul' | 'ol' }) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, style, as = 'div' }: { children: ReactNode; className?: string; style?: CSSProperties; as?: 'div' | 'li' | 'article' }) {
  const Tag = motion[as] as typeof motion.div;
  return <Tag className={className} style={style} variants={revealVariants}>{children}</Tag>;
}
