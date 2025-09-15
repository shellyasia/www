import { DefaultTheme } from "vitepress";
//import categories.json

import categories from "./categories.json" with { type: "json" };

export const sidebarsDoc = (): DefaultTheme.SidebarItem[] => {
  const items = categories as DefaultTheme.SidebarItem[];

  items.map((item) => {
    item.collapsed = false;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `./${sub.link}`,
    }));
  });

  const llm =
    {
      text: "LLM",
      collapsed: true,
      items: [
        {
          text: "Docs List",
          link: "../llms.txt",
        },
        {
          text: "Full Docs",
          link: "../llms-full.txt",
        },
        {
          text: "Tiny Docs",
          link: "../llms-small.txt",
        },
      ],
    } as DefaultTheme.SidebarItem;
  items.push(llm);


  return items;
};


export const sidebarsDocEn = (): DefaultTheme.SidebarItem[] => {
  const items = categories as DefaultTheme.SidebarItem[];

  items.map((item) => {
    item.collapsed = false;
    item.items = item.items?.map((sub) => ({
      text: sub.text,
      link: `./${sub.link}`,
    }));
  });

  // const llm =
  //   {
  //     text: "LLM",
  //     collapsed: true,
  //     items: [
  //       {
  //         text: "Docs List11",
  //         link: "../llms.txt",
  //       },
  //       {
  //         text: "Full Docs11",
  //         link: "../llms-full.txt",
  //       },
  //       {
  //         text: "Tiny Docs11",
  //         link: "../llms-small.txt",
  //       },
  //     ],
  //   } as DefaultTheme.SidebarItem;
  // items.push(llm);


  return items;
};

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
