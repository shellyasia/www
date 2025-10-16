import { sidebarDocsZh, sidebarsProductsZh } from "./sidebar";

export const themeZh = {
    label: "简体中文",
    lang: "zh-CN",
    title: "雪莉智能家居",
    description:
        "雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司。",
    themeConfig: {
        nav: [
            { text: "产品", link: "/products/" },
            { text: "文档", link: "/docs/" },
            { text: "欧洲", link: "https://www.shelly.com/" },
            { text: "讨论", link: "https://community.shelly.cloud/" },
        ],
        socialLinks: [
            { icon: "wechat", link: "https://mp.weixin.qq.com/s/VnC3Dw_O-kmL3qI-sWCiHw" },
            { icon: "shopify", link: "https://mall.jd.com/index-20140293.html" },
            { icon: "github", link: "https://github.com/shellyasia/www" },
        ],
        sidebar: {
            "/docs/": sidebarDocsZh(),
            "/products/": sidebarsProductsZh(),
            "/iot-for-beginners/": sidebarDocsZh(),
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
            copyright: "Copyright © 2021-present 雪莉智能家居(深圳) <a href=\"mailto:marketing.asia@shelly.com\" title=\"marketing.asia@shelly.com\">联系我们</a>",
        },
    },
};