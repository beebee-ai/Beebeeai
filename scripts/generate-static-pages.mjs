import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const shell = await readFile(join(dist, 'index.html'), 'utf8');
await mkdir(publicDir, { recursive: true });
const faqItems = [
  ['BEEBEE AI 是什么？', 'BEEBEE AI 是企业 AI 陪跑专家：以 AI Native、可管理的企业 Agent 平台连接企业现有系统，持续构建、运营和优化 AI Agent，陪企业从第一个 Agent 上线走到 AI 真正进入日常业务。Alpha、Beta 实训营是我们培养能把 AI 落到企业里的人的成长路径。'],
  ['Alpha、Beta、Sigma 分别面向谁？', 'Alpha 面向 13–19 岁青少年，无需编程基础，用 AI 搭建真实工作流；Beta 面向 18 岁以上大学生、研究生、在职工程师与创业者，把想法做成真实上线的 AI 产品；Sigma 面向企业，通过 BEE Sigma 平台把 Agent 接入现有系统并持续运营。'],
  ['BEEBEE AI 有哪两条业务线？', '教育培训与咨询落地。教育培训由 Alpha、Beta 实训营构成，培养能把 AI 用到真实任务里的人；咨询落地由 BEE Sigma 承接，以 AI Native、可管理的企业 Agent 平台陪企业把 AI 跑进日常业务。两条线由同一团队在新西兰与中国两地交付。'],
  ['企业 AI 陪跑服务怎么开始？', '从两个免费入口开始：AIV 诊断看清企业官网在 AI 检索中的可见度，AIM 评估找出最值得先交给 Agent 的那条业务流。然后在最小范围试点一条工作流，验证见效后再接入微信、飞书、Teams、Slack 与 ERP，本地化部署上线。'],
  ['实训营结束后能得到什么？', 'Alpha 学生完成一套可复用的 AI 工作流和一个可展示的真实项目，可用于升学作品；Beta 学习者交付一个真实上线、接入支付的生产级 AI 产品，结业可获实习机会，优秀者获创始人推荐信，卓越作品有机会获得种子投资。'],
  ['如何咨询、报名或核验证书？', '通过官网联系表单或 service@beebee.ai 提交需求。企业咨询请说明行业与希望改造的业务环节；实训营报名请说明年龄阶段、基础和目标；证书核验请在证书查询页输入持证人姓名与证书编号。'],
];
const faqHtml = `<section><h2>BEEBEE AI 常见问题</h2>${faqItems.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join('')}</section>`;
const staticContact = `<footer><h2>BEEBEE AI 联系方式</h2><p>咨询邮箱：<a href="mailto:service@beebee.ai">service@beebee.ai</a></p><address>中国四川省成都市高新区成都高新孵化园 1 号楼 A 座<br>B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand</address></footer>`;
const homeSchemas = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://beebee.ai/#organization', name: 'BEEBEE AI', url: 'https://beebee.ai/', email: 'service@beebee.ai', logo: 'https://beebee.ai/brand/icon-512.png', sameAs: ['https://bee-alpha.com/', 'https://bee-beta.com/', 'https://beesigma.com/'], description: '企业 AI 陪跑专家：AI Native、可管理的企业 Agent 平台，连接企业现有系统，持续构建、运营和优化 AI Agent；Alpha、Beta 实训营培养企业 AI 人才。', contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'service@beebee.ai', availableLanguage: ['Chinese', 'English'] }, knowsAbout: ['企业 AI 陪跑', 'AI Agent', '企业 Agent 平台', '业务流程自动化', 'RAG', 'AI 项目制实训', 'AI 人才培养'], address: [{ '@type': 'PostalAddress', streetAddress: 'B:Hive, 74 Taharoto Road, Smales Farm, Takapuna', addressLocality: 'Auckland', addressCountry: 'NZ' }, { '@type': 'PostalAddress', streetAddress: '成都高新孵化园 1 号楼 A 座', addressLocality: '成都', addressRegion: '四川', addressCountry: 'CN' }] },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://beebee.ai/#website', url: 'https://beebee.ai/', name: 'BEEBEE AI', publisher: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'WebApplication', '@id': 'https://learn.beebee.ai/#app', name: 'BEEBEE AI 学习平台', url: 'https://learn.beebee.ai/', applicationCategory: 'EducationalApplication', operatingSystem: 'All', publisher: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: '周品', alternateName: 'Pin Zhou', jobTitle: 'BEEBEE AI 创始人 / 创业导师', worksFor: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: 'Vito Liu', jobTitle: '高级 AI 工程师', worksFor: { '@id': 'https://beebee.ai/#organization' }, alumniOf: { '@type': 'CollegeOrUniversity', name: 'McGill University' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: 'Fred Chi', alternateName: '池老师', jobTitle: '首席程序员', worksFor: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-alpha.com/#course', name: 'BEEBEE AI Alpha 实训营', url: 'https://bee-alpha.com/', description: '面向青少年的 AI 教育训练营，通过真实任务学习 AI 工具与工作流搭建。', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '12–19 岁青少年' }, teaches: ['AI 工作流', '提问与任务拆解', 'AI 产品实践'], courseMode: 'Online' },
  { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-beta.com/#course', name: 'BEEBEE AI Beta 实训营', url: 'https://bee-beta.com/', description: '通过真实项目训练 AI 产品、全栈工程与市场验证能力。', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '大学生、职场人士与工程人才' }, teaches: ['AI 产品开发', '全栈工程', 'RAG 与 Agent', '市场验证'], courseMode: 'Online' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
];
const pages = [
  {
    path: '', title: 'BEEBEE AI｜企业 AI 陪跑专家',
    description: 'BEEBEE AI 是企业 AI 陪跑专家：AI Native、可管理的企业 Agent 平台，连接企业现有系统，持续构建、运营和优化 AI Agent，从第一个 Agent 上线到 AI 真正进入企业日常业务。',
    body: `<main><h1>BEEBEE AI｜企业 AI 陪跑专家</h1><p>从第一个 Agent 上线，到 AI 真正进入企业日常业务。BEEBEE AI 以 AI Native、可管理的企业 Agent 平台连接企业现有系统，持续构建、运营和优化 AI Agent，让团队专注于目标与决策。</p><nav aria-label="按需求选择"><a href="/youth-ai-training/">青少年 AI 实训营课程推荐</a> · <a href="/university-ai-project-training/">大学生 AI 项目实训选择</a> · <a href="/enterprise-ai-consulting/">企业 AI 咨询服务</a> · <a href="/how-to-improve-ai-skills/">如何提升 AI 能力：机构推荐</a> · <a href="/differentiation/">AI 学习平台推荐与比较</a></nav><section><h2>两条业务线</h2><p>BEEBEE AI 做两件事：教育培训与咨询落地。教育培训由 Alpha、Beta 实训营构成，培养能把 AI 用到真实任务里的人；咨询落地由 BEE Sigma 承接，以 AI Native、可管理的企业 Agent 平台连接企业现有系统，陪企业从第一个 Agent 上线走到 AI 进入日常业务。</p></section><section><h2>成长路径：Alpha 入门 → Beta 进阶 → Sigma 企业</h2><h3><a href="https://bee-alpha.com/">Alpha（入门）</a></h3><p>面向 13–19 岁青少年，无需编程基础。用 AI 搭建真实工作流：CRAFT 提问框架与任务拆解、Claude / Codex 实战、工作流应用化与 Demo Day。启航营 Genesis 为 6 周约 18 小时的零基础线上路径；远航营 Odyssey 为 6 周约 27 小时的进阶路径，覆盖 Cursor 全栈开发、React、Stripe 收费、RAG 与大模型 API。学生得到一套可复用的 AI 工作流和一个可展示的真实项目，可用于升学作品或兴趣落地。</p><h3><a href="https://bee-beta.com/">Beta（进阶）</a></h3><p>面向 18 岁以上大学生、研究生、在职工程师与创业者。产品、工程、市场三位一体：JSK 产品设计模型、CRAFT 提问框架、Codex / Cursor 全栈开发、RAG 与企业级知识库、多专家 Agent、模型私有化部署、Product Hunt 发布与 Demo Day。星空营 Galaxy 6 周、深空营 Cosmos 8 周、无界营 Infinity 12 周。学习者得到一个真实上线的生产级 AI 产品、RAG 与 Agent 等一线实战技术，以及实习机会、创始人推荐信和种子投资机会。</p><h3><a href="https://beesigma.com/">Sigma（企业）</a></h3><p>面向新西兰与中国两地企业。AI Native、可管理的企业 Agent 平台：免费 AIV 诊断与 AIM 评估，GTM、CRM、财税三条标准工作流加 Golden Flow 定制工作流，三步落地并本地化部署。企业得到系统不换、流程不动的 AI 落地，权限逐条授权、高风险动作人来拍板、数据不出企业，以及从第一个 Agent 上线到 AI 进入日常业务的全程陪跑。</p></section><section><h2>咨询落地案例：三条工作流已在真实业务里运行</h2><h3>GTM 获客与培育</h3><p>新西兰国际教育集团：从咨询到注册，一条不断线的招生漏斗。线索富化、ICP 打分、培育与移交全程在飞书完成。</p><h3>CRM 转化与签约</h3><p>中国留学咨询机构：每位顾问身后多了一个成交辅助，客户摸底、同类案例调取、跟进时间线与关键承诺确认，顾问辅导效率提升约 50%。</p><h3>财税回款与合规</h3><p>新西兰建筑施工企业：应付发票不再靠人追，发票识别、审批提醒、付款追踪全在 Lark 里跑，逾期前预警。</p><p><a href="https://beesigma.com/cases">查看全部 8 个脱敏案例</a></p></section><section><h2>真实项目与学习成果</h2><p>公开案例包括 Alpha 的 Lumina Academy、RowingPro、AI 高尔夫成绩分析，以及 Beta 的 Hobbi、YummyYummy、Climate Intelligence Hub。</p></section><section><h2>核心导师与团队</h2><p>周品是 BEEBEE AI 创始人，拥有 25 年以上 IT 与互联网产品运营创业经验和 8 年 AI 实战经验；Vito Liu 是 BEEBEE AI 核心开发工程师，拥有麦吉尔大学计算机科学与数学双学位，专注 RAG 系统和 LLM 应用开发；池老师（Fred Chi）是蜜蜂时代首席程序员，拥有 25 年技术经验，擅长私有模型部署、分布式系统架构和高性能数据处理。</p></section>${faqHtml}</main>`,
    schemas: homeSchemas,
  },
  {
    path: 'differentiation', title: 'AI 学习平台推荐与比较｜BEEBEE AI 项目制学习方法',
    description: 'AI 学习平台推荐如何选择？比较真实项目、提问训练、任务拆解、过程反馈与成果展示，了解 BEEBEE AI 的项目制学习方法。',
    body: `<main><h1>BEEBEE AI 的学习方法</h1><p>BEEBEE AI 以“人想 + AI 做”为实践原则，通过项目制学习把 AI 理念转化为可展示的真实成果。</p><section><h2>AI 学习平台推荐如何选择？</h2><p>建议比较四点：是否围绕真实问题学习、是否要求完成可展示项目、是否训练提问与任务拆解、是否提供过程反馈与复盘。BEEBEE AI 的重点不是堆叠工具功能，而是帮助学习者把想法交付为真实成果。</p><h3>AI 学习平台比较时应该看什么？</h3><p>重点比较项目成果、提问与任务拆解训练、过程反馈，以及学习方法能否迁移到新的工具和场景。</p><h3>AI 学习平台哪个好？</h3><p>没有适合所有人的单一答案，应根据学习者年龄、基础、目标成果，以及是否需要产品或工程实践来选择。</p></section><section><h2>学习力公式与提问能力</h2><p>学习不只获取答案，更需要定义问题、提出好问题、验证结果并持续复盘。学习力公式强调问题质量、理解深度和实践过程之间的联系。</p></section><section><h2>道、法、术、器学习体系</h2><p>从认知原则、解决方法到实践技能和 AI 工具，形成完整学习闭环，避免把短期工具操作误认为长期 AI 能力。</p></section><section><h2>创造力、竞争力与领导力</h2><p>针对不同学习者，通过真实项目和协作过程发展面向 AI 时代的创造力、竞争力与领导力。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'AI 学习平台推荐与比较：BEEBEE AI 项目制学习方法', description: '比较 AI 学习平台的项目成果、提问训练、任务拆解和过程反馈。', author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: 'https://beebee.ai/differentiation/' }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'AI 学习平台推荐如何选择？', acceptedAnswer: { '@type': 'Answer', text: '建议选择围绕真实问题学习、要求完成可展示项目，并提供过程反馈与复盘的平台。' } }, { '@type': 'Question', name: 'AI 学习平台比较时应该看什么？', acceptedAnswer: { '@type': 'Answer', text: '重点比较项目成果、提问与任务拆解训练、过程反馈，以及学习方法能否迁移到新的工具和场景。' } }, { '@type': 'Question', name: 'AI 学习平台哪个好？', acceptedAnswer: { '@type': 'Answer', text: '没有适合所有人的单一答案，应根据学习者年龄、基础、目标成果，以及是否需要产品或工程实践来选择。' } }] }],
  },
  {
    path: 'certificate', title: 'BEEBEE AI 证书查询｜学习成果与能力证明',
    description: '查询并了解 BEEBEE AI 实训营学习证书。证书用于记录学习者完成的课程与项目成果，具体信息以证书记录为准。',
    body: `<main><h1>BEEBEE AI 证书查询</h1><p>BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。查询结果以证书编号关联的官方记录为准。</p><section><h2>证书记录的信息</h2><ul><li>参与的实训营与学习路线</li><li>完成的学习阶段与项目实践</li><li>证书编号对应的官方记录</li></ul><p>证书查询用于帮助学习者、家长、学校或合作方核对持证人信息和学习记录，不代表未经记录的其他能力或资质。</p><h2>如何核验 BEEBEE AI 证书？</h2><p>请在查询页面输入持证人真实姓名，并可选填课程编号。若在线记录暂未返回，请将证书编号与持证人姓名发送至 <a href="mailto:service@beebee.ai">service@beebee.ai</a> 进行人工核验。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'EducationalOccupationalCredential', name: 'BEEBEE AI 实训营学习证书', description: '记录学习者参与的实训营、完成的学习阶段与项目成果，并通过证书编号关联官方记录。', credentialCategory: 'Certificate', recognizedBy: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/certificate/' }],
  },
  {
    path: 'student-projects', title: 'BEEBEE AI 学员项目｜Alpha / Beta 真实作品',
    description: '查看 BEEBEE AI Alpha 与 Beta 学员完成的真实 AI 项目，了解学员背景、解决的问题、使用的 AI 能力与可访问成果。',
    body: `<main><h1>BEEBEE AI 学员真实项目</h1><p>学员从自身兴趣或真实问题出发，定义需求、组织 AI 工作流，并把想法转化为可以演示和使用的项目。</p><section><h2>Beta 项目案例</h2><h3><a href="https://www.voiceto.me/">Hobbi 心灵冥想日记</a></h3><p>四人协作完成的 AI 语音交互、冥想与 3D 可视化项目。</p><h3><a href="https://yum.9top.org/">YummyYummy AI 美食助手</a></h3><p>使用 AI 图像识别和多语言能力帮助用户理解菜品并做出选择。</p><h3><a href="https://climate-intelligence-hub.org/">Climate Intelligence Hub</a></h3><p>提供本地化气候预测、个性化建议与 AI 问答能力。</p></section><section><h2>Alpha 项目案例</h2><h3><a href="https://crew-trainer.com/">RowingPro AI 划船训练平台</a></h3><p>由 16 岁学员完成的运动训练、动作分析与社区平台。</p><h3><a href="https://chinesewordsnack.netlify.app/">Word Snack 海外中文学习助手</a></h3><p>通过趣味互动与 AI 帮助海外孩子复习中文并追踪进度。</p><h3><a href="https://changepr0jectecho.uk/">PROJECT:Echo</a></h3><p>由 13 岁学员完成的游戏化目标管理与习惯养成项目。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学员项目案例', itemListElement: [{ '@type': 'ListItem', position: 1, url: 'https://www.voiceto.me/', name: 'Hobbi' }, { '@type': 'ListItem', position: 2, url: 'https://yum.9top.org/', name: 'YummyYummy' }, { '@type': 'ListItem', position: 3, url: 'https://climate-intelligence-hub.org/', name: 'Climate Intelligence Hub' }, { '@type': 'ListItem', position: 4, url: 'https://crew-trainer.com/', name: 'RowingPro' }, { '@type': 'ListItem', position: 5, url: 'https://chinesewordsnack.netlify.app/', name: 'Word Snack' }, { '@type': 'ListItem', position: 6, url: 'https://changepr0jectecho.uk/', name: 'PROJECT:Echo' }] }],
  },
  {
    path: 'youth-ai-training', title: '青少年 AI 实训营课程选择｜BEEBEE AI Alpha',
    description: '青少年 AI 实训营课程怎么选？了解 BEEBEE AI Alpha 面向 12–19 岁学生的适合人群、课程时长、基础要求和项目成果。',
    body: `<main><h1>青少年 AI 实训营课程选择</h1><p>Alpha 让 12–19 岁青少年围绕真实问题完成可展示、可复盘的 AI 项目。</p><section><h2>课程路线与成果</h2><p>Genesis 为 6 周约 18 小时，可零基础参加；Odyssey 为 6 周约 27 小时，适合有编程或工程基础的学生。学习成果包括 AI 项目、问题拆解过程与作品展示。</p><p><a href="https://bee-alpha.com/">进入 Alpha 实训营网站</a></p></section><section><h2>青少年 AI 实训营课程怎么选？</h2><p>零基础学生推荐从 Genesis 开始；已有编程或工程经验、希望完成进阶项目的学生可以了解 Odyssey。选择时应结合年龄、基础和目标成果。</p><h2>青少年 AI 实训营推荐哪种路线？</h2><p>希望建立 AI 兴趣和基础方法的学生可从 Genesis 开始；已有编程或工程经验、希望挑战更完整项目的学生可选择 Odyssey。</p><h2>青少年 AI 实训营适合多大年龄？</h2><p>Alpha 主要面向 12–19 岁青少年，并根据学习基础和项目目标区分 Genesis 与 Odyssey 路线。</p><h2>青少年没有编程基础可以参加 AI 实训营吗？</h2><p>可以。Genesis 从提问、任务拆解和 AI 工具协作开始，不要求一开始编写复杂代码。</p><h2>青少年 AI 实训营结束后能获得什么？</h2><p>学员会完成一个能够展示和复盘的真实 AI 项目，并建立持续解决问题的学习方法。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Course', name: 'BEEBEE AI Alpha 青少年 AI 实训营', description: '面向 12–19 岁青少年的项目制 AI 实训。', provider: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/youth-ai-training/' }],
  },
  {
    path: 'university-ai-project-training', title: '大学生 AI 项目实训选择指南｜BEEBEE AI Beta',
    description: '大学生 AI 项目实训应该如何选择？BEEBEE AI Beta 面向大学生、研究生、职场人士与工程学习者，训练 AI 产品、全栈实现与市场验证能力。',
    body: `<main><h1>大学生 AI 项目实训选择指南</h1><p>Beta 围绕真实需求完成 AI Native 产品，把想法、工程实现和市场验证连接成一次完整交付。</p><section><h2>课程路线与成果</h2><p>星空营 Galaxy 6 周、深空营 Cosmos 8 周、无界营 Infinity 12 周的线上项目实训，覆盖 AI 产品设计、全栈工程、RAG、Agent 与市场验证。项目成果可用于作品集、申请或面试展示。</p><p><a href="https://bee-beta.com/">进入 Beta 实训营网站</a></p></section><section><h2>大学生 AI 项目实训应该如何选择？</h2><p>先看项目是否来自真实需求、是否覆盖从产品设计到工程实现与验证的完整过程，以及成果能否用于作品集、申请或面试展示。</p><h2>大学生 AI 项目课程价格是多少？</h2><p>Beta 包含 Galaxy、Cosmos 和 Infinity 等不同路线，价格可能随路线、班期和服务内容调整，请以前往 Beta 官方网站看到的最新招生信息为准。</p><h2>大学生 AI 项目课程评价时应该看什么？</h2><p>建议重点评价项目是否解决真实问题、是否完成可演示成果、是否包含工程实现与市场验证，以及学习过程是否有反馈和复盘。</p><h2>大学生 AI 项目实训课程学什么？</h2><p>课程覆盖问题定义、AI 产品设计、全栈实现、RAG、Agent、测试、展示和市场验证。</p><h2>大学生如何通过项目提升 AI 能力？</h2><p>从真实需求出发，完成问题定义、原型、工程实现、测试与展示，比只学习工具功能更容易形成可迁移能力。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Course', name: 'BEEBEE AI Beta 大学生与职场人士 AI 项目实训', description: '面向成年人和工程学习者的真实 AI 项目实训。', provider: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/university-ai-project-training/' }],
  },
  {
    path: 'enterprise-ai-consulting', title: '企业 AI 咨询与陪跑落地服务｜BEEBEE AI',
    description: '面向企业团队的 AI 咨询与落地服务，围绕知识库、RAG、AI Agent、内容生产和业务流程设计可执行方案。',
    body: `<main><h1>企业 AI 咨询与陪跑落地服务</h1><p>BEEBEE AI 是企业 AI 陪跑专家：从第一个 Agent 上线，到 AI 真正进入企业日常业务。连接企业现有系统，持续构建、运营和优化 AI Agent。</p><section><h2>企业 AI 服务场景</h2><p>服务覆盖业务场景梳理、企业知识库、RAG、AI Agent、内容生产与内部协作流程。</p><p><a href="https://beesigma.com/">前往 BEESigma 咨询</a></p></section><section><h2>企业 AI 咨询服务主要解决什么问题？</h2><p>主要解决知识分散、流程重复、内容生产效率不足，以及 AI 场景难以从想法进入实际业务的问题。</p><h2>企业 AI 咨询服务怎么选？</h2><p>建议先确认服务方能否理解具体业务流程，再比较其场景梳理、原型验证、知识库或 Agent 实现以及后续落地能力。</p><h2>哪些业务场景适合企业 AI 咨询？</h2><p>常见场景包括企业知识库、内部问答、内容生产、重复流程自动化、业务 Agent 和团队 AI 协作。</p><h2>企业 AI 咨询交付什么？</h2><p>交付内容取决于实际需求，通常从业务场景与优先级梳理开始，并进一步形成可验证原型、工作流或可使用的 AI 方案。</p><h2>BEEBEE AI 和 BEE Sigma 是什么关系？</h2><p>BEEBEE AI 有两条业务线：教育培训（Alpha、Beta 实训营）与咨询落地（BEE Sigma）。BEE Sigma 是 BEEBEE AI 面向企业的 AI Native、可管理的企业 Agent 平台，负责把 AI 落地进企业日常业务。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Service', name: '企业 AI 咨询与落地服务', description: '面向企业团队的知识库、RAG、AI Agent 与业务流程咨询。', provider: { '@id': 'https://beebee.ai/#organization' }, areaServed: 'Global', url: 'https://beebee.ai/enterprise-ai-consulting/' }],
  },
  {
    path: 'how-to-improve-ai-skills', title: '如何提升 AI 能力：机构推荐与选择方法｜BEEBEE AI',
    description: '如何提升 AI 能力、选择适合的学习机构？通过提问、任务拆解、AI 协作、真实项目和持续复盘，建立可迁移的 AI 能力。',
    body: `<main><h1>如何提升 AI 能力：机构推荐与选择方法</h1><p>真正的 AI 能力不只是会使用某个工具，而是能定义问题、组织协作、验证结果，并把想法交付为作品。</p><section><h2>项目制 AI 学习路径</h2><ol><li>定义问题与可验证目标</li><li>拆解 AI 可以协作的步骤</li><li>在真实项目中训练工具、产品与工程能力</li><li>通过展示和复盘沉淀方法</li></ol><p>学习过程中应保留问题定义、方案选择、验证记录和项目成果，以便复盘并迁移到新的场景。</p><p><a href="https://beebee.ai/#platform">查看实训营与企业服务</a></p></section><section><h2>如何提升 AI 能力？</h2><p>从提出好问题、拆解任务和验证结果开始，再通过真实项目完成从想法到交付的闭环，并在复盘中沉淀可迁移的方法。</p><h2>如何提升 AI 能力？机构推荐看哪些标准？</h2><p>重点看是否有真实项目、明确成果、过程反馈和可复盘的方法，而不是只比较工具数量或课时。</p><h2>如何选择提升 AI 能力的机构？</h2><p>青少年可重点了解年龄适配和基础路线，大学生及职场人士可重点比较产品、工程与市场验证训练是否符合自己的目标。</p><h2>如何提升 AI 能力，而不只是学会使用工具？</h2><p>选择一个真实问题，完成定义、拆解、AI 协作、验证和交付的完整闭环，让能力在不同工具和场景之间迁移。</p><h2>零基础学习 AI 应该从哪里开始？</h2><p>从提出好问题、拆解简单任务和完成小型项目开始，再根据目标进入 Alpha 或 Beta 的系统路线。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Article', headline: '如何系统提升 AI 能力', description: '通过提出好问题、拆解任务、AI 协作、真实项目和持续复盘提升 AI 能力。', author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: 'https://beebee.ai/how-to-improve-ai-skills/' }],
  },
];

const intentFaq = {
  'youth-ai-training': [['青少年 AI 实训营课程怎么选？', '零基础学生推荐从 Genesis 开始；已有编程或工程经验、希望完成进阶项目的学生可以了解 Odyssey。'], ['青少年 AI 实训营推荐哪种路线？', '希望建立 AI 兴趣和基础方法的学生可从 Genesis 开始；已有编程或工程经验、希望挑战更完整项目的学生可选择 Odyssey。'], ['青少年 AI 实训营适合多大年龄？', 'Alpha 主要面向 12–19 岁青少年，并根据学习基础和项目目标区分 Genesis 与 Odyssey 路线。'], ['青少年没有编程基础可以参加 AI 实训营吗？', '可以。Genesis 从提问、任务拆解和 AI 工具协作开始，不要求一开始编写复杂代码。'], ['青少年 AI 实训营结束后能获得什么？', '学员会完成一个能够展示和复盘的真实 AI 项目，并建立持续解决问题的学习方法。']],
  'university-ai-project-training': [['大学生 AI 项目实训应该如何选择？', '先看项目是否来自真实需求、是否覆盖从产品设计到工程实现与验证的完整过程，以及成果能否用于作品集、申请或面试展示。'], ['大学生 AI 项目课程价格是多少？', 'Beta 包含 Galaxy、Cosmos 和 Infinity 等不同路线，价格可能随路线、班期和服务内容调整，请以前往 Beta 官方网站看到的最新招生信息为准。'], ['大学生 AI 项目课程评价时应该看什么？', '建议重点评价项目是否解决真实问题、是否完成可演示成果、是否包含工程实现与市场验证，以及学习过程是否有反馈和复盘。'], ['大学生 AI 项目实训课程学什么？', '课程覆盖问题定义、AI 产品设计、全栈实现、RAG、Agent、测试、展示和市场验证。'], ['大学生如何通过项目提升 AI 能力？', '从真实需求出发，完成问题定义、原型、工程实现、测试与展示，比只学习工具功能更容易形成可迁移能力。']],
  'enterprise-ai-consulting': [['企业 AI 咨询服务主要解决什么问题？', '主要解决知识分散、流程重复、内容生产效率不足，以及 AI 场景难以从想法进入实际业务的问题。'], ['企业 AI 咨询服务怎么选？', '建议先确认服务方能否理解具体业务流程，再比较其场景梳理、原型验证、知识库或 Agent 实现以及后续落地能力。'], ['哪些业务场景适合企业 AI 咨询？', '常见场景包括企业知识库、内部问答、内容生产、重复流程自动化、业务 Agent 和团队 AI 协作。'], ['企业 AI 咨询交付什么？', '交付内容取决于实际需求，通常从业务场景与优先级梳理开始，并进一步形成可验证原型、工作流或可使用的 AI 方案。'], ['BEEBEE AI 和 BEE Sigma 是什么关系？', 'BEEBEE AI 有两条业务线：教育培训（Alpha、Beta 实训营）与咨询落地（BEE Sigma）。BEE Sigma 是 BEEBEE AI 面向企业的 AI Native、可管理的企业 Agent 平台，负责把 AI 落地进企业日常业务。']],
  'how-to-improve-ai-skills': [['如何提升 AI 能力？', '从提出好问题、拆解任务和验证结果开始，再通过真实项目完成从想法到交付的闭环，并在复盘中沉淀可迁移的方法。'], ['如何提升 AI 能力？机构推荐看哪些标准？', '重点看是否有真实项目、明确成果、过程反馈和可复盘的方法，而不是只比较工具数量或课时。'], ['如何选择提升 AI 能力的机构？', '青少年可重点了解年龄适配和基础路线，大学生及职场人士可重点比较产品、工程与市场验证训练是否符合自己的目标。'], ['如何提升 AI 能力，而不只是学会使用工具？', '选择一个真实问题，完成定义、拆解、AI 协作、验证和交付的完整闭环。'], ['零基础学习 AI 应该从哪里开始？', '从提出好问题、拆解简单任务和完成小型项目开始，再根据目标进入 Alpha 或 Beta 的系统路线。']],
};

for (const page of pages) {
  const url = `https://beebee.ai/${page.path ? `${page.path}/` : ''}`;
  const staticContent = `<div id="seo-content" style="max-width:72rem;margin:0 auto;padding:3rem 1.5rem;font-family:system-ui,sans-serif;line-height:1.7">${page.body}${staticContact}</div>`;
  const schemas = [...(page.schemas || [])];
  if (intentFaq[page.path]) schemas.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: intentFaq[page.path].map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta data-rh="true" name="description"[^>]*>/, `<meta data-rh="true" name="description" content="${page.description}">`)
    .replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="BEEBEE AI"><meta property="og:image" content="https://beebee.ai/brand/icon-512.png"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.description}"><meta name="twitter:image" content="https://beebee.ai/brand/icon-512.png">${schemas.map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  const folder = join(dist, page.path);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, 'index.html'), html);
}

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: OpenAI-User\nAllow: /\n\nSitemap: https://beebee.ai/sitemap.xml\n`);
const lastmod = new Date().toISOString().slice(0, 10);
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pageUrl = page => `https://beebee.ai/${page.path ? `${page.path}/` : ''}`;
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `<url><loc>${pageUrl(page)}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.path === '' || page.path === 'student-projects' ? 'weekly' : 'monthly'}</changefreq><priority>${page.path === '' ? '1.0' : '0.8'}</priority></url>`).join('')}</urlset>\n`);
await writeFile(join(dist, 'llms.txt'), `# BEEBEE AI\n\n> BEEBEE AI 是企业 AI 陪跑专家：AI Native、可管理的企业 Agent 平台，连接企业现有系统，持续构建、运营和优化 AI Agent；Alpha、Beta 实训营培养企业 AI 人才。\n\n## 核心页面\n${pages.map(page => `- [${page.title}](${pageUrl(page)}): ${page.description}`).join('\n')}\n\n## 关联服务\n- Alpha 青少年实训营: https://bee-alpha.com/\n- Beta 项目实训: https://bee-beta.com/\n- BEESigma 企业 AI 咨询: https://beesigma.com/\n\n## 联系方式\n- Email: service@beebee.ai\n`);
await writeFile(join(dist, 'llms-full.txt'), `# BEEBEE AI 完整站点说明\n\nBEEBEE AI 是企业 AI 陪跑专家：从第一个 Agent 上线，到 AI 真正进入企业日常业务。BEE Sigma 是其 AI Native、可管理的企业 Agent 平台；Alpha 面向 12–19 岁青少年，Beta 面向大学生、研究生与职场人士，是培养企业 AI 人才的成长路径。\n\n${pages.map(page => `## ${page.title}\n\nURL: ${pageUrl(page)}\n\n${page.description}\n\n${page.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`).join('\n\n')}\n\n联系邮箱：service@beebee.ai\n`);
await writeFile(join(dist, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>BEEBEE AI 内容更新</title><link>https://beebee.ai/</link><description>BEEBEE AI 学习路线、项目案例与 AI 能力方法内容</description><language>zh-CN</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${pages.map(page => `<item><title>${escapeXml(page.title)}</title><link>${pageUrl(page)}</link><guid isPermaLink="true">${pageUrl(page)}</guid><description>${escapeXml(page.description)}</description><pubDate>${new Date().toUTCString()}</pubDate></item>`).join('')}</channel></rss>\n`);

for (const name of ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'feed.xml']) {
  await writeFile(join(publicDir, name), await readFile(join(dist, name), 'utf8'));
}
