# Shelly 1PM Mini Gen3

![](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Mini%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 1PM Mini Gen3  
- **设备型号：** S3SW-001P8EU  
- **设备SSID：** Shelly1PMMiniG3-XXXXXX  
- **BLE 模型 ID：** 0x1016  

## 简要说明

Shelly 1PM Mini Gen3 是一款紧凑型智能开关，内置功率测量功能，可通过手机、平板电脑、PC 或家庭自动化系统远程控制电器。该设备可在本地 Wi-Fi 网络中独立运行，也可与基于云的家庭自动化服务集成。此设备是 Shelly Plus 1PM Mini 的升级版，采用更先进的处理器和更大的内存，性能显著提升。

通过互联网连接，用户可随时随地访问、控制和监控设备。本设备专为安装在标准电气墙盒内、插座后方、开关后方或空间受限的位置而设计。

设备配备嵌入式网页界面，用于配置、监控和实时控制。

## 主要特性

- **带功率测量的智能开关：** 作为智能开关使用，支持对连接设备进行实时功耗监测。
- **紧凑设计：** 小巧外形，适用于空间狭小的安装环境，如标准墙盒、插座或开关背后。
- **远程控制：** 支持通过智能手机、平板电脑、PC 或家庭自动化平台远程操作。
- **本地与云端运行：** 可在本地网络独立工作，并可通过基于云的服务进行管理。
- **增强型处理器与内存：** 升级硬件确保更快响应速度和更强的多任务处理能力。
- **远程访问：** 只要设备连接到 Wi-Fi，即可从任何有互联网接入的位置实现完全远程访问和监控。
- **嵌入式 Web 界面：** 内置网页界面，便于直观地管理和调整设备设置。
- **BLE 网关：** 作为蓝牙启用的 Shelly 设备与更广泛的 Shelly 生态系统之间的桥梁——接收 BLE 信号并转发至云端或本地非 BLE 设备。
- **物联网设备 Wi-Fi 范围扩展器：** 接收、放大并重新广播信号，扩大 Wi-Fi 覆盖范围。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成选项：** 兼容第三方家庭系统，支持 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）及 UDP。
- **KNX 集成：** 支持 KNXnet/IP 通信。
- **高级定时调度：** 支持基于日期、时间、星期几、小时、分钟和秒的复杂自动化规则。

## 应用场景

- **家电控制：** 远程自动控制灯光、风扇、加热器等设备。
- **电力监控：** 实时跟踪能耗，识别低效设备并优化用电。
- **智能家居集成：** 无缝融入智能家庭生态系统，创建自定义场景与定时任务。
- **能效优化：** 利用功率数据检测高耗电设备，做出明智决策以减少能源浪费。
- **远程监控：** 在离家时通过联网设备检查和管理连接设备。
- **空间受限安装：** 特别适合物理空间有限的改造项目。

## 集成支持

### Amazon Alexa 支持功能
是

### Google Smart Home 支持属性
是

### Samsung SmartThings 支持功能
是

## 简化内部原理图

![Shelly Plus 1PM Mini 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 一个接线端子上的开关/按钮输入  
- 两个接线端子上的电源输入：**N**（零线）和 **L**（火线）

### 输出

- 一个带功率测量功能的继电器输出，接于接线端子上

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- 蓝牙 4.2  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持负载类型

- 阻性负载（白炽灯泡、加热元件）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 一个控制按钮：
  - 长按 5 秒：进入设备热点模式并开启蓝牙配对。
  - 长按 10 秒：恢复出厂设置。

### 输出

- 单色 LED 指示灯，具有以下状态：

| 状态 | LED 行为 |
|------|----------|
| 启用 AP，Wi-Fi 关闭 | 1 秒 ON / 1 秒 OFF |
| Wi-Fi 已启用，未连接 | 1 秒 ON / 3 秒 OFF |
| 已连接 Wi-Fi 网络 | 持续亮起 |
| 已启用云服务但未连接 | 1 秒 ON / 5 秒 OFF |
| 已连接 Shelly Cloud | 持续亮起 |
| 正在进行 OTA（空中升级） | 0.5 秒 ON / 0.5 秒 OFF |
| 按下并长按 5 秒 | 0.5 秒 ON / 0.5 秒 OFF |
| 按下并长按 10 秒 | 0.25 秒 ON / 0.25 秒 OFF |

> **注意：** 状态优先级从上到下排列，高优先级状态会覆盖低优先级状态。

## 规格参数

| 类别 | 值 |
|------|----|
| **物理特性** | |
| 尺寸（高×宽×深） | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 in |
| 重量 | 18 ±1 g / 0.63 ±0.04 oz |
| 接线端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合、线鼻端子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 in |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 红色：C-3%；M-100%；Y-70%；K-12% |
| 接线端子颜色 | 黑色 |

| **环境条件** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |

| **电气参数** | |
| 供电电压 | 110 – 240 VAC |
| 继电器类型 | 常开触点，单极，微动触点 |
| 功耗 | < 1.2 W |
| 外部保护 | 断路器特性 B 或 C，额定电流 ≤10 A，分断能力 ≥6 kA，能量限制等级 3 |

| **输出电路额定值** | |
| 最大切换电压 | 240 VAC |
| 最大切换电流 | 8 A @ 240 VAC |
| 最大切换功率 | 2000 W |
| 功率测量 | 支持 |
| 电压保护/切断 | 支持 |
| 电流保护/切断 | 支持 |
| 最大功率保护/切断 | 支持 |

| **传感器与仪表** | |
| 内置温度传感器 | 支持 |

| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（受环境条件影响） |

| **蓝牙** | |
| 协议 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（受环境条件影响） |

| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 总共 20 个，每个支持最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT | 是 |
| UDP | 是 |
| 高级定时任务 | 是 |
| KVS（键值存储） | 是 |

## 基础接线图

![Plus-1PM-Mini 接线图](https://kb.shelly.cloud/__attachments/243531777/Plus-1PM-Mini-wiring-diagram-20240528-142356.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**接线端子**
- **SW**：开关输入端子（控制输出 O）
- **L**：火线（110–240 VAC）
- **O**：负载电路输出端子
- **N**：零线

**导线**
- **L**：火线端子（110–240 V）
- **N**：零线端子

## Shelly 智能控制

- [将设备添加至 Shelly 智能控制](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1PM Mini Gen3 网页界面指南](../knowledge-base/shelly-1pm-mini-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyMini1PMG3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 1PM Mini Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Mini 1PM Gen3 英国 PSTI ACT 符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Mini%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Mini 1PM Gen3 x2 英国 PSTI ACT 符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Mini%201PM%20Gen3%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1PM Mini Gen3 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案：**
- [Shelly 1PM Mini Gen3 多语言欧盟符合性声明（2023-12-13）](https://kb.shelly.cloud/__attachments/340328512/Shelly%201PM%20Mini%20Gen3%20nultilingual%20EU%20declaration%20of%20conformity%2024%202023-12-13.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1PM Mini Gen3 多语言打印用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Mini%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1pm-mini-gen3-1)

## 安装指南

- [Shelly 1PM Mini Gen3 安装指南](../knowledge-base/installation-guide-shelly-1pm-mini-gen3)