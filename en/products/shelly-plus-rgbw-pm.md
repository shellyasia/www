# Shelly Plus RGBW PM

## Device Image

![Shelly Plus RGBW PM](https://kb.shelly.cloud/__attachments/229146742/Plus%20RGBW%20PM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device Name:** Shelly Plus RGBW PM  
- **Device Model:** SNDC-0D4P10WW  
- **Device SSID:** ShellyPlusRGBWPM-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1009  

## Short Description

The Shelly Plus RGBW PM is a Wi-Fi and Bluetooth-enabled RGBW controller. It can be connected like a standard LED driver and allows direct control of lighting via mobile devices or tablets. The device supports three operating profiles: RGBW, RGB, and Lights x 4. In the **Lights x 4** profile, up to four independent LED strips (light groups) can be controlled separately. Built-in power measurement enables real-time monitoring of voltage, current, and power consumption.

## Main Features

- **BLE Gateway:** Enables communication between BLE and Wi-Fi devices.
- **Wi-Fi Range Extender:** Repeats and extends Wi-Fi signals for improved network coverage.
- **Scripting:** Supports custom automation scenarios using scripts.
- **Basic Schedules:** Weekly schedules with adjustable brightness, transition duration, and dimming flip settings.
- **Advanced Schedules:** Year-round scheduling with granular time adjustments (from seconds to months), including brightness, transition duration, and flip value customization.
- **Shelly Plus Add-On Compatible:** Supports connection to sensor interfaces on Shelly Plus devices.
- **Auto On/Off Timers:** Configurable timers for automatic light activation and deactivation.
- **Local Actions:** Enables local automation within the Wi-Fi network, supporting brightness, transition, and flip settings.
- **Webhooks:** Facilitates lightweight, event-driven automation with external systems.
- **Independent Output Control (Lights x 4):** Full individual control over each of the four outputs for maximum flexibility.
- **Power Measurement:** Accurate real-time tracking of energy usage.
- **Independent RGB and White Control:** Separate dimming control for color (RGB) and white channels.
- **Night Mode:** Allows setting specific brightness levels for input lights during nighttime hours.
- **Switch/Button/Analog Input Mode:** Flexible input support via switches, buttons, or potentiometers (10kΩ recommended).
- **Min/Max Brightness Adjustment:** Customizes the dimming range for more precise brightness control (affects RGB in RGBW mode and brightness in Lights x 4).
- **Button Fade Rate:** Controls the speed of brightness change when holding a button.

## Use Cases

- **Power Monitoring:** Track real-time energy consumption across all connected lights to optimize efficiency and reduce waste.
- **Space-Efficient Retrofitting:** Install in compact spaces such as standard wall boxes, behind sockets, or switch plates due to its small size.
- **Wake-Up & Sleep Routines:** Simulate sunrise/sunset with gradual color and brightness changes using Night Mode; support circadian lighting for improved well-being.
- **Child-Friendly Night Lights:** Create soothing, calming ambient lighting ideal for bedtime environments.
- **Seasonal & Entertainment Decorations:** Customize lighting for holidays, seasons, parties, or events—e.g., warm tones for autumn, festive colors during holidays, dynamic patterns for gatherings.
- **Smart Presence Simulation:** Mimic occupancy by turning lights on/off at random intervals based on time or sunrise/sunset, enhancing home security.
- **Retail & Commercial Displays:** Enhance visual merchandising with dynamic lighting to highlight products and attract attention.
- **Enhanced Automation Integration:** Seamlessly integrate with popular platforms like Home Assistant, Google Home, Amazon Alexa, and SmartThings.
- **Dynamic Art Installations:** Incorporate into interactive art exhibits to deliver immersive, responsive lighting effects.

## Integrations

### Amazon Alexa Supported Capabilities
- Brightness Controller

### Google Smart Home Supported Traits
- Brightness

### Samsung SmartThings Supported Capabilities
- Color Control

## Simplified Internal Schematics

![Plus-RGBW-PM-internal-schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-RGBW-PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 4 switch/button inputs on screw terminals: **I1**, **I2**, **I3**, **I4**
- 2 power supply inputs on screw terminals: **(+) (positive)**, **(−) (negative)**

### Outputs
- 4 outputs on screw terminals: **O1**, **O2**, **O3**, **O4**  
  *(Used for R, G, B, W in RGBW/RGB modes; used as independent light channels in Lights x 4 mode)*

## Connectivity
- Wi-Fi (802.11 b/g/n)
- Bluetooth 4.2

## Safety Functions
- Overheating Protection  
- Overcurrent Protection

## Supported Load Types
- 12/24 V mono-color LED strips  
- 12/24 V RGB LED strips  
- 12/24 V RGBW LED strips

## User Interface

### Inputs
- One (Control) Button:
  - Press and hold for 5 seconds: Enters Access Point mode and activates Bluetooth pairing.
  - Press and hold for 10 seconds: Performs a factory reset.

### Outputs
- LED Indicator (Monochrome):
  - **AP enabled, Wi-Fi disabled**: 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected**: 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network**: Constantly ON  
  - **Cloud enabled but not connected**: 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud**: Constantly ON  
  - **OTA Update in progress**: 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds**: 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds**: 0.25 sec ON / 0.25 sec OFF  

> *Note: States are prioritized from top to bottom. Higher-priority states override lower ones.*

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 42 × 37 × 12 ± 0.5 mm / 1.65 × 1.46 × 0.66 ± 0.02 in |
| Weight | 17 g / 0.60 oz |
| Screw Terminal Max Torque | 0.2 Nm / 1.8 lbin |
| Conductor Cross Section | 0.1 – 1 mm² / 30 – 16 AWG (solid, stranded, bootlace ferrules) |
| Conductor Stripped Length | 6 mm / 0.24 in |
| Mounting | In-wall |
| Shell Material | Plastic |
| Shell Color | Yellow |
| Connectors Color | Green |
| **Environmental** | |
| Ambient Working Temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| **Electrical** | |
| Power Supply | 12/24 VDC |
| Power Consumption | < 1.2 W |
| **Output Circuit Ratings** | |
| Max Control Voltage | 24 VDC |
| Max Control Current | 4 A per channel (10 A total) |
| PWM Frequency | 833 Hz |
| **Sensors & Meters** | |
| Voltmeter Range | 0–24 V |
| Voltmeter Accuracy | ±5% |
| Ammeter Range | 0–10 A |
| Ammeter Accuracy | ±10% |
| Power & Energy Meters | |
| No-Load Threshold | 0.5 VA per channel |
| Internal Temperature Sensor | Yes |
| **Radio** | |
| Wi-Fi Protocol | 802.11 b/g/n |
| RF Band | 2401 – 2495 MHz |
| Max RF Power | < 20 dBm |
| Range | Up to 30 m indoors / 100 ft, up to 50 m outdoors / 160 ft<br>(Depends on local conditions) |
| Bluetooth | |
| Protocol | Bluetooth 4.2 |
| RF Band | 2400 – 2483.5 MHz |
| Max RF Power | < 4 dBm |
| Range | Up to 10 m indoors / 33 ft, up to 30 m outdoors / 100 ft<br>(Depends on local conditions) |
| **Microcontroller Unit (MCU)** | |
| CPU | ESP-Shelly C38F |
| Clock Frequency | 160 MHz |
| RAM | 400 KB |
| Flash | 4 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL Actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

### Wiring in _Lights x 4_ Mode
![Lights x 4 Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus%20RGBW%20PM%20Lights-20240528-132128.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Wiring in _RGBW_ Mode
![RGBW Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus%20RGBW%20PM%20RGBW-20240528-132031.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Wiring in _RGB_ Mode
![RGB Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus%20RGBW%20PM%20RGB-20240528-131813.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Symbol | Meaning |
|-------|--------|
| **+** | 12/24 VDC positive terminal |
| **−** | 12/24 VDC negative terminal |
| **I1, I2, I3, I4** | Switch/button/potentiometer input terminals for light control |
| **R, G, B** | Red, Green, Blue output channels (RGB or RGBW mode) |
| **W** | White output channel (RGBW mode only) |
| **O1, O2, O3, O4** | Light output terminals (used for independent control in Lights x 4 mode) |
| **+ (wire)** | Positive power wire |
| **− (wire)** | Negative power wire |

## Troubleshooting

*(Content pending)*

## Components and APIs

- [Device API Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusRGBWPM)
- [All Shelly Devices & Services](https://shelly-api-docs.shelly.cloud/)

## Compliance and Certification

- [Shelly Plus RGBW PM Multilingual EU Declaration of Conformity (2025-07-21)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20RGBW%20PM%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20RGBW%20PM%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20RGBW%20PM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Previous EU Declaration of Conformity (2024-05-14, Version 45)](https://kb.shelly.cloud/__attachments/392429582/Shelly%20Plus%20RGBW%20PM%20multilingual%20EU%20declaration%20of%20conformity%2045%202024-05-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20RGBW%20PM%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност (Bulgarian)](https://shellyusa.atlassian.net/wiki/spaces/KB/pages/edit-v2/1609695245)

## Installation Guides

*(Content pending)*