# beebee.ai 交接文档

交接日期：2026-11-04　交接人：Claude（Fable 5.1 / Sonnet 5.5）　接手人：Codex
项目负责人：Pin Zhou（以下称 Pin）。所有产品和文案决定由 Pin 做。

读完本文再动手。第 2 节是红线，第 6、7 节是最容易踩的坑。

---

## 1. 这个网站是什么

- 线上地址：https://beebee.ai 　源码：https://github.com/beebee-ai/Beebeeai（分支 `main`）
- 公司：BEEBEE AI Ltd，2023 年成立，总部新西兰奥克兰，团队在新西兰与中国。
- **定位（Pin 定的，不要改）**：「BEEBEE AI｜企业 AI 陪跑专家」。
  - 首屏主标题固定为「从第一个 Agent 上线，到 AI 真正进入企业日常业务。」
  - 副标语「AI Native · 可管理的企业 Agent 平台」。
- **两条业务线**：
  - 教育培训：Alpha（入门，13–19 岁）、Beta（进阶，18 岁以上专业人士）。站点分别是 bee-alpha.com、bee-beta.com。
  - 咨询落地：Sigma，即 BEE Sigma，站点 beesigma.com。营收大头在这条线。
- **这个站的角色**：集团门面和流量入口，只做导流。企业业务的详细内容归 beesigma.com，这里只放摘要和深链，**不要在 beebee.ai 上把企业业务讲全**，会和 beesigma.com 重复。

## 2. 红线（违反前必须先问 Pin）

1. **`main` 就是生产环境。每次 `git push origin main` 前先问 Pin。** Pin 的流程是：你在本地改好 → 他在本地预览 → 他点头 → 才上线。
2. 不要删除这两样，删了 Google Search Console 会失去所有权验证：
   - `public/google5a4581f7ea97b4d2.html`
   - `index.html` 里的 `<meta name="google-site-verification" content="V5iHE2WMIYpow7dwci99WCuMzOsNGLQz2U8diL3FgmU" />`
3. 不要碰 DNS 和域名。beebee.ai 注册在 NameSilo，DNS 托管在 Cloudflare，但托管它的 Cloudflare 账号目前没人找到（见第 11 节）。**NameSilo 里不要把域名服务器改成别的**，会让网站和邮箱同时断掉。
4. 不要动 `.github/workflows/deploy.yml`、`package.json` 的依赖和 `public/` 下的验证、图标文件，除非任务就是改它们。
5. 不要改 8 条路由的路径和这些页内锚点：`#home #platform #sigma-cases #works #about #faq #contact`，以及 `#platform` 内部的 `#alpha #beta #sigma`。外部页面和 Google 都在引用它们。
6. 不要自己编数字、案例、客户名。所有事实以三个站点现有公开内容为准，见第 9 节。

## 3. 本地开发

```bash
cd "/Volumes/AI_Dev/Claude Code Project/beebeeai"
npm ci
npm run dev -- --port 5178      # http://localhost:5178
npm run build                    # = vite build + node scripts/generate-static-pages.mjs
```

- 项目路径含空格（`Claude Code Project`），脚本里已用 `fileURLToPath` 处理，不要改回 `new URL().pathname`。
- 本地 Node 26，CI 用 Node 20，两边都能构建。
- 新机器 `npm ci` 后，npm 11 可能提示 esbuild 安装脚本未批准。执行 `npm approve-scripts esbuild` 会往 `package.json` 写入 `allowScripts`，**这个改动不要提交**，提交前 `git checkout -- package.json`。
- 新增依赖后如果 dev 页面报 `Invalid hook call` 或 `useContext of null`，是 Vite 预打包缓存过期：`rm -rf node_modules/.vite` 后重启 dev。生产构建不受影响。
- 证书查询页读 Firestore，需要本地 `.env.local` 里的 7 个 `VITE_FIREBASE_*`，值在 GitHub 仓库 Secrets 里，**这边读不到**。没有它时其余页面照常运行，证书查询在无配置下的表现我没有测试过。
- 联系表单走 EmailJS，公钥和模板 ID 写在 `src/config/emailjs.ts`（前端公开密钥，设计如此）。

## 4. 代码地图

