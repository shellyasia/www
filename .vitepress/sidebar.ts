import { DefaultTheme } from "vitepress";

export const sidebarsDoc = (): DefaultTheme.SidebarItem[] => [
  {
    text: "产品",
    collapsed: false,
    items: [
      { text: "Shelly1Gen3", link: "/docs/shelly-1-gen3" },
      { text: "Shelly1Gen4", link: "/docs/shelly-1-gen4" },
      { text: "Shelly1MiniGen3", link: "/docs/shelly-1-mini-gen3" },
      { text: "Shelly1MiniGen4", link: "/docs/shelly-1-mini-gen4" },
      { text: "Shelly1PmMiniGen3", link: "/docs/shelly-1pm-mini-gen3" },
      { text: "Shelly1PmMiniGen4", link: "/docs/shelly-1pm-mini-gen4" },
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


export const sidebarsDocEn = (): DefaultTheme.SidebarItem[] => [
  {
    text: "Products",
    collapsed: false,
    items: [
      { text: "Shelly1Gen3", link: "/docs/shelly-1-gen3" },
      { text: "Shelly1Gen4", link: "/docs/shelly-1-gen4" },
      { text: "Shelly1MiniGen3", link: "/docs/shelly-1-mini-gen3" },
      { text: "Shelly1MiniGen4", link: "/docs/shelly-1-mini-gen4" },
      { text: "Shelly1PmMiniGen3", link: "/docs/shelly-1pm-mini-gen3" },
      { text: "Shelly1PmMiniGen4", link: "/docs/shelly-1pm-mini-gen4" },

  
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
    text: "Shelly Gen3",
    items: [
      {
        text: "Shelly 1 Gen3",
        link: "/products/shelly-1-gen3",
      },
      {
        text: "Shelly 1 mini Gen3",
        link: "/products/shelly-1-mini-gen3",
      },

    ],
  },

  {
    text: "Shelly Gen4",
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
