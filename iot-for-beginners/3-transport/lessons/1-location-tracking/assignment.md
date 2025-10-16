<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bded364fc06ce37d7a76aed3be1ba73a",
  "translation_date": "2025-08-25T00:51:25+00:00",
  "source_file": "3-transport/lessons/1-location-tracking/assignment.md",
  "language_code": "zh"
}
-->
# 调查其他 GPS 数据

## 指南

从您的 GPS 传感器接收到的 NMEA 语句中，除了位置信息外，还包含其他数据。请调查这些额外的数据，并将其应用到您的物联网设备中。

例如——您能获取当前的日期和时间吗？如果您使用的是微控制器，是否可以像在上一个项目中使用 NTP 信号设置时钟一样，使用 GPS 数据来设置时钟？您能获取海拔高度（海平面以上的高度）或当前速度吗？

如果您使用的是虚拟物联网设备，那么可以通过使用工具 [nmeagen.org](https://www.nmeagen.org) 生成的 NMEA 语句来获取其中的一些数据。

## 评分标准

| 标准 | 卓越 | 合格 | 需要改进 |
| ---- | ---- | ---- | -------- |
| 获取更多 GPS 数据 | 能够获取并使用更多 GPS 数据，无论是作为遥测数据还是用于设置物联网设备 | 能够获取更多 GPS 数据，但无法使用这些数据 | 无法获取更多 GPS 数据 |
