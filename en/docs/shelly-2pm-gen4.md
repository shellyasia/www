# Shelly 2PM Gen4

![Shelly 2PM Gen4](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2PM Gen4  
- **Device model:** S4SW-002P16EU  
- **Device SSID:** Shelly2PMG4-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1032  

## Short Description

The Shelly 2PM Gen4 is a compact, two-channel smart switch with integrated power measurement and cover control. It enables remote control of electric appliances via smartphone, tablet, PC, or home automation systems. The device operates standalone on a local Wi-Fi network or through cloud-based home automation services. Compared to its predecessor (Shelly 2PM Gen3), it features an upgraded processor and increased memory. It supports Venetian blind control, similar to the Gen3 model.

Remote access, control, and monitoring are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or in confined spaces.

The device includes an embedded web interface for configuration, monitoring, and control. It also features a multi-protocol wireless MCU supporting Zigbee and Bluetooth for secure, flexible connectivity.

This device is Matter-compatible (default device profile: Switch).

## Main Features

- **Smart Switch with Power Measurement:** Controls connected devices while measuring real-time power consumption for energy monitoring.
- **Compact Design:** Small form factor suitable for installation in standard wall boxes, behind sockets, switches, or tight spaces.
- **Remote Control:** Operate appliances remotely via mobile apps, web browsers, or home automation platforms.
- **Local & Cloud Operation:** Functions independently on a local network or integrates with cloud-based automation services.
- **Improved Processor:** Enhanced processing performance and support for Zigbee connectivity.
- **Zigbee Connectivity:** Enables inclusion during setup and integration into larger Zigbee networks.
- **Remote Access:** Full remote monitoring and control over the internet when connected to Wi-Fi.
- **Embedded Web Interface:** Built-in interface for easy configuration and real-time status viewing.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly devices to the broader Shelly ecosystem—receives BLE signals and forwards them to the cloud or other non-BLE devices.
- **Zigbee Range Extender:** Boosts and extends the reach of your Zigbee network by receiving, strengthening, and retransmitting signals.
- **Wi-Fi Range Extender:** Expands Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal across wider areas.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Extensive Integrations:** Compatible with third-party home systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Integration:** Supports KNXnet/IP communication.  
  [Documentation](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support) | [API Reference](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)
- **Schedules:** Create complex automation rules based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** [Virtual Dynamic Components](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and curtains. Measures motor power usage. Requires motors with electronic or mechanical limit switches—ensure limits are properly set before connection.

## Use Cases

### Appliance Control
Remotely manage and automate lights, fans, or other electrical devices.

### Power Monitoring
Track real-time energy consumption of connected appliances to identify inefficiencies and promote energy savings.

### Home Automation
Integrate into smart home ecosystems to create custom scenes, automations, and schedules.

### Energy Efficiency
Use power data to detect high-consumption devices and optimize usage patterns.

### Remote Monitoring
Monitor and control devices from anywhere with internet access.

---

### Home Automation Use Cases

#### Independent Control of Two Circuits
- Control two separate lighting circuits or appliances using one unit.
- Ideal for double-switch setups (e.g., living room and hallway).
- Monitor each channel’s power draw independently.

#### Smart Shutter / Blind / Curtain Control
- Automate motorized blinds, shutters, or curtains.
- Supports calibration for precise open/close/stop positioning.
- Tilt control for Venetian blind slats.
- Automate based on time, sun elevation, or weather conditions.

#### Appliance Energy Monitoring
- Monitor power usage of two devices simultaneously (e.g., coffee maker + toaster).
- Trigger alerts or actions when power thresholds are exceeded.

#### Bathroom & Kitchen Ventilation
- **Channel 1:** Control bathroom fan with humidity-triggered automation.
- **Channel 2:** Manage mirror heater or towel rail via schedule or temperature triggers.

---

### Commercial / Office Use Cases

#### Meeting Room or Zone Lighting
- Automate lighting in adjacent rooms or zones from a single point.
- Track individual channel power usage for energy audits.

#### Display or Signage Control
- **Channel 1:** Shop sign lighting.
- **Channel 2:** Promotional display TV or digital kiosk.
- Enable scheduling or motion-triggered operation.

#### Window Covering Automation
- Automate blinds or shades in conference rooms or lobbies.
- Integrate with ambient light sensors or calendar-based meeting schedules.

---

### Industrial and Facility Applications

#### Dual Motor Control
- Control and monitor two low-load motors (e.g., fans, valves, pumps).
- Automate based on sensor inputs (temperature, water level, etc.).

#### Split Load Monitoring
- Monitor energy use of two distinct loads on a shared circuit.
- Useful for tracking critical or backup equipment (routers, modems, UPS units).

## Integrations

- **Amazon Alexa:** Supported  
- **Google Smart Home:** Supported  
- **Samsung SmartThings:** Supported  

## Simplified Internal Schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 2 switch/button inputs on screw terminals: S1 and S2  
- 3 power supply inputs on screw terminals: 1 N (+), 2 L (Ʇ)

### Outputs
- 2 relay outputs with power measurement on screw terminals

### Add-on Interface
- Shelly proprietary serial interface  

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION**: High voltage present on the add-on interface when the device is powered.

## Connectivity
- Wi-Fi  
- Bluetooth  
- Zigbee  

## Safety Functions
- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (cover mode)  
- Safety switch (cover mode)  

## Supported Load Types
- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs
- One control button:
  - Press and hold for 5 seconds: Enter Access Point mode (enables Wi-Fi/Bluetooth setup).  
  - Press and hold for 10 seconds: Factory reset.  
  - Press 5 times consecutively: Switch from Matter firmware to Zigbee mode.  
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes; visible in Zigbee hub).

### Outputs
- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled but not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled but not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> *Note: States are prioritized from top to bottom. Later states override earlier ones.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Black |
| Terminals color | Grey (Mouse Grey) |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~ / 24 VDC ±10% |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, 16 A max rated current, min. 6 kA interrupting rating, energy limiting class 3 |
| **Output circuits ratings** | |
| Max switching voltage | 240 V~ / 30 V⎓ |
| Max switching current AC | 10 A (per channel), 16 A (total), 18 A (peak total) |
| Max switching current DC | 10 A |
| **Sensors & Meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | IEEE 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | Bluetooth 5.0 |
| RF band | 2402 – 2480 MHz |
| Max RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Zigbee** | |
| Protocol | IEEE 802.15.4 |
| RF bands | 2400 – 2483.5 MHz |
| Max RF power | < 20 dBm |
| Range | Up to 100 m indoors / 300 m outdoors (varies by environment) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Dual-channel switch mode, AC power supply

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Dual-channel switch mode, DC power supply

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Cover mode

### Legend

| Terminals | Description |
|---------|-------------|
| O1, O2 | Load circuit output terminals |
| N | Neutral wire |
| L | Live terminal (110–240 V~) |
| S1, S2 | Switch input terminals |
| + | 24 V⎓ positive wire/terminal |
| - | 24 V⎓ negative terminal |

## Shelly Smart Control
- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting
*(No content provided)*

## Components and APIs
- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly2PMG4)
- [All Shelly Devices & Services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide
- [Shelly 2PM Gen4 Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-2pm-gen4-1)

## Compliance
- [Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive – EU DoC (2025-03-14)](https://kb.shelly.cloud/__attachments/1041399809/Shelly%202PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2080%202025-03-14.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides
×