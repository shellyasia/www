# Shelly DALI Dimmer Gen3

![Shelly DALI Dimmer Gen3.png](https://kb.shelly.cloud/__attachments/229146742/Shelly%20DALI%20Dimmer%20Gen3.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly DALI Dimmer Gen3  
- **Device model:** S3DM-0A1WW  
- **Device SSID:** ShellyDDimmerG3-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1071  

## Short Description

The Shelly DALI Dimmer (Device) is a gateway device that bridges the Shelly ecosystem and APIs with a DALI lighting network. It enables control of DALI-compatible light sources equipped with DALI control gear.

> **In terms of DALI, it functions as a single-master application controller supporting LED control gear (Part 207), operating independently on the bus without sharing it with other DALI devices. The Device controls all connected DALI control gear as a single group using broadcast messages.**

The Device includes an integrated bus power supply capable of powering up to X non-powered bus units.

It can be accessed, controlled, and monitored remotely from any location with internet connectivity, provided it is connected to a Wi-Fi router and the Internet.

An embedded Web Interface allows users to monitor and control the Device, as well as adjust its configuration settings.

## Main Features

- **DALI Application Controller:** Supports DALI bus control in a single-master setup for direct or indirect DALI control gear.
- **DALI Features:** Controls light intensity of attached control gear (DT6). Color temperature control is not supported.
- **DALI Power-On Default:** Off
- **DALI On Bus Failure:** Turns on at 100%
- **Shelly Plus Add-on Compatible:** Supports connection to sensor interfaces on Shelly Plus devices.
- **Switch/Button Input Mode:** Enables flexible input control via switches or buttons.
- **One/Dual Button Dimming Control:** Fully supports dimming functionality with any wall switch configuration.
- **Night Mode:** Allows setting a specific brightness level for input lights during nighttime.
- **Min/Max Brightness:** Adjusts the dimming range for more precise brightness control.
- **Button Fade Rate:** Controls the speed of brightness change when holding a button.
- **Transition Duration:** Sets the time for dimming from 0% to 100%.
- **Weekly Schedules:** Supports daily schedules and routines, including brightness, transition duration, and flip value settings.
- **Auto On/Off Timers:** Enables automatic on/off timing configurations.
- **Local Actions:** Allows creation of automation scenarios within the local Wi-Fi network, including brightness, transition duration, and flip value adjustments.
- **Webhooks:** Supports lightweight, event-driven communication with other devices for automation.
- **BLE Gateway:** Facilitates communication between BLE and Wi-Fi-enabled devices.
- **Wi-Fi Range Extender:** Re-transmits Wi-Fi signals to extend network coverage.
- **Scripting:** Enables custom automation through scripting.
- **Compatibility:** Highly compatible with third-party home automation systems.
- **KNX:** Supports [**KNXnet/IP**](https://kb.shelly.cloud/knowledge-base/shelly-knx-documentation#:~:text=This%20documentation%20applies%20to%20Shelly%20devices%20with%20built-in%20KNXnet/IP%20support)
- **No Hub Required:** Ready for use locally or remotely via Shelly Smart Control or third-party systems.

## Use Cases

- Integrate DALI lighting into the Shelly ecosystem  
- Control DALI lights using Shelly apps, local APIs, or third-party platforms  

## Integrations

### Amazon Alexa Supported Capabilities
- Brightness Controller

### Google Smart Home Supported Traits
- Brightness

### Samsung SmartThings Supported Capabilities
- Color Control

## Simplified Internal Schematics

![image-20240510-132931.png](https://kb.shelly.cloud/__attachments/229244941/image-20240510-132931.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- Two switch/button inputs on screw terminals: **S1** and **S2**
- Two power supply inputs on screw terminals: **N** (Neutral) and **L** (Live)

### Outputs
- Two DALI bus lines: **DA+** and **DA−**

### Add-on Interface
- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage present on the add-on interface when the device is powered.

## Connectivity
- Wi-Fi  
- Bluetooth  

## Safety Function
- Overheating protection

## Supported Load Types
- Controls up to 5 DALI bus units  
- Internal bus power supply rated at 10 mA  
- Bus units must be externally powered  
- Integrated bus power supply has a maximum output current < 35 mA

## User Interface

### Inputs
- One (Control) button:
  - Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs
- Monochrome LED indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA (Over-the-Air Update):** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

*Note:* These states are prioritized from top to bottom. Each higher-priority state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 42 × 37 × 17 mm / 1.65 × 1.46 × 0.66 in |
| Weight | 18 g / 0.63 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.5 – 1.5 mm² / 20 – 16 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 5 – 6 mm / 0.20 – 0.24 in |
| Mounting | In-wall, suspended ceilings |
| Shell material | Plastic |
| Shell color | Green |
| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% – 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110 – 240 VAC ±10%, 50/60 Hz |
| Power consumption | < 2 W |
| Neutral required | No |
| **Output Circuits Ratings** | |
| Bus power supply | Guaranteed 10 mA (up to 5 DALI control gear units); short-circuit current < 35 mA |
| Bus voltage | 16 V nominal |
| **Sensors, Meters** | |
| Internal temperature sensor | Yes |
| **Radio** | |
| Wi-Fi | |
| Protocol | IEEE 802.11 b/g/n |
| RF band | 2401 – 2495 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| Bluetooth | |
| Protocol | Bluetooth 4.2 |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP32-C3 Shelly |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| Encryption | Yes, TLS 1.2 |

## Basic Wiring Diagrams

![Dali Dimmer Gen3-wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/Dali%20Dimmer%20Gen3-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Terminals | Wires |
|---------|------|
| **N** | Neutral terminal |
| **N** | Neutral wire |
| **L** | Live (110–240 V~) terminal |
| **L** | Live (110–240 V~) wire, 50–60 Hz |
| **Out** | Dali dimmer load output |
| **S1, S2** | Switch input terminals |
| **DA+** | Dali interface positive terminal |
| **DA−** | Dali interface negative terminal |

## Troubleshooting

1. **Ensure proper device power:**
   - Check power cables, outlets, and power indicators on the device.

2. **Inspect all connections:**
   - Verify that all wiring and cable connections are secure and properly seated. Loose connections may cause malfunction.

3. **Review device settings:**
   - Confirm that configurations match intended usage.

4. **Update firmware/software:**
   - Check for available updates. Keeping the device updated resolves known issues and improves performance.

5. **Restart/reboot the device:**
   - Turn off the device, wait a few seconds, then power it back on to clear temporary glitches.

6. **Check network connection:**
   - Ensure correct network settings. Test connectivity; restart routers or switches if necessary.

7. **Inspect physical components:**
   - Look for signs of damage, overheating, or abnormal behavior.

8. **Verify compatibility:**
   - Confirm compatibility with other system components (hardware and software).

9. **Monitor environmental factors:**
   - Consider ambient temperature and humidity levels.

10. **Check power quality:**
    - Voltage spikes or fluctuations may affect performance. Use surge protectors or voltage regulators if needed.

> *These are general troubleshooting steps. Specific procedures may vary depending on the issue. If problems persist, contact our [technical customer support](https://support.shelly.cloud/en/support/home).*

## Shelly Smart Control
- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface
- [Shelly DALI Dimmer Gen3 Web Interface Guide](../knowledge-base/shelly-dali-dimmer-gen3-web-interface-guide)

## Components & APIs
- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyDDimmerG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly DALI Dimmer Gen3 multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly DALI Dimmer Gen3 AU NZ Certificate for Suitability.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly DALI Dimmer Gen3 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20DALI%20Dimmer%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

### Compliance Archive
- [Shelly DALI Dimmer Gen3 multilingual EU declaration of conformity 57-1 2024-09-19.pdf](https://kb.shelly.cloud/__attachments/585105967/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2057-1%202024-09-19.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Shelly DALI Dimmer Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20DALI%20Dimmer%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-dali-dimmer-gen3)

## Installation Guides
- ×