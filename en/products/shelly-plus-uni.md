# Shelly Plus Uni

![](https://kb.shelly.cloud/__attachments/229146742/Plus-UNI.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Uni  
- **Device model:** SNSN-0043X  
- **Device SSID:** ShellyPlusUni-XXXXXX  

## Short Description

The Shelly Plus Uni is a compact smart universal module featuring two solid-state relays with potential-free contacts, a pulse counter, analog input, and two digital inputs. It enables remote control of electrical devices via smartphone, tablet, PC, or home automation systems. The device can operate independently on a local Wi-Fi network or be controlled through cloud-based home automation services.

Remote access, control, and monitoring are possible from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

The device includes an embedded Web Interface for monitoring, control, and configuration of settings.

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

![](https://kb.shelly.cloud/__attachments/176816159/Plus-Uni-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Power Supply

- AC/DC power supply: VAC1 and VAC2  
- DC power supply: +5 VDC and GND  

### Inputs

- 1 analog input: ANALOG IN  
- 1 1-Wire data input: DATA  
- 1 pulse counter input: COUNT IN  
- 2 digital inputs: IN1 and IN2  

### Outputs

- 1 sensor power supply output: SENSOR VCC  
- 2 potential-free contact solid-state relay outputs: OUT1 and OUT2  

### Add-on Interface

- Shelly proprietary serial interface  

![](https://kb.shelly.cloud/__attachments/176816159/Plus-Uni-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Connectivity

- Wi-Fi  
- Bluetooth (for device inclusion only)  

## Safety Features

- PCB coating film  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable Access Point mode and Bluetooth connection.  
  - Press and hold for 10 seconds to perform a factory reset.  

### Outputs

- Monochrome LED indication  
  - **AP enabled, Wi-Fi disabled:** 1 second ON / 1 second OFF  
  - **Wi-Fi enabled, not connected:** 1 second ON / 3 seconds OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 second ON / 5 seconds OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA update in progress:** 0.5 second ON / 0.5 second OFF  
  - **Button pressed and held for 5 seconds:** 0.5 second ON / 0.5 second OFF  
  - **Button pressed and held for 10 seconds:** 0.25 second ON / 0.25 second OFF  

> **Note:** The LED states are prioritized in order listed. Each higher-priority state overrides the previous one.

## Specifications

| **Category** | **Value** |
|--------------|----------|
| **Physical** | |
| PCB size (L×W×H) | 40 × 21 × 7 mm / 1.57 × 0.83 × 0.28 in |
| Weight | 8.5 g / 0.3 oz (with cables) |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| **Electrical** | |
| Power supply | |
| &nbsp;&nbsp;– 8–24 VAC<br>&nbsp;&nbsp;– 9–28 VDC<br>&nbsp;&nbsp;– 5 VDC (stabilized, via +5 VDC and GND) | |
| Power consumption | < 1 W |
| **Input circuits ratings** | |
| Digital inputs resistance | 50 kΩ |
| Digital inputs triggering voltage | 1.5 V (active low) |
| **Output circuits ratings** | |
| Max switching voltage | 30 V |
| Max switching current | 300 mA |
| **Sensors, meters** | |
| Voltmeter range | 0–15 VDC / 0–30 VDC (two-range) |
| Voltmeter accuracy | ±1% |
| Pulse counter input triggering voltage | 1.5 V (active low) |
| Pulse counter max frequency | 1 kHz |
| External sensors supported | Single DHT22 or up to five DS18B20 |
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

## Basic Wiring Diagram

![](https://kb.shelly.cloud/__theme/images/common/note-macro-icon--625ed763b7218abfc3ad.svg)

> **NOTICE:** The input connections on Shelly Plus Uni differ from those on the previous Shelly Uni model.

![](https://kb.shelly.cloud/__attachments/176816159/Plus%20Uni%20wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| **Terminal** | **Color** | **Description** |
|--------------|-----------|-----------------|
| VAC1 | Red | 8–24 VAC / 9–28 VDC power supply input 1 |
| VAC2 | Black | 8–24 VAC / 9–28 VDC power supply input 2 |
| ANALOG IN | White | Analog input |
| SENSOR VCC | Yellow | Power supply for 1-Wire sensors |
| DATA | Blue | 1-Wire data line |
| +5 VDC | Gray | 5 VDC power supply positive input |
| GND | Green | 5 VDC power supply ground and sensor ground |
| COUNT IN | Purple | Pulse counter input |
| IN1 | Orange | Digital input 1 |
| IN2 | Brown | Digital input 2 |
| OUT1 | Black | Solid-state relay 1 terminals |
| OUT2 | Black | Solid-state relay 2 terminals |

## Troubleshooting

[See troubleshooting guide](../knowledge-base/shelly-plus-uni#troubleshooting)

## Web Interface Guide

[Read the Shelly Plus Uni Web Interface Guide](../knowledge-base/shelly-plus-uni#web-interface)

## Components and APIs

- [This device](https://kb.shelly.cloud/knowledge-base/shelly-plus-0-10v-dimmer)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus UNI Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/176816159/Shelly%20Plus%20UNI%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-plus-uni-1)

## Compliance

- [Shelly Plus Uni Multilingual EU Declaration of Conformity 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Uni%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus Uni UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Uni%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive**

- [Shelly Plus Uni Multilingual EU Declaration of Conformity 29 – 2023-12-29.pdf](https://kb.shelly.cloud/__attachments/286621706/Shelly%20Plus%20Uni%20multilingual%20EU%20declaration%20of%20conformity%2029%202023-12-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

[View installation guides](../knowledge-base/shelly-plus-uni#installation)