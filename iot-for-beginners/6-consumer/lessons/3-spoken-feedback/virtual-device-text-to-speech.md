<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7966848a1f870e4c42edb4db67b13c57",
  "translation_date": "2025-08-25T00:15:39+00:00",
  "source_file": "6-consumer/lessons/3-spoken-feedback/virtual-device-text-to-speech.md",
  "language_code": "zh"
}
-->
# 文本转语音 - 虚拟物联网设备

在本节课程中，您将编写代码，通过语音服务将文本转换为语音。

## 将文本转换为语音

您在上一节课中使用的语音服务 SDK 可以将语音转换为文本，同样也可以将文本转换回语音。在请求语音时，您需要提供使用的语音，因为语音可以通过多种不同的声音生成。

每种语言都支持一系列不同的声音，您可以通过语音服务 SDK 获取每种语言支持的声音列表。

### 任务 - 将文本转换为语音

1. 在 VS Code 中打开 `smart-timer` 项目，并确保虚拟环境已在终端中加载。

1. 从 `azure.cognitiveservices.speech` 包中导入 `SpeechSynthesizer`，将其添加到现有的导入中：

    ```python
    from azure.cognitiveservices.speech import SpeechConfig, SpeechRecognizer, SpeechSynthesizer
    ```

1. 在 `say` 函数上方，创建一个语音配置以供语音合成器使用：

    ```python
    speech_config = SpeechConfig(subscription=speech_api_key,
                                 region=location)
    speech_config.speech_synthesis_language = language
    speech_synthesizer = SpeechSynthesizer(speech_config=speech_config)
    ```

    这使用了与识别器相同的 API 密钥、位置和语言。

1. 在其下方添加以下代码以获取语音并将其设置到语音配置中：

    ```python
    voices = speech_synthesizer.get_voices_async().get().voices
    first_voice = next(x for x in voices if x.locale.lower() == language.lower())
    speech_config.speech_synthesis_voice_name = first_voice.short_name
    ```

    这会检索所有可用语音的列表，然后找到与正在使用的语言匹配的第一个语音。

    > 💁 您可以从 [Microsoft Docs 上的语言和语音支持文档](https://docs.microsoft.com/azure/cognitive-services/speech-service/language-support?WT.mc_id=academic-17441-jabenn#text-to-speech) 获取支持的语音的完整列表。如果您想使用特定的语音，可以移除此函数并将语音名称硬编码为文档中的语音名称。例如：
    >
    > ```python
    > speech_config.speech_synthesis_voice_name = 'hi-IN-SwaraNeural'
    > ```

1. 更新 `say` 函数的内容以生成响应的 SSML：

    ```python
    ssml =  f'<speak version=\'1.0\' xml:lang=\'{language}\'>'
    ssml += f'<voice xml:lang=\'{language}\' name=\'{first_voice.short_name}\'>'
    ssml += text
    ssml += '</voice>'
    ssml += '</speak>'
    ```

1. 在其下方，停止语音识别，播放 SSML，然后重新启动识别：

    ```python
    recognizer.stop_continuous_recognition()
    speech_synthesizer.speak_ssml(ssml)
    recognizer.start_continuous_recognition()
    ```

    在播放文本时停止识别，以避免计时器启动的语音被检测到并发送到 LUIS，可能会被解释为设置新计时器的请求。

    > 💁 您可以通过注释掉停止和重新启动识别的代码来测试这一点。设置一个计时器，您可能会发现语音播报会设置一个新计时器，从而导致新的播报，继而设置新的计时器，如此循环往复！

1. 运行应用程序，并确保函数应用程序也在运行。设置一些计时器，您会听到语音响应，告诉您计时器已设置，然后在计时器完成时会有另一个语音响应。

> 💁 您可以在 [code-spoken-response/virtual-iot-device](../../../../../6-consumer/lessons/3-spoken-feedback/code-spoken-response/virtual-iot-device) 文件夹中找到此代码。

😀 您的计时器程序大获成功！
