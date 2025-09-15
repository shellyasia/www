# Shelly 1 Mini Gen4

![Shelly 1 Mini Gen4.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Mini%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1 Mini Gen4  
- **Device model:** S4SW-001X8EU  
- **Device SSID:** Shelly1MiniG4-XXXXXXXXXXXX  
- **BLE model ID:** 0x1030  

## Short Description

The Shelly 1 Mini Gen4 is a compact smart switch with potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services. This device is an upgraded version of the Shelly 1 Mini Gen3, featuring a more advanced processor and Zigbee connectivity.

With internet access, users can monitor, control, and manage the device from anywhere, provided it remains connected to a Wi-Fi router. The device is designed for retrofit installation in standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

It includes an embedded Web Interface for configuration, monitoring, and settings adjustment. Equipped with a multi-protocol wireless MCU, it supports both Zigbee and Bluetooth connectivity, ensuring secure and reliable communication. The device is also compatible with Matter.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote monitoring and control via mobile apps or compatible devices.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Bluetooth Connectivity:** BLE gateway support simplifies setup and device inclusion.
- **User-Friendly Interface:** Includes a physical reset button for manual operations.
- **Improved Processor:** Enhanced performance with upgraded hardware and Zigbee integration.
- **Zigbee Connectivity:** Enables seamless integration into Zigbee networks during setup and operation.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n/ax), Bluetooth 5.0, and Zigbee with defined indoor and outdoor range capabilities.
- **Dry Contact Relay:** Suitable for switching low-voltage devices safely.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly devices to the broader Shelly ecosystem by forwarding signals to the cloud or local non-BLE devices.
- **Zigbee Range Extender:** Boosts and extends the reach of your Zigbee network by receiving, strengthening, and retransmitting signals.
- **Wi-Fi Range Extender:** Expands Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal over a wider area.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Supports third-party systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **Scheduling:** Allows complex time-based automation using customizable date, time, weekday, hour, minute, and second parameters.
- **Virtual Components:** [Virtual Dynamic Components Documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP Support:** [KNX Integration Guide](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## Use Cases

- **Remote Appliance Control:** Turn electrical devices on or off remotely using a smartphone, tablet, PC, or home automation platform.
- **Internet-Connected Convenience:** Access and manage the device from any location with internet connectivity, as long as it’s connected to a Wi-Fi network.
- **Space-Efficient Retrofitting:** Easily install in standard electrical boxes, behind outlets, switches, or tight spaces.
- **Home Automation:** Automate appliance power cycles for enhanced comfort and energy efficiency.

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
- 1 potential-free relay input on screw terminal  
- 2 power supply inputs on screw terminals: N (Neutral) and L (Live)

### Outputs

- 1 potential-free relay output on screw terminal

## Connectivity

- Wi-Fi  
- Bluetooth  
- Zigbee  

## Safety Functions

- Overheating protection

## Supported Load Types

- Resistive (incandescent bulbs, heating elements)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (LED drivers, transformers, fans, refrigerators, air conditioners)

## User Interface

### Inputs

- **One Control Button**  
  - Press and hold for 5 seconds: Enters Access Point mode and enables Bluetooth pairing.  
  - Press and hold for 10 seconds: Performs factory reset.  
  - Press 5 times consecutively: Switches firmware from Matter to Zigbee mode.  
  - Press 3 times consecutively: Enters Zigbee inclusion mode (active for 2 minutes; visible in the Zigbee hub).

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

> *Note: States are evaluated in order from top to bottom. Each higher-priority state overrides the previous one.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 in |
| Weight | 19 ±1 g / 0.65 ±0.04 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Blue (C-95%; M-53%; Y-0%; K-0%) |
| Connectors color | Grey (Mouse Grey) |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110 – 240 V~ |
| Relay | Dry, NO contact, 1-pole, µ contact |
| Power consumption | < 1.2 W |
| External protection | Tripping characteristic B or C, max. 10 A rated current, min. 6 kA interrupting rating, energy limiting class 3 |

| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~ / 30 V⎓ |
| Max. switching current | 8 A / 240 V~ / 5 A / 30 V⎓ |
| Max. output power | 2000 W / 240 V~ / 150 W / 30 V⎓ |
| Voltage protection / cutoff | No |
| Current protection / cutoff | No |
| Max power protection / cutoff | No |

| **Sensors & Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor), up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |

| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor), up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |

| **Zigbee** | |
| Protocol | 802.15.4 |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft (indoor), up to 300 m / 984 ft (outdoor)<br>(Depends on local conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Plus-1-Mini-Wiring-Diagram-20240528-142625.png](https://kb.shelly.cloud/__attachments/243531777/Plus-1-Mini-wiring-diagram-20240528-142625.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **SW**: Switch (controlling O) input terminal  
- **L**: Live (110–240 V~) wire  
- **O**: Load circuit output terminal  
- **N**: Neutral wire  
- **I**: Load circuit input terminal  
- **L**: Live (110–240 V) terminal  
- **N**: Neutral terminal  

**Wires**  
- Standard AC wiring with proper polarity and insulation

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 1 Mini Gen4 Web Interface Guide](../knowledge-base/shelly-1-mini-gen4-web-interface-guide)

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyMini1G4)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1 Mini Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Mini Gen4 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide%2077%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1 Mini Gen4 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Mini%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-mini-gen4-1)

## Installation Guides

- [Installation Guide for Shelly 1 Mini Gen4](../knowledge-base/installation-guide-shelly-1-mini-gen4)