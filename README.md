# Amp 中文手册

基于 [Amp 官方文档](https://ampcode.com/docs) 的中文翻译版本，跟随官方更新（最近同步：2026-11-22）。

![Amp Logo](https://static.ampcode.com/content/amp-vscode-1.png)

## 关于 Amp

Amp 是由 Sourcegraph 开发的前沿编程代理与开发环境。它基于四大理念：

- **多模型** — GPT-5.6、Claude Fable 5.1、快速模型等，各司其职
- **Orbs** — Amp 为每个线程创建的云端机器，代码、工具、插件已就绪
- **无处不在** — 网页、桌面、手机、CLI 共用同一套线程
- **站在前沿** — 随模型演进，没有向后兼容包袱

## 手册内容

本中文手册涵盖以下内容：

| 章节 | 说明 |
|------|------|
| **介绍** | 核心理念与在哪儿使用 Amp |
| **快速开始** | 网页、CLI 与应用的起步方式 |
| **模型选择器** | Staff Pick、effort、speed，以及已取代旧 Dial 模式的现状 |
| **模型与子代理** | Task / Read Thread 子代理、系统模型、Oracle / Librarian / Finder |
| **提示技巧** | 提示原则、示例、线程引用与查找、消息排队 |
| **工具与 Painter** | 内置工具、图像生成、权限模型 |
| **Orbs** | Orb 概念、终端、文件上传、`amp sync`、启动方式 |
| **准备仓库** | `.agents/setup` 与 `.agents/resume` 快照机制 |
| **Orb 规格与计费** | 六种规格的价格、暂停与计费规则 |
| **项目** | 仓库、额外仓库、Ship 行为、只读 Git 凭据 |
| **线程** | 分享、Multiplayer、Artifacts、整理与导出 |
| **应用** | macOS / iOS / Android / Windows / Linux |
| **Puck** | 个人助理、语音通话、其它应用接入 |
| **集成** | GitHub、GitLab、Google、Linear、Slack、MCP |
| **定制** | AGENTS.md、Skills、MCP、插件 |
| **CLI** | 安装、账号、补全、执行模式、快捷键、配置 |
| **定价** | Hobby / Individual / Teams / Enterprise |

## 快速开始

### 在线查看

直接在浏览器中打开 `index.html` 文件。

### 本地部署

```bash
git clone https://github.com/bbylw/amp-cn.git
cd amp-cn

# 使用任意静态服务器
npx serve .
# 或
python -m http.server 8000
```

## 技术特性

- ✅ **单文件部署** — 纯 HTML/CSS，无需构建
- ✅ **响应式设计** — 适配桌面和移动端
- ✅ **深色主题** — 程序员友好的暗色界面
- ✅ **侧边导航** — 桌面端固定目录，移动端折叠菜单
- ✅ **代码高亮** — 命令和配置示例清晰展示
- ✅ **跟随官方更新** — 按 ampcode.com/docs 最新结构组织

## 安装 Amp

### 命令行安装（推荐）

```bash
curl -fsSL https://ampcode.com/install.sh | bash
```

支持 macOS、Linux 和 WSL（Windows）。

### 桌面与移动应用

| 平台 | 要求 |
|------|------|
| macOS | Apple 芯片，macOS 26+ |
| iPhone / iPad | iOS / iPadOS 26+ |
| Android | Android 13+ |
| Windows | Windows 10 1809+ / 11 |
| Linux | Debian 12+、Ubuntu 22.04+、Fedora、Arch |

## 示例提示词

```bash
# 修复构建错误
amp -x "运行 pnpm run build 并修复所有错误"

# 代码审查（子代理）
amp -x "让一个子代理审查最后一次提交的改动"

# 在云端 Orb 中执行
amp -ox "排查 main 上最新一次 CI 失败的原因"

# 指定模型与思考强度
amp -x "审查这个仓库" --model openai/gpt-6-astra --effort xhigh
```

## 相关链接

- 🌐 [Amp 官网](https://ampcode.com)
- 📖 [官方文档 (英文)](https://ampcode.com/docs)
- ☁️ [什么是 Orbs](https://ampcode.com/what-are-orbs)
- 🧩 [Plugin API](https://ampcode.com/docs/plugin-api)
- 🐙 [GitHub - amp.nvim](https://github.com/ampcode/amp.nvim)

## 贡献

欢迎提交 Issue 和 Pull Request 改进翻译质量。

## 许可证

本翻译项目基于原始 Amp 文档内容创建，仅供学习参考。

Amp 是 [Sourcegraph](https://sourcegraph.com) 的产品。

---

<p align="center">
  <strong>Amp — 前沿编程代理</strong><br>
  <a href="https://ampcode.com">ampcode.com</a>
</p>
