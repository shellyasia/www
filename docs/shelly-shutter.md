# Shelly Shutter

![Shelly Shutter Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Shutter%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Shutter  
- **设备型号：** S3SH-0A2P4EU  
- **设备SSID：** ShellyShutter-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1039  

## 简要说明

Shelly Shutter 是一款集成电能测量功能的紧凑型遮阳帘控制器，可通过智能手机、平板电脑、PC 或智能家居系统实现对百叶窗、遮光帘和百叶窗的远程控制。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的智能家居服务进行管理。支持维也纳百叶窗（Venetian blinds）。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络连接的位置实现远程访问、控制和监控。

适用于标准电气墙盒的 retrofit 安装，可安装在开关后方用于控制遮阳帘。

设备内置嵌入式网页界面，支持实时监控、配置与控制。

## 主要特性

- **智能遮阳帘控制器带电能测量功能：** 控制电动遮阳帘的同时，测量能耗以洞察使用模式。
- **紧凑设计：** 小巧外形适合安装于标准电气墙盒、插座后方、灯具开关或其它狭小空间。
- **远程控制：** 支持通过移动设备、平板电脑、PC 或智能家居平台进行远程操作。
- **本地与云端运行：** 可在本地网络独立工作，并兼容基于云的自动化服务。
- **升级处理器与内存：** 更强硬件性能，提升响应速度与整体表现。
- **远程访问：** 无论身处何地，只要有互联网连接即可实现完全远程访问与控制。
- **嵌入式 Web 界面：** 内置网页界面，用于配置、监控与控制。
- **BLE 网关功能：** 将蓝牙功能的 Shelly BLU 设备桥接到更广泛的 Shelly 生态系统——接收蓝牙信号并转发至云端或本地设备。
- **物联网设备 Wi-Fi 范围扩展器：** 接收、增强并重新传输信号，扩大覆盖范围。
- **脚本支持：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成支持：** 通过 HTTP API、MQTT(s)、HTTP/HTTPS Webhooks 和 UDP 兼容第三方家居系统。
- **KNXnet/IP 支持：** 实现与 KNX 网络的集成。详见文档：[KNX 文档](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **定时计划：** 创建复杂的时间驱动自动化规则，支持日期、一天中的时间、星期几、小时、分钟和秒。
- **虚拟组件：** 使用动态虚拟组件实现高级自动化逻辑。了解更多：[虚拟组件指南](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **维也纳百叶窗模式：** 支持远程控制电动百叶窗、卷帘门、遮阳篷等设备。可测量连接负载的电能消耗。连接前需确保电机已正确配置电子或机械限位开关。

## 应用场景

- **百叶窗控制：** 自动化并远程管理遮阳帘、百叶窗和遮阳篷。
- **电能监控：** 实时追踪连接电动设备的用电情况，优化能源效率。
- **智能家居集成：** 无缝融入智能家庭生态系统，创建自定义场景与定时任务。
- **节能优化：** 识别高能耗设备并相应调整行为。
- **远程监控：** 通过互联网连接随时随地监控与控制设备。

## 主要应用领域

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售店、餐厅、加油站等）
- 政府 / 市政机构
- 大学 / 学院

## 集成支持

### Amazon Alexa 支持的功能
是

### Google Smart Home 支持的属性
是

### Samsung SmartThings 支持的功能
是

## 设备电气接口

### 输入端口

- 两个接线端子上的开关/按钮输入：**S1** 和 **S2**
- 三个接线端子上的电源输入：**1 N (+)** 和 **2 L (Ʇ)**

### 输出端口

- 两个带电能测量功能的继电器输出，通过接线端子连接

### 扩展接口

- Shelly 专有串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **注意！** 当设备通电时，扩展接口存在高压，请在安装和维护时格外小心。

## 连接方式

- Wi-Fi
- 蓝牙

## 安全功能

- 过热保护
- 过压保护
- 过流保护
- 过功率保护
- 障碍物检测
- 安全开关

## 支持的负载类型

- 感性负载：用于卷帘门、百叶窗（包括维也纳百叶窗）和遮阳篷的双向交流电机，具备功率因数补偿功能

## 用户界面

### 输入部分

- 一个（控制）按钮：
  - 配对模式下短按一次，可连接另一设备（如 Shelly BLU Button）。
  - 长按 5 秒，启用设备热点（AP）及蓝牙连接。
  - 长按 10 秒，执行恢复出厂设置。

### 输出部分

- 单色 LED 指示灯状态如下：
  - **AP 已启用，Wi-Fi 未启用：** 1 秒亮 / 1 秒灭
  - **Wi-Fi 已启用，未连接：** 1 秒亮 / 3 秒灭
  - **已连接至 Wi-Fi 网络：** 持续常亮
  - **云服务已启用，未连接：** 1 秒亮 / 5 秒灭
  - **已连接至 Shelly Cloud：** 持续常亮
  - **正在进行固件升级（OTA）：** 0.5 秒亮 / 0.5 秒灭
  - **长按 5 秒按钮：** 0.5 秒亮 / 0.5 秒灭
  - **长按 10 秒按钮：** 0.25 秒亮 / 0.25 秒灭

> ⚠ LED 状态按从上到下的优先级顺序生效，高优先级状态会覆盖低优先级状态。

## 规格参数

| 类别 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高 × 宽 × 深） | 37 × 42 × 16 ± 0.5 mm / 1.46 × 1.65 × 0.63 ± 0.02 英寸 |
| 重量 | 30 g / 1.06 盎司 |
| 接线端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（单芯、多芯、线鼻子） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 英寸 |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 黑色 |
| 接线端子颜色 | 黑色 |
| **环境条件** | |
| 环境工作温度 | -20°C 至 40°C / -5°F 至 105°F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 供电电压 | 110–240 V~ 50/60 Hz |
| 功耗 | < 1.4 W |
| 外部保护装置 | B 或 C 型脱扣特性，额定电流 ≤16 A，分断能力 ≥6 kA，能量限制等级 3 |
| **输出电路额定值** | |
| 最大开关电压 | 240 V~ |
| 最大开关电流（交流） | 4 A（适用于带功率因数补偿的感性负载） |
| 支持电机类型 | 单相交流电机 |
| 必需限位开关类型 | 电子或机械式 |
| **传感器与计量** | |
| 交流电压表 | 支持 |
| 交流电流表 | 支持 |
| 内置温度传感器 | 支持 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | IEEE 802.11 b/g/n |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 有效范围 | 室内最高 30 米 / 室外最高 50 米（受环境影响） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 有效范围 | 室内最高 10 米 / 室外最高 30 米（受环境影响） |
| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |
| **固件功能** | |
| 定时计划数量 | 20 |
| Webhooks（URL 操作） | 总共 20 个，每个 Webhook 最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![Shelly Shutter Gen3 - AC 遮阳帘模式接线图](https://kb.shelly.cloud/__attachments/243531777/Shelly%20Shutter%20Gen3-AC%20cover%20mode-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| 符号 | 描述 |
|------|------|
| **O1, O2** | 负载电路输出端子 |
| **N** | 中性线及接线端子 |
| **L** | 火线（110–240 V~）及接线端子 |
| **S1, S2** | 开关输入端子 |

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 故障排查

...

## 合规与认证

### 合规文件

- [Shelly Shutter 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Shutter%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Shutter 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Shutter%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案 – 欧盟符合性声明（2025-03-04）](https://kb.shelly.cloud/__attachments/1238630410/Shelly%20Shutter%20multilingual%20EU%20declaration%20of%20conformity%2074%202025-03-04.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 组件与 API

- [设备文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly2PMG4)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 安装指南

- [将 Shelly Shutter 与 Shelly BLU Button Tough 1 配对](https://kb.shelly.cloud/knowledge-base/pairing-shelly-shutter-with-blu-button-tough-1)  
- [将 Shelly Shutter 与 Shelly BLU RC Button 4 配对](https://kb.shelly.cloud/knowledge-base/pairing-shelly-shutter-with-shelly-blu-rc-button-4)  
- [俄语版：Shelly Shutter 与 Shelly BLU Button Tough 1 配对指南](../knowledge-base/shelly-shutter-shelly-blu-button-tough-1)  
- [俄语版：Shelly Shutter 与 Shelly BLU RC Button 4 配对指南](../knowledge-base/shelly-shutter-shelly-blu-rc-button-4)

## 打印用户手册

- [Shelly Shutter Gen3 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Shutter%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（中文）](../knowledge-base/shelly-shutter-1)