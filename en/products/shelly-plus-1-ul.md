# Shelly Plus 1 UL

![Shelly Plus 1 UL.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201%20UL.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 1 UL  
- **Device model:** SNSW-001X15UL  
- **Device SSID:** ShellyPlus1-XXXXXX  

## Short Description

The Shelly Plus 1 UL is a UL-certified, compact smart switch featuring potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone within a local Wi-Fi network or integrates with cloud-based home automation services.

Users can access, control, and monitor the device remotely from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

Designed for retrofit installation, it fits into standard electrical wall boxes, behind power outlets, light switches, or other space-constrained areas.

The device includes an embedded web interface for monitoring, control, and configuration.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities
- Toggle Controller

### Google Smart Home Supported Traits
- On/Off

### Samsung SmartThings Supported Capabilities
- Switch

## Simplified Internal Schematics

![Plus1-UL-internal-schematics.png](https://kb.shelly.cloud/__attachments/407142401/Plus1-UL-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 1 switch/button input on screw terminal: SW  
- 1 potential-free contacts relay input on screw terminal: I  
- 3 power supply inputs on screw terminals: N (+), L (Ʇ), and 12V  

### Outputs
- 1 potential-free contacts relay output on screw terminal: O  

### Add-on Interface
- Shelly proprietary serial interface  

![Shelly Plus 1 Add-on Interface](https://kb.shelly.cloud/__attachments/237502485/Plus-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage present on the add-on interface when the device is powered.

## Connectivity
- Wi-Fi  
- Bluetooth  

## Safety Functions
- Overheating protection  

## Supported Load Types
- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED light drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs
- One (Reset) button  
  - Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.  
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs
- LED (monochromatic) indicator  
  - AP enabled, Wi-Fi disabled: 1 second ON / 1 second OFF  
  - Wi-Fi enabled, not connected to a network: 1 second ON / 3 seconds OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 second ON / 5 seconds OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air Update): ½ second ON / ½ second OFF  
  - Button pressed and held for 5 seconds: ½ second ON / ½ second OFF  
  - Button pressed and held for 10 seconds: ¼ second ON / ¼ second OFF  

> *Note: The listed states are prioritized from lowest to highest. Each subsequent state overrides the previous one.*

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (H×W×D) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | Weight | 26 g / 0.92 oz |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbf·in |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 14 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Blue |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | <ul><li>110–240 VAC, 50/60 Hz</li><li>12 VDC stabilized</li><li>24–48 VDC</li></ul> |
| | Power consumption | < 1.2 W |
| **Output circuits ratings** | Max switching voltage (AC) | 240 V (single wire) |
| | Max switching voltage (DC) | 30 V |
| | Max switching current (AC) | 15 A |
| | Max switching current (DC) | 10 A |
| **Sensors, meters** | Internal temperature sensor | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max RF power | < 20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m / 100 ft indoors, up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m / 33 ft indoors, up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 with up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | CoAP | No |

## Basic Wiring Diagrams

![Plus 1 AC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20wiring%20diagram-20240528-135400.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC power supply**  
**Resistive load**

![Plus 1 AC RC Snubber Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20AC%20RC%20Snubber%20wiring%20diagram-20240528-135559.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**110–240 VAC power supply**  
**Inductive load with RC snubber**

![Plus 1 DC Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20wiring%20diagram-20240528-135114.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC power supply**  
**Resistive load**

![Plus 1 DC RC Snubber Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201%20DC%20RC%20Snubber%20wiring%20diagram-20240530-093321.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**24–48 VDC power supply**  
**Inductive load with RC snubber**

![Plus 1 12 V Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201%2012%20V%20wiring%20diagram-20240528-135011.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC stabilized power supply**  
**Resistive load**

![Plus 1-12V-RC-Snubber-Wiring-Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201-12V-RC-Snubber-wiring-diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC stabilized power supply**  
**Inductive load with RC snubber**

### Legend

**Terminals**  
- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **L**: Live (110–240 VAC) terminal  
- **N**: Neutral terminal  
- **SW**: Switch (controlling O) input terminal  
- **+**: 24–48 VDC positive terminal  
- **+12V**: 12 VDC positive terminal  
- **GND**: 12/24–48 VDC ground terminal  
- **Ʇ**: 12/24–48 VDC ground terminal  

**Wires**  
- **L**: Live (110–240 VAC) wire  
- **N**: Neutral wire  
- **+**: 12/24–48 VDC positive wire  
- **GND**: 12/24–48 VDC ground wire  

## Web Interface Guide

[Read the Shelly Plus 1, Plus 1 UL web interface guide](../knowledge-base/shelly-plus-1-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus 1 UL bilingual user and safety guide.pdf](https://kb.shelly.cloud/__attachments/455016449/Shelly%20Plus%201%20UL%20bilingual%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)