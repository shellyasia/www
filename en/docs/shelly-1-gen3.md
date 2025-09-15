# Shelly 1 Gen3

![Shelly 1 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1 Gen3  
- **Device model:** S3SW-001X16EU  
- **Device SSID:** Shelly1G3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1018  

## Short Description

The Shelly 1 Gen3 is a compact smart switch featuring potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or can be managed through cloud-based home automation services. Compared to its predecessor, it features an upgraded processor and increased memory for improved performance.

The device supports remote monitoring and control from any location with internet access, provided it remains connected to a Wi-Fi router and the internet.

It is designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained installations.

The Shelly 1 Gen3 includes an embedded web interface for device monitoring, control, and configuration.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network to enable remote monitoring and control.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Local and Cloud Control:** Functions independently on a local network and supports cloud-based remote access.
- **Bluetooth Connectivity:** Includes Bluetooth and BLE gateway functionality, useful during initial setup.
- **User-Friendly Interface:** Features a physical reset button for manual operations.
- **Improved Processor and Memory:** Enhanced hardware for better responsiveness and performance.
- **Embedded Web Interface:** Built-in web UI for intuitive device management.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with defined indoor and outdoor range capabilities.
- **Dry Contact Switching:** Suitable for switching low-voltage devices.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem by receiving Bluetooth signals and forwarding them to the cloud or local devices.
- **Wi-Fi Range Extender for IoT Devices:** Extends Wi-Fi coverage by receiving, amplifying, and rebroadcasting the signal over a wider area.
- **Scripting Support:** Full scripting capabilities via Shelly Script language. [Learn more](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Extensive Integrations:** Supports third-party systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **Scheduling:** Allows creation of complex schedules based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** Enables dynamic virtual components for advanced automation scenarios. [View documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## Use Cases

- **Remote Appliance Control:** Turn devices on/off remotely using a mobile app, tablet, PC, or home automation system.
- **Internet-Connected Convenience:** Access and manage devices from anywhere with internet connectivity, as long as the device is connected to a Wi-Fi network.
- **Home Automation:** Automate appliance operation for enhanced comfort and convenience.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government / Municipal  
- University / College  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes  

### Google Smart Home Supported Traits  
Yes  

### Samsung SmartThings Supported Capabilities  
Yes  

## Simplified Internal Schematics

![Shelly Plus 1 internal schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal  
- 1 potential-free contacts relay input on screw terminal  
- 2 power supply inputs on screw terminals: N and L  

### Outputs

- 1 potential-free contacts relay output on screw terminal  

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Function

- Overheating protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs

- **One (Control) Button**  
  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth connection  
  - Press and hold for 10 seconds: Performs factory reset  

### Outputs

- **LED (Monochrome) Indicator**  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled, not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air Update): 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note: The LED states are prioritized in order listed. Each subsequent state overrides the previous one.*

## Specifications

| **Category** | **Parameter** | **Value** |
|-------------|---------------|----------|
| **Physical** | Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | Weight | 26 g / 0.92 oz |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| | Conductor cross section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| | Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| | Mounting | Wall console |
| | Shell material | Plastic |
| | Shell color | Blue |
| | Terminal color | Black |

| **Environmental** | Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30% – 70% RH |
| | Max. altitude | 2000 m / 6562 ft |

| **Electrical** | Power supply | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| | Power consumption | < 1.2 W |
| | External protection | Cable protection switch per EN60898-1 (tripping characteristic B or C, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |

| **Output Circuits Ratings** | Max. switching voltage | 240 V~<br>30 V⎓ |
| | Max. switching current | 16 A / 240 V~<br>10 A / 30 V⎓ |

| **Sensors, Meters** | Internal temperature sensor | Yes |

| **Radio** | Protocol | 802.11 b/g/n |
| | RF band | 2401 – 2483 MHz |
| | Max. RF power | < 20 dBm |
| | Range | Up to 30 m / 100 ft (indoor)<br>Up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |

| **Bluetooth** | Protocol | 4.2 with BLE |
| | RF band | 2400 – 2483.5 MHz |
| | Max. RF power | < 4 dBm |
| | Range | Up to 10 m / 33 ft (indoor)<br>Up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |

| **Microcontroller Unit** | CPU | ESP-Shelly-C38F |
| | Flash | 8 MB |

| **Firmware Capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |

## Basic Wiring Diagrams

![1 Gen3 AC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ Power Supply*

![1 Gen3 DC.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–48 V⎓ Power Supply*

![1 Gen3 12V.png](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*12 V⎓ Stabilized Power Supply*

### Legend

**Terminals**  
- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **L**: Live wire (110–240 V~)  
- **N**: Neutral wire  
- **SW**: Switch (controlling O) input terminal  
- **+**: 12/24–48 V⎓ positive wire  
- **+12V**: 12 V⎓ positive terminal  
- **GND**: 12/24–48 V⎓ ground wire  
- **L**: Live terminal (110–240 V~)  
- **N**: Neutral terminal  
- **+**: 24–48 V⎓ positive terminal  
- **Ʇ**: 12/24–48 V⎓ ground terminal  

**Wires**  
- Color-coded per standard electrical practices

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly 1 Gen3 Web Interface Guide](../knowledge-base/shelly-1-gen3-web-interface-guide)

## Components and APIs

- [This device API reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/Shelly1G3)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1 Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly 1 Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**  
- [Shelly 1 Gen3 Multilingual EU Declaration of Conformity (48, 2024-05-29)](https://kb.shelly.cloud/__attachments/344260610/Shelly%201%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2048%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 1 Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-1-gen3-1)

## Installation Guides

*(No content available)*