# Shelly Plus 1PM UL

![Shelly Plus 1PM UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201PM%20UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 简要说明

Shelly Plus 1PM UL 是一款通过 UL 认证的紧凑型智能开关，内置电能测量功能。它支持通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器设备。该设备可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。

只要设备连接到 Wi-Fi 路由器并接入互联网，用户即可从任何有网络连接的位置远程访问、控制和监控设备。

专为改造安装设计，可适配标准电气墙盒、电源插座后方、开关背面或其他空间受限的位置。

设备配备嵌入式网页界面，用于监控、控制和配置。

## 设备识别

- **设备名称**：Shelly Plus 1PM UL  
- **设备型号**：SNSW-001P15UL  
- **设备 SSID**：ShellyPlus1PM-XXXXXX  

## 主要应用场景

- 住宅  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

### Amazon Alexa 支持功能  
是  

### Google Smart Home 支持特性  
是  

### Samsung SmartThings 支持功能  
是  

## 简化内部原理图

![Plus-1PM-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407175169/Plus-1PM-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 一个螺丝端子上的开关/按钮输入：**SW**  
- 五个螺丝端子上的电源输入：**2 N (+)** 和 **3 L (Ʇ)**

### 输出

- 一个带电能测量功能的继电器输出，位于螺丝端子上：**O**

### 扩展接口

- Shelly 专有串行接口

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意**：当设备通电时，扩展接口存在高压，请勿触碰。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全特性

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻尼器的感性负载（LED 灯驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 一个（复位）按钮  
  - 按住 5 秒：启用设备热点及蓝牙连接  
  - 按住 10 秒：执行出厂重置

### 输出

- 单色 LED 指示灯  
  - **热点启用，Wi-Fi 关闭**：1 秒开 / 1 秒关  
  - **Wi-Fi 启用，未连接网络**：1 秒开 / 3 秒关  
  - **已连接 Wi-Fi 网络**：持续亮起  
  - **云服务启用，未连接**：1 秒开 / 5 秒关  
  - **已连接 Shelly Cloud**：持续亮起  
  - **OTA（空中升级）**：0.5 秒开 / 0.5 秒关  
  - **按钮按住 5 秒**：0.5 秒开 / 0.5 秒关  
  - **按钮按住 10 秒**：0.25 秒开 / 0.25 秒关  

> *注：列表从设备初始状态开始，后续状态会覆盖前一状态。*

## 规格参数

| **类别** | **类型** | **数值** |
|---------|--------|--------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| | 重量 | 27 克 / 0.95 盎司 |
| | 安装方式 | 墙面安装盒 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 14 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| | 外壳材质 | 塑料 |
| | 颜色 | 红色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | 供电电压 | 110–240 VAC，50/60 Hz<br>24–30 VDC |
| | 功耗 | < 1.2 W |
| | 最大开关电压（交流） | 240 V（单线） |
| | 最大开关电压（直流） | 30 V |
| | 最大开关电流（交流） | 15 A |
| | 最大开关电流（直流） | 10 A |
| | 内置温度传感器 | 是 |
| | 电压表（交流） | 是 |
| | 电流表（交流） | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | < 20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 米 / 100 英尺<br>室外最高 50 米 / 160 英尺<br>（受当地环境影响） |
| | 蓝牙协议 | 4.2 |
| | 蓝牙传输距离 | 室内最高 10 米 / 33 英尺<br>室外最高 30 米 / 100 英尺<br>（受当地环境影响） |
| **微控制器 (MCU)** | CPU | ESP32-U4WDH |
| | 闪存容量 | 4 MB |
| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 动作） | 20 个钩子，每个最多支持 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |
| | CoAP 支持 | 否 |

## 基础接线图

![Plus 1PM AC wiring diagram-20240528-134438.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 VAC 供电 – 阻性负载**

![Plus 1PM AC RC snubber-wiring-20240528-131329.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20RC%20snubber-wiring-20240528-131329.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 VAC 供电 – 带 RC 阻尼器的感性负载**

![Plus 1pm dc-wiring-20240528-134643.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 VDC 供电 – 阻性负载**

![Plus 1PM DC RC snubber-wiring-20240528-131529.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20DC%20RC%20snubber-wiring-20240528-131529.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 VDC 供电 – 带 RC 阻尼器的感性负载**

### 图例说明

**端子标识**  
- **O**：负载电路输出端子  
- **SW**：开关（控制 O）输入端子  
- **L**：火线（110–240 V）端子  
- **N**：零线端子  
- **+**：24–30 VDC 正极端子  
- **Ʇ**：24–30 VDC 接地端子  

**导线标识**  
- **+**：24–30 VDC 正极导线  
- **GND**：24–30 VDC 接地导线  
- **N**：零线导线  

## 故障排查

### 设备过热

- 避免将 **L** 和 **N** 端子用作跨接点。若将其作为桥接使用，会使电流加倍通过这些端子，导致过热。仅在总电流低于 15 A 的低电流应用中使用桥接才安全。  
- 确保环境温度不超过 40 °C（105 °F）。在封闭或狭小空间内，热量可能积聚。请确保设备周围有良好通风。

## 网页界面指南

[阅读 Shelly Plus 1PM, 1PM UL 网页界面指南](../knowledge-base/shelly-plus-1pm-web-interface-guide)

## 组件与 API

- [此设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印版用户手册

[Shelly Plus 1PM UL 双语打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201PM%20UL%20bilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)