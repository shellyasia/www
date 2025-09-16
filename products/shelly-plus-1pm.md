# Shelly Plus 1PM

![Shelly Plus 1PM](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201PM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus 1PM  
- **设备型号：** SNSW-001P16EU  
- **设备SSID：** ShellyPlus1PM-XXXXXX  

## 简要说明

Shelly Plus 1PM 是一款紧凑型智能开关，内置电能测量功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器的远程控制。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行操作。

只要设备连接到 Wi-Fi 路由器并接入互联网，用户即可从任何有网络连接的位置远程访问、控制和监控设备。

专为改造安装设计，可适配标准电气墙盒、电源插座后方、灯具开关或其它空间受限的位置。

设备配备嵌入式网页界面，用于监控、控制和配置。

## 主要应用场景

- 住宅  
- 多住户单元（公寓、联排别墅、酒店等）  
- 轻型商业（小型办公室、零售商店、餐厅、加油站等）  
- 政府 / 市政机构  
- 大学 / 学院  

## 兼容集成

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部原理图

![Shelly Plus 1PM 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入

- 1 个螺丝端子开关/按钮输入：**SW**  
- 5 个螺丝端子供电输入：**2 N (+)** 和 **3 L (Ʇ)**  

### 输出

- 1 个带电能测量功能的继电器输出，位于螺丝端子：**O**  

### 扩展接口

- Shelly 专用串行接口  

![Shelly Plus 1PM 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **警告！** 当设备通电时，扩展接口上存在高压，请勿触碰。

## 连接方式

- Wi-Fi（802.11 b/g/n）  
- Bluetooth 4.2  

## 安全特性

- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持的负载类型

- 阻性负载（白炽灯泡、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 带 RC 阻容吸收电路的感性负载（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 一个（复位）按钮  
  - 按住 5 秒以启用设备热点和蓝牙连接。  
  - 按住 10 秒执行出厂重置。

### 输出

- LED（单色指示灯）  
  - **热点启用，Wi-Fi 关闭：** 1 秒开 / 1 秒关  
  - **Wi-Fi 启用，未连接：** 1 秒开 / 3 秒关  
  - **已连接至 Wi-Fi 网络：** 持续常亮  
  - **云服务启用，未连接：** 1 秒开 / 5 秒关  
  - **已连接至 Shelly Cloud：** 持续常亮  
  - **OTA（空中升级）：** 0.5 秒开 / 0.5 秒关  
  - **按钮按住 5 秒：** 0.5 秒开 / 0.5 秒关  
  - **按钮按住 10 秒：** 0.25 秒开 / 0.25 秒关  

> LED 状态按列出顺序优先级排列，后续状态将覆盖前一状态。

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| | 重量 | 27 g / 0.95 oz |
| | 安装方式 | 墙面安装盒 |
| | 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbf·in |
| | 导线截面积 | 0.5 至 1.5 mm² / 20 至 16 AWG |
| | 导线剥线长度 | 5 至 6 mm / 0.20 至 0.24 in |
| | 外壳材质 | 塑料 |
| | 颜色 | 红色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30 % 至 70 % RH |
| | 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | 供电电压 | 110–240 VAC / 24–30 VDC |
| | 功耗 | < 1.2 W |
| | 最大切换电压（交流） | 240 V |
| | 最大切换电压（直流） | 30 V |
| | 最大切换电流（交流） | 16 A |
| | 最大切换电流（直流） | 10 A |
| | 内置温度传感器 | 是 |
| | 电压表（交流） | 是 |
| | 电流表（交流） | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | <20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输距离 | 室内最高 30 米 / 室外最高 50 米（因环境而异） |
| | Bluetooth 协议 | 4.2 |
| | Bluetooth 传输距离 | 室内最高 10 米 / 室外最高 30 米（因环境而异） |
| **微控制器** | CPU | ESP32-U4WDH |
| | Flash 存储 | 4 MB |
| **固件功能** | 定时任务 | 20 个 |
| | Webhooks（URL 动作） | 20 个钩子，每个最多支持 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT 支持 | 是 |
| | CoAP 支持 | 否 |

## 基础接线图

### 交流接线 – 阻性负载

![Plus 1PM 交流接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 交流接线 – 带 RC 吸收电路的感性负载

![Plus 1PM 交流 RC 吸收接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20RC%20snubber-wiring-20240528-131329.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 直流接线 – 阻性负载

![Plus 1PM 直流接线 – 阻性负载](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 直流接线 – 带 RC 吸收电路的感性负载

![Plus 1PM 直流 RC 吸收接线图](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20DC%20RC%20snubber-wiring-20240528-131529.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例

| **符号** | **描述** |
|----------|----------|
| **O** | 负载电路输出端子 |
| **+** | 24–30 VDC 正极导线/端子 |
| **SW** | 开关（控制 O）输入端子 |
| **N** | 零线/端子 |
| **L** | 火线（110–240 VAC）端子 |
| **GND** | 24–30 VDC 接地导线 |
| **Ʇ** | 24–30 VDC 接地端子 |

## 故障排查

### 设备过热

- 避免将 **L** 和 **N** 端子作为跨接使用。否则会导致电流翻倍，引发过热。  
- 仅在总电流低于 16 A 的低电流应用中允许跨接。  
- 确保环境温度不超过 40 °C（105 °F）。  
- 若安装于密闭空间，通风不良可能导致内部温度超过安全限值。请确保设备周围有足够的空气流通。

## 网页界面指南

[阅读 Shelly Plus 1PM 网页界面指南](../knowledge-base/shelly-plus-1pm-web-interface-guide)

## 组件与 API

- [本设备 API 参考文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)  

## 打印版用户手册

[Shelly Plus 1PM 多语言用户及安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201PM%20multilingual%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 合规认证

- [Shelly Plus 1PM 多语言欧盟符合性声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM x2 英国 PSTI ACT 合规声明](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM 澳洲/新西兰适用性证书](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

*(当前暂无可用安装指南)*