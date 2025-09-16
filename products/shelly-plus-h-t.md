# Shelly Plus H&T

![](https://kb.shelly.cloud/__attachments/229146742/Plus%20H&T.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus H&T  
- **设备型号：** SNSN-0013A  
- **设备SSID：** ShellyPlusHT-XXXXXX  

## 简要描述

**Shelly Plus H&T** 是一款支持 Wi-Fi 的智能温湿度传感器，配备大尺寸电子墨水图形显示屏，可清晰、直观地显示环境数据。

## 主要特性

- **Wi-Fi 连接：** 可连接家庭 Wi-Fi 网络，通过手机应用或兼容设备实现远程监控。
- **大尺寸电子墨水图形显示屏：** 提供高对比度、低功耗的视觉反馈，实时显示温度与湿度读数。
- **智能家居集成：** 无缝支持 Google Assistant、Amazon Alexa 和 Samsung SmartThings，实现语音控制与自动化。
- **USB Type-C 接口：** 支持持续供电；不用于电池充电。
- **蓝牙连接：** 初始配对时提供设置协助和设备配置支持。
- **用户友好界面：** 配备复位按钮（位于背面盖板后），便于手动操作与故障排查。
- **电池供电模式：** 每分钟唤醒一次进行温湿度测量。当变化超过阈值（默认：0.5 °C 或 5% RH）时上报数据。若连续两小时内无基于阈值的上报，则强制向云端发送状态更新。
- **USB 供电模式：** 每 5 分钟唤醒一次，执行测量、更新显示，并无条件向所有已连接通道报告数据，无阈值限制。
- **环境规格：** 工作温度范围为 0 °C 至 40 °C（32 °F 至 105 °F），推荐相对湿度为 30% 至 70% RH。
- **电源选项：** 使用 4 节 AA 电池（LR6，1.5 V，不含）或通过 USB Type-C 接口供电。
- **无线连接：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，室内有效距离达 30 m（100 ft），室外可达 50 m（160 ft）。
- **微控制器单元（MCU）：** ESP32，具备 4 MB 闪存。
- **固件功能：** 支持 MQTT 通信及 Webhooks，便于自定义集成。

这些特性使 Shelly Plus H&T 非常适用于住宅、多户住宅单元、轻型商业场所、教育机构以及其他需要可靠、低功耗环境监测并集成智能家居系统的场景。

## 主要应用场景

- 住宅家庭  
- 多户住宅单元（MDUs）：公寓、公寓楼、酒店  
- 轻型商业场所：小型办公室、零售店、餐厅、加油站  
- 大学/学院建筑  

## 集成支持

- Google Assistant  
- Amazon Alexa  
- Samsung SmartThings  

## 设备电气接口

### USB Type-C 接口

![USB Type-C 接口](https://kb.shelly.cloud/__attachments/231604493/Plus%20H&T%20USB%20Port.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- 用于为设备提供持续电力。  
- 不可用于为内部电池充电。

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- 蓝牙 4.2  

## 用户界面

### 输入

- **复位按钮**（位于背面盖板后方）

![复位按钮](https://kb.shelly.cloud/__attachments/29163591/Plus%20H&T%20Reset%20Button.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 输出

- **电子墨水图形显示屏**

![](https://kb.shelly.cloud/__attachments/29163591/Plus%20H&T%20display.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
![](https://kb.shelly.cloud/__attachments/29163591/SEt.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备处于设置模式。*

![](https://kb.shelly.cloud/__attachments/29163591/AP.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备热点已启用。*

![](https://kb.shelly.cloud/__attachments/29163591/Humidity.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*显示湿度读数。*

![](https://kb.shelly.cloud/__attachments/29163591/OtA.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备正在接收空中固件更新。进度以百分比显示。*

![](https://kb.shelly.cloud/__attachments/29163591/Globe.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备已将当前读数上报至云端。若缺失，显示屏可能显示过期数据。*

![](https://kb.shelly.cloud/__attachments/29163591/Wi-Fi.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Wi-Fi 信号强度指示器。*

![](https://kb.shelly.cloud/__attachments/29163591/battery.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*显示电池电量。通过 USB 供电时显示为空。*

![](https://kb.shelly.cloud/__attachments/29163591/BT.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*蓝牙连接已启用。*

![](https://kb.shelly.cloud/__attachments/29163591/OtA%20error.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*固件更新过程中发生错误。*

## 测量与上报机制

### 电池供电模式

在电池供电状态下：

1. 设备每分钟唤醒一次进行测量。  
   - 若温度变化 ≥0.2 °C 或湿度变化 ≥3%，屏幕将更新。  
   - 默认上报阈值：≥0.5 °C 或 ≥5% RH。低于该阈值的变化不会触发上报。  
2. 若连续两小时未发送任何基于阈值的上报，设备将无条件向 Shelly Cloud 及所有连接通道上报当前状态。  
3. 每次测量后强制执行 5 分钟冷却期，防止自加热；在此期间设备保持休眠。

### USB 供电模式

通过 USB Type-C 供电时：

- 每 5 分钟唤醒一次，执行以下操作：  
  - 进行测量  
  - 更新显示屏  
  - 无条件向所有连接通道上报数据  
  - 进入 5 分钟休眠状态

### 用户主动上报

按下背面盖板后的复位按钮将触发：
- 立即唤醒  
- 执行测量  
- 更新显示  
- 向所有连接通道无条件上报  
- 随后进入 5 分钟休眠周期

## 规格参数

| **类别** | **数值** |
|----------|----------|
| **物理特性** | |
| 尺寸（高×宽×深） | 70×70×26 mm / 2.76×2.76×1.02 英寸（不含支架）<br>70×70×45 mm / 2.76×2.76×1.77 英寸（含支架） |
| 重量 | 约 100 克 |
| 安装方式 | 带支架（放置于平整表面）<br>使用螺丝壁挂（螺帽直径：5–7 mm / 0.20–0.28 英寸，最大螺纹直径：3 mm / 0.12 英寸）<br>双面泡沫胶贴 |
| 外壳材质 | 塑料 |
| 颜色 | 白色 |
| **环境参数** | |
| 环境温度 | 0 °C 至 40 °C / 32 °F 至 105 °F |
| 湿度 | 30% 至 70% RH（推荐） |
| 最大海拔 | 2000 米 / 6562 英尺 |
| **电气参数** | |
| 电池供电 | 4 × AA（LR6）1.5 V（不含） |
| 估算电池寿命 | 约 1 年（受电池类型、环境条件及网络活动影响而异） |
| USB 供电 | USB Type-C（电源适配器与数据线不含） |
| **无线射频** | |
| 射频频段 | 2400 – 2495 MHz |
| 最大射频功率 | <20 dBm |
| Wi-Fi 协议 | 802.11 b/g/n |
| Wi-Fi 传输距离 | 室内最高 30 m / 100 ft<br>室外最高 50 m / 160 ft<br>（取决于本地环境） |
| 蓝牙协议 | 4.2 |
| 蓝牙传输距离 | 室内最高 10 m / 33 ft<br>室外最高 30 m / 100 ft<br>（取决于本地环境） |
| **微控制器（MCU）** | |
| CPU | ESP32 |
| 闪存容量 | 4 MB |
| **固件功能** | |
| 计划任务 | 否 |
| Webhooks（URL 动作） | 最多 10 个钩子，每个钩子支持 2 个 URL |
| 脚本支持 | 否 |
| MQTT | 是 |
| CoAP | 否 |

## 故障排除

*(内容待补充)*

## Web 界面指南

[阅读 Shelly Plus H&T Web 界面指南](../knowledge-base/shelly-plus-h-t-web-interface-guide)

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusHT)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly Plus H 和 T 多语言欧盟符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H%20and%20T%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus H&T 英国 PSTI ACT 合规性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H&T%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus H&T 澳大利亚/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H&T%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册

[Shelly Plus H&T 多语言打印版用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20H&T%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [Shelly Plus H&T 用户与安全手册](../knowledge-base/shelly-plus-h-t-user-and-safety-guide)