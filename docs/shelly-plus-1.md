# Shelly Plus 1

![Shelly Plus 1](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly Plus 1  
- **设备型号：** SNSW-001X16EU  
- **设备SSID：** ShellyPlus1-XXXXXX  

## 简要说明

Shelly Plus 1 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器设备。它可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的家庭自动化服务。

只要设备连接到 Wi-Fi 路由器并接入互联网，用户即可从任何有网络连接的位置远程访问、控制和监控该设备。

专为空间受限环境设计，可安装于标准电气墙盒内，或安装在电源插座、灯开关及其他狭小空间后方。

设备配备嵌入式网页界面，用于监控、控制和配置。

## 主要应用场景

- 住宅  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）  
- 政府 / 市政机构  
- 大学 / 学院  

## 集成支持

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![Shelly Plus 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 1 个螺丝端子上的开关/按钮输入：SW  
- 1 个螺丝端子上的无源触点继电器输入：I  
- 3 个螺丝端子上的电源输入：N（+）、L（Ʇ）和 12V  

### 输出端口

- 1 个螺丝端子上的无源触点继电器输出：O  

### 扩展接口

- Shelly 专有串行接口  

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请谨慎操作。

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- Bluetooth 4.2  

## 安全特性

- 过热保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载搭配 RC 阻尼电路（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入端口

#### 一个控制按钮

- 长按 5 秒：启用设备热点（AP）及蓝牙连接  
- 长按 10 秒：执行恢复出厂设置  

### 输出端口

#### LED（红色指示灯）

- **启用 AP 模式，Wi-Fi 关闭：**  
  1 秒开启 / 1 秒关闭  
  ![LED：AP 模式](https://kb.shelly.cloud/__attachments/323911691/LED-1000-1000.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Wi-Fi 已启用，未连接网络：**  
  1 秒开启 / 3 秒关闭  
  ![LED：Wi-Fi 未连接](https://kb.shelly.cloud/__attachments/323911691/LED-500-1500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **已连接 Wi-Fi 网络：**  
  持续亮起  
  ![LED：已连接 Wi-Fi](https://kb.shelly.cloud/__attachments/323911691/LED-On.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **已启用云服务，但未连接：**  
  1 秒开启 / 5 秒关闭  
  ![LED：云服务未连接](https://kb.shelly.cloud/__attachments/323911691/LED-1500-500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **已连接 Shelly 云服务：**  
  持续亮起  
  ![LED：已连接云服务](https://kb.shelly.cloud/__attachments/323911691/LED-On.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **OTA（空中升级）过程中：**  
  半秒开启 / 半秒关闭  
  ![LED：OTA 升级中](https://kb.shelly.cloud/__attachments/323911691/LED-500-500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **按钮按下并保持 5 秒：**  
  半秒开启 / 半秒关闭  
  ![LED：长按 5 秒](https://kb.shelly.cloud/__attachments/323911691/LED-250-250.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **按钮按下并保持 10 秒：**  
  四分之一秒开启 / 四分之一秒关闭  
  ![LED：长按 10 秒](https://kb.shelly.cloud/__attachments/323911691/LED-125-125.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **注意：** LED 状态按出现顺序优先级排列，后续状态将覆盖前一状态。

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 英寸 |
| | 重量 | 26 克 / 0.92 盎司 |
| | 安装方式 | 墙面安装盒 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| | 外壳材质 | 塑料 |
| | 颜色 | 蓝色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | 供电电压 | 110–240 VAC / 24–48 VDC / 12 VDC ±10% |
| | 功耗 | < 1.2 W |
| **输出电路额定值** | 最大交流开关电压 | 240 V |
| | 最大直流开关电压 | 30 V |
| | 最大交流开关电流 | 16 A |
| | 最大直流开关电流 | 10 A |
| **传感器与计量** | 内置温度传感器 | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | <20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 有效范围 | 室内最高 30 米 / 室外最高 50 米（取决于当地环境） |
| | Bluetooth 协议 | 4.2 |
| | Bluetooth 有效范围 | 室内最高 10 米 / 室外最高 30 米（取决于当地环境） |
| **微控制器 (MCU)** | CPU | ESP32-U4WDH |
| | Flash 存储容量 | 4 MB |
| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 动作） | 20 个，每个支持最多 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |
| | CoAP 支持 | 否 |

## 基础接线图

![Plus 1 交流电接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20wiring%20diagram-20240528-135400.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC 电源**  
**阻性负载**

![Plus 1 交流电 RC 阻尼接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20RC%20Snubber%20wiring%20diagram-20240528-135559.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC 电源**  
**带 RC 阻尼的感性负载**

![Plus 1 直流电接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20wiring%20diagram-20240528-135114.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC 电源**  
**阻性负载**

![Plus 1 直流电 RC 阻尼接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20RC%20Snubber%20wiring%20diagram-20240530-093321.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC 电源**  
**带 RC 阻尼的感性负载**

![Plus 1 12V 接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201%2012%20V%20wiring%20diagram-20240528-135011.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC 稳压电源**  
**阻性负载**

![Plus 1 12V RC 阻尼接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201-12V-RC-Snubber-wiring-diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC 稳压电源**  
**带 RC 阻尼的感性负载**

### 图例说明

**端子标识**  
- **I**：负载电路输入端子  
- **O**：负载电路输出端子  
- **L**：火线（110–240 VAC）端子  
- **N**：零线端子  
- **+**：24–48 VDC 正极端子  
- **+12V**：12 VDC 正极端子  
- **GND**：12 / 24–48 VDC 接地端子  
- **Ʇ**：12 / 24–48 VDC 接地端子  

**导线标识**  
- **L**：火线（110–240 VAC）  
- **N**：零线  
- **SW**：开关（控制 O 端子）输入端子  
- **+**：12 / 24–48 VDC 正极导线  
- **GND**：12 / 24–48 VDC 接地导线  

## 故障排除

...

## 网页界面指南

[阅读 Shelly Plus 1 网页界面指南](../knowledge-base/shelly-plus-1-web-interface-guide)

## 组件与 API

- [此设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印版用户手册

[Shelly Plus 1 多语言打印版用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规认证

- [Shelly Plus 1 多语言欧盟符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 x2 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 澳洲新西兰适用性证书.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [使用 Shelly Plus 1 配合多个按钮控制灯具](../knowledge-base/using-shelly-plus-1-with-multiple-buttons-to-contr)