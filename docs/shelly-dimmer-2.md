# Shelly Dimmer 2

![](https://kb.shelly.cloud/__attachments/229146742/image-20220920-071316.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 下载

### 手册

- [用户与应用指南](https://kb.shelly.cloud/__attachments/63897613/User%20&%20Application%20Guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Dimmer 2 多语言印刷版用户及安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Dimmer%202%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Bypass 用户指南](https://kb.shelly.cloud/__attachments/63897613/Shelly%20Bypass%20User%20Guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规性文件

- [Shelly Dimmer 2 多语言欧盟符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer2%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Dimmer 2 英国 PSTI ACT 合规性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%202%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Dimmer 2 x2 英国 PSTI ACT 合规性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%202%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 什么是 Shelly Dimmer 2？

### 无需中性线的调光功能

Shelly Dimmer 2 设计用于支持全球各种电气安装类型。即使在没有中性线的住宅环境中，也能实现调光功能，全面控制卤素灯、可调光LED灯以及铁磁变压器。

### 功能特性

- 无需网关（HUB）  
- 支持无中性线调光  
- 可通过调光功能实现开关或亮度调节  
- 内置温度传感器，具备过热保护功能  
- 紧凑设计，适配大多数标准电气盒和开关面板  
- 与其他 Shelly 设备无缝集成  
- 兼容 Android、iOS、Amazon Alexa、Google Assistant 及各类智能家居平台（支持 MQTT、CoAP 和 REST API）  
- 易于集成至 Arduino 项目，用于智能家庭自动化开发  

### 规格参数

**电源供电**  
输入电压：AC 110–230 V ±10%，50/60 Hz  

**特殊功能**  
- 设备温度保护：是（95°C）  
- 过载保护：是  
- 功率测量：是  
- 调光功能：是  
- 工作电流：0.1–1.1 A  
- 可调光 LED 负载：50–200 VA / 10 W – 200 W  
- 白炽灯与卤素灯源：10–220 W  
- 无需中性线即可工作：是  

**其他功能**  
- 颜色变换：否  
- 预设效果：是  
- 通道数：1 通道  
- 工作温度范围：0 至 +40°C  
- 设备功耗：<1 W  
- 智能开关功能：是  
- 本地与远程控制：是  
- 日出/日落模拟：是  
- 每周定时计划：是  
- UL 认证选项：否  

**连接性能**  
- 无线/WiFi 协议：IEEE 802.11 b/g/n  
- 射频频率：2400 – 2500 MHz  
- 通信范围：室外可达 50 米，室内可达 30 米（受建筑结构影响）  

**外形尺寸**  
- 尺寸：42 mm × 36 mm × 14 mm  

## 接线图示

![](https://kb.shelly.cloud/__attachments/243531777/ShellyD2_neutral_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/243531777/ShellyD2_NOneutral-10W_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **注意：** 使用 Shelly Dimmer 2 时若未接入中性线，必须确保所连接负载不低于 20 W（240 VAC）。如果您的灯具功率低于 20 W，请使用 Shelly Bypass 模块以保证稳定运行。

![](https://kb.shelly.cloud/__attachments/243531777/ShellyD2_SWneutral_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/243531777/ShellyD2_NOneutral-bypass_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 应用场景

### 照明控制

安装 Shelly Dimmer 2，即可通过智能手机或语音命令轻松控制家中任意灯具。无论是夜晚阅读需要明亮灯光，还是为温馨的电影之夜调暗灯光，Shelly Dimmer 2 都能让操作变得简单直观。

## 项目案例

### 带旋转旋钮的 Shelly Dimmer 壁装调光开关 + Home Assistant 集成

学习如何制作一个独立于 Wi-Fi 的壁装调光开关，配备旋转旋钮，即使网络中断也能保持本地控制，非常适合对可靠性要求高的场景。

[了解更多](https://www.instructables.com/Shelly-Dimmer-Wall-Switch-With-Rotary-Knob-and-Hom/)

### 使用 Shelly 打造电影之夜的客厅氛围

探索如何利用 Google Home 场景自动化功能，自动调暗灯光，一键开启沉浸式观影体验。

[了解更多](https://www.instructables.com/Living-Room-for-Movie-With-Shelly/)

## 用户评价

### DrZzs  
[Shelly 智能调光器 + 优秀的 Home Assistant 集成](https://www.youtube.com/watch?v=6x7_2efDNNc)

### Jimmy James  
[Shelly Dimmer 安装实测 —— 最理想的调光器？](https://www.youtube.com/watch?v=o2PD0Tat8ts)