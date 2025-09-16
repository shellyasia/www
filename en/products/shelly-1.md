# Shelly 1

![](https://kb.shelly.cloud/__attachments/60424193/shelly1.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1  
- **Device model:** SHSW-1  
- **Device SSID:** shelly1-XXXXXX  

## Short Description

The Shelly 1 is a compact smart switch featuring potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates either standalone within a local Wi-Fi network or through cloud-based home automation services.

With internet connectivity, users can access, control, and monitor the device from anywhere, provided it remains connected to a Wi-Fi router and the Internet.

Designed for easy retrofitting, the Shelly 1 fits into standard electrical wall boxes, behind power outlets, light switches, or other tight spaces.

It includes an embedded web interface for device monitoring, control, and configuration.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

- Google Assistant  
- Samsung SmartThings  
- Amazon Alexa  

## Simplified Internal Schematics

![Shelly 1 Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal  
- 1 potential-free contacts relay input on screw terminal  
- 2 power supply inputs on screw terminals: N (+) and L (-)  

### Outputs

- 1 potential-free contacts relay output on screw terminal  

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Gen1-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during installation or maintenance.

## Connectivity

- Wi-Fi  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## Specifications

| **Category** | **Type** | **Value** |
|-------------|---------|----------|
| **Physical** | Size (HxWxD) | 36 × 41 × 17 mm / 1.42 × 1.61 × 0.67 in |
| | Weight | — |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Blue |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 110–240 VAC / 24–60 VDC / 12 VDC ±10% |
| | Power consumption | < 1 W |
| **Output circuits ratings** | Max switching voltage AC | 250 V |
| | Max switching voltage DC | 60 V |
| | Max switching current AC | 16 A |
| | Max switching current DC | 10 A |
| **Radio** | RF band | 2401 – 2495 MHz |
| | Max. RF power | < 20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP8266 |
| | Flash | 2 MB |
| **Firmware capabilities** | Schedules | 18 |
| | Webhooks (URL actions) | 6 hooks, up to 5 URLs per hook |
| | Scripting | No |
| | MQTT | Yes |
| | CoAP | Yes |

## Basic Wiring Diagrams

![1 AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1%20AC%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![1 DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/1%20DC%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**

- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **SW**: Switch (controlling O) input terminal  
- **L**: Live (110–240 VAC) terminal  
- **N**: Neutral terminal  
- **+**: DC positive terminal  
- **-**: DC negative terminal  

**Wires**

- **L**: Live (110–240 VAC) wire  
- **N**: Neutral wire  
- **+**: 12 / 24–60 VDC positive wire  
- **-**: Negative wire  

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly 1 Web Interface Guide](#)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen1/#shelly1-shelly1pm)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Printed User Guide – English, Deutsch, Italiano, Español, Português, Français](https://kb.shelly.cloud/__attachments/57049089/Printed%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

[Shelly 1 Multilingual EU Declaration of Conformity](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

×