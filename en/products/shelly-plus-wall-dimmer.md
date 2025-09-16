# Shelly Plus Wall Dimmer

![](https://kb.shelly.cloud/__attachments/229146742/plus-wall-dimmer-us.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Wall Dimmer  
- **Device model:** SNDM-0013US  
- **Device SSID:** ShellyPlusWDUS-XXXXXX  

## Short Description

The Shelly Plus Wall Dimmer (the Device) can switch lights on/off and adjust the brightness of compatible dimmable lighting. It is designed to replace a standard US light switch with simple wiring. Enhanced with full `gen2` firmware capabilities, it offers professional integrators advanced options for custom end-user solutions. The device operates standalone within a local Wi-Fi network or integrates seamlessly with cloud-based home automation services.

Users can remotely access, configure, and monitor the Device from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

The Device includes an embedded Web Interface for local monitoring, control, and configuration of settings.

## Features

- Night mode  
- Weekly schedules  
- Auto on/off timers  

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/municipal projects  
- University/college facilities  

## Integrations

- Google Assistant  
- Amazon Alexa  
- Samsung SmartThings  

## Simplified Internal Schematics

![Shelly Plus Wall Dimmer Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-Wall-Dimmer-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 2 line wires:  
  - Black **L** (Live)  
  - White **N** (Neutral)  
- 1 green **⏚** (Ground) wire  

### Output

- 1 red **OUT** wire (connected to the load/light fixture)  

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## Supported Load Types

- Incandescent lights  
- Dimmable-only LED lights  
- Dimmable-only CFLs  

## User Interface

### Inputs

- **One power button with LED indication:**  
  - Press once: Turn lights on/off.  
  - Press and hold for 5 seconds: Activate Device Access Point (AP).  
  - Press and hold for 10 seconds: Factory reset the Device.  

- **One slider with brightness LED indication:**  
  - Slide up: Increase brightness.  
  - Slide down: Decrease brightness.  

### Outputs

- **Power Button LED Indication:**  
  - **Blue Wi-Fi LED\***:  
    - AP enabled, Wi-Fi disabled: Blue light flashing (1 sec ON / 1 sec OFF)¹  
    - Wi-Fi enabled, not connected: Blue light flashing slowly (1 sec ON / 3 sec OFF)²  
    - Wi-Fi connected, Cloud disabled or connected: Steady blue light  
    - Wi-Fi connected, Cloud enabled but not connected: Blue light flashing very slowly (1 sec ON / 5 sec OFF)³  
    - Power button held for 5 sec: Blue light flashing quickly (⅕ sec ON / ½ sec OFF)⁴  
    - Power button held for 10 sec: Blue light flashing very quickly (⅕ sec ON / ⅕ sec OFF)⁵  
    - OTA update in progress: Blue light flashing quickly (⅕ sec ON / ½ sec OFF)⁴  

  - **White Power LED\*\*** (illuminated when lights are on):  
    - AP enabled, Wi-Fi disabled: White light flashing (1 sec ON / 1 sec OFF)¹  
    - Wi-Fi enabled, not connected: White light flashing slowly (1 sec ON / 3 sec OFF)²  
    - Wi-Fi connected, Cloud disabled or connected: Steady white light  
    - Wi-Fi connected, Cloud enabled but not connected: White light flashing very slowly (1 sec ON / 5 sec OFF)³  
    - Power button held for 5 sec: White light flashing quickly (⅕ sec ON / ½ sec OFF)⁴  
    - Power button held for 10 sec: White light flashing very quickly (⅕ sec ON / ⅕ sec OFF)⁵  
    - OTA update in progress: White light flashing quickly (⅕ sec ON / ½ sec OFF)⁴  

- **Brightness LED Indication:**  
  - A single white dot is lit when lights are off.  
  - When lights are on, a vertical bar of white dots illuminates:  
    - Each lit dot represents a 14% increase in brightness (84–100% at the top dot).  

> \* Blue Wi-Fi LED can be enabled (default) or disabled via settings.  
> \*\* White Power LED can be configured by the user to: match output (default), invert output, stay always ON, or stay always OFF.  

> **Note on flash patterns:**  
> ¹ 1 second ON / 1 second OFF  
> ² 1 second ON / 3 seconds OFF  
> ³ 1 second ON / 5 seconds OFF  
> ⁴ ⅕ second ON / ½ second OFF  
> ⁵ ⅕ second ON / ⅕ second OFF  

## Specifications

| **Category** | **Specification** |
|--------------|-------------------|
| **Physical** | |
| Size without face plate and wires (HxWxD) | 104 × 44 × 39 ±0.5 mm / 4.09 × 1.73 × 1.50 ±0.02 in |
| Size with face plate and without wires (HxWxD) | 120 × 70 × 39 ±0.5 mm / 4.72 × 2.76 × 1.50 ±0.02 in |
| Weight without face plate | 105 g / 3.70 oz |
| Weight with face plate | 121 g / 4.28 oz |
| Shell material | ABS |
| Color | White |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| **Electrical** | |
| Power supply voltage AC | 100 – 120 V, 50/60 Hz |
| Power supply voltage DC | N/A |
| Power consumption | < 3 W |
| **Output Circuit Ratings** | |
| Max load power at 120 VAC | |
| &nbsp;&nbsp;Incandescent lights | 400 W |
| &nbsp;&nbsp;Dimmable-only LED/CFL | 150 W |
| **Radio** | |
| RF band | 2400 – 2495 MHz |
| Max RF power | < 20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m (100 ft) indoors, up to 50 m (160 ft) outdoors *(depends on local conditions)* |
| Bluetooth protocol | 4.2 |
| Bluetooth range | Up to 10 m (33 ft) indoors, up to 30 m (100 ft) outdoors *(depends on local conditions)* |
| **MCU** | |
| CPU | ESP32 |
| Flash memory | 4 MB |
| **Firmware Capabilities** | |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| CoAP | No |

## Wiring Diagram

![](https://kb.shelly.cloud/__attachments/243531777/Plus%20Wall%20Dimmer%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Troubleshooting

*(Content pending)*

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusWallDimmer)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Shelly Plus Wall Dimmer Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Wall%20Dimmer%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

×