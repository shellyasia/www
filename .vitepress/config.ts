import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'


const algoliaContent= '020BBEB17492C015'
const algoAppId= 'LEF12KSIJN'
const algoAppKey= '9f57cf109e7f595911c7da95d7f4e153'

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Concepts',
    collapsed: true,
    items: [
      { text: 'Motivation', link: '/docs/concepts/motivation' },
      { text: 'Routers', link: '/docs/concepts/routers' },
      { text: 'Benchmarks', link: '/docs/concepts/benchmarks' },
      { text: 'Web Standard', link: '/docs/concepts/web-standard' },
      { text: 'Middleware', link: '/docs/concepts/middleware' },
      {
        text: 'Developer Experience',
        link: '/docs/concepts/developer-experience',
      },
      { text: 'Hono Stacks', link: '/docs/concepts/stacks' },
    ],
  },
  {
    text: 'Getting Started',
    collapsed: true,
    items: [
      { text: 'Basic', link: '/docs/getting-started/basic' },
      {
        text: 'Cloudflare Workers',
        link: '/docs/getting-started/cloudflare-workers',
      },
      {
        text: 'Cloudflare Pages',
        link: '/docs/getting-started/cloudflare-pages',
      },
      { text: 'Deno', link: '/docs/getting-started/deno' },
      { text: 'Bun', link: '/docs/getting-started/bun' },
      {
        text: 'Fastly Compute',
        link: '/docs/getting-started/fastly',
      },
      { text: 'Vercel', link: '/docs/getting-started/vercel' },
      { text: 'Netlify', link: '/docs/getting-started/netlify' },
      {
        text: 'AWS Lambda',
        link: '/docs/getting-started/aws-lambda',
      },
      {
        text: 'Lambda@Edge',
        link: '/docs/getting-started/lambda-edge',
      },
      {
        text: 'Azure Functions',
        link: '/docs/getting-started/azure-functions',
      },
      {
        text: 'Google Cloud Run',
        link: '/docs/getting-started/google-cloud-run',
      },
      {
        text: 'Supabase Functions',
        link: '/docs/getting-started/supabase-functions',
      },
      {
        text: 'Ali Function Compute',
        link: '/docs/getting-started/ali-function-compute',
      },
      {
        text: 'Service Worker',
        link: '/docs/getting-started/service-worker',
      },
      { text: 'Node.js', link: '/docs/getting-started/nodejs' },
    ],
  },
  {
    text: 'API',
    collapsed: true,
    items: [
      { text: 'App', link: '/docs/api/hono' },
      { text: 'Routing', link: '/docs/api/routing' },
      { text: 'Context', link: '/docs/api/context' },
      { text: 'HonoRequest', link: '/docs/api/request' },
      { text: 'Exception', link: '/docs/api/exception' },
      { text: 'Presets', link: '/docs/api/presets' },
    ],
  },
  {
    text: 'Guides',
    collapsed: true,
    items: [
      { text: 'Middleware', link: '/docs/guides/middleware' },
      { text: 'Helpers', link: '/docs/guides/helpers' },
      {
        text: 'JSX',
        link: '/docs/guides/jsx',
      },
      {
        text: 'Client Components',
        link: '/docs/guides/jsx-dom',
      },
      { text: 'Testing', link: '/docs/guides/testing' },
      {
        text: 'Validation',
        link: '/docs/guides/validation',
      },
      {
        text: 'RPC',
        link: '/docs/guides/rpc',
      },
      {
        text: 'Best Practices',
        link: '/docs/guides/best-practices',
      },
      {
        text: 'Miscellaneous',
        link: '/docs/guides/others',
      },
      {
        text: 'FAQs',
        link: '/docs/guides/faq',
      },
    ],
  },
  {
    text: 'Helpers',
    collapsed: true,
    items: [
      { text: 'Accepts', link: '/docs/helpers/accepts' },
      { text: 'Adapter', link: '/docs/helpers/adapter' },
      { text: 'ConnInfo', link: '/docs/helpers/conninfo' },
      { text: 'Cookie', link: '/docs/helpers/cookie' },
      { text: 'css', link: '/docs/helpers/css' },
      { text: 'Dev', link: '/docs/helpers/dev' },
      { text: 'Factory', link: '/docs/helpers/factory' },
      { text: 'html', link: '/docs/helpers/html' },
      { text: 'JWT', link: '/docs/helpers/jwt' },
      { text: 'Proxy', link: '/docs/helpers/proxy' },
      { text: 'Route', link: '/docs/helpers/route' },
      { text: 'SSG', link: '/docs/helpers/ssg' },
      { text: 'Streaming', link: '/docs/helpers/streaming' },
      { text: 'Testing', link: '/docs/helpers/testing' },
      { text: 'WebSocket', link: '/docs/helpers/websocket' },
    ],
  },
  {
    text: 'Middleware',
    collapsed: true,
    items: [
      {
        text: 'Basic Authentication',
        link: '/docs/middleware/builtin/basic-auth',
      },
      {
        text: 'Bearer Authentication',
        link: '/docs/middleware/builtin/bearer-auth',
      },
      {
        text: 'Body Limit',
        link: '/docs/middleware/builtin/body-limit',
      },
      { text: 'Cache', link: '/docs/middleware/builtin/cache' },
      { text: 'Combine', link: '/docs/middleware/builtin/combine' },
      { text: 'Compress', link: '/docs/middleware/builtin/compress' },
      {
        text: 'Context Storage',
        link: '/docs/middleware/builtin/context-storage',
      },
      { text: 'CORS', link: '/docs/middleware/builtin/cors' },
      {
        text: 'CSRF Protection',
        link: '/docs/middleware/builtin/csrf',
      },
      { text: 'ETag', link: '/docs/middleware/builtin/etag' },
      {
        text: 'IP Restriction',
        link: '/docs/middleware/builtin/ip-restriction',
      },
      {
        text: 'JSX Renderer',
        link: '/docs/middleware/builtin/jsx-renderer',
      },
      { text: 'JWK', link: '/docs/middleware/builtin/jwk' },
      { text: 'JWT', link: '/docs/middleware/builtin/jwt' },
      { text: 'Logger', link: '/docs/middleware/builtin/logger' },
      { text: 'Language', link: '/docs/middleware/builtin/language' },
      {
        text: 'Method Override',
        link: '/docs/middleware/builtin/method-override',
      },
      {
        text: 'Pretty JSON',
        link: '/docs/middleware/builtin/pretty-json',
      },
      {
        text: 'Request ID',
        link: '/docs/middleware/builtin/request-id',
      },
      {
        text: 'Secure Headers',
        link: '/docs/middleware/builtin/secure-headers',
      },
      { text: 'Timeout', link: '/docs/middleware/builtin/timeout' },
      { text: 'Timing', link: '/docs/middleware/builtin/timing' },
      {
        text: 'Trailing Slash',
        link: '/docs/middleware/builtin/trailing-slash',
      },
      {
        text: '3rd-party Middleware',
        link: '/docs/middleware/third-party',
      },
    ],
  },
  {
    text: 'LLM',
    collapsed: true,
    items: [
      {
        text: 'Docs List',
        link: '/llms.txt',
      },
      {
        text: 'Full Docs',
        link: '/llms-full.txt',
      },
      {
        text: 'Tiny Docs',
        link: '/llms-small.txt',
      },
    ],
  },
]

