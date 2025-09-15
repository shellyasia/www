Shelly 1PM Gen3

![Shelly 1PM Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Gen3  
- **Device model:** S3SW-001P16EU  
- **Device SSID:** Shelly1PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1019  

## Short Description

The Shelly 1PM Gen3 is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or can be managed through cloud-based home automation services. Compared to its predecessor, it features an upgraded processor and increased memory for improved performance.

The device supports remote access, control, and monitoring from any location with internet connectivity, provided it remains connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power sockets, light switches, or other confined spaces, it fits seamlessly into existing installations.

It includes an embedded web interface for configuration, real-time monitoring, and device management.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network (802.11 b/g/n), enabling remote monitoring and control.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Smart Switch with Power Measurement:** Functions as a smart switch while measuring real-time power consumption of connected devices.
- **Compact Design:** Small form factor ideal for installation in tight spaces such as standard wall boxes, behind outlets, or switches.
- **Remote Control:** Full remote operation via mobile apps, web browsers, or home automation platforms.
- **Local and Cloud Operation:** Works independently on a local network or integrates with cloud services.
- **Enhanced Performance:** Upgraded processor and increased memory for faster response and more advanced functionality.
- **Remote Access:** Accessible from anywhere with internet connectivity when connected to Wi-Fi.
- **Embedded Web Interface:** Built-in web UI for easy setup, monitoring, and configuration.
- **Wireless Connectivity:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with defined indoor/outdoor range capabilities.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem—receives Bluetooth signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal over a wider area.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Supports HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), UDP, and third-party home automation systems.
- **KNX Support:** Fully compatible with KNXnet/IP communication protocols.
- **Scheduling:** Enables complex automation schedules based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Create virtual devices for advanced automation scenarios. [Learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## Use Cases

- **Appliance Control:** Remotely manage and automate lights, fans, heaters, and other electrical devices.
- **Power Monitoring:** Track real-time energy usage of connected appliances to identify inefficiencies.
- **Home Automation:** Integrate into custom scenes and routines within your smart home system.
- **Energy Efficiency:** Optimize household energy use by identifying high-consumption devices.
- **Remote Monitoring:** Supervise connected devices from anywhere, ensuring safety and efficiency even when away from home.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government & Municipal Projects  
- Universities & Colleges  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes

### Google Smart Home Supported Traits  
Yes

### Samsung SmartThings Supported Capabilities  
Yes

## Simplified Internal Schematics

![Shelly Plus 1PM Internal Schematic](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal: **SW**  
- 5 power supply inputs on screw terminals: **2 N (+)** and **3 L (Ʇ)**

### Outputs

- 1 relay output with power measurement on screw terminal: **O**

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Functions

- Overheating Protection  
- Overvoltage Protection  
- Overcurrent Protection  
- Overpower Protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)

## User Interface

### Inputs

- One (Control) button  
  - Press and hold for **5 seconds** to enable Device Access Point and Bluetooth pairing.  
  - Press and hold for **10 seconds** to perform a factory reset.

### Outputs

- Monochrome LED indicator  
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA Update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> *Note:* The LED states are prioritized from top to bottom. Each new state overrides the previous one.

## Specifications

| **Category** | **Parameter** | **Value** |
|-------------|---------------|----------|
| **Physical** | Size (H×W×D) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | Weight | 27 g / 0.95 oz |
| | Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| | Conductor cross section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| | Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| | Mounting | Wall console |
| | Shell material | Plastic |
| | Shell color | Red |
| | Terminal color | Black |

| **Environmental** | Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30% – 70% RH |
| | Max. altitude | 2000 m / 6562 ft |

| **Electrical** | Power supply | 110–240 V~<br>24–30 V⎓ |
| | Power consumption | < 1.2 W |
| | External protection | Cable protection switch per EN60898-1 (tripping characteristic B or C, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |

| **Output circuits ratings** | Max. switching voltage | 240 V~<br>30 V⎓ |
| | Max. switching current | 16 A (240 V~)<br>10 A (30 V⎓) |

| **Sensors, Meters** | Internal temperature sensor | Yes |
| | Voltmeter (AC) | Yes |
| | Ammeter (AC) | Yes |

| **Radio** | Wi-Fi Protocol | 802.11 b/g/n |
| | RF Band | 2401 – 2483 MHz |
| | Max. RF power | < 20 dBm |
| | Range | Up to 30 m / 100 ft indoors<br>Up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |

| | Bluetooth Protocol | 4.2 with BLE |
| | RF Band | 2400 – 2483.5 MHz |
| | Max. RF power | < 4 dBm |
| | Range | Up to 10 m / 33 ft indoors<br>Up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |

| **Microcontroller Unit** | CPU | ESP-Shelly-C38F |
| | Flash | 8 MB |

| **Firmware Capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20, with up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |

## Basic Wiring Diagrams

![Plus 1PM AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 V~ Power Supply**

![Plus 1PM DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 V⎓ Power Supply**

### Legend

| **Terminals** | **Description** |
|--------------|----------------|
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

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Components and APIs

- [This Device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1PMG3)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive**

- [Shelly 1PM Gen3 Multilingual EU Declaration of Conformity (49, 2024-05-29)](https://kb.shelly.cloud/__attachments/344817789/Shelly%201PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2049%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1PM Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-pm-gen3)

## Installation Guides

×