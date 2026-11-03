import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Verified against the BEEBEE AI Limited profile at B:HIVE, Auckland.
export const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJA60dlnk5DW0RfEIKEduyXAA';

export function GoogleReviewLink({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const { language } = useLanguage();
  const label = language === 'ZH' ? '欢迎点评' : 'Leave a Google review';
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={language === 'ZH' ? '欢迎点评 BEEBEE AI（在新标签页打开 Google 评价）' : 'Review BEEBEE AI on Google (opens in a new tab)'}
      className={`${compact ? 'inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--honey-2)]' : 'btn btn-ghost btn-sm'} ${className}`}
      style={compact ? { color: 'var(--honey)' } : undefined}
    >
      <MessageSquare size={compact ? 15 : 17} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}
