# Shelly Plus i4

![](https://kb.shelly.cloud/__attachments/229146742/Plus-i4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus i4  
- **设备型号：** SNSN-0024X  
- **设备SSID：** ShellyPlusI4-XXXXXX  

## 简要说明

Shelly Plus i4 是一款智能 Wi-Fi 开关输入设备，可手动触发或禁用任意创建的场景，执行同步操作或复杂的触发逻辑。它能够控制其他连接的 Shelly 开关、传感器或通过 HTTP 和 MQTT 协议管理的设备。

该设备体积紧凑，可安装在标准墙开关后方，支持多达四个输入信号的状态指示与控制。只要设备连接到 Wi-Fi 路由器，即可实现远程访问和监控。

专为安装于标准电气墙盒中设计，适用于电源插座、灯具开关或其他狭小空间。

设备内置 Web 界面，用于配置和控制。

## 主要应用场景

- 住宅  
- 多住户单元（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售商店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

- Alexa（通过虚拟设备流程）

## 简化内部原理图

## 设备电气接口

### 输入端口

- 4 个螺丝端子开关/按钮输入：SW1、SW2、SW3、SW4  
- 3 个螺丝端子电源输入：1 N（零线）、2 L（火线）

### 输出端口

无

### 扩展接口

- Shelly 专用串行接口

![Shelly Plus i4 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压。请在连接或操作时格外小心。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全特性

- 过热保护

## 用户界面

### 输入端口

- 1 个（复位）按钮  
  - 按住 5 秒以启用接入点模式并建立蓝牙连接。  
  - 按住 10 秒执行出厂重置。

### 输出端口

- 单色 LED 指示灯  
  - **AP 已启用，Wi-Fi 未启用：** 1 秒亮 / 1 秒灭  
  - **Wi-Fi 已启用，未连接网络：** 1 秒亮 / 3 秒灭  
  - **已连接 Wi-Fi 网络：** 常亮  
  - **云服务已启用，未连接：** 1 秒亮 / 5 秒灭  
  - **已连接 Shelly Cloud：** 常亮  
  - **OTA（空中升级）：** 0.5 秒亮 / 0.5 秒灭  
  - **按钮按住 5 秒：** 0.5 秒亮 / 0.5 秒灭  
  - **按钮按住 10 秒：** 0.25 秒亮 / 0.25 秒灭  

> *注：* LED 状态按从上到下的顺序优先级排列，后续状态会覆盖前一个状态。

## 规格参数

| **类别** | **规格说明** |
|---------|------------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 英寸 |
| 重量 | 18 克 / 0.63 盎司 |
| 安装方式 | 墙盒安装 |
| 螺丝端子最大扭矩 | 0.4 N·m / 3.5 lbf·in |
| 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| 外壳材质 | 塑料 |
| 颜色 | 橙色 |
| **环境条件** | |
| 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 电源输入 | 110–240 VAC，50/60 Hz |
| 功耗 | <1 W |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| 射频频段 | 2400–2495 MHz |
| 最大射频输出功率 | <20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输范围 | 室内最高 30 米 / 100 英尺；室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| 蓝牙协议 | 4.2 |
| 蓝牙传输范围 | 室内最高 10 米 / 33 英尺；室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **主控单元 (MCU)** | |
| CPU | ESP32-U4WDH |
| Flash 存储 | 4 MB |
| **固件功能** | |
| Webhooks（URL 操作） | 共 20 个，每个钩子最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![](https://kb.shelly.cloud/__attachments/243531777/image-20220930-080819.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/243531777/image-20220930-080826.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子定义**  
- **SW1, SW2, SW3, SW4**：开关/按钮输入端子  
- **L**：火线（110–240 V）端子  
- **N**：零线端子  

**导线标识**  
- **L**：火线（110–240 V）导线  
- **N**：零线导线  

## 故障排查

...

## Web 界面使用指南

[阅读 Shelly Plus i4 Web 界面使用指南](../knowledge-base/shelly-plus-i4-web-interface-guide)

## 组件与 API 接口

- [此设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusI4)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)  

## 打印用户手册

[Shelly Plus i4 多语言打印版用户及安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20i4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规性文件

- [Shelly Plus i4 多语言欧盟符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 澳大利亚/新西兰适用性证书.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)