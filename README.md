# Amp 中文手册

[Amp](https://ampcode.com) 是为前沿模型打造的编程 agent 与开发环境。它不只是一个终端工具，而是一套贯穿网页、桌面、手机和 CLI 的工作方式：你把要做的事说清楚，agent 自己跑测试、开浏览器、改代码，先证明改动可用，再交给你看。

<https://amp.ndjp.net> 是 Amp 官方文档的中文翻译站点，下列内容即站点各页的入口。

## Amp 的几个关键点

- **🧠 多模型** — 模型选择器同时决定模型与思考强度，并标出每个模型由谁付费。不想挑就用 Staff Pick（目前是 Claude Opus 5.5）。详见[模型选择器](/models)。
- **☁️ Orbs** — 每个线程一台全新的云端机器，代码、依赖、插件都已就绪。合上笔记本，活儿照跑；orb 休眠不收费，再发提示时会话、文件和服务都还在。详见 [Orbs](/orbs)。
- **📱 无处不在** — 在 iPhone 上发起，在 Mac 上查看，在 TUI 里继续。网页、macOS、Windows、Linux、iOS、Android 看的是同一批[线程](/workspace/threads)，就绪时通知你。详见[应用](/apps)。
- **🎯 固执己见** — 你始终用到 Amp 最好的部分。团队自己不用、不爱用的功能会被砍掉。
- **⚡ 站在前沿** — 模型走到哪，Amp 跟到哪，没有向后兼容的包袱。
- **🧵 线程** — 与 Amp 的每次交互都可保存、跨设备继续、分享给同事。

## 在哪儿用

| 入口 | 说明 |
| --- | --- |
| 网页 | 打开 [ampcode.com](https://ampcode.com)，注册后即可发起线程，无需安装 |
| 桌面与手机 | [原生应用](/apps)提供听写、跨应用分享和通知；agent 跑在 orb 里，设备上不用装任何东西 |
| 终端 | [CLI](/cli) 可在自己的机器、编辑器终端或脚本里运行 Amp |
| Puck | 帮你启动和协调 agent 的个人助理，见 [Puck](/workspace/puck) |

## 三步开始

1. **登录** — 在 [ampcode.com](https://ampcode.com) 注册；orb 跑在 Amp 云端，无需安装。
2. **添加代码** — 用 Git 仓库创建一个[项目](/workspace)，或以「No Project」开始。
3. **在 Orb 中运行 agent** — 新线程里把执行位置设为 **New Orb**，选好项目，描述你想要的结果。

想在终端里用：

```bash
curl -fsSL https://ampcode.com/install.sh | bash
amp
```

首次运行会提示登录；也支持 Homebrew 与 npm（macOS / Linux / WSL，Windows 请走 WSL）。

## 按仓库定制

Amp 的工作方式可以写进仓库，跟着项目走：

- **[AGENTS.md](/customization/agents-md)** — 团队约定、构建与测试命令。
- **[Skills](/customization/skills)** — 按需加载的流程手册。
- **[MCP](/customization/mcp)** 与 **[插件](/customization/plugins)** — 接外部工具、加自定义命令。

## 文档地图

| 主题 | 页面 |
| --- | --- |
| 入门 | [介绍](/introduction) · [快速开始](/get-started) |
| 日常使用 | [提示](/prompting) · [工具](/tools) · [设计 UI](/designing-ui) |
| 云端 | [Orbs](/orbs) · [自托管](/orbs/self-hosted) · [规格与计费](/orbs/sizes) |
| 工作区 | [项目](/workspace) · [线程](/workspace/threads) · [Spaces](/workspace/spaces) |
| 客户端 | [应用](/apps) · [CLI](/cli) · [Boxes](/boxes) |
| 团队 | [协作](/collaborate) · [集成](/integrations) · [企业版](/enterprise) |
| 其它 | [参考](/reference) · [定价](/pricing) · [支持](/support) |

## 关于本站

站点用 [Nimbus](https://nimbus-docs.com)（Cloudflare 的 Astro 文档框架）静态构建，部署在 GitHub Pages。正文是社区翻译，术语尽量与官方一致，与原文冲突时以[官方文档](https://ampcode.com/docs)为准；原文最近一次同步：2026-11-22。
