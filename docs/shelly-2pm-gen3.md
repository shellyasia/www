# Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly 2PM Gen3  
- **设备型号：** S3SW-002P16EU  
- **设备SSID：** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1005  

## 简要说明

Shelly 2PM Gen3 是一款紧凑型双通道智能开关，具备电力测量与遮盖控制功能。它支持通过智能手机、平板电脑、PC 或智能家居系统远程控制电器设备。该设备可在本地 Wi-Fi 网络中独立运行，也可集成至基于云的智能家居服务。

相比前代产品，本设备搭载了升级版处理器和更大的内存，性能显著提升。设备支持电动百叶窗控制，并可轻松安装于标准电气墙盒、插座后方、开关背后或其他空间受限的位置。

内置网页界面允许用户监控、控制和配置设备。此外，它还可作为 BLE 网关和 Wi-Fi 范围扩展器，用于连接物联网设备。

只要设备保持连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络连接的位置实现远程访问。

## 主要特性

- **带电力测量的智能开关：** 可控制两个负载，并实时监测功耗，实现能源管理。
- **紧凑设计：** 小巧外形，适合安装在空间受限区域，如墙盒、插座或开关背面。
- **远程控制：** 通过移动应用、网页界面或智能家居平台实现完整远程操作。
- **本地与云端运行：** 可独立运行于本地网络，也可连接云端服务以实现远程访问。
- **改进的处理器与内存：** 升级硬件带来更快响应速度和更优多任务处理能力。
- **远程访问：** 无论身处何地，只要有互联网连接即可监控和控制设备。
- **嵌入式 Web 界面：** 内置用户界面，用于配置、状态监控和参数调整。
- **BLE 网关：** 通过将蓝牙设备信号转发至云端或本地设备，实现与更大 Shelly 生态系统的连接。
- **物联网设备 Wi-Fi 范围扩展器：** 增强 Wi-Fi 信号强度，扩大覆盖范围，改善其他物联网设备的连接性。
- **脚本支持：** 支持使用 Shelly Script 实现自定义自动化（参见 [Shelly Script 语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)）。
- **广泛集成支持：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 与第三方家居系统兼容。
- **KNX 支持：** 可通过 KNXnet/IP 集成至 KNX 网络（仅支持开关模式；需固件版本 1.5.0 或更高）。
- **定时任务：** 可基于日期、时间、工作日、小时、分钟和秒创建复杂的自动化流程。
- **虚拟组件：** 使用动态虚拟组件实现高级自动化逻辑（[了解更多](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)）。
- **百叶窗模式：** 完全控制电动百叶窗、卷帘、遮阳篷等设备。可测量负载功耗。连接前需确保电机已正确设置电子或机械限位开关。

  - 控制百叶窗/遮光板位置  
  - 调整百叶窗叶片倾斜角度  

## 应用场景

- **家电控制：** 远程自动化控制灯光、风扇、加热器及其他电器设备。
- **电力监测：** 实时跟踪能耗，识别低效设备并优化用电。
- **智能家居集成：** 在智能家庭生态系统中构建自定义场景、自动化流程和日常任务。
- **能效优化：** 识别高耗电设备，采取措施减少能源浪费。
- **远程监控：** 无论身在何处，只要有互联网连接即可查看和管理连接设备。

## 集成支持

### Amazon Alexa 支持的功能
是

### Google Smart Home 支持的属性
是

### Samsung SmartThings 支持的功能
是

## 简化内部原理图

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口

- 两个螺丝端子上的开关/按钮输入：S1 和 S2  
- 三个螺丝端子上的电源输入：1 N (+) 和 2 L (Ʇ)

### 输出端口

- 两个带有集成电力测量功能的继电器输出，可通过螺丝端子访问

### 扩展接口

- Shelly 专有串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口存在高压，请小心操作。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  
- 障碍物检测（遮盖模式）  
- 安全开关（遮盖模式）  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热元件）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻尼器的感性负载（LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、烘干机）  

## 用户界面

### 输入部分

- 一个（控制）按钮：

  - 长按 5 秒：进入 AP 模式并启用蓝牙配对  
  - 长按 10 秒：恢复出厂设置

### 输出指示灯

