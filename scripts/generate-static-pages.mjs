import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const publicDir = new URL('../public/', import.meta.url).pathname;
const shell = await readFile(join(dist, 'index.html'), 'utf8');
await mkdir(publicDir, { recursive: true });
const faqItems = [
  ['BEEBEE AI 是什么？', 'BEEBEE AI 是一个 AI 学习力与项目制实训平台，帮助学习者通过真实项目掌握提问、AI 协作、产品实践和问题解决能力。'],
  ['我应该选择 ALPHA、BETA 还是企业 AI 服务？', '如果你是 12–19 岁学生，优先了解 ALPHA；如果你是大学生、职场人士或工程学习者，优先了解 BETA；如果你代表企业，希望把 AI 用到具体业务流程中，优先咨询企业 AI 服务。'],
  ['ALPHA 实训营适合什么样的学生？', 'ALPHA 适合希望提升 AI 兴趣、创造力、表达能力和项目实践能力的青少年。零基础学生可以从入门路线开始，有编程或工程基础的学生可以选择更进阶的项目路线。'],
  ['BETA 实训营适合什么样的人？', 'BETA 适合希望通过真实项目提升 AI 产品能力、工程实现能力和市场验证能力的大学生、研究生、职场人士和工程学习者。'],
  ['没有编程基础可以参加吗？', '可以参加入门阶段。BEEBEE AI 不要求学习者一开始就写复杂代码，而是先训练如何提出好问题、拆解任务、使用 AI 工具并完成可展示的项目成果。'],
  ['BEEBEE AI 的学习方式和普通 AI 课程有什么不同？', '普通 AI 课程更常见的是讲工具和功能，BEEBEE AI 更强调真实任务、项目协作和结果交付。学习者不是只学会操作 AI，而是学会用 AI 把一个想法做成作品。'],
  ['学习结束后会产出什么？', '学习者会完成一个可以展示、可以使用、可以复盘的 AI 项目，可能是学习应用、内容产品、智能问答系统、数据分析工具或垂直场景原型。'],
  ['学员项目可以用于作品集、申请或面试展示吗？', '可以。BEEBEE AI 强调真实项目和可展示成果，完成度较高的项目可以作为作品集、申请材料、面试展示或个人成长记录的一部分。'],
  ['企业 AI 服务主要解决什么问题？', '企业 AI 服务面向希望提升效率或探索 AI 落地的团队，重点是结合具体业务流程，设计 AI 工作流、知识库、Agent、内容生产或内部协作提效方案。'],
  ['如何咨询、报名或核验证书？', '可以通过官网联系入口提交咨询需求。如果是报名咨询，建议说明年龄阶段、学习基础和目标成果；如果是证书核验，建议提供证书编号和持证人姓名。'],
];
const faqHtml = `<section><h2>BEEBEE AI 常见问题</h2>${faqItems.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join('')}</section>`;
const staticContact = `<footer><h2>BEEBEE AI 联系方式</h2><p>咨询邮箱：<a href="mailto:service@beebee.ai">service@beebee.ai</a></p><address>中国四川省成都市高新区成都高新孵化园 1 号楼 A 座<br>B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand</address></footer>`;
const homeSchemas = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://beebee.ai/#organization', name: 'BEEBEE AI', url: 'https://beebee.ai/', email: 'service@beebee.ai', logo: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png', sameAs: ['https://bee-alpha.com/', 'https://bee-beta.com/', 'https://beesigma.com/'], description: 'AI 学习力、项目制实训与企业 AI 产品品牌。', contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'service@beebee.ai', availableLanguage: ['Chinese', 'English'] }, knowsAbout: ['AI 学习力', '青少年 AI 实训', 'AI 项目制学习', 'AI 产品开发', 'RAG', 'AI Agent', '企业知识管理'], address: [{ '@type': 'PostalAddress', streetAddress: 'B:Hive, 74 Taharoto Road, Smales Farm, Takapuna', addressLocality: 'Auckland', addressCountry: 'NZ' }, { '@type': 'PostalAddress', streetAddress: '成都高新孵化园 1 号楼 A 座', addressLocality: '成都', addressRegion: '四川', addressCountry: 'CN' }] },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://beebee.ai/#website', url: 'https://beebee.ai/', name: 'BEEBEE AI', publisher: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'WebApplication', '@id': 'https://learn.beebee.ai/#app', name: 'BEEBEE AI 学习平台', url: 'https://learn.beebee.ai/', applicationCategory: 'EducationalApplication', operatingSystem: 'All', publisher: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: '周品', alternateName: 'Pin Zhou', jobTitle: 'BEEBEE AI 创始人 / 创业导师', worksFor: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: 'Vito Liu', jobTitle: '高级 AI 工程师', worksFor: { '@id': 'https://beebee.ai/#organization' }, alumniOf: { '@type': 'CollegeOrUniversity', name: 'McGill University' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: 'Fred Chi', alternateName: '池老师', jobTitle: '首席程序员', worksFor: { '@id': 'https://beebee.ai/#organization' } },
  { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-alpha.com/#course', name: 'BEEBEE AI ALPHA 实训营', url: 'https://bee-alpha.com/', description: '面向青少年的 AI 教育训练营，通过真实任务学习 AI 工具与工作流搭建。', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '12–19 岁青少年' }, teaches: ['AI 工作流', '提问与任务拆解', 'AI 产品实践'], courseMode: 'Online' },
  { '@context': 'https://schema.org', '@type': 'Course', '@id': 'https://bee-beta.com/#course', name: 'BEEBEE AI BETA 实训营', url: 'https://bee-beta.com/', description: '通过真实项目训练 AI 产品、全栈工程与市场验证能力。', provider: { '@id': 'https://beebee.ai/#organization' }, audience: { '@type': 'Audience', audienceType: '大学生、职场人士与工程人才' }, teaches: ['AI 产品开发', '全栈工程', 'RAG 与 Agent', '市场验证'], courseMode: 'Online' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
];
const pages = [
  {
    path: '', title: 'BEEBEE AI｜AI 学习力平台与项目制实训营',
    description: 'BEEBEE AI 提供 AI 学习力训练、ALPHA/BETA 项目制实训营、学习平台与企业 AI 咨询服务，帮助青少年、职场人士和企业团队掌握 AI 协作、产品实践与知识管理能力。',
    body: `<main><h1>BEEBEE AI：用 AI 进化学习力</h1><p>BEEBEE AI 是面向未来人才的 AI 学习力平台，通过实训营、项目实践与学习平台培养提问、创造、协作和产品落地能力。</p><nav aria-label="按需求选择"><a href="/youth-ai-training/">青少年 AI 实训营课程</a> · <a href="/university-ai-project-training/">大学生 AI 项目实训选择</a> · <a href="/enterprise-ai-consulting/">企业 AI 咨询服务</a> · <a href="/how-to-improve-ai-skills/">如何提升 AI 能力：机构选择</a> · <a href="/differentiation/">AI 学习平台推荐与比较</a></nav><section><h2>品牌与业务架构</h2><p>BEEBEE AI 是 AI 学习力与项目制实训品牌，面向青少年、职场人士与企业团队提供 AI 能力训练；2Brain 是其企业知识管理与智能体产品，BEE Sigma 是面向企业客户的 AI 咨询与落地服务品牌。</p></section><section><h2>两条 AI 学习路线</h2><h3><a href="https://bee-alpha.com/">ALPHA 实训营</a></h3><p>面向青少年的 AI 教育训练营。启航营 Genesis 为 6 周约 18 小时的零基础线上路径；远航营 Odyssey 为 6 周约 27 小时的进阶线上路径，要求一定编程或工程经验。</p><h3><a href="https://bee-beta.com/">BETA 实训营</a></h3><p>面向 18 岁以上大学生、研究生和工程学习者。Galaxy、Cosmos、Infinity 分别为约 15、24、36 小时的线上项目实训，逐步覆盖 AI 产品、全栈工程和市场验证。</p></section><section><h2>真实项目与学习成果</h2><p>公开案例包括 ALPHA 的 Lumina Academy、RowingPro、AI 高尔夫成绩分析，以及 BETA 的 Hobbi、YummyYummy、Climate Intelligence Hub。</p></section><section><h2>核心导师与团队</h2><p>周品是 BEEBEE AI 创始人，拥有 20 年以上 IT 与互联网产品运营创业经验和 8 年 AI 实战经验；Vito Liu 是 BEEBEE AI 核心开发工程师，拥有麦吉尔大学计算机科学与数学双学位，专注 RAG 系统和 LLM 应用开发；池老师（Fred Chi）是蜜蜂时代首席程序员，拥有 25 年技术经验，擅长私有模型部署、分布式系统架构和高性能数据处理。</p></section>${faqHtml}</main>`,
    schemas: homeSchemas,
  },
  {
    path: 'differentiation', title: 'AI 学习平台推荐与比较｜BEEBEE AI 项目制学习方法',
    description: 'AI 学习平台推荐如何选择？比较真实项目、提问训练、任务拆解、过程反馈与成果展示，了解 BEEBEE AI 的项目制学习方法。',
    body: `<main><h1>BEEBEE AI 的学习方法</h1><p>BEEBEE AI 以“人想 + AI 做”为实践原则，通过项目制学习把 AI 理念转化为可展示的真实成果。</p><section><h2>AI 学习平台推荐如何选择？</h2><p>建议比较四点：是否围绕真实问题学习、是否要求完成可展示项目、是否训练提问与任务拆解、是否提供过程反馈与复盘。BEEBEE AI 的重点不是堆叠工具功能，而是帮助学习者把想法交付为真实成果。</p></section><section><h2>学习力公式与提问能力</h2><p>学习不只获取答案，更需要定义问题、提出好问题、验证结果并持续复盘。学习力公式强调问题质量、理解深度和实践过程之间的联系。</p></section><section><h2>道、法、术、器学习体系</h2><p>从认知原则、解决方法到实践技能和 AI 工具，形成完整学习闭环，避免把短期工具操作误认为长期 AI 能力。</p></section><section><h2>创造力、竞争力与领导力</h2><p>针对不同学习者，通过真实项目和协作过程发展面向 AI 时代的创造力、竞争力与领导力。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'AI 学习平台推荐与比较：BEEBEE AI 项目制学习方法', description: '比较 AI 学习平台的项目成果、提问训练、任务拆解和过程反馈。', author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: 'https://beebee.ai/differentiation/' }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'AI 学习平台推荐如何选择？', acceptedAnswer: { '@type': 'Answer', text: '建议比较是否围绕真实问题学习、是否要求完成可展示项目、是否训练提问与任务拆解，以及是否提供过程反馈与复盘。' } }] }],
  },
  {
    path: 'certificate', title: 'BEEBEE AI 证书查询｜学习成果与能力证明',
    description: '查询并了解 BEEBEE AI 实训营学习证书。证书用于记录学习者完成的课程与项目成果，具体信息以证书记录为准。',
    body: `<main><h1>BEEBEE AI 证书查询</h1><p>BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。查询结果以证书编号关联的官方记录为准。</p><section><h2>证书记录的信息</h2><ul><li>参与的实训营与学习路线</li><li>完成的学习阶段与项目实践</li><li>证书编号对应的官方记录</li></ul><p>证书查询用于帮助学习者、家长、学校或合作方核对持证人信息和学习记录，不代表未经记录的其他能力或资质。</p><h2>如何核验 BEEBEE AI 证书？</h2><p>请在查询页面输入持证人真实姓名，并可选填课程编号。若在线记录暂未返回，请将证书编号与持证人姓名发送至 <a href="mailto:service@beebee.ai">service@beebee.ai</a> 进行人工核验。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'EducationalOccupationalCredential', name: 'BEEBEE AI 实训营学习证书', description: '记录学习者参与的实训营、完成的学习阶段与项目成果，并通过证书编号关联官方记录。', credentialCategory: 'Certificate', recognizedBy: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/certificate/' }],
  },
  {
    path: 'student-projects', title: 'BEEBEE AI 学员项目｜ALPHA / BETA 真实作品',
    description: '查看 BEEBEE AI ALPHA 与 BETA 学员完成的真实 AI 项目，了解学员背景、解决的问题、使用的 AI 能力与可访问成果。',
    body: `<main><h1>BEEBEE AI 学员真实项目</h1><p>学员从自身兴趣或真实问题出发，定义需求、组织 AI 工作流，并把想法转化为可以演示和使用的项目。</p><section><h2>BETA 项目案例</h2><h3><a href="https://www.voiceto.me/">Hobbi 心灵冥想日记</a></h3><p>四人协作完成的 AI 语音交互、冥想与 3D 可视化项目。</p><h3><a href="https://yum.9top.org/">YummyYummy AI 美食助手</a></h3><p>使用 AI 图像识别和多语言能力帮助用户理解菜品并做出选择。</p><h3><a href="https://climate-intelligence-hub.org/">Climate Intelligence Hub</a></h3><p>提供本地化气候预测、个性化建议与 AI 问答能力。</p></section><section><h2>ALPHA 项目案例</h2><h3><a href="https://crew-trainer.com/">RowingPro AI 划船训练平台</a></h3><p>由 16 岁学员完成的运动训练、动作分析与社区平台。</p><h3><a href="https://chinesewordsnack.netlify.app/">Word Snack 海外中文学习助手</a></h3><p>通过趣味互动与 AI 帮助海外孩子复习中文并追踪进度。</p><h3><a href="https://changepr0jectecho.uk/">PROJECT:Echo</a></h3><p>由 13 岁学员完成的游戏化目标管理与习惯养成项目。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学员项目案例', itemListElement: [{ '@type': 'ListItem', position: 1, url: 'https://www.voiceto.me/', name: 'Hobbi' }, { '@type': 'ListItem', position: 2, url: 'https://yum.9top.org/', name: 'YummyYummy' }, { '@type': 'ListItem', position: 3, url: 'https://climate-intelligence-hub.org/', name: 'Climate Intelligence Hub' }, { '@type': 'ListItem', position: 4, url: 'https://crew-trainer.com/', name: 'RowingPro' }, { '@type': 'ListItem', position: 5, url: 'https://chinesewordsnack.netlify.app/', name: 'Word Snack' }, { '@type': 'ListItem', position: 6, url: 'https://changepr0jectecho.uk/', name: 'PROJECT:Echo' }] }],
  },
  {
    path: 'youth-ai-training', title: '青少年 AI 实训营课程选择｜BEEBEE AI ALPHA',
    description: '青少年 AI 实训营课程怎么选？了解 BEEBEE AI ALPHA 面向 12–19 岁学生的适合人群、课程时长、基础要求和项目成果。',
    body: `<main><h1>青少年 AI 实训营课程选择</h1><p>ALPHA 让 12–19 岁青少年围绕真实问题完成可展示、可复盘的 AI 项目。</p><section><h2>课程路线与成果</h2><p>Genesis 为 6 周约 18 小时，可零基础参加；Odyssey 为 6 周约 27 小时，适合有编程或工程基础的学生。学习成果包括 AI 项目、问题拆解过程与作品展示。</p><p><a href="https://bee-alpha.com/">进入 ALPHA 实训营网站</a></p></section><section><h2>青少年 AI 实训营课程怎么选？</h2><p>零基础学生推荐从 Genesis 开始；已有编程或工程经验、希望完成进阶项目的学生可以了解 Odyssey。选择时应结合年龄、基础和目标成果。</p><h2>青少年没有编程基础可以参加 AI 实训营吗？</h2><p>可以。Genesis 从提问、任务拆解和 AI 工具协作开始，不要求一开始编写复杂代码。</p><h2>青少年 AI 实训营结束后能获得什么？</h2><p>学员会完成一个能够展示和复盘的真实 AI 项目，并建立持续解决问题的学习方法。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Course', name: 'BEEBEE AI ALPHA 青少年 AI 实训营', description: '面向 12–19 岁青少年的项目制 AI 实训。', provider: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/youth-ai-training/' }],
  },
  {
    path: 'university-ai-project-training', title: '大学生 AI 项目实训选择指南｜BEEBEE AI BETA',
    description: '大学生 AI 项目实训应该如何选择？BEEBEE AI BETA 面向大学生、研究生、职场人士与工程学习者，训练 AI 产品、全栈实现与市场验证能力。',
    body: `<main><h1>大学生 AI 项目实训选择指南</h1><p>BETA 围绕真实需求完成 AI Native 产品，把想法、工程实现和市场验证连接成一次完整交付。</p><section><h2>课程路线与成果</h2><p>Galaxy、Cosmos、Infinity 分别约 15、24、36 小时，覆盖 AI 产品设计、全栈工程、RAG、Agent 与市场验证。项目成果可用于作品集、申请或面试展示。</p><p><a href="https://bee-beta.com/">进入 BETA 实训营网站</a></p></section><section><h2>大学生 AI 项目实训应该如何选择？</h2><p>先看项目是否来自真实需求、是否覆盖从产品设计到工程实现与验证的完整过程，以及成果能否用于作品集、申请或面试展示。</p><h2>大学生 AI 项目实训课程学什么？</h2><p>课程覆盖问题定义、AI 产品设计、全栈实现、RAG、Agent、测试、展示和市场验证。</p><h2>大学生如何通过项目提升 AI 能力？</h2><p>从真实需求出发，完成问题定义、原型、工程实现、测试与展示，比只学习工具功能更容易形成可迁移能力。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Course', name: 'BEEBEE AI BETA 大学生与职场人士 AI 项目实训', description: '面向成年人和工程学习者的真实 AI 项目实训。', provider: { '@id': 'https://beebee.ai/#organization' }, url: 'https://beebee.ai/university-ai-project-training/' }],
  },
  {
    path: 'enterprise-ai-consulting', title: '企业 AI 咨询服务｜BEEBEE AI × BEESigma',
    description: '面向企业团队的 AI 咨询与落地服务，围绕知识库、RAG、AI Agent、内容生产和业务流程设计可执行方案。',
    body: `<main><h1>企业 AI 咨询与落地服务</h1><p>BEEBEE AI 聚焦学习力与项目制实训；BEESigma 面向企业客户，提供 AI 咨询与业务落地服务。</p><section><h2>企业 AI 服务场景</h2><p>服务覆盖业务场景梳理、企业知识库、RAG、AI Agent、内容生产与内部协作流程。</p><p><a href="https://beesigma.com/">前往 BEESigma 咨询</a></p></section><section><h2>企业 AI 咨询服务主要解决什么问题？</h2><p>主要解决知识分散、流程重复、内容生产效率不足，以及 AI 场景难以从想法进入实际业务的问题。</p><h2>2Brain、BEESigma 和 BEEBEE AI 是什么关系？</h2><p>2Brain 是企业知识管理与智能体产品，BEESigma 是企业 AI 咨询与落地服务品牌，BEEBEE AI 是 AI 学习力与项目制实训品牌。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Service', name: '企业 AI 咨询与落地服务', description: '面向企业团队的知识库、RAG、AI Agent 与业务流程咨询。', provider: { '@id': 'https://beebee.ai/#organization' }, areaServed: 'Global', url: 'https://beebee.ai/enterprise-ai-consulting/' }],
  },
  {
    path: 'how-to-improve-ai-skills', title: '如何提升 AI 能力：机构与项目制学习方法｜BEEBEE AI',
    description: '如何提升 AI 能力及选择学习机构：通过提出好问题、拆解任务、AI 协作、真实项目和持续复盘，建立可迁移的 AI 能力。',
    body: `<main><h1>如何提升 AI 能力：机构与项目制学习方法</h1><p>真正的 AI 能力不只是会使用某个工具，而是能定义问题、组织协作、验证结果，并把想法交付为作品。</p><section><h2>项目制 AI 学习路径</h2><ol><li>定义问题与可验证目标</li><li>拆解 AI 可以协作的步骤</li><li>在真实项目中训练工具、产品与工程能力</li><li>通过展示和复盘沉淀方法</li></ol><p>学习过程中应保留问题定义、方案选择、验证记录和项目成果，以便复盘并迁移到新的场景。</p><p><a href="https://beebee.ai/#platform">查看实训营与企业服务</a></p></section><section><h2>如何选择提升 AI 能力的机构？</h2><p>重点比较是否有真实项目、明确成果、过程反馈和可复盘的方法，而不是只看工具数量或课时。青少年可了解 ALPHA，大学生和职场人士可了解 BETA。</p><h2>如何提升 AI 能力，而不只是学会使用工具？</h2><p>选择一个真实问题，完成定义、拆解、AI 协作、验证和交付的完整闭环，让能力在不同工具和场景之间迁移。</p><h2>零基础学习 AI 应该从哪里开始？</h2><p>从提出好问题、拆解简单任务和完成小型项目开始，再根据目标进入 ALPHA 或 BETA 的系统路线。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Article', headline: '如何系统提升 AI 能力', description: '通过提出好问题、拆解任务、AI 协作、真实项目和持续复盘提升 AI 能力。', author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: 'https://beebee.ai/how-to-improve-ai-skills/' }],
  },
];

const intentFaq = {
  'youth-ai-training': [['青少年 AI 实训营课程怎么选？', '零基础学生推荐从 Genesis 开始；已有编程或工程经验、希望完成进阶项目的学生可以了解 Odyssey。'], ['青少年没有编程基础可以参加 AI 实训营吗？', '可以。Genesis 从提问、任务拆解和 AI 工具协作开始，不要求一开始编写复杂代码。'], ['青少年 AI 实训营结束后能获得什么？', '学员会完成一个能够展示和复盘的真实 AI 项目，并建立持续解决问题的学习方法。']],
  'university-ai-project-training': [['大学生 AI 项目实训应该如何选择？', '先看项目是否来自真实需求、是否覆盖从产品设计到工程实现与验证的完整过程，以及成果能否用于作品集、申请或面试展示。'], ['大学生 AI 项目实训课程学什么？', '课程覆盖问题定义、AI 产品设计、全栈实现、RAG、Agent、测试、展示和市场验证。'], ['大学生如何通过项目提升 AI 能力？', '从真实需求出发，完成问题定义、原型、工程实现、测试与展示，比只学习工具功能更容易形成可迁移能力。']],
  'enterprise-ai-consulting': [['企业 AI 咨询服务主要解决什么问题？', '主要解决知识分散、流程重复、内容生产效率不足，以及 AI 场景难以从想法进入实际业务的问题。'], ['2Brain、BEESigma 和 BEEBEE AI 是什么关系？', '2Brain 是企业知识管理与智能体产品，BEESigma 是企业 AI 咨询与落地服务品牌，BEEBEE AI 是 AI 学习力与项目制实训品牌。']],
  'how-to-improve-ai-skills': [['如何选择提升 AI 能力的机构？', '重点比较是否有真实项目、明确成果、过程反馈和可复盘的方法，而不是只看工具数量或课时。'], ['如何提升 AI 能力，而不只是学会使用工具？', '选择一个真实问题，完成定义、拆解、AI 协作、验证和交付的完整闭环。'], ['零基础学习 AI 应该从哪里开始？', '从提出好问题、拆解简单任务和完成小型项目开始，再根据目标进入 ALPHA 或 BETA 的系统路线。']],
};

for (const page of pages) {
  const url = `https://beebee.ai/${page.path ? `${page.path}/` : ''}`;
  const staticContent = `<div id="seo-content" style="max-width:72rem;margin:0 auto;padding:3rem 1.5rem;font-family:system-ui,sans-serif;line-height:1.7">${page.body}${staticContact}</div>`;
  const schemas = [...(page.schemas || [])];
  if (intentFaq[page.path]) schemas.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: intentFaq[page.path].map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta data-rh="true" name="description"[^>]*>/, `<meta data-rh="true" name="description" content="${page.description}">`)
    .replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="BEEBEE AI"><meta property="og:image" content="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.description}"><meta name="twitter:image" content="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png">${schemas.map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`)
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
await writeFile(join(dist, 'llms.txt'), `# BEEBEE AI\n\n> BEEBEE AI 是 AI 学习力与项目制实训平台，面向青少年、大学生、职场人士与企业团队。\n\n## 核心页面\n${pages.map(page => `- [${page.title}](${pageUrl(page)}): ${page.description}`).join('\n')}\n\n## 关联服务\n- ALPHA 青少年实训营: https://bee-alpha.com/\n- BETA 项目实训: https://bee-beta.com/\n- BEESigma 企业 AI 咨询: https://beesigma.com/\n\n## 联系方式\n- Email: service@beebee.ai\n`);
await writeFile(join(dist, 'llms-full.txt'), `# BEEBEE AI 完整站点说明\n\nBEEBEE AI 通过真实项目训练提问、AI 协作、产品实践和问题解决能力。ALPHA 面向 12–19 岁青少年；BETA 面向大学生、研究生、职场人士与工程学习者；BEESigma 面向企业客户提供 AI 咨询与落地服务。\n\n${pages.map(page => `## ${page.title}\n\nURL: ${pageUrl(page)}\n\n${page.description}\n\n${page.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`).join('\n\n')}\n\n联系邮箱：service@beebee.ai\n`);
await writeFile(join(dist, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>BEEBEE AI 内容更新</title><link>https://beebee.ai/</link><description>BEEBEE AI 学习路线、项目案例与 AI 能力方法内容</description><language>zh-CN</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${pages.map(page => `<item><title>${escapeXml(page.title)}</title><link>${pageUrl(page)}</link><guid isPermaLink="true">${pageUrl(page)}</guid><description>${escapeXml(page.description)}</description><pubDate>${new Date().toUTCString()}</pubDate></item>`).join('')}</channel></rss>\n`);

for (const name of ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'feed.xml']) {
  await writeFile(join(publicDir, name), await readFile(join(dist, name), 'utf8'));
}
