# Shelly 2L Gen3

![Shelly 2L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 2L Gen3  
- **设备型号：** S3SW-0A2X4EUL  
- **设备SSID：** Shelly2LG3-XXXXXXXXXXXX  
- **设备蓝牙ID：** 0x1013  

## 简要说明

Shelly 2L Gen3 是一款紧凑型双通道智能开关，专为精准照明控制设计。该设备的一大特点是无需中性线即可运行。但必须与一台并联连接在第一通道负载端的 Shelly Bypass 1L/2L Gen3 配合使用。

该设备可通过智能手机、平板电脑、PC 或集成的家庭自动化系统实现无缝照明控制。它既可独立运行于本地 Wi-Fi 网络，也可连接至基于云的家庭自动化服务。只要设备保持连接到 Wi-Fi 路由器和互联网，用户即可随时随地访问、控制和监控其照明配置。

设计上高度灵活，Shelly 2L Gen3 可轻松安装于标准电气墙盒内、灯具开关后方或空间狭小的位置。其内置的 Web 界面使用户能够轻松监控、控制并精细调整设备设置。

该设备支持 Matter 协议，可通过固件更新获得支持。

## 主要功能

- **适用于改造安装！** 无需中性线——仅通过火线即可供电并控制灯具或其他电器。
- **双通道设计！** 用一个设备控制两个独立的照明回路。
- **最低灯泡功率低：** 使用 O1 时需配合 Shelly Bypass 1L/2L Gen3，支持控制功率高于 5W 的灯泡。
- **Wi-Fi 连接：** 连接到家庭 Wi-Fi 网络，可通过 Shelly 移动 App 或第三方平台远程控制。
- **远程控制：** 通过 Shelly App，只要有互联网连接，即可从任何地方管理已连接设备。
- **语音控制：** 兼容 Amazon Alexa 和 Google Assistant，支持语音激活控制。
- **定时与自动化：** 支持定时器和自定义场景（例如：设定灯光在特定时间开关）。
- **兼容性：**
  - 经过设计和测试，广泛兼容多种灯具类型。
  - 工作电压范围广：220–240 VAC。
- **紧凑设计：** 适合安装在标准墙盒或开关背面，特别适用于空间受限环境。
- **过热保护：** 内置温度传感器，提升安全性。
- **本地与远程访问：** 可在同一网络下本地控制，也可通过云端远程访问。
- **OTA 更新：** 支持空中无线固件升级，持续优化性能与安全。
- **智能家居生态系统集成：** 兼容 MQTT、Home Assistant 等主流智能家居平台。

## 主要应用场景

- 住宅
- 多户住宅（公寓、联排别墅、酒店等）
- 轻型商业（小型办公室、零售店、餐厅、加油站等）
- 政府 / 市政机构
- 大学 / 学院

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

### 输入
- 两个螺丝端子上的开关/按钮输入：S1 和 S2  
- 一个电源输入螺丝端子：L  

### 输出
- 一个开关/按钮信号输出螺丝端子：Sx  
- 两个继电器输出螺丝端子：O1 和 O2  

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  

## 支持的负载类型

### 输出 1：
- 白炽灯  
- LED 灯  
> *注意：不支持使用降压变压器的低压灯具*

### 输出 2：
- 白炽灯  
- LED 灯  
- 荧光灯  
- 风扇  

## 用户界面

### 输入
- 一个（控制）按钮：
  - 按住 5 秒：启用设备热点及蓝牙配对模式。
  - 按住 10 秒：执行恢复出厂设置。

### 输出
- 单色 LED 指示灯：
  - 启用 AP 模式，Wi-Fi 关闭：1 秒亮 / 1 秒灭  
  - Wi-Fi 已开启但未连接：1 秒亮 / 3 秒灭  
  - 已连接到 Wi-Fi 网络：常亮  
  - 已启用云服务但未连接：1 秒亮 / 5 秒灭  
  - 已连接到 Shelly Cloud：常亮  
  - 正在进行 OTA（空中升级）：0.5 秒亮 / 0.5 秒灭  
  - 按住按钮 5 秒：0.5 秒亮 / 0.5 秒灭  
  - 按住按钮 10 秒：0.25 秒亮 / 0.25 秒灭  

> *注：状态优先级从上至下排列，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 项目 | 数值 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 28 g / 1 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合、线鼻子） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 in |
| 安装方式 | 墙内嵌入式安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 青绿色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 存储温度 | 10 °C 至 40 °C |
| 湿度 | 30 % 至 70 % RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源输入 | 220–240 V~, 50 Hz（O1 负载需使用 Shelly Bypass） |
| 是否包含 Shelly Bypass | 是 |
| 功耗 | < 1.2 W |
| 无需中性线 | 是（O1 负载需使用 Bypass） |
| 无中性线且无 Bypass 时最小负载 | 不适用（O1 必须使用 Bypass；白炽灯负载无需 Bypass） |
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
| 通信范围 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| **蓝牙** | |
| 协议版本 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 通信范围 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 时钟频率 | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个，每个最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT 支持 | 是 |

## 基础接线图

![2L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/2L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例

| **端子标识** | **说明** |
|--------------|----------|
| S1 | 开关输入端子 1 |
| S2 | 开关输入端子 2 |
| Sx | 开关信号输出端子 |
| O1 | 负载回路输出端子 1 |
| O2 | 负载回路输出端子 2 |
| L | 火线（220–240 V~）或端子 |
| N | 中性线 |

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## 故障排除

...

## 组件与 API

- [设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2LG3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 2L Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 2L Gen3 英国 PSTI ACT 合规性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [合规档案：Shelly 2L Gen3 多语言欧盟符合性声明 83 09.04.02025](https://kb.shelly.cloud/__attachments/293208601/Shelly%202L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2083%2009.04.02025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户指南

- [Shelly 2L Gen3 多语言打印版用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%202L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-2l-gen3-1)

## 安装指南

×