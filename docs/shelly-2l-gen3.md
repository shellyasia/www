Shelly 2L Gen3

![Shelly 2L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 2L Gen3  
- **设备型号：** S3SW-0A2X4EUL  
- **设备SSID：** Shelly2LG3-XXXXXXXXXXXX  
- **设备蓝牙ID：** 0x1013  

## 简要说明

Shelly 2L Gen3 是一款紧凑型双通道智能开关，专为精确的照明控制而设计。该设备的一大特点是无需中性线即可运行。但必须与一个并联连接在通道1负载上的 Shelly Bypass 1L/2L Gen3 配合使用。

该设备可通过智能手机、平板电脑、PC 或集成的家庭自动化系统轻松控制照明系统。它可在本地 Wi-Fi 网络上独立运行，也可与基于云的家庭自动化服务集成。只要设备保持连接到 Wi-Fi 路由器和互联网，用户即可从几乎任何地方访问、控制和监控其照明系统。

适用于空间受限环境，Shelly 2L Gen3 可紧密安装于标准电气墙盒内、开关背面或狭小空间中。设备内置 Web 界面，便于监控、控制和精细调整设备设置。

此设备支持 Matter 协议，并可通过固件更新实现完整的 Matter 兼容性。

## 主要功能

- **完美适用于改造项目！** 无需中性线即可工作——仅通过火线即可供电并控制灯具或电器。
- **双通道设计！** 独立控制两个不同的灯或设备。
- **低最小负载要求：** 通道1需配合 Shelly Bypass 1L/2L Gen3 使用，可控制功率超过 5W 的灯泡。
- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，通过 Shelly 移动应用或其他智能家居平台实现远程控制。
- **远程控制：** 通过 Shelly 应用，只要有互联网连接，即可随时随地控制连接的设备。
- **语音控制：** 兼容 Amazon Alexa 和 Google Assistant，支持语音激活控制。
- **定时与自动化：** 支持定时器和自定义场景（例如：设定灯光在特定时间开关）。
- **广泛兼容性：**
  - 经过设计和测试，兼容多种类型的照明设备。
  - 支持 220–240 VAC 输入电压。
- **紧凑设计：** 小巧外形，轻松适配标准墙盒及开关背面。
- **过热保护：** 内置温度传感器，确保使用安全。
- **本地与远程访问：** 可在同一网络下本地控制，也可远程访问。
- **OTA 升级：** 支持空中无线固件更新，持续提升功能与安全性。
- **智能家居生态系统集成：** 兼容 MQTT、Home Assistant 等多种平台，适用于各类智能家居配置。

## 主要应用场景

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售店、餐厅、加油站等）
- 政府/市政单位
- 大学/学院

## 集成支持

### Amazon Alexa 支持的功能
- 切换控制器（Toggle Controller）

### Google Smart Home 支持的特性
- 开/关（On/Off）

### Samsung SmartThings 支持的功能
- 开关（Switch）

## 简化内部原理图

![2L-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/2L-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口
- 两个螺丝端子开关/按钮输入：S1 和 S2  
- 一个电源输入螺丝端子：L  

### 输出端口
- 一个开关/按钮信号输出螺丝端子：Sx  
- 两个继电器输出螺丝端子：O1 和 O2  

## 连接方式
- Wi-Fi  
- 蓝牙  

## 安全功能
- 过热保护  

## 支持的负载类型

**输出通道 1：**
- 白炽灯  
- LED 灯  
  *注：不支持使用降压变压器的低压灯具*

**输出通道 2：**
- 白炽灯  
- LED 灯  
- 荧光灯  
- 风扇  

## 用户界面

### 输入部分
- 一个（控制）按钮：
  - 按住 5 秒：启用设备热点（AP）和蓝牙连接。
  - 按住 10 秒：执行恢复出厂设置。

### 输出指示灯
- 单色 LED 指示灯状态：
  - AP 已启用，Wi-Fi 未启用：1 秒开 / 1 秒关  
  - Wi-Fi 已启用，未连接：1 秒开 / 3 秒关  
  - 已连接至 Wi-Fi 网络：常亮  
  - 已启用云端，未连接：1 秒开 / 5 秒关  
  - 已连接至 Shelly Cloud：常亮  
  - OTA（空中升级）：0.5 秒开 / 0.5 秒关  
  - 按住按钮 5 秒：0.5 秒开 / 0.5 秒关  
  - 按住按钮 10 秒：0.25 秒开 / 0.25 秒关  

*注：LED 状态按优先级顺序列出，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 项目 | 数值 |
|------|------|
| **物理参数** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 28 g / 1 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合线、线鼻） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 in |
| 安装方式 | 墙内嵌入式安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 青绿色 |
| 端子颜色 | 黑色 |
| **环境参数** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 存储温度 | 10 °C 至 40 °C |
| 湿度 | 30 % 至 70 % RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源输入 | 220–240 V~, 50 Hz *(通道 O1 负载需配备 Shelly Bypass)* |
| 是否包含 Shelly Bypass | 是 |
| 功耗 | < 1.2 W |
| 无需中性线 | 是 *(通道 O1 负载需配备 Shelly Bypass)* |
| 无中性线且无 Bypass 时的最小负载 | 不适用 —— 通道 O1 负载必须使用 Shelly Bypass（适用于所有 LED 灯）。白炽灯无需 Bypass。 |
| **输出电路额定值** | |
| 最大切换电压 | 240 V~ |
| 最大切换功率 | |
| &nbsp;&nbsp;– 通过 O1 | 200 W |
| &nbsp;&nbsp;– 通过 O2 | 700 W |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| Wi-Fi 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输范围 | 室内最多 30 米 / 100 英尺，室外最多 50 米 / 160 英尺 *(受环境影响)* |
| **蓝牙** | |
| 协议版本 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输范围 | 室内最多 10 米 / 33 英尺，室外最多 30 米 / 100 英尺 *(受环境影响)* |
| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C38F |
| 时钟频率 | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个，每条支持最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![2L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/2L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| 端子标识 | 描述 |
|---------|------|
| S1 | 开关输入端子 1 |
| S2 | 开关输入端子 2 |
| Sx | 开关信号输出端子 |
| L | 火线（220–240 V~）或端子 |
| N | 中性线 |
| O1 | 负载电路输出端子 1 |
| O2 | 负载电路输出端子 2 |

## Shelly Smart Control 控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 故障排除

...

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2LG3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规声明

- [Shelly 2L Gen3 多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 2L Gen3 英国 PSTI ACT 符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案：Shelly 2L Gen3 多语言欧盟符合性声明 83 09.04.02025.pdf](https://kb.shelly.cloud/__attachments/293208601/Shelly%202L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2083%2009.04.02025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户指南

- [Shelly 2L Gen3 多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全手册（俄语）](../knowledge-base/shelly-2l-gen3-1)

## 安装指南

×