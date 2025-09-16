# Shelly 1PM

![](https://kb.shelly.cloud/__attachments/60424219/shelly1pm.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1PM  
- **Device model:** SHSW-PM  
- **Device SSID:** shelly1pm-XXXXXX  

## Short Description

The Shelly 1PM is a compact smart switch with integrated power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or can be managed through cloud-based home automation services.

With internet connectivity, users can access, control, and monitor the device from anywhere, provided it is connected to a Wi-Fi router and the internet.

Designed for retrofit installation, the Shelly 1PM fits into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

It features an embedded web interface for device monitoring, control, and configuration.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government / Municipal  
- University / College  

## Integrations

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## Simplified Internal Schematics

![Shelly 1PM Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- One switch/button input on screw terminal  
- Three power supply inputs on screw terminals: N (+), L, L1  

### Outputs

- One relay output with power measurement on screw terminal  

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Gen1-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION**: High voltage is present on the add-on interface when the device is powered!

## Connectivity

- Wi-Fi  

## Safety Features

- Overheating protection  
- Overpower protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Physical Controls

- One (Reset) button  
  - Press and hold for 5 seconds to enable Device Access Point mode.  
  - Press and hold for 10 seconds to perform a factory reset.  

### LED Indicator (Red)

The LED status indicates device state, with priority given to the most recent event:

| Status | LED Behavior |
|--------|--------------|
| AP enabled, Wi-Fi disabled | 1 second ON / ¼ second OFF |
| Wi-Fi enabled, not connected | 2 seconds ON / ¼ second OFF |
| Connected to Wi-Fi network | Constantly ON |
| Cloud enabled, not connected | 1 second ON / 5 seconds OFF |
| Connected to Shelly Cloud | Constantly ON |
| OTA (Over-the-Air Update) in progress | ½ second ON / ½ second OFF |
| Button pressed and held for 5 seconds | ¼ second ON / ¼ second OFF |
| Button pressed and held for 10 seconds | ⅛ second ON / ⅛ second OFF |

> **Note:** The LED states are prioritized—later states override earlier ones.

## Specifications

| Category | Specification |
|--------|---------------|
| **Physical** | |
| Size (H×W×D) | 36 × 41 × 17 mm / 1.42 × 1.61 × 0.67 in |
| Weight | ~35 g |
| Mounting | Wall console |
| Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Shell material | Plastic |
| Color | Red |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 VAC / 24–60 VDC |
| Power consumption | < 1 W |
| **Output Circuit Ratings** | |
| Max switching voltage (AC) | 250 V |
| Max switching voltage (DC) | 60 V |
| Max switching current (AC) | 16 A |
| Max switching current (DC) | 10 A |
| **Sensors & Meters** | |
| Internal temperature sensor | Yes |
| Wattmeter (AC) | Yes |
| **Radio** | |
| RF band | 2401 – 2495 MHz |
| Max RF power | < 20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **MCU** | |
| CPU | ESP8266 |
| Flash | 2 MB |
| **Firmware Capabilities** | |
| Schedules | 18 |
| Webhooks (URL actions) | 6 hooks, up to 5 URLs per hook |
| Scripting | No |
| MQTT | Yes |
| CoAP | Yes |

## Basic Wiring Diagrams

![1PM AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1PM%20AC%20wiring%20diagram-20240528-141641.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![1PM DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1PM%20DC%20wiring%20diagram-20240528-141520.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Symbol | Meaning |
|-------|--------|
| **Terminals** | |
| I | Load circuit input terminal |
| O | Load circuit output terminal |
| SW | Switch (controlling O) input terminal |
| L, L1 | Live (110–240 VAC) terminal |
| N | Neutral terminal |
| + | Positive wire |
| - | Negative wire |
| **Wires** | |
| L | Live (110–240 VAC) wire |
| N | Neutral wire |

## Troubleshooting

*(Content pending)*

## Web Interface Guide

[Read the Shelly 1PM Web Interface Guide](#)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen1/#shelly1-shelly1pm)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Printed User Guide – English, Deutsch, Italiano, Español, Português, Français](https://kb.shelly.cloud/__attachments/58032129/Printed%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

[Shelly 1PM Multilingual EU Declaration of Conformity](https://kb.shelly.cloud/__attachments/266174494/Shelly%201PM%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

*(Installation guides not available yet)*