<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3ac42e284a7222c0e83d2d43231a364f",
  "translation_date": "2025-08-24T22:48:29+00:00",
  "source_file": "2-farm/lessons/4-migrate-your-plant-to-the-cloud/single-board-computer-connect-hub.md",
  "language_code": "zh"
}
-->
# 将您的 IoT 设备连接到云端 - 虚拟 IoT 硬件和 Raspberry Pi

在本课程的这一部分，您将把虚拟 IoT 设备或 Raspberry Pi 连接到您的 IoT Hub，以发送遥测数据并接收命令。

## 将设备连接到 IoT Hub

下一步是将您的设备连接到 IoT Hub。

### 任务 - 连接到 IoT Hub

1. 在 VS Code 中打开 `soil-moisture-sensor` 文件夹。如果您使用的是虚拟 IoT 设备，请确保虚拟环境在终端中运行。

1. 安装一些额外的 Pip 包：

    ```sh
    pip3 install azure-iot-device
    ```

    `azure-iot-device` 是一个用于与 IoT Hub 通信的库。

1. 在 `app.py` 文件顶部的现有导入语句下方添加以下导入：

    ```python
    from azure.iot.device import IoTHubDeviceClient, Message, MethodResponse
    ```

    这段代码导入了与 IoT Hub 通信的 SDK。

1. 删除 `import paho.mqtt.client as mqtt` 这一行，因为这个库不再需要。删除所有 MQTT 相关代码，包括主题名称、所有使用 `mqtt_client` 的代码以及 `handle_command`。保留 `while True:` 循环，只需删除该循环中的 `mqtt_client.publish` 行即可。

1. 在导入语句下方添加以下代码：

    ```python
    connection_string = "<connection string>"
    ```

    将 `<connection string>` 替换为您在本课程前面为设备检索到的连接字符串。

    > 💁 这不是最佳实践。连接字符串不应该存储在源代码中，因为它可能会被提交到源代码控制中并被任何人发现。我们在这里这样做是为了简化操作。理想情况下，您应该使用环境变量和类似 [`python-dotenv`](https://pypi.org/project/python-dotenv/) 的工具。您将在后续课程中了解更多相关内容。

1. 在这段代码下方添加以下内容，以创建一个可以与 IoT Hub 通信的设备客户端对象并连接它：

    ```python
    device_client = IoTHubDeviceClient.create_from_connection_string(connection_string)

    print('Connecting')
    device_client.connect()
    print('Connected')
    ```

1. 运行这段代码。您将看到您的设备已连接。

    ```text
    pi@raspberrypi:~/soil-moisture-sensor $ python3 app.py 
    Connecting
    Connected
    Soil moisture: 379
    ```

## 发送遥测数据

现在您的设备已连接，您可以将遥测数据发送到 IoT Hub，而不是发送到 MQTT broker。

### 任务 - 发送遥测数据

1. 在 `while True` 循环中添加以下代码，就在 `sleep` 之前：

    ```python
    message = Message(json.dumps({ 'soil_moisture': soil_moisture }))
    device_client.send_message(message)
    ```

    这段代码创建了一个包含土壤湿度读数的 JSON 字符串的 IoT Hub `Message`，然后将其作为设备到云端消息发送到 IoT Hub。

## 处理命令

您的设备需要处理来自服务器代码的命令以控制继电器。这是通过直接方法请求发送的。

### 任务 - 处理直接方法请求

1. 在 `while True` 循环之前添加以下代码：

    ```python
    def handle_method_request(request):
        print("Direct method received - ", request.name)
    
        if request.name == "relay_on":
            relay.on()
        elif request.name == "relay_off":
            relay.off()    
    ```

    这定义了一个方法 `handle_method_request`，当 IoT Hub 调用直接方法时会调用该方法。每个直接方法都有一个名称，这段代码期望一个名为 `relay_on` 的方法来打开继电器，以及一个名为 `relay_off` 的方法来关闭继电器。

    > 💁 这也可以通过一个单一的直接方法请求来实现，将继电器的期望状态作为一个有效负载传递，该有效负载可以通过方法请求传递并从 `request` 对象中获取。

1. 直接方法需要一个响应来告诉调用代码请求已被处理。在 `handle_method_request` 函数的末尾添加以下代码，以创建对请求的响应：

    ```python
    method_response = MethodResponse.create_from_method_request(request, 200)
    device_client.send_method_response(method_response)
    ```

    这段代码向直接方法请求发送一个 HTTP 状态码为 200 的响应，并将其返回到 IoT Hub。

1. 在该函数定义下方添加以下代码：

    ```python
    device_client.on_method_request_received = handle_method_request
    ```

    这段代码告诉 IoT Hub 客户端在调用直接方法时调用 `handle_method_request` 函数。

> 💁 您可以在 [code/pi](../../../../../2-farm/lessons/4-migrate-your-plant-to-the-cloud/code/pi) 或 [code/virtual-device](../../../../../2-farm/lessons/4-migrate-your-plant-to-the-cloud/code/virtual-device) 文件夹中找到这段代码。

😀 您的土壤湿度传感器程序已连接到您的 IoT Hub！
