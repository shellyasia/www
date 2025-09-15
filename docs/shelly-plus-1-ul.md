# Shelly Plus 1 UL

![Shelly Plus 1 UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201%20UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称**：Shelly Plus 1 UL  
- **设备型号**：SNSW-001X15UL  
- **设备SSID**：ShellyPlus1-XXXXXX  

## 简要说明

Shelly Plus 1 UL 是一款通过 UL 认证的紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器设备。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。

只要设备连接到 Wi-Fi 路由器并接入互联网，用户即可从任何有网络连接的位置远程访问、控制和监控该设备。

该设备专为改造安装设计，可适配标准电气墙盒，或安装在电源插座、灯控开关后方及其他空间受限区域。

设备内置网页界面，用于监控、控制与配置。

## 主要应用场景

- 住宅用途  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 集成支持

### Amazon Alexa 支持的功能
- 开关切换控制器

### Google Smart Home 支持的特性
- 开/关

### Samsung SmartThings 支持的功能
- 开关

## 简化内部原理图

![Plus1-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407142401/Plus1-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口
- 1 个螺丝端子开关/按钮输入：SW  
- 1 个无源触点继电器输入（螺丝端子）：I  
- 3 个电源输入螺丝端子：N (+)、L (Ʇ) 和 12V  

### 输出端口
- 1 个无源触点继电器输出（螺丝端子）：O  

### 扩展接口
- Shelly 专有串行接口  

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请勿触摸。

## 连接方式
- Wi-Fi  
- 蓝牙  

## 安全功能
- 过热保护  

## 支持的负载类型
- 阻性负载（白炽灯泡、加热装置）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 吸收电路的感性负载（LED 灯驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入部分
- 一个（复位）按钮  
  - 按住 5 秒：启用设备热点模式及蓝牙连接。  
  - 按住 10 秒：执行恢复出厂设置。

### 输出指示
- 单色 LED 指示灯  
  - 启用 AP，Wi-Fi 关闭：1 秒开 / 1 秒关  
  - Wi-Fi 已启用，未连接网络：1 秒开 / 3 秒关  
  - 已连接 Wi-Fi 网络：常亮  
  - 已启用云服务但未连接：1 秒开 / 5 秒关  
  - 已连接 Shelly Cloud：常亮  
  - OTA（空中升级）：0.5 秒开 / 0.5 秒关  
  - 按住按钮 5 秒：0.5 秒开 / 0.5 秒关  
  - 按住按钮 10 秒：0.25 秒开 / 0.25 秒关  

> *注：上述状态按优先级从低到高排列，后续状态将覆盖前一状态。*

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| | 重量 | 26 克 / 0.92 盎司 |
| | 安装方式 | 墙面安装盒 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 14 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| | 外壳材质 | 塑料 |
| | 颜色 | 蓝色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气性能** | 电源输入 | <ul><li>110–240 VAC，50/60 Hz</li><li>12 VDC 稳压电源</li><li>24–48 VDC</li></ul> |
| | 功耗 | < 1.2 W |
| **输出电路额定值** | 最大开关电压（交流） | 240 V（单线） |
| | 最大开关电压（直流） | 30 V |
| | 最大开关电流（交流） | 15 A |
| | 最大开关电流（直流） | 10 A |
| **传感器与计量** | 内置温度传感器 | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | < 20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| | 蓝牙协议 | 4.2 |
| | 蓝牙传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **微控制器** | CPU | ESP32-U4WDH |
| | Flash 存储 | 4 MB |
| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 操作） | 20 个，每个最多支持 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |
| | CoAP 支持 | 否 |

## 基础接线图

![Plus 1 AC 接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20wiring%20diagram-20240528-135400.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC 电源供电**  
**阻性负载**

![Plus 1 AC RC 吸收电路接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20RC%20Snubber%20wiring%20diagram-20240528-135559.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC 电源供电**  
**带 RC 吸收电路的感性负载**

![Plus 1 DC 接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20wiring%20diagram-20240528-135114.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC 电源供电**  
**阻性负载**

![Plus 1 DC RC 吸收电路接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20RC%20Snubber%20wiring%20diagram-20240530-093321.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC 电源供电**  
**带 RC 吸收电路的感性负载**

![Plus 1 12 V 接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%2012%20V%20wiring%20diagram-20240528-135011.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC 稳压电源供电**  
**阻性负载**

![Plus 1-12V-RC-Snubber-Wiring-Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201-12V-RC-Snubber-wiring-diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC 稳压电源供电**  
**带 RC 吸收电路的感性负载**

### 图例说明

**端子定义**
- **I**：负载电路输入端子  
- **O**：负载电路输出端子  
- **L**：火线（110–240 VAC）端子  
- **N**：零线端子  
- **SW**：开关（控制 O）输入端子  
- **+**：24–48 VDC 正极端子  
- **+12V**：12 VDC 正极端子  
- **GND**：12/24–48 VDC 接地端子  
- **Ʇ**：12/24–48 VDC 接地端子  

**导线标识**
- **L**：火线（110–240 VAC）导线  
- **N**：零线导线  
- **+**：12/24–48 VDC 正极导线  
- **GND**：12/24–48 VDC 接地导线  

## 网页界面指南

[阅读 Shelly Plus 1, Plus 1 UL 网页界面使用指南](../knowledge-base/shelly-plus-1-web-interface-guide)

## 组件与 API

- [此设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印版用户手册

[Shelly Plus 1 UL 双语用户及安全指南.pdf](https://kb.shelly.cloud/__attachments/455016449/Shelly%20Plus%201%20UL%20bilingual%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)