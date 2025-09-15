# Shelly 1 Gen3

![Shelly 1 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称**：Shelly 1 Gen3  
- **设备型号**：S3SW-001X16EU  
- **设备SSID**：Shelly1G3-XXXXXXXXXXXX  
- **BLE 模型 ID**：0x1018  

## 简要说明

Shelly 1 Gen3 是一款紧凑型智能开关，具备无源触点功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电气设备的远程控制。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行管理。相比前代产品，其处理器性能得到升级，内存容量也有所增加。

它支持从任何具备互联网接入的地点进行远程监控、控制和管理，前提是设备已连接至 Wi-Fi 路由器并接入互联网。

专为改造安装设计，可适配标准电气墙盒、电源插座后方、灯具开关处或空间受限区域。

Shelly 1 Gen3 内置网页界面，支持实时监控、配置及设备管理。

## 主要特性

- **Wi-Fi 连接**：连接家庭 Wi-Fi 网络，实现远程访问与控制。
- **智能家居集成**：兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **本地与云端控制**：可在本地网络独立运行，也可集成至云服务。
- **蓝牙连接（BLE）**：支持蓝牙低功耗（BLE），用于设置辅助和设备配对。
- **用户友好界面**：配备物理复位按钮，便于手动配置与故障排查。
- **性能提升**：采用增强型处理器和更大内存，响应更快，运行更可靠。
- **嵌入式 Web 界面**：提供功能完整的 Web UI，用于设备配置、状态监控与参数调整。
- **无线协议支持**：支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，具备明确的室内/室外通信范围表现。
- **干接点切换**：可安全切换低压设备。
- **BLE 网关功能**：作为 Shelly BLU 设备与更广泛 Shelly 生态系统之间的桥梁——接收 BLE 信号，并转发至云端或本地设备。
- **物联网设备 Wi-Fi 范围扩展器**：通过接收、放大并重新广播信号，扩展 Wi-Fi 覆盖范围，适用于更大区域。
- **脚本支持**：支持使用 Shelly Script 编写自定义逻辑（参见 [Shelly Script 语言特性](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)）。
- **广泛集成能力**：通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 支持第三方平台。
- **定时调度**：支持基于日期、时间、星期几、小时、分钟和秒的复杂调度规则。
- **虚拟组件支持**：支持动态虚拟组件，适用于高级自动化场景（[了解更多](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)）。

## 应用场景

- **远程设备控制**：通过移动应用、平板电脑、PC 或自动化系统远程启停电器。
- **联网便捷管理**：在连接 Wi-Fi 的前提下，无论身处何地均可通过互联网管理设备。
- **家庭自动化**：实现电器自动化控制，提升舒适度、能效与生活便利性。

## 主要应用场景

- 住宅环境  
- 多户单元（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售商店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

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

### 输入端口

- 1 个通过螺丝端子连接的开关/按钮输入  
- 1 个通过螺丝端子连接的无源继电器输入  
- 2 个通过螺丝端子连接的电源输入：N（零线）和 L（火线）  

### 输出端口

- 1 个通过螺丝端子连接的无源继电器输出  

## 连接方式

- Wi-Fi  
- 蓝牙（BLE 4.2）  

## 安全功能

- 过热保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻容吸收电路的感性负载（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机）  

## 用户界面

### 输入部分

- **一个（控制）按钮**  
  - 长按 5 秒：启用设备热点模式与蓝牙功能。  
  - 长按 10 秒：执行恢复出厂设置。  

### 输出部分

- **单色 LED 指示灯**  
  - 启用 AP，Wi-Fi 关闭：1 秒 ON / 1 秒 OFF  
  - Wi-Fi 已启用但未连接：1 秒 ON / 3 秒 OFF  
  - 已连接到 Wi-Fi 网络：持续亮起  
  - 已启用云服务但未连接：1 秒 ON / 5 秒 OFF  
  - 已连接至 Shelly Cloud：持续亮起  
  - 正在进行 OTA（空中升级）：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 5 秒：0.5 秒 ON / 0.5 秒 OFF  
  - 按钮长按 10 秒：0.25 秒 ON / 0.25 秒 OFF  

> *注：状态优先级从上至下排列，后续状态会覆盖前一状态。*

## 规格参数

| **类别** | **参数** | **数值** |
|----------|---------|--------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 英寸 |
| | 重量 | 26 克 / 0.92 盎司 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| | 导线截面积 | 0.2–2.5 mm² / 24–14 AWG（实心、绞合线、压接端子） |
| | 导线剥线长度 | 6–7 mm / 0.24–0.28 英寸 |
| | 安装方式 | 墙面底盒安装 |
| | 外壳材质 | 塑料 |
| | 外壳颜色 | 蓝色 |
| | 端子颜色 | 黑色 |

| **环境条件** | 工作环境温度 | -20 °C 至 +40 °C / -5 °F 至 105 °F |
| | 湿度 | 30% 至 70% RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |

| **电气参数** | 供电方式 | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| | 功耗 | < 1.2 W |
| | 外部保护 | 符合 EN60898-1 标准的电缆保护开关（跳闸特性 B 或 C，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3） |

| **输出电路额定值** | 最大切换电压 | 240 V~<br>30 V⎓ |
| | 最大切换电流 | 16 A / 240 V~<br>10 A / 30 V⎓ |

| **传感器与计量** | 内置温度传感器 | 是 |

| **无线通信** | 协议 | 802.11 b/g/n |
| | 射频频段 | 2401 – 2483 MHz |
| | 最大射频功率 | < 20 dBm |
| | 通信范围 | 室内最高 30 米 / 100 英尺<br>室外最高 50 米 / 160 英尺<br>（受本地环境影响） |

| **蓝牙** | 协议 | Bluetooth 4.2 with BLE |
| | 射频频段 | 2400 – 2483.5 MHz |
| | 最大射频功率 | < 4 dBm |
| | 通信范围 | 室内最高 10 米 / 33 英尺<br>室外最高 30 米 / 100 英尺<br>（受本地环境影响） |

| **微控制器单元** | CPU | ESP-Shelly-C38F |
| | Flash 存储 | 8 MB |

| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 动作） | 20 个钩子，每个最多支持 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |

## 基础接线图

![1 Gen3 AC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ 电源供电*

![1 Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–48 V⎓ 电源供电*

![1 Gen3 12V.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*12 V⎓ 稳压电源供电*

### 图例说明

**端子标识**  
- **I**：负载回路输入端子  
- **O**：负载回路输出端子  
- **L**：火线（110–240 V~）  
- **N**：零线  
- **SW**：开关（控制 O）输入端子  
- **+**：正极线（12/24–48 V⎓）  
- **+12V**：12 V⎓ 正极端子  
- **GND**：接地线（12/24–48 V⎓）  
- **+**：正极端子（24–48 V⎓）  
- **Ʇ**：接地端子（12/24–48 V⎓）  

**导线标识**  
- **L**：火线端子（110–240 V~）  
- **N**：零线端子  

## Shelly 智能控制

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly 1 Gen3 网页界面指南](../knowledge-base/shelly-1-gen3-web-interface-guide)

## 组件与 API

- [本设备文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1G3)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly 1 Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案库**  
- [Shelly 1 Gen3 多语言欧盟符合性声明（48, 2024-05-29）](https://kb.shelly.cloud/__attachments/344260610/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2048%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

[Shelly 1 Gen3 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-1-gen3-1)

## 安装指南

*(暂无内容)*