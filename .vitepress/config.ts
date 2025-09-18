import { defineConfig } from "vitepress";
import type { DefaultTheme, HeadConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { createFileSystemTypesCache } from "@shikijs/vitepress-twoslash/cache-fs";
import { themeZh } from "./theme-zh";
import { themeEn } from "./theme-en";

const algoliaContent = "020BBEB17492C015";
const algoAppId = "LEF12KSIJN";
const algoAppKey = "9f57cf109e7f595911c7da95d7f4e153";

const htmlHeads: HeadConfig[] = [
  ["meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
  }],
  ["meta", { name: "algolia-site-verification", content: algoliaContent }],
  [
    "meta",
    {
      property: "og:image",
      content: "/images/shelly-title.png",
    },
  ],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "twitter:domain", content: "shellyiot.cn" }],
  [
    "meta",
    {
      property: "twitter:image",
      content: "/images/shelly-title.png",
    },
  ],
  [
    "meta",
    { property: "twitter:card", content: "summary_large_image" },
  ],
  ["link", { rel: "shortcut icon", href: "/images/favicon.ico" }],
  [
    "script",
    {},
    `window.addEventListener('load', () => { const hostname = window.location.hostname; let message = '粤ICP备2025380205号';if (hostname.endsWith('.shellytech.net')) { message = '粤ICP备2025380205号-1'; } else if (hostname.endsWith('.shelly.asia')) { message = '粤ICP备2025380205号-2'; } else if (hostname.endsWith('.shellyiot.cn')) { message = '粤ICP备2025380205号-3'; } ; document.getElementById('footer-message').textContent = message; })`,
  ],
];

export default defineConfig({
  lang: "zh-CN",
  title: "雪莉智能家居",
  description:
    `雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司。Shelly Group(www.shelly.com) is a group of five companies delivering innovation through designing, producing and distributing high quality IoT products, driven by the inspiration of the end consumer's dream to live calmly and happily. Founded in Bulgaria and operating with a team of young talented developers devoted to producing competitive and easy-to-use products that change our world for the better, Shelly’s products have already conquered over 100 markets, with branch offices located in Germany, Slovenia, USA and China.`,
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  locales: {
    root: themeZh,
    en: themeEn,
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    image:{
      lazyLoading: true,
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache(),
      }),
    ],
  },
  themeConfig: {
    logo: "/images/logo_160x.svg",
    siteTitle: "雪莉智能家居",
    algolia: {
      appId: algoAppId,
      apiKey: algoAppKey,
      indexName: "www_shelly_asia_lef12ksijn_pages",
    },
  },
  head: htmlHeads,
  titleTemplate: ":title - shelly.asia",
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          cloudflare: "logos:cloudflare-workers-icon",
        },
      }),
    ],
    server: {
      allowedHosts: true,
    },
  },
  sitemap: {
    hostname:  process.env.BASE_URL ||"https://www.shellyiot.cn",
    lastmodDateOnly: true,
  },
});
