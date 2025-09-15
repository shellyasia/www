# Shelly 1PM Gen4

![Shelly 1PM Gen4](https://kb.shelly.cloud/__attachments/229146742/Shelly%201PM%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM Gen4  
- **Device model:** S4SW-001P16EU  
- **Device SSID:** Shelly1PMG4-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1029  

## Short Description

The Shelly 1PM Gen4 is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates independently on a local Wi-Fi network or can be managed through cloud-based home automation services.

With internet connectivity, users can access, control, and monitor the device remotely from any location. Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained areas, it fits seamlessly into existing installations.

The device features an embedded web interface for configuration, monitoring, and real-time adjustments. Equipped with a multi-protocol wireless MCU, it supports Zigbee and Bluetooth connectivity, ensuring secure and reliable communication. The Shelly 1PM Gen4 is also compatible with Matter.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network (802.11 b/g/n/ax) for remote monitoring and control via mobile apps or compatible devices.
- **Bluetooth Connectivity:** Supports Bluetooth 5.0 and BLE gateway functionality, useful during initial setup and device pairing.
- **Zigbee Connectivity:** Enables inclusion into Zigbee networks for expanded smart home integration.
- **Smart Home Platform Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Smart Switch with Power Measurement:** Functions as a smart switch while measuring real-time power consumption of connected devices.
- **Compact Design:** Small form factor ideal for installation in standard electrical wall boxes, behind outlets, switches, or tight spaces.
- **Remote Control:** Allows remote operation of appliances via mobile devices, tablets, PCs, or automation platforms.
- **Local and Cloud Operation:** Operates standalone on a local network or integrates with cloud services for remote access.
- **Improved Processor:** Upgraded hardware with enhanced performance and native Zigbee support.
- **Remote Access:** Full remote monitoring and control accessible from anywhere with internet access, provided the device is connected to a Wi-Fi router.
- **Embedded Web Interface:** Built-in web interface for easy configuration, status viewing, and settings adjustment.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n/ax) and Bluetooth 5.0 with defined indoor/outdoor range capabilities.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem—receives Bluetooth signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Enhances Wi-Fi coverage by receiving, boosting, and retransmitting the signal over a wider area.
- **Zigbee Range Extender for IoT Devices:** Expands Zigbee network reach by repeating and strengthening signals across larger zones.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Capabilities:** Integrates with third-party home systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **Scheduling:** Supports complex schedules based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** [Virtual Dynamic Components Documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP Support:** [KNX Integration Guide](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## Use Cases

### Appliance Control
Remotely manage and automate lights, fans, and other electrical devices.

### Power Monitoring
Monitor real-time energy usage of connected appliances to track consumption patterns and improve efficiency.

### Home Automation
Integrate into smart home ecosystems to create custom scenes, automations, and routines.

### Energy Efficiency
Identify high-energy-consuming devices and optimize usage to reduce electricity costs.

### Remote Monitoring
Control and observe appliance status even when away from home, thanks to internet-enabled access.

### Home Automation Use Cases

#### Lighting Control with Power Monitoring
- Remotely control lighting and monitor power draw.
- Detect failed bulbs by analyzing abnormal power usage.
- Identify rooms with excessive lighting energy consumption.

#### Appliance Monitoring and Automation
- Automate tracking and control of high-load appliances (e.g., oven, dishwasher, washing machine).
- Trigger notifications based on power data (e.g., alert when laundry cycle ends).
- Schedule operations during off-peak energy hours to save costs.

#### Heater and Boiler Control
- Turn electric water heaters or room heaters on/off (max switching current: 16A).
- Monitor energy use to estimate heating expenses.
- Automate based on temperature thresholds or time-of-day schedules.

#### Overload Protection
- Set maximum power thresholds to prevent overloads.
- Automatically disconnect if power draw exceeds safe limits.

### Commercial & Retail Applications

#### Energy Optimization in Offices
- Track energy use of shared equipment (printers, coffee machines).
- Automate shutdown after business hours.

#### Lighting Zones with Energy Analytics
- Group lights by zone and analyze energy usage for cost optimization.

#### Preventive Maintenance
- Detect unusual power trends to anticipate equipment failure.

### Industrial & Utility Applications

#### Motor or Pump Control with Monitoring
- Control irrigation or circulation pumps (max switching current: 16A).
- Monitor motor performance to detect under/over-performance issues.

#### Solar/Off-Grid Power Use Tracking
- Monitor loads powered by inverters or battery backups (max switching current: 16A).
- Optimize load distribution based on solar generation or battery capacity.

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condos, hotels, etc.)  
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

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered.

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
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds: Enable Device Access Point and Bluetooth connection.
  - Press and hold for 10 seconds: Factory reset the device.
  - Press 5 times consecutively: Switch from Matter firmware (default) to Zigbee mode.
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes; device appears in the Zigbee hub).

### Outputs
- LED (monocolor) indicator:
  - **AP enabled, Wi-Fi disabled**: 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected**: 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network**: Constantly ON  
  - **Cloud enabled, not connected**: 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud**: Constantly ON  
  - **OTA update in progress**: 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds**: 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds**: 0.25 sec ON / 0.25 sec OFF  

> *Note: States are processed in order of priority, with higher-priority states overriding lower ones.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 27 g / 0.95 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Red |
| Terminals color | Grey (Mouse Grey) |
| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~<br>24–30 V⎓ |
| Power consumption | < 1 W |
| Neutral required | No |
| External protection | Cable protection switch per EN60898-1 (tripping characteristic B or C, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |
| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~<br>30 V⎓ |
| Max. switching current | 16 A (240 V~)<br>10 A (30 V⎓) |
| **Sensors & Meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor)<br>Up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor)<br>Up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |
| **Zigbee** | |
| Protocol | 802.15.4 |
| Zigbee repeater | Yes |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft (indoor)<br>Up to 300 m / 984 ft (outdoor)<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![Plus 1PM AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 V~ Power Supply**

![Plus 1PM DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 V⎓ Power Supply**

### Legend

| Symbol | Description |
|--------|-------------|
| **O** | Load circuit output terminal |
| **L** | Live wire (110–240 V~) |
| **SW** | Switch input terminal (controls O) |
| **+** | Positive wire (24–30 V⎓) |
| **N** | Neutral wire |
| **Ʇ** | Ground terminal (24–30 V⎓) |

## Shelly Smart Control
- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface
- [Shelly 1PM Gen4 Web Interface Guide](../knowledge-base/shelly-1pm-gen4-web-interface-guide)

## Components and APIs
- [This Device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1PMG4)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1PM Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1PM Gen4 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive: Shelly 1PM Gen4 EU Declaration (2025-03-10)](https://kb.shelly.cloud/__attachments/974159873/Shelly%201PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2076%202025-03-10.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Shelly 1PM Gen 4 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201PM%20Gen%204%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-1pm-gen4-1)

## Installation Guides
×