Shelly Pro 3EM

![](https://kb.shelly.cloud/__attachments/229146742/Pro-3EM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称**：Shelly Pro 3EM  
- **设备型号**：SPEM-003CEBEU  
- **设备SSID**：ShellyPro3EM-XXXXXX  

## 简要说明

Shelly Pro 3EM 是一款可安装于导轨的三相电能表。配备完整的 `gen2` 固件灵活性和以太网连接功能，为专业集成商提供了更丰富的终端客户解决方案选项。该设备可在本地局域网或 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务（使用 MQTT、HTTP 和 WebSocket 协议）实现远程管理。所有入站连接均支持 TLS 加密。

该设备可实时报告累计电能数据，以及每相的瞬时电压、电流、有功功率和视在功率。测量数据存储于非易失性内存中，可保存长达 60 天，采样间隔为 1 分钟。

设备内置实时时钟，在未连接 SNTP 服务器时仍能保持时间准确。

用户可通过网络远程访问、配置和监控 Shelly Pro 3EM，并可与自动化系统通信——前提是双方位于同一网络基础设施内。

嵌入式网页界面支持设备状态的监控、控制和设置配置。

> **⚠ 注意！** 该设备不包含内置继电器。接触器控制需通过连接至 Shelly Pro 3EM 的兼容 Shelly Pro 扩展模块实现。

## 功能特性

- 四象限电能计量  
- 导轨安装  
- 多种连接方式（Wi-Fi、以太网、蓝牙）  
- 用于相线与零线电流检测的电流互感器（CT）输入  
- 相序错误检测\*（可选）  
- 通道间校准\*\*  
- 无负载阈值\*\*\*  
- 光学脉冲输出，用于电能使用情况指示  
- 实时时钟  
- 数据记录功能  
- 精度等级 B（IEC 62053-21）  
- 支持光伏系统（PV ready）

> \* 相序错误检测基于各相电压的过零事件。预期顺序为 A → B → C。若检测到顺序为 A → C → B，则在启用此功能时会报告 `phase_sequence` 错误。  
>  
> \*\* 校准要求每通道至少 500 W 负载。  
>  
> \*\*\* 当三相总负载低于每通道 30 VA 时，虽仍显示功率读数，但不再累积电能。网页界面和移动 App 将显示 `No load threshold` 提示。

## 主要应用场景

- 住宅建筑  
- 多住户单元（MDUs）：公寓、联排别墅、酒店等  
- 轻型商业场所：小型办公室、零售店、餐厅、加油站  
- 农业领域：农场、牛棚、粮仓  
- 政府及市政设施  
- 大学和学院  

## 简化内部原理图

![Shelly Pro 3EM 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Pro-3EM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 4 个螺丝端子线路输入：3 个 **L**（A 相、B 相、C 相），1 个 **N**（零线）  
- 4 个 CT 输入：3 个用于 **L** 电流测量（A、B、C 相），1 个用于 **N** 电流测量  

### 以太网接口

- 1 × RJ45 接口  

> **⚠ 注意！** 连接或断开 LAN 网线时，请务必确保设备已断电。插拔过程中，请确保连接器接触区域为非金属材质。

### 扩展模块接口

- 专有串行接口，用于连接 Shelly Pro 扩展模块  

![Pro-3EM 扩展接口](https://kb.shelly.cloud/__attachments/231604493/Pro-3EM-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请在操作时格外小心。

## 连接方式

- Wi-Fi（2.4 GHz）  
- 以太网（RJ45）  
- 蓝牙（4.2）  

每种连接方式均可独立启用或禁用，通过配置进行设置。

## 安全功能

- 内置温度感应与上报功能  

## 支持的负载类型

- 阻性负载（白炽灯、加热器）  
- 容性负载（LED 驱动器、电容组、电子设备、电机启动电容）  
- 感性负载（变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 1 个触觉凸起按钮  
  - **短按**：切换连接的 Shelly Pro 3EM Switch 扩展模块的继电器状态。  
  - **长按 5 秒**：进入设备热点（AP）模式。  
  - **长按 10 秒**：恢复出厂设置。

### 输出

- **LED 指示灯**
  - **电源**：供电连接时亮红灯。
  - **Wi-Fi 状态**：
    - 蓝色：AP 模式
    - 红色：STA 模式，未连接 Wi-Fi
    - 黄色：STA 模式，已连接 Wi-Fi 但未连接 Shelly Cloud（或 Cloud 已禁用）
    - 绿色：STA 模式，已连接 Wi-Fi 且已连接 Shelly Cloud
    - 红蓝闪烁：正在进行 OTA 升级
  - **LAN**：以太网连接建立时亮绿灯。
  - **计数**：红色 LED 闪烁频率与电路中测得的电能流动速率成正比。

## 规格参数

| **类别** | **规格说明** |
|----------|--------------|
| **物理特性** | |
| 尺寸（高×宽×深） | 94 × 19 × 69 ±0.5 mm / 3.70 × 0.75 × 2.71 ±0.02 in |
| 重量 | 62 ±1 g / 2.19 ±0.05 oz |
| 安装方式 | DIN 导轨 |
| 螺丝端子最大扭矩 | 0.4 Nm / 4.43 lbin |
| 导线截面积 | 0.5 – 2.5 mm² / 20 – 14 AWG（单股、多股、压接端子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 in |
| 外壳材质 | 塑料 |
| 颜色 | 白色 |
| **环境条件** | |
| 环境温度 | –20 °C 至 40 °C / –5 °F 至 105 °F |
| 湿度 | 30 % – 70 % RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源输入（交流） | 100 – 260 V，50/60 Hz |
| 电源输入（直流） | 不适用 |
| 功耗 | < 3 W |
| 外部保护 | B 或 C 型脱扣特性，额定电流 ≤16 A，分断能力 ≥6 kA，能量限制等级 3 |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 电压表（有效值，每相） | 100 – 260 V |
| 电压表精度 | ±1 % |
| 电流表（通过 CT 测量有效值，每相及零线） | 0 – 120 A |
| 兼容 CT | [CT 120A](https://kb.shelly.cloud/knowledge-base/ct-120a) |
| 电流表精度 | ±1 %（2 – 120 A），±2 %（1 – 2 A），±5 %（0 – 1 A） |
| 功率与电能表 | 有功功率与视在功率、有功电能与视在电能、功率因数、基波有功/无功电能 |
| 通道间校准最小负载 | 每通道 ≥500 W |
| 无负载阈值 | 每通道 30 VA |
| 测量数据存储 | 至少保存 60 天的 1 分钟分辨率数据 |
| 数据导出 | PQ 数据以 CSV 格式导出；JSON 格式通过 RPC API 获取 |
| **无线通信** | |
| 射频频段 | 2400 – 2495 MHz |
| 最大射频功率 | <20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输距离 | 室内最高 30 米，室外最高 50 米（受环境影响） |
| 蓝牙协议 | 4.2 |
| 蓝牙传输距离 | 室内最高 10 米，室外最高 30 米（受环境影响） |
| **微控制器（MCU）** | |
| CPU | ESP32-D0WDQ6 |
| 闪存 | 16 MB |
| **固件功能** | |
| Webhooks（URL 动作） | 20 个钩子，每个最多支持 5 个 URL |
| 脚本支持 | 是 |
| MQTT | 是 |
| CoAP | 否 |

## 基础接线图

![Pro 3EM 带熔断器基础接线图](https://kb.shelly.cloud/__attachments/243531777/Pro%203EM%20basic%20wiring%20with%20fuses.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![Pro-3EM 单相接线图（带熔断器）](https://kb.shelly.cloud/__attachments/243531777/Pro-3EM-monophase-wiring-diagram-with-fuses.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

#### 端子标识

| 标签 | 功能 |
|------|------|
| A | A 相输入 |
| B | B 相输入 |
| C | C 相输入及电源输入 |
| N | 零线端子 |

#### 导线标识

| 标签 | 功能 |
|------|------|
| LA | A 相火线（110–240 V） |
| LB | B 相火线（110–240 V） |
| LC | C 相火线（110–240 V） |
| L | 单相火线（110–240 V） |
| N | 零线 |

#### 电流互感器（CT）

| 标签 | 功能 |
|------|------|
| CTA | A 相电流互感器 |
| CTB | B 相电流互感器 |
| CTC | C 相电流互感器 |
| CTN | 零线电流互感器（可选，未包含） |

#### CT 输入端口

| 标签 | 功能 |
|------|------|
| IA | A 相 CT 输入 |
| IB | B 相 CT 输入 |
| IC | C 相 CT 输入 |
| IN | 零线 CT 输入 |

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly Pro 3EM 网页界面指南](../knowledge-base/shelly-pro-3em-web-interface-guide)

## 故障排除

*(待补充)*

## 组件与 API

- [设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro3EM)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly Pro 3EM 多语言欧盟符合性声明（2025-07-23）](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20multilingual%20EU%20declaration%20of%20conformity%202025-07-23.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Pro 3EM 120A 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20120A%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Pro 3EM 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案**

- [Shelly Pro 3EM 多语言欧盟符合性声明 v4（2023-04-25）](https://kb.shelly.cloud/__attachments/74973354/Shelly%20Pro%203EM%20multilingual%20EU%20declaration%20of%20conformity%204%202023-04-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

- [Shelly Pro 3EM 多语言打印版用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Pro%203EM%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-pro-3em-1)