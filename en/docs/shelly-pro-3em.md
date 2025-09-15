Shelly Pro 3EM

![](https://kb.shelly.cloud/__attachments/229146742/Pro-3EM.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Pro 3EM  
- **Device model:** SPEM-003CEBEU  
- **Device SSID:** ShellyPro3EM-XXXXXX  

## Short Description

The Shelly Pro 3EM is a DIN rail-mountable three-phase energy meter. Enhanced with full `gen2` firmware flexibility and LAN connectivity, it offers professional integrators expanded options for end-customer solutions. It can operate standalone in a local LAN or Wi-Fi network, or be managed remotely via cloud-based home automation services using MQTT, HTTP, and WebSocket protocols. All inbound connections support TLS encryption.

The device reports real-time data including accumulated energy, as well as instantaneous voltage, current, active power, and apparent power per phase. Measured data is stored in non-volatile memory and can be retrieved for up to 60 days at 1-minute intervals.

Equipped with a real-time clock, the device maintains accurate time even if disconnected from an SNTP server.

Shelly Pro 3EM can be accessed, configured, and monitored remotely by users, and can also communicate with automation systems—provided both are within the same network infrastructure.

An embedded web interface enables monitoring, control, and configuration of device settings.

> **⚠ NOTICE!** The device does not include a built-in relay. Contactor control is achieved using a compatible Shelly Pro Add-on module connected to the Shelly Pro 3EM.

## Features

- 4-quadrant energy measurement  
- DIN rail mounting  
- Multiple connectivity options (Wi-Fi, Ethernet, Bluetooth)  
- Current transformer (CT) inputs for phase and neutral current sensing  
- Phase sequence error detection\* (optional)  
- Channel-to-channel calibration\*\*  
- No load threshold\*\*\*  
- Optical pulse output for energy usage indication  
- Real-time clock  
- Data logging capability  
- Accuracy Class B (IEC 62053-21)  
- Photovoltaic (PV) ready  

> \* Phase sequence error detection uses zero-crossing events on phase voltages. The expected sequence is Phase A → Phase B → Phase C. If the detected sequence is Phase A → Phase C → Phase B, a `phase_sequence` error is reported when the feature is enabled.  
>  
> \*\* Calibration requires at least 500 W load per channel.  
>  
> \*\*\* When total load across all three channels drops below 30 VA per channel, power readings are displayed but no energy is accumulated. A `No load threshold` notification appears in the web interface and mobile app.

## Main Applications

- Residential buildings  
- Multi-Dwelling Units (MDUs): apartments, condominiums, hotels, etc.  
- Light commercial: small offices, retail stores, restaurants, gas stations  
- Agricultural: farms, barns, silos  
- Government and municipal facilities  
- Universities and colleges  

## Simplified Internal Schematics

![Shelly Pro 3EM Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Pro-3EM-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs

- 4 screw-terminal line inputs: 3 **L** (Phase A, B, C), 1 **N** (Neutral)  
- 4 CT inputs: 3 for **L** current measurements (Phases A, B, C), 1 for **N** current measurement  

### Ethernet Port

- 1 × RJ45 connector  

> **⚠ CAUTION!** Always disconnect or connect the LAN cable only when the device is powered off. Ensure the connector is non-metallic in user-contact areas during plugging/unplugging.

### Add-on Interface

- Proprietary serial interface for Shelly Pro Add-on modules  

![Pro-3EM Add-on Interface](https://kb.shelly.cloud/__attachments/231604493/Pro-3EM-addon-interface.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

> **⚠ CAUTION!** High voltage is present on the add-on interface when the device is powered. Exercise caution during handling.

## Connectivity

- Wi-Fi (2.4 GHz)  
- Ethernet (RJ45)  
- Bluetooth (4.2)  

Each connectivity method can be independently enabled or disabled via configuration.

## Safety Features

- Internal temperature sensing and reporting  

## Supported Load Types

- Resistive (incandescent lamps, heaters)  
- Capacitive (LED drivers, capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- One tactile dome button  
  - **Brief press**: Toggle the state of the relay in the attached Shelly Pro 3EM Switch Add-on.  
  - **Hold 5 seconds**: Activate Device Access Point (AP) mode.  
  - **Hold 10 seconds**: Factory reset.

### Outputs

- **LED Indicators**
  - **Power**: Red light when power supply is connected.
  - **Wi-Fi Status**:
    - Blue: AP mode
    - Red: STA mode, not connected to Wi-Fi
    - Yellow: STA mode, connected to Wi-Fi but not to Shelly Cloud (or Cloud disabled)
    - Green: STA mode, connected to Wi-Fi and Shelly Cloud
    - Flashing red/blue: OTA update in progress
  - **LAN**: Green light when Ethernet connection is established.
  - **Count**: Red LED flashes at a frequency proportional to the measured energy flow through the circuit.

## Specifications

| **Category** | **Specification** |
|--------------|-------------------|
| **Physical** | |
| Size (H×W×D) | 94 × 19 × 69 ±0.5 mm / 3.70 × 0.75 × 2.71 ±0.02 in |
| Weight | 62 ±1 g / 2.19 ±0.05 oz |
| Mounting | DIN rail |
| Screw terminal max torque | 0.4 Nm / 4.43 lbin |
| Conductor cross-section | 0.5 – 2.5 mm² / 20 – 14 AWG (solid, stranded, bootlace lugs) |
| Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| Shell material | Plastic |
| Color | White |
| **Environmental** | |
| Ambient temperature | –20 °C to 40 °C / –5 °F to 105 °F |
| Humidity | 30 % – 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply (AC) | 100 – 260 V, 50/60 Hz |
| Power supply (DC) | N/A |
| Power consumption | < 3 W |
| External protection | Tripping characteristic B or C, ≤16 A rated current, ≥6 kA interrupting rating, Energy limiting class 3 |
| **Sensors & Meters** | |
| Internal temperature sensor | Yes |
| Voltmeters (RMS, per phase) | 100 – 260 V |
| Voltmeter accuracy | ±1 % |
| Ammeters (RMS via CT, per phase and Neutral) | 0 – 120 A |
| Compatible CT | [CT 120A](https://kb.shelly.cloud/knowledge-base/ct-120a) |
| Ammeter accuracy | ±1 % (2 – 120 A), ±2 % (1 – 2 A), ±5 % (0 – 1 A) |
| Power & Energy Meters | Active and apparent power, active and apparent energy, power factor, fundamental active/reactive energy |
| Channel-to-channel calibration minimum load | 500 W per channel |
| No load threshold | 30 VA per channel |
| Measurement data storage | At least 60 days of 1-minute resolution data |
| Data export | CSV format for PQ data; JSON via RPC API |
| **Radio** | |
| RF band | 2400 – 2495 MHz |
| Max. RF power | <20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| Bluetooth protocol | 4.2 |
| Bluetooth range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **MCU** | |
| CPU | ESP32-D0WDQ6 |
| Flash memory | 16 MB |
| **Firmware Capabilities** | |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |
| CoAP | No |

## Basic Wiring Diagrams

![Pro 3EM Basic Wiring with Fuses](https://kb.shelly.cloud/__attachments/243531777/Pro%203EM%20basic%20wiring%20with%20fuses.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![Pro-3EM Monophase Wiring Diagram with Fuses](https://kb.shelly.cloud/__attachments/243531777/Pro-3EM-monophase-wiring-diagram-with-fuses.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

#### Terminals

| Label | Function |
|-------|----------|
| A | Phase A input |
| B | Phase B input |
| C | Phase C and power supply input |
| N | Neutral terminal |

#### Wires

| Label | Function |
|-------|----------|
| LA | Phase A live wire (110–240 V) |
| LB | Phase B live wire (110–240 V) |
| LC | Phase C live wire (110–240 V) |
| L | Single-phase live wire (110–240 V) |
| N | Neutral wire |

#### Current Transformers

| Label | Function |
|-------|----------|
| CTA | Phase A current transformer |
| CTB | Phase B current transformer |
| CTC | Phase C current transformer |
| CTN | Neutral current transformer (optional; not included) |

#### CT Inputs

| Label | Function |
|-------|----------|
| IA | Phase A CT input |
| IB | Phase B CT input |
| IC | Phase C CT input |
| IN | Neutral CT input |

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly Pro 3EM Web Interface Guide](../knowledge-base/shelly-pro-3em-web-interface-guide)

## Troubleshooting

*(To be completed)*

## Components and APIs

- [Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPro3EM)  
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Pro 3EM Multilingual EU Declaration of Conformity (2025-07-23)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20multilingual%20EU%20declaration%20of%20conformity%202025-07-23.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Pro 3EM 120A UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20120A%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Pro 3EM AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Pro%203EM%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**

- [Shelly Pro 3EM Multilingual EU Declaration of Conformity v4 (2023-04-25)](https://kb.shelly.cloud/__attachments/74973354/Shelly%20Pro%203EM%20multilingual%20EU%20declaration%20of%20conformity%204%202023-04-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly Pro 3EM Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Pro%203EM%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-pro-3em-1)