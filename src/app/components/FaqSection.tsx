import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export const faqItems = [
  {
    zh: ['BEEBEE AI 是什么？', 'BEEBEE AI 是企业 AI 陪跑专家：以 AI Native、可管理的企业 Agent 平台连接企业现有系统，持续构建、运营和优化 AI Agent，陪企业从第一个 Agent 上线走到 AI 真正进入日常业务。Alpha、Beta 实训营是我们培养能把 AI 落到企业里的人的成长路径。'],
    en: ['What is BEEBEE AI?', 'BEEBEE AI is an enterprise AI partner. Through an AI-native, manageable enterprise agent platform we connect to the systems you already run and keep building, operating and optimising AI agents, from the first agent going live to AI running in daily business. Alpha and Beta are the growth path that trains the people who make AI work inside real businesses.'],
  },
  {
    zh: ['Alpha、Beta、Sigma 分别面向谁？', 'Alpha 面向 13–19 岁青少年，无需编程基础，用 AI 搭建真实工作流；Beta 面向 18 岁以上大学生、研究生、在职工程师与创业者，把想法做成真实上线的 AI 产品；Sigma 面向企业，通过 BEE Sigma 平台把 Agent 接入现有系统并持续运营。'],
    en: ['Who are Alpha, Beta and Sigma for?', 'Alpha is for ages 13–19 with no coding required, building real workflows with AI. Beta is for university students, postgraduates, working engineers and founders aged 18+, shipping a live AI product. Sigma is for businesses, plugging agents into existing systems through the BEE Sigma platform and keeping them running.'],
  },
  {
    zh: ['BEEBEE AI 有哪两条业务线？', '教育培训与咨询落地。教育培训由 Alpha、Beta 实训营构成，培养能把 AI 用到真实任务里的人；咨询落地由 BEE Sigma 承接，以 AI Native、可管理的企业 Agent 平台陪企业把 AI 跑进日常业务。两条线由同一团队在新西兰与中国两地交付。'],
    en: ['What are the two lines of business?', 'Training, and consulting with delivery. Training is the Alpha and Beta programs, developing people who put AI to work on real tasks. Consulting and delivery is BEE Sigma, an AI-native, manageable enterprise agent platform that gets AI running in daily business. Both are delivered by the same team across New Zealand and China.'],
  },
  {
    zh: ['企业 AI 陪跑服务怎么开始？', '从两个免费入口开始：AIV 诊断看清企业官网在 AI 检索中的可见度，AIM 评估找出最值得先交给 Agent 的那条业务流。然后在最小范围试点一条工作流，验证见效后再接入微信、飞书、Teams、Slack 与 ERP，本地化部署上线。'],
    en: ['How does an enterprise engagement start?', 'With two free entry points: an AIV diagnosis shows how visible your website is in AI search, and an AIM assessment finds the one business flow worth handing to agents first. We then pilot that flow at minimum scope and, once it proves itself, connect WeChat, Lark, Teams, Slack and ERP with local deployment.'],
  },
  {
    zh: ['实训营结束后能得到什么？', 'Alpha 学生完成一套可复用的 AI 工作流和一个可展示的真实项目，可用于升学作品；Beta 学习者交付一个真实上线、接入支付的生产级 AI 产品，结业可获实习机会，优秀者获创始人推荐信，卓越作品有机会获得种子投资。'],
    en: ['What do learners walk away with?', 'Alpha students finish with a reusable AI workflow and a real, showable project suitable for admissions. Beta learners ship a live, production-grade AI product with payments wired in, gain internship opportunities on graduation, and top learners receive founder recommendation letters or seed-funding opportunities.'],
  },
  {
    zh: ['如何咨询、报名或核验证书？', '通过页面底部的联系表单或 service@beebee.ai 提交需求。企业咨询请说明行业与希望改造的业务环节；实训营报名请说明年龄阶段、基础和目标；证书核验请在「证书查询」页输入持证人姓名与证书编号。'],
    en: ['How do I enquire, enrol or verify a certificate?', 'Use the contact form below or email service@beebee.ai. For enterprise enquiries, tell us your industry and the process you want to transform. For programs, include age group, experience and goals. To verify a certificate, enter the holder name and certificate ID on the Certificate page.'],
  },
];

export function FaqSection() {
  const { language } = useLanguage();
  return (
    <section id="faq" className="pt-[110px] md:pt-[140px] pb-8">
      <div className="wrap">
        <SectionHeader eyebrow="FAQ" title={language === 'ZH' ? '关于\u00A0BEEBEE\u00A0AI' : 'About BEEBEE AI'} subtitle={language === 'ZH' ? '快速了解 BEEBEE AI、三个阶段面向谁，以及如何开始。' : 'A quick guide to BEEBEE AI, who each stage is for, and how to start.'} />
        <Reveal className="max-w-[920px] mt-12" delay={0.1}>
          {faqItems.map((item, index) => {
            const [question, answer] = language === 'ZH' ? item.zh : item.en;
            return (
              <details className="group panel panel-sm mt-3 overflow-hidden" key={index} open={index === 0}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 md:px-7 py-5 font-bold focus-visible:outline-2 focus-visible:outline-[var(--honey)]" style={{ fontSize: '17px', color: 'var(--txt)' }}>
                  <h3 className="flex-1 text-left" style={{ font: 'inherit', margin: 0 }}>{question}</h3>
                  <span className="shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45" style={{ color: 'var(--honey)', border: '1px solid var(--bd-2)' }} aria-hidden="true">+</span>
                </summary>
                <p className="px-6 md:px-7 pb-6 -mt-1 leading-7" style={{ color: 'var(--txt-2)', fontSize: '14.5px' }}>{answer}</p>
              </details>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
