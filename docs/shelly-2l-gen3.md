# Shelly 2L Gen3

![Shelly 2L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 2L Gen3  
- **设备型号：** S3SW-0A2X4EUL  
- **设备 SSID：** Shelly2LG3-XXXXXXXXXXXX  
- **设备蓝牙 ID：** 0x1013  

## 简要说明

Shelly 2L Gen3 是一款紧凑型双通道智能开关，专为精确的照明控制而设计。其关键特性在于无需中性线即可运行。但必须与一个并联连接在通道 1 负载上的 Shelly Bypass 1L/2L Gen3 配合使用。该设备可通过智能手机、平板电脑、PC 或集成的家庭自动化系统实现无缝照明控制。

它可独立运行于本地 Wi-Fi 网络，也可集成到基于云的家庭自动化服务中。只要设备保持连接至 Wi-Fi 路由器和互联网，用户即可从几乎任何地方访问、控制和监控照明系统。

适用于空间受限环境，Shelly 2L Gen3 可轻松安装于标准电气墙盒内、开关背后或狭小空间中。其嵌入式 Web 界面使用户能够轻松监控、控制并微调设备设置。

该设备支持 Matter 协议，并可通过固件更新获得完整的 Matter 兼容性。

## 主要功能

- **完美适用于改造项目！** 无需中性线——仅通过火线即可供电并控制灯具或电器。
- **双通道控制！** 可独立控制两个独立的照明回路。
- **低最小负载要求：** 对于低于 5W 的负载，需配合 Shelly Bypass 1L/2L Gen3 使用，以实现对大于 5W 灯泡的控制。
- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，可通过 Shelly 应用程序或其他智能家居平台进行远程控制。
- **远程控制：** 通过 Shelly 移动应用程序，在有互联网连接的情况下随时随地控制已连接设备。
- **语音控制：** 兼容 Amazon Alexa 和 Google Assistant，支持语音操作。
- **定时与自动化：** 支持定时器和自定义场景（例如在特定时间开关灯）。
- **兼容性：**
  - 经过设计与测试，广泛兼容多种灯具类型。
  - 工作电压范围宽：220–240 VAC。
- **紧凑设计：** 可舒适地安装在标准电气盒或开关背面，节省空间。
- **过热保护：** 内置温度传感器，提升安全性。
- **本地与远程访问：** 支持在同一网络下的本地控制以及通过云端的远程控制。
- **OTA 更新：** 支持空中无线固件更新，持续优化功能与安全。
- **智能家居生态系统集成：** 兼容 MQTT、Home Assistant 等平台，是构建灵活智能家庭的理想选择。

## 主要应用场景

- 住宅
- 多户单元（公寓、联排别墅、酒店等）
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）
- 政府/市政机构
- 大学/学院

## 集成支持

### Amazon Alexa 支持功能
- 切换控制器（Toggle Controller）

### Google Smart Home 支持属性
- 开/关（On/Off）

### Samsung SmartThings 支持功能
- 开关（Switch）

## 简化内部原理图

![2L-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/2L-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口
- 两个螺丝端子上的开关/按钮输入：S1 和 S2  
- 一个螺丝端子上的电源输入：L  

### 输出端口
- 一个螺丝端子上的开关/按钮信号输出：Sx  
- 两个螺丝端子上的继电器输出：O1 和 O2  

## 连接方式
- Wi-Fi  
- 蓝牙  

## 安全功能
- 过热保护  

## 支持的负载类型

### 输出 1：
- 白炽灯  
- LED 灯  
> *注：不包括需要降压变压器以实现低压运行的灯具*

### 输出 2：
- 白炽灯  
- LED 灯  
- 荧光灯  
- 风扇  

## 用户界面

### 输入部分
- 一个（控制）按钮：
  - 按住 5 秒：启用设备热点及蓝牙连接。
  - 按住 10 秒：执行出厂重置。

### 输出指示灯
- 单色 LED 指示灯状态：
  - **AP 已启用，Wi-Fi 未启用：** 1 秒 ON / 1 秒 OFF  
  - **Wi-Fi 已启用，未连接：** 1 秒 ON / 3 秒 OFF  
  - **已连接到 Wi-Fi 网络：** 持续亮起  
  - **已启用云服务，未连接：** 1 秒 ON / 5 秒 OFF  
  - **已连接至 Shelly Cloud：** 持续亮起  
  - **OTA（空中升级）中：** 0.5 秒 ON / 0.5 秒 OFF  
  - **按住按钮 5 秒：** 0.5 秒 ON / 0.5 秒 OFF  
  - **按住按钮 10 秒：** 0.25 秒 ON / 0.25 秒 OFF  

> *注：状态按优先级顺序列出，后续状态将覆盖前一状态。*

## 规格参数

| 项目 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 28 g / 1 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（单股、多股、线鼻） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 in |
| 安装方式 | 墙内嵌入式安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 青绿色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 存储温度 | 10 °C 至 40 °C |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源输入 | 220–240 V~, 50 Hz（O1 负载需使用 Shelly Bypass） |
| 是否包含 Shelly Bypass | 是 |
| 功耗 | < 1.2 W |
| 无需中性线 | 是（O1 负载需使用 Shelly Bypass） |
| 无中性线且无 Bypass 时的最小负载 | 不适用 —— 所有 LED 灯负载均需使用 Shelly Bypass 1L/2L；白炽灯负载无需 Bypass |
| **输出电路额定值** | |
| 最大切换电压 | 240 V~ |
| 最大切换功率 | |
| &nbsp;&nbsp;• 通过 O1 | 200 W |
| &nbsp;&nbsp;• 通过 O2 | 700 W |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| Wi-Fi 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最多 30 m / 100 ft，室外最多 50 m / 160 ft<br>（受本地环境影响） |
| **蓝牙** | |
| 协议版本 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最多 10 m / 33 ft，室外最多 30 m / 100 ft<br>（受本地环境影响） |
| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C38F |
| 时钟频率 | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 共 20 个，每个可配置最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![2L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/2L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| 端子标识 | 接线说明 |
|---------|----------|
| **S1** | 开关输入端子 1 |
| **L** | 火线（220–240 V~） |
| **S2** | 开关输入端子 2 |
| **N** | 中性线 |
| **Sx** | 开关信号输出端子 |
| **L** | 火线（220–240 V~）端子 |
| **O1** | 负载电路输出端子 1 |
| **O2** | 负载电路输出端子 2 |

## Shelly 智能控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 故障排查

...

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2LG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 2L Gen3 多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2L Gen3 英国 PSTI ACT 符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案：**
- [Shelly 2L Gen3 多语言欧盟符合性声明 83 09.04.02025.pdf](https://kb.shelly.cloud/__attachments/293208601/Shelly%202L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2083%2009.04.02025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户指南

- [Shelly 2L Gen3 多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [使用与安全手册](../knowledge-base/shelly-2l-gen3-1)

## 安装指南

×