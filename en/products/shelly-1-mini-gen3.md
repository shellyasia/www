# Shelly 1 Mini Gen3

![](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Mini%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device Name:** Shelly 1 Mini Gen3  
- **Device Model:** S3SW-001X8EU  
- **Device SSID:** Shelly1MiniG3-XXXXXX  
- **BLE Model ID:** 0x1015  

## Short Description

The Shelly 1 Mini Gen3 is a compact smart switch with potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services. This model is an enhanced version of the Shelly Plus 1 Mini, featuring a more advanced processor and increased memory.

The device can be remotely accessed, controlled, and monitored from anywhere with internet connectivity, provided it remains connected to a Wi-Fi router and the Internet.

It is designed for retrofit installation in standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The Shelly 1 Mini Gen3 includes an embedded Web Interface for monitoring, control, and configuration.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote monitoring and control.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Bluetooth Connectivity:** Supports Bluetooth and BLE gateway functionality, useful during setup and device pairing.
- **User-Friendly Interface:** Includes a reset button for manual configuration and troubleshooting.
- **Improved Processor & Memory:** Enhanced performance with upgraded hardware.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with defined indoor and outdoor range capabilities.
- **Dry Contact Relay:** Enables switching of low-voltage devices safely.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem—receives Bluetooth signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender:** Extends your Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal over a wider area.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Supports HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP for integration with third-party systems.
- **Advanced Scheduling:** Schedule complex operations based on date, time of day, weekdays, hours, minutes, and seconds.

## Use Cases

- **Remote Appliance Control:** Turn devices on/off using mobile apps, tablets, PCs, or home automation platforms.
- **Internet-Connected Convenience:** Access and manage devices from any location with internet access.
- **Space-Efficient Retrofitting:** Easily installed in tight spaces such as standard wall boxes, behind outlets, or switches.
- **Home Automation:** Automate appliance power management for smarter, more convenient living.

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Simplified Internal Schematics

![Shelly Mini 1 Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal  
- 1 potential-free contact relay input on screw terminal  
- 2 power supply inputs on screw terminals: N (Neutral) and L (Live)

### Outputs

- 1 potential-free contact relay output on screw terminal

## Connectivity

- Wi-Fi  
- Bluetooth

## Safety Function

- Overheating Protection

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (LED drivers, transformers, fans, refrigerators, air conditioners)

## User Interface

### Inputs

- **One Control Button**  
  - Press and hold for 5 seconds: Enter Access Point mode and enable Bluetooth connection  
  - Press and hold for 10 seconds: Factory reset the device

### Outputs

- **Monochrome LED Indicator**  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air) update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note:* The LED states are prioritized from top to bottom. Each subsequent state overrides the previous one.

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 in |
| Weight | 19 ±1 g / 0.65 ±0.04 oz |
| Screw Terminal Max Torque | 0.4 Nm / 3.5 lbin |
| Conductor Cross Section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor Stripped Length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell Material | Plastic |
| Shell Color | Blue: C-95%; M-53%; Y-0%; K-0% |
| Terminal Color | Black |

| **Environmental** | |
| Ambient Working Temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max Altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power Supply | 110–240 VAC |
| Relay Type | Dry, NO contact, 1-pole, µ contact |
| Power Consumption | < 1.2 W |
| External Protection | Tripping characteristic B or C; max 10 A rated current; min. 6 kA interrupting rating; energy limiting class 3 |

| **Output Circuit Ratings** | |
| Max Switching Voltage | 240 VAC / 30 VDC |
| Max Switching Current | 8 A / 240 VAC; 5 A / 30 VDC |
| Max Output Power | 2000 W / 240 VAC; 150 W / 30 VDC |
| Voltage Protection / Cutoff | No |
| Current Protection / Cutoff | No |
| Max Power Protection / Cutoff | No |

| **Sensors & Meters** | |
| Internal Temperature Sensor | Yes |

| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n |
| RF Band | 2401 – 2495 MHz |
| Max RF Power | < 20 dBm |
| Range | Up to 30 m (100 ft) indoors; up to 50 m (160 ft) outdoors<br>(Depends on local conditions) |

| **Bluetooth** | |
| Protocol | 4.2 |
| RF Band | 2400 – 2483.5 MHz |
| Max RF Power | < 4 dBm |
| Range | Up to 10 m (33 ft) indoors; up to 30 m (100 ft) outdoors<br>(Depends on local conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash Memory | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL Actions) | 20 total, up to 5 URLs per webhook |
| Scripting | Yes |
| MQTT | Yes |
| UDP | Yes |
| Advanced Schedules | Yes |
| KVS (Key-Value Store) | Yes |

## Basic Wiring Diagrams

![Plus-1-Mini-Wiring-Diagram-20240528-142625](https://kb.shelly.cloud/__attachments/243531777/Plus-1-Mini-wiring-diagram-20240528-142625.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **SW**: Switch (controlling O) input terminal  
- **L**: Live (110–240 VAC) wire  
- **O**: Load circuit output terminal  
- **N**: Neutral wire  
- **I**: Load circuit input terminal  
- **L**: Live (110–240 V) terminal  
- **N**: Neutral terminal  

**Wires**  
- Refer to diagram for correct routing and labeling

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 1 Mini Gen3 Web Interface Guide](../knowledge-base/shelly-1-mini-gen3-web-interface-guide)

## Components and APIs

- [This Device API Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyMini1G3)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1 Mini Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 x2 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Mini Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**  
- [Shelly 1 Mini Gen3 Multilingual EU Declaration of Conformity (2023-12-13)](https://kb.shelly.cloud/__attachments/340328450/Shelly%201%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2023%202023-12-13.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1 Mini Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Mini%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-mini-gen3-1)

## Installation Guides

- [Installation Guide for Shelly 1 Mini Gen3](../knowledge-base/installation-guide-shelly-1-mini-gen3)