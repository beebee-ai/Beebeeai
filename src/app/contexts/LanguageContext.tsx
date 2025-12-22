/**
 * 语言上下文 - 管理全局语言状态
 */

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ZH' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 检测浏览器语言偏好或从 localStorage 获取
  const getInitialLanguage = (): Language => {
    // 首先检查是否有用户手动设置的语言偏好
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage === 'ZH' || savedLanguage === 'EN') {
      return savedLanguage;
    }
    
    // 如果没有，检测浏览器语言
    const browserLang = navigator.language.toLowerCase();
    // 如果浏览器语言是中文相关，返回 ZH，否则返回 EN
    if (browserLang.startsWith('zh')) {
      return 'ZH';
    }
    return 'EN';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'ZH' ? 'EN' : 'ZH';
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}