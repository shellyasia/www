# Shelly Plus i4

![](https://kb.shelly.cloud/__attachments/229146742/Plus-i4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus i4  
- **Device model:** SNSN-0024X  
- **Device SSID:** ShellyPlusI4-XXXXXX  

## Short Description

The Shelly Plus i4 is a smart Wi-Fi switch input device that enables manual activation or deactivation of any created scene, execution of synchronized actions, or complex trigger scenarios. It can control other connected Shelly switches, sensors, or devices managed via HTTP and MQTT protocols.

Compact in size, the Shelly Plus i4 fits behind standard wall switches and provides status indication and control for up to four inputs. Remote access and monitoring are possible from anywhere with internet connectivity, provided the device is connected to a Wi-Fi router.

It is designed for retrofit installation into standard electrical wall boxes, behind power outlets, light switches, or other tight spaces.

The device includes an embedded Web Interface for setup and control.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

- Alexa (via virtual device routine)  

## Simplified Internal Schematics

## Device Electrical Interfaces

### Inputs

- 4 switch/button inputs on screw terminals: SW1, SW2, SW3, SW4  
- 3 power supply inputs on screw terminals: 1 N and 2 L  

### Outputs

N/A

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly Plus i4 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during handling or connection.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Features

- Overheating protection  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable Access Point mode and Bluetooth connection.  
  - Press and hold for 10 seconds to perform a factory reset.  

### Outputs

- LED (monocolor) indicator  
  - **AP enabled, Wi-Fi disabled:** 1 second ON / 1 second OFF  
  - **Wi-Fi enabled, not connected to network:** 1 second ON / 3 seconds OFF  
  - **Connected to Wi-Fi network:** Constantly ON  
  - **Cloud enabled, not connected:** 1 second ON / 5 seconds OFF  
  - **Connected to Shelly Cloud:** Constantly ON  
  - **OTA (Over-the-Air Update):** 0.5 second ON / 0.5 second OFF  
  - **Button pressed and held for 5 seconds:** 0.5 second ON / 0.5 second OFF  
  - **Button pressed and held for 10 seconds:** 0.25 second ON / 0.25 second OFF  

> *Note:* The LED states are prioritized from top to bottom. Each subsequent state overrides the previous one.

## Specifications

| **Category** | **Specification** |
|-------------|------------------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| Weight | 18 g / 0.63 oz |
| Mounting | Wall box |
| Screw terminal max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| Shell material | Plastic |
| Color | Orange |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 VAC, 50/60 Hz |
| Power consumption | <1 W |
| **Sensors, Meters** | |
| Internal temperature sensor | Yes |
| **Radio** | |
| RF band | 2400–2495 MHz |
| Max RF power | <20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m indoors / 100 ft; up to 50 m outdoors / 160 ft<br>(Depends on local conditions) |
| Bluetooth protocol | 4.2 |
| Bluetooth range | Up to 10 m indoors / 33 ft; up to 30 m outdoors / 100 ft<br>(Depends on local conditions) |
| **MCU** | |
| CPU | ESP32-U4WDH |
| Flash | 4 MB |
| **Firmware Capabilities** | |
| Webhooks (URL actions) | 20 total, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![](https://kb.shelly.cloud/__attachments/243531777/image-20220930-080819.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/243531777/image-20220930-080826.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

**Terminals**  
- **SW1, SW2, SW3, SW4**: Switch/button input terminals  
- **L**: Live (110–240 V) terminal  
- **N**: Neutral terminal  

**Wires**  
- **L**: Live (110–240 V) wire  
- **N**: Neutral wire  

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly Plus i4 Web Interface Guide](../knowledge-base/shelly-plus-i4-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusI4)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Shelly Plus i4 Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20i4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

- [Shelly Plus i4 Multilingual EU Declaration of Conformity.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus i4 AU/NZ Certificate for Suitability.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20i4%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)