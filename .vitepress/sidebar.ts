import { DefaultTheme } from "vitepress";
//import categories.json

import categories from "./categories.json" with { type: "json" };


const llm =
  {
    text: "LLM",
    collapsed: false,
    items: [
      {
        text: "AI Docs",
        link: "/llms.txt",
      },
      {
        text: "Full AI Docs",
        link: "/llms-full.txt",
      },
      {
        text: "Tiny AI Docs",
        link: "/llms-small.txt",
      },
    ],
  } as DefaultTheme.SidebarItem;

export const sidebarsProductsZh = (): DefaultTheme.SidebarItem[] => {
  const items = JSON.parse(JSON.stringify(categories)) as DefaultTheme.SidebarItem[];

  items.forEach((item) => {
    item.collapsed = true;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `/products/${sub.link}`,
    }));
  });


  return items;
};


export const sidebarsProductsEn = (): DefaultTheme.SidebarItem[] => {
  const items = JSON.parse(JSON.stringify(categories)) as DefaultTheme.SidebarItem[];

  items.forEach((item) => {
    item.collapsed = true;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `/en/products/${sub.link}`,
    }));
  });




  return items;
};

export const sidebarDocsZh = (): DefaultTheme.SidebarItem[] => [
  {
    text: "Cloud Control API",
    items: [
      {
        text: "快速入门",
        link: "/docs/cloud-control-api",
      },
      {
        text: "通讯协议",
        link: "/docs/cloud-control-api-communication-v2",
      },
      {
        text: "失序事件",
        link: "/docs/cloud-control-api-real-time-events",
      },

    ],
  },

  {
    text: "Integrator API",
    items: [
      {
        text: "快速入门",
        link: "/docs/integrator-api",
      },
      {
        text: "用户",
        link: "/docs/integrator-api-users",
      },
      {
        text: "通讯",
        link: "/docs/integrator-api-communication",
      },
      {
        text: "示例代码",
        link: "/docs/integrator-api-demo-code",
      },


    ],
  },
    llm,

];
