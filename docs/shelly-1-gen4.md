# Shelly 1 Gen4

![Shelly 1 Gen4](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称**：Shelly 1 Gen4  
- **设备型号**：S4SW-001X16EU  
- **设备SSID**：Shelly1G4-XXXXXXXXXXXX  
- **设备蓝牙ID**：0x1028  

## 简要说明

Shelly 1 Gen4 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电气设备的远程控制。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。

在连接互联网的情况下，只要设备保持与 Wi-Fi 路由器的连接，用户即可随时随地访问、控制和监控该设备。

专为改造安装设计，可适配标准电气墙盒，安装于电源插座后方、灯开关后方或其他空间受限的位置。

设备内置网页界面，用于配置、监控和控制。配备支持 Zigbee 和蓝牙连接的多协议无线 MCU，确保通信安全可靠。

此设备支持 Matter 协议。

## 主要特性

- **Wi-Fi 连接**：连接家庭 Wi-Fi 网络（802.11 b/g/n/ax），实现远程监控与控制。
- **智能家居集成**：兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **本地与云端控制**：可在本地网络独立运行，或通过云服务远程控制。
- **蓝牙连接**：支持蓝牙及 BLE，用于设置辅助和设备配对。
- **Zigbee 连接**：可接入 Zigbee 网络，扩展自动化能力。
- **用户友好界面**：配备物理复位按钮，便于手动操作。
- **升级处理器**：性能提升，全面支持 Zigbee。
- **嵌入式 Web 界面**：功能完整的 Web UI，用于设备管理与设置。
- **无线协议支持**：支持 Wi-Fi（802.11 b/g/n/ax）、蓝牙 5.0 和 Zigbee（802.15.4）。
- **干接点切换**：安全适用于低电压设备的开关控制。
- **BLE 网关**：通过将蓝牙信号转发至云端或本地设备，桥接 Shelly BLU 设备至更广泛的 Shelly 生态系统。
- **Wi-Fi 范围扩展器**：接收、放大并重新传输信号，增强和扩展 Wi-Fi 覆盖范围。
- **Zigbee 范围扩展器**：通过重复和强化信号，扩大 Zigbee 网络覆盖范围。
- **脚本支持**：使用 Shelly Script 语言实现自定义自动化（[了解更多](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)）。
- **广泛集成**：支持 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）、UDP 及第三方平台。
- **定时调度**：可精确到秒定义复杂的时间触发动作（日期、时间、星期几、小时、分钟、秒）。
- **虚拟组件**：创建虚拟设备以实现高级逻辑与自动化（[文档](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)）。
- **KNX Net/IP 支持**：可集成 KNX 系统，适用于工业与商业安装（[指南](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)）。

## 应用场景

### 远程电器控制  
通过移动设备、平板电脑、PC 或家庭自动化系统远程开启/关闭电气设备。

### 互联网连接便利性  
只要有互联网连接，无论身处何地，只要 Shelly 1 Gen4 连接在 Wi-Fi 网络上，即可进行控制。

### 家庭自动化  
实现家电的自动控制，提升舒适度与便捷性。

### 家庭自动化应用场景

#### 灯光控制
- 远程控制常规灯具（LED、白炽灯、卤素灯）。  
- 设置定时器或日程（如日落时开启门廊灯）。  
- 与运动传感器（如 Shelly BLU Motion）集成，实现基于人员存在的照明控制。

#### 车库门自动化
- 作为智能触发器控制车库门的开启与关闭。  
- 使用传感器输入（如 Shelly Plus 扩展模块）监测门的状态。  
- 通过 Alexa 或 Google Assistant 实现语音控制。

#### 风扇或通风控制
- 根据湿度水平（如使用 Shelly BLU H&T）自动控制浴室或厨房风扇。  
- 在特定时间段或根据人员存在状态启动通风。

#### 加热器或毛巾架开关
- 控制电热毛巾架或加热器（最大开关电流：16A）。  
- 可设定运行计划，或通过传感器（如 Shelly BLU H&T）关联温度阈值。

### 商业应用

#### 小型办公室或商铺照明自动化
- 根据营业时间控制照明区域。  
- 使用运动探测器（如 Shelly BLU Motion）实现节能。

#### 会议室占用检测
- 根据房间是否有人自动启用或禁用投影仪或音视频设备。

#### 安防与门禁系统
- 远程解锁门禁或栅栏用于送货。  
- 监控门禁点的开闭状态。

### 工业/公用设施应用场景

#### 设备监控与控制
- 对路由器、调制解调器或网络交换机执行远程断电重启。

#### 泵或电机控制
- 自动化温室或田间灌溉泵（最大开关电流：16A）。  
- 使用 Shelly Add-On 机械操纵器控制阀门。

## 主要应用领域

- 住宅  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政  
- 大学/学院  

## 集成支持

- **Amazon Alexa**：支持  
- **Google Smart Home**：支持  
- **Samsung SmartThings**：支持  

## 简化内部原理图

![Shelly Plus 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

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
- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（带 RC 吸收电路）（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机）

## 用户界面

### 输入
- **一个（控制）按钮**
  - 长按 5 秒：进入 AP 模式并启用蓝牙连接。  
  - 长按 10 秒：恢复出厂设置。  
  - 连续按下 5 次：从 Matter 固件切换至 Zigbee 模式。  
  - 连续按下 3 次：进入 Zigbee 加入模式（持续 2 分钟；可通过 Zigbee 中心在 HA 平台中可见）。

### 输出
- **LED（单色指示灯）**
  - AP 已启用，Wi-Fi 未启用：1 秒 ON / 1 秒 OFF  
  - Wi-Fi 已启用但未连接：1 秒 ON / 3 秒 OFF  
  - 已连接 Wi-Fi 网络：常亮 ON  
  - 云服务已启用但未连接：1 秒 ON / 5 秒 OFF  
  - 已连接 Shelly Cloud：常亮 ON  
  - OTA（空中更新）：0.5 秒 ON / 0.5 秒 OFF  
  - 按下并长按 5 秒：0.5 秒 ON / 0.5 秒 OFF  
  - 按下并长按 10 秒：0.25 秒 ON / 0.25 秒 OFF  

> *注：状态按列出顺序优先级排序，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 类别 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | 26 克 / 0.92 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合、线鼻） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙壁底盒 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 蓝色 |
| 端子颜色 | 灰色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30 % 至 70 % RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 供电方式 | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| 功耗 | < 1 W |
| 是否需要零线 | 否 |
| 外部保护 | 符合 EN60898-1 的电缆保护开关（B 或 C 型跳脱特性，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |
| **输出电路额定值** | |
| 最大开关电压 | 240 V~<br>30 V⎓ |
| 最大开关电流 | 16 A / 240 V~<br>10 A / 30 V⎓ |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| **无线射频** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n/ax |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米 / 100 英尺<br>室外最高 50 米 / 160 英尺<br>（取决于本地环境） |
| **蓝牙** | |
| 协议 | 5.0 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米 / 33 英尺<br>室外最高 30 米 / 100 英尺<br>（取决于本地环境） |
| **Zigbee** | |
| 协议 | 802.15.4 |
| Zigbee 中继功能 | 支持 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 100 米 / 328 英尺<br>室外最高 300 米 / 984 英尺<br>（取决于本地环境） |
| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C68F |
| Flash 存储 | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个，每个最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![1 Gen3 AC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
110–240 V~ 电源输入

![1 Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
24–48 V⎓ 电源输入

![1 Gen3 12V.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
12 V⎓ 稳压电源输入

### 图例

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

**导线标识**

## Shelly 智能控制
- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面
- [Shelly 1 Gen4 网页界面指南](../knowledge-base/shelly-1-gen4-web-interface-guide)

## 组件与 API
- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1G4)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 1 Gen4 多语言欧盟符合性声明（2025-07-25）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen4 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案 – Shelly 1 Gen4 欧盟 DoC（75 2025-03-10）](https://kb.shelly.cloud/__attachments/974127105/Shelly%201%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2075%202025-03-10.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册
- [Shelly 1 Gen4 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（俄语）](../knowledge-base/--)

## 安装指南
×