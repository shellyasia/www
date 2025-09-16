# Shelly Plus i4DC

![](https://kb.shelly.cloud/__attachments/229146742/Plus-i4DC.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus i4DC  
- **设备型号：** SNSN-0D24X  
- **设备SSID：** ShellyPlusI4DC-XXXXXX  

## 简要说明

Shelly Plus i4DC 是一款智能 Wi-Fi 开关输入设备，可实现场景的手动触发或禁用、同步操作或复杂触发场景。它能够控制其他连接的 Shelly 开关、传感器或通过 HTTP 和 MQTT 管理的设备。体积紧凑，可安装在标准墙开关后方，支持对多达四个输入信号的状态指示与控制。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可实现随时随地的远程访问与监控。

专为翻新安装设计，Shelly Plus i4DC 可安装于标准电气墙盒内，也可置于电源插座、灯具开关后方或空间狭小的位置。

设备内置 Web 界面，用于配置和控制。

## 主要应用场景

- 住宅
- 多住户单元（公寓、联排别墅、酒店等）
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）
- 政府/市政设施
- 大学/学院

## 集成支持

- Alexa（通过虚拟设备流程）

## 简化内部原理图

## 设备电气接口

### 输入

- 4 个螺丝端子开关/按钮输入：SW1、SW2、SW3、SW4
- 3 个电源输入螺丝端子：1+、2+ 和 2−（共用负极）

### 输出

无

### 扩展接口

- Shelly 专用串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请小心操作。

## 连接方式

- Wi-Fi（802.11 b/g/n）
- Bluetooth 4.2

## 安全特性

- 过热保护

## 用户界面

### 输入

- 一个（复位）按钮
  - 按住 5 秒：启用接入点模式并建立蓝牙连接。
  - 按住 10 秒：执行恢复出厂设置。

### 输出

- LED（单色指示灯）
  - **AP 已启用，Wi-Fi 未启用：** 1 秒开 / 1 秒关
  - **Wi-Fi 已启用，未连接：** 1 秒开 / 3 秒关
  - **已连接至 Wi-Fi 网络：** 持续常亮
  - **云服务已启用，未连接：** 1 秒开 / 5 秒关
  - **已连接至 Shelly Cloud：** 持续常亮
  - **OTA（空中升级）：** 0.5 秒开 / 0.5 秒关
  - **按钮按住 5 秒：** 0.5 秒开 / 0.5 秒关
  - **按钮按住 10 秒：** 0.25 秒开 / 0.25 秒关

> *注：LED 状态按列出顺序优先级排列，后续状态将覆盖前一状态。*

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 英寸 |
| | 重量 | 17 克 / 0.6 盎司 |
| | 安装方式 | 墙盒安装 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lb·in |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 英寸 |
| | 外壳材质 | 塑料 |
| | 颜色 | 荧光橙色（Pantone 2010C） |
| **环境条件** | 环境温度 | −20 °C 至 40 °C / −5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 米 / 6562 英尺 |
| **电气参数** | 供电电压 | 5–24 VDC |
| | 功耗 | < 1 W |
| | 内置温度传感器 | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | < 20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（取决于本地环境） |
| | Bluetooth 协议 | 4.2 |
| | Bluetooth 传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（取决于本地环境） |
| **微控制器** | CPU | ESP32-U4WDH |
| | Flash 存储 | 4 MB |
| **固件功能** | Webhooks（URL 操作） | 支持 20 个钩子，每个钩子最多 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |

## 基础接线图

![](https://kb.shelly.cloud/__attachments/243531777/plus%20i4DC_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| **标签** | **描述** |
|----------|----------|
| **SW1, SW2, SW3, SW4** | 开关/按钮输入端子 |
| **+** | 5–24 VDC 正极导线 |
| **+** | 5–24 VDC 正极端子 |
| **−** | 5–24 VDC 负极导线 |
| **−** | 5–24 VDC 负极端子 |

## 故障排除

...

## Web 界面使用指南

[阅读 Shelly Plus i4DC Web 界面使用指南](../knowledge-base/shelly-plus-i4-web-interface-guide)

## 组件与 API 接口

- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusI4)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 打印用户手册

[Shelly Plus i4DC 多语言打印版用户及安全手册.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20i4DC%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（俄语）](https://shellyusa.atlassian.net/wiki/spaces/KB/pages/edit-v2/1609695245)

## 合规声明

- [Shelly Plus I4 DC 多语言欧盟符合性声明 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20I4%20DC%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 DC 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20DC%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案存档**
- [Shelly Plus i4DC 多语言欧盟符合性声明 5 2023-04-26.pdf](https://kb.shelly.cloud/__attachments/69107713/Shelly%20Plus%20i4DC%20multilingual%20EU%20declaration%20of%20conformity%205%202023-04-26.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)