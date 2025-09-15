# Shelly 1 Mini Gen3

![](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Mini%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1 Mini Gen3  
- **设备型号：** S3SW-001X8EU  
- **设备SSID：** Shelly1MiniG3-XXXXXX  
- **BLE 模型 ID：** 0x1015  

## 简要说明

Shelly 1 Mini Gen3 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或智能家居系统实现对电气设备的远程控制。它可在本地 Wi-Fi 网络中独立运行，也可集成到基于云的智能家居服务中。该型号是 Shelly Plus 1 Mini 的增强版本，采用更先进的处理器和更大的内存。

只要设备保持连接至 Wi-Fi 路由器和互联网，即可从任何有网络连接的位置远程访问、控制和监控。

该设备专为标准电气墙盒、插座后方、开关后方或其他空间受限位置的改造安装而设计。

Shelly 1 Mini Gen3 内置网页界面，用于监控、控制和配置。

## 主要特性

- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，实现远程监控与控制。
- **智能家庭集成：** 支持 Google Assistant、Amazon Alexa 和 Samsung SmartThings，实现语音控制与自动化。
- **蓝牙连接：** 支持蓝牙及 BLE 网关功能，适用于设置阶段和设备配对。
- **用户友好界面：** 配备复位按钮，便于手动配置和故障排查。
- **升级的处理器与内存：** 硬件升级带来性能提升。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内外覆盖范围。
- **干触点继电器：** 安全切换低电压设备。
- **BLE 网关：** 作为 Shelly BLU 设备与更广泛 Shelly 生态系统之间的桥梁——接收蓝牙信号并转发至云端或本地设备。
- **Wi-Fi 范围扩展器：** 通过接收、放大并重新广播信号，扩展您的 Wi-Fi 覆盖范围。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛的集成选项：** 支持 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP，可与第三方系统集成。
- **高级定时调度：** 基于日期、时间、工作日、小时、分钟和秒进行复杂操作的定时安排。

## 应用场景

- **远程设备控制：** 使用移动应用、平板电脑、PC 或智能家居平台开启/关闭设备。
- **互联网连接便利性：** 在任何具备互联网接入的位置访问和管理设备。
- **节省空间的改造安装：** 可轻松安装在空间狭小处，如标准墙盒、插座或开关后方。
- **智能家居自动化：** 自动化家电电源管理，打造更智能、便捷的生活方式。

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

- 1 个螺丝端子上的开关/按钮输入  
- 1 个螺丝端子上的无源触点继电器输入  
- 2 个螺丝端子上的电源输入：N（零线）和 L（火线）

### 输出端口

- 1 个螺丝端子上的无源触点继电器输出

## 连接方式

- Wi-Fi  
- 蓝牙

## 安全功能

- 过热保护

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（LED 驱动器、变压器、风扇、冰箱、空调）

## 用户界面

### 输入

- **一个控制按钮**  
  - 长按 5 秒：进入接入点模式并启用蓝牙连接  
  - 长按 10 秒：恢复出厂设置

### 输出

- **单色 LED 指示灯**  
  - AP 已启用，Wi-Fi 未启用：1 秒开 / 1 秒关  
  - Wi-Fi 已启用但未连接：1 秒开 / 3 秒关  
  - 已连接到 Wi-Fi 网络：持续亮起  
  - 已启用云功能但未连接：1 秒开 / 5 秒关  
  - 已连接到 Shelly Cloud：持续亮起  
  - 正在进行 OTA（空中升级）：0.5 秒开 / 0.5 秒关  
  - 按下并长按 5 秒：0.5 秒开 / 0.5 秒关  
  - 按下并长按 10 秒：0.25 秒开 / 0.25 秒关  

> *注意：* LED 状态按从上到下的优先级生效，后续状态会覆盖前一状态。

## 规格参数

| 类别 | 数值 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 英寸 |
| 重量 | 19 ±1 g / 0.65 ±0.04 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lb·in |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合、线鼻子） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色：C-95%；M-53%；Y-0%；K-0% |
| 端子颜色 | 黑色 |

| **环境条件** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |

| **电气参数** | |
| 供电电压 | 110–240 VAC |
| 继电器类型 | 无源常开触点，单极，微触点 |
| 功耗 | < 1.2 W |
| 外部保护 | 断路特性 B 或 C；额定电流最大 10 A；最小分断能力 6 kA；能量限制等级 3 |

| **输出电路额定值** | |
| 最大切换电压 | 240 VAC / 30 VDC |
| 最大切换电流 | 8 A / 240 VAC；5 A / 30 VDC |
| 最大输出功率 | 2000 W / 240 VAC；150 W / 30 VDC |
| 电压保护/切断 | 否 |
| 电流保护/切断 | 否 |
| 最大功率保护/切断 | 否 |

| **传感器与计量** | |
| 内置温度传感器 | 是 |

| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米（100 英尺）；室外最高 50 米（160 英尺）<br>（取决于当地环境条件） |

| **蓝牙** | |
| 协议 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米（33 英尺）；室外最高 30 米（100 英尺）<br>（取决于当地环境条件） |

| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 共 20 个，每个 Webhook 最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT | 是 |
| UDP | 是 |
| 高级定时调度 | 是 |
| KVS（键值存储） | 是 |

## 基础接线图

![Plus-1-Mini-Wiring-Diagram-20240528-142625](https://kb.shelly.cloud/__attachments/243531777/Plus-1-Mini-wiring-diagram-20240528-142625.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子标识**  
- **SW**：开关（控制 O）输入端子  
- **L**：火线（110–240 VAC）  
- **O**：负载电路输出端子  
- **N**：零线  
- **I**：负载电路输入端子  
- **L**：火线（110–240 V）端子  
- **N**：零线端子  

**导线说明**  
- 请参考图表以正确布线和标记

## Shelly 智能控制

- [将设备添加至 Shelly 智能控制](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Mini Gen3 网页界面指南](../knowledge-base/shelly-1-mini-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyMini1G3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性认证

- [Shelly 1 Mini Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 x2 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案**  
- [Shelly 1 Mini Gen3 多语言欧盟符合性声明（2023-12-13）](https://kb.shelly.cloud/__attachments/340328450/Shelly%201%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2023%202023-12-13.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1 Mini Gen3 多语言打印用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Mini%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全手册（保加利亚语）](../knowledge-base/shelly-1-mini-gen3-1)

## 安装指南

- [Shelly 1 Mini Gen3 安装指南](../knowledge-base/installation-guide-shelly-1-mini-gen3)