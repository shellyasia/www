# Shelly Plug S MTR Gen3

![Shelly Plug S MTR Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plug%20S%20MTR%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly Plug S Gen3  
- **设备型号：** S3PL-00112EU  
- **设备SSID：** ShellyPlugSG3-XXXXXXXXXXXX  
- **BLE ID：** 0x1805  

## 简要说明

Shelly Plug S MTR Gen3 是首批支持 Matter 协议的 Shelly 设备之一。

这款智能插座具备电量测量和过热保护功能，可通过智能手机、平板电脑、PC 或家庭自动化系统实现对电器的远程控制。设备可独立运行于本地 Wi-Fi 网络，也可集成至基于云的家庭自动化服务中。

只要设备保持连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络连接的位置远程访问、配置和监控该设备。

内置的 Web 界面允许用户实时监控和控制设备，并调整其各项设置。

## 主要功能

- 支持 Matter 协议  
- 新一代 Wi-Fi 智能插座，配备多色 LED 指示灯  
- 脚本功能（仅在关闭 Matter 功能时支持）  
- Wi-Fi 信号扩展器  
- BLE 网关  
- 电量计量  
- 定时计划  
- 广泛兼容第三方家庭自动化系统  
- 本地自动化动作  
- 可选支持 Shelly Cloud / Shelly Smart Control 应用  
- 虚拟组件  

## 使用场景

- **无缝集成其他 Matter 设备**  
- **与 Apple 设备配合使用（通过 Matter）**  
- **用作彩色夜灯：**  
  - 夜间模式，支持自定义设置  
  - 启用后，在夜间时段自动降低 LED 亮度，避免干扰睡眠  

- **防止忘记关闭电器：**  
  - 通过手机轻触即可监控和控制已插入的设备  
  - 内置倒计时定时器及本地存储的定时计划，可在设定时间（如 1 小时）后自动断电，节省能源  
  - 适用于熨斗、小型烤箱、电暖器等设备  

- **自动化控制以减少能源浪费：**  
  - 在晚间和周末自动关闭闲置设备  
  - 示例：工作日 19:00 至次日 7:00，以及周五晚上至周一早晨自动断电  
  - 可将能耗降低高达 50%，显著减少每月电费支出  
  - 适用于小型烤箱、电暖气、红外加热器等  

- **根据室外污染水平自动启停空气净化器：**  
  - 使用脚本从第三方数据源获取实时空气质量信息  
  - 当污染水平升高时自动开启空气净化器  
  - 特别适合城市环境，尤其在秋冬季节  

- **为儿童房间提供柔和夜灯：**  
  - 自定义 LED 颜色与亮度，营造温馨舒适的夜间氛围  
  - 帮助孩子安心入睡  

## 集成支持

### Amazon Alexa 支持的功能  
是  

### Google Smart Home 支持的特性  
是  

### Samsung SmartThings 支持的功能  
是  

## 简化内部原理图

![](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-S-V3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入
- 1 个 CEE 7/7 插头  

### 输出
- 1 个 CEE 7/3（Type-F / Schuko）插座  

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
- 1 个按钮  
  - 短按一次：切换输出开关状态（开/关）  
  - 长按 3 秒：检查状态（仅在输出关闭时可用）  
  - 长按 5 秒：重启设备（需在上电后 60 秒内操作）  
  - 长按 10 秒：恢复出厂设置（需在上电后 60 秒内操作）  

### 输出
- LED 指示灯  
  - **首次通电：** 蓝灯闪烁 — 表示处于 AP 模式  
  - **成功连接 Wi-Fi 后：**  
    - 红灯缓慢闪烁 — 正在重新连接 Wi-Fi  
    - 红灯常亮 — 无法重新连接 Wi-Fi  
  - **输出开启时：**  
    - **默认行为（按功率比例变色）：**  
      - 0% 设置功率限值时为绿色  
      - 50% 设置功率限值时为黄色  
      - 100% 设置功率限值时为红色  
    - **自定义颜色（默认：绿色，默认亮度：100%）**  
    - **关闭状态**  
  - **输出关闭时：**  
    - **默认：** LED 关闭  
    - **自定义颜色（默认：红色，默认亮度：100%）**  
  - **OTA 升级期间：** 红灯闪烁  

## 规格参数

| 类别 | 参数 |
|------|------|
| **物理特性** | |
| 尺寸（高×宽×深） | 44 × 44 × 70 ±0.5 mm / 1.73 × 1.73 × 2.75 ±0.02 英寸 |
| 重量 | 60 ±1 g / 2.08 ±0.04 盎司 |
| 兼容插座 | CEE 7/1、CEE 7/3（Type F / Schuko）、CEE 7/5（Type E） |
| 兼容插头 | CEE 7/2、CEE 7/4（Type F / Schuko）、CEE 7/7、CEE 7/16（Type C）、CEE 7/17 |
| 外壳材质 | 塑料 |
| 颜色选项 | 白色、黑色 |
| **环境条件** | |
| 环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% 至 70% RH |
| 最大海拔高度 | 2000 米 / 6562 英尺 |
| 高温灼烧丝温度 | 750 °C |
| 污染等级 | 2 |
| 是否需要强制散热 | 否 |
| **电气参数** | |
| 电源输入 | 220–230 V~ 50/60 Hz |
| 待机功耗 | <1 W |
| 额定冲击耐受电压 | 2500 V |
| **输出电路额定值** | |
| 最大开关电压 | 230 V~ |
| 最大开关电流 | 12 A |
| 最大输出功率 | 2500 W（仅限阻性负载） |
| 开关循环次数 | 10,000 次 |
| 过压类别 | II |
| 工作类型 | S1（连续工作） |
| 开关类型 | 单向开关 |
| 开关配置 | SPNO（单极常开） |
| 电路断开类型 | 微型 |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| 交流电压表 | 是 |
| 交流电流表 | 是 |
| 功率与电能计量 | 是 |
| **无线通信** | |
| **Wi-Fi** | |
| 协议 | 802.11 b/g/n |
| 射频频段 | 2401–2473 MHz |
| 最大射频功率 | <10 dBm |
| Wi-Fi 有效范围 | 室外最大 50 m / 164 英尺，室内最大 30 m / 98 英尺（视环境而定） |
| **蓝牙** | |
| 协议 | Bluetooth 4.2 |
| 射频频段 | 2402–2480 MHz |
| 最大射频功率 | <4 dBm |
| 通信范围 | 室外最大 30 m / 98 英尺，室内最大 10 m / 33 英尺（视环境而定） |
| **微控制器单元 (MCU)** | |
| CPU | ESP-Shelly-C38F |
| 闪存容量 | 8 MB |
| **固件功能** | |
| Webhooks（URL 动作） | 支持 20 个钩子，每个钩子最多支持 5 个 URL |
| 脚本功能 | 是 |
| MQTT | 是 |
| CoAP | 否 |

## Shelly Smart Control
- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web 用户界面
- [Shelly Plug S Gen3 Web 界面指南](../knowledge-base/shelly-plug-s-gen3-web-interface-guide)

## 组件与 API 接口
- [此设备 API 文档](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyPlugSG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly Plug S Gen3 多语言欧盟符合性声明 2025-07-25.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plug S MTR Gen3 英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plug%20S%20MTR%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**合规档案**
- [Shelly Plug S MTR Gen3 多语言欧盟符合性声明 57 2024-09-19.pdf](https://kb.shelly.cloud/__attachments/401768449/Shelly%20Plug%20S%20MTR%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2057%202024-09-19.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印版用户手册
- [Plug S MTR Gen 3 多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Plug%20S%20MTR%20Gen%203%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [使用与安全手册（俄语）](../knowledge-base/plug-s-mtr-gen3)