import { useLanguage } from '../contexts/LanguageContext';

export const faqItems = [
  {
    zh: ['BEEBEE AI 是什么？', 'BEEBEE AI 是一个 AI 学习力与项目制实训平台，帮助学习者通过真实项目掌握提问、AI 协作、产品实践和问题解决能力。'],
    en: ['What is BEEBEE AI?', 'BEEBEE AI is an AI learning and project-based training platform that helps learners build questioning, AI collaboration, product practice and problem-solving skills through real projects.'],
  },
  {
    zh: ['我应该选择 ALPHA、BETA 还是企业 AI 服务？', '如果你是 12–19 岁学生，优先了解 ALPHA；如果你是大学生、职场人士或工程学习者，优先了解 BETA；如果你代表企业，希望把 AI 用到具体业务流程中，优先咨询企业 AI 服务。'],
    en: ['Should I choose ALPHA, BETA or enterprise AI services?', 'Choose ALPHA for learners aged 12–19, BETA for university students, professionals and engineering learners, and enterprise AI services when your team wants to apply AI to specific business workflows.'],
  },
  {
    zh: ['ALPHA 实训营适合什么样的学生？', 'ALPHA 适合希望提升 AI 兴趣、创造力、表达能力和项目实践能力的青少年。零基础学生可以从入门路线开始，有编程或工程基础的学生可以选择更进阶的项目路线。'],
    en: ['Who is the ALPHA program for?', 'ALPHA is for young learners who want to develop AI curiosity, creativity, communication and project skills. Beginners can start with the introductory path, while learners with coding or engineering experience can choose an advanced project path.'],
  },
  {
    zh: ['BETA 实训营适合什么样的人？', 'BETA 适合希望通过真实项目提升 AI 产品能力、工程实现能力和市场验证能力的大学生、研究生、职场人士和工程学习者。'],
    en: ['Who is the BETA program for?', 'BETA is for university students, postgraduates, professionals and engineering learners who want to develop AI product, implementation and market-validation skills through real projects.'],
  },
  {
    zh: ['没有编程基础可以参加吗？', '可以参加入门阶段。BEEBEE AI 不要求学习者一开始就写复杂代码，而是先训练如何提出好问题、拆解任务、使用 AI 工具并完成可展示的项目成果。'],
    en: ['Can I join without programming experience?', 'Yes. Introductory stages do not require complex coding. Learners first practice asking better questions, breaking down tasks, using AI tools and completing a demonstrable project.'],
  },
  {
    zh: ['BEEBEE AI 的学习方式和普通 AI 课程有什么不同？', '普通 AI 课程更常见的是讲工具和功能，BEEBEE AI 更强调真实任务、项目协作和结果交付。学习者不是只学会操作 AI，而是学会用 AI 把一个想法做成作品。'],
    en: ['How is BEEBEE AI different from a typical AI course?', 'Typical AI courses focus on tools and features. BEEBEE AI emphasizes real tasks, project collaboration and delivery, teaching learners to turn an idea into a finished work with AI.'],
  },
  {
    zh: ['学习结束后会产出什么？', '学习者会完成一个可以展示、可以使用、可以复盘的 AI 项目，可能是学习应用、内容产品、智能问答系统、数据分析工具或垂直场景原型。'],
    en: ['What will I produce by the end?', 'Learners complete an AI project that can be demonstrated, used and reviewed, such as a learning app, content product, intelligent Q&A system, data-analysis tool or vertical prototype.'],
  },
  {
    zh: ['学员项目可以用于作品集、申请或面试展示吗？', '可以。BEEBEE AI 强调真实项目和可展示成果，完成度较高的项目可以作为作品集、申请材料、面试展示或个人成长记录的一部分。'],
    en: ['Can a project be used in a portfolio, application or interview?', 'Yes. Strong completed projects can become part of a portfolio, application, interview presentation or personal development record.'],
  },
  {
    zh: ['企业 AI 服务主要解决什么问题？', '企业 AI 服务面向希望提升效率或探索 AI 落地的团队，重点是结合具体业务流程，设计 AI 工作流、知识库、Agent、内容生产或内部协作提效方案。'],
    en: ['What problems do enterprise AI services address?', 'Enterprise AI services help teams improve efficiency and implement AI through business-specific workflows, knowledge bases, agents, content production and internal collaboration solutions.'],
  },
  {
    zh: ['如何咨询、报名或核验证书？', '可以通过官网联系入口提交咨询需求。如果是报名咨询，建议说明年龄阶段、学习基础和目标成果；如果是证书核验，建议提供证书编号和持证人姓名。'],
    en: ['How do I enquire, enroll or verify a certificate?', 'Use the website contact entry. For enrollment, include the learner’s age group, experience and target outcome. For certificate verification, provide the certificate ID and holder name.'],
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
