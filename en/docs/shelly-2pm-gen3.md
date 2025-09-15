# Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2PM Gen3  
- **Device model:** S3SW-002P16EU  
- **Device SSID:** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1005  

## Short Description

The Shelly 2PM Gen3 is a compact, two-channel smart switch with power measurement and cover control. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device operates independently on a local Wi-Fi network or integrates with cloud-based home automation services.

Compared to its predecessor, the Shelly 2PM Gen3 features an upgraded processor and increased memory for improved performance. It also supports motorized Venetian blinds control.

Remote access, control, and monitoring are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other confined spaces, it fits seamlessly into existing installations.

The device includes an embedded web interface for configuration, monitoring, and real-time adjustments.

## Main Features

- **Smart Switch with Power Measurement:** Controls connected devices while measuring real-time power consumption for energy usage insights.
- **Compact Design:** Small form factor ideal for installation in tight spaces such as standard electrical wall boxes, behind outlets, or switches.
- **Remote Control:** Full remote operation via mobile app, tablet, PC, or integrated home automation platforms.
- **Local and Cloud Operation:** Functions standalone on a local network and can be managed through cloud services.
- **Improved Processor and Memory:** Enhanced hardware delivers better responsiveness and reliability.
- **Remote Access:** Accessible from anywhere with internet connectivity when connected to Wi-Fi.
- **Embedded Web Interface:** Built-in web UI for device management, status monitoring, and settings adjustment.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly devices (e.g., Shelly BLU) to the wider Shelly ecosystem—receives BLE signals and forwards them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal over a broader area.
- **Scripting:** Supports custom automation using Shelly Script language.  
  [Learn more →](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Range of Integrations:** Compatible with third-party home systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Enables integration with KNX networks using KNXnet/IP protocol (switch mode only; firmware version 1.5.0 or later required).
- **Schedules:** Create complex time-based automation rules with precise control over date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Use dynamic virtual components for advanced automation logic.  
  [Learn more →](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and similar devices. Measures power draw of the connected motor.  
  - Recommended use: Motors equipped with electronic or mechanical limit switches.  
  - Must set motor limits correctly before connecting to the device.  
  - Controls:  
    - Position of blinds, rollers, shades, venetian blinds  
    - Tilt angle of slats in venetian blinds

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, or other electrical devices remotely.
- **Power Monitoring:** Track real-time energy consumption to identify inefficiencies and reduce usage.
- **Home Automation Integration:** Incorporate into scenes, routines, and automations within your smart home system.
- **Energy Efficiency Optimization:** Use power data to detect high-consumption devices and optimize usage patterns.
- **Remote Monitoring & Control:** Manage devices even when away from home using internet-connected access.

## Integrations

### Amazon Alexa
Supported capabilities: Yes

### Google Smart Home
Supported traits: Yes

### Samsung SmartThings
Supported capabilities: Yes

## Simplified Internal Schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**
- Three power supply inputs on screw terminals: **1 N (+)** and **2 L (Ʇ)**

### Outputs

- Two relay outputs with built-in power measurement, accessible via screw terminals

### Add-on Interface

- Proprietary Shelly serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** The add-on interface carries high voltage when the device is powered. Handle with care.

## Connectivity

- Wi-Fi (802.11 b/g/n)
- Bluetooth 4.2

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (in cover mode)  
- Safety switch (in cover mode)

## Supported Load Types

- **Resistive:** Incandescent bulbs, heating appliances  
- **Capacitive:** Capacitor banks, electronic equipment, motor starting capacitors  
- **Inductive with RC Snubber:** LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers

## User Interface

### Inputs

- One (Control) button:
  - Press and hold for **5 seconds**: Enter Access Point mode and enable Bluetooth pairing
  - Press and hold for **10 seconds**: Factory reset the device

### Outputs

- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF
  - **Wi-Fi enabled but not connected:** 1 sec ON / 3 sec OFF
  - **Connected to Wi-Fi network:** Constantly ON
  - **Cloud enabled but not connected:** 1 sec ON / 5 sec OFF
  - **Connected to Shelly Cloud:** Constantly ON
  - **OTA (Over-the-Air Update):** 0.5 sec ON / 0.5 sec OFF
  - **Button pressed for 5 seconds:** 0.5 sec ON / 0.5 sec OFF
  - **Button pressed for 10 seconds:** 0.25 sec ON / 0.25 sec OFF

> 🔁 **Note:** These LED states are prioritized from top to bottom. Each subsequent state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Black |
| Terminals color | Black |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% – 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110 – 240 V~ / 24 V⎓ ±10% |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, ≤16 A rated current, ≥6 kA interrupting rating, energy limiting class 3 |
| **Output circuits ratings** | |
| Max. switching voltage | 240 V~ / 30 V⎓ |
| Max. switching current AC | 10 A per channel, 16 A total, 18 A peak total |
| Max. switching current DC | 10 A |
| **Sensors & Meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode, AC power supply*

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode, DC power supply*

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Cover mode wiring*

### Legend

| Symbol | Description |
|-------|-------------|
| **O1, O2** | Load circuit output terminals |
| **N** | Neutral wire |
| **L** | Live terminal (110–240 VAC) |
| **L** | Live wire (110–240 V~) |
| **S1, S2** | Switch input terminals |
| **+** | 24 V⎓ positive wire/terminal |
| **-** | 24 V⎓ negative wire/terminal |

## Troubleshooting

1. **Ensure proper power delivery:**
   - Check power cables, outlets, and any visible power indicators on the device.

2. **Inspect all connections:**
   - Verify that wiring, terminals, and connectors are secure and properly seated. Loose connections may cause intermittent issues.

3. **Review device settings:**
   - Confirm that configurations (e.g., Wi-Fi credentials, schedules, automation rules) match intended behavior.

4. **Update firmware/software:**
   - Check for available updates. Updated firmware often resolves bugs and improves stability.

5. **Restart the device:**
   - Power off, wait 10 seconds, then power back on. This clears temporary glitches.

6. **Verify network connection:**
   - Ensure correct Wi-Fi settings. Restart your router or access point if needed.

7. **Check physical condition:**
   - Look for signs of damage, overheating, or abnormal behavior (e.g., burning smell, flickering LEDs).

8. **Confirm compatibility:**
   - Ensure the device works with other components in your system (hardware and software).

9. **Monitor environmental conditions:**
   - Avoid extreme temperatures or humidity levels outside specified ranges.

10. **Assess power quality:**
    - Voltage fluctuations or spikes may affect performance. Consider using surge protectors or voltage regulators.

> 📌 *These steps are general guidelines. Specific issues may require tailored solutions. If problems persist, contact [Shelly Technical Support](https://support.shelly.cloud/en/support/home).*

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 2PM Gen3 Web Interface Guide](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## Components and APIs

- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [All Shelly Devices & Services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly 2PM Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-2pm-gen3-1)

## Compliance

- [Shelly 2PM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Compliance Archive

- [Shelly 2PM Gen3 Multilingual EU Declaration of Conformity (53, 2024-08-12)](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

×