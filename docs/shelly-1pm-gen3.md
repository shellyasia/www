Shelly 1PM Gen3

![Shelly 1PM Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1PM Gen3  
- **设备型号：** S3SW-001P16EU  
- **设备SSID：** Shelly1PMG3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1019  

## 简要说明

Shelly 1PM Gen3 是一款紧凑型智能开关，内置功率测量功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器的远程控制。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。相比前代产品，其搭载了升级版处理器和更大内存，性能显著提升。

该设备支持在互联网连接状态下，从任意位置进行远程访问、控制和监控，前提是设备始终连接到 Wi-Fi 路由器并保持在线。

专为标准电气墙盒、插座后方、开关后方或其他狭小空间的改造安装设计，可无缝融入现有布线系统。

设备内嵌网页界面，用于配置、监控和实时控制。

## 主要特性

- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，实现远程监控与控制。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **带功率测量的智能开关：** 作为智能开关使用的同时，可实时测量所连设备的功耗。
- **紧凑设计：** 小巧外形，适用于标准墙盒、插座或开关背后等空间受限区域。
- **远程控制：** 可通过移动应用、网页浏览器或家庭自动化平台实现远程操作。
- **本地与云端运行：** 支持本地网络控制与云端管理两种模式。
- **升级处理器与内存：** 更强硬件保障更快响应速度与更优性能。
- **远程访问：** 从任何联网地点均可实现完整远程访问与监控。
- **内嵌网页界面：** 内置网页界面，便于快速设置、配置与故障诊断。
- **无线连接：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内与室外覆盖范围。
- **BLE 网关功能：** 作为 Shelly BLU 设备与整个 Shelly 生态系统之间的桥梁——接收蓝牙信号并转发至云端或本地设备。
- **物联网设备 Wi-Fi 信号扩展器：** 重复并增强您的 Wi-Fi 信号，扩展其他物联网设备的覆盖范围。
- **脚本支持：** 通过 [Shelly 脚本语言](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/) 实现。
- **广泛集成支持：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方系统。
- **KNX 支持：** 通过 KNXnet/IP 协议通信——[参见文档](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)。
- **定时调度：** 可根据日期、时间、星期几、小时、分钟和秒自定义复杂操作时窗。
- **虚拟组件：** 可创建虚拟设备以实现高级自动化场景——[了解更多](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)。

## 应用场景

- **家电控制：** 远程自动化控制灯光、风扇、加热器及其他电器设备。
- **电力监测：** 实时追踪能耗，识别效率低下问题并优化用电。
- **智能家居集成：** 与自定义场景和定时计划结合，融入智能家庭流程。
- **能效优化：** 识别高耗电设备并采取措施减少能源浪费。
- **远程监控：** 无论身处何地，只要有互联网连接即可监控和管理连接设备。

## 主要应用场景

- 住宅
- 多户单元（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售店、餐厅、加油站）
- 政府 / 市政机构
- 大学 / 学院

## 集成支持

### Amazon Alexa
支持功能：是

### Google Smart Home
支持属性：是

### Samsung SmartThings
支持功能：是

## 简化内部原理图

![Shelly Plus 1PM 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 1 个螺丝端子开关/按钮输入：**SW**  
- 5 个螺丝端子电源输入：**2 N (+)** 和 **3 L (Ʇ)**

### 输出

- 1 个带功率测量的继电器输出，位于螺丝端子：**O**

### 扩展接口

- Shelly 专用串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **警告！** 当设备通电时，扩展接口存在高压。运行期间切勿触碰裸露端子。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持负载类型

- 阻性负载（白炽灯泡、加热器具）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻尼器的感性负载（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、干衣机）  

## 用户界面

### 输入

- 1 个（控制）按钮  
  - 长按 5 秒：进入接入点模式，启用蓝牙配对。  
  - 长按 10 秒：执行出厂重置。

### 输出

- 单色 LED 指示灯  
  - AP 已启用，Wi-Fi 未启用：1 秒开 / 1 秒关  
  - Wi-Fi 已启用但未连接：1 秒开 / 3 秒关  
  - 已连接到 Wi-Fi 网络：持续常亮  
  - 已启用云功能但未连接：1 秒开 / 5 秒关  
  - 已连接至 Shelly 云：持续常亮  
  - 正在进行 OTA 更新：0.5 秒开 / 0.5 秒关  
  - 按钮长按 5 秒：0.5 秒开 / 0.5 秒关  
  - 按钮长按 10 秒：0.25 秒开 / 0.25 秒关  

> *注：* LED 状态按出现顺序优先级排序，后续状态会覆盖先前状态。

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | 27 g / 0.95 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（单股、多股、线鼻子） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙面安装盒 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 红色 |
| 端子颜色 | 黑色 |

| **环境条件** | |
| 环境工作温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |

| **电气参数** | |
| 电源输入 | 110–240 V~ 或 24–30 V⎓ |
| 功耗 | < 1.2 W |
| 外部保护 | 符合 EN60898-1 标准的电缆保护开关（脱扣特性 B 或 C，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |

| **输出电路额定值** | |
| 最大切换电压 | 240 V~ 或 30 V⎓ |
| 最大切换电流 | 16 A（240 V~），10 A（30 V⎓） |

| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 交流电压表 | 是 |
| 交流电流表 | 是 |

| **无线通信** | |
| Wi-Fi | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2483 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 m / 100 ft，室外最高 50 m / 160 ft<br>（受环境条件影响） |

| 蓝牙 | |
| 协议 | BLE 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 m / 33 ft，室外最高 30 m / 100 ft<br>（受环境条件影响） |

| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |

| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个钩子，每个钩子最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![Plus 1PM 交流接线图-20240528-134438.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 V~ 电源供电**

![Plus 1pm 直流接线-20240528-134643.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 V⎓ 电源供电**

### 图例说明

| 符号 | 描述 |
|------|------|
| **O** | 负载电路输出端子 |
| **L** | 火线（110–240 V~） |
| **SW** | 开关输入端子（控制 O） |
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
- [Shelly 1PM Gen3 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案：**
- [Shelly 1PM Gen3 多语言欧盟符合性声明（49，2024-05-29）](https://kb.shelly.cloud/__attachments/344817789/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2049%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户指南

- [Shelly 1PM Gen3 多语言打印用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全手册（保加利亚语）](../knowledge-base/shelly-1-pm-gen3)

## 安装指南

×