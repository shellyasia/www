# Shelly Plus 2PM UL

![Shelly-Plus-2PM-UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly-Plus-2PM-UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 2PM UL  
- **Device model:** SNSW-002P15UL  
- **Device SSID:** ShellyPlus2PM-XXXXXX  

## Short Description

The Shelly Plus 2PM UL is a UL-certified, compact 2-channel smart switch with power measurement and cover control. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device operates standalone on a local Wi-Fi network or can be managed through cloud-based home automation services.

It supports remote access, control, and monitoring from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

Designed for retrofit installations, it fits into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device features an embedded Web Interface for configuration, monitoring, and real-time control.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities
- Yes

### Google Smart Home Supported Traits
- Yes

### Samsung SmartThings Supported Capabilities
- Yes

## Simplified Internal Schematics

![Plus-2PM-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407109633/Plus-2PM-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 2 switch/button inputs on screw terminals: S1 and S2  
- 3 power supply inputs on screw terminals: 1 N (+) and 2 L (Ʇ)

### Outputs

- 2 relay outputs with integrated power measurement, accessible via screw terminals

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during installation and maintenance.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Features

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (cover mode)  
- Safety switch (cover mode)  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds: Enables Device Access Point and Bluetooth connection  
  - Press and hold for 10 seconds: Performs factory reset  

### Outputs

- LED (monocolor) indicator  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air Update): ½ sec ON / ½ sec OFF  
  - Button pressed and held for 5 seconds: ½ sec ON / ½ sec OFF  
  - Button pressed and held for 10 seconds: ¼ sec ON / ¼ sec OFF  

> *Note:* The LED states are prioritized in order. Later states override earlier ones.

## Specifications

| Type | Value |
|------|-------|
| **Physical** | |
| Size (H×W×D) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | — |
| Mounting | Flush mounting |
| Screw terminals max torque | 0.25 Nm / 2.2 lb-in |
| Conductor cross section | 1.0 to 2.5 mm² / 20 to 14 AWG |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Shell material | Plastic |
| Color | Black |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 120 VAC, 50/60 Hz |
| Power consumption | < 1.4 W |
| **Output circuits ratings** | |
| Max switching voltage AC | 120 V |
| Max switching voltage DC | N/A |
| Max switching current AC | 8 A (per channel), 16 A (total) |
| Max switching current DC | N/A |
| **Sensors, meters** | |
| Internal temperature sensor | Yes |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| **Radio** | |
| RF band | 2400 – 2495 MHz |
| Max RF power | < 20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| Bluetooth protocol | 4.2 |
| Bluetooth range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | |
| CPU | ESP32-U4WDH |
| Flash | 4 MB |
| **Firmware capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20, with up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| CoAP | No |

## Basic Wiring Diagrams

![Plus 2PM AC UL Wiring Diagram](https://kb.shelly.cloud/__attachments/231080110/Plus%202PM%20AC%20UL%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Dual-channel switch mode, AC power supply**

![Plus 2PM AC UL Cover Wiring Diagram](https://kb.shelly.cloud/__attachments/231080110/Plus%202PM%20AC%20UL%20cover%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Cover mode**

### Legend

| Symbol | Description |
|--------|-------------|
| **Terminals** | |
| **N** | Neutral terminal |
| **L** | Live (120 VAC) terminal |
| **O1, O2** | Load circuit output terminals |
| **S1, S2** | Switch input terminals |
| **Wires** | |
| **N** | Neutral wire |
| **L** | Live (120 VAC) wire |

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly Plus 2PM, Plus 2PM UL Web Interface Guide](../knowledge-base/shelly-plus-2pm-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus2PM)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus 2PM UL Bilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%202PM%20UL%20bilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)