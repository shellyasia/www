# Shelly 2PM Gen4 ANZ

![Shelly 2PM Gen4 ANZ.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen4%20ANZ.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2PM Gen4  
- **Device model:** S4SW-002P16EU  
- **Device SSID:** Shelly2PMG4-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1032  

## Short Description

The Shelly 2PM Gen4 ANZ is a compact, two-channel smart switch with power measurement and cover control. It enables remote control of electric appliances via smartphone, tablet, PC, or home automation systems. The device operates independently on a local Wi-Fi network or through cloud-based home automation services. Compared to its predecessor, it features an upgraded processor and increased memory. It supports Venetian blind control, similar to the Shelly 2PM Gen3.

Remote access, control, and monitoring are possible from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device includes an embedded web interface for monitoring, control, and configuration. It features a multi-protocol wireless MCU supporting Zigbee and Bluetooth for secure, reliable communication.

This device is Matter-compatible (default device profile: Switch).

## Main Features

- **Smart Switch with Power Measurement:** Controls connected devices while measuring real-time power consumption, enabling energy usage monitoring.
- **Compact Design:** Small form factor ideal for installation in standard wall boxes, behind outlets, switches, or tight spaces.
- **Remote Control:** Operate appliances remotely via mobile app, tablet, PC, or integrated home automation platforms.
- **Local and Cloud Operation:** Functions standalone on a local network or integrates with cloud-based automation services.
- **Improved Processor & Enhanced Performance:** Upgraded hardware for faster response times and better reliability.
- **Zigbee Connectivity:** Supports inclusion via Zigbee for seamless integration during setup and extended ecosystem connectivity.
- **Remote Access:** Full remote access and monitoring from any internet-connected location.
- **Embedded Web Interface:** Built-in web interface for easy configuration, status checks, and settings adjustments.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly devices (BLU) to the broader Shelly ecosystem—receives BLE signals and forwards them to the cloud or local devices.
- **Zigbee Range Extender:** Expands the reach of your Zigbee network by receiving, boosting, and retransmitting signals over greater distances.
- **Wi-Fi Range Extender:** Enhances Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal across wider areas.
- **Scripting Support:** Custom automation using Shelly Script (see [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)).
- **Wide Integration Options:** Compatible with third-party systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Integration:** Supports KNXnet/IP communication ([documentation](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)) — [API reference](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/).
- **Scheduling Capabilities:** Create complex time-based automation with precise control over date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Use dynamic virtual components for advanced automation logic — [learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/).
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and curtains. Measures power draw of the connected motor. Requires motors equipped with electronic or mechanical limit switches. Ensure limit switches are correctly set before connection.

## Use Cases

### Appliance Control
Remotely manage and automate lights, fans, and other electrical devices.

### Power Monitoring
Track real-time energy consumption of connected appliances to identify inefficiencies and optimize usage.

### Home Automation
Integrate into smart home ecosystems to create custom scenes, schedules, and automations.

### Energy Efficiency
Use power data to detect high-consumption devices and take action to improve energy efficiency.

### Remote Monitoring
Monitor and control devices even when away from home—ideal for security, convenience, and energy management.

---

### Home Automation Use Cases

#### Independent Control of Two Circuits
- Control two separate lighting circuits or appliances from one device.
- Ideal for double-switch setups (e.g., living room + hallway).
- Monitor power usage per channel independently.

#### Smart Shutter / Blind / Curtain Control
- Automate motorized blinds, shutters, or curtains.
- Supports calibration for accurate open/close/stop positioning.
- Tilt control for Venetian blind slats.
- Trigger automation based on time, sun elevation, or weather conditions.

#### Appliance Energy Monitoring
- Monitor two appliances simultaneously (e.g., coffee machine and toaster).
- Set up alerts or actions when power thresholds are exceeded.

#### Bathroom & Kitchen Ventilation
- **Channel 1:** Control bathroom fan using humidity-triggered automation.
- **Channel 2:** Manage mirror heater or towel rail via schedule or temperature-based triggers.

---

### Commercial / Office Use Cases

#### Meeting Room or Zone Lighting
- Automate lighting in adjacent rooms or zones from a single point.
- Track individual power usage for energy audits.

#### Display or Signage Control
- **Channel 1:** Shop sign lighting.
- **Channel 2:** Promotional display TV or kiosk.
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
- Monitor two distinct loads on a shared circuit.
- Useful for tracking critical or backup equipment (routers, modems, UPS units).

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations)  
- Government/Municipal  
- University/College  

## Integrations

- **Amazon Alexa:** Supported  
- **Google Smart Home:** Supported  
- **Samsung SmartThings:** Supported  

## Simplified Internal Schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- Two switch/button inputs on screw terminals: S1 and S2  
- Three power supply inputs on screw terminals: 1 N and 2 L  

### Outputs
- Two relay outputs with power measurement, accessible via screw terminals  

### Add-on Interface
- Shelly proprietary serial interface  

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during handling.

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
- Resistive (incandescent bulbs, heating elements)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs
- One (Control) button  
  - Press and hold for 5 seconds: Enter Access Point mode and enable Bluetooth pairing  
  - Press and hold for 10 seconds: Factory reset  
  - Press 5 times consecutively: Switch from Matter firmware to Zigbee mode  
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes; device appears in the HA platform via Zigbee hub)

### Outputs
- Monochrome LED indicator  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note: States are prioritized from top to bottom. Higher-priority states override lower ones.*

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Black |
| Terminals color | Grey (Mouse Grey) |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~ ±10% |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, 16A max rated current, min. 6 kA interrupting rating, energy limiting class 3 |
| **Output circuits ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current AC | 10 A (per channel), 16 A (total), 18 A (peak total) |
| **Sensors, meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors, 50 m / 160 ft outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors, 30 m / 100 ft outdoors (varies by environment) |
| **Zigbee** | |
| Protocol | 802.15.4 |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft indoors, 300 m / 984 ft outdoors (varies by environment) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![2PM Gen4 ANZ.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen4%20ANZ.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode, AC power supply*

![2PM Gen4 cover ANZ.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen4%20cover%20ANZ.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Cover mode*

### Legend

**Terminals**
- **O1, O2:** Load circuit output terminals  
- **N:** Neutral wire  
- **L:** Live terminal (110–240 V~)  
- **S1, S2:** Switch input terminals  

**Wires**
- **N:** Neutral terminal  
- **L:** Live wire (110–240 V~)

## Components and APIs

- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly2PMG4)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly 2PM Gen4 ANZ Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen4%20ANZ%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

- [Shelly 2PM Gen4 Multilingual EU Declaration of Conformity 2025-07-25.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 2PM Gen4 ANZ Certificate for Suitability.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen4%20ANZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)