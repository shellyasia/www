# Shelly 1 Mini Gen4

![Shelly 1 Mini Gen4.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Mini%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1 Mini Gen4  
- **设备型号：** S4SW-001X8EU  
- **设备SSID：** Shelly1MiniG4-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1030  

## 简要说明

Shelly 1 Mini Gen4 是一款紧凑型智能开关，配备无源触点，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。作为 Shelly 1 Mini Gen3 的升级版，该设备采用更先进的处理器，并支持 Zigbee 连接。

只要设备保持连接到 Wi-Fi 路由器，即可通过互联网从任何位置远程访问、控制和监控。专为空间受限环境设计，可安装于标准电气墙盒内、电源插座后方、灯开关后方或其他狭小空间。

内置网页界面支持全面的监控与配置。设备搭载多协议无线 MCU，同时支持 Zigbee 和蓝牙，确保通信安全可靠。此外，还兼容 Matter 协议。

## 主要功能

- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，通过移动应用或兼容设备实现远程监控与控制。
- **智能家居集成：** 完全兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **蓝牙连接：** BLE 网关支持有助于设备设置与加入网络。
- **用户友好界面：** 配备物理重置按钮，便于手动配置。
- **性能提升的处理器：** 采用更新的硬件并集成 Zigbee 功能，显著提升性能。
- **Zigbee 支持：** 设置过程中可无缝接入现有 Zigbee 网络。
- **多协议无线通信：** 支持 Wi-Fi（802.11 b/g/n/ax）、蓝牙 5.0 和 Zigbee，具备明确的室内/室外覆盖范围。
- **干接点继电器：** 适用于安全切换低压设备。
- **BLE 网关：** 将蓝牙 enabled 的 Shelly 设备桥接到更广泛的 Shelly 生态系统，信号可转发至云端或本地设备。
- **Zigbee 范围扩展器：** 接收并重新传输 Zigbee 信号，扩大网络覆盖范围。
- **Wi-Fi 范围扩展器：** 增强并扩展 Wi-Fi 信号在更大区域内的覆盖。
- **脚本功能：** [Shelly 脚本语言特性](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成选项：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方系统。
- **定时调度：** 可基于日期、时间、星期几、小时、分钟和秒自定义时间窗口，执行复杂操作。
- **虚拟组件：** [虚拟动态组件指南](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP 支持：** [KNX 集成文档](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## 应用场景

- **远程电器控制：** 无论身处何地，只要有互联网连接即可开启/关闭电器。
- **联网便捷性：** 只要设备连接 Wi-Fi，即可实现完全远程访问。
- **节省空间的改造安装：** 适用于狭窄或标准电气箱内的安装。
- **家庭自动化：** 自动化电器控制，提升舒适度与便利性。

## 集成支持

### Amazon Alexa 支持的功能
是

### Google Smart Home 支持的属性
是

### Samsung SmartThings 支持的功能
是

## 简化内部原理图

![Shelly Mini 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 1 个螺丝端子上的开关/按钮输入  
- 1 个螺丝端子上的无源触点继电器输入  
- 2 个螺丝端子上的电源输入：N 和 L  

### 输出

- 1 个螺丝端子上的无源触点继电器输出  

## 连接方式

- Wi-Fi  
- 蓝牙  
- Zigbee  

## 安全功能

- 过热保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热元件）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 一个（控制）按钮  
  - 长按 5 秒：进入设备热点模式并启用蓝牙。  
  - 长按 10 秒：恢复出厂设置。  
  - 连续按下 5 次：从默认的 Matter 固件切换至 Zigbee 模式。  
  - 连续按下 3 次：进入 Zigbee 加入模式（持续 2 分钟）。设备将通过 Zigbee 网关出现在您的家庭自动化平台中。

### 输出

- LED 指示灯（单色）  
  - 热点已启用，Wi-Fi 已禁用：1 秒 ON / 1 秒 OFF  
  - Wi-Fi 已启用但未连接：1 秒 ON / 3 秒 OFF  
  - 已连接到 Wi-Fi 网络：持续亮起  
  - 已启用云服务但未连接：1 秒 ON / 5 秒 OFF  
  - 已连接到 Shelly Cloud：持续亮起  
  - 正在进行 OTA 更新：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 5 秒：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 10 秒：0.25 秒 ON / 0.25 秒 OFF  

> **注意：** 状态按从上到下的顺序处理，高优先级状态会覆盖低优先级状态。

## 规格参数

| 项目 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高×宽×深） | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 英寸 |
| 重量 | 19 ±1 g / 0.65 ±0.04 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lb-in |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合、线鼻子端子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色，C-95%；M-53%；Y-0%；K-0% |
| 连接器颜色 | 灰色（鼠灰色） |

| **环境参数** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30 % 至 70 % RH |
| 最大海拔高度 | 2000 m / 6562 英尺 |

| **电气参数** | |
| 供电电压 | 110 – 240 V~ |
| 继电器类型 | 无源常开触点，单极，微动触点 |
| 功耗 | < 1.2 W |
| 外部保护 | B 或 C 型脱扣特性，额定电流最大 10 A，最小分断能力 6 kA，能量限制等级 3 |

| **输出电路额定值** | |
| 最大切换电压 | 240 V~；30 V⎓ |
| 最大切换电流 | 8 A / 240 V~；5 A / 30 V⎓ |
| 最大输出功率 | 2000 W / 240 V~；150 W / 30 V⎓ |
| 电压保护/切断 | 否 |
| 电流保护/切断 | 否 |
| 最大功率保护/切断 | 否 |

| **传感器与计量** | |
| 内置温度传感器 | 是 |

| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n/ax |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 通信距离 | 室内最多 30 米 / 100 英尺；室外最多 50 米 / 160 英尺<br>（取决于当地环境条件） |

| **蓝牙** | |
| 协议 | 5.0 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 通信距离 | 室内最多 10 米 / 33 英尺；室外最多 30 米 / 100 英尺<br>（取决于当地环境条件） |

| **Zigbee** | |
| 协议 | 802.15.4 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 20 dBm |
| 通信距离 | 室内最多 100 米 / 328 英尺；室外最多 300 米 / 984 英尺<br>（取决于当地环境条件） |

| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C68F |
| Flash 存储 | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 动作） | 20 个钩子，每个钩子最多支持 5 个 URL |
| 脚本功能 | 支持 |
| MQTT 支持 | 支持 |

## 基础接线图

![Plus-1-Mini-Wiring-Diagram-20240528-142625](https://kb.shelly.cloud/__attachments/243531777/Plus-1-Mini-wiring-diagram-20240528-142625.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子标识**  
- **SW**：开关（控制 O）输入端子  
- **L**：火线（110–240 V~）  
- **O**：负载电路输出端子  
- **N**：零线  
- **I**：负载电路输入端子  
- **L**：火线（110–240 V）端子  
- **N**：零线端子  

**导线说明**  
- 使用符合规范的 AC 电线，具备良好绝缘和清晰标识

## Shelly 智能控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Mini Gen4 网页界面指南](../knowledge-base/shelly-1-mini-gen4-web-interface-guide)

## 组件与 API

- [本设备 API 参考](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyMini1G4)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly 1 Mini Gen4 多语言欧盟合规声明（2025-07-25）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Mini Gen4 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [合规文档归档](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide%2077%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1 Mini Gen4 多语言打印用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-1-mini-gen4-1)

## 安装指南

*(暂无内容提供)*