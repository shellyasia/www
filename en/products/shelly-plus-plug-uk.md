# Shelly Plus Plug UK

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Plug-UK.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Plug UK  
- **Device model:** SNPL-00112UK  
- **Device SSID:** ShellyPlusPlugUK-XXXXXX  

## Short Description

The Shelly Plus Plug UK is a smart plug/outlet with power monitoring and overheating protection, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates either standalone within a local Wi-Fi network or through cloud-based home automation services.

The device can be accessed, configured, and monitored remotely from any location with internet connectivity, provided it is connected to a Wi-Fi router and the internet.

It features an embedded web interface for real-time monitoring, control, and configuration of settings.

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

![](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-UK-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Input
- 1 × BS 1363 (Type-G) plug

### Output
- 1 × BS 1363 (Type-G) socket

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

- One push button:
  - Press and hold for 2 seconds: Check device status.
  - Press and hold for 5 seconds: Reboot (available up to 60 seconds after power-up).
  - Press and hold for 10 seconds: Factory reset (available up to 60 seconds after power-up).

### Outputs

- LED indication:
  - **First power-up:** Blue light flashing — indicates AP mode.
  - **After successful Wi-Fi connection:**  
    - Red light flashing — reconnecting to Wi-Fi.  
    - Constant red light — unable to reconnect to Wi-Fi.
  - **Output ON:**
    - *Power consumption represented by smooth color change (default):*
      - Green at 0% of set power limit  
      - Yellow at 50% of set power limit  
      - Red at 100% of set power limit  
    - *Custom color (default: green, brightness: 100%)*  
    - *Off*
  - **Output OFF:**
    - *Off (default)*  
    - *Custom color (default: red, brightness: 100%)*
  - **OTA update in progress:** Red light flashing

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (HxWxD) | 60 × 60 × 56 ±0.5 mm / 2.36 × 2.36 × 2.20 ±0.02 in |
| | Weight | 74 ±1 g / 2.6 ±0.04 oz |
| | Compatible sockets | BS 1363 (Type-G) |
| | Compatible plugs | BS 1363 (Type-G) |
| | Shell material | Plastic |
| | Color | White |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30% to 70% RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply voltage AC | 230 V ±10%, 50/60 Hz |
| | Power supply voltage DC | N/A |
| | Power consumption | <1 W |
| **Output circuits ratings** | Max switching voltage AC | 260 V |
| | Max switching voltage DC | N/A |
| | Max switching current AC | 13 A |
| | Max switching current DC | N/A |
| **Sensors, meters** | Internal temperature sensor | Yes |
| | Voltmeter | Yes |
| | Ammeter | Yes |
| | Power and energy meters | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max RF power | <20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft (indoor), up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft (indoor), up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware capabilities** | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Troubleshooting

...

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusPlugUK)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Compliance

- [Shelly Plus Plug UK multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Plug%20UK%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus Plug UK UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Plug%20UK%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance archive:**

- [Shelly Plus Plug UK multilingual EU declaration of conformity 3 2023-05-02.pdf](https://kb.shelly.cloud/__attachments/104660993/Shelly%20Plus%20Plug%20UK%20multilingual%20EU%20declaration%20of%20conformity%203%202023-05-02.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

[Shelly Plus Plug UK multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Plug%20UK%20multilinugal%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Shelly Plus Plug UK User and Safety Guide](../knowledge-base/shelly-plus-plug-uk-user-and-safety-guide)