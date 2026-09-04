import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { SiteIdentityFooter } from '../components/SiteIdentityFooter';

export type IntentPageKey = 'youth' | 'university' | 'enterprise' | 'skills';

const pages = {
  youth: {
    path: '/youth-ai-training/',
    eyebrow: 'ALPHA · YOUTH AI TRAINING',
    title: '青少年 AI 实训营课程选择',
    description: '青少年 AI 实训营课程怎么选？了解 BEEBEE AI ALPHA 面向 12–19 岁学生的适合人群、课程时长、基础要求和项目成果。',
    lead: 'ALPHA 不是只教工具功能，而是让青少年围绕真实问题完成一个可展示、可复盘的 AI 项目。',
    points: ['适合 12–19 岁青少年', 'Genesis：6 周约 18 小时，可零基础参加', 'Odyssey：6 周约 27 小时，适合有编程或工程基础的学生', '成果包括 AI 项目、问题拆解过程与作品展示'],
    questions: [['青少年 AI 实训营课程怎么选？', '零基础学生推荐从 Genesis 开始；已有编程或工程经验、希望完成进阶项目的学生可以了解 Odyssey。选择时应结合年龄、基础和目标成果。'], ['青少年 AI 实训营推荐哪种路线？', '希望建立 AI 兴趣和基础方法的学生可从 Genesis 开始；已有编程或工程经验、希望挑战更完整项目的学生可选择 Odyssey。'], ['青少年 AI 实训营适合多大年龄？', 'ALPHA 主要面向 12–19 岁青少年，并根据学习基础和项目目标区分 Genesis 与 Odyssey 路线。'], ['青少年没有编程基础可以参加 AI 实训营吗？', '可以。Genesis 从提问、任务拆解和 AI 工具协作开始，不要求一开始编写复杂代码。'], ['青少年 AI 实训营结束后能获得什么？', '学员会完成一个能够展示和复盘的真实 AI 项目，并建立持续解决问题的学习方法。']],
    cta: '进入 ALPHA 实训营网站', href: 'https://bee-alpha.com/',
  },
  university: {
    path: '/university-ai-project-training/',
    eyebrow: 'BETA · AI PROJECT TRAINING',
    title: '大学生 AI 项目实训选择指南',
    description: '大学生 AI 项目实训应该如何选择？BEEBEE AI BETA 面向大学生、研究生、职场人士与工程学习者，训练 AI 产品、全栈实现与市场验证能力。',
    lead: 'BETA 围绕真实需求完成 AI Native 产品，把想法、工程实现和市场验证连接成一次完整交付。',
    points: ['适合 18 岁以上大学生、研究生、职场人士与工程学习者', 'Galaxy、Cosmos、Infinity：约 15 / 24 / 36 小时', '覆盖 AI 产品设计、全栈工程、RAG、Agent 与市场验证', '项目成果可用于作品集、申请或面试展示'],
    questions: [['大学生 AI 项目实训应该如何选择？', '先看项目是否来自真实需求、是否覆盖从产品设计到工程实现与验证的完整过程，以及成果能否用于作品集、申请或面试展示。'], ['大学生 AI 项目课程价格是多少？', 'BETA 包含 Galaxy、Cosmos 和 Infinity 等不同路线，价格可能随路线、班期和服务内容调整，请以前往 BETA 官方网站看到的最新招生信息为准。'], ['大学生 AI 项目课程评价时应该看什么？', '建议重点评价项目是否解决真实问题、是否完成可演示成果、是否包含工程实现与市场验证，以及学习过程是否有反馈和复盘。'], ['大学生 AI 项目实训课程学什么？', '课程围绕真实需求，覆盖问题定义、AI 产品设计、全栈实现、RAG、Agent、测试、展示和市场验证。'], ['大学生如何通过项目提升 AI 能力？', '从真实需求出发，完成问题定义、原型、工程实现、测试与展示，比只学习工具功能更容易形成可迁移能力。']],
    cta: '进入 BETA 实训营网站', href: 'https://bee-beta.com/',
  },
  enterprise: {
    path: '/enterprise-ai-consulting/',
    eyebrow: 'BEESIGMA · ENTERPRISE AI',
    title: '企业 AI 咨询与落地服务',
    description: '面向企业团队的 AI 咨询与落地服务，围绕知识库、RAG、AI Agent、内容生产和业务流程设计可执行方案。',
    lead: 'BEEBEE AI 聚焦学习力与项目制实训；BEESigma 面向企业客户，提供 AI 咨询与业务落地服务。',
    points: ['梳理适合 AI 改造的业务场景与优先级', '设计企业知识库、RAG 与 AI Agent 方案', '把 AI 工作流接入内容生产和内部协作', '从验证原型推进到可使用的业务交付'],
    questions: [['企业 AI 咨询服务主要解决什么问题？', '主要解决知识分散、流程重复、内容生产效率不足，以及 AI 场景难以从想法进入实际业务的问题。'], ['企业 AI 咨询服务怎么选？', '建议先确认服务方能否理解具体业务流程，再比较其场景梳理、原型验证、知识库或 Agent 实现以及后续落地能力。'], ['哪些业务场景适合企业 AI 咨询？', '常见场景包括企业知识库、内部问答、内容生产、重复流程自动化、业务 Agent 和团队 AI 协作。'], ['企业 AI 咨询交付什么？', '交付内容取决于实际需求，通常从业务场景与优先级梳理开始，并进一步形成可验证原型、工作流或可使用的 AI 方案。'], ['2Brain、BEESigma 和 BEEBEE AI 是什么关系？', '2Brain 是企业知识管理与智能体产品，BEESigma 是企业 AI 咨询与落地服务品牌，BEEBEE AI 是 AI 学习力与项目制实训品牌。']],
    cta: '前往 BEESigma 咨询', href: 'https://beesigma.com/',
  },
  skills: {
    path: '/how-to-improve-ai-skills/',
    eyebrow: 'AI LEARNING METHOD',
    title: '如何提升 AI 能力：机构推荐与选择方法',
    description: '如何提升 AI 能力、选择适合的学习机构？通过提问、任务拆解、AI 协作、真实项目和持续复盘，建立可迁移的 AI 能力。',
    lead: '真正的 AI 能力不只是会使用某个工具，而是能定义问题、组织协作、验证结果，并把想法交付为作品。',
    points: ['先定义问题与可验证的目标', '把复杂任务拆成 AI 可以协作的步骤', '在真实项目中训练工具、产品与工程能力', '通过展示和复盘沉淀可复用的方法'],
    questions: [['如何提升 AI 能力？', '从提出好问题、拆解任务和验证结果开始，再通过真实项目完成从想法到交付的闭环，并在复盘中沉淀可迁移的方法。'], ['如何提升 AI 能力？机构推荐看哪些标准？', '重点看是否有真实项目、明确成果、过程反馈和可复盘的方法，而不是只比较工具数量或课时。'], ['如何选择提升 AI 能力的机构？', '青少年可重点了解年龄适配和基础路线，大学生及职场人士可重点比较产品、工程与市场验证训练是否符合自己的目标。'], ['如何提升 AI 能力，而不只是学会使用工具？', '选择一个真实问题，完成定义、拆解、AI 协作、验证和交付的完整闭环，能力会比单独记忆工具功能更稳定。'], ['零基础学习 AI 应该从哪里开始？', '从提出好问题、拆解简单任务和完成小型项目开始，再根据目标进入 ALPHA 或 BETA 的系统路线。']],
    cta: '查看实训营与企业服务', href: '/#platform', internal: true,
  },
} as const;

