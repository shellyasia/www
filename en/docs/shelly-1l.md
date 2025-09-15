# Shelly 1L

![](https://kb.shelly.cloud/__attachments/65830913/shelly1l.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1L  
- **Device model:** SHSW-L  
- **Device SSID:** shelly1l-XXXXXX  

## Short Description

The Shelly 1L is a compact smart switch designed to simplify the automation of light switches that traditionally lack a Neutral wire. It operates using only the live (hot) line, making it ideal for retrofitting into existing electrical setups.

With the Shelly 1L, users can remotely control connected appliances via smartphone, tablet, PC, or home automation systems. The device functions either standalone within a local Wi-Fi network or integrates with cloud-based home automation services.

Remote access, control, and monitoring are possible from anywhere with an internet connection, provided the device remains connected to a Wi-Fi router and the Internet.

It fits seamlessly into standard electrical wall boxes, behind power outlets, light switches, or in tight spaces where space is limited.

The device includes an embedded Web Interface for easy configuration, real-time monitoring, and settings adjustment.

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

![Shelly 1L Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/1L-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- Two switch/button inputs on screw terminals  
- Two power supply inputs on screw terminals: N (Neutral) and L (Live)

### Outputs

- Two switch signal output terminals on screw terminal  
- One load output terminal on screw terminal

### Add-on Interface

- Shelly proprietary serial interface

![Shelly 1L Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/1L-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION:** High voltage is present on the add-on interface when the device is powered. Exercise caution during installation and maintenance.

## Connectivity

- Wi-Fi

## Safety Features

- Overheating protection

## Supported Load Types (with and without Neutral)

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners)

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable the device’s access point mode.  
  - Press and hold for 10 seconds to perform a factory reset.

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (H×W×D) | 38 × 43 × 14 ±0.5 mm / 1.50 × 1.69 × 0.55 ±0.02 in |
| | Weight | — |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Cyan |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply AC | 110–240 V, 50/60 Hz |
| | Power supply DC | No |
| | Neutral not needed | Yes |
| | Min. load without neutral | 20 W resistive load |
| | Power consumption | < 1 W |
| **Output circuits ratings** | Max switching voltage AC | 250 V |
| | Max switching voltage DC | N/A |
| | Max switching current AC | 4.1 A (5 A peak) |
| | Max switching current DC | N/A |
| **Sensors, meters** | Internal temperature sensor | Yes |
| **Radio** | RF band | 2401 – 2495 MHz |
| | Max RF power | <20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP8266 |
| | Flash | 2 MB |
| **Firmware capabilities** | Schedules | 18 |
| | Webhooks (URL actions) | 10 with 5 URLs per hook |
| | Scripting | No |
| | MQTT | Yes |
| | CoAP | Yes |

## Basic Wiring Diagrams

![1L with N Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1L%20with%20N%20wiring%20diagram-20240528-141423.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![1L without N Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1L%20without%20N%20wiring%20diagram-20240528-141338.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| **Label** | **Description** |
|----------|------------------|
| **SW1** | Switch 1 input terminal |
| **SW2** | Switch 2 input terminal |
| **L** | Live (110–240 VAC) wire |
| **N** | Neutral wire |
| **Sx** | Switch signal output terminal |
| **O** | Load output terminal |
| **L** | Live (110–240 V) terminal |
| **N** | Neutral terminal |

## Troubleshooting

*(To be added)*

## Web Interface Guide

[Read the Shelly 1L Web Interface Guide](../knowledge-base/shelly-1l-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen1/#shelly1-shelly1pm)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Download printed user guide – English, Deutsch, Italiano, Español, Português, Français](https://kb.shelly.cloud/__attachments/64651265/Download%20printed%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

[Shelly 1L Multilingual EU Declaration of Conformity.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%201L%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

*(To be added)*