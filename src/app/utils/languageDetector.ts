/**
 * 智能语言检测工具
 * 按照优先级自动判断应该显示中文还是英文
 */

export type Language = 'ZH' | 'EN';

const LANGUAGE_STORAGE_KEY = 'beebee_language_preference';

/**
 * 从时区判断语言
 * 中国时区（UTC+8）返回中文，其他返回英文
 */
function detectLanguageFromTimezone(): Language {
  const offset = -new Date().getTimezoneOffset() / 60;
  // UTC+8 (中国标准时间)
  if (offset === 8) {
    return 'ZH';
  }
  return 'EN';
}

/**
 * 从浏览器语言设置判断
 */
function detectLanguageFromBrowser(): Language | null {
  const languages = navigator.languages || [navigator.language];
  
  for (const lang of languages) {
    const normalizedLang = lang.toLowerCase();
    // 检查是否是中文相关的语言代码
    if (normalizedLang.startsWith('zh')) {
      return 'ZH';
    }
    // 检查是否是英文相关的语言代码
    if (normalizedLang.startsWith('en')) {
      return 'EN';
    }
  }
  
  return null;
}

/**
 * 智能语言检测
 * 优先级：localStorage > navigator.languages > 时区 > 默认语言(中文)
 */
export function detectLanguage(): Language {
  // 1. 检查 localStorage - 用户已选语言（最高优先级）
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage === 'ZH' || savedLanguage === 'EN') {
    return savedLanguage;
  }
  
  // 2. 检查浏览器语言设置
  const browserLanguage = detectLanguageFromBrowser();
  if (browserLanguage) {
    return browserLanguage;
  }
  
  // 3. 根据时区兜底
  const timezoneLanguage = detectLanguageFromTimezone();
  if (timezoneLanguage) {
    return timezoneLanguage;
  }
  
  // 4. 默认语言（中文）
  return 'ZH';
}

/**
 * 保存用户选择的语言到 localStorage
 */
export function saveLanguagePreference(language: Language): void {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}

/**
 * 清除保存的语言偏好（用于测试）
 */
export function clearLanguagePreference(): void {
  localStorage.removeItem(LANGUAGE_STORAGE_KEY);
}
