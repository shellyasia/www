# Shelly Dimmer 0/1-10V PM Gen3

## Device Image

![Shelly Dimmer 0/1-10V PM Gen3](https://kb.shelly.cloud/__attachments/229146742/MicrosoftTeams-image%20(10).png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device Name:** Shelly Dimmer 0/1-10V PM Gen3  
- **Device Model:** S3DM-0010WW  
- **Device SSID:** Shelly0110DimG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1072  

## Short Description

The Shelly Dimmer 0/1-10V PM Gen3 is a smart dimming controller that enables remote control of dimmable drivers via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or can be managed through cloud-based home automation services. As a current-sourcing controller, it supports both 0–10V and 1–10V driver types.

## Main Features

- **Bluetooth:** Complies with Bluetooth standards for short-range data exchange with other Bluetooth devices.
- **BLE Gateway:** Facilitates communication between BLE and Wi-Fi-enabled devices.
- **Wi-Fi:** Connects to wireless networks for local and remote access.
- **Wi-Fi Range Extender:** Retransmits Wi-Fi signals to extend coverage.
- **Scripting:** Enables creation of custom automation scenarios using scripts.
- **Basic Schedules:** Supports weekly schedules and routines with adjustable brightness, transition duration, and flip value of the dimming signal.
- **Advanced Schedules:** Offers detailed yearly scheduling with time adjustments ranging from seconds to months, including brightness, transition duration, and flip value settings.
- **Shelly Plus Add-On Compatible:** Supports connection to Shelly Plus sensor interfaces for expanded functionality.
- **Auto On/Off Timers:** Allows configuration of automatic on/off timing.
- **Local Actions:** Enables automation scenarios executed locally within the Wi-Fi network, including brightness, transition duration, and flip value control.
- **Webhooks:** Supports lightweight, event-driven automation with external devices.
- **Compatibility:** Fully compatible with third-party home automation platforms.
- **No Hub Required:** Ready for use locally or remotely via Shelly Smart Control or third-party systems.
- **Activity Log:** Maintains a detailed history of device events.
- **KVS (Key-Value Storage):** Provides persistent storage for key-value pairs.
- **Customizable Thresholds & Offsets:** Adjustable temperature, humidity, and light thresholds when used with a Shelly Plus Add-On.
- **Safety:** Includes overcurrent, overvoltage, and overpower protection.
- **Power Measurement:** Accurately monitors energy consumption—displays voltage (V), current (A), and power (W).
- **Diverse Driver Integration:** Supports 0–10V and 1–10V driver types (lights, motors, valves, etc.).
- **Night Mode:** Automatically sets reduced brightness during nighttime hours.
  - If *night mode brightness* < *min_brightness_on_toggle*, then *min_brightness_on_toggle* is applied.
- **Switch/Button Input Mode:** Flexible input control via switches and/or buttons.
  - One-button dimming control
  - Dual-button dimming control
- **Transition Duration:** Controls the time for dimming from 0% to 100% on turn-on and from 100% to 0% on turn-off.
- **Minimum Brightness on Toggle On:** Applies a minimum brightness level (in %) when turning on, if current brightness is below this threshold. Default: 3%. Not applied when explicit transitions are defined in Schedules or Actions.
- **Min/Max Brightness:** Adjusts the dimming range for finer control over output brightness.
- **Button Fade Rate:** Controls how quickly brightness changes while holding a button. Default: 3x.
- **Button Presets:** Sets a specific state upon double-press (double-click). Default: 100%.
- **Virtual Components:** User-created components that do not exist physically on the device but are dynamically added.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Use Cases

- Control brightness of dimmable lights within the 0–10 V range for optimal lighting levels.  
- Create smart schedules to automatically adjust light brightness throughout the day.  
- Retrofit existing lighting systems by replacing traditional switches with the Dimmer 0/1-10V PM Gen3.  
- Sync lighting with sunrise and sunset times using intelligent scheduling.  
- Activate night mode for lower brightness during evening and nighttime hours.  
- Integrate with third-party platforms such as Home Assistant, Google Home, Alexa, and SmartThings for enhanced control.  
- Dim lights up or down using single or double button presses.  
- Monitor and track power usage of connected lights for improved energy management.

## Integrations

### Amazon Alexa Supported Capabilities  
Yes

### Google Smart Home Supported Traits  
Yes

### Samsung SmartThings Supported Capabilities  
Yes

## Simplified Internal Schematics

![0–10V Dimmer Gen3 Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/0_1-10V-Dimmer-gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**  
- Two power supply inputs on screw terminals: **L** (Live) and **N** (Neutral)

### Outputs

- Two 0–10V outputs on screw terminals: **+** and **−**  
- One relay output with power measurement on a screw terminal

### Add-On Interface

- Shelly proprietary serial interface

![Shelly Plus 1 Add-On Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage present on the add-on interface when the device is powered.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Functions

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types

- 0–10V signal control for various drivers (lights, motors, valves, etc.)  
- 1–10V signal control  

## User Interface

### Inputs

- One (Control) button:
  - Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled**: 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected**: 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network**: Constantly ON  
  - **Cloud enabled, not connected**: 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud**: Constantly ON  
  - **OTA (Over-the-Air Update)**: 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds**: 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds**: 0.25 sec ON / 0.25 sec OFF  

> The LED states are prioritized in order: initial status has lowest priority; each subsequent state overrides the previous one.

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 38.5 × 43.5 × 17 mm / 1.52 × 1.71 × 0.67 in |
| Weight | 28.5 g / 0.99 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Mounting | Wall console / behind wall / ceiling construction |
| Shell material | Plastic |
| Shell color | Pantone 2736C (blue) |
| Print color | White |
| Connector color | Black |

| **Environmental** | |
| Ambient working temperature | −20 °C to 40 °C / −5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110–240 V~ 50/60 Hz |
| Power consumption | < 1.5 W |
| Neutral required | No |
| 0–10V/1–10V control type | Current sourcing |
| External protection | 16 A, tripping characteristic B or C, 6 kA interrupting rating, Energy limiting class 3 |

| **Output Circuits Ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current | 13 A |
| Max. control current | 35 mA |

| **Sensors & Meters** | |
| Voltmeter (AC) | 110 V – 240 V |
| Voltmeter accuracy | ±10% |
| Ammeter (AC) | 50 mA – 16 A |
| Ammeter accuracy | ±10% |
| Power & Energy Meters | Active and apparent power; active and apparent energy; power factor |
| Measurement data storage | No |
| Internal temperature sensor | Yes |

| **Radio** | |
| Wi-Fi Protocol | 802.11 b/g/n |
| RF Band | 2401 – 2495 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors; up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |

| **Bluetooth** | |
| Protocol | 4.2 |
| RF Band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors; up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |

| **Microcontroller Unit** | |
| CPU | Shelly ESP32 C3 |
| Clock frequency | 40 MHz |
| Flash memory | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| Advanced Schedules | Yes |
| KVS (Key-Value Store) | Yes |

## Basic Wiring Diagrams

![0–10V Dimmer PM Gen3 Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/0_1-10V%20Dimmer%20PM%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**
- **L**: Live (110–240 V) terminal  
- **N**: Neutral terminal  
- **S1**, **S2**: Switch/button input terminals for light control  
- **+**, **−**: 0–10 VDC positive and negative terminals  
- **O**: Relay output terminal  

**Wires**
- **L**: Live (110–240 V) wire  
- **N**: Neutral wire  
- **Dim+**, **Dim−**: Positive and negative terminals of the LED driver  
- **V+**, **V−**: Output terminals of the LED driver  

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

...

## Components and APIs

- [Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyDimmer0110VPMG3)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance and Certification

### Compliance Documents

- [Shelly Dimmer 0/1-10V PM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%200_1-10V%20PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Dimmer 0/1-10V PM Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%200_1-10V%20PM%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Dimmer 0/1-10V PM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%200_1-10V%20PM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**
- [Shelly Dimmer 0/1-10V PM Gen3 Multilingual EU Declaration of Conformity (Issue 51, 2024-05-30)](https://kb.shelly.cloud/__attachments/388956161/Shelly%20Dimmer%200_1-10V%20PM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2051%202024-05-30.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

[Shelly Dimmer 0/1-10V PM Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Dimmer%200_1-10V%20PM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-dimmer-0-1-10v-pm-gen3-1)

## Installation Guides

×