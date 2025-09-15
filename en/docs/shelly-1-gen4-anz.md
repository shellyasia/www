# Shelly 1 Gen4 ANZ

![Shelly 1_Gen4_ANZ.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201_Gen4_ANZ.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1 Gen4  
- **Device model:** S4SW-001X16EU  
- **Device SSID:** Shelly1G4-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1028  

## Short Description

The Shelly 1 Gen4 ANZ is a compact smart switch with potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services.

The device can be accessed, controlled, and monitored remotely from any location with internet connectivity, provided it remains connected to a Wi-Fi router.

It is designed for retrofit installation in standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

Equipped with an embedded web interface, the device allows users to monitor status, configure settings, and manage operations directly through a browser.

The device features a multi-protocol wireless MCU supporting Zigbee and Bluetooth connectivity, ensuring secure and reliable communication. It also supports Matter for seamless integration into modern smart home ecosystems.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network (802.11 b/g/n/ax), enabling remote monitoring and control via mobile apps or compatible devices.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automated routines.
- **Local & Cloud Control:** Functions independently on a local network and can also be managed through cloud-based platforms.
- **Bluetooth Connectivity:** Supports Bluetooth and BLE gateways, useful during initial setup and device pairing.
- **Zigbee Connectivity:** Enables inclusion into Zigbee networks, enhancing flexibility in smart home setups.
- **User-Friendly Interface:** Includes a physical reset button for manual configuration and troubleshooting.
- **Improved Processor:** Upgraded hardware with enhanced performance and native Zigbee support.
- **Embedded Web Interface:** Full-featured web UI for real-time monitoring, configuration, and firmware updates.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n/ax) and Bluetooth 5.0 with defined indoor/outdoor range capabilities:
  - Wi-Fi: Up to 30 m indoors / 50 m outdoors
  - Bluetooth: Up to 10 m indoors / 30 m outdoors
- **Dry Contact Output:** The relay’s output is electrically isolated—no voltage or current is sourced from the relay itself. This makes it **volt-free** or **potential-free**.
- **BLE Gateway Functionality:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem by receiving Bluetooth signals and forwarding them to the cloud or non-Bluetooth devices locally.
- **Wi-Fi Range Extender:** Repeats and strengthens existing Wi-Fi signals to expand coverage across larger areas.
- **Zigbee Range Extender:** Boosts and extends Zigbee signal reach, improving network reliability in larger installations.
- **Scripting Support:** Full scripting capability using ShellyScript (see [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)).
- **Wide Integration Options:** Supports HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), UDP, and third-party integrations.
- **Scheduling:** Create complex automation schedules based on date, time, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Use dynamic virtual components for advanced automation logic ([Learn more](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)).
- **KNX Net/IP Support:** Integrate with KNX systems via IP gateway ([Documentation](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)).

## Use Cases

### Remote Appliance Control
Turn on/off electrical devices remotely using a mobile phone, tablet, PC, or smart home platform.

### Internet-Connected Convenience
Control the device from anywhere with internet access, as long as it's connected to a Wi-Fi network.

### Home Automation
Enable automatic power management for appliances to enhance comfort, convenience, and energy efficiency.

### Home Automation Use Cases

#### Light Control
- Control standard lighting (LED, incandescent, halogen).
- Schedule lights to turn on at sunset or specific times.
- Integrate with motion sensors (e.g., Shelly BLU Motion) for occupancy-based lighting.

#### Garage Door Automation
- Trigger opening/closing of garage doors via automation.
- Monitor door status using sensor inputs (e.g., Shelly Plus Add-on).
- Enable hands-free control via voice assistants.

#### Fan or Ventilation Control
- Automate bathroom or kitchen exhaust fans based on humidity levels (e.g., with Shelly BLU H&T).
- Activate ventilation during set times or based on occupancy.

#### Heater or Towel Rail Switching
- Control electric towel warmers or heaters (max. switching current: 16 A).
- Schedule operation or link to temperature thresholds via environmental sensors.

### Commercial Applications

#### Lighting Automation in Small Offices or Shops
- Automate lighting zones based on business hours.
- Reduce energy consumption using motion detectors (e.g., Shelly BLU Motion).

#### Meeting Room Occupancy
- Automatically enable/disable projectors, lights, or AV equipment based on room occupancy.

#### Security and Access Systems
- Remotely unlock gates or doors for deliveries.
- Monitor open/close state of access points for security tracking.

### Industrial/Utility Use Cases

#### Equipment Monitoring & Control
- Perform remote power cycling of routers, modems, or network switches.

#### Pump or Motor Control
- Automate irrigation pumps in greenhouses or fields (max. switching current: 16 A).
- Control valves using mechanical actuators (e.g., Shelly Add-On Mechanical Manipulator).

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Simplified Internal Schematics

![Plus-1-anz-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/Plus-1-anz-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 1 switch/button input on screw terminal: **SW**
- 1 potential-free contacts relay input on screw terminal: **I**
- 2 power supply inputs on screw terminals: **N** and **L**

### Outputs
- 1 potential-free contacts relay output on screw terminal: **O**

### Add-on Interface
- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Do not touch while energized.

## Connectivity

- Wi-Fi  
- Bluetooth  
- Zigbee  
- Matter  

## Safety Function

- Overheating protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs

- One (Control) Button:
  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth pairing mode.
  - Press and hold for 10 seconds: Factory resets the device.
  - Press 5 times consecutively: Switches firmware from Matter (default) to Zigbee.
  - Press 3 times consecutively: Enters Zigbee inclusion mode (active for 2 minutes; visible in Zigbee hub).

### Outputs

- Monochrome LED Indicator:
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 sec:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 sec:** 0.25 sec ON / 0.25 sec OFF  

> Note: States are processed in order of priority, with later states overriding earlier ones.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 26 g / 0.92 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Blue |
| Terminals color | Grey (Mouse Grey) |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110–240 V~ |
| Power consumption | < 1 W |
| Neutral required | No |
| External protection | Cable protection switch per EN60898-1 (B or C tripping characteristic, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |

| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~ |
| Max. switching current | 16 A / 240 V~ |

| **Sensors, Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m indoors / 50 m outdoors<br>(Depends on local conditions) |

| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m indoors / 30 m outdoors<br>(Depends on local conditions) |

| **Zigbee** | |
| Protocol | IEEE 802.15.4 |
| Zigbee repeater | Yes |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m indoors / 300 m outdoors<br>(Depends on local conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![1 Gen4 Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1%20Gen4%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **L**: Live wire (110–240 V~)  
- **N**: Neutral wire  
- **SW**: Switch (controlling O) input terminal  

**Wires**  
- **L**: Live terminal (110–240 V~)  
- **N**: Neutral terminal  

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1G4)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Compliance

- [Shelly 1 Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen4 ANZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20ANZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

## Printed User Guide

[Shelly 1 Gen4 ANZ Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20ANZ%20User%20Guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)