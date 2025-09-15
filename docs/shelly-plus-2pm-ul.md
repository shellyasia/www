# Shelly Plus 2PM UL

![Shelly-Plus-2PM-UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly-Plus-2PM-UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus 2PM UL  
- **设备型号：** SNSW-002P15UL  
- **设备SSID：** ShellyPlus2PM-XXXXXX  

## 简要说明

Shelly Plus 2PM UL 是一款通过 UL 认证的紧凑型双通道智能开关，具备电源测量与盖板控制功能。它可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器设备的远程控制。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行管理。

支持从任何具备互联网连接的位置进行远程访问、控制和监控，前提是设备已连接至 Wi-Fi 路由器并接入互联网。

专为改造安装设计，可适配标准电气墙盒，或安装于插座后方、灯控开关后方及其他空间受限的位置。

设备内置 Web 界面，用于配置、监控及实时控制。

## 主要应用场景

- 住宅环境  
- 多户单元（公寓、公寓楼、酒店等）  
- 轻型商业场所（小型办公室、零售商店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

### Amazon Alexa 支持的功能
- 是

### Google Smart Home 支持的特性
- 是

### Samsung SmartThings 支持的功能
- 是

## 简化内部原理图

![Plus-2PM-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407109633/Plus-2PM-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 2 个开关/按钮输入，接于螺丝端子：S1 和 S2  
- 3 个电源输入，接于螺丝端子：1 N（+） 和 2 L（～）

### 输出端口

- 2 个继电器输出，集成功率测量功能，可通过螺丝端子访问

### 扩展接口

- Shelly 专用串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **警告！** 当设备通电时，扩展接口上存在高压。请在安装和维护过程中务必小心。

## 连接方式

- Wi-Fi  
- Bluetooth  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  
- 障碍检测（盖板模式）  
- 安全开关（盖板模式）  

## 支持的负载类型

- 阻性负载（白炽灯、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 吸收电路的感性负载（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入部分

- 一个（重置）按钮  
  - 按住 5 秒：启用设备热点及蓝牙连接  
  - 按住 10 秒：执行出厂恢复

### 输出指示

- 单色 LED 指示灯  
  - 启用 AP，Wi-Fi 未启用：1 秒亮 / 1 秒灭  
  - Wi-Fi 已启用但未连接：1 秒亮 / 3 秒灭  
  - 已连接 Wi-Fi 网络：持续常亮  
  - 已启用云服务但未连接：1 秒亮 / 5 秒灭  
  - 已连接 Shelly Cloud：持续常亮  
  - OTA（空中升级）：0.5 秒亮 / 0.5 秒灭  
  - 按钮按住 5 秒：0.5 秒亮 / 0.5 秒灭  
  - 按钮按住 10 秒：0.25 秒亮 / 0.25 秒灭  

> *注：* LED 状态按优先级顺序排列，后续状态会覆盖先前状态。

## 规格参数

| 类别 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| 重量 | — |
| 安装方式 | 嵌入式安装 |
| 螺丝端子最大扭矩 | 0.25 Nm / 2.2 lb-in |
| 导线截面积 | 1.0 至 2.5 mm² / 20 至 14 AWG |
| 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| 外壳材质 | 塑料 |
| 颜色 | 黑色 |
| **环境条件** | |
| 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 供电电压 | 120 VAC，50/60 Hz |
| 功耗 | < 1.4 W |
| **输出电路额定值** | |
| 最大交流切换电压 | 120 V |
| 最大直流切换电压 | 不适用 |
| 最大交流切换电流 | 每通道 8 A，总计 16 A |
| 最大直流切换电流 | 不适用 |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 交流电压表 | 是 |
| 交流电流表 | 是 |
| **无线通信** | |
| 射频频段 | 2400 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（取决于当地环境） |
| Bluetooth 协议 | 4.2 |
| Bluetooth 传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（取决于当地环境） |
| **微控制器 (MCU)** | |
| CPU | ESP32-U4WDH |
| Flash 存储容量 | 4 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个，每个支持最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |
| CoAP 支持 | 否 |

## 基础接线图

![Plus 2PM AC UL 接线图](https://kb.shelly.cloud/__attachments/231080110/Plus%202PM%20AC%20UL%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**双通道开关模式，交流电源供电**

![Plus 2PM AC UL 盖板模式接线图](https://kb.shelly.cloud/__attachments/231080110/Plus%202PM%20AC%20UL%20cover%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**盖板模式**

### 图例说明

| 符号 | 描述 |
|------|------|
| **端子** | |
| **N** | 中性线端子 |
| **L** | 火线（120 VAC）端子 |
| **O1, O2** | 负载电路输出端子 |
| **S1, S2** | 开关输入端子 |
| **导线** | |
| **N** | 中性线 |
| **L** | 火线（120 VAC） |

## 故障排查

...

## Web 界面使用指南

[阅读 Shelly Plus 2PM, Plus 2PM UL Web 界面使用指南](../knowledge-base/shelly-plus-2pm-web-interface-guide)

## 组件与 API

- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus2PM)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印用户手册

[Shelly Plus 2PM UL 双语打印用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%202PM%20UL%20bilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)