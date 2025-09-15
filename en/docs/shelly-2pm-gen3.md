# Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2PM Gen3  
- **Device model:** S3SW-002P16EU  
- **Device SSID:** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1005  

## Short Description

The Shelly 2PM Gen3 is a compact, two-channel smart switch with integrated power measurement and cover control. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device operates independently on a local Wi-Fi network or through cloud-based home automation services.

It features an upgraded processor and increased memory compared to previous generations, delivering improved performance. The device also supports motorized Venetian blinds control.

Remote access, control, and monitoring are possible from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device includes an embedded web interface for configuration, monitoring, and real-time control.

## Main Features

- **Smart Switch with Power Measurement:** Controls devices while measuring real-time energy consumption of connected appliances.
- **Compact Design:** Small form factor ideal for installation in standard wall boxes, behind outlets, switches, or tight spaces.
- **Remote Control:** Full remote operation via mobile apps, tablets, PCs, or home automation platforms.
- **Local and Cloud Operation:** Functions standalone on a local network and integrates with cloud-based automation services.
- **Improved Processor and Memory:** Enhanced hardware ensures faster response times and better multi-tasking capability.
- **Remote Access:** Enables full remote access and monitoring from any internet-connected location.
- **Embedded Web Interface:** Built-in web UI for easy setup, monitoring, and configuration.
- **BLE Gateway:** Acts as a bridge between Bluetooth-enabled Shelly devices and the broader Shelly ecosystem—receives BLE signals and forwards them to the cloud or to non-BLE devices locally.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, boosting, and retransmitting the signal across wider areas.
- **Scripting:** Supports custom automation using Shelly Script (see [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)).
- **Wide Integration Support:** Compatible with third-party systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Fully supports KNXnet/IP communication (Switch mode only; firmware version 1.5.0 or later required).
- **Scheduling:** Advanced scheduling allows complex operations based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Create dynamic virtual components for advanced automation logic ([Learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)).
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and similar devices. Measures power usage of the connected motor.  
  - Controls blind/shade position  
  - Adjusts tilt angle of venetian blind slats  
  > ⚠️ **Note:** Use only motors equipped with electronic or mechanical limit switches. Ensure limits are properly set before connecting the device.

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, and other electrical devices remotely.
- **Power Monitoring:** Track real-time energy consumption to analyze usage patterns and promote efficiency.
- **Home Automation Integration:** Seamlessly integrate into smart home ecosystems for scene creation and scheduled actions.
- **Energy Efficiency Optimization:** Identify high-consumption devices and optimize usage to reduce electricity costs.
- **Remote Monitoring & Control:** Manage connected devices from anywhere with internet access, even when away from home.

## Integrations

### Amazon Alexa
- Supported capabilities: Yes

### Google Smart Home
- Supported traits: Yes

### Samsung SmartThings
- Supported capabilities: Yes

## Simplified Internal Schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**
- Three power supply inputs on screw terminals: **1 N (+)** and **2 L (Ʇ)**

### Outputs

- Two relay outputs with power measurement, accessible via screw terminals

### Add-on Interface

- Proprietary Shelly serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠️ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during handling.

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

- One **Control button**:
  - Press and hold for **5 seconds**: Enter Access Point mode and enable Bluetooth pairing.
  - Press and hold for **10 seconds**: Factory reset the device.

### Outputs

- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled but not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled but not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> 🔁 *LED states are prioritized in order listed. Higher-priority states override lower ones.*

## Specifications

| Category | Value |
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
| Terminals color | Black |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110 – 240 V~ / 24 V⎓ ±10% |
| Power consumption | < 1.4 W |
| External protection | Tripping characteristic B or C, max 16 A rated current, min 6 kA interrupting rating, energy limiting class 3 |
| **Output circuits ratings** | |
| Max. switching voltage (AC) | 240 V~ |
| Max. switching voltage (DC) | 30 V⎓ |
| Max. switching current (AC) | 10 A per channel, 16 A total, 18 A peak total |
| Max. switching current (DC) | 10 A |
| **Sensors & Meters** | |
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
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash memory | 8 MB |
| **Firmware Capabilities** | |
| Schedules | Up to 20 |
| Webhooks (URL actions) | Up to 20, with 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode – AC power supply*

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Dual-channel switch mode – DC power supply*

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
| **-** | 24 V⎓ negative wire/terminal |

## Troubleshooting

1. **Verify Power Supply**  
   - Check power cables, outlet functionality, and any visible power indicators on the device.

2. **Inspect Wiring Connections**  
   - Confirm all wires are securely fastened and correctly seated at terminals. Loose connections may cause erratic behavior.

3. **Review Device Settings**  
   - Double-check configurations in the web interface or app. Ensure settings match your intended use case.

4. **Update Firmware**  
   - Check for available firmware updates. Keeping the device updated resolves known bugs and improves stability.

5. **Restart the Device**  
   - Power off the device, wait 5–10 seconds, then restore power to clear temporary glitches.

6. **Check Network Configuration**  
   - Ensure correct Wi-Fi credentials are entered. Test network connectivity; restart router if needed.

7. **Examine Physical Condition**  
   - Look for signs of damage, overheating, or abnormal noise.

8. **Confirm Compatibility**  
   - Verify compatibility with other devices in your system (hardware/software).

9. **Monitor Environmental Conditions**  
   - Avoid extreme temperatures or humidity levels outside specified ranges.

10. **Assess Power Quality**  
    - Voltage fluctuations or spikes may affect performance. Consider using surge protectors or voltage regulators.

> \*These steps are general guidelines. Specific issues may require additional diagnostics. If problems persist, contact [technical support](https://support.shelly.cloud/en/support/home).

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 2PM Gen3 Web Interface Guide](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## Components and APIs

- [Device Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [All Shelly Devices & Services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

- [Shelly 2PM Gen3 Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-2pm-gen3-1)

## Compliance

- [Shelly 2PM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Compliance Archive

- [Shelly 2PM Gen3 Multilingual EU Declaration of Conformity (53, 2024-08-12)](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

×