export const sidebarsExamples = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Applications',
    items: [
      {
        text: 'Web API',
        link: '/examples/web-api',
      },
      {
        text: 'Proxy',
        link: '/examples/proxy',
      },
      {
        text: 'File upload',
        link: '/examples/file-upload',
      },
      {
        text: 'Bind a reverse proxy',
        link: '/examples/behind-reverse-proxy',
      },
      {
        text: 'Error handling in Validator',
        link: '/examples/validator-error-handling',
      },
      {
        text: 'Grouping routes for RPC',
        link: '/examples/grouping-routes-rpc',
      },
      {
        text: 'CBOR',
        link: '/examples/cbor',
      },
    ],
  },
  {
    text: '3rd-party Middleware',
    items: [
      {
        text: 'Zod OpenAPI',
        link: '/examples/zod-openapi',
      },
      {
        text: 'Hono OpenAPI',
        link: '/examples/hono-openapi',
      },
      {
        text: 'Swagger UI',
        link: '/examples/swagger-ui',
      },
      {
        text: 'Scalar',
        link: '/examples/scalar',
      },
      {
        text: 'Hono Docs Generator',
        link: '/examples/hono-docs',
      },
    ],
  },
  {
    text: 'Integrations',
    items: [
      {
        text: 'Cloudflare Durable Objects',
        link: '/examples/cloudflare-durable-objects',
      },
      {
        text: 'Cloudflare Queue',
        link: '/examples/cloudflare-queue',
      },
      {
        text: 'Cloudflare Testing',
        link: '/examples/cloudflare-vitest',
      },
      {
        text: 'Remix',
        link: '/examples/with-remix',
      },
      {
        text: 'htmx',
        link: '/examples/htmx',
      },
      {
        text: 'Stripe Webhook',
        link: '/examples/stripe-webhook',
      },
      {
        text: 'Prisma on Cloudflare',
        link: '/examples/prisma',
      },
      {
        text: 'Better Auth',
        link: '/examples/better-auth',
      },
      {
        text: 'Better Auth on Cloudflare',
        link: '/examples/better-auth-on-cloudflare',
      },
      {
        text: 'Pylon (GraphQL)',
        link: '/examples/pylon',
      },
      {
        text: 'Stytch Authentication',
        link: '/examples/stytch-auth',
      },
    ],
  },
]

