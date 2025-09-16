# Shelly DALI Dimmer Gen3

![Shelly DALI Dimmer Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%20DALI%20Dimmer%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备识别

- **设备名称：** Shelly DALI 调光器 3 代  
- **设备型号：** S3DM-0A1WW  
- **设备 SSID：** ShellyDDimmerG3-XXXXXXXXXXXX  
- **设备蓝牙 ID：** 0x1071  

## 简要说明

Shelly DALI 调光器（设备）是一款网关设备，用于连接 Shelly 生态系统与 API 到 DALI 照明网络。它可控制配备 DALI 控制装置的兼容 DALI 光源。

> **从 DALI 角度来看，该设备作为单主控应用控制器运行，支持 LED 控制装置（第 207 部分），在总线上独立工作，不与其他 DALI 设备共享总线。该设备通过广播消息统一控制所有连接的 DALI 控制装置。**

该设备集成了总线电源，可为最多 X 个无源总线单元供电。

只要连接到 Wi-Fi 路由器并接入互联网，即可从任何有网络连接的位置远程访问、控制和监控该设备。

嵌入式 Web 界面允许用户监控和控制设备，并调整其配置设置。

## 主要功能

- **DALI 应用控制器：** 支持单主控配置下的 DALI 总线控制，适用于直接或间接的 DALI 控制装置。
- **DALI 功能：** 控制连接控制装置的灯光亮度（DT6）。不支持色温调节。
- **DALI 上电默认状态：** 关闭
- **DALI 总线故障时状态：** 自动开启至 100%
- **支持 Shelly Plus 扩展模块：** 可连接至 Shelly Plus 设备上的传感器接口。
- **开关/按钮输入模式：** 通过开关或按钮实现灵活的输入控制。
- **单/双按钮调光控制：** 完全支持任意墙面开关配置下的调光功能。
- **夜间模式：** 可在夜间设置输入灯的特定亮度级别。
- **最小/最大亮度：** 调整调光范围，实现更精确的亮度控制。
- **按钮渐变速率：** 控制长按按钮时亮度变化的速度。
- **过渡持续时间：** 设置从 0% 到 100% 调光所需的时间。
- **每周定时计划：** 支持每日定时任务和常规设置，包括亮度、过渡时间和翻转值设定。
- **自动开关定时器：** 支持自动开启/关闭时间配置。
- **本地自动化动作：** 可在本地 Wi-Fi 网络内创建自动化场景，包括亮度、过渡时间和翻转值调整。
- **Webhooks：** 支持轻量级、事件驱动的通信，用于与其他设备联动自动化。
- **BLE 网关：** 实现蓝牙（BLE）与 Wi-Fi 设备之间的通信。
- **Wi-Fi 范围扩展器：** 重传 Wi-Fi 信号以扩展网络覆盖范围。
- **脚本支持：** 通过脚本实现自定义自动化。
- **兼容性：** 与第三方家庭自动化系统高度兼容。
- **KNX：** 支持 [**KNXnet/IP**](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **无需网关：** 可通过 Shelly Smart Control 或第三方系统本地或远程直接使用。

## 使用场景

- 将 DALI 照明系统集成至 Shelly 生态
- 使用 Shelly 应用程序、本地 API 或第三方平台控制 DALI 灯具

## 集成支持

### Amazon Alexa 支持的功能
- 亮度控制器

### Google Smart Home 支持的特性
- 亮度

### Samsung SmartThings 支持的功能
- 颜色控制

## 简化内部原理图

![image-20240510-132931.png](https://kb.shelly.cloud/__attachments/229244941/image-20240510-132931.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 设备电气接口

### 输入端口
- 两个螺丝端子上的开关/按钮输入：**S1** 和 **S2**
- 两个螺丝端子上的电源输入：**N**（零线）和 **L**（火线）

### 输出端口
- 两条 DALI 总线线路：**DA+** 和 **DA−**

### 扩展接口
- Shelly 专有串行接口

![Shelly Plus 1 扩展接口](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ 注意！** 当设备通电时，扩展接口上存在高压，请勿触碰。

## 连接方式
- Wi-Fi  
- 蓝牙  

## 安全功能
- 过热保护

## 支持的负载类型
- 最多控制 5 个 DALI 总线单元  
- 内置总线电源额定输出电流为 10 mA  
- 总线单元必须由外部供电  
- 集成总线电源最大输出电流 < 35 mA

## 用户界面

### 输入部分
- 一个（控制）按钮：
  - 长按 5 秒：启用设备热点及蓝牙连接
  - 长按 10 秒：执行恢复出厂设置

### 输出指示
- 单色 LED 指示灯：
  - **AP 已启用，Wi-Fi 未连接：** 1 秒开 / 1 秒关
  - **Wi-Fi 已启用，未连接：** 1 秒开 / 3 秒关
  - **已连接 Wi-Fi 网络：** 持续常亮
  - **云服务已启用，未连接：** 1 秒开 / 5 秒关
  - **已连接 Shelly 云服务：** 持续常亮
  - **OTA（空中升级）中：** 0.5 秒开 / 0.5 秒关
  - **长按 5 秒按钮：** 0.5 秒开 / 0.5 秒关
  - **长按 10 秒按钮：** 0.25 秒开 / 0.25 秒关

*注：以上状态按从上到下优先级排序，高优先级状态会覆盖低优先级状态。*

## 规格参数

| 项目 | 参数 |
|------|------|
| **物理特性** | |
| 外形尺寸（高×宽×深） | 42 × 37 × 17 mm / 1.65 × 1.46 × 0.66 英寸 |
| 重量 | 18 g / 0.63 盎司 |
| 螺丝端子最大扭矩 | 0.4 Nm / 3.5 lbin |
| 导线截面积 | 0.5 – 1.5 mm² / 20 – 16 AWG（实心、绞合线、护套端子） |
| 导线剥线长度 | 5 – 6 mm / 0.20 – 0.24 英寸 |
| 安装方式 | 墙内安装、吊顶悬挂 |
| 外壳材质 | 塑料 |
| 外壳颜色 | 绿色 |
| **环境条件** | |
| 工作环境温度 | -20 °C 至 40 °C / -5 °F 至 105 °F |
| 湿度 | 30% – 70% RH |
| 最大海拔高度 | 2000 m / 6562 英尺 |
| **电气参数** | |
| 电源输入 | 110 – 240 VAC ±10%，50/60 Hz |
| 功耗 | < 2 W |
| 是否需要零线 | 否 |
| **输出电路额定值** | |
| 总线电源 | 保证输出 10 mA（最多支持 5 个 DALI 控制装置）；短路电流 < 35 mA |
| 总线电压 | 16 V 额定 |
| **传感器与仪表** | |
| 内置温度传感器 | 是 |
| **无线通信** | |
| Wi-Fi | |
| 协议 | IEEE 802.11 b/g/n |
| 射频频段 | 2401 – 2495 MHz |
| 最大射频功率 | < 20 dBm |
| 传输距离 | 室内最高 30 米 / 100 英尺，室外最高 50 米 / 160 英尺<br>（受本地环境影响） |
| 蓝牙 | |
| 协议 | Bluetooth 4.2 |
| 射频频段 | 2400 – 2483.5 MHz |
| 最大射频功率 | < 4 dBm |
| 传输距离 | 室内最高 10 米 / 33 英尺，室外最高 30 米 / 100 英尺<br>（受本地环境影响） |
| **微控制器单元** | |
| CPU | ESP32-C3 Shelly |
| 闪存容量 | 8 MB |
| **固件功能** | |
| 定时计划 | 20 个 |
| Webhooks（URL 动作） | 支持 20 个钩子，每个钩子最多 5 个 URL |
| 脚本支持 | 是 |
| MQTT | 是 |
| 加密支持 | 是，TLS 1.2 |

## 基础接线图

![Dali Dimmer Gen3-wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/Dali%20Dimmer%20Gen3-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### 图例说明

| 端子 | 接线 |
|------|------|
| **N** | 零线端子 |
| **N** | 零线 |
| **L** | 火线端子（110–240 V~） |
| **L** | 火线（110–240 V~），频率 50–60 Hz |
| **Out** | DALI 调光器负载输出 |
| **S1, S2** | 开关输入端子 |
| **DA+** | DALI 接口正极端子 |
| **DA−** | DALI 接口负极端子 |

## 故障排查

1. **确保设备供电正常：**  
   - 检查电源线、插座及设备上的电源指示灯。

2. **检查所有连接：**  
   - 确认所有接线和电缆连接牢固且正确插入。松动连接可能导致故障。

3. **检查设备设置：**  
   - 确保配置符合预期用途。

4. **更新固件/软件：**  
   - 检查是否有可用更新。保持设备最新可解决已知问题并提升性能。

5. **重启/重新启动设备：**  
   - 关闭设备，等待几秒后重新上电，以清除临时异常。

6. **检查网络连接：**  
   - 确保网络设置正确。测试连通性；如有必要，重启路由器或交换机。

7. **检查物理部件：**  
   - 查看是否存在损坏、过热或异常行为迹象。

8. **验证兼容性：**  
   - 确认与其他系统组件（硬件和软件）兼容。

9. **监控环境因素：**  
   - 考虑周围温度和湿度水平。

10. **检查电源质量：**  
    - 电压波动或浪涌可能影响性能。如有需要，使用浪涌保护器或稳压器。

> *以上为通用故障排查步骤。具体操作可能因问题而异。若问题持续，请联系我们的 [技术支持](https://support.shelly.cloud/en/support/home)。*

## Shelly Smart Control
- [将设备添加至 Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web 用户界面
- [Shelly DALI 调光器 3 代 Web 界面指南](../knowledge-base/shelly-dali-dimmer-gen3-web-interface-guide)

## 组件与 API
- [本设备](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyDDimmerG3)
- [所有 Shelly 设备与服务](https://shelly-api-docs.shelly.cloud/)

## 合规认证

- [Shelly DALI 调光器 3 代多语言欧盟符合性声明 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly DALI 调光器 3 代澳大利亚/新西兰适用性证书.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly DALI 调光器 3 代英国 PSTI ACT 合规声明.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

### 合规档案
- [Shelly DALI 调光器 3 代多语言欧盟符合性声明 57-1 2024-09-19.pdf](https://kb.shelly.cloud/__attachments/585105967/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2057-1%202024-09-19.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## 打印用户手册
- [Shelly DALI 调光器 3 代多语言打印版用户与安全指南.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [使用与安全指南（俄语）](../knowledge-base/shelly-dali-dimmer-gen3)

## 安装指南
- ×