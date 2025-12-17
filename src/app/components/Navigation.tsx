import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/772f420ffffbbadc61ebedf635d8030916a4ae9b.png';
import { useLanguage } from '../contexts/LanguageContext';
import { navContent, t } from '../locales/navContent';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { labelKey: 'home', href: '#home' },
    { labelKey: 'platform', href: '#platform' },
    { labelKey: 'system', href: '#system' },
    { labelKey: 'works', href: '#works' },
    { labelKey: 'philosophy', href: '#philosophy' },
    { labelKey: 'about', href: '#about' },
    { labelKey: 'contact', href: '#contact' },
  ] as const;

  // 判断是否在首页
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation - Left aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logoImage} alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={isHomePage ? item.href : `/${item.href}`}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {t(navContent[item.labelKey], language)}
              </Link>
            ))}
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex-shrink-0">
            <Link to="/">
              <img src={logoImage} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Language Toggle - Right aligned */}
          <div className="hidden md:block">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-gray-300 transition-colors border border-white/20 px-3 py-1 rounded"
            >
              {language}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={isHomePage ? item.href : `/${item.href}`}
                className="block text-white hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(navContent[item.labelKey], language)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-gray-300 transition-colors border border-white/20 px-3 py-1 rounded"
            >
              {language}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}