# Amp 中文手册

[Amp](https://ampcode.com) 官方文档的中文翻译。站点用 [Nimbus](https://nimbus-docs.com)（Cloudflare 的 Astro 文档框架）搭建，由 bun 管理与构建，部署在 GitHub Pages：<https://amp.ndjp.net>。

原文跟随 <https://ampcode.com/docs> 更新，最近一次同步：2026-11-22。

## 技术栈

| 层 | 选择 |
| --- | --- |
| 框架 | Nimbus `@cloudflare/nimbus-docs` 0.20 · Astro 7 |
| 运行时 / 包管理 | bun 1.4 |
| 样式 | Tailwind CSS v4（主题令牌在 `src/styles/globals.css`） |
| 内容 | MDX，`src/content/docs/` |
| 搜索 / 站点数据 | Pagefind、`llms.txt`、每页 Markdown 版本（Nimbus 内置） |
| 部署 | GitHub Actions → GitHub Pages |

## 本地开发

```bash
bun install
bun run dev        # http://localhost:4321
bun run build      # 产物在 dist/
bun run preview    # 预览构建结果
```

其他检查：

```bash
bun run lint:docs              # 文稿 lint
bunx @cloudflare/nimbus-docs check   # 配置、结构、链接与类型自检
bun run typecheck              # astro check
```

## 目录

```
astro.config.ts          # 站点信息与侧边栏分组
src/pages/index.astro    # 落地页
src/content/docs/        # 25 篇文档，目录即侧边栏
  introduction.mdx
  get-started.mdx
  models/                # 模型选择器、子 agent
  prompting.mdx
  tools.mdx
  orbs/                  # Orbs、仓库准备、规格与计费
  workspace/             # 项目、线程、应用、Puck
  integrations.mdx
  customization/         # AGENTS.md、Skills、MCP、插件
  cli/                   # 安装、执行模式、快捷键、配置
  pricing.mdx
  enterprise.mdx
  support.mdx
src/components/          # Header、Logo、垫片组件
public/CNAME             # 自定义域名，随构建一起发布
```

新增页面只需在对应目录放一个 `.mdx`，写明 `title`，侧边栏会自动收录；`sidebar.order` 控制顺序，目录的 `index.mdx` 决定分组名称。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会用 bun 安装、构建并发布 `dist/` 到 GitHub Pages。仓库的 Pages 来源需要设为 **GitHub Actions**。

## 说明

本站是社区翻译，术语尽量与官方一致；与原文冲突时以 [官方文档](https://ampcode.com/docs) 为准。
