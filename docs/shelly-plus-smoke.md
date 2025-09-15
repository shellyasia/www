# Shelly Plus Smoke

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Smoke.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus Smoke  
- **设备型号：** SNSN-0031Z  
- **设备SSID：** ShellyPlusSmoke-XXXXXX  

## 简要说明

Shelly Plus Smoke（以下简称“本设备”）是一款智能光电烟雾报警器，专用于检测可能持续数小时才完全燃烧的阴燃火灾。此类火灾通常由未熄灭的香烟留在沙发或床上等场景引发。

## 主要功能

- 电池供电运行  
- 可视化LED指示灯  
- 低电量警告  
- 声音静音（Hush模式）  
- 内置自检功能  
- 安装简便  
- 符合 DIN EN 14604 标准  

## 主要应用场景

- 住宅用途  

## 连接方式

- Wi-Fi  
- 蓝牙  

用户可根据需要启用或禁用任一连接选项。

## 用户界面

### 输入

- 一个按钮：  
  - 长按3秒以启动设备自检。  
  - 快速按下一次可静音当前报警。  
  - 快速连续按下三次进入设置模式（持续2分钟）。  
  - 快速连续按下五次执行恢复出厂设置（设备进入设置模式2分钟）。

### 输出

#### LED 指示灯

- **正常运行状态：** 红灯每53秒闪烁一次。  
- **自检状态：** 三下快速红光闪烁。  
- **报警状态：** 红灯持续快速闪烁。  
- **故障状态：** 每53秒闪烁两下红灯。  
- **已静音报警：** 每10秒闪烁一下红灯。  
- **低电量警告：** 每53秒闪烁一下红灯（伴有声音提示）。  
- **已静音的低电量警告：** 每53秒闪烁一下红灯（无声）。  
- **设置模式（初始阶段）：** 快速绿色闪烁。  
- **设置模式（最后2分钟）：** 缓慢绿色闪烁。

#### 蜂鸣器

- **按钮按下时：** 一声短促蜂鸣。  
- **自检时：** 三声短促蜂鸣。  
- **报警时：** 持续响亮蜂鸣。  
- **低电量警告：** 每53秒发出一声短蜂鸣。

## 规格参数

| **类别**         | **类型**                     | **数值** |
|------------------|------------------------------|----------|
| **物理特性**     | 尺寸（D×H）                  | 86 × 31 ± 0.5 mm / 3.39 × 1.22 ± 0.02 in |
|                  | 重量                         | 95 ± 1 g / 3.35 ± 0.05 oz |
|                  | 安装方式                     | 吊顶安装 |
|                  | 外壳材质                     | 塑料 |
|                  | 颜色                         | 白色 |
|                  | 使用寿命                     | 10年 |
| **环境条件**     | 环境温度                     | -0 °C 至 55 °C / 32 °F 至 131 °F |
|                  | 湿度                         | 30 % 至 95 % RH |
| **电气特性**     | 交流电源电压                 | 不适用 |
|                  | 直流电源电压                 | 1 × 3 V CR123A / CR17335 电池 |
|                  | 电池寿命                     | 5年（使用原装电池） |
| **传感器与测量** | 烟雾传感器                   | 光电式 |
| **无线通信**     | 射频频段                     | 2400 – 2495 MHz |
|                  | 最大射频功率                 | <20 dBm |
|                  | Wi-Fi 协议                   | 802.11 b/g/n |
|                  | Wi-Fi 传输距离               | 室内最高30米 / 100英尺；室外最高50米 / 160英尺<br>（受本地环境影响） |
|                  | 蓝牙协议                     | 4.2 |
|                  | 蓝牙传输距离                 | 室内最高10米 / 33英尺；室外最高30米 / 100英尺<br>（受本地环境影响） |
| **微控制器 (MCU)** | CPU                        | ESP32-U4WDH |
|                  | Flash 存储容量               | 4 MB |
| **固件功能**     | Webhooks（URL动作）         | 支持最多10个Webhook，每个支持2个URL |
|                  | 脚本支持                     | 不支持 |
|                  | MQTT                         | 支持 |
|                  | CoAP                         | 不支持 |

## 故障排查

...

## Web 界面指南

[阅读 Shelly Plus Smoke Web 界面使用指南](../knowledge-base/shelly-plus-smoke-web-interface-guide)

## 组件与 API

- [本设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusSmoke)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规声明

- [Shelly Plus Smoke 烟雾报警器多语言欧盟符合性声明 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Smoke%20Alarm%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus Smoke 烟雾报警器英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Smoke%20Alarm%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案存档：**  
- [Shelly Plus Smoke 多语言欧盟符合性声明 10 2023-08-21.pdf](https://kb.shelly.cloud/__attachments/132284417/Shelly%20Plus%20Smoke%20multilingual%20EU%20declaration%20of%20conformity%2010%202023-08-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 电池材料安全数据表

[HCB-WI-MSDS-01-003](https://kb.shelly.cloud/__attachments/105676845/HCB-WI-MSDS-01-003?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册

- [Shelly Plus Smoke 多语言打印版用户及安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Smoke%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
  - [使用和安全指南（俄语）](../knowledge-base/shelly-plus-smoke-1)

- [Shelly Plus Smoke 网络配置指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Smoke%20networking%20guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
  - [网络配置指南（俄语）](../knowledge-base/shelly-plus-smoke-2)

## 安装指南

- [Shelly Plus Smoke 用户与安全指南](../knowledge-base/shelly-plus-smoke-user-and-safety-guide)