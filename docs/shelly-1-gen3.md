Shelly 1 Gen3

![Shelly 1 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 1 Gen3  
- **设备型号：** S3SW-001X16EU  
- **设备 SSID：** Shelly1G3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1018  

## 简要说明

Shelly 1 Gen3 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电气设备的远程控制。它可在本地 Wi-Fi 网络中独立运行，也可集成到基于云的家庭自动化服务中。相比前代产品，其搭载了升级版处理器和更大内存，性能更优。

只要设备保持连接至 Wi-Fi 路由器，即可通过互联网从任何位置进行远程访问、控制和监控。

该设备专为安装在标准电气墙盒内设计，适用于电源插座后方、灯开关后方或其他空间受限的位置。

Shelly 1 Gen3 内置网页界面，可用于监控、配置和控制设备。

## 主要特性

- **Wi-Fi 连接：** 连接到您的家庭 Wi-Fi 网络，支持通过移动应用或兼容设备实现远程监控与控制。
- **智能家居集成：** 兼容主流平台（如 Amazon Alexa、Google Assistant 和 Samsung SmartThings），支持语音控制与自动化。
- **本地与云端控制：** 可在本地网络中独立运行，并支持基于云的操作。
- **蓝牙连接：** 内置蓝牙低功耗（BLE）网关，便于设备设置及与 Shelly BLU 设备集成。
- **用户友好界面：** 配备物理复位按钮，用于手动配置和故障诊断。
- **性能提升：** 搭载更强处理器与更大内存，响应速度更快。
- **嵌入式网页界面：** 可通过浏览器访问，实现完整的设备管理与参数调整。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，室内有效距离可达 30 米（100 英尺），室外可达 50 米（160 英尺）。
- **干接点切换：** 支持使用无源继电器触点控制低压设备。
- **BLE 网关功能：** 在 Shelly BLU 设备与整个 Shelly 生态系统之间建立通信桥梁——接收 BLE 信号并转发至云端或本地设备。
- **Wi-Fi 信号扩展器：** 作为 Wi-Fi 中继器，接收、放大并重新传输现有 Wi-Fi 信号以扩大覆盖范围。
- **脚本支持：** 支持使用 Shelly Script 语言进行完整脚本编写。  
  [了解更多 →](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方系统集成。
- **定时调度：** 支持复杂的时间规则调度，可按日期、时间、星期几、小时、分钟和秒设定条件。
- **虚拟组件：** 可创建虚拟设备与组件，用于高级自动化场景。  
  [了解更多 →](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## 应用场景

- **远程设备控制：** 使用智能手机、平板电脑、PC 或家庭自动化系统随时随地开启或关闭电器。
- **联网便利性：** 只要设备连接到 Wi-Fi 网络，即可实现完全远程访问与控制。
- **家庭自动化：** 自动化家电控制，提升舒适度、节能效率与使用便捷性。

## 主要应用场景

- 住宅环境  
- 多户住宅单元（MDUs）：公寓、联排别墅、酒店  
- 轻型商业场所：小型办公室、零售商店、餐厅、加油站  
- 政府及市政建筑  
- 教育机构：大学与学院  

## 集成支持

### Amazon Alexa
支持功能：是

### Google Smart Home
支持属性：是

### Samsung SmartThings
支持功能：是

## 简化内部原理图

![Shelly Plus 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 1 个螺丝端子接线的开关/按钮输入  
- 1 个螺丝端子接线的无源触点继电器输入  
- 2 个螺丝端子接线的电源输入：N（零线）和 L（火线）

### 输出端口

- 1 个螺丝端子接线的无源触点继电器输出

## 连接方式

- Wi-Fi  
- 蓝牙（BLE）

## 安全功能

- 过热保护

## 支持负载类型

- **阻性负载：** 白炽灯泡、电加热设备  
- **容性负载：** 电容组、电子设备、电机启动电容  
- **带 RC 阻尼器的感性负载：** LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机

## 用户界面

### 输入端口

- **一个（控制）按钮**
  - 长按 5 秒：启用设备热点模式并开启蓝牙连接  
  - 长按 10 秒：执行恢复出厂设置

### 输出端口

- **LED 指示灯（单色）**
  - 启用 AP 模式但 Wi-Fi 关闭：1 秒亮 / 1 秒灭  
  - Wi-Fi 已启用但未连接：1 秒亮 / 3 秒灭  
  - 已连接至 Wi-Fi 网络：持续常亮  
  - 已启用云服务但未连接：1 秒亮 / 5 秒灭  
  - 已连接至 Shelly 云服务：持续常亮  
  - 正在进行 OTA（空中升级）：0.5 秒亮 / 0.5 秒灭  
  - 按下并长按 5 秒：0.5 秒亮 / 0.5 秒灭  
  - 按下并长按 10 秒：0.25 秒亮 / 0.25 秒灭  

> **注意：** LED 状态按优先级顺序排列，后续状态会覆盖先前状态。

## 规格参数

| 项目 | 参数值 |
|------|--------|
| **物理规格** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| 重量 | 26 g / 0.92 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合线、线鼻端子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 in |
| 安装方式 | 墙面安装盒 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 供电方式 | |
| | - 110–240 V~<br> | - 24–48 V⎓<br> | - 12 V⎓ |
| 功耗 | < 1.2 W |
| 外部保护 | 符合 EN60898-1 标准的电缆保护开关（B 或 C 型跳脱特性，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |
| **输出电路额定值** | |
| 最大开关电压 | |
| | - 240 V~<br> | - 30 V⎓ |
| 最大开关电流 | |
| | - 16 A / 240 V~<br> | - 10 A / 30 V⎓ |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2483 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米（100 英尺），室外最高 50 米（160 英尺）<br>（取决于本地环境条件） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2 with BLE |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米（33 英尺），室外最高 30 米（100 英尺）<br>（取决于本地环境条件） |
| **微控制器单元（MCU）** | |
| CPU | ESP-Shelly-C38F |
| Flash 存储 | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个钩子，每个最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![1 Gen3 AC](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ 电源供电*

![1 Gen3 DC](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–48 V⎓ 电源供电*

![1 Gen3 12V](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*12 V⎓ 稳压电源供电*

### 图例说明

| 符号 | 描述 |
|------|------|
| **导线** | |
| **L** | 火线（110–240 V~） |
| **N** | 零线 |
| **+** | 12/24–48 V⎓ 正极线 |
| **GND** | 12/24–48 V⎓ 接地线 |
| **+12V** | 12 V⎓ 正极端子 |
| **Ʇ** | 12/24–48 V⎓ 接地端子 |
| **SW** | 开关输入端子（控制 O） |
| **I** | 负载电路输入端子 |
| **O** | 负载电路输出端子 |
| **L** | 火线端子（110–240 V~） |
| **N** | 零线端子 |
| **+** | 24–48 V⎓ 正极端子 |

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Gen3 网页界面指南](../knowledge-base/shelly-1-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1G3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly 1 Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Gen3 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 合规档案存档

- [Shelly 1 Gen3 多语言欧盟符合性声明（第 48 版，2024-05-29）](https://kb.shelly.cloud/__attachments/344260610/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2048%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1 Gen3 多语言打印用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1-gen3-1)

## 安装指南

*(当前暂无可用安装指南)*