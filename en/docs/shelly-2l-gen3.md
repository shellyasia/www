# Shelly 2L Gen3

![Shelly 2L Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202L%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2L Gen3  
- **Device model:** S3SW-0A2X4EUL  
- **Device SSID:** Shelly2LG3-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1013  

## Short Description

The Shelly 2L Gen3 is a compact, two-channel smart switch designed for precise lighting control. A key feature is that it operates without requiring a neutral wire. However, it must be used in conjunction with a Shelly Bypass 1L/2L Gen3 connected in parallel to the load at Channel 1. The device enables seamless control of lighting setups via smartphone, tablet, PC, or integrated home automation systems.

It can operate standalone on a local Wi-Fi network or integrate with cloud-based home automation services. As long as the device remains connected to a Wi-Fi router and the internet, users can access, control, and monitor their lighting from virtually anywhere.

Designed for space-constrained environments, the Shelly 2L Gen3 fits neatly into standard electrical wall boxes, behind light switches, or in tight spaces. Its embedded Web Interface allows users to monitor, control, and fine-tune device settings easily.

The device is Matter-ready and can gain full Matter compatibility through a firmware update.

## Main Features

- **Perfect for Retrofitting!** No neutral wire required—power and control lights or appliances using only a live wire.
- **Dual Channels!** Control two separate lighting circuits independently.
- **Low Minimum Load:** Requires a Shelly Bypass 1L/2L Gen3 for use with loads below 5W, enabling control of bulbs greater than 5W.
- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote control via the Shelly app or other smart home platforms.
- **Remote Control:** Control connected devices from anywhere with an internet connection using the Shelly mobile app.
- **Voice Control:** Compatible with Amazon Alexa and Google Assistant for voice-controlled operation.
- **Scheduling & Automation:** Supports timers and custom routines (e.g., turn lights on/off at specific times).
- **Compatibility:**
  - Designed and tested for broad compatibility with various lighting types.
  - Operates across a wide voltage range: 220–240 VAC.
- **Compact Design:** Fits comfortably in standard electrical boxes or behind switches, minimizing space usage.
- **Overheating Protection:** Equipped with an internal temperature sensor for enhanced safety.
- **Local & Remote Access:** Control devices both locally (on the same network) and remotely (via the cloud).
- **OTA Updates:** Receives over-the-air firmware updates to improve functionality and security.
- **Smart Home Ecosystem Integration:** Compatible with MQTT, Home Assistant, and other platforms, making it ideal for building flexible smart homes.

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
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

![2L-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/2L-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- Two switch/button inputs on screw terminals: S1 and S2  
- One power supply input on screw terminal: L  

### Outputs
- One switch/button signal output on screw terminal: Sx  
- Two relay outputs on screw terminals: O1 and O2  

## Connectivity
- Wi-Fi  
- Bluetooth  

## Safety Function
- Overheating protection  

## Supported Load Types

### Output 1:
- Incandescent lights  
- LED lights  
> *Note: Excludes lights requiring step-down transformers for lower-voltage operation*

### Output 2:
- Incandescent lights  
- LED lights  
- Fluorescent lights  
- Fans  

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth connection.
  - Press and hold for 10 seconds: Performs factory reset.

### Outputs
- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA (Over-the-Air Update):** ½ sec ON / ½ sec OFF  
  - **Button pressed and held for 5 seconds:** ½ sec ON / ½ sec OFF  
  - **Button pressed and held for 10 seconds:** ¼ sec ON / ¼ sec OFF  

> *Note: States are listed in order of priority. Each subsequent state overrides the previous one.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 28 g / 1 oz |
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
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 220–240 V~, 50 Hz (Shelly Bypass required for O1 load) |
| Shelly Bypass included | Yes |
| Power consumption | < 1.2 W |
| Neutral not needed | Yes (Shelly Bypass required for O1 load) |
| Min. load without neutral and without Bypass | Not applicable — Shelly Bypass for 1L/2L is required for O1 load with all LED lights. Bypass not required for incandescent lights. |
| **Output circuits ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching power | |
| &nbsp;&nbsp;• Through O1 | 200 W |
| &nbsp;&nbsp;• Through O2 | 700 W |
| **Sensors, meters** | |
| Internal temperature sensor | Yes |
| **Radio** | |
| Wi-Fi protocol | 802.11 b/g/n |
| RF band | 2401 – 2495 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Clock frequency | 160 MHz |
| RAM | 512 KB |
| Flash | 8 MB |
| **Firmware capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagram

![2L Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/2L%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Terminals | Wires |
|---------|------|
| **S1** | Switch input terminal 1 |
| **L** | Live (220–240 V~) wire |
| **S2** | Switch input terminal 2 |
| **N** | Neutral wire |
| **Sx** | Switch signal output terminal |
| **L** | Live (220–240 V~) terminal |
| **O1** | Load circuit output terminal 1 |
| **O2** | Load circuit output terminal 2 |

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

...

## Components and APIs

- [This device API reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2LG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 2L Gen3 multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2L Gen3 UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202L%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Shelly 2L Gen3 multilingual EU Declaration of Conformity 83 09.04.02025.pdf](https://kb.shelly.cloud/__attachments/293208601/Shelly%202L%20Gen3%20multilingual%20EU%20Declaration%20of%20Conformity%2083%2009.04.02025.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 2L Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202L%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-2l-gen3-1)

## Installation Guides

×