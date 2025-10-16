<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7f4ad0ef54f248b85b92187c94cf9dcb",
  "translation_date": "2025-08-24T23:25:23+00:00",
  "source_file": "1-getting-started/lessons/3-sensors-and-actuators/wio-terminal-sensor.md",
  "language_code": "zh"
}
-->
# 添加传感器 - Wio Terminal

在本节课程中，您将使用 Wio Terminal 上的光传感器。

## 硬件

本节课程使用的传感器是一个**光传感器**，它通过[光电二极管](https://wikipedia.org/wiki/Photodiode)将光转换为电信号。这是一个模拟传感器，会发送一个从 0 到 1,023 的整数值，表示相对光量，但不对应任何标准测量单位，例如 [lux](https://wikipedia.org/wiki/Lux)。

光传感器内置在 Wio Terminal 中，可以通过背面的透明塑料窗口看到。

![Wio Terminal 背面的光传感器](../../../../translated_images/wio-light-sensor.b1f529f3c95f51654f2e2c1d2d4b55fe547d189f588c974f5c2462c728133840.zh.png)

## 编程光传感器

现在可以对设备进行编程以使用内置的光传感器。

### 任务

对设备进行编程。

1. 在 VS Code 中打开您在上一部分任务中创建的夜灯项目。

1. 在 `setup` 函数的底部添加以下代码行：

    ```cpp
    pinMode(WIO_LIGHT, INPUT);
    ```

    这行代码配置了用于与传感器硬件通信的引脚。

    `WIO_LIGHT` 引脚是连接到板载光传感器的 GPIO 引脚编号。该引脚被设置为 `INPUT`，表示它连接到传感器并将从引脚读取数据。

1. 删除 `loop` 函数的内容。

1. 在现在空的 `loop` 函数中添加以下代码：

    ```cpp
    int light = analogRead(WIO_LIGHT);
    Serial.print("Light value: ");
    Serial.println(light);
    ```

    这段代码从 `WIO_LIGHT` 引脚读取一个模拟值。它从板载光传感器读取一个 0-1,023 的值。然后，这个值会被发送到串口，您可以在代码运行时通过串行监视器读取它。`Serial.print` 会写入文本但不带换行符，因此每行都会以 `Light value:` 开头，并以实际的光值结尾。

1. 在 `loop` 的末尾添加一个一秒（1,000 毫秒）的短暂延迟，因为光照水平不需要连续检查。延迟可以降低设备的功耗。

    ```cpp
    delay(1000);
    ```

1. 将 Wio Terminal 重新连接到您的电脑，并像之前一样上传新代码。

1. 连接串行监视器。光值会输出到终端。遮盖或移开 Wio Terminal 背面的光传感器，数值会发生变化。

    ```text
    > Executing task: platformio device monitor <

    --- Available filters and text transformations: colorize, debug, default, direct, hexlify, log2file, nocontrol, printable, send_on_enter, time
    --- More details at http://bit.ly/pio-monitor-filters
    --- Miniterm on /dev/cu.usbmodem101  9600,8,N,1 ---
    --- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H ---
    Light value: 4
    Light value: 5
    Light value: 4
    Light value: 158
    Light value: 343
    Light value: 348
    Light value: 344
    ```

> 💁 您可以在 [code-sensor/wio-terminal](../../../../../1-getting-started/lessons/3-sensors-and-actuators/code-sensor/wio-terminal) 文件夹中找到这段代码。

😀 成功为您的夜灯程序添加了一个传感器！