```
index.html                       shell：字体、favicon、验证 meta、theme-color
scripts/generate-static-pages.mjs  构建后预渲染 8 个页面的 SEO HTML，并生成 sitemap/llms/feed（见第 6 节）
public/                          brand/ 图标、favicon.ico、验证文件、robots/sitemap/llms/feed（后几项由构建改写）
src/main.tsx                     入口
src/app/App.tsx                  首页 HomePage + 全部路由（Router.tsx 是死代码）
src/app/components/
  Hero.tsx                       首屏：奶油色大卡 + 三张业务线卡
  GrowthPathSection.tsx          #platform 成长路径：Alpha / Beta / Sigma 三个面板
  SigmaCasesSection.tsx          #sigma-cases 咨询落地三条工作流案例
  StudentWorksSection.tsx        #works 学员作品（首页 compact 只显示 3 张）
  FaqSection.tsx                 #faq；导出的 faqItems 同时给首页 JSON-LD 用
  ContactForm.tsx                EmailJS 表单，用 .field/.btn 样式类
  Navigation.tsx                 68px 顶栏，滚动后磨砂
  SectionHeader.tsx / Reveal.tsx / Text.tsx   统一板块标题 / 滚动出现动效 / 换行断点组件
  GoogleReviewLink.tsx           Google 评价链接（提交 0baeeb2，非我所写）
  Seo.tsx                        每页 title/description/canonical/OG/JSON-LD
src/app/pages/
  IntentLandingPage.tsx          4 个 SEO 落地页的内容都在这个文件的 pages 常量里
  StudentProjectsPage.tsx / CertificatePage.tsx / DifferentiationDetail.tsx
src/app/locales/                 全站双语文案，格式 { ZH, EN } + t()
  homeContent.ts                 首屏文案、学员作品数据 works.featured、关于我们、联系、页脚
  growthPathContent.ts           成长路径三个阶段的内容
  sigmaCasesContent.ts           三条工作流案例
  navContent.ts / differentiationContent.ts
src/styles/theme.css             设计系统：颜色变量、组件类、中文换行规则（第 7 节）
src/config/                      emailjs.ts、firebase.ts
```

路由共 8 条，都在 `App.tsx` 底部：`/`、`/differentiation`、`/certificate`、`/student-projects`、`/youth-ai-training`、`/university-ai-project-training`、`/enterprise-ai-consulting`、`/how-to-improve-ai-skills`。

遗留未使用文件（Figma Make 导出带来的，**清理前先问 Pin，且不要和功能改动混在一个提交里**）：`src/app/Router.tsx`、`components/LanguageDetectionFlow.tsx`、`utils/languageDetector*.ts` 与相关 md、`components/figma/ImageWithFallback.tsx`、整个 `components/ui/`。很多依赖（MUI、radix、recharts 等）大概率也没用到，我没有逐个核实。

## 5. 语言机制

- 双语 ZH / EN，`LanguageContext` 决定，优先读 `localStorage['preferred-language']`，否则按浏览器语言。
- 每段文案都是 `{ ZH: '...', EN: '...' }`，用 `t(obj, language)` 取值。**新增文案必须中英两份都写。**
- 预渲染的静态 HTML 和 `<html lang>` 只有中文。英文没有独立静态页，也没有 hreflang。

## 6. 最大的坑：同一份内容有两个来源

React 页面是客户端渲染（`createRoot().render`，不是 hydrate）。构建时 `scripts/generate-static-pages.mjs` 另外生成一份给爬虫和 AI 看的静态 HTML，塞在 `#root` 里，React 加载后会把它替换掉。**这两份是各自写的，不会自动同步。** 改文案时必须两边都改：

| 内容 | React 里在哪 | 脚本里在哪 |
|---|---|---|
| 首页正文、品牌说明 | `homeContent.ts` / 各 Section 组件 | `pages[0].body` |
| FAQ | `FaqSection.tsx` 的 `faqItems` | 脚本里的 `faqItems`（顶部） |
| 4 个落地页 | `IntentLandingPage.tsx` 的 `pages` | `pages[]` 的 body + `intentFaq` |
| 公司/人物/课程 JSON-LD | `App.tsx` HomePage 的 `structuredData` | `homeSchemas` |
| 页面 title/description | `Seo` 组件 props | `pages[].title/description` |
| 站点概述 | — | `llms.txt`、`llms-full.txt`、`feed.xml` 的字符串 |

另外几条：

- GitHub Pages 没有 SPA 兜底，**线上访问未知路径返回 404**（我验证过）。所以**新增路由必须同时在脚本的 `pages[]` 里加预渲染条目**，否则直接打开或被爬虫访问会 404。
- 每次 `npm run build` 都会改写 `public/` 下的 `robots.txt`（脚本复制）、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`feed.xml`，内容主要是日期变化。可以提交也可以 `git checkout -- public/` 丢弃，两种都无害。
- 构建后自检：`find dist -name index.html | wc -l` 应为 8。

