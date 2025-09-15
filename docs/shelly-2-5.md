# Shelly 2.5

![](https://kb.shelly.cloud/__attachments/66256897/shelly25.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 2.5  
- **设备型号：** SHSW-25  
- **设备SSID：** shellyswitch25-XXXXXX  

## 简要说明

Shelly 2.5 是一款紧凑型双通道智能开关，具备功率测量和盖板控制功能。它支持通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器设备。该设备可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。

只要设备连接到 Wi-Fi 路由器并接入互联网，用户即可从任何有网络连接的地方远程访问、控制和监控 Shelly 2.5。

专为翻新安装设计，可适配标准电气墙盒、电源插座后方、开关背后或空间受限的位置。

设备内置网页界面，用于监控、控制及配置各项设置。

## 主要应用场景

- 住宅  
- 多住户单元（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![Shelly 2.5 内部原理图](https://kb.shelly.cloud/__attachments/229244941/2.5-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 两个螺丝端子接线的开关/按钮输入  
- 三个螺丝端子接线的电源输入：一个零线（N），两个火线（L）

### 输出

- 两个带内置功率测量功能的继电器输出，通过螺丝端子引出

### 扩展接口

- Shelly 专用串行接口

![Shelly 2.5 扩展接口](https://kb.shelly.cloud/__attachments/237502485/2.5-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意：** 当设备通电时，扩展接口存在高压，请谨慎操作。

## 连接方式

- Wi-Fi  
- 蓝牙（仅用于初始设备配对/添加）

## 安全特性

- 过热保护  
- 过载保护  
- 障碍物检测（在盖板模式下）  
- 安全开关（在盖板模式下）

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻容吸收电路的感性负载（LED驱动器、变压器、风扇、冰箱、空调）

## 用户界面

### 输入

- 一个（复位）按钮  
  - 按住 5 秒以启用接入点模式  
  - 按住 10 秒执行出厂重置

### 输出

- 红色 LED 指示灯，显示以下状态模式：

| 状态 | LED 闪烁模式 |
|------|--------------|
| 启用 AP 模式，Wi-Fi 关闭 | 1 秒亮 / 0.25 秒灭 |
| Wi-Fi 已启用，未连接 | 2 秒亮 / 0.25 秒灭 |
| 已连接到 Wi-Fi 网络 | 持续常亮 |
| 启用云服务，未连接 | 1 秒亮 / 5 秒灭 |
| 已连接至 Shelly Cloud | 持续常亮 |
| 正在进行 OTA（空中升级） | 0.5 秒亮 / 0.5 秒灭 |
| 按钮按住 5 秒 | 0.25 秒亮 / 0.25 秒灭 |
| 按钮按住 10 秒 | 0.125 秒亮 / 0.125 秒灭 |

> **注意：** 上述状态按优先级顺序排列，高优先级状态会覆盖低优先级状态。

## 规格参数

| **类别** | **类型** | **数值** |
|----------|--------|--------|
| **物理特性** | 尺寸（高×宽×深） | 36 × 39 × 17 ±0.5 mm / 1.42 × 1.54 × 0.67 ±0.02 英寸 |
| | 重量 | — |
| | 安装方式 | 墙面安装盒 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| | 外壳材质 | 塑料 |
| | 颜色 | 黑色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30% 至 70% RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | 供电电压 | 110–240 VAC / 30–50 VDC |
| | 功耗 | <1 W |
| | 最大切换电压（交流） | 240 V |
| | 最大切换电压（直流） | 50 V |
| | 最大切换电流（交流） | 每通道 10 A，总计 20 A |
| | 最大切换电流（直流） | 每通道 10 A，总计 20 A |
| **传感器与仪表** | 内置温度传感器 | 是 |
| | 功率表（交流） | 是 |
| **无线通信** | 射频频段 | 2401–2495 MHz |
| | 最大射频功率 | <20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 米，室外最高 50 米（受环境影响） |
| **微控制器** | CPU | ESP8266 |
| | Flash 存储容量 | 2 MB |
| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 动作） | 12 个钩子，每个钩子最多支持 5 个 URL |
| | 脚本支持 | 否 |
| | MQTT | 是 |
| | CoAP | 是 |

## 基础接线图

![2.5 交流接线图](https://kb.shelly.cloud/__attachments/243531777/2.5%20AC%20wiring%20diagram-20240528-140527.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![2.5 直流接线图](https://kb.shelly.cloud/__attachments/243531777/2.5%20DC%20wiring%20diagram-20240528-140926.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![2.5 盖板模式接线图](https://kb.shelly.cloud/__attachments/243531777/2.5%20cover%20mode%20wiring%20diagrams-20240528-140438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| **标签** | **描述** |
|---------|--------|
| **端子** | |
| **N** | 零线端子 |
| **L** | 火线端子（110–240 VAC） |
| **O1, O2** | 负载回路输出端子 |
| **+** | 30–50 VDC 正极导线 |
| **-** | 30–50 VDC 负极导线 |
| **SW1, SW2** | 开关输入端子 |
| **导线** | |
| **N** | 零线 |
| **L** | 火线（110–240 VAC） |

## 故障排除

*(内容待补充)*

## 网页界面指南

[阅读 Shelly 2.5 网页界面使用指南](../knowledge-base/shelly-2-5-web-interface-guide)

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen1/#shelly2-5)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)  

## 打印版用户手册

[下载打印版用户手册 – 英文、德文、意大利文、西班牙文、葡萄牙文、法文](https://kb.shelly.cloud/__attachments/65994767/Download%20printed%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规认证

[Shelly 2.5 多语言欧盟符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202.5%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

*(内容待补充)*

## 项目案例

### 智能家居：卷帘窗、灯光、场景控制

逐步指南：使用 Shelly 2.5 配置并控制卷帘窗与氛围照明，并与 Amazon Alexa 集成。若您还拥有 Shelly 门窗传感器，可学习如何创建自动场景——根据时间或门窗状态自动调节卷帘或灯光。

[了解更多](https://www.instructables.com/id/Home-Automation-Roller-Shutters-Lights-Scenes/)

### 天才自然啤酒冷却器：惊艳效果由 Shelly 智能设备控制

将排水管改造为地下天然啤酒冷却装置。通过电动水泵，在需要时将冰镇啤酒输送至表面。可通过 Siri 或 Alexa 远程控制——只需说一句：“Siri（或 Alexa），来杯啤酒。”

[了解更多](https://www.instructables.com/id/Genius-Natural-Beer-Cooler-With-Wow-Effect-Control/)

## 用户评价

### We Smart  
[Shelly 2.5 最佳安装方法](https://www.youtube.com/watch?v=X96PoQ8H-dc)

### Csongor Varga  
[Shelly 2.5 – 双通道 Wi-Fi 继电器，支持卷帘窗模式](https://www.youtube.com/watch?v=DIPzbCsSaa4)

### The Hook Up  
[UL 认证是否让产品更安全？专访 Shelly 关于 Shelly 2.5 的 UL 认证](https://www.youtube.com/watch?v=92b26PI6Z3c)