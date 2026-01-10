# Amp 中文手册

基于 [Amp 官方手册](https://ampcode.com/manual) 的完整中文翻译版本。

![Amp Logo](https://avatars.githubusercontent.com/u/241896479?s=200&v=4)

## 关于 Amp

Amp 是由 Sourcegraph 开发的前沿编程代理（Coding Agent），专为终端和编辑器设计。它基于四大核心原则：

- **无限制 Token 使用** — 不限制模型输出，充分发挥 AI 能力
- **始终使用最佳模型** — Claude Opus 4.5、GPT-5.1 等顶级模型各司其职
- **原始模型能力** — 直接获得模型原始能力，无额外抽象层
- **随模型演进** — 紧跟前沿，无历史包袱

## 手册内容

本中文手册涵盖以下内容：

| 章节 | 说明 |
|------|------|
| **为什么选择 Amp** | 核心原则与特性介绍 |
| **安装指南** | CLI 安装、编辑器扩展配置 |
| **使用指南** | smart/rush 模式、提示技巧 |
| **AGENTS.md** | 代码库配置文件编写 |
| **线程交接** | Handoff 功能使用 |
| **工具系统** | 子代理、Oracle、Librarian、MCP |
| **权限管理** | 工具权限配置 |
| **CLI 命令行** | 命令行用法、Shell 模式 |
| **配置选项** | 设置项详解 |
| **定价方案** | 免费额度、付费使用、企业版 |
| **键盘快捷键** | 各平台/编辑器快捷键 |

## 快速开始

### 在线查看

直接在浏览器中打开 `index.html` 文件。

### 本地部署

```bash
# 克隆仓库
git clone https://github.com/your-username/amp-manual-zh.git
cd amp-manual-zh

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
- ✅ **快捷键表格** — 按平台和编辑器分类

## 安装 Amp

### 命令行安装（推荐）

```bash
curl -fsSL https://ampcode.com/install.sh | bash
```

### 编辑器扩展

| 编辑器 | 安装方式 |
|--------|----------|
| VS Code / Cursor | 安装 `sourcegraph.amp` 扩展 |
| JetBrains | 安装 CLI 后运行 `amp --jetbrains` |
| Neovim | 安装 [amp.nvim](https://github.com/sourcegraph/amp.nvim) |

## 示例提示词

```bash
# 修复构建错误
amp -x "运行 pnpm run build 并修复所有错误"

# 代码审查
amp -x "使用 oracle 审查最后一次提交"

# 并行任务
amp -x "用 3 个子代理把这些 CSS 转换成 Tailwind"

# 只做规划
amp -x "规划如何添加实时聊天功能，不要写代码"
```

## 相关链接

- 🌐 [Amp 官网](https://ampcode.com)
- 📖 [官方手册 (英文)](https://ampcode.com/manual)
- 📦 [NPM 包](https://www.npmjs.com/package/@sourcegraph/amp)
- 🐙 [GitHub - amp.nvim](https://github.com/sourcegraph/amp.nvim)
- 💬 [Build Crew 社区](https://buildcrew.team)
- 🐦 [Twitter @AmpCode](https://x.com/AmpCode)

## 贡献

欢迎提交 Issue 和 Pull Request 改进翻译质量。

## 许可证

本翻译项目基于原始 Amp 手册内容创建，仅供学习参考。

Amp 是 [Sourcegraph](https://sourcegraph.com) 的产品。

---

<p align="center">
  <strong>Amp — 前沿编程代理</strong><br>
  <a href="https://ampcode.com">ampcode.com</a>
</p>