## 7. 设计系统（与 beesigma.com 一致，Pin 反复强调）

源头是姊妹项目 `/Volumes/AI_Dev/Claude Code Project/beesigma-site/index.html` 的 `:root` 和组件样式。**风格要求参照 BEE Sigma，不要自创配色、字体、圆角。**

- **颜色**（`theme.css`）：暖黑画布 `--bg #121110`，面板 `--panel #1b1916 / --panel-2 #201d18`，边框 `--bd rgba(238,228,200,.09)`、`--bd-2 .2`，文字 `--txt #ebe6d8 / --txt-2 #a89f8a / --txt-3 #8a8171`，强调蜂蜜金 `--honey #ffb028`、琥珀 `--amber #ff8a00`，首屏奶油卡 `--cream #f4eedd`、墨色 `--ink #292215`。
- **品牌色规则**：整站是黑金。**橙色 `#FF6900` 只用于 Alpha**，Beta 用青色 `#06b6d4`，Sigma 用金色。其他地方出现橙色都是错的。
- Tailwind 的 white/black/gray-* 已在 `theme.css` 的 `@theme inline` 里重映射成暖色，所以旧写法 `text-white`、`border-white/10`、`text-gray-400` 会自动落到同一色板，不要再写冷灰十六进制色。
- **字体（不要换）**：正文和标题 Noto Sans SC，代码/大数字 Bricolage Grotesque，注脚 IBM Plex Mono，在 `index.html` 里通过 Google Fonts 加载。衬线体试过，被 Pin 否决。
- **组件类**：`.wrap`（1240px 内容宽）、`.kicker`、`.lead`、`.panel`（24px 圆角面板）、`.btn .btn-solid .btn-ghost .btn-ghost-light .btn-sm .btn-xs`（胶囊按钮）、`.tag`、`.field/.field-label`（表单，边框必须清晰可见，Pin 抱怨过输入框看不清边界）、`.hero-card`、`.hero-tile`、`.nav-glass`。新板块用这些类，不要手写一套。
- 板块节奏：顶部留白 110px（桌面 140px），统一用 `SectionHeader`（kicker + 标题 + lead）。
- 动效：`motion/react`，封装在 `Reveal.tsx`（Reveal / Stagger / StaggerItem）。CSS 动画已处理 `prefers-reduced-motion`。
- **中文换行规则（Pin 明确要求，PC 和手机都要检查）**：
  - `theme.css` 里标题、角标、lead、FAQ 的 `summary` 设了 `word-break: keep-all; overflow-wrap: anywhere`，只会在空格、标点处换行，不会把「企业」「专家」拆开。
  - 文案里的 `|` 配合 `<Seg text="...">` 变成可换行点。
  - 英文词和相邻中文要粘在一起时，在文案字符串里写 ` `（不换行空格），例如 `用 AI 做事`。
  - 验证办法：在 375 / 768 / 1440 三个宽度下，用 `Range.getClientRects()` 逐字取位置还原每一行文字，肉眼确认没有折断语义，同时 `document.documentElement.scrollWidth > innerWidth` 必须为 false。

## 8. 文案铁律（Pin 的明确指令）

1. 公司成立于 **2023 年**，永远不要写 2022。创始人周品（Pin Zhou）**25 年以上** IT/互联网经验、8 年 AI 经验。
2. **Alpha、Beta、Sigma 只首字母大写**，不要写成 ALPHA / BETA / SIGMA。「BEEBEE AI」「BEE Sigma」保持原样。kicker 样式没有 `uppercase`，英文 kicker 在源码里直接写 Title Case。
3. **不要出现 2Brain、第二大脑、「知识管理产品」**。Pin 的理由是用户会晕。品牌关系只讲：BEEBEE AI 是公司，下设教育培训（Alpha、Beta）和咨询落地（Sigma）。
4. **不要出现「学习力平台」「用 AI 进化学习力」**。
5. 文案要精简，宁可删。Pin 说过「臃肿」「什么都想要」。
6. 开发顺序偏好：一块一块改，不要把已有链接改坏，改完给 Pin 本地看。
7. 事实口径：
   - Alpha：Genesis 6 周约 18 小时（零基础），Odyssey 6 周约 27 小时（需编程基础，选拔制），13–19 岁。
   - Beta：Galaxy 6 周、Cosmos 8 周、Infinity 12 周，18 岁以上。**旧的「15/24/36 小时」已作废。**
   - Sigma 案例：「32 → 71」是 AIV 互动演示里的评分，不是真实客户，页面上必须标注「演示」；「+50%」来自客户确认的口径。案例都是脱敏的。
   - 这些数字来自 bee-alpha.com、bee-beta.com、beesigma.com，三站有变动时这里要同步。
