
# Shelly RGBW2

![Shelly RGBW2](https://kb.shelly.cloud/__attachments/229146742/image-20220920-071244.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 下载

### 手册

- [用户与安全指南](https://kb.shelly.cloud/__attachments/63864967/User%20and%20Safety%20Guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [App 使用指南](https://kb.shelly.cloud/__attachments/63864967/App%20Guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [接线图](https://kb.shelly.cloud/__attachments/63864967/Wiring%20Diagrams?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规性文件

- [Shelly RGBW2 多语言欧盟符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20RGBW2%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly RGBW2 英国 PSTI ACT 符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20RGBW2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly RGBW2 x2 英国 PSTI ACT 符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20RGBW2%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 什么是 Shelly RGBW2？

### 支持 WiFi 的 RGBW 控制器

只需一步，即可将您的 LED 灯带升级为智能照明系统。Shelly RGBW2 连接方式如同传统 LED 控制器，让您可通过智能手机、平板或语音助手直接控制所有灯光。

### 主要功能

- 无需网关
- 支持宽电压范围（12V/24V DC）
- 提供丰富的色彩选择、调光功能及动态灯光效果
- 紧凑设计，适配大多数标准电气盒和开关
- 与其它 Shelly 设备完全兼容
- 支持 Android、iOS、Amazon Alexa、Google Assistant，以及通过 MQTT、CoAP 和 REST API 与各类智能家居平台集成
- 非常适合用于 Arduino 项目中的智能家居自动化集成

### 电源规格

| 参数 | 值 |
|------|----|
| 供电方式（交流） | 不支持 |
| 供电方式（直流） | 12V / 24V |
| 每通道直流输出（12V） | 45W |
| 每通道直流输出（24V） | 90W |
| 综合直流输出（12V） | 144W |
| 综合直流输出（24V） | 288W |

### 特殊功能

| 功能 | 支持情况 |
|------|----------|
| 设备温度保护 | 否 |
| 过载保护 | 否 |
| 电源测量 | 是 |
| 调光功能 | 是 |
| 无零线工作 | 否 |

### 核心特性

| 特性 | 支持情况 |
|------|----------|
| 色彩切换 | 是 |
| 预设灯光效果 | 是 |
| 通道数 | 4 通道 |
| 最大负载 | 12A |
| 工作温度范围 | 0°C 至 +40°C |
| 设备功耗 | < 1 W |
| 智能开关功能 | 是 |
| 本地与远程控制 | 是 |
| 日出/日落模拟 | 是 |
| 每周定时调度 | 是 |
| UL 认证选项 | 否 |

### 连接性能

| 规格 | 值 |
|------|----|
| 无线协议 | 802.11 b/g/n |
| 射频频率 | 2400 – 2500 MHz |
| 通信范围 | 室外可达 50 米，室内可达 30 米（受建筑材质影响） |

### 尺寸

- 尺寸：43 mm × 38 mm × 14 mm

## 接线图

![白光灯泡接线图](https://kb.shelly.cloud/__attachments/243531777/White_led_bulb_shelly.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![4× 白光灯带接线图](https://kb.shelly.cloud/__attachments/243531777/4xWhite_led_strip_shelly.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![RGB 灯带接线图](https://kb.shelly.cloud/__attachments/243531777/rgb_led_strip_shelly.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![RGBW 灯带接线图](https://kb.shelly.cloud/__attachments/243531777/rgbw_led_strip_shelly.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![接线图 1](https://kb.shelly.cloud/__attachments/243531777/image-20220912-074127.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![接线图 2](https://kb.shelly.cloud/__attachments/243531777/image-20220912-074140.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![接线图 3](https://kb.shelly.cloud/__attachments/243531777/image-20220912-074227.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![接线图 4](https://kb.shelly.cloud/__attachments/243531777/image-20220912-074234.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 应用场景

### 通用照明控制

睡前想一键关闭家中所有灯光？使用 Shelly RGBW2，只需在手机上轻点一下，或通过语音指令即可实现。它支持 RGB+W 照明、四个独立的单色 LED 灯带或射灯，适用于客厅等空间。

## 项目案例

### 使用 Shelly RGBW2 实现手势控制 LED 灯带的 MagicMirror

打造一款能响应手势操作的惊艳 MagicMirror，结合 Shelly RGBW2 与 LED 灯带，完美融合科技与创意！

[了解更多](https://www.instructables.com/id/MagicMirror-With-Gesture-Controlled-LED-Strip-Usin/)

## 用户评价

- [Shelly RGBW2：售价仅 $22 的多功能 WiFi LED 控制器](https://www.youtube.com/watch?v=B8DQntdtD4E)
