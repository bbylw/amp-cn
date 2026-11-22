import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import nimbus, {
  defineConfig as defineNimbusConfig,
} from "@cloudflare/nimbus-docs";
import { tableScroll } from "@cloudflare/nimbus-docs/markdown";

const nimbusConfig = defineNimbusConfig({
  // Canonical origin: drives canonical URLs, OG image URLs, robots.txt,
  // the sitemap and the links in /llms.txt.
  site: "https://amp.ndjp.net",
  title: "Amp 中文手册",
  description:
    "Amp 官方文档的中文翻译：模型选择器、Orbs、CLI、技能与插件，一页一篇。",
  locale: "zh-CN",
  homeLabel: "首页",
  github: "https://github.com/bbylw/amp-cn",
  editPattern: "https://github.com/bbylw/amp-cn/edit/main/{path}",
  socialImageAlt: "Amp 中文手册",
  // Top-level order; folders autogenerate the groups their index.mdx names.
  sidebar: {
    items: [
      "introduction",
      "get-started",
      { label: "模型", autogenerate: { directory: "models" } },
      "prompting",
      "tools",
      "designing-ui",
      { label: "Orbs", autogenerate: { directory: "orbs" } },
      { label: "工作区", autogenerate: { directory: "workspace" } },
      { label: "应用", autogenerate: { directory: "apps" } },
      "boxes",
      { label: "协作", autogenerate: { directory: "collaborate" } },
      { label: "集成", autogenerate: { directory: "integrations" } },
      { label: "定制", autogenerate: { directory: "customization" } },
      { label: "CLI", autogenerate: { directory: "cli" } },
      { label: "参考", autogenerate: { directory: "reference" } },
      "pricing",
      { label: "企业版", autogenerate: { directory: "enterprise" } },
      "support",
    ],
  },
});

export default defineConfig({
  output: "static",
  // Tailwind v4 via its Vite plugin (Astro 7 ships Vite 8).
  vite: {
    plugins: [tailwindcss()],
  },
  // Hover-prefetch link targets so full-page navigations feel instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    nimbus(nimbusConfig, {
      rules: {
        "nimbus/frontmatter-shape": "error",
        "nimbus/internal-link": "error",
      },
      markdown: {
        hastPlugins: [tableScroll()],
        features: { headingAttributes: true },
      },
    }),
  ],
});
