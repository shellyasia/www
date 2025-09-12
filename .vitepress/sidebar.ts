import { DefaultTheme } from "vitepress";

export const sidebarsDoc = (): DefaultTheme.SidebarItem[] => [
  {
    text: "文档",
    collapsed: true,
    items: [
      { text: "Motivation", link: "/docs/concepts/motivation" },
      { text: "Routers", link: "/docs/concepts/routers" },
      { text: "Benchmarks", link: "/docs/concepts/benchmarks" },
      { text: "Web Standard", link: "/docs/concepts/web-standard" },
      { text: "Middleware", link: "/docs/concepts/middleware" },
      {
        text: "Developer Experience",
        link: "/docs/concepts/developer-experience",
      },
      { text: "Hono Stacks", link: "/docs/concepts/stacks" },
    ],
  },
  {
    text: "Getting Started",
    collapsed: true,
    items: [
      { text: "Basic", link: "/docs/getting-started/basic" },
      { text: "Deno", link: "/docs/getting-started/deno" },
      { text: "Bun", link: "/docs/getting-started/bun" },
      { text: "Node.js", link: "/docs/getting-started/nodejs" },
    ],
  },


  {
    text: "Helpers",
    collapsed: true,
    items: [
      { text: "Accepts", link: "/docs/helpers/accepts" },
      { text: "Adapter", link: "/docs/helpers/adapter" },
      { text: "ConnInfo", link: "/docs/helpers/conninfo" },
      { text: "Cookie", link: "/docs/helpers/cookie" },
      { text: "css", link: "/docs/helpers/css" },

    ],
  },

  {
    text: "LLM",
    collapsed: true,
    items: [
      {
        text: "Docs List",
        link: "/llms.txt",
      },
      {
        text: "Full Docs",
        link: "/llms-full.txt",
      },
      {
        text: "Tiny Docs",
        link: "/llms-small.txt",
      },
    ],
  },
];
export const sidebarProducts = (): DefaultTheme.SidebarItem[] => [
  {
    text: "Applications",
    items: [
      {
        text: "Web API",
        link: "/examples/web-api",
      },
      {
        text: "Proxy",
        link: "/examples/proxy",
      },

    ],
  },

  {
    text: "Integrations",
    items: [
      {
        text: "Cloudflare Durable Objects",
        link: "/examples/cloudflare-durable-objects",
      },
      {
        text: "Cloudflare Queue",
        link: "/examples/cloudflare-queue",
      },


    ],
  },
];
