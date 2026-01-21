import { Language } from "../contexts/LanguageContext";

export const seoData = {
  home: {
    title: {
      ZH: "BEEBEE AI - 用 AI 做出真实应用",
      EN: "BEEBEE AI - Evolve Learning with AI",
    },
    description: {
      ZH: "BEEBEE AI 是 AI学习力平台，致力于培养具备终身学习力的新一代人才，提出&quot;学习将取代教育&quot;的理念，强调个性化与项目化学习，服务青少年学生、在职人士与企业家群体，分别聚焦创造力、竞争力与领导力的系统提升。",
      EN: "BEEBEE AI is an AI-powered learning platform dedicated to cultivating lifelong learning abilities. Guided by the philosophy that “learning will replace traditional education,” it emphasizes personalized and project-based learning to empower teenagers, professionals, and entrepreneurs in creativity, competitiveness, and leadership.",
    },
    keywords: {
      ZH: "AI学习力, 终身学习力, 人工智能学习平台, 个性化学习, 项目化学习, 青少年AI学习, 职场AI能力, 企业家学习力, AI创造力, AI竞争力, AI领导力, BEEBEE AI",
      EN: "AI learning, lifelong learning, artificial intelligence education platform, personalized learning, project-based learning, AI education for teens, AI skills for professionals, entrepreneurial learning, creativity development, competitive skills, leadership development, BEEBEE AI",
    },
  },
};

export function t(
  content: { ZH: string; EN: string },
  language: Language
): string {
  return content[language];
}
