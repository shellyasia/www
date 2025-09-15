# Shelly Plus Plug IT

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Plug-IT.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Plug IT  
- **Device model:** SNPL-00110IT  
- **Device SSID:** ShellyPlusPlugIT-XXXXXX  

## Short Description

The Shelly Plus Plug IT is a smart plug/outlet with power measurement and overheating protection, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates either standalone within a local Wi-Fi network or through cloud-based home automation services.

The device can be accessed, configured, and monitored remotely from any location with internet connectivity, provided it is connected to a Wi-Fi router and the internet.

It features an embedded web interface for monitoring, controlling, and adjusting device settings.

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

![Shelly Plus Plug IT Simplified Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-IT-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Input
- CEI 23-16 / IT1-10P (Type L) plug  

### Output
- CEI 23-16 / IT1-10P (Type L) socket  

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
  - Red steady: Power supplied to the connected appliance  
  - Red flashing slowly: Reboot initiated (button pressed for 5 sec)  
  - Red flashing rapidly: Factory reset initiated (button pressed for 10 sec)  
  - Red and blue flashing alternately: Firmware update in progress  

## Specifications

| **Category** | **Type** | **Value** |
|-------------|--------|---------|
| **Physical** | Size (H×W×D) | 70 × 70 × 70 mm ±0.5 mm / 2.76 × 2.76 × 2.76 in ±0.02 in |
| | Weight | 105 ±1 g / 3.70 ±0.04 oz |
| | Compatible sockets | CEI 23-16 / IT1-10P (Type L) |
| | Compatible plugs | CEI 23-16 / IT1-10P (Type L), CEE 7/16 (Type C) |
| | Shell material | Plastic |
| | Color | White |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply voltage AC | 230 V ±10 %, 60 Hz |
| | Power supply voltage DC | N/A |
| | Power consumption | < 1 W |
| **Output circuits ratings** | Max switching voltage AC | 260 V |
| | Max switching voltage DC | N/A |
| | Max switching current AC | 10 A |
| | Max switching current DC | N/A |
| **Sensors, meters** | Internal temperature sensor | Yes |
| | Voltmeter | Yes |
| | Ammeter | Yes |
| | Power and energy meters | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max. RF power | < 20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors; up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft indoors; up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32 |
| | Flash | 4 MB |
| **Firmware capabilities** | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Troubleshooting

*(Content pending)*

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusPlugIT)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Compliance

[Shelly Plus Plug IT Multilingual EU Declaration of Conformity 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Plug%20IT%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive**  
[Shelly Plus Plug IT Multilingual EU Declaration of Conformity 2 (2023-05-01).pdf](https://kb.shelly.cloud/__attachments/105775153/Shelly%20Plus%20Plug%20IT%20multilingual%20EU%20declaration%20of%20conformity%202%202023-05-01.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

[Shelly Plus Plug IT Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Plug%20IT%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Shelly Plus Plug IT User and Safety Guide](../knowledge-base/shelly-plus-plug-it-user-and-safety-guide)