# Shelly 1L Gen3

![Shelly 1L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%201L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1L Gen3  
- **设备型号：** S3SW-0A1X1EUL  
- **设备SSID：** Shelly1LG3-XXXXXXXXXXXX  
- **设备蓝牙ID：** 0x1014  

## 简要说明

Shelly 1L Gen3 是一款紧凑型智能开关，专为照明控制设计。其关键特性在于无需中性线即可运行。但必须与并联连接的 Shelly Bypass 1L/2L Gen3 配合使用以控制负载。该设备可通过手机、平板电脑、PC 控制，或集成到家庭自动化系统中。

它可独立在本地 Wi-Fi 网络上运行，也可连接至基于云的家庭自动化服务。只要 Shelly 1L Gen3 连接到 Wi-Fi 路由器和互联网，用户即可随时随地远程访问、控制和监控设备。

专为空间受限环境设计，Shelly 1L Gen3 可完美适配标准电气墙盒，并可隐蔽安装于灯具开关后方。设备内置 Web 界面，便于实时监控、控制和配置参数。

该设备支持 Matter 协议，此功能可通过固件更新实现。

## 主要特性

- **适用于翻新改造：** 无需中性线。仅通过火线即可实现供电与控制——无需连接中性线。
- **最小负载支持：** 必须配合安装 Shelly Bypass 1L/2L Gen3，才能控制功率超过 5W 的灯泡。
- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，支持通过 Shelly 手机 App 或与其他智能家居平台集成进行远程控制。
- **远程控制：** 通过智能手机或平板电脑上的 Shelly App，在任何有互联网连接的地方控制连接的设备或电器。
- **语音控制：** 兼容 Amazon Alexa 和 Google Assistant，支持语音激活控制。
- **定时与自动化：** 支持定时器和自定义场景。例如，设定灯光在特定时间自动开启或关闭。
- **兼容性：**
  - 经设计与测试，兼容多种类型的照明设备。
  - 工作电压范围广：220–240 VAC。
- **紧凑设计：** 小巧外形，可在标准墙盒内安装，或置于开关背面，不额外占用空间。
- **过热保护：** 内置温度传感器，防止设备过热。
- **本地与远程访问：** 支持在同一 Wi-Fi 网络下的本地控制，以及通过互联网的远程控制。
- **OTA 更新：** 支持空中（OTA）固件升级，持续优化功能与安全性。
- **智能家居生态系统集成：** 兼容 MQTT、Home Assistant 等平台，适用于多样化的智能家居部署。
- **相比旧版 Shelly 1L 的新功能：** 包含现代功能如脚本支持、HTTPS、MQTTS、入站与出站 WebSocket。

## 主要应用场景

- 住宅  
- 多户住宅（MDUs）：公寓、公寓楼、酒店  
- 轻型商业场所：小型办公室、零售商店、餐厅、加油站  
- 政府/市政机构  
- 大学/学院  

## 集成支持

### Amazon Alexa 支持的功能
- 切换控制器（Toggle Controller）

### Google Smart Home 支持的属性
- 开/关（On/Off）

### Samsung SmartThings 支持的功能
- 开关（Switch）

## 简化内部原理图

![1L-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/1L-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入
- 一个螺丝端子上的开关/按钮输入：**S**  
- 一个螺丝端子上的电源输入：**L**

### 输出
- 一个螺丝端子上的开关/按钮信号输出：**Sx**  
- 一个螺丝端子上的继电器输出：**O**

## 连接方式
- Wi-Fi  
- 蓝牙  

## 安全功能
- 过热保护

## 支持的负载类型
- 白炽灯 *  
- LED 灯 *  

\* 注：不包括需要降压变压器的低压灯具。

## 用户界面

### 输入
- 一个（控制）按钮：
  - 按住 5 秒：启用设备热点和蓝牙。
  - 按住 10 秒：恢复出厂设置。

### 输出
- 单色 LED 指示灯：
  - **AP 启用，Wi-Fi 关闭：** 1 秒开 / 1 秒关  
  - **Wi-Fi 启用，未连接：** 1 秒开 / 3 秒关  
  - **已连接 Wi-Fi 网络：** 常亮  
  - **已启用云服务，未连接：** 1 秒开 / 5 秒关  
  - **已连接 Shelly Cloud：** 常亮  
  - **OTA（空中更新）：** 0.5 秒开 / 0.5 秒关  
  - **按住按钮 5 秒：** 0.5 秒开 / 0.5 秒关  
  - **按住按钮 10 秒：** 0.25 秒开 / 0.25 秒关  

> *注：状态优先级从上到下排列，后续状态会覆盖前一状态。*

## 规格参数

| 项目 | 数值 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 24 g / 0.85 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（单股、多股、线鼻） |
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
| 电源输入 | 220–240 V~ 50 Hz（需使用 Shelly Bypass） |
| 是否包含 Shelly Bypass | 是 |
| 功耗 | < 1.2 W |
| 无需中性线 | 是（O 端口负载需使用 Bypass） |
| 无中性线且无 Bypass 时的最小负载 | 不适用（所有 LED 负载均需 Bypass）。白炽灯无需 Bypass。 |
| 外部保护 | 10 A，脱扣特性 B 或 C；6 kA 分断能力；能量限制等级 3 |
| **输出电路额定值** | |
| 最大切换电压 | 240 V~ 50 Hz |
| 最大切换功率 | 200 W |
| **传感器与计量** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| Wi-Fi 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 通信距离 | 室内最高 30 米 / 100 英尺；室外最高 50 米 / 160 英尺<br>（取决于当地环境条件） |
| **蓝牙** | |
| 协议版本 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 通信距离 | 室内最高 10 米 / 33 英尺；室外最高 30 米 / 100 英尺<br>（取决于当地环境条件） |
| **微控制器单元（MCU）** | |
| CPU | ESP-Shelly-C38F |
| 时钟频率 | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个钩子，每个钩子支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![1L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/1L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

**端子标识**  
- **L**：火线（220–240 V~）端子  
- **O**：负载电路输出端子  
- **S1, S2**：开关输入端子  
- **Sx**：开关信号输出端子  

**导线标识**  
- **L**：火线（220–240 V~）  
- **N**：中性线  

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 故障排查

...

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1LG3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规与认证

- [Shelly 1L Gen3 多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%201L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1L Gen3 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%201L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案：Shelly 1L Gen3 多语言欧盟符合性声明 82 09.04.2025.pdf](https://kb.shelly.cloud/__attachments/293208480/Shelly%201L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2082%2009.04.2025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1L Gen3 多语言打印用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%201L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（俄语）](../knowledge-base/shelly-1l-gen3-1)

## 安装指南

×