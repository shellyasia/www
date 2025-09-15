# Shelly 1 Gen3

![Shelly 1 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 1 Gen3  
- **设备型号：** S3SW-001X16EU  
- **设备SSID：** Shelly1G3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1018  

## 简要说明

Shelly 1 Gen3 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。它可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行管理。相比前代产品，其处理器升级并增加了内存，性能更优。

该设备支持从任何具备互联网接入的地点进行远程监控与控制，前提是设备始终连接至 Wi-Fi 路由器和互联网。

适用于标准电气墙盒内改造安装，可置于电源插座后方、灯开关后方或其他空间受限区域。

Shelly 1 Gen3 内置网页界面，用于设备监控、控制和配置。

## 主要特性

- **Wi-Fi 连接：** 连接到您的家庭 Wi-Fi 网络，实现远程监控与控制。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **本地与云端控制：** 可在本地网络独立运行，并支持基于云的远程访问。
- **蓝牙连接：** 支持蓝牙及 BLE 网关功能，便于初始设置阶段使用。
- **用户友好界面：** 配备物理复位按钮，方便手动操作。
- **升级的处理器与内存：** 更强硬件带来更好的响应速度与性能。
- **嵌入式 Web 界面：** 内建直观易用的网页管理界面。
- **无线协议支持：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内与室外覆盖范围。
- **干接点切换：** 适用于低电压设备的开关控制。
- **BLE 网关：** 作为 Shelly BLU 设备与整个 Shelly 生态系统之间的桥梁，接收蓝牙信号并转发至云端或本地设备。
- **IoT 设备 Wi-Fi 扩展器：** 通过接收、放大并重新广播信号，扩展 Wi-Fi 覆盖范围。
- **脚本支持：** 支持通过 Shelly Script 语言实现完整脚本功能。[了解更多](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成能力：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方系统集成。
- **定时调度：** 支持基于日期、时间、星期几、小时、分钟和秒创建复杂定时任务。
- **虚拟组件：** 支持动态虚拟组件，适用于高级自动化场景。[查看文档](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## 使用场景

- **远程电器控制：** 通过移动应用、平板电脑、PC 或家庭自动化系统远程开关设备。
- **联网便捷性：** 只要设备连接到 Wi-Fi 网络，即可在全球任意有互联网的地方访问和管理。
- **家庭自动化：** 自动化家电运行，提升舒适度与便利性。

## 主要应用场景

- 住宅  
- 多户单元（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售店、餐厅、加油站等）  
- 政府 / 市政机构  
- 大学 / 学院  

## 集成支持

### Amazon Alexa 支持的功能  
是  

### Google Smart Home 支持的属性  
是  

### Samsung SmartThings 支持的功能  
是  

## 简化内部原理图

![Shelly Plus 1 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 1 个螺丝端子上的开关/按钮输入  
- 1 个螺丝端子上的无源触点继电器输入  
- 2 个螺丝端子上的电源输入：N 和 L  

### 输出

- 1 个螺丝端子上的无源触点继电器输出  

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 吸收电路的感性负载（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机）  

## 用户界面

### 输入

- **一个（控制）按钮**  
  - 长按 5 秒：启用设备热点并建立蓝牙连接  
  - 长按 10 秒：执行恢复出厂设置  

### 输出

- **LED（单色）指示灯**  
  - 启用 AP，Wi-Fi 关闭：1 秒 ON / 1 秒 OFF  
  - Wi-Fi 已启用，未连接：1 秒 ON / 3 秒 OFF  
  - 已连接到 Wi-Fi 网络：持续亮起  
  - 已启用云功能但未连接：1 秒 ON / 5 秒 OFF  
  - 已连接至 Shelly Cloud：持续亮起  
  - OTA（空中升级）：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 5 秒：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 10 秒：0.25 秒 ON / 0.25 秒 OFF  

> *注：LED 状态按列出顺序优先级排列，后续状态将覆盖前一状态。*

## 规格参数

| **类别** | **参数** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | 重量 | 26 g / 0.92 oz |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| | 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（实心、绞合、线鼻端子） |
| | 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 in |
| | 安装方式 | 墙壁底盒安装 |
| | 外壳材质 | 塑料 |
| | 外壳颜色 | 蓝色 |
| | 端子颜色 | 黑色 |

| **环境条件** | 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30% – 70% RH |
| | 最大海拔高度 | 2000 m / 6562 ft |

| **电气参数** | 供电电源 | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| | 功耗 | < 1.2 W |
| | 外部保护 | 符合 EN60898-1 标准的电缆保护开关（B 或 C 型跳脱特性，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |

| **输出电路额定值** | 最大开关电压 | 240 V~<br>30 V⎓ |
| | 最大开关电流 | 16 A / 240 V~<br>10 A / 30 V⎓ |

| **传感器与仪表** | 内置温度传感器 | 是 |

| **无线通信** | 协议 | 802.11 b/g/n |
| | 射频频段 | 2401 – 2483 MHz |
| | 最大发射功率 | < 20 dBm |
| | 传输距离 | 室内最高 30 m / 100 ft<br>室外最高 50 m / 160 ft<br>（受当地环境影响） |

| **蓝牙** | 协议 | 4.2 with BLE |
| | 射频频段 | 2400 – 2483.5 MHz |
| | 最大发射功率 | < 4 dBm |
| | 传输距离 | 室内最高 10 m / 33 ft<br>室外最高 30 m / 100 ft<br>（受当地环境影响） |

| **微控制器单元** | CPU | ESP-Shelly-C38F |
| | Flash | 8 MB |

| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 操作） | 20 个钩子，每个最多支持 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT | 是 |

## 基础接线图

![1 Gen3 AC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ 电源供应*

![1 Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–48 V⎓ 电源供应*

![1 Gen3 12V.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*12 V⎓ 稳压电源供应*

### 图例说明

**端子标识**  
- **I**：负载电路输入端子  
- **O**：负载电路输出端子  
- **L**：火线（110–240 V~）  
- **N**：零线  
- **SW**：开关（控制 O）输入端子  
- **+**：12/24–48 V⎓ 正极线  
- **+12V**：12 V⎓ 正极端子  
- **GND**：12/24–48 V⎓ 接地线  
- **L**：火线端子（110–240 V~）  
- **N**：零线端子  
- **+**：24–48 V⎓ 正极端子  
- **Ʇ**：12/24–48 V⎓ 接地端子  

**导线标识**  
- 按照标准电气规范进行颜色编码

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web 用户界面

- [Shelly 1 Gen3 Web 界面指南](../knowledge-base/shelly-1-gen3-web-interface-guide)

## 组件与 API

- [本设备 API 参考](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1G3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly 1 Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案库**  
- [Shelly 1 Gen3 多语言欧盟符合性声明（48，2024-05-29）](https://kb.shelly.cloud/__attachments/344260610/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2048%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly 1 Gen3 多语言打印用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1-gen3-1)

## 安装指南

*(暂无内容)*