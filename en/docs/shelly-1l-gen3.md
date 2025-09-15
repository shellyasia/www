# Shelly 1L Gen3

![Shelly 1L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%201L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1L Gen3  
- **Device model:** S3SW-0A1X1EUL  
- **Device SSID:** Shelly1LG3-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1014  

## Short Description

The Shelly 1L Gen3 is a compact smart switch designed for lighting control. A key feature is that it operates without requiring a neutral wire. However, it must be used in conjunction with a Shelly Bypass 1L/2L Gen3 connected in parallel to the load. The device can be controlled via mobile phone, tablet, PC, or integrated into a home automation system.

It functions either standalone on a local Wi-Fi network or connects to cloud-based home automation services. As long as the Shelly 1L Gen3 is connected to a Wi-Fi router and the internet, users can access, control, and monitor it remotely from anywhere.

Designed for space-constrained environments, the Shelly 1L Gen3 fits neatly into standard electrical wall boxes and can be discreetly installed behind light switches. It includes an embedded Web Interface for easy monitoring, control, and configuration of settings.

The device is Matter-ready, with this functionality available via firmware update.

## Main Features

- **Perfect for Retrofitting:** No neutral wire required. Power and control are achieved using only a live wire—no need to connect a neutral.
- **Minimum Load Support:** Requires a Shelly Bypass 1L/2L Gen3 to be installed alongside the light, enabling control of bulbs over 5W.
- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network, allowing remote control via the Shelly mobile app or integration with other smart home platforms.
- **Remote Control:** Control connected devices or appliances from anywhere with an internet connection using the Shelly app on smartphone or tablet.
- **Voice Control:** Compatible with Amazon Alexa and Google Assistant for voice-activated control.
- **Scheduling and Automation:** Supports timers and custom routines. For example, schedule lights to turn on/off at specific times.
- **Compatibility:**
  - Designed and tested for compatibility with a wide range of lighting types.
  - Operates across a broad voltage range: 220–240 VAC.
- **Compact Design:** Small form factor allows installation in standard wall boxes or behind switches without taking up extra space.
- **Overheating Protection:** Equipped with an internal temperature sensor to prevent overheating.
- **Local and Remote Access:** Control devices both locally (on same Wi-Fi) and remotely (over internet).
- **OTA Updates:** Receives over-the-air (OTA) firmware updates for improved features and security.
- **Smart Home Ecosystem Integration:** Compatible with platforms such as MQTT, Home Assistant, and others, making it versatile for diverse smart home setups.
- **New Features vs. Older Shelly 1L:** Includes modern capabilities like scripting support, HTTPS, MQTTS, inbound and outbound web sockets.

## Main Applications

- Residential  
- Multi-Dwelling Units (MDUs): Apartments, condominiums, hotels  
- Light Commercial: Small offices, retail stores, restaurants, gas stations  
- Government/Municipal  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities
- Toggle Controller

### Google Smart Home Supported Traits
- On/Off

### Samsung SmartThings Supported Capabilities
- Switch

## Simplified Internal Schematics

![1L-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/1L-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 1 switch/button input on screw terminal: **S**  
- 1 power supply input on screw terminal: **L**

### Outputs
- 1 switch/button signal output on screw terminal: **Sx**  
- 1 relay output on screw terminal: **O**

## Connectivity
- Wi-Fi  
- Bluetooth  

## Safety Function
- Overheating protection

## Supported Load Types
- Incandescent lights*  
- LED lights*  

\*Note: Excludes low-voltage lights requiring step-down transformers.

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds: Enables device access point and Bluetooth.
  - Press and hold for 10 seconds: Factory reset.

### Outputs
- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA (Over-the-Air Update):** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> *Note: States are prioritized from top to bottom. Each subsequent state overrides the previous one.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 24 g / 0.85 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | In-wall |
| Shell material | Plastic |
| Shell color | Cyan |
| Terminal color | Black |
| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Storage temperature | 10 °C to 40 °C |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 220–240 V~ 50 Hz (Shelly Bypass required) |
| Shelly Bypass included | Yes |
| Power consumption | < 1.2 W |
| Neutral not needed | Yes (Shelly Bypass required for load at O) |
| Min. load without neutral and without Bypass | Not applicable (Bypass required for all LED loads). Incandescent lights do not require Bypass. |
| External protection | 10 A, tripping characteristic B or C; 6 kA interrupting rating; Energy limiting class 3 |
| **Output circuits ratings** | |
| Max. switching voltage | 240 V~ 50 Hz |
| Max. switching power | 200 W |
| **Sensors, meters** | |
| Internal temperature sensor | Yes |
| **Radio** | |
| Wi-Fi protocol | 802.11 b/g/n |
| RF band | 2401 – 2495 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors; up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors; up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Clock frequency | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **Firmware capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, with 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagram

![1L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/1L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **L**: Live (220–240 V~) terminal  
- **O**: Load circuit output terminal  
- **S1, S2**: Switch input terminals  
- **Sx**: Switch signal output terminal  

**Wires**  
- **L**: Live (220–240 V~) wire  
- **N**: Neutral wire  

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

...

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1LG3)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance and Certification

- [Shelly 1L Gen3 multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%201L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1L Gen3 UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%201L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Compliance archive: Shelly 1L Gen3 multilingual EU Declaration of Conformity 82 09.04.2025.pdf](https://kb.shelly.cloud/__attachments/293208480/Shelly%201L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2082%2009.04.2025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1L Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%201L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-1l-gen3-1)

## Installation Guides

×