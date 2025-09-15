# Shelly Plus 0-10V Dimmer

![](https://kb.shelly.cloud/__attachments/229146742/Shelly%20plus%200-10%20dimmer.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 0-10V Dimmer  
- **Device model:** SNDM-00100WW  
- **Device SSID:** ShellyPlus010V-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1070 / 0x0780 (GAP)  

## Short Description

The Shelly Plus 0-10V Dimmer is a smart dimming controller designed for remote control of 0–10V dimmable drivers via mobile devices, tablets, PCs, or home automation systems. It operates standalone within a local Wi-Fi network or can be managed through cloud-based home automation services.

The device supports remote access, control, and monitoring from any location with internet connectivity, provided it remains connected to a Wi-Fi router and the Internet.

It features an embedded web interface for configuration, real-time monitoring, and adjustment of operational settings.

## Main Features

- **Diverse Driver Integration:** Supports 0–10V signal control for various types of drivers (lights, motors, valves, etc.).
- **Shelly Plus Add-on Compatible:** Supports connection to sensor interfaces on Shelly Plus devices.
- **Switch/Button Input Mode:** Enables flexible input control using wall switches or push buttons.
- **One/Dual Button Dimming Control:** Fully utilizes device functionality with any wall switch setup.
- **Night Mode:** Automatically sets a predefined brightness level during nighttime hours.
- **Min/Max Brightness Adjustment:** Restricts the dimming range for finer control over output brightness.
- **Button Fade Rate:** Adjusts the speed at which brightness changes when holding a button.
- **Transition Duration:** Controls the time required to transition from 0% to 100% brightness.
- **Schedules:**
  - *Basic Schedules:* Weekly routines with adjustable brightness, transition duration, and dimming signal polarity (flip value).
  - *Advanced Schedules:* Year-round detailed scheduling with time adjustments ranging from seconds to months, including brightness, transition duration, and flip value settings.
- **Auto On/Off Timers:** Allows automatic turn-on and turn-off based on timer settings.
- **Local Actions:** Enables creation of automation scenarios within the local Wi-Fi network, including brightness, transition duration, and flip value configurations.
- **Webhooks:** Supports lightweight, event-driven communication for integration with other devices and services.
- **BLE Gateway:** Facilitates seamless communication between BLE and Wi-Fi-enabled devices.
- **Wi-Fi Range Extender:** Repeats and extends Wi-Fi signals to improve network coverage.
- **Scripting:** Enables custom automation logic through user-defined scripts.
- **Compatibility:** Fully compatible with third-party home automation platforms.
- **No Hub Required:** Ready for immediate use locally or remotely via Shelly Smart Control or external systems.

## Main Applications

- Residential  
- Multi-Dwelling Units (MDUs): apartments, condominiums, hotels, etc.  
- Light Commercial: small offices, retail stores, restaurants, gas stations, etc.  
- Government & Municipal Projects  
- Universities & Colleges  
- Agricultural Settings  

## Use Cases

- Control lighting systems using 0–10V dimmable drivers.  
- Regulate fan speed if the motor or inverter supports 0–10V input (web interface displays as light control).  
- Operate valves equipped with 0–10V input (web interface displays as light control).

## Integrations

### Amazon Alexa Supported Capabilities  
Yes  

### Google Smart Home Supported Traits  
Yes  

### Samsung SmartThings Supported Capabilities  
Yes  

## Simplified Internal Schematics

![](https://kb.shelly.cloud/__attachments/229244941/Plus-0-10V-Dimmer-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**  
- Two power supply inputs on screw terminals: **L** (Live) and **N** (Neutral)  

### Outputs

- Two 0–10V outputs on screw terminals: **+** and **−**

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION**: The add-on interface carries high voltage when the device is powered. Handle with care.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Function

- Overheating protection  

## Supported Load Types

- 0–10V signal control for lights, motors, valves, and other compatible drivers  

## User Interface

### Inputs

- One (Control) button:
  - Press and hold for 5 seconds to enable Access Point mode and Bluetooth pairing.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled but not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA Update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> The LED states are prioritized in order listed above. Higher-priority states override lower ones.

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 42 × 37 × 17 ±0.5 mm / 1.65 × 1.46 × 0.66 ±0.02 in |
| Weight | 17 g / 0.60 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.5 – 1.5 mm² / 20 – 16 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 5 – 6 mm / 0.20 – 0.24 in |
| Mounting | In-wall |
| Shell material | Plastic |
| Shell color | Shell: 2716C, Print: Black |

| **Environmental** | |
| Ambient working temperature | −20 °C to 40 °C / −5 °F to 105 °F |
| Humidity | 30% – 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110 – 240 VAC ±10% |
| Power consumption | < 1.2 W |
| Neutral required | No |
| 0–10V control type | Current sinking |

| **Output Circuit Ratings** | |
| Max switching voltage | 10 VDC |
| Max switching power | 0.35 W |
| Max switching current | 35 mA |

| **Sensors & Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| Wi-Fi Protocol | 802.11 b/g/n |
| RF Band | 2401 – 2495 MHz |
| Max RF Power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor), up to 50 m / 160 ft (outdoor)<br>(Depends on environmental conditions) |

| **Bluetooth** | |
| Protocol | Bluetooth 4.2 |
| RF Band | 2400 – 2483.5 MHz |
| Max RF Power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor), up to 30 m / 100 ft (outdoor)<br>(Depends on environmental conditions) |

| **Microcontroller Unit (MCU)** | |
| CPU | ESP32-U4WDH |
| Flash Memory | 4 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, with up to 5 URLs per webhook |
| MQTT Support | Yes |
| Scripting | Yes |

## Basic Wiring Diagrams

![Plus 0-10V Dimmer Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%200_1-10V%20dimmer-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Terminals | Description |
|---------|-------------|
| **+** | 0–10 VDC positive terminal |
| **−** | 0–10 VDC negative terminal |
| **L** | Live (110–240 V) wire or terminal |
| **N** | Neutral wire or terminal |
| **S1** | Switch/button input terminal for light control |
| **S2** | Switch/button input terminal for light control |

## Components and APIs

- [This device API documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus10V)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Plus 0-10V Dimmer Multilingual EU Declaration of Conformity (2025-07-23)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%200-10V%20Dimmer%20multilingual%20EU%20declaration%20of%20conformity%202025-07-23.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus Dimmer 0-10V UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Dimmer%200-10V%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive: Shelly Plus 0-10V Dimmer EU Declaration (2023-10-20)](https://kb.shelly.cloud/__attachments/300515410/Shelly%20Plus%200-10V%20Dimmer%20multilingual%20EU%20declaration%20of%20conformity%2021%202023-10-20.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly Plus 0-10V Dimmer Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%200-10V%20Dimmer%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-plus-0-10v-dimmer-1)

## Installation Guides

×