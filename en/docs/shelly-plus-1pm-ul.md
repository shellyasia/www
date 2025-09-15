# Shelly Plus 1PM UL

![Shelly Plus 1PM UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201PM%20UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Short Description

The Shelly Plus 1PM UL is a UL-certified, compact smart switch with built-in power measurement. It enables remote control of electric appliances via smartphone, tablet, PC, or home automation systems. The device operates standalone within a local Wi-Fi network or integrates with cloud-based home automation services.

Users can access, control, and monitor the device remotely from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the internet.

Designed for retrofit installations, it fits into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

The device includes an embedded web interface for monitoring, control, and configuration.

## Device Identification

- **Device Name:** Shelly Plus 1PM UL  
- **Device Model:** SNSW-001P15UL  
- **Device SSID:** ShellyPlus1PM-XXXXXX  

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government / Municipal  
- University / College  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes  

### Google Smart Home Supported Traits  
Yes  

### Samsung SmartThings Supported Capabilities  
Yes  

## Simplified Internal Schematics

![Plus-1PM-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407175169/Plus-1PM-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 1 switch/button input on screw terminal: **SW**  
- 5 power supply inputs on screw terminals: **2 N (+)** and **3 L (Ʇ)**

### Outputs

- 1 relay output with power measurement on screw terminal: **O**

### Add-on Interface

- Shelly proprietary serial interface

![Shelly Plus 1 addon interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION**: High voltage is present on the add-on interface when the device is powered.

## Connectivity

- Wi-Fi  
- Bluetooth  

## Safety Features

- Overheating protection  
- Overvoltage protection  
- Overcurrent protection  
- Overpower protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED light drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One (Reset) button  
  - Press and hold for 5 seconds to enable device access point and Bluetooth connection.  
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- LED (monocolor) indication  
  - **AP enabled, Wi-Fi disabled**: 1 second ON / 1 second OFF  
  - **Wi-Fi enabled, not connected to network**: 1 second ON / 3 seconds OFF  
  - **Connected to Wi-Fi network**: Constantly ON  
  - **Cloud enabled, not connected**: 1 second ON / 5 seconds OFF  
  - **Connected to Shelly Cloud**: Constantly ON  
  - **OTA (Over-the-Air Update)**: ½ second ON / ½ second OFF  
  - **Button pressed and held for 5 seconds**: ½ second ON / ½ second OFF  
  - **Button pressed and held for 10 seconds**: ¼ second ON / ¼ second OFF  

> *Note: The list starts with the initial device status and lower-priority states. Each subsequent state overrides the previous one.*

## Specifications

| **Category** | **Type** | **Value** |
|-------------|--------|---------|
| **Physical** | Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | Weight | 27 g / 0.95 oz |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 14 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Red |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 110–240 VAC, 50/60 Hz<br>24–30 VDC |
| | Power consumption | < 1.2 W |
| | Max switching voltage (AC) | 240 V (single wire) |
| | Max switching voltage (DC) | 30 V |
| | Max switching current (AC) | 15 A |
| | Max switching current (DC) | 10 A |
| | Internal temperature sensor | Yes |
| | Voltmeter (AC) | Yes |
| | Ammeter (AC) | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max RF power | < 20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors<br>Up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft indoors<br>Up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware Capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Basic Wiring Diagrams

![Plus 1PM AC wiring diagram-20240528-134438.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20wiring%20diagram-20240528-134438.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 VAC power supply – Resistive load**

![Plus 1PM AC RC snubber-wiring-20240528-131329.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20AC%20RC%20snubber-wiring-20240528-131329.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**110–240 VAC power supply – Inductive load with RC snubber**

![Plus 1pm dc-wiring-20240528-134643.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201pm%20dc-wiring-20240528-134643.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 VDC power supply – Resistive load**

![Plus 1PM DC RC snubber-wiring-20240528-131529.png](https://kb.shelly.cloud/__attachments/243531777/Plus%201PM%20DC%20RC%20snubber-wiring-20240528-131529.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**24–30 VDC power supply – Inductive load with RC snubber**

### Legend

**Terminals**  
- **O**: Load circuit output terminal  
- **SW**: Switch (controlling O) input terminal  
- **L**: Live (110–240 V) terminal  
- **N**: Neutral terminal  
- **+**: 24–30 VDC positive terminal  
- **Ʇ**: 24–30 VDC ground terminal  

**Wires**  
- **+**: 24–30 VDC positive wire  
- **GND**: 24–30 VDC ground wire  
- **N**: Neutral wire  

## Troubleshooting

### Device Is Overheating

- Avoid using the **L** and **N** terminals as bridging points. Using them as bridges doubles the current flow through these terminals, leading to overheating. Bridging is only safe with low-current applications where total current remains under 15 A.
- Ensure ambient temperature does not exceed 40 °C (105 °F). In enclosed or confined spaces, heat buildup may occur. Provide adequate ventilation around the device.

## Web Interface Guide

[Read the Shelly Plus 1PM, 1PM UL web interface guide](../knowledge-base/shelly-plus-1pm-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1PM)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus 1PM UL bilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201PM%20UL%20bilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)