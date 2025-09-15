# Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device identification

- **Device name:** Shelly 2PM Gen3  
- **Device model:** S3SW-002P16EU  
- **Device SSID:** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1005  

## Short description

The Shelly 2PM Gen3 is a compact, two-channel smart switch with power measurement and cover control. It enables remote control of electric appliances via smartphone, tablet, PC, or home automation systems. The device operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services.

It features an upgraded processor and increased memory compared to its predecessor, delivering improved performance. The device supports motorized Venetian blinds and can be retrofitted into standard electrical wall boxes, behind power sockets, light switches, or other space-constrained locations.

An embedded web interface allows users to monitor, control, and configure the device. Additionally, it functions as a BLE gateway and Wi-Fi range extender for IoT devices.

Remote access is possible from anywhere with internet connectivity, provided the device remains connected to a Wi-Fi router and the internet.

## Main features

- **Smart Switch with Power Measurement:** Controls two loads while measuring real-time power consumption for energy monitoring.
- **Compact Design:** Small form factor ideal for retrofitting into tight spaces such as wall boxes, behind sockets, or switches.
- **Remote Control:** Full remote operation via mobile apps, web interfaces, or home automation platforms.
- **Local and Cloud Operation:** Functions independently on a local network or connects to cloud services for remote access.
- **Improved Processor and Memory:** Enhanced hardware for faster response times and better multitasking.
- **Remote Access:** Monitor and control devices from any location with internet access.
- **Embedded Web Interface:** Built-in user interface for configuration, status monitoring, and settings adjustment.
- **BLE Gateway:** Bridges Bluetooth-enabled Shelly devices to the wider Shelly ecosystem by relaying signals to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Boosts Wi-Fi signal strength and extends coverage to improve connectivity for other IoT devices.
- **Scripting:** Supports custom automation using Shelly Script (see [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)).
- **Wide Range of Integrations:** Compatible with third-party home systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Enables integration with KNX networks via KNXnet/IP (Switch mode only; firmware version 1.5.0 or later required).
- **Schedules:** Create complex automated routines based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Use dynamic virtual components for advanced automation logic ([Learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)).
- **Venetian Blinds Mode:** Fully controls motorized blinds, roller shutters, awnings, and similar devices. Measures load power consumption. Requires motors with electronic or mechanical limit switches properly set before connection.

  - Controls blind/shade position  
  - Adjusts tilt angle of venetian blind slats  

## Use cases

- **Appliance Control:** Automate lights, fans, heaters, and other electrical devices remotely.
- **Power Monitoring:** Track real-time energy usage to identify inefficiencies and optimize consumption.
- **Home Automation Integration:** Build custom scenes, automations, and routines within your smart home ecosystem.
- **Energy Efficiency Optimization:** Identify high-energy-consuming devices and take action to reduce waste.
- **Remote Monitoring:** Check and manage connected devices from anywhere with an internet connection.

## Integrations

### Amazon Alexa supported capabilities
Yes

### Google Smart Home supported traits
Yes

### Samsung SmartThings supported capabilities
Yes

## Simplified internal schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device electrical interfaces

### Inputs

- Two switch/button inputs on screw terminals: S1 and S2  
- Three power supply inputs on screw terminals: 1 N (+) and 2 L (Ʇ)

### Outputs

- Two relay outputs with integrated power measurement, accessible via screw terminals

### Add-on interface

- Shelly proprietary serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (cover mode)  
- Safety switch (cover mode)  

## Supported load types

- Resistive (incandescent bulbs, heating elements)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User interface

### Inputs

- One (Control) button:

  - Press and hold for 5 seconds: Enter AP mode and enable Bluetooth pairing  
  - Press and hold for 10 seconds: Factory reset the device  

### Outputs

- Monochrome LED indicator:

  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> **Note:** States are prioritized in order listed. Higher-priority states override lower ones.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Black |
| Terminals color | Black |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~ / 24 V⎓ ±10% |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, 16 A max rated current, min. 6 kA interrupting rating, energy limiting class 3 |
| **Output circuits ratings** | |
| Max. switching voltage (AC) | 240 V~ |
| Max. switching voltage (DC) | 30 V⎓ |
| Max. switching current (AC) | 10 A per channel, 16 A total, 18 A peak total |
| Max. switching current (DC) | 10 A |
| **Sensors, meters** | |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | IEEE 802.11 b/g/n |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| **Bluetooth** | |
| Protocol | Bluetooth 4.2 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Microcontroller unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **Firmware capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic wiring diagrams

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode, AC power supply*

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode, DC power supply*

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Cover mode wiring*

### Legend

| Symbol | Description |
|--------|-------------|
| **O1, O2** | Load circuit output terminals |
| **N** | Neutral wire |
| **L** | Live terminal (110–240 VAC) |
| **L** | Live wire (110–240 V~) |
| **S1, S2** | Switch input terminals |
| **+** | 24 V⎓ positive wire/terminal |
| **−** | 24 V⎓ negative wire/terminal |

## Troubleshooting

1. **Ensure proper power delivery:**
   - Check power cables, outlets, and power indicators on the device.

2. **Inspect all connections:**
   - Verify that wiring, terminals, and connectors are secure and correctly seated. Loose connections may cause intermittent behavior.

3. **Review device settings:**
   - Confirm configurations match intended use. Incorrect settings can prevent expected functionality.

4. **Update firmware/software:**
   - Check for available updates. Keeping the device updated resolves known issues and improves stability.

5. **Restart the device:**
   - Power off, wait 5–10 seconds, then power back on. This clears temporary glitches.

6. **Verify network connection:**
   - Ensure correct Wi-Fi credentials and network configuration. Restart routers or access points if needed.

7. **Check physical condition:**
   - Look for signs of damage, overheating, or abnormal operation.

8. **Confirm compatibility:**
   - Ensure the device is compatible with other system components (hardware, software, protocols).

9. **Monitor environmental conditions:**
   - Avoid extreme temperatures or humidity levels beyond specified ranges.

10. **Assess power quality:**
    - Voltage spikes or fluctuations may affect performance. Consider using surge protectors or voltage regulators.

> \*These steps are general guidelines. Specific troubleshooting may vary depending on the issue. If problems persist, contact [technical support](https://support.shelly.cloud/en/support/home).

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web user interface

- [Shelly 2PM Gen3 Web UI Guide](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## Components and APIs

- [This device (API reference)](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed user guide

[Shelly 2PM Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-2pm-gen3-1)

## Compliance

- [Shelly 2PM Gen3 multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

Compliance archive:

- [Shelly 2PM Gen3 multilingual EU Declaration of Conformity (53, 2024-08-12)](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation guides

×