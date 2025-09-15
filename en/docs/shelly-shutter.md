# Shelly Shutter

![Shelly Shutter Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Shutter%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Shutter  
- **Device model:** S3SH-0A2P4EU  
- **Device SSID:** ShellyShutter-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1039  

## Short Description

The Shelly Shutter is a compact cover controller with integrated power measurement, enabling remote control of shutters, shades, and blinds via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or can be managed through cloud-based home automation services. The device supports Venetian blinds.

Remote access, control, and monitoring are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

It is designed for retrofitting into standard electrical wall boxes, behind switches for covers.

The device includes an embedded web interface for real-time monitoring, configuration, and control.

## Main Features

- **Smart Cover Controller with Power Measurement:** Controls motorized covers while measuring energy consumption for insight into usage patterns.
- **Compact Design:** Small form factor suitable for installation in standard electrical wall boxes, behind sockets, light switches, or other confined spaces.
- **Remote Control:** Supports remote operation via mobile devices, tablets, PCs, or home automation platforms.
- **Local and Cloud Operation:** Functions independently on a local network and integrates with cloud-based automation services.
- **Improved Processor and Memory:** Enhanced hardware for better performance and responsiveness.
- **Remote Access:** Full remote access and control from anywhere with internet access.
- **Embedded Web Interface:** Built-in web interface for configuration, monitoring, and control.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly BLU devices to the broader Shelly ecosystem—receives Bluetooth signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, boosting, and retransmitting the signal across a wider area.
- **Scripting:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Support:** Compatible with third-party home systems via HTTP API, MQTT(s), HTTP/HTTPS Webhooks, and UDP.
- **KNXnet/IP Support:** Enables integration with KNX networks. See documentation: [KNX Documentation](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **Schedules:** Create complex time-based automation rules with support for date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Use dynamic virtual components for advanced automation logic. Learn more: [Virtual Components Guide](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and similar devices. Measures connected load’s power consumption. Requires motors with electronic or mechanical limit switches properly configured before connection.

## Use Cases

- **Blinds Control:** Automate and remotely manage shutters, blinds, and awnings.
- **Power Monitoring:** Track real-time power usage of connected motorized devices to optimize energy efficiency.
- **Home Automation Integration:** Seamlessly integrate into smart home ecosystems to create custom scenes and schedules.
- **Energy Efficiency Optimization:** Identify high-energy-consuming devices and adjust behavior accordingly.
- **Remote Monitoring:** Monitor and control devices from anywhere using internet connectivity.

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government / Municipal  
- University / College  

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**  
- Three power supply inputs on screw terminals: **1 N (+)** and **2 L (Ʇ)**

### Outputs

- Two relay outputs with power measurement on screw terminals

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during installation and maintenance.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection  
- Safety switch  

## Supported Load Types

- Inductive loads: Bi-directional AC motors for roller shutters, blinds (including Venetian blinds), and awnings with compensated power factor

## User Interface

### Inputs

- One (Control) button:
  - Press once briefly after pairing mode to connect with another device (e.g., Shelly BLU Button).
  - Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA Update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> ⚠ The LED states are prioritized from top to bottom. Each higher-priority state overrides the previous one.

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H x W x D) | 37 × 42 × 16 ± 0.5 mm / 1.46 × 1.65 × 0.63 ± 0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross-section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Black |
| Terminals color | Black |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~ 50/60 Hz |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, ≤16 A rated current, ≥6 kA interrupting rating, Energy limiting class 3 |
| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current (AC) | 4 A (for inductive loads with compensated power factor) |
| Supported motor type | Single-phase AC motors |
| Required limit switches | Electronic or Mechanical |
| **Sensors & Meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | IEEE 802.11 b/g/n |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | Bluetooth 4.2 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, up to 5 URLs per webhook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Shelly Shutter Gen3 - AC Cover Mode Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Shelly%20Shutter%20Gen3-AC%20cover%20mode-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Symbol | Description |
|--------|-------------|
| **O1, O2** | Load circuit output terminals |
| **N** | Neutral wire and terminal |
| **L** | Live wire (110–240 V~) and terminal |
| **S1, S2** | Switch input terminals |

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

...

## Compliance and Certification

### Compliance Documents

- [Shelly Shutter Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Shutter%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Shutter UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Shutter%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Compliance Archive – EU Declaration (2025-03-04)](https://kb.shelly.cloud/__attachments/1238630410/Shelly%20Shutter%20multilingual%20EU%20declaration%20of%20conformity%2074%202025-03-04.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Components and APIs

- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly2PMG4)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Installation Guides

- [Pairing Shelly Shutter with Shelly BLU Button Tough 1](https://kb.shelly.cloud/knowledge-base/pairing-shelly-shutter-with-blu-button-tough-1)  
- [Pairing Shelly Shutter with Shelly BLU RC Button 4](https://kb.shelly.cloud/knowledge-base/pairing-shelly-shutter-with-shelly-blu-rc-button-4)  
- [Ръководство за сдвояване на Shelly Shutter с Shelly BLU Button Tough 1](../knowledge-base/shelly-shutter-shelly-blu-button-tough-1)  
- [Ръководство за сдвояване на Shelly Shutter с Shelly BLU RC Button 4](../knowledge-base/shelly-shutter-shelly-blu-rc-button-4)

## Printed User Guide

- [Shelly Shutter Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Shutter%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-shutter-1)