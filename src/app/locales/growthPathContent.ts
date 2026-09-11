/**
 * 首页「成长路径」板块：Alpha（入门）→ Beta（进阶）→ Sigma（企业）
 * 事实口径来自 bee-alpha.com / bee-beta.com / beesigma.com，修改时请同步三站。
 */

type Text = { ZH: string; EN: string };

export type GrowthStage = {
  code: 'Alpha' | 'Beta' | 'Sigma';
  color: string;
  stage: Text;
  audience: Text;
  positioning: Text;
  contentTitle: Text;
  content: Text[];
  outcomeTitle: Text;
  outcomes: Text[];
  tracks: Text;
  format: Text;
  ctaExternal: Text;
  hrefExternal: string;
  hrefExternalEn: string;
  ctaInternal: Text;
  hrefInternal: string;
};

export const growthPathContent = {
  title: { ZH: '成长路径', EN: 'Growth Path' },
  subtitle: {
    ZH: '教育培训（Alpha、Beta）与咨询落地（Sigma）两条线，各自学什么、做什么、能得到什么，一次讲清。',
    EN: 'Two lines: training (Alpha, Beta) and consulting with delivery (Sigma). What each covers, what you build, and what you walk away with.',
  },
  stages: [
    {
      code: 'Alpha',
      color: '#FF6900',
      stage: { ZH: '教育培训 · 入门', EN: 'Training · Beginner' },
      audience: { ZH: '13–19 岁青少年 · 无需编程基础', EN: 'Ages 13–19 · No coding required' },
      positioning: {
        ZH: '用\u00A0AI\u00A0搭建真实工作流。围绕学习、升学与真实工作场景中的任务，学会把任务拆开，让\u00A0AI\u00A0接手重复性的步骤。',
        EN: 'Build real workflows with AI. Around tasks from school, admissions and real work, learn to break a task down and let AI take over the repetitive steps.',
      },
      contentTitle: { ZH: '主要内容', EN: 'What we cover' },
      content: [
        { ZH: 'CRAFT 提问框架与任务拆解：把任务交代清楚，把想法变成步骤', EN: 'The CRAFT prompting framework and task decomposition: brief clearly, turn ideas into steps' },
        { ZH: 'Claude / Codex 实战：让 AI 接手任务步骤，从信息整理到成果产出', EN: 'Hands-on Claude / Codex: let AI take over steps, from research to output' },
        { ZH: '工作流应用化与成果沉淀：把流程变成可以反复使用的入口', EN: 'Turn the workflow into a reusable tool you can keep using' },
        { ZH: '远航营进阶：Cursor 全栈开发、React、GitHub + Cloudflare + Firebase 全链路、Stripe 收费、RAG 与大模型 API', EN: 'Odyssey advanced track: Cursor full-stack, React, GitHub + Cloudflare + Firebase, Stripe payments, RAG and LLM APIs' },
        { ZH: 'Demo Day：每人独立路演与评审反馈', EN: 'Demo Day: every student presents and gets reviewed' },
      ],
      outcomeTitle: { ZH: '学生能得到什么', EN: 'What students get' },
      outcomes: [
        { ZH: '一套可复用的 AI 工作流，能持续推进学习、升学与工作中的真实任务', EN: 'A reusable AI workflow that keeps moving real school, admissions and work tasks forward' },
        { ZH: '可迁移的生产力：掌握任务拆解，用 AI 解决 80% 的重复性工作', EN: 'Transferable productivity: decompose tasks and let AI handle 80% of the repetitive work' },
        { ZH: '一个可展示的真实项目，可用于升学作品或兴趣落地；远航营作品按工业化标准交付，导师与创始人可为结营学生背书', EN: 'A real, showable project for admissions or a personal venture; Odyssey projects are built to production standard and endorsed by mentors and the founder' },
        { ZH: '掌控感与未来自信：从 AI 的使用者，变成 AI 的驯化者与开发者', EN: 'Control and confidence: from AI user to someone who directs and builds with AI' },
      ],
      tracks: { ZH: '启航营 Genesis：6 周 · 约 18 小时，零基础可参加 ｜ 远航营 Odyssey：6 周 · 约 27 小时，需一定编程或工程经验，选拔制', EN: 'Genesis: 6 weeks · ~18 hours, beginner-friendly ｜ Odyssey: 6 weeks · ~27 hours, some coding or engineering experience, selective entry' },
      format: { ZH: '线上直播小班：1 对 1 或最多 8 人黄金组团，每人独立交付项目', EN: 'Live online, small cohorts: 1-on-1 or up to 8 students, each delivering their own project' },
      ctaExternal: { ZH: '进入 Alpha 实训营', EN: 'Explore Alpha' },
      hrefExternal: 'https://bee-alpha.com/',
      hrefExternalEn: 'https://bee-alpha.com/',
      ctaInternal: { ZH: '课程选择指南', EN: 'How to choose' },
      hrefInternal: '/youth-ai-training',
    },
    {
      code: 'Beta',
      color: '#06B6D4',
      stage: { ZH: '教育培训 · 进阶', EN: 'Training · Advanced' },
      audience: { ZH: '18 岁以上大学生、研究生、在职工程师与创业者', EN: 'University students, postgraduates, working engineers and founders, 18+' },
      positioning: {
        ZH: '成为\u00A0AI\u00A0时代的创造者，而不只是消费者。产品、工程、市场三位一体，品味和架构重于代码，把想法做成真实上线的\u00A0AI\u00A0产品。',
        EN: 'Become a creator in the AI era, not just a consumer. Product, engineering and market in one, taste and architecture over code, and an idea shipped as a live AI product.',
      },
      contentTitle: { ZH: '主要内容', EN: 'What we cover' },
      content: [
        { ZH: '产品方法：JSK 产品设计模型、CRAFT 提问框架、JTBD 与用户故事地图', EN: 'Product method: the JSK design model, CRAFT prompting, JTBD and user story mapping' },
        { ZH: 'AI 工程：Codex / Cursor 全栈开发，React 与 FastAPI，Git、部署与独立域名', EN: 'AI engineering: Codex / Cursor full-stack, React and FastAPI, Git, deployment and your own domain' },
        { ZH: 'RAG、向量库与企业级知识库；多专家 Agent 设计与工具链编排', EN: 'RAG, vector stores and enterprise knowledge bases; multi-agent design and tool orchestration' },
        { ZH: '模型私有化部署（vLLM / LM Studio、Docker）、大模型 API 与 Stripe 支付接入', EN: 'Private model deployment (vLLM / LM Studio, Docker), LLM APIs and Stripe payments' },
        { ZH: '发布与增长：Product Hunt 发布、A/B 测试、Demo Day 路演与商业计划', EN: 'Launch and growth: Product Hunt release, A/B testing, Demo Day pitch and business plan' },
      ],
      outcomeTitle: { ZH: '学习者能得到什么', EN: 'What learners get' },
      outcomes: [
        { ZH: '一个真实上线的生产级 AI 产品：独立域名、接入支付、完成商业部署', EN: 'A live, production-grade AI product: own domain, payments wired in, commercially deployed' },
        { ZH: 'RAG、Agent、私有化部署等一线实战技术，建立「工程 + 产品」护城河', EN: 'Frontline skills in RAG, agents and private deployment, and an engineering-plus-product moat' },
        { ZH: '职业背书：结业可获 AI 公司实战项目或实习机会，优秀者获创始人推荐信，卓越作品有机会获得种子投资', EN: 'Career backing: real projects or internships at AI companies on graduation, founder recommendation letters for top learners, seed funding opportunities for standout products' },
        { ZH: '全球化 AI 创业实战经验与同频社群；一线工程师授课，400+ API 与中间件支持', EN: 'Global AI startup experience and a like-minded community; taught by working engineers with 400+ APIs and middleware to build on' },
      ],
      tracks: { ZH: '星空营 Galaxy：6 周，零 / 低代码基础做出上线产品 ｜ 深空营 Cosmos：8 周，有基础，打造生产级项目 ｜ 无界营 Infinity：12 周，高资历，创始人亲带完成商业闭环', EN: 'Galaxy: 6 weeks, ship a live product from little or no code ｜ Cosmos: 8 weeks, production-grade projects for experienced builders ｜ Infinity: 12 weeks, founder-led, full commercial loop for senior profiles' },
      format: { ZH: '全程直播 + 陪跑辅导，每周答疑与作业检查，12 人以内小班；入门可先听 Pin 专业公开课', EN: 'Fully live with ongoing coaching, weekly Q&A and homework review, cohorts of 12 or fewer; start with Pin\'s open lecture' },
      ctaExternal: { ZH: '进入 Beta 实训营', EN: 'Explore Beta' },
      hrefExternal: 'https://bee-beta.com/',
      hrefExternalEn: 'https://bee-beta.com/',
      ctaInternal: { ZH: '项目实训选择指南', EN: 'How to choose' },
      hrefInternal: '/university-ai-project-training',
    },
    {
      code: 'Sigma',
      color: '#FFB028',
      stage: { ZH: '咨询落地 · 企业', EN: 'Consulting · Enterprise' },
      audience: { ZH: '新西兰与中国两地企业 · 8 个行业场景已在真实业务中运行', EN: 'Businesses in New Zealand and China · 8 industry scenarios running in production' },
      positioning: {
        ZH: 'AI\u00A0Native · 可管理的企业\u00A0Agent\u00A0平台。引入\u00A0AI，无需更换任何系统：一支分工明确的\u00A0Agent\u00A0团队接入企业已有的微信、飞书、Slack、Teams、邮件与\u00A0ERP。',
        EN: 'An AI-native, manageable enterprise agent platform. Introduce AI without replacing any system: a team of specialised agents plugs into the WeChat, Lark, Slack, Teams, email and ERP you already run.',
      },
      contentTitle: { ZH: '我们提供什么', EN: 'What we provide' },
      content: [
        { ZH: '免费 AIV 诊断与 AIM 评估：看清官网在 AI 检索中的可见度，找出最值得先交给 Agent 的那条业务流', EN: 'Free AIV diagnosis and AIM assessment: see how visible you are in AI search and find the one flow worth handing to agents first' },
        { ZH: '三条标准工作流：GTM 获客与培育、CRM 转化与签约、财税回款与合规', EN: 'Three standard workflows: GTM acquisition, CRM conversion and closing, finance collections and compliance' },
        { ZH: 'Golden Flow 定制工作流：为你独有的那条产金业务流新建缺的 Agent', EN: 'Golden Flow: custom agents for the one flow unique to how your business makes money' },
        { ZH: '三步落地：诊断切入 → 单条工作流试点 → 接入真实系统，本地化部署，持续构建、运营和优化', EN: 'Three steps to production: diagnose, pilot one flow, connect real systems with local deployment, then keep building, operating and optimising' },
      ],
      outcomeTitle: { ZH: '企业能得到什么', EN: 'What enterprises get' },
      outcomes: [
        { ZH: '系统不换、流程不动：团队只负责提出要求、做出决策，Agent 负责跑完流程', EN: 'No system swap, no process rewrite: your team sets requirements and makes decisions, agents run the flow' },
        { ZH: '可管理的边界：权限逐条授权，高风险动作人来拍板，每个动作留痕可回滚，数据不出企业', EN: 'Manageable boundaries: permissions granted one by one, humans approve high-risk actions, every action logged and reversible, data stays in-house' },
        { ZH: '看得见的成效：7 天跑完覆盖 20 省市、2 万人的培训考核闭环；80% 客户答疑由 Agent 先接住；顾问效率提升约 50%', EN: 'Visible results: a training and assessment loop for 20,000 people across 20 regions run in 7 days; 80% of customer enquiries handled first by agents; advisor efficiency up about 50%' },
        { ZH: '从第一个 Agent 上线到 AI 进入日常业务的全程陪跑：先跑通一条业务线，见效再扩展', EN: 'A partner from the first agent going live to AI in daily operations: one business line first, expand once it proves itself' },
      ],
      tracks: { ZH: '两个免费入口：AIV 诊断 · AIM 评估', EN: 'Two free entry points: AIV diagnosis · AIM assessment' },
      format: { ZH: '新西兰注册运营 · 本地化部署 · 数据不出企业 · 关键动作人审批', EN: 'Registered in New Zealand · Local deployment · Data stays in-house · Humans approve critical actions' },
      ctaExternal: { ZH: '进入 BEE Sigma', EN: 'Visit BEE Sigma' },
      hrefExternal: 'https://beesigma.com/',
      hrefExternalEn: 'https://beesigma.com/en',
      ctaInternal: { ZH: '企业 AI 陪跑服务', EN: 'Enterprise AI services' },
      hrefInternal: '/enterprise-ai-consulting',
    },
  ] as GrowthStage[],
};
