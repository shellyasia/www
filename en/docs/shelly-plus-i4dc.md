# Shelly Plus i4DC

![](https://kb.shelly.cloud/__attachments/229146742/Plus-i4DC.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus i4DC  
- **Device model:** SNSN-0D24X  
- **Device SSID:** ShellyPlusI4DC-XXXXXX  

## Short Description

The Shelly Plus i4DC is a smart Wi-Fi switch input device that enables manual activation or deactivation of scenes, synchronized actions, or complex trigger scenarios. It can control other connected Shelly switches, sensors, or devices managed via HTTP and MQTT. Compact in size, it fits behind standard wall switches and provides status indication and control for up to four inputs.

Remote access and monitoring are possible from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofit installation, the Shelly Plus i4DC can be installed in standard electrical wall boxes, behind power outlets, light switches, or in tight spaces.

It features an embedded Web Interface for setup and control.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/municipal  
- University/college  

## Integrations

- Alexa (via virtual device routine)

## Simplified Internal Schematics

## Device Electrical Interfaces

### Inputs

- 4 switch/button inputs on screw terminals: SW1, SW2, SW3, SW4  
- 3 power supply inputs on screw terminals: 1+, 2+, and 2− (common negative)

### Outputs

N/A

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2

## Safety Features

- Overheating protection

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable Access Point mode and Bluetooth connection.  
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- LED (monochrome indicator)  
  - **AP enabled, Wi-Fi disabled:** 1 sec ON / 1 sec OFF  
  - **Wi-Fi enabled, not connected:** 1 sec ON / 3 sec OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 sec ON / 5 sec OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA (Over-the-Air Update):** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 5 seconds:** 0.5 sec ON / 0.5 sec OFF  
  - **Button pressed and held for 10 seconds:** 0.25 sec ON / 0.25 sec OFF  

> *Note: The LED states are prioritized in order listed. Each subsequent state overrides the previous one.*

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| | Weight | 17 g / 0.6 oz |
| | Mounting | Wall box |
| | Screw terminal max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Neon orange (Pantone 2010C) |
| **Environmental** | Ambient temperature | −20 °C to 40 °C / −5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 5–24 VDC |
| | Power consumption | < 1 W |
| | Internal temperature sensor | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max. RF power | < 20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware Capabilities** | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |

## Basic Wiring Diagrams

![](https://kb.shelly.cloud/__attachments/243531777/plus%20i4DC_wiring.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| **Label** | **Description** |
|----------|-----------------|
| **SW1, SW2, SW3, SW4** | Switch/button input terminals |
| **+** | 5–24 VDC positive wire |
| **+** | 5–24 VDC positive terminal |
| **−** | 5–24 VDC negative wire |
| **−** | 5–24 VDC negative terminal |

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly Plus i4DC web interface guide](../knowledge-base/shelly-plus-i4-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusI4)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus i4DC multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20i4DC%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](https://shellyusa.atlassian.net/wiki/spaces/KB/pages/edit-v2/1609695245)

## Compliance

- [Shelly Plus I4 DC multilingual EU declaration of conformity 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20I4%20DC%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 DC UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20DC%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**  
- [Shelly Plus i4DC multilingual EU declaration of conformity 5 2023-04-26.pdf](https://kb.shelly.cloud/__attachments/69107713/Shelly%20Plus%20i4DC%20multilingual%20EU%20declaration%20of%20conformity%205%202023-04-26.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)