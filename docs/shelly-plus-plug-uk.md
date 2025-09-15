# Shelly Plus Plug UK

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Plug-UK.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Plus Plug UK  
- **设备型号：** SNPL-00112UK  
- **设备SSID：** ShellyPlusPlugUK-XXXXXX  

## 简要说明

Shelly Plus Plug UK 是一款支持电量监测和过热保护的智能插座，可通过智能手机、平板电脑、PC 或家庭自动化系统远程控制电器。该设备可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行操作。

只要设备连接到 Wi-Fi 路由器并接入互联网，即可从任何具备网络连接的位置远程访问、配置和监控。

设备内置网页界面，支持实时监控、控制及设置配置。

## 主要应用场景

- 住宅用途  
- 多住户单元（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售商店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  

## 兼容集成

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## 简化内部电路图

![](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-UK-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入
- 1 × BS 1363（Type-G）插头

### 输出
- 1 × BS 1363（Type-G）插座

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
- 感性负载（LED驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入

- 一个按键：
  - 按住 2 秒：检查设备状态。
  - 按住 5 秒：重启（上电后最多 60 秒内可用）。
  - 按住 10 秒：恢复出厂设置（上电后最多 60 秒内可用）。

### 输出

- LED 指示灯：
  - **首次通电时：** 蓝灯闪烁 —— 表示处于 AP 模式。
  - **成功连接 Wi-Fi 后：**
    - 红灯闪烁 —— 正在重新连接 Wi-Fi。
    - 常亮红灯 —— 无法重新连接 Wi-Fi。
  - **输出开启时：**
    - *功率消耗以平滑颜色变化表示（默认）：*
      - 0% 设置功率上限时为绿色
      - 50% 设置功率上限时为黄色
      - 100% 设置功率上限时为红色
    - *自定义颜色（默认：绿色，亮度：100%）*
    - *关闭*
  - **输出关闭时：**
    - *关闭（默认）*
    - *自定义颜色（默认：红色，亮度：100%）*
  - **OTA 升级进行中：** 红灯闪烁

## 规格参数

| **类别** | **类型** | **数值** |
|----------|----------|----------|
| **物理特性** | 尺寸（高×宽×深） | 60 × 60 × 56 ±0.5 mm / 2.36 × 2.36 × 2.20 ±0.02 in |
| | 重量 | 74 ±1 g / 2.6 ±0.04 oz |
| | 兼容插座 | BS 1363（Type-G） |
| | 兼容插头 | BS 1363（Type-G） |
| | 外壳材质 | 塑料 |
| | 颜色 | 白色 |
| **环境条件** | 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| | 湿度 | 30% 至 70% RH |
| | 最大海拔高度 | 2000 m / 6562 ft |
| **电气参数** | 交流电源电压 | 230 V ±10%，50/60 Hz |
| | 直流电源电压 | 不适用 |
| | 功耗 | <1 W |
| **输出电路额定值** | 最大开关电压（交流） | 260 V |
| | 最大开关电压（直流） | 不适用 |
| | 最大开关电流（交流） | 13 A |
| | 最大开关电流（直流） | 不适用 |
| **传感器与仪表** | 内置温度传感器 | 是 |
| | 电压表 | 是 |
| | 电流表 | 是 |
| | 功率与电能计量 | 是 |
| **无线通信** | 射频频段 | 2400 – 2495 MHz |
| | 最大射频功率 | <20 dBm |
| | Wi-Fi 协议 | 802.11 b/g/n |
| | Wi-Fi 传输范围 | 室内最高 30 m / 100 ft，室外最高 50 m / 160 ft<br>（受本地环境影响） |
| | Bluetooth 协议 | 4.2 |
| | Bluetooth 传输范围 | 室内最高 10 m / 33 ft，室外最高 30 m / 100 ft<br>（受本地环境影响） |
| **微控制器 (MCU)** | CPU | ESP32-U4WDH |
| | Flash 存储 | 4 MB |
| **固件功能** | Webhooks（URL 动作） | 支持 20 个钩子，每个钩子最多可配置 5 个 URL |
| | 脚本支持 | 是 |
| | MQTT | 是 |
| | CoAP | 否 |

## 故障排查

...

## 组件与 API 接口

- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusPlugUK)  
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)  

## 合规认证

- [Shelly Plus Plug UK 多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Plug%20UK%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus Plug UK 英国 PSTI ACT 符合性声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Plug%20UK%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**合规档案存档：**

- [Shelly Plus Plug UK 多语言欧盟符合性声明 3 2023-05-02.pdf](https://kb.shelly.cloud/__attachments/104660993/Shelly%20Plus%20Plug%20UK%20multilingual%20EU%20declaration%20of%20conformity%203%202023-05-02.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户指南

[Shelly Plus Plug UK 多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Plug%20UK%20multilinugal%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 安装指南

- [Shelly Plus Plug UK 用户与安全指南](../knowledge-base/shelly-plus-plug-uk-user-and-safety-guide)