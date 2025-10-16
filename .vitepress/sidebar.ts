import { DefaultTheme } from "vitepress";
//import categories.json

import categories from "./categories.json" with { type: "json" };


const llm =
  {
    text: "LLM",
    collapsed: true,
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
const learnIotItems: DefaultTheme.SidebarItem[] = [
  {
    text: "简介",
    items: [
      { text: "1.物联网简介", link: "/iot-for-beginners/1-getting-started/lessons/1-introduction-to-iot/index.md" },
      { text: "2.深入了解物联网", link: "/iot-for-beginners/1-getting-started/lessons/2-deeper-dive/index.md" },
      { text: "3.使用传感器和执行器与物理世界交互", link: "/iot-for-beginners/1-getting-started/lessons/3-sensors-and-actuators/index.md" },
      { text: "4.连接互联网", link: "/iot-for-beginners/1-getting-started/lessons/4-connect-internet/index.md" },
    ],
  },
  {
    text: "农场",
    items: [
      { text: "5.预测植物生长", link: "/iot-for-beginners/2-farm/lessons/1-predict-plant-growth/index.md" },
      { text: "6.检测土壤湿度", link: "/iot-for-beginners/2-farm/lessons/2-detect-soil-moisture/index.md" },
      { text: "7.自动化植物浇水", link: "/iot-for-beginners/2-farm/lessons/3-automated-plant-watering/index.md" },
      { text: "8.将植物迁移到云端", link: "/iot-for-beginners/2-farm/lessons/4-migrate-your-plant-to-the-cloud/index.md" },
      { text: "9.将应用程序迁移到云端", link: "/iot-for-beginners/2-farm/lessons/5-migrate-application-to-the-cloud/index.md" },
      { text: "10.保护您的植物", link: "/iot-for-beginners/2-farm/lessons/6-keep-your-plant-secure/index.md" },
    ],
  },
  {
    text: "交通",
    items: [
      { text: "11.位置追踪", link: "/iot-for-beginners/3-transport/lessons/1-location-tracking/index.md" },
      { text: "12.存储位置数据", link: "/iot-for-beginners/3-transport/lessons/2-store-location-data/index.md" },
      { text: "13.可视化位置数据", link: "/iot-for-beginners/3-transport/lessons/3-visualize-location-data/index.md" },
      { text: "14.地理围栏", link: "/iot-for-beginners/3-transport/lessons/4-geofences/index.md" },
    ],
  },
  {
    text: "制造业",
    items: [
      { text: "15.训练水果检测器", link: "/iot-for-beginners/4-manufacturing/lessons/1-train-fruit-detector/index.md" },
      { text: "16.检查设备中的水果", link: "/iot-for-beginners/4-manufacturing/lessons/2-check-fruit-from-device/index.md" },
      { text: "17.在边缘运行水果检测器", link: "/iot-for-beginners/4-manufacturing/lessons/3-run-fruit-detector-edge/index.md" },
      { text: "18.触发水果检测器", link: "/iot-for-beginners/4-manufacturing/lessons/4-trigger-fruit-detector/index.md" },
    ],
  },
  {
    text: "零售",
    items: [
      { text: "19.训练库存检测器", link: "/iot-for-beginners/5-retail/lessons/1-train-stock-detector/index.md" },
      { text: "20.检查设备中的库存", link: "/iot-for-beginners/5-retail/lessons/2-check-stock-device/index.md" },
    ],
  },
  {
    text: "消费者",
    items: [
      { text: "21.语音识别", link: "/iot-for-beginners/6-consumer/lessons/1-speech-recognition/index.md" },
      { text: "22.语言理解", link: "/iot-for-beginners/6-consumer/lessons/2-language-understanding/index.md" },
      { text: "23.语音反馈", link: "/iot-for-beginners/6-consumer/lessons/3-spoken-feedback/index.md" },
      { text: "24.多语言支持", link: "/iot-for-beginners/6-consumer/lessons/4-multiple-language-support/index.md" },
    ],
  },
];


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
        text: "实时事件",
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
  {
    text: "学习 IoT",
    collapsed: true,
    items: learnIotItems,
  },
  llm,

];