export default defineConfig({
  lang: 'zh-CN',
  title: '雪莉智能家居',
  description:
    `雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司。Shelly Group(www.shelly.com) is a group of five companies delivering innovation through designing, producing and distributing high quality IoT products, driven by the inspiration of the end consumer's dream to live calmly and happily. Founded in Bulgaria and operating with a team of young talented developers devoted to producing competitive and easy-to-use products that change our world for the better, Shelly’s products have already conquered over 100 markets, with branch offices located in Germany, Slovenia, USA and China.`,
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '雪莉智能家居',
      description: '雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司。',
      themeConfig: {
        nav: [
          { text: '产品', link: '/products/' },
          { text: '文档', link: '/docs/' },
          {
            text: '讨论',
            link: 'https://community.shelly.cloud/',
          },
        ],
        sidebar: {
          '/': sidebars(),
          '/examples/': sidebarsExamples(),
        },
        editLink: {
          pattern: 'https://github.com/shellyasia/website/www/main/:path',
          text: '编辑此页',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '更新时间'
        },
        outline: {
          label: '本页目录',
        },
        footer: {
          message: '<span>工业和信息化部备案管理系统网站</span> <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" id="footer-message">粤ICP备2025380205号</a>',
          copyright: 'Copyright © 2021-present 雪莉智能家居(深圳)',
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Shelly Smart Home',
      description: 'Shelly Smart Home (Shenzhen) Co., Ltd. brand. Parent company is a German listed company.',
      themeConfig: {
        nav: [
          { text: 'Products', link: '/en/products/' },
          { text: 'Docs', link: '/en/docs/' },
          {
            text: 'Community',
            link: 'https://community.shelly.cloud/',
          },
        ],
        sidebar: {
          '/en/': sidebars(),
          '/en/examples/': sidebarsExamples(),
        },
        editLink: {
          pattern: 'https://github.com/shellyasia/website/www/main/:path',
          text: 'Edit this page',
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        outline: {
          label: 'On this page',
        },
        footer: {
          message: 'ICP Filing System Website',
          copyright: 'Copyright © 2021-present Shelly Smart Home (Shenzhen)',
        },
      }
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      md.use(groupIconMdPlugin)
    },
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache(),
      }),
    ],
  },
  themeConfig: {
    logo: '/images/logo_160x.svg',
    siteTitle: '雪莉智能家居',
    algolia: {
      appId: algoAppId,
      apiKey: algoAppKey,
      indexName: 'shelly',
    },
    socialLinks: [
      { icon: 'wechat', link: 'https://mp.weixin.qq.com/s/OPFw9A6wBbjMOVUjiDN12g' },
      { icon: 'x', link: 'https://x.com/shelly_IoT' },
      {icon:'youtube', link: 'https://www.youtube.com/@Shelly_IoT' },
      {icon:'facebook', link: 'https://www.facebook.com/Shelly.IoT' },
      { icon: 'github', link: 'https://github.com/shellyasia/www.git' },

    ],
  },
  head: [
    ['meta', { name: 'algolia-site-verification', content: algoliaContent }],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/shelly-title.png',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'shellyiot.cn' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: '/images/shelly-title.png',
      },
    ],
    [
      'meta',
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
    ['script', {}, `window.addEventListener('load', () => { const hostname = window.location.hostname; let message = '粤ICP备2025380205号';if (hostname.endsWith('.shellytech.net')) { message = '粤ICP备2025380205号-1'; } else if (hostname.endsWith('.shelly.asia')) { message = '粤ICP备2025380205号-2'; } else if (hostname.endsWith('.shellyiot.cn')) { message = '粤ICP备2025380205号-3'; } ; document.getElementById('footer-message').textContent = message; })`],
  ],
  titleTemplate: ':title - shellyiot.cn',
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          cloudflare: 'logos:cloudflare-workers-icon',
        },
      }),
    ],
    server: {
      allowedHosts: true,
    },
  },
  sitemap: {
    hostname: 'https://www.shellyiot.cn',
    lastmodDateOnly: true
  }
})
