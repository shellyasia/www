<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7e9f05bdc50a40fd924b1d66934471bf",
  "translation_date": "2025-08-24T21:55:38+00:00",
  "source_file": "4-manufacturing/lessons/4-trigger-fruit-detector/virtual-device-proximity.md",
  "language_code": "zh"
}
-->
# 检测接近 - 虚拟物联网硬件

在本节课程中，您将为虚拟物联网设备添加一个接近传感器，并读取其距离数据。

## 硬件

虚拟物联网设备将使用一个模拟的距离传感器。

在实际的物联网设备中，您会使用带有激光测距模块的传感器来检测距离。

### 将距离传感器添加到 CounterFit

要使用虚拟距离传感器，您需要在 CounterFit 应用中添加一个。

#### 任务 - 将距离传感器添加到 CounterFit

将距离传感器添加到 CounterFit 应用中。

1. 在 VS Code 中打开 `fruit-quality-detector` 代码，并确保虚拟环境已激活。

1. 安装一个额外的 Pip 包，以安装一个 CounterFit shim，它可以通过模拟 [rpi-vl53l0x Pip 包](https://pypi.org/project/rpi-vl53l0x/)与距离传感器通信。`rpi-vl53l0x` 是一个与 [VL53L0X 飞行时间距离传感器](https://wiki.seeedstudio.com/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/)交互的 Python 包。确保您是在激活虚拟环境的终端中安装的。

    ```sh
    pip install counterfit-shims-rpi-vl53l0x
    ```

1. 确保 CounterFit 网页应用正在运行。

1. 创建一个距离传感器：

    1. 在 *Sensors* 面板的 *Create sensor* 框中，点击 *Sensor type* 下拉框并选择 *Distance*。

    1. 将 *Units* 保持为 `Millimeter`。

    1. 该传感器是一个 I²C 传感器，因此将地址设置为 `0x29`。如果您使用的是物理 VL53L0X 传感器，它的地址会被硬编码为此值。

    1. 点击 **Add** 按钮以创建距离传感器。

    ![距离传感器设置](../../../../translated_images/counterfit-create-distance-sensor.967c9fb98f27888d95920c9784d004c972490eb71f70397fe13bd70a79a879a3.zh.png)

    距离传感器将被创建并显示在传感器列表中。

    ![已创建的距离传感器](../../../../translated_images/counterfit-distance-sensor.079eefeeea0b68afc36431ce8fcbe2f09a7e4916ed1cd5cb30e696db53bc18fa.zh.png)

## 编程距离传感器

现在可以为虚拟物联网设备编程，以使用模拟的距离传感器。

### 任务 - 编程飞行时间传感器

1. 在 `fruit-quality-detector` 项目中创建一个名为 `distance-sensor.py` 的新文件。

    > 💁 模拟多个物联网设备的一个简单方法是将每个设备的代码写在不同的 Python 文件中，然后同时运行它们。

1. 使用以下代码启动与 CounterFit 的连接：

    ```python
    from counterfit_connection import CounterFitConnection
    CounterFitConnection.init('127.0.0.1', 5000)
    ```

1. 在此代码下方添加以下代码：

    ```python
    import time
    
    from counterfit_shims_rpi_vl53l0x.vl53l0x import VL53L0X
    ```

    这将导入 VL53L0X 飞行时间传感器的传感器库 shim。

1. 在此代码下方，添加以下代码以访问传感器：

    ```python
    distance_sensor = VL53L0X()
    distance_sensor.begin()
    ```

    这段代码声明了一个距离传感器，然后启动传感器。

1. 最后，添加一个无限循环以读取距离数据：

    ```python
    while True:
        distance_sensor.wait_ready()
        print(f'Distance = {distance_sensor.get_distance()} mm')
        time.sleep(1)
    ```

    这段代码等待传感器准备好读取值，然后将其打印到控制台。

1. 运行此代码。

    > 💁 请记住，此文件名为 `distance-sensor.py`！确保通过 Python 运行它，而不是运行 `app.py`。

1. 您将在控制台中看到距离测量值。更改 CounterFit 中的值以查看此值的变化，或者使用随机值。

    ```text
    (.venv) ➜  fruit-quality-detector python distance-sensor.py 
    Distance = 37 mm
    Distance = 42 mm
    Distance = 29 mm
    ```

> 💁 您可以在 [code-proximity/virtual-iot-device](../../../../../4-manufacturing/lessons/4-trigger-fruit-detector/code-proximity/virtual-iot-device) 文件夹中找到此代码。

😀 您的接近传感器程序运行成功！
