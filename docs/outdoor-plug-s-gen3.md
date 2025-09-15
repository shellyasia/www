# Shelly Outdoor Plug S Gen3

![Shelly-Outdoor-Plug-Gen3-web.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly-Outdoor-Plug-Gen3-web.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备标识

- **设备名称：** Shelly Outdoor Plug S Gen3  
- **设备型号：** S3PL-20112EU  
- **设备SSID：** ShellyOutdoorSG3-XXXXXXXXXXXX  
- **BLE ID：** 0x1853  

## 简要描述

Shelly Outdoor Plug S Gen3 是首批专为户外使用设计的 Shelly 设备之一，具备完整的 Matter 支持。

这款智能插座/插头支持电源测量、过热保护，并可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器的远程控制。它可在本地 Wi-Fi 网络中独立运行，也可通过基于云的家庭自动化服务进行管理。

只要设备保持连接至 Wi-Fi 路由器和互联网，即可从任何有网络连接的位置远程访问、配置和监控该设备。

设备内置网页界面，用于监控、控制和调整设备设置。

## 主要功能

- IP44 防护等级  
- 支持 Matter  
- 新一代 Wi-Fi 智能插座，配备多色 LED 指示灯  
- 脚本功能（仅在禁用 Matter 时支持）  
- Wi-Fi 范围扩展器  
- BLE 网关  
- 电源计量（可在 Shelly Smart Control 应用中查看）  
- 定时计划  
- 与第三方家庭自动化系统广泛兼容  
- 本地自动化动作  
- 可选支持 Shelly Cloud / Shelly Smart Control 应用  
- 虚拟组件  

## 使用场景

- **花园自动化：** 自动化控制花园灯带、电烤炉、电灶或其他户外电器，以管理运行状态和能耗，防止资源浪费。

- **与其他 Matter 设备无缝集成：** 可轻松与其它 Matter 设备协同工作，实现统一的智能家居控制。

- **与 Apple 设备兼容（通过 Matter）：** 可无缝集成到 Apple HomeKit 生态系统中。

- **彩色夜灯功能：**
  - 启用夜间模式并自定义设置。
  - 激活后，LED 亮度会在夜间自动调暗，确保睡眠不受干扰。

- **防止忘记关闭电器：**
  远程监控和控制所有连接设备。借助内置倒计时定时器和本地存储的定时计划，设备可在一小时后自动切断忘记关闭的电器电源——适用于熨斗、小型烤箱或电暖气等。

- **智能调度减少能源浪费：**
  自动化管理夜间或周末未使用的办公电器。设定计划在工作日 19:00 至次日 7:00 断电，在周五 19:00 至下周一 7:00 断电。可将能耗降低高达 50%，显著降低月度电费。
  *示例：* 小型烤箱、电暖器、红外加热器。

- **根据空气质量数据控制空气净化器：**
  在秋冬季节空气污染加剧的城市地区，可通过脚本获取实时空气质量数据，并在污染水平升高时自动开启空气净化器。
  *示例：* 基于第三方环境数据自动控制空气净化器。

- **儿童房的柔和夜灯：**
  自定义 LED 颜色和亮度，营造柔和的氛围光，适合儿童夜间舒适使用。

## 主要应用场景

- 住宅  
- 多户住宅（公寓、联排别墅、酒店等）  
- 轻型商业场所（小型办公室、零售店、餐厅、加油站等）  
- 政府/市政机构  
- 大学/学院  
- 农业  
- 花园/庭院  

## 集成支持

### Amazon Alexa 支持的功能  
是  

### Google Smart Home 支持的特性  
是  

### Samsung SmartThings 支持的功能  
是  

## 简化内部原理图

![Shelly Plus Plug V3 内部原理图](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-S-V3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 简化硬件架构

![](https://kb.shelly.cloud/__attachments/230948968/Plus-Plugs-pricipe-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入
- 1 × CEE 7/7 插头  

### 输出
- 1 × CEE 7/3（Type-F / Schuko）插座  

## 连接方式
- Wi-Fi  
- 蓝牙（Bluetooth）  

## 安全功能
- 过热保护  
- 过压保护  
- 过流保护  
- 过功率保护  

## 支持的负载类型
- 阻性负载（白炽灯、加热设备）  
- 容性负载（电容组、电子设备、电机启动电容）  
- 感性负载（LED 驱动器、变压器、风扇、冰箱、空调）  

## 用户界面

### 输入
- 一个按钮：
  - 快按一次：切换输出开关状态（开/关）。
  - 长按 3 秒：检查设备状态（仅当输出关闭时可用）。
  - 长按 5 秒：重启设备（上电后 60 秒内有效）。
  - 长按 10 秒：恢复出厂设置（上电后 60 秒内有效）。

### 输出
- LED 指示灯：
  - **首次设置：** 蓝灯闪烁 —— 表示处于 AP 模式。
  - **成功连接 Wi-Fi 后：**
    - 缓慢红闪：正在重新连接 Wi-Fi。
    - 常亮红灯：无法重新连接 Wi-Fi。
  - **输出开启时：**
    - **基于功率的颜色变化（默认）：**
      - 绿色：设定功率上限的 0%
      - 黄色：设定功率上限的 50%
      - 红色：设定功率上限的 100%
    - **自定义颜色（默认绿色，默认亮度 100%）**
    - **关闭**
  - **输出关闭时：**
    - **关闭（默认）**
    - **自定义颜色（默认红色，默认亮度 100%）**
  - **OTA 更新进行中：** 红灯闪烁

## 规格参数

| 类别 | 参数值 |
|------|--------|
| **物理特性** | |
| 尺寸（高×宽×深） | 56 × 56 × 103 ±0.5 mm / 2.21 × 2.21 × 4.55 ±0.02 英寸 |
| 重量 | 85 ±1 g / 3 ±0.04 盎司 |
| 兼容插座 | CEE 7/1、CEE 7/3（Type F / Schuko）、或 CEE 7/5（Type E） |
| 兼容插头 | CEE 7/2、CEE 7/4（Type F / Schuko）、CEE 7/7、CEE 7/16（Type C）、或 CEE 7/17 |
| 外壳材质 | 塑料 + 硅胶橡胶防护罩（用于插座） |
| 颜色 | 咖啡色 |

| **环境条件** | |
| 环境温度 | -25°C 至 51°C / -13°F 至 125°F |
| 湿度 | 15% 至 85% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| 灼热丝温度 | 750°C |
| 防护等级 | IP44 |
| 是否需要强制散热 | 否 |

| **电气参数** | |
| 供电电压 | 230 V~ 50/60 Hz |
| 功耗 | <1 W |
| 额定冲击耐受电压 | 2500 V |

| **输出电路额定值** | |
| 最大开关电压 | 230 V~ |
| 最大开关电流 | 12 A |
| 最大输出功率 | 2500 W（仅限阻性负载） |
| 开关循环次数 | 10,000 次 |
| 过压类别 | II |
| 工作类型 | S1 |
| 开关类型 | 单向 |
| 开关配置 | SPNO（单极常开） |
| 电路断开类型 | 微型 |

| **传感器与计量仪表** | |
| 内置温度传感器 | 是 |
| 电压表（交流） | 是 |
| 电流表（交流） | 是 |
| 功率与电能计量 | 是 |

| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401–2473 MHz |
| 最大射频功率 | <10 dBm |
| Wi-Fi 传输距离 | 户外最高 50 米 / 164 英尺，室内最高 30 米 / 98 英尺（视环境而定） |

| **蓝牙** | |
| 协议 | 4.2 |
| 射频频段 | 2402–2480 MHz |
| 最大射频功率 | <4 dBm |
| 传输范围 | 户外最高 30 米 / 98 英尺，室内最高 10 米 / 33 英尺（视环境而定） |

| **微控制器单元** | |
| CPU | ESP-Shelly-C38F |
| 闪存 | 8 MB |

| **固件功能** | |
| Webhooks（URL 动作） | 20 个钩子，每个最多支持 5 个 URL |
| 脚本功能 | 是 |
| MQTT | 是 |
| CoAP | 否 |

## Shelly Smart Control
- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly 网页用户界面
- [Shelly Plug S Gen3 网页界面指南](../knowledge-base/shelly-plug-s-gen3-web-interface-guide)

## 故障排除
…

## 组件与 API

- [设备 API 参考（Shelly Outdoor Plug S Gen3）](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyOutdoorPlugG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly Outdoor Plug S Gen3 多语言欧盟合规声明（2025-07-25）](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Outdoor%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案：**
- [Shelly Outdoor Plug S Gen3 多语言欧盟合规声明（67, 2025-02-04）](https://kb.shelly.cloud/__attachments/1088126979/Shelly%20Outdoor%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2067%202025-02-04.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册

- [Shelly Outdoor Plug Gen3 多语言打印版用户与安全指南](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Outdoor%20Plug%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-outdoor-plug-s-gen3)