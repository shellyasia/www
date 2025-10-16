<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0d55caa8c23d73635b7559102cd17b8a",
  "translation_date": "2025-08-24T22:36:45+00:00",
  "source_file": "2-farm/lessons/2-detect-soil-moisture/wio-terminal-soil-moisture.md",
  "language_code": "zh"
}
-->
# 测量土壤湿度 - Wio Terminal

在本课中，您将为 Wio Terminal 添加一个电容式土壤湿度传感器，并读取其数值。

## 硬件

Wio Terminal 需要一个电容式土壤湿度传感器。

您将使用的传感器是 [电容式土壤湿度传感器](https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant.html)，它通过检测土壤的电容来测量湿度。随着土壤湿度的变化，电容也会发生变化。当土壤湿度增加时，电压会降低。

这是一个模拟传感器，因此需要连接到 Wio Terminal 的模拟引脚，并使用板载 ADC 将其转换为 0-1023 的数值。

### 连接土壤湿度传感器

Grove 土壤湿度传感器可以连接到 Wio Terminal 的可配置模拟/数字端口。

#### 任务 - 连接土壤湿度传感器

连接土壤湿度传感器。

![一个 Grove 土壤湿度传感器](../../../../translated_images/grove-capacitive-soil-moisture-sensor.e7f0776cce30e78be5cc5a07839385fd6718857f31b5bf5ad3d0c73c83b2f0ef.zh.png)

1. 将 Grove 电缆的一端插入土壤湿度传感器上的插座。电缆只能以一种方向插入。

1. 在 Wio Terminal 未连接到电脑或其他电源的情况下，将 Grove 电缆的另一端连接到 Wio Terminal 屏幕右侧的 Grove 插座。这是距离电源按钮最远的插座。

![Grove 土壤湿度传感器连接到右侧插座](../../../../translated_images/wio-soil-moisture-sensor.46919b61c3f6cb7497662251b29038ee0e57a4c8b9d071feb996c3b0d7f65aaf.zh.png)

1. 将土壤湿度传感器插入土壤中。传感器上有一个“最高位置线”——一条白线横跨传感器。将传感器插入土壤，直到但不超过这条线。

![土壤中的 Grove 土壤湿度传感器](../../../../translated_images/soil-moisture-sensor-in-soil.bfad91002bda5e960f8c51ee64b02ee59b32c8c717e3515a2c945f33e614e403.zh.png)

1. 现在可以将 Wio Terminal 连接到您的电脑。

## 编程土壤湿度传感器

现在可以为 Wio Terminal 编程以使用连接的土壤湿度传感器。

### 任务 - 编程土壤湿度传感器

为设备编程。

1. 使用 PlatformIO 创建一个全新的 Wio Terminal 项目。将此项目命名为 `soil-moisture-sensor`。在 `setup` 函数中添加代码以配置串口。

    > ⚠️ 如果需要，可以参考 [项目 1，第 1 课中创建 PlatformIO 项目的说明](../../../1-getting-started/lessons/1-introduction-to-iot/wio-terminal.md#create-a-platformio-project)。

1. 这个传感器没有专用库，但可以使用内置的 Arduino [`analogRead`](https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/) 函数从模拟引脚读取数据。首先在 `setup` 函数中配置模拟引脚为输入，以便从中读取数值，添加以下代码：

    ```cpp
    pinMode(A0, INPUT);
    ```

    这将 `A0` 引脚（模拟/数字组合引脚）设置为输入引脚，可以从中读取电压。

1. 在 `loop` 函数中添加以下代码以从该引脚读取电压：

    ```cpp
    int soil_moisture = analogRead(A0);
    ```

1. 在此代码下方添加以下代码，将数值打印到串口：

    ```cpp
    Serial.print("Soil Moisture: ");
    Serial.println(soil_moisture);
    ```

1. 最后在末尾添加一个 10 秒的延迟：

    ```cpp
    delay(10000);
    ```

1. 构建并上传代码到 Wio Terminal。

    > ⚠️ 如果需要，可以参考 [项目 1，第 1 课中创建 PlatformIO 项目的说明](../../../1-getting-started/lessons/1-introduction-to-iot/wio-terminal.md#write-the-hello-world-app)。

1. 上传完成后，您可以使用串口监视器监测土壤湿度。向土壤中添加一些水，或者将传感器从土壤中移除，观察数值变化。

    ```text
    > Executing task: platformio device monitor <
    
    --- Available filters and text transformations: colorize, debug, default, direct, hexlify, log2file, nocontrol, printable, send_on_enter, time
    --- More details at http://bit.ly/pio-monitor-filters
    --- Miniterm on /dev/cu.usbmodem1201  9600,8,N,1 ---
    --- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H ---
    Soil Moisture: 526
    Soil Moisture: 529
    Soil Moisture: 521
    Soil Moisture: 494
    Soil Moisture: 454
    Soil Moisture: 456
    Soil Moisture: 395
    Soil Moisture: 388
    Soil Moisture: 394
    Soil Moisture: 391
    ```

    在上面的示例输出中，您可以看到随着水的添加，电压下降。

> 💁 您可以在 [code/wio-terminal](../../../../../2-farm/lessons/2-detect-soil-moisture/code/wio-terminal) 文件夹中找到此代码。

😀 您的土壤湿度传感器程序运行成功！
