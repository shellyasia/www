<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e5896207b304ce1abaf065b8acc0cc79",
  "translation_date": "2025-08-24T21:30:55+00:00",
  "source_file": "4-manufacturing/lessons/2-check-fruit-from-device/single-board-computer-classify-image.md",
  "language_code": "zh"
}
-->
# 分类图像 - 虚拟 IoT 硬件和 Raspberry Pi

在本节课程中，您将把摄像头捕获的图像发送到 Custom Vision 服务进行分类。

## 将图像发送到 Custom Vision

Custom Vision 服务提供了一个 Python SDK，您可以用它来分类图像。

### 任务 - 将图像发送到 Custom Vision

1. 在 VS Code 中打开 `fruit-quality-detector` 文件夹。如果您使用的是虚拟 IoT 设备，请确保虚拟环境在终端中运行。

1. 用于将图像发送到 Custom Vision 的 Python SDK 可作为一个 Pip 包安装。使用以下命令安装：

    ```sh
    pip3 install azure-cognitiveservices-vision-customvision
    ```

1. 在 `app.py` 文件的顶部添加以下导入语句：

    ```python
    from msrest.authentication import ApiKeyCredentials
    from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient
    ```

    这将引入 Custom Vision 库中的一些模块，一个用于使用预测密钥进行身份验证，另一个提供可以调用 Custom Vision 的预测客户端类。

1. 在文件末尾添加以下代码：

    ```python
    prediction_url = '<prediction_url>'
    prediction_key = '<prediction key>'
    ```

    将 `<prediction_url>` 替换为您在本课程前面从 *Prediction URL* 对话框中复制的 URL。将 `<prediction key>` 替换为您从同一对话框中复制的预测密钥。

1. *Prediction URL* 对话框提供的预测 URL 设计用于直接调用 REST 端点。Python SDK 在不同的地方使用 URL 的不同部分。添加以下代码将此 URL 分解为所需的部分：

    ```python
    parts = prediction_url.split('/')
    endpoint = 'https://' + parts[2]
    project_id = parts[6]
    iteration_name = parts[9]
    ```

    这会拆分 URL，提取出 `https://<location>.api.cognitive.microsoft.com` 的端点、项目 ID 和已发布迭代的名称。

1. 使用以下代码创建一个预测器对象来执行预测：

    ```python
    prediction_credentials = ApiKeyCredentials(in_headers={"Prediction-key": prediction_key})
    predictor = CustomVisionPredictionClient(endpoint, prediction_credentials)
    ```

    `prediction_credentials` 包装了预测密钥。这些随后用于创建一个指向端点的预测客户端对象。

1. 使用以下代码将图像发送到 Custom Vision：

    ```python
    image.seek(0)
    results = predictor.classify_image(project_id, iteration_name, image)
    ```

    这会将图像回滚到起始位置，然后将其发送到预测客户端。

1. 最后，使用以下代码显示结果：

    ```python
    for prediction in results.predictions:
        print(f'{prediction.tag_name}:\t{prediction.probability * 100:.2f}%')
    ```

    这会循环显示所有返回的预测结果，并在终端中显示它们。返回的概率是从 0 到 1 的浮点数，其中 0 表示与标签匹配的概率为 0%，1 表示与标签匹配的概率为 100%。

    > 💁 图像分类器会返回所有使用过的标签的百分比。每个标签都会有一个图像与该标签匹配的概率。

1. 运行您的代码，将摄像头对准一些水果，或者使用适当的图像集，或者如果使用虚拟 IoT 硬件，则让水果在您的网络摄像头中可见。您将在控制台中看到输出：

    ```text
    (.venv) ➜  fruit-quality-detector python app.py
    ripe:   56.84%
    unripe: 43.16%
    ```

    您将能够看到拍摄的图像，以及这些值在 Custom Vision 的 **Predictions** 选项卡中显示。

    ![Custom Vision 中的一根香蕉，预测成熟度为 56.8%，未成熟度为 43.1%](../../../../translated_images/custom-vision-banana-prediction.30cdff4e1d72db5d9a0be0193790a47c2b387da034e12dc1314dd57ca2131b59.zh.png)

> 💁 您可以在 [code-classify/pi](../../../../../4-manufacturing/lessons/2-check-fruit-from-device/code-classify/pi) 或 [code-classify/virtual-iot-device](../../../../../4-manufacturing/lessons/2-check-fruit-from-device/code-classify/virtual-iot-device) 文件夹中找到此代码。

😀 您的水果质量分类器程序成功了！
