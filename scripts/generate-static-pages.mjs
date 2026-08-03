import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const shell = await readFile(join(dist, 'index.html'), 'utf8');
const pages = [
  {
    path: '', title: 'BEEBEE AI｜AI 学习力平台与项目制实训营',
    description: 'BEEBEE AI 提供 AI 学习力训练、ALPHA/BETA 项目制实训营、学习平台与企业 AI 咨询服务，帮助青少年、职场人士和企业团队掌握 AI 协作、产品实践与知识管理能力。',
    body: `<main><h1>BEEBEE AI：用 AI 进化学习力</h1><p>BEEBEE AI 是面向未来人才的 AI 学习力平台，通过实训营、项目实践与学习平台培养提问、创造、协作和产品落地能力。</p><section><h2>两条 AI 学习路线</h2><h3><a href="https://bee-alpha.com/">ALPHA 实训营</a></h3><p>面向青少年的 AI 教育训练营。启航营 Genesis 为 6 周约 18 小时的零基础线上路径；远航营 Odyssey 为 6 周约 27 小时的进阶线上路径，要求一定编程或工程经验。</p><h3><a href="https://bee-beta.com/">BETA 实训营</a></h3><p>面向 18 岁以上大学生、研究生和工程学习者。Galaxy、Cosmos、Infinity 分别为约 15、24、36 小时的线上项目实训，逐步覆盖 AI 产品、全栈工程和市场验证。</p></section><section><h2>真实项目与学习成果</h2><p>公开案例包括 ALPHA 的 Lumina Academy、RowingPro、AI 高尔夫成绩分析，以及 BETA 的 Hobbi、YummyYummy、Climate Intelligence Hub。</p></section><section><h2>核心导师与团队</h2><p>周品是 BEEBEE AI 创始人，拥有 20 年以上 IT 与互联网产品运营创业经验和 8 年 AI 实战经验；Vito Liu 是 BEEBEE AI 核心开发工程师，拥有麦吉尔大学计算机科学与数学双学位，专注 RAG 系统和 LLM 应用开发；池老师（Fred Chi）是蜜蜂时代首席程序员，拥有 25 年技术经验，擅长私有模型部署、分布式系统架构和高性能数据处理。</p></section><section><h2>关于 BEEBEE AI</h2><p>学习路线服务青少年、职场人士、创业者与企业家，分别提升 AI 创造力、竞争力与领导力。</p></section></main>`,
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
    .replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta property="og:site_name" content="BEEBEE AI"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.description}"></head>`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  const folder = join(dist, page.path);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, 'index.html'), html);
}

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: OpenAI-User\nAllow: /\n\nSitemap: https://beebee.ai/sitemap.xml\n`);
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://beebee.ai/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>https://beebee.ai/differentiation/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url><url><loc>https://beebee.ai/certificate/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url></urlset>\n`);