- 单色 LED 指示灯：

  - **AP 已启用，Wi-Fi 已禁用：** 1 秒 ON / 1 秒 OFF  
  - **Wi-Fi 已启用，未连接：** 1 秒 ON / 3 秒 OFF  
  - **已连接至 Wi-Fi 网络：** 持续常亮  
  - **云服务已启用，未连接：** 1 秒 ON / 5 秒 OFF  
  - **已连接至 Shelly Cloud：** 持续常亮  
  - **OTA 更新进行中：** 0.5 秒 ON / 0.5 秒 OFF  
  - **长按 5 秒按钮：** 0.5 秒 ON / 0.5 秒 OFF  
  - **长按 10 秒按钮：** 0.25 秒 ON / 0.25 秒 OFF  

> **注意：** 状态按列出顺序优先级排序，高优先级状态会覆盖低优先级状态。

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 30 g / 1.06 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 至 2.5 mm² / 24 至 14 AWG（实心、绞合线、线鼻） |
| 导线剥线长度 | 6 至 7 mm / 0.24 至 0.28 in |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 黑色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20°C 至 40°C / -5°F 至 105°F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 供电电压 | 110–240 V~ / 24 V⎓ ±10% |
| 功耗 | < 1.4 W |
| 外部保护要求 | B 或 C 型脱扣特性，额定电流最大 16 A，最小分断能力 6 kA，能量限制等级 3 |
| **输出电路额定值** | |
| 最大切换电压（交流） | 240 V~ |
| 最大切换电压（直流） | 30 V⎓ |
| 最大切换电流（交流） | 每通道 10 A，总计 16 A，峰值总电流 18 A |
| 最大切换电流（直流） | 10 A |
| **传感器与计量** | |
| 电压表（交流） | 支持 |
| 电流表（交流） | 支持 |
| 内置温度传感器 | 支持 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | IEEE 802.11 b/g/n |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米 / 室外最高 50 米（受环境影响） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米 / 室外最高 30 米（受环境影响） |
| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| Flash 存储 | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个钩子，每个最多支持 5 个 URL |
| 脚本支持 | 支持 |
| MQTT 支持 | 支持 |

## 基础接线图

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*双通道开关模式，交流供电*

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*双通道开关模式，直流供电*

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*遮盖模式接线图*

### 图例

| 符号 | 描述 |
|------|------|
| **O1, O2** | 负载电路输出端子 |
| **N** | 零线 |
| **L** | 火线端子（110–240 VAC） |
| **L** | 火线（110–240 V~） |
| **S1, S2** | 开关输入端子 |
| **+** | 24 V⎓ 正极导线/端子 |
| **−** | 24 V⎓ 负极导线/端子 |

## 故障排查

1. **确保供电正常：**
   - 检查电源线、插座及设备上的电源指示灯。

2. **检查所有连接：**
   - 确认接线、端子和连接器牢固且正确插入。松动连接可能导致间歇性故障。

3. **检查设备设置：**
   - 确认配置符合预期用途。错误设置可能导致功能异常。

4. **更新固件/软件：**
   - 检查是否有可用更新。保持设备最新可解决已知问题并提升稳定性。

5. **重启设备：**
   - 断电后等待 5–10 秒再重新上电。可清除临时故障。

6. **验证网络连接：**
   - 确保 Wi-Fi 凭据和网络配置正确。如有需要，重启路由器或接入点。

7. **检查物理状态：**
   - 观察是否存在损坏、过热或异常运行迹象。

8. **确认兼容性：**
   - 确保设备与其他系统组件（硬件、软件、协议）兼容。

9. **监控环境条件：**
   - 避免超出规定范围的极端温度或湿度。

10. **评估电源质量：**
    - 电压波动或浪涌可能影响性能。建议使用浪涌保护器或稳压器。

> \*以上步骤为通用指导。具体问题可能需针对性排查。若问题持续存在，请联系 [技术支持](https://support.shelly.cloud/en/support/home)。

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web 用户界面

- [Shelly 2PM Gen3 Web UI 使用指南](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## 组件与 API

- [本设备（API 参考）](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印版用户手册

[Shelly 2PM Gen3 多语言打印版用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全手册（保加利亚语）](../knowledge-base/shelly-2pm-gen3-1)

## 合规性文件

- [Shelly 2PM Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

合规档案：

- [Shelly 2PM Gen3 多语言欧盟符合性声明（53，2024-08-12）](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

×