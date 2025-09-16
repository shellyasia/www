# Shelly Plus 2PM

![Shelly 2PM](https://kb.shelly.cloud/__attachments/229146742/Shelly-Plus-2PM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus 2PM  
- **设备型号：** SNSW-002P16EU  
- **设备SSID：** ShellyPlus2PM-XXXXXX  

## 简要说明

Shelly Plus 2PM 是一款紧凑型双通道智能开关，内置功率测量功能和盖板控制功能。它支持通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器设备。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行操作。

借助互联网连接，用户可随时随地访问、控制和监控 Shelly Plus 2PM。该设备专为安装在标准电气墙盒内、电源插座后方、灯控开关后方或空间受限位置而设计，适用于改造安装。

设备配备嵌入式网页界面，可用于配置、监控及实时控制其各项功能。

## 主要应用场景

- 住宅建筑  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政设施  
- 大学/学院  

## 集成支持

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![Shelly Plus 2PM 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 两个接线端子上的开关/按钮输入：S1 和 S2  
- 三个接线端子上的电源输入：1 N (+) 和 2 L (Ʇ)  

### 输出端口

- 两个带有集成功率测量功能的继电器输出，可通过接线端子访问  

### 扩展接口

- Shelly 专用串行接口  

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请小心操作。

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- Bluetooth 4.2  

## 安全特性

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  
- 障碍物检测（盖板模式下）  
- 安全开关（盖板模式下）  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻尼器的感性负载（LED驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入端口

- 一个（复位）按钮  
  - 按住 5 秒以启用接入点模式并建立蓝牙连接  
  - 按住 10 秒执行恢复出厂设置  

### 输出端口

- 单色 LED 指示灯，状态显示如下：

| 状态 | LED 行为 |
|------|----------|
| 启用 AP 模式，Wi-Fi 关闭 | 1 秒亮 / 1 秒灭 |
| Wi-Fi 已启用，未连接 | 1 秒亮 / 3 秒灭 |
| 已连接到 Wi-Fi 网络 | 持续常亮 |
| 启用云服务，未连接 | 1 秒亮 / 5 秒灭 |
| 已连接到 Shelly Cloud | 持续常亮 |
| OTA（空中升级） | 0.5 秒亮 / 0.5 秒灭 |
| 按钮按住 5 秒 | 0.5 秒亮 / 0.5 秒灭 |
| 按钮按住 10 秒 | 0.25 秒亮 / 0.25 秒灭 |

> **注意：** 上述状态按优先级顺序排列——后续状态会覆盖前面的状态。

## 规格参数

| 类别 | 规格 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | ~45 g |
| 安装方式 | 墙面底盒安装 |
| 接线端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 in |
| 外壳材质 | 塑料 |
| 颜色 | 黑色 |
| **环境条件** | |
| 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH（非冷凝） |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气性能** | |
| 供电电压 | 110–240 VAC / 24 VDC ±10% |
| 功耗 | < 1.4 W |
| **输出电路额定值** | |
| 最大切换电压（交流） | 240 V |
| 最大切换电压（直流） | 30 V |
| 最大切换电流（交流） | 每通道 10 A，总计 16 A，峰值总电流 18 A |
| 最大切换电流（直流） | 10 A |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 交流电压表 | 是 |
| 交流电流表 | 是 |
| **无线通信** | |
| 射频频段 | 2400 – 2495 MHz |
| 最大射频功率 | <20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输距离 | 室内最高 30 米 / 室外最高 50 米（受环境影响） |
| Bluetooth 协议 | 4.2 |
| Bluetooth 传输距离 | 室内最高 10 米 / 室外最高 30 米（受环境影响） |
| **微控制器 (MCU)** | |
| CPU | ESP32-U4WDH |
| Flash 存储 | 4 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 动作） | 20 个，每个最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |
| CoAP 支持 | 否 |

## 基础接线图

### 双通道开关模式，交流电源供电

![Plus 2PM 交流接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%202PM%20AC%20wiring%20diagram-20240530-100052.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 双通道开关模式，直流电源供电

![Plus 2PM 直流接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%202PM%20DC%20wiring%20diagram-20240528-134203.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 盖板模式接线图

![Plus-2PM 盖板接线](https://kb.shelly.cloud/__attachments/243531777/Plus-2PM-cover-wiring-20240528-133942.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| 符号 | 描述 |
|------|------|
| **接线端子** | |
| N | 零线端子 |
| L | 火线端子（110–240 VAC） |
| O1, O2 | 负载电路输出端子 |
| + | 24 VDC 正极端子 |
| Ʇ | 24 VDC 负极端子 |
| S1, S2 | 开关输入端子 |
| **导线** | |
| N | 零线 |
| L | 火线（110–240 VAC） |
| + | 24 VDC 正极导线 |
| - | 24 VDC 负极导线 |

## 故障排查

*(内容待补充)*

## 网页界面使用指南

有关 Shelly Plus 2PM 网页界面的详细操作说明：

- [本设备文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus2PM)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印版用户手册

[Shelly Plus 2PM 多语言打印版用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%202PM%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规声明

- [Shelly Plus 2PM 多语言欧盟符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM x2 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [使用 Shelly Plus 2PM 与扩展模块配合风速传感器，在强风时自动收起电动遮阳篷](../knowledge-base/use-shelly-plus-2pm-and-add-on-with-a-wind-sensor-)