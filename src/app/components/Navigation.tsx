import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// Using direct image URL for GitHub Pages compatibility
const logoImage = "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/beebee_ai.png";
import { useLanguage } from '../contexts/LanguageContext';
import { navContent, t } from '../locales/navContent';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const [currentHash, setCurrentHash] = useState(location.hash || '#home');

  useEffect(() => {
    setCurrentHash(location.hash || '#home');
  }, [location.hash]);

  const navItems = [
    { labelKey: 'home', href: '#home' },
    { labelKey: 'platform', href: '#platform' },
    { labelKey: 'works', href: '#works' },
    { labelKey: 'philosophy', href: '#philosophy' },
    { labelKey: 'about', href: '#about' },
    { labelKey: 'contact', href: '#contact' },
    { labelKey: 'certificate', href: '/certificate' },
  ] as const;

  // 判断是否在首页
  const isHomePage = location.pathname === '/';

  // 处理链接跳转逻辑
  const getLinkPath = (href: string) => {
    if (href.startsWith('/')) {
      return href; // 如果是独立路由（如 /certificate），直接返回
    }
    // 如果是 Hash 锚点（如 #home），根据当前是否在首页来决定路径
    return isHomePage ? href : `/${href}`;
  };

  // 判断当前 Tab 是否激活
  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      // 独立路由：匹配 pathname
      return location.pathname === href;
    }
    // Hash 锚点：在首页时匹配 hash
    if (isHomePage) {
      return currentHash === href;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation - Left aligned */}
          <div className="hidden md:flex items-center space-x-8 h-full">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logoImage} alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={getLinkPath(item.href)}
                  className={`relative flex items-center h-8 text-sm font-medium transition-colors duration-300 text-white hover:text-gray-300`}
                >
                  {t(navContent[item.labelKey], language)}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff6900] rounded-t-md shadow-[0_-2px_8px_rgba(255,102,0,0.5)]" />
                  )}
                </Link>
              );
            })}
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
                to={getLinkPath(item.href)}
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