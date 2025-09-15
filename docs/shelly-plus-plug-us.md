# Shelly Plus Plug US

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Plug-US.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus Plug US  
- **设备型号：** SNPL-00116US  
- **设备SSID：** ShellyPlusPlugUS-XXXXXX  

## 简要说明

Shelly Plus Plug US 是一款具备电源监测和过热保护功能的智能插座。它可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器的远程控制。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行管理。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络访问权限的位置进行远程访问、配置和监控。

设备内置网页界面，支持实时监控、控制及设置配置。

## 主要应用场景

- 住宅  
- 多住户单元（公寓、公寓楼、酒店等）  
- 轻型商业场所（小型办公室、零售商店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

- Google Home  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![Shelly Plus Plug US 简化内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-US-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入
- 1 × NEMA 5-15（Type-B）插头  

### 输出
- 1 × NEMA 5-15（Type-B）插座  

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- Bluetooth 4.2  

## 安全特性

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（LED驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入
- 一个按钮  
  - 按住 5 秒：重启（上电后最多 60 秒内可用）  
  - 按住 10 秒：恢复出厂设置（上电后最多 60 秒内可用）  

### 输出
- LED 指示灯  
  - 快速闪烁蓝色：AP 模式  
  - 缓慢闪烁蓝色：已连接至 Wi-Fi 网络  
  - 蓝色常亮：已连接至 Shelly Cloud  
  - 红色常亮：向插入的电器供电  
  - 缓慢闪烁红色：已启动重启（按下按钮 5 秒后）  
  - 快速闪烁红色：已启动恢复出厂设置（按下按钮 10 秒后）  
  - 红蓝交替闪烁：固件更新正在进行中  

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 38 × 84 × 52 ±0.5 mm / 1.5 × 3.3 × 2.0 in ±0.02 in |
| | 重量 | 70 ±1 g / 2.47 ±0.04 oz |
| | 兼容插座 | NEMA 5-15（Type-B） |
| | 兼容插头 | NEMA 1-15（Type-A）和 NEMA 5-15（Type-B） |
| | 外壳材质 | 塑料 |
| | 颜色 | 白色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 m / 6562 ft |
| **电气性能** | 供电电压（交流） | 120 V ±10 %，60 Hz |
| | 供电电压（直流） | 不适用 |
| | 功耗 | < 1 W |
| | 最大开关电压（交流） | 140 V |
| | 最大开关电压（直流） | 不适用 |
| | 最大开关电流（交流） | 15 A |
| | 最大开关电流（直流） | 不适用 |
| **传感器与仪表** | 内置温度传感器 | 是 |
| | 电压表 | 是 |
| | 电流表 | 是 |
| | 功率与电能计量 | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | <20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 m / 100 ft，室外最高 50 m / 160 ft<br>（取决于本地环境条件） |
| | Bluetooth 协议 | 4.2 |
| | Bluetooth 传输距离 | 室内最高 10 m / 33 ft，室外最高 30 m / 100 ft<br>（取决于本地环境条件） |
| **微控制器（MCU）** | CPU | ESP32 |
| | Flash 存储容量 | 4 MB |
| **固件功能** | Webhooks（URL 操作） | 支持 20 个钩子，每个钩子最多 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT | 是 |
| | CoAP | 否 |

## 故障排除

...

## 组件与 API 接口

- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlugUS)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)  

## 打印用户指南

[Shelly Plus Plug US 多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Plug%20US%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [Shelly Plus Plug US 用户与安全指南](../knowledge-base/shelly-plus-plug-us-user-and-safety-guide)