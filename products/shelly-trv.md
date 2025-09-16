# Shelly TRV

将您家中的旧温控阀更换为 Shelly TRV，每个暖气片更换时间不到 5 分钟，并可随时随地通过手机、平板、电脑或家庭自动化系统进行控制。Shelly TRV 配备可充电电池，续航时间最长可达 2 年（具体取决于使用频率和网络质量）。

![Shelly TRV](https://kb.shelly.cloud/__attachments/229146742/Shelly-TRV.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly TRV  
- **设备 SSID：** shellytrv-XXXXXX  

## 简要说明

Shelly TRV 是一款带可充电电池的智能恒温阀，可通过智能手机、平板电脑、PC 或家庭自动化系统实现远程控制暖气片。它可在本地 Wi-Fi 网络中独立运行，也可与基于云的家庭自动化服务集成。

只要设备连接到 Wi-Fi 路由器并接入互联网，您即可从任何具备网络连接的位置远程访问、控制和监控 Shelly TRV。

设备内置网页界面，用于监控、控制和调整设置。

## 主要应用场景

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业场所（小型办公楼、小型零售店、餐厅、加油站等）
- 政府/市政机构
- 大学/学院

## 兼容集成

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 输入接口

- USB Type-C 充电接口

## 连接方式

- Wi-Fi

## 用户界面

### 输入操作

- **重置按钮**
  - 按住 5 秒以进入设备热点模式（Device Access Point 模式）。
  - 按住 10 秒执行恢复出厂设置。

- **上/下按钮**
  - **调节温度：** 轻触任一按钮 1 秒，屏幕将显示当前室温 3 秒。也可长按任一按钮 3 秒查看当前温度，随后使用上下按钮设定目标温度（范围：5°C 至 30°C）。
  - **查看状态：** 同时按住两个按钮 5 秒，然后使用任一按钮滚动浏览系统参数（包括工作模式、电池电量和运行状态）。

### 输出显示

- 两位七段数码管 LED 显示屏

## 支持的阀门类型

### 不使用适配器

- M30 × 1.5

### 使用随附适配器

- Danfos  
  - RA  
  - RAV  
  - RAVL  
- Caleffi  
- Giacomini  
- M28 × 1.5  
  - Sam  
  - Slovarm  
  - Comap  
  - Markardys  
  - TA  
  - Herz  
  - MMA  
  - Remagg  
  - Pont à Mousson  

### 使用第三方适配器

- Gampper（27 mm 螺纹，内螺纹 M22）
- Glacomini
- Ista
- Meges（M38 × 1.5）
- Ondal（M38 × 1.5）
- Oventrop（M30 × 1.0，带 4 个凸台）
- Rossweiner（M33 × 2.0）
- Vallant（30.5 mm）

查看完整的兼容阀门列表：

[Shelly TRV 阀门兼容性列表](https://kb.shelly.cloud/__attachments/169279501/Shelly%20TRV%20valves%20compatibility%20list?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 规格参数

| **类别**             | **规格说明** |
|----------------------|--------------|
| **物理特性**         |              |
| 尺寸（高×宽×深）     | 94 × 62 × 53 mm / 3.7 × 2.44 × 2.08 英寸 |
| 重量                 | 240 g / 8.46 盎司 |
| 安装方式             | 暖气片阀门 |
| 安装环尺寸           | M30 × 1.5 |
| 外壳材质             | 塑料 |
| 颜色                 | 白色 |
| **环境要求**         |              |
| 环境温度             | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度                 | 30 % 至 70 % RH |
| **电气性能**         |              |
| 电源（电池）         | 锂离子电池 3.7 V / 6500 mAh |
| 电池预计寿命         | 最长达 2 年（取决于使用频率和网络状况） |
| 电源（USB）          | Type-C（电源适配器和数据线不包含） |
| **无线通信**         |              |
| 射频频段             | 2401 – 2495 MHz |
| 最大射频输出功率     | <20 dBm |
| Wi-Fi 协议           | 802.11 b/g/n |
| Wi-Fi 传输距离       | 室内最高 30 米 / 100 英尺；室外最高 50 米 / 160 英尺（受环境影响） |
| **主控单元 (MCU)**  |              |
| 处理器               | SiLabs WGM160P |
| 闪存容量             | 6 MB |
| **固件功能**         |              |
| 定时计划             | 5 个配置文件 |
| Webhooks（URL 动作） | 6 个钩子，每个钩子最多支持 5 个 URL |
| 脚本支持             | 否 |
| MQTT 支持            | 是 |
| CoAP 支持            | 是 |
| **传感器**           |              |
| 内置温度传感器       | 是 |

## 故障排除

*(内容待补充)*

## 网页界面指南

[阅读 Shelly TRV 网页界面指南](../knowledge-base/shelly-trv-web-interface-guide)

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen1/#shelly-trv)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印用户手册

[多语言用户手册 – 英文、德语、意大利语、西班牙语、葡萄牙语、法语](https://kb.shelly.cloud/__attachments/169279501/Multilanguage%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规声明

[Shelly TRV 多语言欧盟符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20TRV%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [Shelly TRV 用户与安全指南](../knowledge-base/shelly-trv-user-and-safety-guide)