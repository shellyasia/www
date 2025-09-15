# Shelly 1PM Mini Gen3

![](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Mini%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Mini Gen3  
- **Device model:** S3SW-001P8EU  
- **Device SSID:** Shelly1PMMiniG3-XXXXXX  
- **BLE model ID:** 0x1016  

## Short Description

The Shelly 1PM Mini Gen3 is a compact smart switch with built-in power measurement, enabling remote control of electrical appliances via mobile phone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or integrates with cloud-based home automation services. This device is an enhanced version of the Shelly Plus 1PM Mini, featuring a more advanced processor and increased memory for improved performance.

With internet connectivity, users can access, control, and monitor the device remotely from anywhere. The unit is designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

It includes an embedded web interface for configuration, monitoring, and real-time control.

## Main Features

- **Smart Switch with Power Measurement:** Functions as a smart switch with real-time power consumption monitoring for connected devices.
- **Compact Design:** Small form factor ideal for installations in tight spaces such as standard wall boxes, behind outlets, or switches.
- **Remote Control:** Supports remote operation via smartphone, tablet, PC, or home automation platforms.
- **Local and Cloud Operation:** Works independently on a local network and can be managed through cloud-based services.
- **Enhanced Processor & Memory:** Upgraded hardware ensures faster response times and better multitasking capabilities.
- **Remote Access:** Full remote access and monitoring possible from any location with internet access, provided the device is connected to Wi-Fi.
- **Embedded Web Interface:** Built-in web interface for intuitive device management and settings adjustment.
- **BLE Gateway:** Acts as a bridge between Bluetooth-enabled Shelly devices and the broader Shelly ecosystem—receives BLE signals and forwards them to the cloud or non-BLE devices locally.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal across a wider area.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Compatible with third-party home systems using HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Integration:** Supports KNXnet/IP communication.
- **Advanced Scheduling:** Enables complex automation rules based on date, time of day, weekdays, hours, minutes, and seconds.

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, and other devices remotely.
- **Power Monitoring:** Track real-time energy usage to identify inefficiencies and optimize consumption.
- **Home Automation Integration:** Seamlessly integrate into smart home ecosystems to create custom scenes and schedules.
- **Energy Efficiency Optimization:** Use power data to detect high-consumption devices and make informed decisions to reduce energy waste.
- **Remote Monitoring:** Check and manage connected devices while away from home using internet-connected access.
- **Space-Constrained Installations:** Ideal for retrofits where physical space is limited.

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Simplified Internal Schematics

![Shelly Plus 1PM Mini Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- One switch/button input on screw terminal  
- Two power supply inputs on screw terminals: **N** (Neutral) and **L** (Live)

### Outputs

- One relay output with power measurement on a screw terminal

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating elements)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One control button:
  - Press and hold for 5 seconds: Enter device access point mode and enable Bluetooth pairing.
  - Press and hold for 10 seconds: Factory reset the device.

### Outputs

- Monochrome LED indicator with the following states:

| State | LED Behavior |
|------|--------------|
| AP enabled, Wi-Fi disabled | 1 sec ON / 1 sec OFF |
| Wi-Fi enabled, not connected | 1 sec ON / 3 sec OFF |
| Connected to Wi-Fi network | Constantly ON |
| Cloud enabled but not connected | 1 sec ON / 5 sec OFF |
| Connected to Shelly Cloud | Constantly ON |
| OTA (Over-the-Air Update) in progress | 0.5 sec ON / 0.5 sec OFF |
| Button pressed and held for 5 seconds | 0.5 sec ON / 0.5 sec OFF |
| Button pressed and held for 10 seconds | 0.25 sec ON / 0.25 sec OFF |

> **Note:** States are prioritized from top to bottom. Each higher-priority state overrides the previous one.

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 in |
| Weight | 18 ±1 g / 0.63 ±0.04 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross-section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Red: C-3%; M-100%; Y-70%; K-12% |
| Terminal color | Black |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% – 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110 – 240 VAC |
| Relay type | NO contact, 1-pole, micro-contact |
| Power consumption | < 1.2 W |
| External protection | Tripping characteristic B or C, ≤10 A rated current, ≥6 kA interrupting rating, energy limiting class 3 |

| **Output Circuit Ratings** | |
| Max. switching voltage | 240 VAC |
| Max. switching current | 8 A at 240 VAC |
| Max. switching power | 2000 W |
| Power measurement | Yes |
| Voltage protection / cutoff | Yes |
| Current protection / cutoff | Yes |
| Max. power protection / cutoff | Yes |

| **Sensors & Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n |
| RF band | 2401 – 2495 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 100 ft, up to 50 m outdoors / 160 ft<br>(Depends on environmental conditions) |

| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 33 ft, up to 30 m outdoors / 100 ft<br>(Depends on environmental conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, with up to 5 URLs per webhook |
| Scripting | Yes |
| MQTT | Yes |
| UDP | Yes |
| Advanced schedules | Yes |
| KVS (Key-Value Store) | Yes |

## Basic Wiring Diagrams

![Plus-1PM-Mini Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus-1PM-Mini-wiring-diagram-20240528-142356.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**
- **SW**: Switch input terminal (controls output O)
- **L**: Live wire (110–240 VAC)
- **O**: Output terminal for load circuit
- **N**: Neutral wire

**Wires**
- **L**: Live terminal (110–240 V)
- **N**: Neutral terminal

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 1PM Mini Gen3 Web Interface Guide](../knowledge-base/shelly-1pm-mini-gen3-web-interface-guide)

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyMini1PMG3)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Mini Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Mini 1PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Mini%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Mini 1PM Gen3 x2 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Mini%201PM%20Gen3%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1PM Mini Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Shelly 1PM Mini Gen3 Multilingual EU Declaration of Conformity (2023-12-13)](https://kb.shelly.cloud/__attachments/340328512/Shelly%201PM%20Mini%20Gen3%20nultilingual%20EU%20declaration%20of%20conformity%2024%202023-12-13.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1PM Mini Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Mini%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1pm-mini-gen3-1)

## Installation Guides

- [Installation Guide for Shelly 1PM Mini Gen3](../knowledge-base/installation-guide-shelly-1pm-mini-gen3)