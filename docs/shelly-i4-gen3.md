# Shelly i4 Gen3

![Shelly i4 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20i4%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly i4 Gen3  
- **设备型号：** S3SN-0024X  
- **设备 SSID：** ShellyI4G3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1812  

## 简要说明

Shelly i4 Gen3 是一款智能 Wi-Fi 开关输入设备，支持手动触发或取消场景、同步操作，以及复杂的触发场景。它可以控制其他连接的 Shelly 设备（包括开关、传感器及 HTTP/MQTT 控制的设备），非常适合家庭和小型商业自动化应用。

该设备体积紧凑，可安装于标准墙装开关后方，最多支持四个输入端口的状态指示与控制。相比前代产品，它配备了升级版处理器和更大内存，性能显著提升。

只要设备连接到 Wi-Fi 路由器，即可通过互联网随时随地进行远程访问和监控。Shelly i4 Gen3 专为嵌入标准电气墙盒设计，适用于插座后方、开关背后或空间狭小的位置。

设备内置网页界面，便于设置与控制，确保配置直观、操作简便。

## 主要功能

- **Wi-Fi 连接：** 连接到家庭网络，可通过手机 App 或兼容设备实现远程监控与控制。
- **Alexa 集成：** 支持通过 Amazon Alexa 的虚拟设备流程实现语音控制与自动化。
- **本地与云端控制：** 可在局域网内独立运行，也可通过基于云的家庭自动化服务远程操控。
- **蓝牙连接：** 内置 Bluetooth 4.2 并支持 BLE，有助于初始设置和设备发现。
- **用户友好界面：** 配备物理复位按钮，便于手动交互与故障诊断。
- **性能增强：** 升级处理器与增加内存，响应更快，运行更可靠。
- **嵌入式 Web 界面：** 提供功能完整的 Web UI，用于配置、监控及实时调整。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n）和 Bluetooth 4.2，具备明确的室内与室外覆盖范围。
- **BLE 网关功能：** 作为蓝牙启用的 Shelly 设备与更广泛的 Shelly 生态系统之间的桥梁——接收信号并转发至云端或本地非 BLE 设备。
- **物联网设备 Wi-Fi 范围扩展器：** 通过接收、放大并重新传输信号，扩大 Wi-Fi 覆盖范围，适用于大范围区域。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 与第三方平台兼容。
- **虚拟组件：** [虚拟动态组件文档](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## 应用场景

- **远程电器控制：** 使用手机、平板、PC 或家庭自动化系统从任何地点开启或关闭电器。
- **联网便捷性：** 只要设备连接 Wi-Fi 网络，即可随时、随地访问和管理。
- **智能家居自动化：** 实现电器的自动化电源管理，提升舒适度、节能效率与生活便利性。

## 主要应用场景

- 住宅  
- 多户单元（公寓、联排别墅、酒店等）  
- 轻型商用（小型办公室、零售店、餐厅、加油站等）  
- 政府与市政设施  
- 大学 / 学院  

## 集成支持

### Amazon Alexa 支持的功能  
是 – 通过虚拟设备流程实现  

### Google Smart Home 支持的特性  
否  

### Samsung SmartThings 支持的功能  
否  

## 简化内部原理图  
此设备无简化内部原理图。

## 设备电气接口

### 输入端口

- 4 个开关/按钮输入端子（SW1, SW2, SW3, SW4），采用螺丝端子连接  
- 3 个电源输入端子：1× N（零线），2× L（火线）

### 输出端口  
无  

### 扩展接口

- Shelly 专有串行接口  

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请小心操作。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  

## 用户界面

### 输入端口

- 一个（控制）按钮  
  - 长按 5 秒：启用设备热点并建立蓝牙连接  
  - 长按 10 秒：执行恢复出厂设置

### 输出端口

- 单色 LED 指示灯  
  - **热点启用，Wi-Fi 关闭：** 1 秒亮 / 1 秒灭  
  - **Wi-Fi 启用，未连接：** 1 秒亮 / 3 秒灭  
  - **已连接到 Wi-Fi 网络：** 持续常亮  
  - **云服务启用，未连接：** 1 秒亮 / 5 秒灭  
  - **已连接到 Shelly 云：** 持续常亮  
  - **正在进行固件更新（OTA）：** 0.5 秒亮 / 0.5 秒灭  
  - **长按按钮 5 秒：** 0.5 秒亮 / 0.5 秒灭  
  - **长按按钮 10 秒：** 0.25 秒亮 / 0.25 秒灭  

> **注意：** 上述状态按优先级从低到高排列，后续状态会覆盖前一状态。

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | 19 克 / 0.67 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lb-in |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合线、压线端子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 橙色 |
| 端子颜色 | 黑色 |

| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |

| **电气参数** | |
| 供电电压 | 110 – 240 V~ 50/60 Hz |
| 功耗 | < 1 W |

| **传感器与计量** | |
| 内置温度传感器 | 是 |

| **无线通信** | |
| Wi-Fi | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2483 MHz |
| 最大发射功率 | < 20 dBm |
| 通信距离 | 室内最高 30 米（100 英尺），室外最高 50 米（160 英尺）<br>（受环境条件影响） |

| 蓝牙 | |
| 协议 | Bluetooth 4.2 with BLE |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大发射功率 | < 4 dBm |
| 通信距离 | 室内最高 10 米（33 英尺），室外最高 30 米（100 英尺）<br>（受环境条件影响） |

| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |

| **固件功能** | |
| Webhooks（URL 操作） | 共 20 个；每个钩子最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![i4 Gen3-20240528-133422.png](https://kb.shelly.cloud/__attachments/243531777/i4%20Gen3-20240528-133422.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![i4 DC Gen3 带按钮 AC 符号图](https://kb.shelly.cloud/__attachments/243531777/i4%20DC%20Gen3%20with%20buttons%20AC%20symbol.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子标识**  
- **SW1, SW2, SW3, SW4**：开关/按钮输入端子  
- **L**：火线（110–240 V~）  
- **L**：火线端子（110–240 V~）  
- **N**：零线  
- **N**：零线端子  

**导线要求**  
- 符合规格范围内的实心或绞合导线（24–14 AWG）

## Shelly 智能控制

- [将设备添加至 Shelly 智能控制](../knowledge-base/add-new-device)

## Shelly Web 用户界面

- [Shelly i4 Gen3 Web 界面指南](../knowledge-base/shelly-i4-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 参考](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyI4G3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly I4 Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%20I4%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly i4 Gen3 澳新适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%20i4%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly i4 Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20i4%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案**
- [Shelly i4 Gen3 多语言欧盟符合性声明（50，2024-05-29）](https://kb.shelly.cloud/__attachments/342818818/Shelly%20i4%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2050%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly i4 Gen3 多语言打印用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%20i4%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全手册（保加利亚语）](../knowledge-base/shelly-i4-gen3-1)

## 安装指南

×