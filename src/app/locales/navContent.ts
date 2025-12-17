/**
 * 导航栏双语内容配置
 */

import { Language } from '../contexts/LanguageContext';

export const navContent = {
  home: { ZH: '首页', EN: 'Home' },
  platform: { ZH: '学习力平台', EN: 'Learning Platform' },
  system: { ZH: '学习体系', EN: 'Curriculum' },
  works: { ZH: '学员作品', EN: 'Student Works' },
  philosophy: { ZH: '品牌理念', EN: 'Philosophy' },
  about: { ZH: '关于我们', EN: 'About Us' },
  contact: { ZH: '联系我们', EN: 'Contact' },
};

// 辅助函数：根据语言获取文本
export function t(content: { ZH: string; EN: string }, language: Language): string {
  return content[language];
}
