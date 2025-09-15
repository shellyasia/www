# Shelly 1PM Gen4

![Shelly 1PM Gen4](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Gen4  
- **Device model:** S4SW-001P16EU  
- **Device SSID:** Shelly1PMG4-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1029  

## Short Description

The Shelly 1PM Gen4 is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or integrates with cloud-based home automation services.

With internet connectivity, users can access, control, and monitor the device from anywhere. The device is designed for retrofitting into standard electrical wall boxes, behind power sockets, light switches, or other confined spaces.

It features an embedded web interface for configuration, monitoring, and control. Equipped with a multi-protocol wireless MCU, it supports Zigbee and Bluetooth connectivity for secure, flexible integration. The device is also Matter-compatible.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network (802.11 b/g/n/ax) for remote monitoring and control.
- **Bluetooth Connectivity:** Supports BLE gateway functionality, useful during initial setup and device pairing.
- **Zigbee Connectivity:** Enables inclusion into Zigbee networks for expanded automation possibilities.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Smart Switch with Power Measurement:** Controls connected devices while measuring real-time power consumption.
- **Compact Design:** Small form factor ideal for installation in tight spaces such as wall boxes or behind switches.
- **Remote Control:** Allows remote operation via mobile apps, web interfaces, or automation platforms.
- **Local and Cloud Operation:** Functions independently on a local network or connects to cloud services for remote access.
- **Improved Processor:** Enhanced performance with full support for Zigbee and advanced scripting.
- **Remote Access:** Full remote monitoring and control when the device is connected to Wi-Fi and the internet.
- **Embedded Web Interface:** Built-in interface for easy configuration, status checks, and parameter adjustments.
- **Wireless Connectivity:** Supports Wi-Fi (802.11 b/g/n/ax) and Bluetooth 5.0 with defined indoor/outdoor range.
- **BLE Gateway:** Bridges Shelly BLU devices to the broader Shelly ecosystem by forwarding Bluetooth signals to the cloud or local devices.
- **Wi-Fi Range Extender:** Boosts Wi-Fi signal strength and extends coverage for IoT devices.
- **Zigbee Range Extender:** Enhances Zigbee network reach by repeating and amplifying signals.
- **Scripting Support:** Custom automation via Shelly Script language ([Learn more](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)).
- **Wide Integration Options:** Supports HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP for third-party system integration.
- **Scheduling:** Define complex schedules based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Create dynamic virtual devices for advanced automation scenarios ([Documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)).
- **KNX net/IP Support:** Integrate with KNX systems for industrial and commercial building automation ([Guide](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)).

## Use Cases

### Appliance Control
Remotely manage and automate lights, fans, heaters, and other electrical devices.

### Power Monitoring
Track real-time energy usage of connected appliances to identify inefficiencies and optimize consumption.

### Home Automation
Integrate into smart home ecosystems to create custom scenes, routines, and automated workflows.

### Energy Efficiency
Use power data to detect high-consumption devices and schedule operations during off-peak hours.

### Remote Monitoring
Monitor and control devices from any location with internet access.

### Home Automation Use Cases

#### Lighting Control with Power Monitoring
- Remotely control lighting and track energy use.
- Detect bulb failures by analyzing power draw.
- Identify rooms with excessive lighting energy consumption.

#### Appliance Monitoring and Automation
- Automate and log usage of high-load devices (e.g., oven, dishwasher, washing machine).
- Trigger notifications upon completion (e.g., laundry cycle end).
- Schedule operation during low-energy tariff periods.

#### Heater and Boiler Control
- Switch electric water heaters or room heaters (max. 16A switching current).
- Monitor energy costs associated with heating.
- Automate based on temperature or time-of-day schedules.

#### Overload Protection
- Set maximum power thresholds to prevent overloads.
- Automatically disconnect if power draw exceeds safe limits.

### Commercial & Retail Applications

#### Energy Optimization in Offices
- Track shared equipment usage (printers, coffee machines).
- Automate shutdown after working hours to reduce waste.

#### Lighting Zones with Energy Analytics
- Group lights by zone and analyze usage patterns for cost reduction.

#### Preventive Maintenance
- Detect abnormal power trends indicating potential equipment failure.

### Industrial & Utility Applications

#### Motor or Pump Control with Monitoring
- Control irrigation or circulation pumps (max. 16A switching current).
- Monitor motor performance (under/over-performance) via power data.

#### Solar/Off-Grid Power Use Tracking
- Monitor circuits powered by inverters or battery backups (max. 16A).
- Optimize load distribution based on solar generation or battery levels.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations)  
- Government/Municipal  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes

### Google Smart Home Supported Traits  
Yes

### Samsung SmartThings Supported Capabilities  
Yes

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

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Do not touch during operation.

## Connectivity
- Wi-Fi  
- Bluetooth  
- Zigbee  
- Matter  

## Safety Functions
- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types
- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds: Enable Device Access Point and Bluetooth.
  - Press and hold for 10 seconds: Factory reset.
  - Press 5 times consecutively: Switch from Matter firmware to Zigbee.
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes).

### Outputs
- Monochrome LED indicator:
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note:* States are prioritized from top to bottom. Higher-priority states override lower ones.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 27 g / 0.95 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Red |
| Terminals color | Grey (Mouse Grey) |

| **Environmental** | |
|------------------|-----|
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
|---------------|------|
| Power supply | 110–240 V~ or 24–30 V⎓ |
| Power consumption | < 1 W |
| Neutral required | No |
| External protection | Cable protection switch per EN60898-1 (tripping B or C, max. 16 A, min. 6 kA interrupting rating, class 3 energy limiting) |

| **Output Circuit Ratings** | |
|----------------------------|---------|
| Max. switching voltage | 240 V~ or 30 V⎓ |
| Max. switching current | 16 A (240 V~), 10 A (30 V⎓) |

| **Sensors & Meters** | |
|----------------------|--------|
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |

| **Radio** | |
|----------|-------|
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors *(depends on environment)* |

| **Bluetooth** | |
|--------------|--------|
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors *(depends on environment)* |

| **Zigbee** | |
|-----------|--------|
| Protocol | IEEE 802.15.4 |
| Zigbee repeater | Yes |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft indoors, up to 300 m / 984 ft outdoors *(depends on environment)* |

| **Microcontroller Unit** | |
|--------------------------|--------|
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
|---------------------------|--------|
| Schedules | 20 |
| Webhooks (URL actions) | 20 with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Plus 1PM AC wiring diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ Power Supply*

![Plus 1PM DC wiring diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–30 V⎓ Power Supply*

### Legend

**Terminals**  
- **O**: Load circuit output terminal  
- **L**: Live wire (110–240 V~)  
- **SW**: Switch input terminal (controls O)  
- **+**: Positive terminal (24–30 V⎓)  
- **N**: Neutral wire (110–240 V~)  
- **Ʇ**: Ground terminal (24–30 V⎓)

**Wires**  
- **L**: Live wire  
- **N**: Neutral wire  
- **+**: Positive DC wire  
- **Ʇ**: Ground wire

## Shelly Smart Control
- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface
- [Shelly 1PM Gen4 Web Interface Guide](../knowledge-base/shelly-1pm-gen4-web-interface-guide)

## Components and APIs
- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1PMG4)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1PM Gen4 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Compliance Archive – EU Declaration (2025-03-10)](https://kb.shelly.cloud/__attachments/974159873/Shelly%201PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2076%202025-03-10.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Shelly 1PM Gen 4 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen%204%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1pm-gen4-1)

## Installation Guides
×