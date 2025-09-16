import { sidebarDocsZh, sidebarsProductsEn } from "./sidebar";



export const themeEn= {
      label: "English",
      lang: "en-US",
      title: "Shelly Smart Home",
      description:
        "Shelly Asia Co., Ltd. brand. Parent company is a German listed company.",
      themeConfig: {
        logo: "/images/logo_160x.svg",
        siteTitle: "Shelly Asia",
        nav: [
          { text: "Products", link: "/en/products/" },
          { text: "Docs", link: "https://shelly-api-docs.shelly.cloud/" },
          {
            text: "Community",
            link: "https://community.shelly.cloud/",
          },
        ],
        sidebar: {
          "/en/docs/": sidebarDocsZh(),
          "/en/products/": sidebarsProductsEn(),
        },
        socialLinks: [

          { icon: "x", link: "https://x.com/shelly_IoT" },
          { icon: "youtube", link: "https://www.youtube.com/@Shelly_IoT" },
          { icon: "facebook", link: "https://www.facebook.com/Shelly.IoT" },
          { icon: "shopee", link: "https://shellycloud.en.alibaba.com" },
          // { icon: "github", link: "https://github.com/shellyasia/www.git" },
        ],
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
          message: "Powered by <a href=\"https://shelly.cloud\" target=\"_blank\">Shelly Smart Home</a>",
          copyright: "Copyright © 2021-present Shelly Smart Home (Shenzhen)",
        },
      },
    }