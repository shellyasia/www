# Shelly Plus 1

![Shelly Plus 1](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Plus%201.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus 1  
- **Device model:** SNSW-001X16EU  
- **Device SSID:** ShellyPlus1-XXXXXX  

## Short Description

The Shelly Plus 1 is a compact smart switch with potential-free contacts, enabling remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates standalone on a local Wi-Fi network or integrates with cloud-based home automation services.

Users can access, control, and monitor the device remotely from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

Designed for space-constrained environments, it can be retrofitted into standard electrical wall boxes, behind power outlets, light switches, or other tight spaces.

The device features an embedded web interface for monitoring, control, and configuration.

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

![Shelly Plus 1 Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

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

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Handle with care.

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## Safety Features

- Overheating protection  

## Supported Load Types

- Resistive (incandescent bulbs, heating devices)  
- Capacitive (capacitor banks, electronic equipment, motor start capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

#### One Control Button

- Press and hold for 5 seconds to enable Device Access Point and Bluetooth connection.  
- Press and hold for 10 seconds to perform a factory reset.

### Outputs

#### LED (Red) Indication

- **AP enabled, Wi-Fi disabled:**  
  1 second ON / 1 second OFF  
  ![LED: AP Mode](https://kb.shelly.cloud/__attachments/323911691/LED-1000-1000.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Wi-Fi enabled, not connected to a network:**  
  1 second ON / 3 seconds OFF  
  ![LED: Wi-Fi Not Connected](https://kb.shelly.cloud/__attachments/323911691/LED-500-1500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Connected to Wi-Fi network:**  
  Constantly ON  
  ![LED: Connected to Wi-Fi](https://kb.shelly.cloud/__attachments/323911691/LED-On.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Cloud enabled, but not connected:**  
  1 second ON / 5 seconds OFF  
  ![LED: Cloud Not Connected](https://kb.shelly.cloud/__attachments/323911691/LED-1500-500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Connected to Shelly Cloud:**  
  Constantly ON  
  ![LED: Connected to Cloud](https://kb.shelly.cloud/__attachments/323911691/LED-On.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **OTA (Over-the-Air Update):**  
  ½ second ON / ½ second OFF  
  ![LED: OTA Update](https://kb.shelly.cloud/__attachments/323911691/LED-500-500.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Button pressed and held for 5 seconds:**  
  ½ second ON / ½ second OFF  
  ![LED: 5-second Hold](https://kb.shelly.cloud/__attachments/323911691/LED-250-250.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- **Button pressed and held for 10 seconds:**  
  ¼ second ON / ¼ second OFF  
  ![LED: 10-second Hold](https://kb.shelly.cloud/__attachments/323911691/LED-125-125.gif?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **Note:** The LED states are prioritized in order of appearance. Each subsequent state overrides the previous one.

## Specifications

| **Category** | **Type** | **Value** |
|--------------|----------|-----------|
| **Physical** | Size (HxWxD) | 37 × 42 × 16 ±0.5 mm / 1.46 × 1.65 × 0.63 ±0.02 in |
| | Weight | 26 g / 0.92 oz |
| | Mounting | Wall console |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| | Conductor cross section | 0.5 to 1.5 mm² / 20 to 16 AWG |
| | Conductor stripped length | 5 to 6 mm / 0.20 to 0.24 in |
| | Shell material | Plastic |
| | Color | Blue |
| **Environmental** | Ambient temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 110–240 VAC / 24–48 VDC / 12 VDC ±10% |
| | Power consumption | < 1.2 W |
| **Output circuits ratings** | Max switching voltage AC | 240 V |
| | Max switching voltage DC | 30 V |
| | Max switching current AC | 16 A |
| | Max switching current DC | 10 A |
| **Sensors, meters** | Internal temperature sensor | Yes |
| **Radio** | RF band | 2400 – 2495 MHz |
| | Max RF power | <20 dBm |
| | Wi-Fi protocol | 802.11 b/g/n |
| | Wi-Fi range | Up to 30 m indoors / 50 m outdoors (depends on local conditions) |
| | Bluetooth protocol | 4.2 |
| | Bluetooth range | Up to 10 m indoors / 30 m outdoors (depends on local conditions) |
| **MCU** | CPU | ESP32-U4WDH |
| | Flash | 4 MB |
| **Firmware capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 with 5 URLs per hook |
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

![Plus 1 12V RC Snubber Wiring Diagram](https://kb.shelly.cloud/__attachments/243531777/Plus%201-12V-RC-Snubber-wiring-diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
**12 VDC stabilized power supply**  
**Inductive load with RC snubber**

### Legend

**Terminals**  
- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **L**: Live (110–240 VAC) terminal  
- **N**: Neutral terminal  
- **+**: 24–48 VDC positive terminal  
- **+12V**: 12 VDC positive terminal  
- **GND**: 12 / 24–48 VDC ground terminal  
- **Ʇ**: 12 / 24–48 VDC ground terminal  

**Wires**  
- **L**: Live (110–240 VAC) wire  
- **N**: Neutral wire  
- **SW**: Switch (controlling O) input terminal  
- **+**: 12 / 24–48 VDC positive wire  
- **GND**: 12 / 24–48 VDC ground wire  

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly Plus 1 Web Interface Guide](../knowledge-base/shelly-plus-1-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlus1)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Printed User Guide

[Shelly Plus 1 Multilingual Printed User and Safety Guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%201%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

- [Shelly Plus 1 Multilingual EU Declaration of Conformity.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 x2 UK PSTI ACT Statement of Compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20x2%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus 1 AU NZ Certificate for Suitability.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%201%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Using Shelly Plus 1 with Multiple Buttons to Control Lights](../knowledge-base/using-shelly-plus-1-with-multiple-buttons-to-contr)