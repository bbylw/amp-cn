# amp-cn：Amp 中文手册站点

这是 <https://amp.ndjp.net> 的源码仓库——一份中文的 Amp 文档站点。内容译自 [Amp 官方文档](https://ampcode.com/docs)，站点本身用 [Nimbus](https://nimbus-docs.com)（Cloudflare 的 Astro 文档框架）以静态方式构建，产物发布在 GitHub Pages。

本 README 说明这个站点怎么组成、怎么改、怎么发。想了解 Amp 是什么，请看站点首页或官方文档。

## 站点提供什么

- **74 篇中文文档**，目录结构与官方文档树对应：从入门、模型、提示、工具，到 Orbs、工作区、应用、协作、集成、定制、CLI、参考、企业版。
- **全站搜索**（Pagefind，构建时生成索引）、侧边栏分组、目录、面包屑、明暗主题。
- **给 agent 的接口**：每页的 Markdown 版本（`/path/index.md`）、每节的 `llms.txt` 与全站 `llms-full.txt`，页面里还有指向它们的 `<AgentDirective />`。
- **中文分享卡片**：站点与每页各有一张 Open Graph 图，由 Satori 渲染，内置子集化的 Noto Sans SC，中文标题不会变成方块。
- **官方标识**：`public/favicon.svg` 直接用 Amp 官方图标，页头 logo 与分享卡片共用 `src/components/logo.ts` 里的同一份字标路径。
- 链接悬停预取（`prefetch.prefetchAll`），整页导航几乎即时。

## 技术栈

| 层 | 选择 |
| --- | --- |
| 框架 | [Nimbus](https://nimbus-docs.com) `@cloudflare/nimbus-docs` 0.20 · Astro 7（`output: "static"`） |
| 运行时 / 包管理 | bun |
| 样式 | Tailwind CSS v4，主题令牌在 `src/styles/globals.css` |
| 内容 | MDX，`src/content/docs/` |
| 图片 / 卡片 | Satori + `@resvg/resvg-js` |
| 部署 | GitHub Actions → GitHub Pages，自定义域名经 `public/CNAME` |

## 本地开发

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # 产物在 dist/
bun run preview    # 预览构建结果
```

提交前的检查：

```bash
bun run lint:docs                    # 文稿 lint
bun run typecheck                    # astro check
bunx @cloudflare/nimbus-docs check   # 配置、结构、链接与类型自检
```

## 目录

```
astro.config.ts            # 站点元信息、侧边栏分组、lint 规则、预取
src/pages/
  index.astro              # 落地页
  og.png.ts                # 站点分享卡片
  og/[...slug].ts          # 每页分享卡片
  og/_card.ts              # 卡片版式与字体（两份路由共用一个下划线文件）
  og/_fonts/               # Inter 400/500 + 子集化 Noto Sans SC 400/500、OFL
  llms.txt.ts …            # llms.txt / llms-full.txt / 每页 .md / robots.txt
src/content/docs/          # 74 篇 mdx，目录即侧边栏分组
src/components/
  logo.ts                  # 官方 amp 字标路径，Header 与分享卡片共用
  Header.astro、Logo.astro # 页头
  ui/                      # Nimbus 注册表组件（dialog、search 等）
public/
  CNAME                    # amp.ndjp.net，随构建发布
  favicon.svg              # 官方图标
  _headers                 # 静态托管响应头
.github/workflows/deploy.yml
```

## 写一篇文档

在 `src/content/docs/` 的对应目录里放一个 `.mdx`，侧边栏会自动收录：

```mdx
---
title: 页面标题
description: 一句话摘要。
---

正文。H1 来自 `title`，正文里不要重复。

## 小节标题
```

- `sidebar.order` 控制排序，`sidebar.label` 改侧边栏短标题，`sidebar.hidden: true` 建页但不列出。
- 目录的 `index.mdx` 是分组落地页，`sidebar.group.label` 决定分组名；顶层顺序在 `astro.config.ts` 的 `sidebar.items`。
- 共享片段放 `src/content/partials/`，用 `<Render file="..." />` 引用，不要直接 import `.mdx`。
- 术语与官方一致；agent 不译作「代理」，用 agent / 子 agent / 主 agent。

## 改站点的外观

- **颜色与排版**：`src/styles/globals.css` 里的主题令牌。
- **页头 logo**：改 `src/components/logo.ts`。`viewBox` 裁掉了官方字标的空白边，`Header.astro`、`Logo.astro` 和分享卡片都读它。
- **页头链接与布局**：`src/components/Header.astro`。
- **分享卡片**：`src/pages/og/_card.ts`。卡片的字体是子集，若新页面标题出现缺字，按文件顶部注释重新生成：从 Google Fonts 的 `NotoSansSC[wght].ttf` 用 `fontTools.varLib.instancer` 实例化 400/500 两档，再按站点用字 `pyftsubset --text-file` 裁剪，连同 `OFL.txt` 放入 `src/pages/og/_fonts/`。改完跑一次构建，`[og]` 前缀的缺字告警应为 0。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 用 bun 安装、构建，把 `dist/` 上传并发布到 GitHub Pages；也可以在 Actions 页面手动触发。仓库的 Pages 来源需设为 **GitHub Actions**，自定义域名由 `public/CNAME` 与 DNS 共同决定。

## 说明

本站是社区翻译，与原文冲突时以[官方文档](https://ampcode.com/docs)为准。原文最近一次同步：2026-11-22。
