import { defineConfig } from "vitepress";
import type { DefaultTheme, HeadConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { createFileSystemTypesCache } from "@shikijs/vitepress-twoslash/cache-fs";
import { sidebarProducts, sidebarsDoc } from "./sidebar";

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
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "雪莉智能家居",
      description:
        "雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司。",
      themeConfig: {
        nav: [
          { text: "产品", link: "/products/" },
          { text: "文档", link: "/docs/" },
          {
            text: "讨论",
            link: "https://community.shelly.cloud/",
          },
        ],
        sidebar: {
          "/": sidebarsDoc(),
          "/products/": sidebarProducts(),
        },
        editLink: {
          pattern: "https://github.com/shellyasia/www/blob/main/:path",
          text: "编辑此页",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        lastUpdated: {
          text: "更新时间",
        },
        outline: {
          label: "本页目录",
        },
        footer: {
          message:
            '<span>工业和信息化部备案管理系统网站</span> <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" id="footer-message">粤ICP备2025380205号</a>',
          copyright: "Copyright © 2021-present 雪莉智能家居(深圳)",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "Shelly Smart Home",
      description:
        "Shelly Smart Home (Shenzhen) Co., Ltd. brand. Parent company is a German listed company.",
      themeConfig: {
        nav: [
          { text: "Products", link: "/en/products/" },
          { text: "Docs", link: "/en/docs/" },
          {
            text: "Community",
            link: "https://community.shelly.cloud/",
          },
        ],
        sidebar: {
          "/en/": sidebarsDoc(),
          "/en/examples/": sidebarProducts(),
        },
        editLink: {
          pattern: "https://github.com/shellyasia/website/www/main/:path",
          text: "Edit this page",
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page",
        },
        lastUpdated: {
          text: "Last updated",
        },
        outline: {
          label: "On this page",
        },
        footer: {
          message: "ICP Filing System Website",
          copyright: "Copyright © 2021-present Shelly Smart Home (Shenzhen)",
        },
      },
    },
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
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
      indexName: "shelly",
    },

    // icons https://simpleicons.org/?q=shop
    socialLinks: [
      {
        icon: "wechat",
        link: "https://mp.weixin.qq.com/s/OPFw9A6wBbjMOVUjiDN12g",
      },
      { icon: "x", link: "https://x.com/shelly_IoT" },
      { icon: "youtube", link: "https://www.youtube.com/@Shelly_IoT" },
      { icon: "facebook", link: "https://www.facebook.com/Shelly.IoT" },
      { icon: "shopee", link: "https://shellycloud.en.alibaba.com" },
      { icon: "shopify", link: "https://mall.jd.com/index-20140293.html" },
      // { icon: "github", link: "https://github.com/shellyasia/www.git" },
    ],
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
    hostname: "https://www.shellyiot.cn",
    lastmodDateOnly: true,
  },
});
