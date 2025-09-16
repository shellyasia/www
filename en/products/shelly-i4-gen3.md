# Shelly i4 Gen3

![Shelly i4 Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20i4%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly i4 Gen3  
- **Device model:** S3SN-0024X  
- **Device SSID:** ShellyI4G3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1812  

## Short Description

The Shelly i4 Gen3 is a smart Wi-Fi switch input that enables manual activation or deactivation of scenes, synchronized actions, or complex trigger scenarios. It can control other connected Shelly devices—including switches, sensors, and HTTP/MQTT-controlled equipment—making it ideal for home and small commercial automation.

Compact in size, the device fits behind standard wall switches and provides status indication and control for up to four inputs. Compared to its predecessor, it features an upgraded processor and increased memory for improved performance.

Remote access and monitoring are possible from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router. The Shelly i4 Gen3 is designed for retrofitting into standard electrical wall boxes, behind power outlets, light switches, or in tight spaces.

It includes an embedded web interface for setup and control, ensuring intuitive configuration and operation.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home network for remote monitoring and control via smartphone apps or compatible devices.
- **Alexa Integration:** Supports voice control and automation through Amazon Alexa using a virtual device routine.
- **Local and Cloud Control:** Operates independently on a local network or remotely via cloud-based home automation services.
- **Bluetooth Connectivity:** Built-in Bluetooth 4.2 with BLE support aids in initial setup and device discovery.
- **User-Friendly Interface:** Includes a physical reset button for manual interaction and diagnostics.
- **Enhanced Performance:** Upgraded processor and increased memory for faster response and more reliable operation.
- **Embedded Web Interface:** Full-featured web UI for configuration, monitoring, and real-time adjustments.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with defined indoor and outdoor range capabilities.
- **BLE Gateway Functionality:** Acts as a bridge between Bluetooth-enabled Shelly devices and the broader Shelly ecosystem—receiving signals and forwarding them to the cloud or non-BLE devices locally.
- **Wi-Fi Range Extender for IoT Devices:** Enhances Wi-Fi coverage by receiving, boosting, and retransmitting the signal across wider areas.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Extensive Integrations:** Compatible with third-party platforms via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **Virtual Components:** [Virtual Dynamic Components Documentation](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)

## Use Cases

- **Remote Appliance Control:** Turn on/off electric appliances from any location using a mobile phone, tablet, PC, or home automation system.
- **Internet-Connected Convenience:** Access and manage the device anytime, anywhere, as long as it’s connected to a Wi-Fi network.
- **Home Automation:** Enable automated power management for appliances, enhancing comfort, energy efficiency, and lifestyle convenience.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government & Municipal  
- University / College  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes – via a virtual device routine  

### Google Smart Home Supported Traits  
No  

### Samsung SmartThings Supported Capabilities  
No  

## Simplified Internal Schematics  
N/A for this device.

## Device Electrical Interfaces

### Inputs

- 4 switch/button input terminals (SW1, SW2, SW3, SW4) on screw terminals  
- 3 power supply input terminals: 1× N (Neutral), 2× L (Live)  

### Outputs  
N/A  

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Function

- Overheating protection  

## User Interface

### Inputs

- One (Control) button  
  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth connection  
  - Press and hold for 10 seconds: Performs factory reset  

### Outputs

- Monochrome LED indicator  
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> **Note:** These states are prioritized from lowest to highest. Each subsequent state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 19 g / 0.67 oz |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Mounting | Wall box |
| Shell material | Plastic |
| Shell color | Orange |
| Terminal color | Black |

| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% – 70% RH |
| Max. altitude | 2000 m / 6562 ft |

| **Electrical** | |
| Power supply | 110 – 240 V~ 50/60 Hz |
| Power consumption | < 1 W |

| **Sensors, Meters** | |
| Internal temperature sensor | Yes |

| **Radio** | |
| Wi-Fi | |
| Protocol | 802.11 b/g/n |
| RF band | 2401 – 2483 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m (100 ft) indoors, up to 50 m (160 ft) outdoors<br>(Depends on environmental conditions) |

| Bluetooth | |
| Protocol | Bluetooth 4.2 with BLE |
| RF band | 2400 – 2483.5 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m (33 ft) indoors, up to 30 m (100 ft) outdoors<br>(Depends on environmental conditions) |

| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |

| **Firmware Capabilities** | |
| Webhooks (URL actions) | 20 total; up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![i4 Gen3-20240528-133422.png](https://kb.shelly.cloud/__attachments/243531777/i4%20Gen3-20240528-133422.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![i4 DC Gen3 with buttons AC symbol.png](https://kb.shelly.cloud/__attachments/243531777/i4%20DC%20Gen3%20with%20buttons%20AC%20symbol.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **SW1, SW2, SW3, SW4**: Switch/button input terminals  
- **L**: Live wire (110–240 V~)  
- **L**: Live terminal (110–240 V~)  
- **N**: Neutral wire  
- **N**: Neutral terminal  

**Wires**  
- Solid or stranded conductors within specified gauge range (24–14 AWG)

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly i4 Gen3 Web Interface Guide](../knowledge-base/shelly-i4-gen3-web-interface-guide)

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyI4G3)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly I4 Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20I4%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly i4 Gen3 AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20i4%20Gen3%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly i4 Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20i4%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive**
- [Shelly i4 Gen3 Multilingual EU Declaration of Conformity (50, 2024-05-29)](https://kb.shelly.cloud/__attachments/342818818/Shelly%20i4%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2050%202024-05-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly i4 Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20i4%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-i4-gen3-1)

## Installation Guides

×