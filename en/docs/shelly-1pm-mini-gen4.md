# Shelly 1PM Mini Gen4

![Shelly 1PM Mini Gen4.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Mini%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Mini Gen4  
- **Device model:** S4SW-001P8EU  
- **Device SSID:** Shelly1PMMiniG4-XXXXXXXXXXXX  
- **BLE model ID:** 0x1031  

## Short Description

The Shelly 1PM Mini Gen4 is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates either standalone on a local Wi-Fi network or through cloud-based home automation services. This device is an enhanced version of the Shelly 1PM Mini Gen3, featuring a more advanced processor and added Zigbee connectivity.

Remote access, control, and monitoring are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power sockets, light switches, or other space-constrained locations, it offers flexible installation options.

The device includes an embedded web interface for configuration, monitoring, and management. Its multi-protocol wireless MCU supports both Zigbee and Bluetooth, ensuring secure and reliable connectivity. The Shelly 1PM Mini Gen4 is also Matter-compatible.

## Main Features

- **Smart Switch with Power Measurement:** Functions as a smart switch with real-time power consumption monitoring for connected devices.
- **Compact Design:** Small form factor ideal for installations in confined spaces such as standard electrical wall boxes, behind outlets, or switches.
- **Remote Control:** Enables remote operation via mobile apps, web interfaces, or home automation platforms.
- **Local and Cloud Operation:** Supports standalone local control and integration with cloud-based automation services.
- **Zigbee Connectivity:** Available for device inclusion during setup and integration into larger Zigbee networks.
- **Improved Processor:** Enhanced performance thanks to upgraded hardware and support for Zigbee.
- **Remote Access:** Full remote access, control, and monitoring over the internet when connected to Wi-Fi.
- **Embedded Web Interface:** Built-in web interface for easy configuration, status viewing, and settings adjustment.
- **BLE Gateway:** Bridges Shelly BLU devices to the broader Shelly ecosystem by receiving Bluetooth signals and forwarding them to the cloud or local devices.
- **Zigbee Range Extender:** Expands the reach of your Zigbee network by receiving, amplifying, and retransmitting signals over wider areas.
- **Wi-Fi Range Extender:** Boosts Wi-Fi coverage by receiving, strengthening, and rebroadcasting the signal across extended distances.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Compatible with third-party home systems using HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Integrates via **KNXnet/IP** protocol.  
  [KNX Documentation](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **Schedules:** Supports complex scheduling based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Create virtual devices for advanced automation scenarios.  
  [Virtual Components Guide](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNXnet/IP Integration:** Full support for KNXnet/IP communication.  
  [KNX Integration Reference](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, and other electrical devices remotely.
- **Power Monitoring:** Track real-time energy usage of connected appliances to optimize consumption.
- **Home Automation Integration:** Incorporate into custom scenes, routines, and automated workflows within smart home systems.
- **Energy Efficiency Optimization:** Identify high-energy-consuming devices and take action to improve overall efficiency.
- **Remote Monitoring & Control:** Manage and monitor devices while away from home using internet-connected access.
- **Space-Constrained Installations:** Ideal for tight spaces due to its compact size and retrofit-friendly design.

## Integrations

### Amazon Alexa
Supported capabilities: Yes

### Google Smart Home
Supported traits: Yes

### Samsung SmartThings
Supported capabilities: Yes

## Simplified Internal Schematics

![Shelly Plus 1PM Mini internal schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-Mini-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal  
- 2 power supply inputs on screw terminals: N (Neutral) and L (Live)

### Outputs

- 1 relay output with power measurement on screw terminal (O – Load Output)

## Connectivity

- Wi-Fi  
- Bluetooth (BLE 5.0)  
- Zigbee (802.15.4)

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection

## Supported Load Types

- Resistive (e.g., incandescent bulbs, heating elements)  
- Capacitive (e.g., capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (e.g., LED drivers, transformers, fans, refrigerators, air conditioners)

## User Interface

### Inputs

- One physical (Control) button:

  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth pairing mode.  
  - Press and hold for 10 seconds: Performs factory reset.  
  - Press 5 times consecutively: Switches firmware from Matter (default) to Zigbee mode.  
  - Press 3 times consecutively: Enters Zigbee inclusion mode (active for 2 minutes). The device will appear in your Zigbee hub’s discovery list.

### Outputs

- Monochrome LED indicator with the following states:

  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled but not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled but not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> **Note:** LED states are evaluated in order of priority — later states override earlier ones.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 29 × 34 × 16 ±0.5 mm / 1.34 × 1.11 × 0.63 ±0.02 inch |
| Weight | 18 ±1 g / 0.63 ±0.04 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Red, C-3%; M-100%; Y-70%; K-12% |
| Connectors color | Grey (Mouse Grey) |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110 - 240 V~ |
| Relay type | NO contact, 1-pole, µ contact |
| External protection | Tripping characteristic B or C, max. 10 A rated current, min. 6 kA interrupting rating, energy limiting class 3 |

| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current | 8 A at 240 V~ |
| Power measurement | Yes |
| Voltage protection / cutoff | Yes |
| Current protection / cutoff | Yes |
| Max power protection / cutoff | Yes |

| **Sensors, Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |

| **Bluetooth** | |
| Protocol | BLE 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |

| **Zigbee** | |
| Protocol | 802.15.4 |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m indoors / 300 m outdoors (varies by environment) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, up to 5 URLs per webhook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Plus-1PM-Mini-wiring-diagram-20240528-142356.png](https://kb.shelly.cloud/__attachments/243531777/Plus-1PM-Mini-wiring-diagram-20240528-142356.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**

- **SW**: Switch input terminal (controls the output O)  
- **L**: Live wire (110–240 V~)  
- **O**: Load circuit output terminal  
- **N**: Neutral wire  

**Wires**

- **L**: Live terminal (110–240 V)  
- **N**: Neutral terminal  

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 1PM Mini Gen4 Web Interface Guide](../knowledge-base/shelly-1pm-mini-gen4-web-interface-guide)

## Components and APIs

- [Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyMini1PMG4)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Multilingual EU Declaration of Conformity (2025-07-21)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Mini%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Compliance Archive – EU DoC (2025-03-14)](https://kb.shelly.cloud/__attachments/999424427/Shelly%201PM%20Mini%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2078%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Mini%20Gen%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-pm-mini-gen4)

## Installation Guides

×