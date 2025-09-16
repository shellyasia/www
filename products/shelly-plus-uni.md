# Shelly Plus Uni

![](https://kb.shelly.cloud/__attachments/229146742/Plus-UNI.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly Plus Uni  
- **设备型号：** SNSN-0043X  
- **设备SSID：** ShellyPlusUni-XXXXXX  

## 简要说明

Shelly Plus Uni 是一款紧凑型智能通用模块，配备两个无源触点的固态继电器、脉冲计数器、模拟输入和两个数字输入。它可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电气设备的远程控制。该设备可在本地 Wi-Fi 网络上独立运行，也可通过基于云的家庭自动化服务进行控制。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何具备网络连接的位置实现远程访问、控制和监控。

设备内置网页界面，用于监控、控制和配置各项设置。

## 主要应用场景

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售商店、餐厅、加油站等）
- 政府/市政机构
- 大学/学院

## 集成支持

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![](https://kb.shelly.cloud/__attachments/176816159/Plus-Uni-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 电源供应

- 交流/直流电源输入：VAC1 和 VAC2  
- 直流电源输入：+5 VDC 和 GND  

### 输入端口

- 1 个模拟输入：ANALOG IN  
- 1 个 1-Wire 数据输入：DATA  
- 1 个脉冲计数输入：COUNT IN  
- 2 个数字输入：IN1 和 IN2  

### 输出端口

- 1 个传感器电源输出：SENSOR VCC  
- 2 个无源触点固态继电器输出：OUT1 和 OUT2  

### 扩展接口

- Shelly 专有串行接口  

![](https://kb.shelly.cloud/__attachments/176816159/Plus-Uni-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 连接方式

- Wi-Fi  
- Bluetooth（仅用于设备添加）

## 安全特性

- PCB 涂层保护膜

## 用户界面

### 输入部分

- 1 个（复位）按钮  
  - 长按 5 秒：启用接入点模式并建立蓝牙连接  
  - 长按 10 秒：执行恢复出厂设置

### 输出指示

- 单色 LED 指示灯状态  
  - **AP 已启用，Wi-Fi 未启用**：1 秒 ON / 1 秒 OFF  
  - **Wi-Fi 已启用，未连接**：1 秒 ON / 3 秒 OFF  
  - **已连接至 Wi-Fi 网络**：持续亮起  
  - **云功能已启用，未连接**：1 秒 ON / 5 秒 OFF  
  - **已连接至 Shelly Cloud**：持续亮起  
  - **正在进行 OTA 更新**：0.5 秒 ON / 0.5 秒 OFF  
  - **长按按钮 5 秒**：0.5 秒 ON / 0.5 秒 OFF  
  - **长按按钮 10 秒**：0.25 秒 ON / 0.25 秒 OFF  

> **注意：** LED 状态按上述顺序优先级排列，高优先级状态会覆盖低优先级状态。

## 规格参数

| **类别** | **数值** |
|----------|---------|
| **物理特性** | |
| PCB 尺寸（长×宽×高） | 40 × 21 × 7 mm / 1.57 × 0.83 × 0.28 英寸 |
| 重量 | 8.5 克 / 0.3 盎司（含电缆） |
| **环境条件** | |
| 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30 % 至 70 % RH |
| **电气参数** | |
| 电源输入 | |
| &nbsp;&nbsp;– 8–24 VAC<br>&nbsp;&nbsp;– 9–28 VDC<br>&nbsp;&nbsp;– 5 VDC（稳压，通过 +5 VDC 和 GND 输入） | |
| 功耗 | < 1 W |
| **输入电路额定值** | |
| 数字输入电阻 | 50 kΩ |
| 数字输入触发电压 | 1.5 V（低电平有效） |
| **输出电路额定值** | |
| 最大开关电压 | 30 V |
| 最大开关电流 | 300 mA |
| **传感器与仪表** | |
| 电压表量程 | 0–15 VDC / 0–30 VDC（双量程） |
| 电压表精度 | ±1% |
| 脉冲计数输入触发电压 | 1.5 V（低电平有效） |
| 脉冲计数最大频率 | 1 kHz |
| 支持外部传感器 | 单个 DHT22 或最多五个 DS18B20 |
| **无线通信** | |
| 射频频段 | 2400 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| Bluetooth 协议 | 4.2 |
| Bluetooth 传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **微控制器 (MCU)** | |
| CPU | ESP32-U4WDH |
| Flash 存储 | 4 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个，每个可配置最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |
| CoAP 支持 | 否 |

## 基础接线图

![](https://kb.shelly.cloud/__theme/images/common/note-macro-icon--625ed763b7218abfc3ad.svg)

> **注意：** Shelly Plus Uni 的输入接线方式与前代 Shelly Uni 模型不同。

![](https://kb.shelly.cloud/__attachments/176816159/Plus%20Uni%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| **端子** | **颜色** | **描述** |
|----------|----------|----------|
| VAC1 | 红色 | 8–24 VAC / 9–28 VDC 电源输入 1 |
| VAC2 | 黑色 | 8–24 VAC / 9–28 VDC 电源输入 2 |
| ANALOG IN | 白色 | 模拟输入 |
| SENSOR VCC | 黄色 | 1-Wire 传感器电源输出 |
| DATA | 蓝色 | 1-Wire 数据信号线 |
| +5 VDC | 灰色 | 5 VDC 电源正极输入 |
| GND | 绿色 | 5 VDC 电源地线及传感器共用地线 |
| COUNT IN | 紫色 | 脉冲计数输入 |
| IN1 | 橙色 | 数字输入 1 |
| IN2 | 棕色 | 数字输入 2 |
| OUT1 | 黑色 | 固态继电器 1 接线端子 |
| OUT2 | 黑色 | 固态继电器 2 接线端子 |

## 故障排除

[查看故障排除指南](../knowledge-base/shelly-plus-uni#troubleshooting)

## 网页界面使用指南

[阅读 Shelly Plus Uni 网页界面使用指南](../knowledge-base/shelly-plus-uni#web-interface)

## 组件与 API

- [本设备](https://kb.shelly.cloud/knowledge-base/shelly-plus-0-10v-dimmer)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印用户手册

[Shelly Plus UNI 多语言打印版用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/176816159/Shelly%20Plus%20UNI%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全指南（俄语版）](../knowledge-base/shelly-plus-uni-1)

## 合规性声明

- [Shelly Plus Uni 多语言欧盟符合性声明 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Uni%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus Uni 英国 PSTI ACT 合规性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Uni%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规性档案**

- [Shelly Plus Uni 多语言欧盟符合性声明 29 – 2023-12-29.pdf](https://kb.shelly.cloud/__attachments/286621706/Shelly%20Plus%20Uni%20multilingual%20EU%20declaration%20of%20conformity%2029%202023-12-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

[查看安装指南](../knowledge-base/shelly-plus-uni#installation)