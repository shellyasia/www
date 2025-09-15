# Shelly Plug S MTR Gen3

![Shelly Plug S MTR Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plug%20S%20MTR%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plug S Gen3  
- **Device model:** S3PL-00112EU  
- **Device SSID:** ShellyPlugSG3-XXXXXXXXXXXX  
- **BLE ID:** 0x1805  

## Short Description

The Shelly Plug S MTR Gen3 is one of the first Shelly devices to support Matter.  

This smart plug/outlet features power measurement and overheating protection, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services.

The device can be accessed, configured, and monitored remotely from anywhere with internet connectivity, provided it remains connected to a Wi-Fi router and the Internet.

An embedded Web Interface allows users to monitor and control the device, as well as adjust its settings.

## Main Features

- Matter support  
- Next-generation Wi-Fi smart plug with multicolor LED indication  
- Scripting (only supported when Matter is disabled)  
- Wi-Fi range extender  
- BLE gateway  
- Power metering  
- Schedules  
- Wide compatibility with third-party home automation systems  
- Local actions  
- Optional Shelly Cloud / Shelly Smart Control app support  
- Virtual Components  

## Use Cases

- **Seamlessly integrate with other Matter devices**  
- **Use with Apple devices (via Matter)**  
- **Use as a color night light:**  
  - Night mode with customizable settings  
  - When enabled, reduces LED brightness during nighttime hours for undisturbed sleep  

- **Prevent forgotten appliances from being left on:**  
  - Monitor and control plugged-in devices with a few taps on your phone  
  - Built-in countdown timer and locally stored schedules automatically switch off devices after a set time (e.g., 1 hour), saving energy  
  - Ideal for irons, small ovens, electric heaters  

- **Automate appliances to reduce energy waste:**  
  - Schedule automatic power-off for unused devices during evenings and weekends  
  - Example: Turn off power between 7:00 PM and 7:00 AM on weekdays, and from Friday evening to Monday morning  
  - Reduces energy consumption by up to 50%, significantly lowering monthly electricity costs  
  - Suitable for small ovens, electric radiators, IR heaters  

- **Air purifier that responds to outdoor pollution levels:**  
  - Using scripting, fetch real-time air quality data from third-party sources  
  - Automatically turn on your air purifier when pollution levels rise  
  - Ideal for urban environments, especially during fall and winter months  

- **Gentle night light for children’s rooms:**  
  - Customize LED color and brightness for soft ambient lighting  
  - Create a calming environment for kids at night  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes  

### Google Smart Home Supported Traits  
Yes  

### Samsung SmartThings Supported Capabilities  
Yes  

## Simplified Internal Schematics

![](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-S-V3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Input
- 1 CEE 7/7 plug  

### Output
- 1 CEE 7/3 (Type-F / Schuko) socket  

## Connectivity
- Wi-Fi  
- Bluetooth  

## Safety Functions
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
  - Press once: Toggle output On/Off  
  - Press and hold for 3 seconds: Check status (only possible when output is Off)  
  - Press and hold for 5 seconds: Reboot (available within 60 seconds of power-up)  
  - Press and hold for 10 seconds: Factory reset (available within 60 seconds of power-up)  

### Outputs
- LED indication  
  - **First-time power-up:** Blue light flashing — indicates AP mode  
  - **After successful Wi-Fi connection:**  
    - Slowly flashing red light — reconnecting to Wi-Fi  
    - Constant red light — unable to reconnect to Wi-Fi  
  - **Output is On:**  
    - **Default behavior (power-based color change):**  
      - Green at 0% of set power limit  
      - Yellow at 50% of set power limit  
      - Red at 100% of set power limit  
    - **Custom color (default: green, default brightness: 100%)**  
    - **Off**  
  - **Output is Off:**  
    - **Default:** LED off  
    - **Custom color (default: red, default brightness: 100%)**  
  - **During OTA update:** Red light flashing  

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 44 × 44 × 70 ±0.5 mm / 1.73 × 1.73 × 2.75 ±0.02 in |
| Weight | 60 ±1 g / 2.08 ±0.04 oz |
| Compatible sockets | CEE 7/1, CEE 7/3 (Type F / Schuko), CEE 7/5 (Type E) |
| Compatible plugs | CEE 7/2, CEE 7/4 (Type F / Schuko), CEE 7/7, CEE 7/16 (Type C), CEE 7/17 |
| Shell material | Plastic |
| Color options | White, Black |
| **Environmental** | |
| Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| Glow-wire temperature | 750 °C |
| Pollution degree | 2 |
| Required forced cooling | No |
| **Electrical** | |
| Power supply | 220–230 V~ 50/60 Hz |
| Power consumption | <1 W |
| Rated impulse-withstand voltage | 2500 V |
| **Output circuits ratings** | |
| Max. switching voltage | 230 V~ |
| Max. switching current | 12 A |
| Max. output power | 2500 W (resistive load only) |
| Number of switching cycles | 10,000 |
| Overvoltage category | II |
| Duty type | S1 |
| Switch type | One-way |
| Switch configuration | SPNO (single-pole, normally-open) |
| Type of circuit disconnection | Micro |
| **Sensors, meters** | |
| Internal temperature sensor | Yes |
| Voltmeter (AC) | Yes |
| Ammeter (AC) | Yes |
| Power and energy meters | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n |
| RF band | 2401–2473 MHz |
| Max. RF power | <10 dBm |
| Wi-Fi range | Up to 50 m / 164 ft outdoors, up to 30 m / 98 ft indoors (varies by environment) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF band | 2402–2480 MHz |
| Max. RF power | <4 dBm |
| Range | Up to 30 m / 98 ft outdoors, up to 10 m / 33 ft indoors (varies by environment) |
| **Microcontroller unit** | |
| CPU | ESP-Shelly-C38F |
| Flash | 8 MB |
| **Firmware capabilities** | |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| CoAP | No |

## Shelly Smart Control
- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface
- [Shelly Plug S Gen3 Web Interface Guide](../knowledge-base/shelly-plug-s-gen3-web-interface-guide)

## Components and APIs
- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyPlugSG3)
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Plug S Gen3 Multilingual EU Declaration of Conformity 2025-07-25.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plug S MTR Gen3 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plug%20S%20MTR%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive**
- [Shelly Plug S MTR Gen3 Multilingual EU Declaration of Conformity 57 2024-09-19.pdf](https://kb.shelly.cloud/__attachments/401768449/Shelly%20Plug%20S%20MTR%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2057%202024-09-19.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Plug S MTR Gen 3 Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Plug%20S%20MTR%20Gen%203%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/plug-s-mtr-gen3)

## Installation Guides
×