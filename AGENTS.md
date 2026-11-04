# AGENTS.md

这是 beebee.ai 官网（Vite + React，GitHub Pages）。**动手前先完整阅读 [HANDOFF.md](./HANDOFF.md)。**

最重要的五条，细节都在 HANDOFF.md：

1. `main` 就是生产环境，推送前必须先问 Pin。
2. 同一份文案有两个来源：`src/app/locales/*` 与 `scripts/generate-static-pages.mjs`（给爬虫的静态 HTML），改文案要两边同步，新增路由必须同时加预渲染条目。
3. 配色、字体、圆角参照 beesigma.com，用 `theme.css` 里的变量和组件类。橙色只用于 Alpha。
4. 文案铁律：2023 年成立；Alpha / Beta / Sigma 只首字母大写；不出现 2Brain、第二大脑、学习力平台。
5. 不要删除 `public/google5a4581f7ea97b4d2.html` 和 `index.html` 里的 `google-site-verification` meta。
