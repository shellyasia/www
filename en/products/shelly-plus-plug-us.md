# Shelly Plus Plug US

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Plug-US.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Plug US  
- **Device model:** SNPL-00116US  
- **Device SSID:** ShellyPlusPlugUS-XXXXXX  

## Short Description

The Shelly Plus Plug US is a smart plug/outlet with power monitoring and overheating protection. It enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. The device can operate independently within a local Wi-Fi network or be managed through cloud-based home automation services.

It can be accessed, configured, and monitored remotely from any location with internet access, provided the device is connected to a Wi-Fi router and the Internet.

The device includes an embedded web interface for real-time monitoring, control, and configuration of settings.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

- Google Home  
- Samsung SmartThings  
- Amazon Alexa  

## Simplified Internal Schematics

![Shelly Plus Plug US Simplified Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-US-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Input
- 1 × NEMA 5-15 (Type-B) plug  

### Output
- 1 × NEMA 5-15 (Type-B) socket  

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## Safety Features

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs
- One push button  
  - Press and hold for 5 seconds: Reboot (available up to 60 seconds after power-up)  
  - Press and hold for 10 seconds: Factory reset (available up to 60 seconds after power-up)  

### Outputs
- LED indicator  
  - Blue flashing rapidly: AP Mode  
  - Blue flashing slowly: Connected to Wi-Fi network  
  - Blue steady: Connected to Shelly Cloud  
  - Red steady: Power is supplied to the plugged-in appliance  
  - Red flashing slowly: Reboot initiated (after 5-second button press)  
  - Red flashing rapidly: Factory reset initiated (after 10-second button press)  
  - Red and blue flashing alternately: Firmware update in progress  

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (H×W×D) | 38 × 84 × 52 ±0.5 mm / 1.5 × 3.3 × 2.0 in ±0.02 in |
| | Weight | 70 ±1 g / 2.47 ±0.04 oz |
| | Compatible sockets | NEMA 5-15 (Type-B) |
| | Compatible plugs | NEMA 1-15 (Type-A) and NEMA 5-15 (Type-B) |
| | Shell material | Plastic |
| | Color | White |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply voltage (AC) | 120 V ±10 %, 60 Hz |
| | Power supply voltage (DC) | N/A |
| | Power consumption | < 1 W |
| | Max switching voltage (AC) | 140 V |
| | Max switching voltage (DC) | N/A |
| | Max switching current (AC) | 15 A |
| | Max switching current (DC) | N/A |
| **Sensors & Meters** | Internal temperature sensor | Yes |
| | Voltmeter | Yes |
| | Ammeter | Yes |
| | Power and energy meters | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max. RF power | <20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32 |
| | Flash memory | 4 MB |
| **Firmware Capabilities** | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Troubleshooting

...

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlugUS)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Shelly Plus Plug US Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Plug%20US%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Shelly Plus Plug US User and Safety Guide](../knowledge-base/shelly-plus-plug-us-user-and-safety-guide)