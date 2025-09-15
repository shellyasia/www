Shelly 1PM Gen3

![Shelly 1PM Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Gen3  
- **Device model:** S3SW-001P16EU  
- **Device SSID:** Shelly1PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1019  

## Short Description

The Shelly 1PM Gen3 is a compact smart switch with built-in power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or integrates with cloud-based home automation services. Compared to its predecessor, it features an upgraded processor and increased memory for improved performance.

The device supports remote access, control, and monitoring from anywhere with internet connectivity, provided it remains connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other confined spaces, it fits seamlessly into existing installations.

It includes an embedded web interface for configuration, monitoring, and real-time control.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote monitoring and control.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Smart Switch with Power Measurement:** Functions as a smart switch while measuring real-time power consumption of connected devices.
- **Compact Design:** Small form factor ideal for installation in tight spaces such as standard wall boxes or behind outlets and switches.
- **Remote Control:** Enables remote operation via mobile apps, web browsers, or home automation platforms.
- **Local and Cloud Operation:** Supports both local network control and cloud-based management.
- **Improved Processor and Memory:** Enhanced hardware ensures faster response times and better performance.
- **Remote Access:** Full remote access and monitoring from any internet-connected location.
- **Embedded Web Interface:** Built-in web interface for easy setup, configuration, and diagnostics.
- **Wireless Connectivity:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with defined indoor and outdoor range capabilities.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem—receives Bluetooth signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Repeats and strengthens your Wi-Fi signal to extend coverage for other IoT devices.
- **Scripting:** Supported via [Shelly Script Language](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/).
- **Wide-Ranging Integrations:** Supports third-party systems through HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Communicates via KNXnet/IP protocol—[see documentation](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support).
- **Scheduling:** Define complex operations across customizable time windows based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Create virtual devices for advanced automation scenarios—[learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/).

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, and other electrical devices remotely.
- **Power Monitoring:** Track real-time energy usage to identify inefficiencies and optimize consumption.
- **Home Automation:** Integrate into smart home routines with custom scenes and schedules.
- **Energy Efficiency:** Identify high-consumption devices and take action to reduce energy waste.
- **Remote Monitoring:** Monitor and manage connected devices from anywhere with internet access.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations)  
- Government / Municipal  
- University / College  

## Integrations

### Amazon Alexa
Supported capabilities: Yes

### Google Smart Home
Supported traits: Yes

### Samsung SmartThings
Supported capabilities: Yes

## Simplified Internal Schematics

![Shelly Plus 1PM internal schematic](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal: **SW**  
- 5 power supply inputs on screw terminals: **2 N (+)** and **3 L (Ʇ)**

### Outputs

- 1 relay output with power measurement on screw terminal: **O**

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Do not touch exposed terminals during operation.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs

- One (Control) button  
  - Press and hold for 5 seconds: Enters Access Point mode and enables Bluetooth pairing.  
  - Press and hold for 10 seconds: Performs factory reset.

### Outputs

- LED (monocolor) indicator  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note:* The LED states are prioritized in order of appearance. Each subsequent state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 27 g / 0.95 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Red |
| Terminal color | Black |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110–240 V~ or 24–30 V⎓ |
| Power consumption | < 1.2 W |
| External protection | Cable protection switch per EN60898-1 (tripping characteristic B or C, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |

| **Output circuits ratings** | |
| Max. switching voltage | 240 V~ or 30 V⎓ |
| Max. switching current | 16 A (240 V~), 10 A (30 V⎓) |

| **Sensors, meters** | |
| Internal temperature sensor | Yes |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |

| **Radio** | |
| Wi-Fi | |
| Protocol | 802.11 b/g/n |
| RF band | 2401 – 2483 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor), up to 50 m / 160 ft (outdoor)<br>(Depends on environmental conditions) |

| Bluetooth | |
| Protocol | BLE 4.2 |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor), up to 30 m / 100 ft (outdoor)<br>(Depends on environmental conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Plus 1PM AC wiring diagram-20240528-134438.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 V~ Power Supply**

![Plus 1pm dc-wiring-20240528-134643.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 V⎓ Power Supply**

### Legend

| Symbol | Description |
|------|------------|
| **O** | Load circuit output terminal |
| **L** | Live wire (110–240 V~) |
| **SW** | Switch input terminal (controls O) |
| **+** | 24–30 V⎓ positive wire |
| **L** | Live terminal (110–240 V~) |
| **N** | Neutral wire |
| **N** | Neutral terminal |
| **GND** | 24–30 V⎓ ground wire |
| **+** | 24–30 V⎓ positive terminal |
| **Ʇ** | 24–30 V⎓ negative terminal |

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Components and APIs

- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1PMG3)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Shelly 1PM Gen3 Multilingual EU Declaration of Conformity (49, 2024-05-29)](https://kb.shelly.cloud/__attachments/344817789/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2049%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1PM Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-pm-gen3)

## Installation Guides

×