8. 例外：`homeContent.ts` 里一个学员项目的描述含「学习管理」「知识管理」字样，那是学员作品的真实介绍，不是品牌表述，不要删。

## 9. 姊妹项目与边界

| 项目 | 位置 | 说明 |
|---|---|---|
| BEE Sigma 官网 | 本地 `/Volumes/AI_Dev/Claude Code Project/beesigma-site`（静态 HTML，Netlify 部署，站点 ID 在它自己的 `CLAUDE.md`） | **设计规范、Sigma 文案、数字、案例的唯一来源。** 有自己的部署和红线，**不要从这个项目去部署它**。本站链接到它的 `/cases`、`aiv.beesigma.com`、`aim.beesigma.com` |
| Alpha 站 | GitHub `beebee-ai/Beealpha` → bee-alpha.com（Vite+React，GitHub Pages） | Pin 的两个 GitHub 账号目前对它只有**读权限** |
| Beta 站 | GitHub `beebee-ai/Beebeta` → bee-beta.com（同上） | 同样只读 |

- Alpha、Beta 两个站的「关于我们」里仍写着「2022 年创立」和「超过 20 年」，需要改成 2023 和 25 年，位置在 `Beealpha/src/app/components/about-us.tsx` 和 `Beebeta/src/locales/translations.ts`，中英文各有好几处，用 `grep -n "2022\|20年\|20 years"` 全部找出来再改。**需要 Pin 先给 xkbear 账号加 Write 权限**，或者你以 Pull Request 提交。
- 其他不要碰：空仓库 `beebee-ai/bee-beta`、本地 `/Volumes/AI_Dev/Qoder/BAlpha/bee-alpha`（早期空模板，不是线上源码）、`/Volumes/AI_Dev/Codex project/beebee.ai`（空目录）。Netlify 账号下的 `bee-alpha-0102`、`beta-deploy`、`odyssey-4zbot` 我没调查过和线上的关系，别动。

## 10. 部署、验证、回滚

**部署**：推送 `main` → GitHub Actions「Deploy to GitHub Pages」（约 1–2 分钟）→ GitHub Pages，前面是 Cloudflare。自定义域名在仓库 Settings > Pages 里设置，仓库里没有 CNAME 文件。

```bash
git push origin main
gh run watch "$(gh run list --repo beebee-ai/Beebeeai --branch main --limit 1 --json databaseId --jq '.[0].databaseId')" --repo beebee-ai/Beebeeai --exit-status
```

**上线后验证**（HTML 在 GitHub 侧缓存 10 分钟，验证时加 `?v=随机数` 绕过）：

```bash
curl -sL "https://beebee.ai/?v=$RANDOM" | grep -oE "<title>[^<]*</title>"
for p in / /differentiation /certificate /student-projects /youth-ai-training /university-ai-project-training /enterprise-ai-consulting /how-to-improve-ai-skills; do
  printf "%-36s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' "https://beebee.ai$p")"; done
```

**遗留词自检**（改完文案跑一遍，当前只应命中 `differentiationContent.ts`、`DifferentiationDetail.tsx` 注释、脚本第 40 行的 `/differentiation` 内容，以及第 8 节说的学员项目那一行）：

```bash
grep -rnE "\b(ALPHA|BETA|SIGMA)\b|2022|2Brain|第二大脑|学习力|知识管理" src scripts index.html | grep -v "src/app/utils"
```

**回滚**：

- 改版前的线上版本保存在远端 `backup/live-2026-09-04` 分支和 `live-before-refactor-2026-09-12` 标签，都指向 `f3a05c5`。
- 撤销某一次改动（首选）：`git revert --no-edit <提交> && git push origin main`，约一分钟生效。
- **注意**：直接退回 `f3a05c5` 会同时去掉 Search Console 验证文件和验证 meta、黑金图标。回滚后必须确认第 2 节第 2 条的两样东西还在，图标链接也要检查。
- 回滚前先和 Pin 说一声，他是知情并要求能回滚的。

