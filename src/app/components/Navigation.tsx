import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { navContent, t } from '../locales/navContent';

const BRAND_MARK = '/brand/beebee-mark.png';

/** 与 beesigma.com 的 .logo 同规格：29px 图标 + Bricolage 字标（BEEBEE 蜂蜜金，AI 次级色）。 */
function BrandLogo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-latin-display" style={{ fontSize: '19px', letterSpacing: '0.01em' }}>
      <img src={BRAND_MARK} alt="" width={29} height={29} className="w-[29px] h-[29px] rounded-[8px]" />
      <span><b className="font-bold" style={{ color: 'var(--honey)' }}>BEEBEE</b><span className="font-medium ml-1" style={{ color: 'var(--txt-2)' }}>AI</span></span>
    </span>
  );
}

function BeeSigmaWordmark() {
  return (
    <span className="inline-flex items-baseline tracking-[-0.02em]" aria-hidden="true">
      <span className="font-bold" style={{ color: 'var(--honey)' }}>BEE</span>
      <span className="font-semibold" style={{ color: 'var(--txt-2)' }}>Sigma</span>
    </span>
  );
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { labelKey: 'platform', href: '#platform' },
    { labelKey: 'works', href: '#works' },
    { labelKey: 'about', href: '#about' },
    { labelKey: 'contact', href: '#contact' },
    { labelKey: 'certificate', href: '/certificate' },
    { labelKey: 'beeSigma', href: 'https://beesigma.com/', external: true },
  ] as const;

  const resolve = (href: string) => (href.startsWith('/') || isHomePage ? href : `/${href}`);
  const linkCls = 'text-[13.5px] whitespace-nowrap transition-colors hover:text-[var(--honey-2)]';
  const linkStyle = { color: 'var(--txt-2)' } as const;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[80] h-[68px] flex items-center border-b border-transparent transition-[background,border-color] duration-400 ${scrolled || isMenuOpen ? 'nav-glass' : ''}`}>
      <div className="wrap w-full flex items-center justify-between gap-6">
        <Link to="/" aria-label="BEEBEE AI" className="shrink-0"><BrandLogo /></Link>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => 'external' in item && item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label="BEESigma" className="text-[13.5px] hover:opacity-80 transition-opacity"><BeeSigmaWordmark /></a>
          ) : (
            <Link key={item.href} to={resolve(item.href)} className={linkCls} style={linkStyle}>{t(navContent[item.labelKey], language)}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <button type="button" onClick={toggleLanguage} className="lang-chip" aria-label="Switch language">{language === 'ZH' ? 'EN' : '中文'}</button>
          <Link to={resolve('#contact')} className="btn btn-solid btn-xs">{language === 'ZH' ? '预约陪跑咨询' : 'Book a call'}</Link>
        </div>

        {/* 移动端 */}
        <div className="md:hidden flex items-center gap-2">
          <button type="button" onClick={toggleLanguage} className="lang-chip" aria-label="Switch language">{language === 'ZH' ? 'EN' : '中文'}</button>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2 transition-colors" style={{ color: 'var(--txt)' }} aria-label="Menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 nav-glass border-b" style={{ borderColor: 'var(--bd)' }}>
          <div className="wrap py-4 flex flex-col gap-1">
            {navItems.map((item) => 'external' in item && item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="py-3 text-[15px]" onClick={() => setIsMenuOpen(false)}><BeeSigmaWordmark /></a>
            ) : (
              <Link key={item.href} to={resolve(item.href)} className="py-3 text-[15px] transition-colors" style={{ color: 'var(--txt)' }} onClick={() => setIsMenuOpen(false)}>{t(navContent[item.labelKey], language)}</Link>
            ))}
            <Link to={resolve('#contact')} className="btn btn-solid btn-sm mt-3 self-start" onClick={() => setIsMenuOpen(false)}>{language === 'ZH' ? '预约陪跑咨询' : 'Book a call'}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
