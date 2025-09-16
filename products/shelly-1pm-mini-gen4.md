# Shelly 1PM Mini Gen4

![Shelly 1PM Mini Gen4.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Mini%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 1PM Mini Gen4  
- **设备型号：** S4SW-001P8EU  
- **设备SSID：** Shelly1PMMiniG4-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1031  

## 简要说明

Shelly 1PM Mini Gen4 是一款紧凑型智能开关，集成电能测量功能，可通过智能手机、平板电脑、PC 或智能家居系统远程控制电器。该设备可在本地 Wi-Fi 网络下独立运行，也可通过基于云的智能家居服务进行操作。它是 Shelly 1PM Mini Gen3 的升级版本，配备了更先进的处理器，并新增了 Zigbee 连接功能。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络连接的位置实现远程访问、控制和监控。

专为安装在标准电气墙盒内、插座后方、开关后方或其他空间受限位置而设计，提供灵活的安装选项。

设备内置网页界面，用于配置、监控和管理。其多协议无线 MCU 支持 Zigbee 和蓝牙，确保连接安全可靠。Shelly 1PM Mini Gen4 还支持 Matter 协议。

## 主要特性

- **带电能测量的智能开关：** 作为智能开关使用，可实时监测所连接设备的功耗。
- **紧凑设计：** 小巧外形，非常适合安装在空间有限的位置，如标准电气墙盒、插座或开关背后。
- **远程控制：** 可通过移动应用、网页界面或智能家居平台实现远程操作。
- **本地与云端运行：** 支持本地独立控制，也兼容基于云的自动化服务。
- **Zigbee 连接：** 在设置过程中可用于设备配网，并集成至更大的 Zigbee 网络。
- **升级处理器：** 因硬件升级及对 Zigbee 的支持，性能显著提升。
- **远程访问：** 当连接 Wi-Fi 时，可通过互联网实现完整的远程访问、控制与监控。
- **嵌入式 Web 界面：** 内置网页界面，便于配置、查看状态和调整设置。
- **BLE 网关：** 通过接收蓝牙信号并将数据转发至云端或本地设备，将 Shelly BLU 设备接入更广泛的 Shelly 生态系统。
- **Zigbee 范围扩展器：** 接收、放大并重新传输信号，扩展 Zigbee 网络覆盖范围。
- **Wi-Fi 范围扩展器：** 接收、增强并重新广播信号，扩大 Wi-Fi 覆盖距离。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成选项：** 支持第三方家居系统，通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 实现对接。
- **KNX 支持：** 通过 **KNXnet/IP** 协议集成。  
  [KNX 文档](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **定时计划：** 支持基于日期、时间、星期几、小时、分钟和秒的复杂调度。
- **虚拟组件：** 可创建虚拟设备，用于高级自动化场景。  
  [虚拟组件指南](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNXnet/IP 集成：** 完全支持 KNXnet/IP 通信。  
  [KNX 集成参考](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## 应用场景

- **电器控制：** 远程自动化灯光、风扇、加热器及其他电气设备。
- **电能监测：** 实时跟踪连接电器的能耗，优化用电效率。
- **智能家居集成：** 嵌入自定义场景、流程和自动化工作流中，提升智能生活体验。
- **节能优化：** 识别高功耗设备并采取措施改善整体能效。
- **远程监控与控制：** 在离家时通过联网设备管理与监控电器。
- **空间受限安装：** 凭借小巧尺寸和可改造设计，特别适合狭小空间使用。

## 集成支持

### Amazon Alexa
支持功能：是

### Google Smart Home
支持属性：是

### Samsung SmartThings
支持功能：是

## 简化内部原理图

![Shelly Plus 1PM Mini 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 1 个螺丝端子开关/按钮输入  
- 2 个螺丝端子电源输入：N（零线）和 L（火线）

### 输出端口

- 1 个带电能测量功能的继电器输出，位于螺丝端子上（O – 负载输出）

## 连接方式

- Wi-Fi  
- 蓝牙（BLE 5.0）  
- Zigbee（802.15.4）

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护

## 支持的负载类型

- 阻性负载（如白炽灯泡、加热元件）  
- 容性负载（如电容组、电子设备、电机启动电容）  
- 感性负载（如 LED 驱动器、变压器、风扇、冰箱、空调）

## 用户界面

### 输入

- 1 个物理（控制）按钮：

  - 长按 5 秒：启用设备热点模式并进入蓝牙配对模式。  
  - 长按 10 秒：执行恢复出厂设置。  
  - 快速连续按 5 次：将固件从默认的 Matter 模式切换至 Zigbee 模式。  
  - 快速连续按 3 次：进入 Zigbee 加入模式（持续 2 分钟）。设备将在 Zigbee 网关的发现列表中出现。

### 输出

- 单色 LED 指示灯，具有以下状态：

  - **AP 已启用，Wi-Fi 未连接：** 1 秒亮 / 1 秒灭  
  - **Wi-Fi 已启用但未连接：** 1 秒亮 / 3 秒灭  
  - **已连接至 Wi-Fi 网络：** 持续常亮  
  - **已启用云服务但未连接：** 1 秒亮 / 5 秒灭  
  - **已连接至 Shelly 云服务：** 持续常亮  
  - **正在进行 OTA 升级：** 0.5 秒亮 / 0.5 秒灭  
  - **长按按钮 5 秒：** 0.5 秒亮 / 0.5 秒灭  
  - **长按按钮 10 秒：** 0.25 秒亮 / 0.25 秒灭  

> **注意：** LED 状态按优先级顺序判断 —— 后续状态会覆盖先前状态。

## 规格参数

| 项目 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高×宽×深） | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 英寸 |
| 重量 | 18 ±1 g / 0.63 ±0.04 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（单股、多股、线鼻子） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 红色，C-3%；M-100%；Y-70%；K-12% |
| 连接器颜色 | 灰色（鼠灰色） |

| **环境条件** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |

| **电气参数** | |
| 供电电压 | 110 - 240 V~ |
| 继电器类型 | 常开触点，单极，微动触点 |
| 外部保护 | B 或 C 型脱扣特性，额定电流最大 10 A，最小分断能力 6 kA，能量限制等级 3 |

| **输出电路额定值** | |
| 最大开关电压 | 240 V~ |
| 最大开关电流 | 240 V~ 下最大 8 A |
| 电能测量 | 支持 |
| 电压保护/切断 | 支持 |
| 电流保护/切断 | 支持 |
| 最大功率保护/切断 | 支持 |

| **传感器与仪表** | |
| 内置温度传感器 | 支持 |

| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n/ax |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米 / 室外最高 50 米（受环境影响） |

| **蓝牙** | |
| 协议 | BLE 5.0 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米 / 室外最高 30 米（受环境影响） |

| **Zigbee** | |
| 协议 | 802.15.4 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 100 米 / 室外最高 300 米（受环境影响） |

| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C68F |
| Flash 存储 | 8 MB |

| **固件功能** | |
| 定时计划 | 20 个 |
| Webhooks（URL 动作） | 共 20 个，每个 Webhook 最多支持 5 个 URL |
| 脚本支持 | 支持 |
| MQTT | 支持 |

## 基础接线图

![Plus-1PM-Mini 接线图 20240528-142356.png](https://kb.shelly.cloud/__attachments/243531777/Plus-1PM-Mini-wiring-diagram-20240528-142356.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子**

- **SW：** 开关输入端子（控制输出 O）  
- **L：** 火线（110–240 V~）  
- **O：** 负载电路输出端子  
- **N：** 零线  

**导线**

- **L：** 火线端子（110–240 V）  
- **N：** 零线端子  

## Shelly 智能控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1PM Mini Gen4 网页界面指南](../knowledge-base/shelly-1pm-mini-gen4-web-interface-guide)

## 组件与 API

- [设备 API 参考](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyMini1PMG4)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [多语言欧盟符合性声明（2025-07-21）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [英国 PSTI ACT 符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案 – 欧盟 DoC（2025-03-14）](https://kb.shelly.cloud/__attachments/999424427/Shelly%201PM%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2078%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册

- [多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Mini%20Gen%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1-pm-mini-gen4)

## 安装指南

×