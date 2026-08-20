import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const shell = await readFile(join(dist, 'index.html'), 'utf8');
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
const homeSchemas = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://beebee.ai/#organization', name: 'BEEBEE AI', url: 'https://beebee.ai/', email: 'service@beebee.ai', logo: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png', sameAs: ['https://bee-alpha.com/', 'https://bee-beta.com/', 'https://beesigma.com/'], description: 'AI 学习力、项目制实训与企业 AI 产品品牌。' },
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
    body: `<main><h1>BEEBEE AI：用 AI 进化学习力</h1><p>BEEBEE AI 是面向未来人才的 AI 学习力平台，通过实训营、项目实践与学习平台培养提问、创造、协作和产品落地能力。</p><section><h2>品牌与业务架构</h2><p>BEEBEE AI 是 AI 学习力与项目制实训品牌，面向青少年、职场人士与企业团队提供 AI 能力训练；2Brain 是其企业知识管理与智能体产品，BEE Sigma 是面向企业客户的 AI 咨询与落地服务品牌。</p></section><section><h2>两条 AI 学习路线</h2><h3><a href="https://bee-alpha.com/">ALPHA 实训营</a></h3><p>面向青少年的 AI 教育训练营。启航营 Genesis 为 6 周约 18 小时的零基础线上路径；远航营 Odyssey 为 6 周约 27 小时的进阶线上路径，要求一定编程或工程经验。</p><h3><a href="https://bee-beta.com/">BETA 实训营</a></h3><p>面向 18 岁以上大学生、研究生和工程学习者。Galaxy、Cosmos、Infinity 分别为约 15、24、36 小时的线上项目实训，逐步覆盖 AI 产品、全栈工程和市场验证。</p></section><section><h2>真实项目与学习成果</h2><p>公开案例包括 ALPHA 的 Lumina Academy、RowingPro、AI 高尔夫成绩分析，以及 BETA 的 Hobbi、YummyYummy、Climate Intelligence Hub。</p></section><section><h2>核心导师与团队</h2><p>周品是 BEEBEE AI 创始人，拥有 20 年以上 IT 与互联网产品运营创业经验和 8 年 AI 实战经验；Vito Liu 是 BEEBEE AI 核心开发工程师，拥有麦吉尔大学计算机科学与数学双学位，专注 RAG 系统和 LLM 应用开发；池老师（Fred Chi）是蜜蜂时代首席程序员，拥有 25 年技术经验，擅长私有模型部署、分布式系统架构和高性能数据处理。</p></section>${faqHtml}</main>`,
    schemas: homeSchemas,
  },
  {
    path: 'differentiation', title: 'BEEBEE AI 学习方法｜AI 学习力与项目制实践',
    description: '了解 BEEBEE AI 如何通过提问力、项目制学习、道法术器学习体系和三维能力模型，帮助学习者把 AI 理念转化为真实作品。',
    body: `<main><h1>BEEBEE AI 的学习方法</h1><p>BEEBEE AI 以“人想 + AI 做”为实践原则，通过项目制学习把 AI 理念转化为可展示的真实成果。</p><section><h2>学习力公式与提问能力</h2><p>学习不只获取答案，更需要定义问题、提出好问题、验证结果并持续复盘。</p></section><section><h2>道、法、术、器学习体系</h2><p>从认知原则、解决方法到实践技能和 AI 工具，形成完整的学习闭环。</p></section><section><h2>创造力、竞争力与领导力</h2><p>针对不同学习者，通过项目协作发展面向 AI 时代的三维能力。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'Article', headline: 'BEEBEE AI 的 AI 学习方法与项目制实践', description: '通过提问力、项目制学习、道法术器学习体系和三维能力模型，把 AI 理念转化为真实作品。', author: { '@id': 'https://beebee.ai/#organization' }, publisher: { '@id': 'https://beebee.ai/#organization' }, mainEntityOfPage: 'https://beebee.ai/differentiation/' }],
  },
  {
    path: 'certificate', title: 'BEEBEE AI 证书查询｜学习成果与能力证明',
    description: '查询并了解 BEEBEE AI 实训营学习证书。证书用于记录学习者完成的课程与项目成果，具体信息以证书记录为准。',
    body: `<main><h1>BEEBEE AI 证书查询</h1><p>BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。在线查询能力正在完善中。</p><section><h2>证书记录的信息</h2><ul><li>参与的实训营与学习路线</li><li>完成的学习阶段与项目实践</li><li>证书编号对应的官方记录</li></ul><p>如需人工核验，请将证书编号与持证人姓名发送至 service@beebee.ai。</p></section></main>`,
  },
  {
    path: 'ai-learning-paths', title: 'ALPHA / BETA 怎么选｜BEEBEE AI 学习路线',
    description: '比较 BEEBEE AI ALPHA 与 BETA 实训营的适合人群、学习时长、基础要求和项目成果，找到适合自己的 AI 项目制学习路线。',
    body: `<main><h1>BEEBEE AI：ALPHA / BETA 学习路线怎么选</h1><p>ALPHA 与 BETA 都以真实项目为核心。选择路线时应根据年龄阶段、已有基础与希望完成的成果判断。</p><section><h2>ALPHA 青少年 AI 项目实训</h2><p>适合 12–19 岁青少年。Genesis 为 6 周约 18 小时的零基础路线；Odyssey 为 6 周约 27 小时的进阶路线，建议具备一定编程或工程经验。学员将完成可展示的 AI 项目，建立提问、工作流与产品表达能力。</p><p><a href="https://bee-alpha.com/">进入 ALPHA 实训营网站</a></p></section><section><h2>BETA 成人与工程项目实训</h2><p>适合 18 岁以上大学生、研究生、职场人士与工程学习者。Galaxy、Cosmos、Infinity 分别约为 15、24、36 小时，围绕真实需求完成 AI Native 产品、全栈工程与市场验证。</p><p><a href="https://bee-beta.com/">进入 BETA 实训营网站</a></p></section><section><h2>企业 AI 需求</h2><p>企业知识库、AI Agent 或业务流程落地需求由 BEE Sigma 提供咨询与交付服务。</p><p><a href="https://beesigma.com/">进入 BEE Sigma</a></p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学习路线', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'BEEBEE AI ALPHA 实训营', url: 'https://bee-alpha.com/' }, { '@type': 'ListItem', position: 2, name: 'BEEBEE AI BETA 实训营', url: 'https://bee-beta.com/' }] }],
  },
  {
    path: 'student-projects', title: 'BEEBEE AI 学员项目｜ALPHA / BETA 真实作品',
    description: '查看 BEEBEE AI ALPHA 与 BETA 学员完成的真实 AI 项目，了解学员背景、解决的问题、使用的 AI 能力与可访问成果。',
    body: `<main><h1>BEEBEE AI 学员真实项目</h1><p>学员从自身兴趣或真实问题出发，定义需求、组织 AI 工作流，并把想法转化为可以演示和使用的项目。</p><section><h2>BETA 项目案例</h2><h3><a href="https://www.voiceto.me/">Hobbi 心灵冥想日记</a></h3><p>四人协作完成的 AI 语音交互、冥想与 3D 可视化项目。</p><h3><a href="https://yum.9top.org/">YummyYummy AI 美食助手</a></h3><p>使用 AI 图像识别和多语言能力帮助用户理解菜品并做出选择。</p><h3><a href="https://climate-intelligence-hub.org/">Climate Intelligence Hub</a></h3><p>提供本地化气候预测、个性化建议与 AI 问答能力。</p></section><section><h2>ALPHA 项目案例</h2><h3><a href="https://crew-trainer.com/">RowingPro AI 划船训练平台</a></h3><p>由 16 岁学员完成的运动训练、动作分析与社区平台。</p><h3><a href="https://chinesewordsnack.netlify.app/">Word Snack 海外中文学习助手</a></h3><p>通过趣味互动与 AI 帮助海外孩子复习中文并追踪进度。</p><h3><a href="https://changepr0jectecho.uk/">PROJECT:Echo</a></h3><p>由 13 岁学员完成的游戏化目标管理与习惯养成项目。</p></section></main>`,
    schemas: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学员项目案例', itemListElement: [{ '@type': 'ListItem', position: 1, url: 'https://www.voiceto.me/', name: 'Hobbi' }, { '@type': 'ListItem', position: 2, url: 'https://yum.9top.org/', name: 'YummyYummy' }, { '@type': 'ListItem', position: 3, url: 'https://climate-intelligence-hub.org/', name: 'Climate Intelligence Hub' }, { '@type': 'ListItem', position: 4, url: 'https://crew-trainer.com/', name: 'RowingPro' }, { '@type': 'ListItem', position: 5, url: 'https://chinesewordsnack.netlify.app/', name: 'Word Snack' }, { '@type': 'ListItem', position: 6, url: 'https://changepr0jectecho.uk/', name: 'PROJECT:Echo' }] }],
  },
];

for (const page of pages) {
  const url = `https://beebee.ai/${page.path ? `${page.path}/` : ''}`;
  const staticContent = `<div id="seo-content" style="max-width:72rem;margin:0 auto;padding:3rem 1.5rem;font-family:system-ui,sans-serif;line-height:1.7">${page.body}</div>`;
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta data-rh="true" name="description"[^>]*>/, `<meta data-rh="true" name="description" content="${page.description}">`)
    .replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="BEEBEE AI"><meta property="og:image" content="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.description}"><meta name="twitter:image" content="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png">${(page.schemas || []).map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  const folder = join(dist, page.path);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, 'index.html'), html);
}

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: OpenAI-User\nAllow: /\n\nSitemap: https://beebee.ai/sitemap.xml\n`);
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://beebee.ai/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>https://beebee.ai/ai-learning-paths/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url><url><loc>https://beebee.ai/student-projects/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url><url><loc>https://beebee.ai/differentiation/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url><url><loc>https://beebee.ai/certificate/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url></urlset>\n`);
