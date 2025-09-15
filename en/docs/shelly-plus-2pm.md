# Shelly Plus 2PM

![Shelly 2PM](https://kb.shelly.cloud/__attachments/229146742/Shelly-Plus-2PM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 2PM  
- **Device model:** SNSW-002P16EU  
- **Device SSID:** ShellyPlus2PM-XXXXXX  

## Short Description

The Shelly Plus 2PM is a compact, two-channel smart switch with built-in power measurement and cover control. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device operates either standalone on a local Wi-Fi network or through cloud-based home automation services.

With internet connectivity, users can access, control, and monitor the Shelly Plus 2PM from anywhere. It is designed for retrofit installation in standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device features an embedded web interface for configuration, monitoring, and real-time control of its functions.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/municipal  
- University/college  

## Integrations

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## Simplified Internal Schematics

![Shelly Plus 2PM Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-2PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals: S1 and S2  
- Three power supply inputs on screw terminals: 1 N (+) and 2 L (Ʇ)  

### Outputs

- Two relay outputs with integrated power measurement, accessible via screw terminals  

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## Safety Features

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  
- Obstacle detection (in cover mode)  
- Safety switch (in cover mode)  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable Access Point mode and Bluetooth connection  
  - Press and hold for 10 seconds to perform a factory reset  

### Outputs

- Monochrome LED indicator with the following status patterns:

| Status | LED Behavior |
|--------|--------------|
| AP enabled, Wi-Fi disabled | 1 sec ON / 1 sec OFF |
| Wi-Fi enabled, not connected | 1 sec ON / 3 sec OFF |
| Connected to Wi-Fi network | Constantly ON |
| Cloud enabled, not connected | 1 sec ON / 5 sec OFF |
| Connected to Shelly Cloud | Constantly ON |
| OTA (Over-the-Air Update) | 0.5 sec ON / 0.5 sec OFF |
| Button pressed and held for 5 seconds | 0.5 sec ON / 0.5 sec OFF |
| Button pressed and held for 10 seconds | 0.25 sec ON / 0.25 sec OFF |

> **Note:** These states are prioritized in order—later states override earlier ones.

## Specifications

| Category | Specification |
|--------|---------------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | ~45 g |
| Mounting | Wall console |
| Screw terminal max torque | 0.4 Nm / 3.5 lbf·in |
| Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Shell material | Plastic |
| Color | Black |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH (non-condensing) |
| Max altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 VAC / 24 VDC ±10% |
| Power consumption | < 1.4 W |
| **Output circuits ratings** | |
| Max switching voltage (AC) | 240 V |
| Max switching voltage (DC) | 30 V |
| Max switching current (AC) | 10 A per channel, 16 A total, 18 A peak total |
| Max switching current (DC) | 10 A |
| **Sensors & Meters** | |
| Internal temperature sensor | Yes |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| **Radio** | |
| RF band | 2400 – 2495 MHz |
| Max RF power | <20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| Bluetooth protocol | 4.2 |
| Bluetooth range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
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

### Dual-channel Switch Mode, AC Power Supply

![Plus 2PM AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%202PM%20AC%20wiring%20diagram-20240530-100052.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Dual-channel Switch Mode, DC Power Supply

![Plus 2PM DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%202PM%20DC%20wiring%20diagram-20240528-134203.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Cover Mode

![Plus-2PM Cover Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus-2PM-cover-wiring-20240528-133942.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Symbol | Description |
|--------|-------------|
| **Terminals** | |
| N | Neutral terminal |
| L | Live (110–240 VAC) terminal |
| O1, O2 | Load circuit output terminals |
| + | 24 VDC positive terminal |
| Ʇ | 24 VDC negative terminal |
| S1, S2 | Switch input terminals |
| **Wires** | |
| N | Neutral wire |
| L | Live (110–240 VAC) wire |
| + | 24 VDC positive wire |
| - | 24 VDC negative wire |

## Troubleshooting

*(Content to be added)*

## Web Interface Guide

For detailed instructions on using the Shelly Plus 2PM web interface:

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus2PM)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus 2PM Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%202PM%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

- [Shelly Plus 2PM Multilingual EU Declaration of Conformity](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM x2 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus 2PM AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%202PM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Use Shelly Plus 2PM and Add-on with a Wind Sensor to Retract Your Motorized Awning in High Winds](../knowledge-base/use-shelly-plus-2pm-and-add-on-with-a-wind-sensor-)