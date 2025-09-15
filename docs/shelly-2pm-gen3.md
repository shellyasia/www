Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly 2PM Gen3  
- **设备型号：** S3SW-002P16EU  
- **设备 SSID：** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE 模型 ID：** 0x1005  

## 简要说明

Shelly 2PM Gen3 是一款紧凑型双通道智能开关，集成了功率测量与遮盖控制功能。它可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电气设备的远程控制。该设备可在本地 Wi-Fi 网络上独立运行，或通过基于云的家庭自动化服务进行操作。

相比前代产品，本设备配备了升级的处理器和更大的内存，性能显著提升。此外，还支持百叶窗控制功能。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何具备网络连接的位置实现远程访问、监控和控制。

专为安装在标准电气墙盒中设计，适用于插座后方、开关后方或空间受限的安装场景。

设备内置网页界面，用于配置、监控及实时控制。

## 主要特性

- **带功率测量的智能开关：** 作为智能开关使用，内置能耗监测功能，可追踪电器的用电情况。
- **紧凑设计：** 小巧外形，非常适合安装于标准墙盒、插座后方、开关后方或狭小空间。
- **远程控制：** 支持通过移动应用、平板电脑、PC 或家庭自动化平台进行远程操作。
- **本地与云端控制：** 可在本地网络下独立运行，也可集成至基于云的自动化服务。
- **升级的处理器与内存：** 更强的硬件配置，带来更快的响应速度和更优的整体性能。
- **远程访问：** 实现随时随地的完整远程访问、控制与监控。
- **嵌入式 Web 界面：** 提供用户友好的界面，用于设备设置、状态监控及参数调整。
- **BLE 网关：** 通过将蓝牙信号转发至云端或本地设备，连接蓝牙 enabled 的 Shelly 设备至更广泛的 Shelly 生态系统。
- **IoT 设备 Wi-Fi 范围扩展器：** 接收、放大并重新传输 Wi-Fi 信号，扩大覆盖范围。
- **脚本功能：** [Shelly 脚本语言功能](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **广泛集成支持：** 通过 HTTP API、MQTT(s)、Webhooks（HTTP/HTTPS）和 UDP 与第三方家庭系统兼容。
- **KNX：** 支持 **KNXnet/IP** 通信（仅限开关模式；固件版本 1.5.0 或更高）。
- **定时任务：** 支持基于日期、时间、星期几、小时、分钟和秒创建复杂的自动化规则。
- **虚拟组件：** [虚拟动态组件指南](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **百叶窗模式：** 支持远程控制电动百叶窗、卷帘门、遮阳篷等设备，并测量连接电机的功耗。  
  - 建议使用配备电子或机械限位开关的电机。  
  - 连接电机前，请确保限位开关已正确设置。  
  - 控制功能包括：  
    - 百叶窗位置（开/关）  
    - 百叶角度调节（适用于百叶窗）

## 应用场景

- **电器控制：** 远程自动化控制灯光、风扇、加热器及其他电气设备。
- **用电监控：** 实时跟踪能耗，识别低效设备并优化使用。
- **智能家居集成：** 无缝融入智能家庭生态系统，实现自定义场景与自动化流程。
- **能效优化：** 利用用电数据识别高耗电设备，实施节能策略。
- **远程监控：** 使用联网设备远程监控和管理连接的设备。

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

- 两个螺丝端子上的开关/按钮输入：**S1** 和 **S2**
- 三个螺丝端子上的电源输入：**1 N (+)** 和 **2 L (Ʇ)**

### 输出端口

- 两个带功率测量功能的继电器输出，通过螺丝端子引出

### 扩展接口

- Shelly 专用串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **注意！** 当设备通电时，扩展接口存在高压，请小心处理。

## 连接方式

- Wi-Fi  
- 蓝牙  

## 安全功能

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  
- 遮盖模式下的障碍物检测  
- 遮盖模式下的安全开关

## 支持的负载类型

- **阻性负载：** 白炽灯泡、加热设备  
- **容性负载：** 电容组、电子设备、电机启动电容  
- **带 RC 阻尼器的感性负载：** LED 驱动器、变压器、风扇、冰箱、空调、洗衣机、干衣机

## 用户界面

### 输入

- 一个（控制）按钮  
  - 长按 **5 秒**：启用设备热点及蓝牙配对模式。  
  - 长按 **10 秒**：执行恢复出厂设置。

### 输出

- 单色 LED 指示灯  
  - **AP 启用，Wi-Fi 关闭**：1 秒 ON / 1 秒 OFF  
  - **Wi-Fi 启用，未连接**：1 秒 ON / 3 秒 OFF  
  - **已连接 Wi-Fi 网络**：持续亮起  
  - **已启用云服务，未连接**：1 秒 ON / 5 秒 OFF  
  - **已连接 Shelly 云**：持续亮起  
  - **正在执行 OTA 更新**：0.5 秒 ON / 0.5 秒 OFF  
  - **长按按钮 5 秒**：0.5 秒 ON / 0.5 秒 OFF  
  - **长按按钮 10 秒**：0.25 秒 ON / 0.25 秒 OFF  

> *注：以上 LED 状态按从上到下的优先级排序，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| 重量 | 30 g / 1.06 oz |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.2 – 2.5 mm² / 24 – 14 AWG（单股、多股、线鼻子） |
| 导线剥线长度 | 6 – 7 mm / 0.24 – 0.28 in |
| 安装方式 | 墙盒安装 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 黑色 |
| 端子颜色 | 黑色 |
| **环境条件** | |
| 工作环境温度 | -20°C 至 40°C / -5°F 至 105°F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源输入 | 110 – 240 V~ / 24 V⎓ ±10% |
| 功耗 | < 1.4 W |
| 外部保护装置 | B 或 C 型脱扣特性，最大额定电流 16 A，最小分断能力 6 kA，能量限制等级 3 |
| **输出电路额定值** | |
| 最大切换电压（交流） | 240 V~ |
| 最大切换电压（直流） | 30 V⎓ |
| 最大切换电流（交流） | 每通道 10 A，总计 16 A，峰值总电流 18 A |
| 最大切换电流（直流） | 10 A |
| **传感器与仪表** | |
| 交流电压表 | 是 |
| 交流电流表 | 是 |
| 内置温度传感器 | 是 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | IEEE 802.11 b/g/n |
| 射频频段 | 2412 – 2472 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 m / 100 ft，室外最高 50 m / 160 ft<br>（取决于当地环境） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2 |
| 射频频段 | 2402 – 2480 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 m / 33 ft，室外最高 30 m / 100 ft<br>（取决于当地环境） |
| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **固件功能** | |
| 定时任务 | 20 个 |
| Webhooks（URL 操作） | 20 个钩子，每个最多支持 5 个 URL |
| 脚本功能 | 支持 |
| MQTT | 支持 |

## 基础接线图

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*双通道开关模式，交流电源供电*

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*双通道开关模式，直流电源供电*

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*遮盖模式接线图*

### 图例说明

| 符号 | 描述 |
|------|------|
| **O1, O2** | 负载电路输出端子 |
| **N** | 零线 |
| **L** | 火线端子（110–240 VAC） |
| **L** | 火线（110–240 V~） |
| **S1, S2** | 开关输入端子 |
| **+** | 24 V⎓ 正极导线/端子 |
| **-** | 24 V⎓ 负极导线/端子 |

## 故障排除

1. **确保电源供应正常：**  
   - 检查电源线、插座以及设备上的电源指示灯。

2. **检查所有连接：**  
   - 确认所有导线和端子均已牢固连接。松动连接可能导致间歇性故障。

3. **检查设备设置：**  
   - 确保配置符合预期用途。错误设置可能导致行为异常。

4. **更新固件/软件：**  
   - 检查是否有可用更新。新版固件通常可修复漏洞并提高稳定性。

5. **重启或重置设备：**  
   - 断电后等待 5–10 秒，再重新上电，以清除临时故障。

6. **检查网络连接：**  
   - 确认 Wi-Fi 设置正确。若连接问题持续，请重启路由器或接入点。

7. **检查物理部件：**  
   - 查看是否存在损坏、过热或异常噪音。

8. **验证兼容性：**  
   - 确保设备与其他系统组件（硬件和软件）兼容。

9. **监控环境条件：**  
   - 极端温度或湿度可能影响设备性能。

10. **评估电能质量：**  
    - 电压波动或瞬变可能影响可靠性。建议使用浪涌保护器或稳压器。

> *注：以上步骤为通用指导。特定问题可能需要不同处理方式。如问题持续，请联系 [技术支持](https://support.shelly.cloud/en/support/home)。*

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web 用户界面

- [Shelly 2PM Gen3 Web 界面指南](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## 组件与 API

- [此设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印用户手册

[Shelly 2PM Gen3 多语言打印版用户与安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（保加利亚语）](../knowledge-base/shelly-2pm-gen3-1)

## 合规性文件

- [Shelly 2PM Gen3 多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 2PM Gen3 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 2PM Gen3 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 合规档案

- [Shelly 2PM Gen3 多语言欧盟符合性声明 53 2024-08-12.pdf](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

×