Shelly 1 Mini Gen4

![Shelly 1 Mini Gen4.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Mini%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 1 Mini Gen4  
- **设备型号：** S4SW-001X8EU  
- **设备SSID：** Shelly1MiniG4-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1030  

## 简要说明

Shelly 1 Mini Gen4 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。该设备可独立运行于本地 Wi-Fi 网络，也可集成至基于云的家庭自动化服务。它是 Shelly 1 Mini Gen3 的升级版本，搭载更强大的处理器并支持 Zigbee 连接。

只要设备连接到 Wi-Fi 路由器和互联网，即可从任何有网络连接的位置进行远程访问、控制和监控。

Shelly 1 Mini Gen4 专为安装在标准电气墙盒中设计，适用于插座后方、开关后方或其他空间受限的位置。

设备内置网页界面用于监控与配置，并配备支持 Zigbee 和蓝牙的多协议无线微控制器（MCU），实现安全通信。该设备兼容 Matter 协议。

## 主要特性

- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，通过手机应用或兼容设备实现远程监控与控制。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **蓝牙连接：** 支持 BLE 网关功能，便于设备设置及加入生态系统。
- **用户友好界面：** 配备物理重置按钮，支持手动配置。
- **性能提升的处理器：** 硬件升级并集成 Zigbee 支持，性能显著增强。
- **Zigbee 连接：** 在设置和运行期间，可无缝集成至 Zigbee 网络。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n/ax）、蓝牙 5.0 和 Zigbee，并明确标注室内与室外覆盖范围。
- **干接点继电器：** 安全切换低压设备的理想选择。
- **BLE 网关：** 将蓝牙 enabled 的 Shelly 设备桥接到更广泛的 Shelly 生态系统，信号可转发至云端或本地非 BLE 设备。
- **Zigbee 范围扩展器：** 通过接收、增强并重新传输信号，扩大 Zigbee 网络的覆盖范围。
- **Wi-Fi 范围扩展器：** 接收、放大并重新广播信号，扩展更大区域的 Wi-Fi 覆盖。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成选项：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 与第三方家庭系统集成。
- **定时调度：** 支持基于日期、时间、工作日、小时、分钟和秒的复杂定时任务。
- **虚拟组件：** [虚拟动态组件指南](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP 支持：** [KNX 集成文档](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## 应用场景

- **远程电器控制：** 使用移动设备、平板电脑、PC 或家庭自动化平台远程开启/关闭电器。
- **互联网连接便利性：** 只要设备保持连接至 Wi-Fi 网络，即可随时随地访问和管理。
- **节省空间的改造安装：** 可轻松安装于标准墙盒、插座后方、开关后方或狭小空间。
- **家庭自动化：** 自动化家电控制，打造更智能、更便捷的生活体验。

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

### 输入端口

- 1 个螺丝端子接线的开关/按钮输入  
- 1 个螺丝端子接线的无源继电器输入  
- 2 个螺丝端子接线的电源输入：N（零线）和 L（火线）

### 输出端口

- 1 个螺丝端子接线的无源继电器输出

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

- **一个控制按钮**  
  - 长按 5 秒：启用设备热点并建立蓝牙连接。  
  - 长按 10 秒：执行恢复出厂设置。  
  - 快速连续按下 5 次：在 Matter 模式与 Zigbee 模式之间切换固件。  
  - 快速连续按下 3 次：进入 Zigbee 加入模式（持续 2 分钟）。此时设备可通过 Zigbee 网关被发现。

### 输出

- **单色 LED 指示灯**  
  - 启用 AP，Wi-Fi 关闭：1 秒亮 / 1 秒灭  
  - Wi-Fi 已启用但未连接：1 秒亮 / 3 秒灭  
  - 已连接至 Wi-Fi 网络：常亮  
  - 已启用云服务但未连接：1 秒亮 / 5 秒灭  
  - 已连接至 Shelly 云：常亮  
  - 正在进行 OTA 更新：0.5 秒亮 / 0.5 秒灭  
  - 按钮长按 5 秒：0.5 秒亮 / 0.5 秒灭  
  - 按钮长按 10 秒：0.25 秒亮 / 0.25 秒灭  

> *注意：状态按从上到下的优先级顺序处理，后续状态会覆盖前一状态。*

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理规格** | |
| 外形尺寸（高×宽×深） | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 英寸 |
| 重量 | 19 ±1 g / 0.65 ±0.04 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合线、线鼻） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色（C-95%；M-53%；Y-0%；K-0%） |
| 接口颜色 | 灰色（鼠标灰） |

| **环境参数** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |

| **电气参数** | |
| 电源输入 | 110–240 V~ |
| 继电器类型 | 无源常开触点，单极，微动触点 |
| 功耗 | < 1.2 W |
| 外部保护 | B 或 C 型脱扣特性，额定电流最大 10 A，最小分断能力 6 kA，能量限制等级 3 |

| **输出电路额定值** | |
| 最大开关电压 | 240 V~ / 30 V⎓ |
| 最大开关电流 | 8 A / 240 V~ / 5 A / 30 V⎓ |
| 最大输出功率 | 2000 W / 240 V~ / 150 W / 30 V⎓ |
| 电压保护/切断 | 否 |
| 电流保护/切断 | 否 |
| 最大功率保护/切断 | 否 |

| **传感器与仪表** | |
| 内置温度传感器 | 是 |

| **无线射频** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n/ax |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米（100 英尺），室外最高 50 米（160 英尺） *(受环境影响)* |

| **蓝牙** | |
| 协议 | 5.0 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米（33 英尺），室外最高 30 米（100 英尺） *(受环境影响)* |

| **Zigbee** | |
| 协议 | 802.15.4 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 100 米（328 英尺），室外最高 300 米（984 英尺） *(受环境影响)* |

| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C68F |
| Flash 存储 | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 总共 20 个，每个 Webhook 最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![Plus-1-Mini-Wiring-Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus-1-Mini-wiring-diagram-20240528-142625.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子定义**  
- **SW**：开关（控制 O）输入端子  
- **L**：火线（110–240 V~）  
- **O**：负载电路输出端子  
- **N**：零线  
- **I**：负载电路输入端子  
- **L**：火线（110–240 V）端子  
- **N**：零线端子  

**导线说明**  
- 标准交流布线，需注意极性和接地要求

## Shelly 智能控制

- [将设备添加至 Shelly 智能控制](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Mini Gen4 网页界面指南](../knowledge-base/shelly-1-mini-gen4-web-interface-guide)

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyMini1G4)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly 1 Mini Gen4 多语言欧盟符合性声明（2025-07-25）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Mini Gen4 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [合规文档归档](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide%2077%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册

- [Shelly 1 Mini Gen4 多语言打印版用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-1-mini-gen4-1)

## 安装指南

*(当前暂无可用安装指南。)*