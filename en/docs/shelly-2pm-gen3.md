Shelly 2PM Gen3

![Shelly 2PM Gen3_semi front view.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%202PM%20Gen3_semi%20front%20view.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 2PM Gen3  
- **Device model:** S3SW-002P16EU  
- **Device SSID:** Shelly2PMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1005  

## Short Description

The Shelly 2PM Gen3 is a compact, two-channel smart switch with integrated power measurement and cover control. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device operates standalone on a local Wi-Fi network or can be managed through cloud-based home automation services. Compared to its predecessor, it features an improved processor and increased memory for enhanced performance. The device also supports Venetian blinds control.

Remote access, monitoring, and control are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device includes an embedded web interface for real-time monitoring, control, and configuration of settings.

## Main Features

- **Smart Switch with Power Measurement:** Functions as a smart switch with built-in energy monitoring to track appliance power consumption.
- **Compact Design:** Small form factor ideal for installation in standard wall boxes, behind outlets, switches, or tight spaces.
- **Remote Control:** Supports remote operation of connected devices via mobile apps, web browsers, or home automation platforms.
- **Local and Cloud Operation:** Operates independently on a local network or integrates with cloud-based automation services.
- **Enhanced Performance:** Upgraded processor and increased memory for faster response and better reliability.
- **Remote Access:** Enables full remote access and monitoring from anywhere with internet access.
- **Embedded Web Interface:** Built-in web interface for easy configuration and real-time status updates.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem by receiving Bluetooth signals and forwarding them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal across wider areas.
- **Scripting:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Support:** Compatible with third-party home systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **KNX Support:** Full support for **KNXnet/IP** communication (Switch mode only, firmware version 1.5.0 or later).
- **Scheduling:** Advanced scheduling capabilities allow defining complex operations within customizable time windows based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** [Virtual Dynamic Components Guide](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **Venetian Blinds Mode:** Enables remote control of motorized blinds, roller shutters, awnings, and similar devices. Measures power consumption of the connected motor. **Recommendation:** Use only motors equipped with electronic or mechanical limit switches. Ensure limit switches are properly set before connecting the device.

  - Controls position of blinds, rollers, shades, and venetian blinds  
  - Controls tilt angle of slats on venetian blinds  

## Use Cases

- **Appliance Control:** Automate lights, fans, heaters, and other electrical devices remotely.
- **Power Monitoring:** Track real-time energy usage to identify inefficiencies and promote energy savings.
- **Home Automation Integration:** Incorporate into custom scenes, automations, and routines using popular home automation platforms.
- **Energy Efficiency Optimization:** Use power data to detect high-consumption devices and optimize usage patterns.
- **Remote Monitoring:** Monitor and manage devices while away from home using internet-connected access.

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Simplified Internal Schematics

![Plus-2PM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**
- Three power supply inputs on screw terminals: **1 N (+)** and **2 L (Ʇ)**

### Outputs

- Two relay outputs with power measurement, accessible via screw terminals

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage present on the add-on interface when the device is powered. Exercise caution during installation or maintenance.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (in cover mode)  
- Safety switch (in cover mode)  

## Supported Load Types

- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs

- One (Control) button:

  - Press and hold for **5 seconds** to enable device access point and Bluetooth pairing.
  - Press and hold for **10 seconds** to perform a factory reset.

### Outputs

- Monochrome LED indicator:

  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> *Note:* States are prioritized from top to bottom. Each subsequent state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 30 g / 1.06 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
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
| Range | Up to 30 m indoors / 100 ft, up to 50 m outdoors / 160 ft<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 33 ft, up to 30 m outdoors / 100 ft<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![2PM-Gen3 AC-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen3%20AC-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Dual-channel switch mode, AC power supply

![2PM Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/2PM%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Dual-channel switch mode, DC power supply

![2PM-Gen 3-AC-cover-wiring.png](https://kb.shelly.cloud/__attachments/243531777/2PM-Gen%203-AC-cover-wiring.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
Cover mode wiring

### Legend

**Terminals**

- **O1, O2:** Load circuit output terminals  
- **N:** Neutral wire  
- **L:** Live terminal (110–240 VAC)  
- **L:** Live wire (110–240 V~)  
- **S1, S2:** Switch input terminals  
- **+:** 24 V⎓ positive wire  
- **-:** 24 V⎓ negative wire  
- **+**: 24 V⎓ positive terminal  
- **Ʇ:** 24 V⎓ negative terminal  

## Troubleshooting

1. **Ensure proper power supply:**
   - Check power cables, outlet functionality, and any power indicators on the device.

2. **Inspect all connections:**
   - Verify that all wires and terminals are securely fastened. Loose connections may cause intermittent failures.

3. **Review device settings:**
   - Confirm configurations match intended use cases. Incorrect settings may prevent expected behavior.

4. **Update firmware/software:**
   - Check for available updates. Firmware updates often resolve bugs and improve stability.

5. **Restart or reboot the device:**
   - Power off, wait 5–10 seconds, then power back on to clear temporary glitches.

6. **Verify network connection:**
   - Confirm correct Wi-Fi settings. Restart your router or access point if necessary.

7. **Inspect physical condition:**
   - Look for signs of damage, overheating, or unusual noises.

8. **Check system compatibility:**
   - Ensure compatibility with other components (hardware, software, protocols).

9. **Monitor environmental conditions:**
   - Avoid extreme temperatures or humidity levels outside specified ranges.

10. **Evaluate power quality:**
    - Voltage spikes or fluctuations may affect performance. Consider using surge protectors or voltage regulators.

> \*These steps are general guidelines. Specific issues may require tailored solutions. If problems persist, contact [technical customer support](https://support.shelly.cloud/en/support/home).

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 2PM Gen3 Web Interface Guide](../knowledge-base/shelly-2pm-gen3-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly2PMG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly 2PM Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%202PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-2pm-gen3-1)

## Compliance

- [Shelly 2PM Gen3 multilingual EU Declaration of Conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 AU/NZ Certificate for Suitability.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 2PM Gen3 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%202PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

Compliance Archive:
- [Shelly 2PM Gen3 multilingual EU Declaration of Conformity 53 2024-08-12.pdf](https://kb.shelly.cloud/__attachments/396492802/Shelly%202PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2053%202024-08-12.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

×