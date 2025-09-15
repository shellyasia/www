# Shelly 1PM Gen3

![Shelly 1PM Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 1PM Gen3  
- **设备型号：** S3SW-001P16EU  
- **设备SSID：** Shelly1PMG3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1019  

## 简要描述

Shelly 1PM Gen3 是一款紧凑型智能开关，内置电能测量功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。该设备可独立运行于本地 Wi-Fi 网络，也可通过基于云的家庭自动化服务进行操作。相比前代产品，其搭载了性能更强的处理器和更大的内存，显著提升了运行效率。

该设备支持从任何具备互联网连接的位置进行远程访问、控制与监控，前提是设备已连接至 Wi-Fi 路由器并接入互联网。

设计用于安装在标准电气墙盒内，或电源插座、灯控开关后方等空间受限的位置，提供灵活的安装选项。

设备内置网页界面，可用于配置、监控及实时控制。

## 主要特性

- **Wi-Fi 连接：** 支持连接家庭 Wi-Fi 网络（802.11 b/g/n），实现远程监控与控制。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **带电能测量的智能开关：** 作为可控开关使用的同时，可实时监测所连设备的功耗。
- **紧凑设计：** 小巧外形，适合安装在标准墙盒、插座或开关背后等狭小空间。
- **远程控制：** 可通过移动应用、网页界面或家庭自动化平台远程操控电器。
- **本地与云端运行：** 支持在本地网络独立工作，也可集成至云端服务。
- **性能提升：** 配备更快的处理器和更大内存，运行更流畅。
- **远程访问：** 当设备在线时，可在任何有互联网连接的地方进行控制与监控。
- **嵌入式 Web 界面：** 通过内置浏览器界面，实现完整的设备配置、状态监控与参数调整。
- **无线连接：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内外通信范围。
- **BLE 网关功能：** 通过接收蓝牙信号并将数据转发至云端或本地设备，实现 Shelly BLU 设备与整个 Shelly 生态系统的通信桥梁。
- **IoT 设备 Wi-Fi 扩展器：** 接收、放大并重新广播 Wi-Fi 信号，扩大覆盖范围。
- **脚本支持：** 支持使用 Shelly Script 语言进行完整脚本编写。  
  [了解更多 →](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成选项：** 支持第三方集成，通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 实现。
- **KNX 兼容性：** 支持 KNXnet/IP 通信。  
  [查看文档 →](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **定时调度：** 可基于日期、时间、星期几、小时、分钟和秒创建复杂定时任务。
- **虚拟组件：** 使用动态虚拟组件实现高级自动化逻辑。  
  [立即探索 →](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## 应用场景

- **电器控制：** 远程管理灯光、风扇、加热器及其他电器设备。
- **电能监控：** 实时跟踪能耗，识别低效设备并优化用电。
- **家庭自动化：** 集成至智能家庭系统的自动化场景与流程中。
- **节能优化：** 识别高耗电设备并采取措施降低整体用电量。
- **远程监控：** 在外出时通过联网设备查看并控制连接的设备。

## 主要应用场景

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售店、餐厅、加油站）
- 政府/市政机构
- 大学/学院

## 集成支持

### Amazon Alexa  
支持：是

### Google Smart Home  
支持属性：是

### Samsung SmartThings  
支持功能：是

## 简化内部原理图

![Shelly Plus 1PM 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 1 个螺丝端子开关/按钮输入：**SW**  
- 5 个螺丝端子电源输入：**2 N (+)** 和 **3 L (Ʇ)**

### 输出端口

- 1 个带电能测量功能的继电器输出，位于螺丝端子上：**O**

### 扩展接口

- Shelly 专有串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **警告！** 当设备通电时，扩展接口存在高压，请勿在运行过程中触碰。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热元件）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 吸收电路的感性负载（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、干衣机）

## 用户界面

### 输入部分

- 1 个（控制）按钮  
  - 长按 5 秒：进入热点模式并开启蓝牙配对。  
  - 长按 10 秒：恢复出厂设置。

### 输出部分

- 单色 LED 指示灯  
  - **AP 已启用，Wi-Fi 未连接：** 1 秒开 / 1 秒关  
  - **Wi-Fi 已启用，未连接：** 1 秒开 / 3 秒关  
  - **已连接到 Wi-Fi 网络：** 持续常亮  
  - **已启用云功能，未连接：** 1 秒开 / 5 秒关  
  - **已连接至 Shelly Cloud：** 持续常亮  
  - **OTA 更新进行中：** 0.5 秒开 / 0.5 秒关  
  - **长按按钮 5 秒：** 0.5 秒开 / 0.5 秒关  
  - **长按按钮 10 秒：** 0.25 秒开 / 0.25 秒关  

> *注：LED 状态按从上到下的优先级顺序执行，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | 27 g / 0.95 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合线、线鼻） |
| 导线剥皮长度 | 6 – 7 mm / 0.24 – 0.28 英寸 |
| 安装方式 | 墙面安装盒 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 红色 |
| 端子颜色 | 黑色 |

| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30 % 至 70 % RH |
| 最大海拔高度 | 2000 m / 6562 英尺 |

| **电气参数** | |
| 供电方式 | • 110–240 V~<br>• 24–30 V⎓ |
| 功耗 | < 1.2 W |
| 外部保护 | 符合 EN60898-1 标准的电缆保护开关：<br>• 脱扣特性 B 或 C<br>• 额定电流最大 16 A<br>• 最小分断能力 6 kA<br>• 能量限制等级 3 |

| **输出电路额定值** | |
| 最大切换电压 | • 240 V~<br>• 30 V⎓ |
| 最大切换电流 | • 16 A（240 V~）<br>• 10 A（30 V⎓） |

| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 交流电压表 | 是 |
| 交流电流表 | 是 |

| **无线通信** | |
| Wi-Fi | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2483 MHz |
| 最大射频功率 | < 20 dBm |
| 通信范围 | 室内最高 30 米（100 英尺）<br>室外最高 50 米（160 英尺）<br>（受环境条件影响） |

| 蓝牙 | |
| 协议 | 4.2（BLE） |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 通信范围 | 室内最高 10 米（33 英尺）<br>室外最高 30 米（100 英尺）<br>（受环境条件影响） |

| **微控制器单元（MCU）** | |
| CPU | ESP-Shelly-C38F |
| 闪存 | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 总共 20 个，每个钩子最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT | 是 |

## 基础接线图

![Plus 1PM 交流接线图-20240528-134438.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 V~ 供电**

![Plus 1pm 直流接线-20240528-134643.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 V⎓ 供电**

### 图例说明

| 符号 | 含义 |
|------|------|
| **O** | 负载电路输出端子 |
| **L** | 火线（110–240 V~） |
| **SW** | 开关（控制 O）输入端子 |
| **+** | 24–30 V⎓ 正极线 |
| **L** | 火线端子（110–240 V~） |
| **N** | 零线 |
| **N** | 零线端子 |
| **GND** | 24–30 V⎓ 接地线 |
| **+** | 24–30 V⎓ 正极端子 |
| **Ʇ** | 24–30 V⎓ 负极端子 |

## Shelly 智能控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 组件与 API

- [设备文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1PMG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly 1PM Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 澳新适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案**
- [Shelly 1PM Gen3 多语言欧盟符合性声明（49，2024-05-29）](https://kb.shelly.cloud/__attachments/344817789/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2049%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户指南

[Shelly 1PM Gen3 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [用户手册与安全指南（俄语）](../knowledge-base/shelly-1-pm-gen3)