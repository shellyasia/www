<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0ccdc1faa676a485c4c6ecbddb9f9067",
  "translation_date": "2025-08-25T00:59:40+00:00",
  "source_file": "3-transport/lessons/3-visualize-location-data/assignment.md",
  "language_code": "zh"
}
-->
# 部署你的应用

## 说明

有多种方法可以部署你的应用并与世界分享，包括使用 GitHub Pages 或众多服务提供商中的一个。一个非常优秀的选择是使用 Azure Static Web Apps。在这个任务中，按照[这些说明](https://github.com/Azure/static-web-apps-cli)或观看[这些视频](https://www.youtube.com/watch?v=ADVGIXciYn8&list=PLlrxD0HtieHgMPeBaDQFx9yNuFxx6S1VG&index=3)，构建你的网页应用并将其部署到云端。使用 Azure Static Web Apps 的一个好处是你可以在门户中隐藏任何 API 密钥，因此可以借此机会将你的 subscriptionKey 重构为一个变量并存储在云端。

## 评分标准

| 标准     | 卓越表现                                                                                                                               | 合格表现                                                                                                            | 需要改进                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
|          | 一个功能正常的网页应用被展示在一个有文档的 GitHub 仓库中，并且其 subscriptionKey 存储在云端并通过变量调用                              | 一个功能正常的网页应用被展示在一个有文档的 GitHub 仓库中，但其 subscriptionKey 未存储在云端                           | 网页应用存在错误或无法正常工作             |
