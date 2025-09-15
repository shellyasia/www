# Shelly H&T Gen3

![](https://kb.shelly.cloud/__attachments/229146742/H&T-Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly H&T Gen3  
- **设备型号：** S3SN-0U12A  
- **设备SSID：** ShellyHTG3-XXXXXXXXXXXX  
- **设备蓝牙ID：** 0x1809  

## 简要说明

**Shelly H&T Gen3** 是一款支持 Wi-Fi 的智能温湿度传感器，配备大尺寸电子墨水图形显示屏，可清晰直观地显示环境数据。

## 主要特性

- **Wi-Fi 连接：** 可连接家庭 Wi-Fi 网络，通过智能手机应用或兼容设备实现远程监控。
- **大尺寸电子墨水图形显示屏：** 提供高对比度、无眩光的温度与湿度读数可视化效果。
- **数字时钟：** 支持 NTP 同步的实时时钟，自动更新时间。
- **智能家居集成：** 兼容 Google Assistant、Amazon Alexa 和 Samsung SmartThings，支持语音控制与自动化。
- **USB Type-C 接口：** 用于持续供电。不可用于为内部电池充电。
- **蓝牙连接：** 支持蓝牙 4.2，可用于设置辅助和本地配置。
- **用户友好界面：** 配备复位按钮（位于背面盖板后），便于手动操作与设备管理。
- **电池运行模式：** 在电池供电模式下，设备每分钟唤醒一次进行测量。仅当阈值超出时才上报数据（温度 ≥ 0.5 °C 或湿度 ≥ 5% RH），若两小时内未上报，则强制上报一次。5 分钟冷却期防止自加热。
- **USB 供电运行模式：** 当通过 USB 供电时，设备每 5 分钟唤醒一次，执行测量、更新显示屏，并无条件向所有连接通道发送数据。
- **环境规格：** 工作温度范围为 0 °C 至 40 °C（32 °F 至 105 °F），相对湿度范围为 30% 至 70% RH。
- **电源选项：** 使用 4 节 AA 电池（LR6，1.5 V，不含）或通过 USB Type-C 供电。
- **无线连接：** 支持 Wi-Fi（802.11 b/g/n）和蓝牙 4.2，室内有效距离达 30 m（100 ft），室外可达 50 m（160 ft）。
- **微控制器单元（MCU）：** ESP-Shelly-C38F，具备 8 MB 闪存。

这些特性使 Shelly H&T Gen3 非常适用于住宅、多户住宅（MDUs）、轻型商业场所、大学/学院等需要可靠、低维护环境监测并支持智能家居集成的场景。

## 主要应用场景

- 住宅
- 多户住宅（MDUs）：公寓、公寓楼、酒店
- 轻型商业：小型办公室、零售店、餐厅、加油站
- 大学/学院

## 集成支持

### Amazon Alexa 支持功能
是

### Google Smart Home 支持属性
是

### Samsung SmartThings 支持功能
是

## 设备电气接口

### USB Type-C 接口

![USB Type-C 接口](https://kb.shelly.cloud/__attachments/231604493/Plus%20H&T%20USB%20Port.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- 为设备供电
- 不可用于为内部电池充电

## 连接方式

- Wi-Fi  
- 蓝牙  

## 用户界面

### 输入

- **复位按钮：** 位于背面盖板后方

![](https://kb.shelly.cloud/__attachments/265977877/Plus%20H&T%20Reset%20Button.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

#### 复位按钮操作

- **短按：**
  - 若处于睡眠模式 → 进入设置模式
  - 若处于设置模式 → 返回睡眠模式

- **长按 5 秒：**
  - 若处于设置模式 → 启用设备热点（AP）

- **长按 10 秒：**
  - 若处于设置模式 → 执行出厂重置

### 输出

- **电子墨水图形显示屏**

![](https://kb.shelly.cloud/__attachments/265977877/Interface%20H&TGen3-1.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/265977877/TIME.PNG?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*当前时间*

![SEt.png](https://kb.shelly.cloud/__attachments/265977877/SEt.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备处于设置模式*

![AP.png](https://kb.shelly.cloud/__attachments/265977877/AP.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备热点已启用*

![Humidity.png](https://kb.shelly.cloud/__attachments/265977877/Humidity.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*湿度读数*

![OtA.png](https://kb.shelly.cloud/__attachments/265977877/OtA.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*正在接收空中固件更新 —— 进度以百分比显示*

![Globe.png](https://kb.shelly.cloud/__attachments/265977877/Globe.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*设备已将当前读数上报至云端。若缺失，本地显示值可能与云端数据不同。*

![Wi-Fi.png](https://kb.shelly.cloud/__attachments/265977877/Wi-Fi.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Wi-Fi 信号强度指示器*

![battery.png](https://kb.shelly.cloud/__attachments/265977877/battery.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*电池电量指示器。USB 供电时显示为空*

![BT.png](https://kb.shelly.cloud/__attachments/265977877/BT.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*蓝牙连接已启用*

![OtA error.png](https://kb.shelly.cloud/__attachments/265977877/OtA%20error.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*固件更新过程中发生错误*

## 测量与上报机制

### 电池供电模式

在电池供电状态下：

1. 每分钟唤醒一次进行测量。若变化 ≥ 0.2 °C 或 ≥ 3% RH，则更新屏幕。默认上报阈值为 ≥ 0.5 °C 或 ≥ 5% RH —— 小于该值的变化不会触发上报。
2. 若两小时内未因阈值触发上报，设备将无条件向 Shelly Cloud 及所有连接通道上报状态。
3. 每次测量后强制执行 5 分钟冷却期，防止自加热；在此期间设备保持休眠。

### USB 供电模式

当通过 USB 供电时：

- 每 5 分钟唤醒一次  
- 执行测量  
- 更新显示屏  
- 无条件向所有连接通道上报数据  
- 休眠 5 分钟  

### 用户主动触发上报

按下背面的复位按钮（位于盖板后）将触发：
- 唤醒
- 测量
- 显示屏更新
- 向所有通道无条件上报
- 进入 5 分钟休眠周期

## 规格参数

| **类别** | **数值** |
|----------|----------|
| **物理特性** | |
| 尺寸（高×宽×深）： | 70 × 70 × 26 mm / 2.76 × 2.76 × 1.02 in（不含支架）<br>70 × 70 × 45 mm / 2.76 × 2.76 × 1.77 in（含支架） |
| 重量 | 47 g / 1.66 oz |
| 安装方式 | 使用支架（置于平整表面）<br>使用螺丝壁挂（螺帽直径：5–7 mm / 0.20–0.28 in，最大螺纹直径：3 mm / 0.12 in）<br>双面泡沫胶贴 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 白色<br>摩卡色：C:0 M:12 Y:28 K:12<br>象牙白：C:3 M:4 Y:14 K:8<br>黑色：C:0 M:0 Y:0 K:100 |
| **环境参数** | |
| 环境工作温度 | 0 °C 至 40 °C / 32 °F 至 105 °F |
| 湿度范围 | 30% 至 70% RH |
| 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | |
| 电源供应 | 电池（4 × AA LR6，1.5 V，不包含）<br>USB Type-C（电源适配器及数据线不包含） |
| 电池预计寿命 | 约 1 年（具体寿命取决于电池类型、环境条件及网络强度） |
| **传感器与仪表** | |
| 内置温度传感器 | 否 |
| 温度传感器 | 是 |
| 湿度传感器 | 是 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 m / 100 ft<br>室外最高 50 m / 160 ft<br>（受本地环境影响） |
| **蓝牙** | |
| 协议 | 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 m / 33 ft<br>室外最高 30 m / 100 ft<br>（受本地环境影响） |
| **微控制器单元（MCU）** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |
| **固件功能** | |
| 计划任务 | 否 |
| Webhooks（URL 动作） | 10 个钩子，每个最多支持 2 个 URL |
| 脚本支持 | 否 |
| MQTT | 是 |

## Shelly Smart Control

- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面

- [Shelly H&T Gen3 网页界面指南](../knowledge-base/shelly-h-t-gen3-web-interface-guide)

## 故障排除

…

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyHTG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规性文件

- [Shelly H&T Gen3 多语言欧盟符合性声明（2025-07-22）](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 亚光黑 UK PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Matte%20Black%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 亚光白 UK PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Matte%20White%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 摩卡色 UK PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Mocha%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 象牙白 UK PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Ivory%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案：**
- [Shelly H&T Gen3 多语言欧盟符合性声明（28, 2023-12-29）](https://kb.shelly.cloud/__attachments/309329921/Shelly%20H&T%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2028%202023-12-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册

- [Shelly H&T Gen3 多语言打印版用户与安全手册](https://kb.shelly.cloud/__attachments/391315459/Shelly%20H&T%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全指南（俄语）](../knowledge-base/shelly-h-t-gen3-1)

## 安装指南

×