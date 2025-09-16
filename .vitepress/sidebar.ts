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
  const items = [...(categories as DefaultTheme.SidebarItem[])];
  
  items.map((item) => {
    item.collapsed = false;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `./${sub.link}`,
    }));
  });

  items.push(llm);

  return items;
};


export const sidebarsProductsEn = (): DefaultTheme.SidebarItem[] => {
  const items = [...(categories as DefaultTheme.SidebarItem[])];

  items.map((item) => {
    item.collapsed = false;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `./${sub.link}`,
    }));
  });


  items.push(llm);


  return items;
};

export const sidebarDocsZh = (): DefaultTheme.SidebarItem[] => [
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
