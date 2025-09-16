# Shelly 1PM Gen4 ANZ

![Shelly 1PM Gen4_ANZ.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen4_ANZ.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Gen4  
- **Device model:** S4SW-001P16EU  
- **Device SSID:** Shelly1PMG4-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1029  

## Short Description

The Shelly 1PM Gen4 ANZ is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates independently on a local Wi-Fi network or integrates with cloud-based home automation services.

With an internet connection, users can access, control, and monitor the device from anywhere. Designed for retrofitting into standard electrical wall boxes, behind power sockets, light switches, or other confined spaces, it fits seamlessly into existing installations.

The device features an embedded web interface for easy configuration and real-time monitoring. Equipped with a multi-protocol wireless MCU, it supports Zigbee and Bluetooth connectivity, ensuring secure and reliable communication. This device is also Matter-compatible.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network (802.11 b/g/n/ax), enabling remote monitoring and control via mobile apps or compatible devices.
- **Bluetooth Connectivity:** Supports BLE gateway functionality, useful during initial setup and device pairing.
- **Zigbee Connectivity:** Enables inclusion into Zigbee networks for expanded automation capabilities.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automated routines.
- **Smart Switch with Power Measurement:** Functions as a smart switch while measuring real-time power consumption of connected devices.
- **Compact Design:** Small form factor ideal for installation in tight spaces such as standard wall boxes, behind outlets, or switches.
- **Remote Control:** Allows full remote operation of appliances via mobile devices or home automation platforms.
- **Local and Cloud Operation:** Works standalone on your local network or connects to cloud services for remote access.
- **Improved Processor:** Upgraded hardware with enhanced performance and native Zigbee support.
- **Remote Access:** Full remote access, control, and monitoring from any internet-connected location when the device is online.
- **Embedded Web Interface:** Built-in web UI for configuration, status monitoring, and parameter adjustment.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n/ax) and Bluetooth 5.0 with defined indoor/outdoor range specifications.
- **BLE Gateway:** Bridges Shelly BLU devices to the broader Shelly ecosystem by forwarding Bluetooth signals to the cloud or local devices.
- **Wi-Fi Range Extender:** Boosts Wi-Fi coverage by receiving, amplifying, and retransmitting the signal over a wider area.
- **Zigbee Range Extender:** Expands Zigbee network reach by relaying signals between devices across greater distances.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Supports HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), UDP, and third-party integrations.
- **Scheduling:** Create complex schedules based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** [Virtual Dynamic Components Documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP Support:** [KNX Integration Guide](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## Use Cases

### Appliance Control
Remotely manage and automate lights, fans, heaters, and other electrical devices.

### Power Monitoring
Track real-time energy usage of connected appliances to identify inefficiencies and optimize consumption.

### Home Automation
Integrate into smart home systems to create custom scenes, automations, and scheduled operations.

### Energy Efficiency
Use power data to detect high-consumption devices and make informed decisions to reduce overall energy use.

### Remote Monitoring
Monitor and control devices even when away from home—ideal for security, convenience, and efficiency.

---

### Home Automation Use Cases

#### Lighting Control with Power Monitoring
- Remotely turn lights on/off and track their energy use.
- Detect failed bulbs by analyzing abnormal power draw.
- Identify rooms with excessive lighting energy consumption.

#### Appliance Monitoring and Automation
- Automate and log usage of high-load appliances (e.g., oven, dishwasher, washing machine).
- Trigger notifications based on power patterns (e.g., laundry completion alert).
- Schedule operation during off-peak electricity hours to save costs.

#### Heater and Boiler Control
- Control electric water heaters or room heaters (max switching current: 16A).
- Monitor heating energy usage to estimate operating costs.
- Automate based on temperature thresholds or time-of-day schedules.

#### Overload Protection
- Set maximum power thresholds to prevent overloads.
- Automatically disconnect if power draw exceeds predefined limits.

---

### Commercial & Retail Applications

#### Energy Optimization in Offices
- Track energy use of shared equipment (printers, coffee machines).
- Automate shutdown after business hours to reduce waste.

#### Lighting Zones with Energy Analytics
- Group lights by zone and analyze usage patterns for cost savings.

#### Preventive Maintenance
- Detect abnormal power trends to anticipate failures in machinery or fixtures.

---

### Industrial & Utility Applications

#### 1. Motor or Pump Control with Monitoring
- Control irrigation or circulation pumps (max switching current: 16A).
- Monitor motor performance via power data to detect underperformance or overload.

#### 2. Solar/Off-Grid Power Use Tracking
- Monitor loads supplied by inverters or battery backups (max switching current: 16A).
- Optimize load distribution based on solar generation or battery levels.

---

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations)  
- Government / Municipal  
- University / College  

## Integrations

| Platform | Supported |
|--------|----------|
| Amazon Alexa | Yes |
| Google Smart Home | Yes |
| Samsung SmartThings | Yes |

## Simplified Internal Schematics

![Shelly Plus 1PM internal schematic](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 1 switch/button input on screw terminal: **SW**  
- 5 power supply inputs on screw terminals: **2 N** and **3 L**

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
- Resistive (incandescent bulbs, heating elements)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds: Enable Device Access Point and Bluetooth.
  - Press and hold for 10 seconds: Factory reset the device.
  - Press 5 times consecutively: Switch firmware from Matter to Zigbee.
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes).

### Outputs
- Monochrome LED indicator:
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note: The LED states are prioritized from top to bottom. Each subsequent state overrides the previous one.*

## Specifications

| Category | Value |
|--------|------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 inch |
| Weight | 27 g / 0.95 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross-section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| Stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Red |
| Terminals color | Grey (Mouse Grey) |
| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~ |
| Power consumption | < 1 W |
| Neutral required | No |
| External protection | Cable protection switch per EN60898-1 (B/C tripping characteristic, max 16 A, min 6 kA interrupting rating, Class 3 energy limiting) |
| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current | 16 A (at 240 V~) |
| **Sensors & Meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Zigbee** | |
| Protocol | IEEE 802.15.4 |
| Zigbee repeater | Yes |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m indoors / 300 m outdoors (varies by environment) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 total, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![1PM Gen4 ANZ.png](https://kb.shelly.cloud/__attachments/243531777/1PM%20Gen4%20ANZ.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**
- **O**: Load circuit output terminal  
- **L**: Live wire (110–240 V~)  
- **SW**: Switch input terminal (controls O)  
- **N**: Neutral wire  

**Wires**
- **L**: Live terminal (110–240 V~)  
- **N**: Neutral terminal  

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1PMG4)
- [All Shelly Devices & Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen4 ANZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20ANZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

[Shelly 1PM Gen4 ANZ Printed User and Safety Guide](#)