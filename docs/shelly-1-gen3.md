Shelly 1 Gen3

![Shelly 1 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1 Gen3  
- **设备型号：** S3SW-001X16EU  
- **设备SSID：** Shelly1G3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1018  

## 简要说明

Shelly 1 Gen3 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。相较于前代产品，其采用升级版处理器并配备更大内存，性能显著提升。

只要设备保持连接到 Wi-Fi 路由器，即可通过互联网在全球范围内实现远程访问、控制和监控。

专为改造安装设计，可适配标准电气墙盒，安装于电源插座后方、灯开关附近或其他空间受限的位置。

内置网页界面，支持设备状态监控、控制及参数配置。

## 主要特性

- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，实现远程监控与控制。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **本地与云端控制：** 可在本地网络中独立运行，同时支持云端操作。
- **蓝牙连接：** 支持蓝牙低功耗（BLE）网关功能，有助于设备设置与集成。
- **用户友好界面：** 配备复位按钮，便于手动配置与故障排查。
- **升级的处理器与内存：** 更强硬件带来更佳性能与响应速度。
- **嵌入式 Web 界面：** 内置界面，用于设备管理与个性化设置。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内外覆盖范围。
- **干接点继电器：** 安全切换低压设备。
- **BLE 网关功能：** 作为 Shelly BLU 设备与更广泛 Shelly 生态系统之间的桥梁，将蓝牙信号转发至云端或本地设备。
- **物联网设备 Wi-Fi 范围扩展器：** 接收、放大并重新广播信号，扩大 Wi-Fi 覆盖范围。
- **脚本支持：** 支持完整脚本编写，使用 Shelly Script 语言 — [了解更多](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **丰富集成能力：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方系统。
- **定时调度：** 可基于日期、时间、星期几、小时、分钟和秒定义复杂计划。
- **虚拟组件：** 可创建动态虚拟设备 — [文档](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## 应用场景

- **远程电器控制：** 使用移动应用、平板电脑、PC 或家庭自动化平台从任意位置开关设备。
- **联网便捷性：** 当设备连接至 Wi-Fi 网络时，可实现全球范围内的访问与管理。
- **家庭自动化：** 自动化家电启停周期，提升舒适度与能源效率。

## 主要应用场景

- 住宅  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

### Amazon Alexa 支持功能  
是  

### Google Smart Home 支持属性  
是  

### Samsung SmartThings 支持功能  
是  

## 简化内部原理图

![Shelly Plus 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 1 个螺丝端子接线的开关/按钮输入  
- 1 个螺丝端子接线的无源触点继电器输入  
- 2 个螺丝端子接线的电源输入：N（零线）和 L（火线）  

### 输出

- 1 个螺丝端子接线的无源触点继电器输出  

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  

## 支持负载类型

- 阻性负载（白炽灯、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（带 RC 吸收电路）（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机）

## 用户界面

### 输入

- 1 个（控制）按钮  
  - 长按 5 秒：进入接入点模式并启用蓝牙连接  
  - 长按 10 秒：恢复出厂设置  

### 输出

- 单色 LED 指示灯  
  - AP 已启用，Wi-Fi 未启用：1 秒开 / 1 秒关  
  - Wi-Fi 已启用但未连接：1 秒开 / 3 秒关  
  - 已连接 Wi-Fi 网络：常亮  
  - 已启用云服务但未连接：1 秒开 / 5 秒关  
  - 已连接 Shelly 云：常亮  
  - 正在进行 OTA 更新：0.5 秒开 / 0.5 秒关  
  - 按下并长按 5 秒：0.5 秒开 / 0.5 秒关  
  - 按下并长按 10 秒：0.25 秒开 / 0.25 秒关  

> **注意：** LED 状态按列出顺序优先级排序，高优先级状态会覆盖低优先级状态。

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | 26 g / 0.92 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lb·in |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（单股、多股、线鼻子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 英寸 |
| 安装方式 | 墙面底盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 供电电压 | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| 功耗 | < 1.2 W |
| 外部保护 | 符合 EN60898-1 标准的电缆保护开关（跳闸特性 B 或 C，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |
| **输出电路额定值** | |
| 最大开关电压 | 240 V~<br>30 V⎓ |
| 最大开关电流 | 16 A / 240 V~<br>10 A / 30 V⎓ |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2483 MHz |
| 最大射频功率 | < 20 dBm |
| 通信范围 | 室内最高 30 米 / 100 英尺<br>室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2（BLE） |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 通信范围 | 室内最高 10 米 / 33 英尺<br>室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C38F |
| Flash 存储 | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 共 20 个，每个 Webhook 最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![1 Gen3 AC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 V~ 供电**

![1 Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 V⎓ 供电**

![1 Gen3 12V.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 V⎓ 稳压电源**

### 图例说明

**端子标识**  
- **I**：负载电路输入端子  
- **O**：负载电路输出端子  
- **L**：火线（110–240 V~）  
- **N**：零线  
- **SW**：开关（控制 O）输入端子  
- **+**：12/24–48 V⎓ 正极线  
- **+12V**：12 V⎓ 正极端子  
- **GND**：12/24–48 V⎓ 接地线  
- **L**：火线端子（110–240 V~）  
- **N**：零线端子  
- **+**：24–48 V⎓ 正极端子  
- **Ʇ**：12/24–48 V⎓ 接地端子  

**导线**  
- 颜色符合标准接线规范

## Shelly 智能控制

- [将设备添加至 Shelly 智能控制](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Gen3 网页界面指南](../knowledge-base/shelly-1-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 参考](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1G3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 1 Gen3 多语言欧盟合规声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案库**  
- [Shelly 1 Gen3 多语言欧盟合规声明（48，2024-05-29）](https://kb.shelly.cloud/__attachments/344260610/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2048%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1 Gen3 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1-gen3-1)

## 安装指南

*(暂无内容提供)*