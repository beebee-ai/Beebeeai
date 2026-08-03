import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const shell = await readFile(join(dist, 'index.html'), 'utf8');
const faqItems = [
  ['BEEBEE AI 是什么？', 'BEEBEE AI 是面向未来人才的 AI 学习力平台，通过实训营、项目实践和学习平台，帮助学习者建立提问、创造、协作与产品落地能力。'],
  ['BEEBEE AI 适合哪些人？', '学习路线服务希望提升 AI 创造力的青少年、增强竞争力的职场人士，以及探索 AI 领导力的创业者和企业家。'],
  ['ALPHA 与 BETA 实训营有什么区别？', 'ALPHA 面向青少年，包含零基础启航营和进阶远航营；BETA 面向大学生、职场人士与工程人才，聚焦真实项目、技术实现和完整产品开发。'],
  ['学习过程中会产出什么？', '学习者从真实问题出发，通过项目制协作完成可演示、可使用、可复盘的 AI 应用或作品。'],
  ['如何选择适合自己的学习路线？', '可以根据年龄、编程经验、希望解决的问题和目标成果选择路线；如果暂时不确定，可联系团队获取建议。'],
  ['BEEBEE AI 与普通 AI 工具培训有什么不同？', '普通工具培训通常聚焦功能操作，BEEBEE AI 更强调定义问题、提出好问题、项目协作和真实交付。'],
  ['课程如何帮助学习者提升 AI 学习力？', '课程训练学习者拆解真实任务、设计工作流、调用合适工具、验证输出并持续复盘。'],
  ['如何报名、咨询或核验证书？', '可以通过官网联系表单或 service@beebee.ai 咨询；核验证书时请提供证书编号和持证人姓名。'],
];
const faqHtml = `<section><h2>BEEBEE AI 常见问题</h2>${faqItems.map(([question, answer]) => `<h3>${question}</h3><p>${answer}</p>`).join('')}</section>`;
const homeSchemas = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://beebee.ai/#organization', name: 'BEEBEE AI', url: 'https://beebee.ai/', email: 'service@beebee.ai', description: 'AI 学习力、项目制实训与企业 AI 产品品牌。' },
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
  },
  {
    path: 'certificate', title: 'BEEBEE AI 证书查询｜学习成果与能力证明',
    description: '查询并了解 BEEBEE AI 实训营学习证书。证书用于记录学习者完成的课程与项目成果，具体信息以证书记录为准。',
    body: `<main><h1>BEEBEE AI 证书查询</h1><p>BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。在线查询能力正在完善中。</p><section><h2>证书记录的信息</h2><ul><li>参与的实训营与学习路线</li><li>完成的学习阶段与项目实践</li><li>证书编号对应的官方记录</li></ul><p>如需人工核验，请将证书编号与持证人姓名发送至 service@beebee.ai。</p></section></main>`,
  },
];

for (const page of pages) {
  const url = `https://beebee.ai/${page.path ? `${page.path}/` : ''}`;
  const staticContent = `<div id="seo-content" style="max-width:72rem;margin:0 auto;padding:3rem 1.5rem;font-family:system-ui,sans-serif;line-height:1.7">${page.body}</div>`;
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta data-rh="true" name="description"[^>]*>/, `<meta data-rh="true" name="description" content="${page.description}">`)
    .replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="BEEBEE AI"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.description}">${(page.schemas || []).map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('')}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  const folder = join(dist, page.path);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, 'index.html'), html);
}

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: OpenAI-User\nAllow: /\n\nSitemap: https://beebee.ai/sitemap.xml\n`);
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://beebee.ai/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>https://beebee.ai/differentiation/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url><url><loc>https://beebee.ai/certificate/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url></urlset>\n`);
