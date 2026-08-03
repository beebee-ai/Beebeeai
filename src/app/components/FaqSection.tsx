import { useLanguage } from '../contexts/LanguageContext';

export const faqItems = [
  {
    zh: ['BEEBEE AI 是什么？', 'BEEBEE AI 是面向未来人才的 AI 学习力平台，通过实训营、项目实践和学习平台，帮助学习者建立提问、创造、协作与产品落地能力。'],
    en: ['What is BEEBEE AI?', 'BEEBEE AI is an AI learning-power platform for future-ready talent. Its camps, project practice and learning platform develop questioning, creation, collaboration and product delivery skills.'],
  },
  {
    zh: ['BEEBEE AI 适合哪些人？', '学习路线面向不同背景的学习者，包括希望提升 AI 创造力的青少年、增强竞争力的职场人士，以及探索 AI 领导力的创业者和企业家。'],
    en: ['Who is BEEBEE AI for?', 'The learning paths serve people from different backgrounds: young learners building AI creativity, professionals strengthening competitiveness, and founders exploring AI leadership.'],
  },
  {
    zh: ['ALPHA 与 BETA 实训营有什么区别？', 'ALPHA 对零代码经验更友好，强调 AI 产品应用与快速产出；BETA 适合有编程经验的学习者，聚焦真实商业项目、技术实现与完整产品开发流程。'],
    en: ['How are ALPHA and BETA different?', 'ALPHA is friendly to learners without coding experience and focuses on applied AI products and fast outcomes. BETA is for learners with programming experience and covers real business projects and the full product development lifecycle.'],
  },
  {
    zh: ['学习过程中会产出什么？', '学习者以真实问题为起点，通过项目制协作完成可演示、可复盘的 AI 应用或作品，而不只是学习工具功能。'],
    en: ['What will learners create?', 'Learners start from real problems and collaborate on demonstrable, reviewable AI applications or projects rather than only learning tool features.'],
  },
  {
    zh: ['如何选择适合自己的学习路线？', '可以根据是否具备编程经验、希望解决的问题和目标成果选择路线；如果暂时不确定，可通过官网联系团队获取学习建议。'],
    en: ['How do I choose a learning path?', 'Choose based on your programming experience, the problem you want to solve and your target outcome. Contact the team through the website if you need guidance.'],
  },
  {
    zh: ['BEEBEE AI 与普通 AI 工具培训有什么不同？', '普通工具培训通常聚焦功能操作，BEEBEE AI 更强调定义问题、提出好问题、项目协作和真实交付，让学习结果形成可以展示、使用和复盘的作品。'],
    en: ['How is BEEBEE AI different from AI tool training?', 'Typical tool training focuses on features. BEEBEE AI emphasizes problem framing, better questions, project collaboration and real delivery, producing work that can be demonstrated, used and reviewed.'],
  },
  {
    zh: ['课程如何帮助学习者提升 AI 学习力？', '课程训练学习者拆解真实任务、设计工作流、调用合适的 AI 工具、验证输出并持续复盘，从“会使用工具”逐步走向“能独立解决问题”。'],
    en: ['How do the courses develop AI learning power?', 'Learners practice breaking down real tasks, designing workflows, choosing AI tools, validating outputs and reflecting—moving from using tools to solving problems independently.'],
  },
  {
    zh: ['如何报名、咨询或核验证书？', '可以通过官网联系表单或 service@beebee.ai 咨询适合的实训营路线。需要核验证书时，请提供证书编号和持证人姓名，由团队核对官方记录。'],
    en: ['How do I enroll, ask for guidance or verify a certificate?', 'Use the website contact form or email service@beebee.ai for learning-path guidance. For certificate verification, provide the certificate ID and holder name so the team can check the official record.'],
  },
];

export function FaqSection() {
  const { language } = useLanguage();
  return (
    <section id="faq" className="px-4 py-16 md:py-24 border-t border-white/10" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-orange-500 font-mono tracking-[0.25em] text-sm mb-4">FAQ</p>
        <h2 className="text-white font-semibold mb-4" style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>
          {language === 'ZH' ? '关于 BEEBEE AI' : 'About BEEBEE AI'}
        </h2>
        <p className="text-gray-400 mb-10">
          {language === 'ZH' ? '快速了解学习路线、适合人群、项目成果与报名方式。' : 'A quick guide to learning paths, audiences, project outcomes and enrollment.'}
        </p>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqItems.map((item, index) => {
            const [question, answer] = language === 'ZH' ? item.zh : item.en;
            return (
              <details className="group py-6" key={index} open={index === 0}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-white font-medium focus-visible:outline-2 focus-visible:outline-orange-500">
                  <span>{question}</span><span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 pr-10 text-gray-400 leading-7">{answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