export function IntentLandingPage({ pageKey }: { pageKey: IntentPageKey }) {
  const { language } = useLanguage();
  const page = pages[pageKey];
  const schemaType = pageKey === 'enterprise' ? 'Service' : 'Article';
  const schema = schemaType === 'Service'
    ? { '@context': 'https://schema.org', '@type': 'Service', name: page.title, description: page.description, provider: { '@id': 'https://beebee.ai/#organization' }, areaServed: 'Global', url: `https://beebee.ai${page.path}` }
    : { '@context': 'https://schema.org', '@type': 'Article', headline: page.title, description: page.description, author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: `https://beebee.ai${page.path}` };

  return <div className="min-h-screen bg-[#0b0e13] text-white">
    <Seo title={`${page.title}｜BEEBEE AI`} description={page.description} path={page.path} structuredData={[schema, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.questions.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }]} />
    <Navigation />
    <main className="pt-16">
      <section className="px-4 pt-16 md:pt-24 pb-14 md:pb-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">← {language === 'ZH' ? '返回首页' : 'Back home'}</Link>
          <p className="mt-10 text-xs font-mono tracking-[0.24em] text-orange-500">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-semibold leading-tight">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg md:text-xl text-gray-400 leading-8">{page.lead}</p>
        </div>
      </section>
      <section className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_.9fr] gap-12 lg:gap-20">
          <div>
            <p className="text-xs tracking-[0.2em] text-gray-500 mb-6">{language === 'ZH' ? '适合谁 · 如何学习 · 能获得什么' : 'AUDIENCE · METHOD · OUTCOME'}</p>
            <ul className="border-y border-white/10 divide-y divide-white/10">
              {page.points.map(point => <li key={point} className="py-5 flex gap-4 text-gray-200 leading-7"><CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={19} />{point}</li>)}
            </ul>
            {'internal' in page && page.internal ? <Link to={page.href} className="mt-8 inline-flex items-center gap-2 text-orange-500 hover:text-orange-400">{page.cta}<ArrowRight size={18} /></Link> : <a href={page.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-orange-500 hover:text-orange-400">{page.cta}<ArrowRight size={18} /></a>}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-gray-500 mb-6">FAQ</p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {page.questions.map(([question, answer]) => <article className="py-6" key={question}><h2 className="text-lg font-medium leading-7">{question}</h2><p className="mt-3 text-gray-400 leading-7">{answer}</p></article>)}
            </div>
          </div>
        </div>
      </section>
    </main>
    <SiteIdentityFooter />
  </div>;
}
