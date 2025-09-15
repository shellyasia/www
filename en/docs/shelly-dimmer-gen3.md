Shelly Dimmer Gen3

## Device image(s)

![Shelly Dimmer Gen3](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Dimmer%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device identification

- **Device name:** Shelly Dimmer Gen3  
- **Device model:** S3DM-0A101WWL  
- **Device SSID:** ShellyDimmerG3-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1073  

## Short description

The Shelly Dimmer Gen3 is a single-channel smart dimming controller that enables remote control of dimmable lights and dimming drivers via mobile phone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services. The device can be accessed, controlled, and monitored remotely from any location with internet connectivity, provided it remains connected to the Internet.

It features an embedded Web Interface for monitoring, configuration, and control. The Shelly Dimmer Gen3 functions as a trailing edge dimmer switch and can be installed without a neutral wire.

## Main features

- **No need for neutral:** Operates without a neutral wire.
- **Bypass requirement:** Required when used without a neutral and the load is under 20 W. Helps eliminate residual light when the lamp is off.
- **Groups of lights:** Supports grouping, but all lights in a group must have identical power consumption (same model and manufacturer).
- **Bluetooth:** Complies with Bluetooth standard; supports short-range data exchange with other Bluetooth devices.
- **BLE Gateway:** Enables communication between BLE and Wi-Fi-enabled devices.
- **Wi-Fi:** Connects to wireless networks.
- **Wi-Fi Range extender:** Repeats and extends Wi-Fi signal coverage.
- **Scripting:** Supports custom automation scenarios through scripts.
- **Basic Schedules:** Weekly schedules and routines with configurable brightness, transition duration, and dimming signal flip value.
- **Advanced Schedules:** Year-round detailed scheduling with time adjustments ranging from seconds to months, including brightness, transition duration, and flip value settings.
- **Auto on/off timers:** Supports automatic timer-based switching.
- **Local actions:** Enables automation within the local Wi-Fi network, including brightness, transition duration, and flip value configurations.
- **Webhooks:** Supports lightweight, event-driven automation with external devices.
- **Compatibility:** Fully compatible with third-party home automation platforms.
- **No hub required:** Ready for use locally or remotely via Shelly Smart Control or third-party systems.
- **Activity log:** Maintains a detailed history of device events.
- **KVS (Key-Value Storage):** Provides persistent storage for key-value pairs.
- **Safety:** Includes overcurrent, overvoltage, and power protection. These protections may not function correctly when used without a neutral wire.
- **Power measurement:**
  - Voltage (V), current (A), and power (W) are measurable only when used with a neutral wire.
  - Power consumption cannot be measured without a neutral.
- **Night Mode:** Allows setting reduced brightness during nighttime hours.
- **Transition duration:** Controls dimming speed from 0% to 100% on turn-on and 100% to 0% on turn-off.
- **Minimum brightness on toggle On:** Sets the initial brightness level (in percent) when turning on, if current brightness is below this threshold. Default: 3%. Not applied when explicit transitions are defined in schedules or actions.
- **Min/Max brightness:** Adjusts the effective dimming range for finer control.
- **Switch/Button input mode:** Offers flexible input control:
  - One-button dimming
  - Dual-button dimming
- **Button fade rate:** Controls how quickly brightness changes while holding the button(s). Default: 3x.
- **Button presets:** Defines the state triggered by a double-click. Default: 100%.
- **Automatic dimming calibration:** Ensures smooth dimming across the full range. Must be performed on new devices, after factory reset, or following load changes.
  - On first toggle (via physical switch/button, app, web UI, or RPC command), calibration starts automatically.
  - Manual initiation: Hold both buttons simultaneously for 5 seconds. Calibration lasts up to 2 minutes.
    - Success: Light turns on for 10 seconds, then turns off.
    - Failure: Light flashes 5 times (1 sec ON / 1 sec OFF).
- **Factory reset via switch/button:** Perform 5 consecutive toggles within 60 seconds after powering on to reset the device.
- **Virtual components:** User-created dynamic components that do not exist physically on the device.
- **KNX:** Supports **KNXnet/IP** communication.

## Use cases

- Retrofit existing lighting systems without a neutral wire while retaining current switches and wiring.
- Precisely control brightness of dimmable lights for optimal ambiance.
- Create automated schedules to adjust light levels throughout the day.
- Sync lighting with sunrise and sunset times using smart schedules.
- Enable night mode for lower brightness during nighttime.
- Integrate with third-party platforms like Home Assistant, Google Home, Alexa, and SmartThings.
- Dim lights up/down with single or double button presses.
- Enhance safety by triggering lights automatically upon motion detection via Shelly Motion.

## Main applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/municipal  
- University/college  

## Integrations

### Amazon Alexa supported capabilities  
Yes

### Google Smart Home supported traits  
Yes

### Samsung SmartThings supported capabilities  
Yes

## Simplified internal schematics

![Dimmer-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Dimmer-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device electrical interfaces

### Inputs

- Two switch/button inputs on screw terminals: **S1** and **S2**  
- Three power supply inputs on screw terminals: one **N** and two **L**

### Outputs

- Internally bridged output on screw terminal: **O**

### Add-on interface

Not supported

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety functions

- Overheating protection  
- Overpower protection\*  
- Overvoltage protection\*  
- Undervoltage protection\*  
- Overcurrent protection  

\* Functionality depends on neutral wire connection.

## Supported load types

- Dimmable LED lamps: up to 150 W  
- Incandescent bulbs: up to 200 W  
- Halogen lamps: up to 200 W  
- Iron-core transformer with low-voltage incandescent lamps: up to 200 VA  
- Dimmable electronic transformers: up to 200 W  

## User interface

### Inputs

- One (Control) button:
  - Press and hold for 5 seconds to enable Access Point and Bluetooth pairing.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- Monochrome LED indicator:
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled, not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled, not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air Update): 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> **Note:** States are evaluated in order, with later states overriding earlier ones.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 38 × 42.5 × 16.5 mm / 1.50 × 1.67 × 0.65 inch |
| Weight | 24.3 g / 0.86 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Mounting | In-wall |
| Shell material | Plastic |
| Shell color | Lime |
| Print color | Black |
| Connector color | Black |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 220–240 V~ 50 Hz |
| Power consumption | < 1.5 W |
| Neutral not needed | Yes |
| Min. load without neutral and bypass | 20 W |
| Dimming type | Trailing edge |
| External protection | 16 A, tripping characteristic B or C, 6 kA interrupting rating, Energy limiting class 3 |
| Short circuit protection | Yes |

| **Output circuits ratings** | |
| Max. output power | 200 W |

| **Sensors, meters**\* | |
| Voltmeter range (AC) | 180 V – 240 V |
| Voltmeter accuracy | ±5 % (when used with neutral) |
| Ammeter range (AC) | 0 A – 3 A |
| Ammeter accuracy | ±5 % (when used with neutral) |
| Internal-temperature sensor | Yes |

\* Precise measurement requires neutral wire connection.

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

| **Microcontroller unit** | |
| CPU | ESP32 C3 & STM32 G051 |
| Clock frequency | ESP32 C3: 40 MHz |
| Flash | 8 MB |

| **Firmware capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| Advanced schedules | Yes |
| KVS (Key-Value Store) | Yes |

## Basic wiring diagrams

![Dimmer Gen3 wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/Dimmer%20Gen3%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

_Fig. 1 – With Neutral_

![Dimmer Gen3 wiring diagram-2.png](https://kb.shelly.cloud/__attachments/243531777/Dimmer%20Gen3%20wiring%20diagram-2.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

_Fig. 2 – Without Neutral, with Bypass_

### Legend

**Terminals**  
- **L** (x2): Two live terminals  
- **N**: Neutral terminal  

**Wires**  
- **L**: Live (220–240 V~) wire  
- **N**: Neutral wire  
- **O** (x2): Two output terminals connected to the load  
- **S1, S2**: Switch/button input terminals for light control  

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web user interface

- [Shelly Dimmer Gen3 Web Interface Guide](../knowledge-base/shelly-dimmer-gen3-web-interface-guide)

## Components and APIs

- [This device API documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyDimmerG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Dimmer Gen3 multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Dimmer Gen3 UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Dimmer%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance archive**  
- [Shelly Dimmer Gen3 multilingual EU declaration of conformity 65 2024-12-27.pdf](https://kb.shelly.cloud/__attachments/679182337/Shelly%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2065%202024-12-27.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed user guide

- [Shelly Dimmer Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Dimmer%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-dimmer-gen3-1)

## Installation guides

×