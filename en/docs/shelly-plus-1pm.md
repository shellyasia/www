# Shelly Plus 1PM

![Shelly Plus 1PM](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201PM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 1PM  
- **Device model:** SNSW-001P16EU  
- **Device SSID:** ShellyPlus1PM-XXXXXX  

## Short Description

The Shelly Plus 1PM is a compact smart switch with built-in power measurement, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates either standalone within a local Wi-Fi network or through cloud-based home automation services.

Users can access, control, and monitor the device remotely from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

Designed for retrofit installation, it fits into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device includes an embedded web interface for monitoring, control, and configuration.

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

![Shelly Plus 1PM Internal Schematic](https://kb.shelly.cloud/__attachments/229244941/Plus-1PM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal: **SW**  
- 5 power supply inputs on screw terminals: **2 N (+)** and **3 L (Ʇ)**  

### Outputs

- 1 relay output with power measurement on screw terminal: **O**  

### Add-on Interface

- Shelly proprietary serial interface  

![Shelly Plus 1PM Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> ⚠ **CAUTION!** High voltage is present on the add-on interface when the device is powered.

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
- Inductive with RC snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.  
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

> The LED states are prioritized in order listed. Each subsequent state overrides the previous one.

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| | Weight | 27 g / 0.95 oz |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Red |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 110–240 VAC / 24–30 VDC |
| | Power consumption | < 1.2 W |
| | Max switching voltage (AC) | 240 V |
| | Max switching voltage (DC) | 30 V |
| | Max switching current (AC) | 16 A |
| | Max switching current (DC) | 10 A |
| | Internal temperature sensor | Yes |
| | Voltmeter (AC) | Yes |
| | Ammeter (AC) | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max RF power | <20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware Capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Basic Wiring Diagrams

### AC Wiring – Resistive Load

![Plus 1PM AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### AC Wiring – Inductive Load with RC Snubber

![Plus 1PM AC RC Snubber Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20RC%20snubber-wiring-20240528-131329.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### DC Wiring – Resistive Load

![Plus 1PM DC Wiring – Resistive Load](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### DC Wiring – Inductive Load with RC Snubber

![Plus 1PM DC RC Snubber Wiring](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20DC%20RC%20snubber-wiring-20240528-131529.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| **Symbol** | **Description** |
|------------|-----------------|
| **O** | Load circuit output terminal |
| **+** | 24–30 VDC positive wire/terminal |
| **SW** | Switch (controls O) input terminal |
| **N** | Neutral wire/terminal |
| **L** | Live (110–240 VAC) terminal |
| **GND** | 24–30 VDC ground wire |
| **Ʇ** | 24–30 VDC ground terminal |

## Troubleshooting

### Device Is Overheating

- Avoid using the **L** and **N** terminals as bridges. Doing so doubles the current flow, leading to overheating.  
- Bridging is only safe for low-current applications where total current remains below 16 A.  
- Ensure ambient temperature does not exceed 40 °C (105 °F).  
- If installed in a confined space, poor ventilation may raise internal temperatures beyond safe limits. Provide adequate airflow around the device.

## Web Interface Guide

[Read the Shelly Plus 1PM Web Interface Guide](../knowledge-base/shelly-plus-1pm-web-interface-guide)

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Shelly Plus 1PM Multilingual User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201PM%20multilingual%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

- [Shelly Plus 1PM Multilingual EU Declaration of Conformity](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM x2 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1PM AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201PM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

*(No guides available at this time)*