## 11. SEO、Search Console 与 DNS

- Search Console 资源：**网址前缀 `https://beebee.ai/`**，归 Google 账号 **xkbear@gmail.com**。用 HTML 文件加 meta 两种方式验证。网址：https://search.google.com/search-console?resource_id=https://beebee.ai/
- 2026-09-12 已提交 `sitemap.xml`，并对 5 个页面请求了编入索引（首页、企业咨询、青少年实训营、学员作品、大学生项目实训）。首次提交时站点地图状态显示「无法抓取」，**之后我没有复查**，请复查一次，我用 Googlebot 身份测试过它能正常读取。
- **今后改了页面文案，要做两件事**：在 Search Console 重新提交站点地图，再对改动页面逐个「请求编入索引」。Google 的站点地图 ping 接口已下线，没有别的提交途径。这一步需要 Pin 的 Google 账号登录，需要时请他配合。
- `sitemap.xml` 的 `lastmod` 是构建当天日期，由脚本生成。
- DNS 现状：beebee.ai 的域名服务器是 `karsyn.ns.cloudflare.com` 和 `elliot.ns.cloudflare.com`，真正托管它的 Cloudflare 账号**不是** Pin 手上的 Beebeeai666@gmail.com 账号，也没找到是哪个。当前解析 A 记录为 104.21.49.21 / 172.67.188.199，MX 指向 Google，TXT 有 Stripe 验证、SPF（mailgun + google）、一条旧的 Google 域名验证。
- 2026-10-21 Cloudflare 邮件通知「在 Beebeeai666 账号中删除了域 beebee.ai」：那是 9 月下旬被人误加、从未激活的副本，4 周未激活被自动清理，**对线上没有任何影响**（我当天核对过网站、DNS、邮件全部正常）。**不要点邮件里的「重新添加域」**。
- 域名到期日 2027-04-13，NameSilo。

## 12. 已知问题与待办（按优先级）

1. **找到托管 beebee.ai 的 Cloudflare 账号**，把 Pin 加为管理员。否则 DNS 单点依赖在一个没人掌握的账号上。线索：搜 pin@beebee.ai、service@beebee.ai、service@2brain.ai 邮箱里发件人为 noreply@cloudflare.com 且提到 beebee.ai 的邮件。
2. 修改 Alpha / Beta 两个站的「2022 年」和「20 年」，前提是拿到写权限（第 9 节）。
3. **`/differentiation` 页面没有重做**：内容仍是培训方法论（道法术器、学习力公式、三维能力模型、蜂道四式），页面 title 还是「AI 学习平台推荐与比较」，英文徽章 PHILOSOPHY / METHOD / TECHNIQUE / COLLECT 等是全大写。Pin 还没决定是否重写，**没有他的指令不要动**。
4. 社交分享图目前是 512×512 方形图标（`/brand/icon-512.png`），Pin 可能想要 1200×630 横版封面，可参考 beesigma-site 里的 `assets/og-cover.png`。
5. 图片依赖外部桶：学员作品图、创始人照片、办公室图共 34 处引用 `beebee-s3-sit.s3.us-west-2.amazonaws.com`（名字像测试环境桶）。桶一旦调整，页面图片会全部失效。建议迁到 `public/` 或正式 CDN，需要先问 Pin。
6. GitHub Actions 提示 Node 20 将被弃用（目前被强制跑在 Node 24 上，不影响构建），后续升级 `actions/*` 版本和 `node-version`。
7. 联系表单的 EmailJS 字段 `age` 现在实际承载的是「公司或学校」，字段名没改，因为改名要同步改 EmailJS 模板。
8. 提交 `0baeeb2`（Google 评价链接，`GoogleReviewLink.tsx`，放在联系区和页脚）不是我做的，我只读过代码，没有做视觉复查。
9. `package.json` 的包名是 `@figma/my-make-file`，`README.md` 是 Figma Make 模板，没改过。
10. 证书查询用的 Firestore 安全规则不在仓库里，我没有看过。

## 13. 接手后建议的第一步

1. `git pull`，`npm ci`，`npm run dev -- --port 5178`，把首页、`/student-projects`、`/enterprise-ai-consulting` 看一遍，对照第 7 节建立手感。
2. 打开 `src/app/locales/homeContent.ts` 和 `scripts/generate-static-pages.mjs`，理解第 6 节的「两份内容」。
3. 有任何涉及定位、品牌、数字、删改页面的决定，先问 Pin，再动手。
