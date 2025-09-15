# Shelly 3EM-63 Gen3

## Device Image(s)

![3EM-XX Gen3.jpg](https://kb.shelly.cloud/__attachments/229146742/3EM-XX%20Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Name:**
  - **Shelly 3EM-63W Gen3** (Wire model)
  - **Shelly 3EM-63T Gen3** (Flat terminal model)
- **Model:** S3EM-003CXCEU63
- **Device SSID:** Shelly3EM63G3-XXXXXXXXXXXX
- **BLE Model ID:** 0x1026

## Short Description

The Shelly 3EM-63 Gen3 is a compact energy meter designed to monitor either a three-phase system or three independent single-phase circuits. It can operate standalone within a local Wi-Fi network or be integrated into cloud-based home automation services via MQTT, HTTP, and WebSocket. All inbound connections support TLS encryption.

The device provides real-time monitoring of accumulated energy, as well as instantaneous voltage, current, active power, and apparent power per phase. Data is stored in non-volatile memory and can be retrieved for up to 7 days at 1-minute intervals.

Equipped with a real-time clock, the device maintains accurate timestamps even if the connection to an SNTP server is lost.

Remote access, setup, and monitoring are supported for users, while the device can also communicate with automation systems when both are on the same network infrastructure.

An embedded web interface enables users to monitor, control, and configure the device settings directly.

## Main Features

- 4-quadrant power measurement
- On-MCB mounting: above or below the circuit breaker (Shelly 3EM-63T Gen3 only)
- Supports multiple configurations: three-phase or single-phase installations
- Non-contact current sensing using current transformers (CTs)
- Phase sequence error detection (optional feature)
- No load threshold: 30 VA per channel
- Optical pulse output indicating energy consumption
- Real-time clock: ensures correct timestamps for stored data during internet outages
- Data logging: up to 7 days of 1-minute resolution data retention
- Accuracy Class B (IEC 62053-21)
- Photovoltaic (PV) ready

> **Notes:**
>
> ¹ Shelly 3EM-63T Gen3 only  
> ² Phase sequence error detection uses zero-crossing analysis of phase voltages. A valid sequence is Phase A → Phase B → Phase C. If the detected sequence is Phase A → Phase C → Phase B, a `phase_sequence` error is reported when enabled.  
> ³ When total load drops below 30 VA per channel, power is still measured but no energy is accumulated. A "No load threshold" notification appears in the web interface and mobile app.  
> ⁴ In case of internet or network interruption, the built-in RTC maintains accurate timekeeping for recorded data.

## Use Cases

- **Power Consumption Monitoring**: Track appliance usage in real time to understand energy patterns and optimize usage.
- **Energy Efficiency Optimization**: Identify inefficiencies and adjust behavior or equipment accordingly.
- **Appliance Health Check**: Detect anomalies such as sudden spikes or drifts in power draw, which may indicate failing components.
- **Cost Management**: Estimate running costs of devices to make informed decisions and reduce electricity bills.
- **Space-Efficient Installation**: Mount directly above or below a DIN-rail circuit breaker for compact integration.
- **Remote Monitoring**: Publish data to Shelly Cloud or other cloud platforms for access from anywhere.
- **Local Monitoring & Automation**: Access historical data and set up local rules based on real-time or cumulative power consumption without relying on the cloud.

## Simplified Internal Schematics

![3EM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/3EM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

- **3 Live Inputs:** LA, LB, LC
  - Flat terminals (Shelly 3EM-63T Gen3)
  - Color-coded wires (Shelly 3EM-63W Gen3)
- **1 Neutral Input:** N

## Connectivity

- Wi-Fi (802.11 b/g/n)
- Bluetooth 4.2

## Safety Function

- Internal temperature sensing and reporting

## Supported Load Types

- Resistive (e.g., incandescent bulbs, heating elements)
- Capacitive (e.g., capacitor banks, electronic equipment, motor start capacitors)
- Inductive (e.g., LED drivers, transformers, fans, refrigerators, air conditioners)

## User Interface

### Inputs

- One tactile dome button:
  - Press and hold for 5 seconds to activate the device's AP mode.
  - Press and hold for 10 seconds to perform a factory reset.

### Outputs

- **LED Indication:**
  - **Blue:** AP mode
  - **Red:** STA mode, not connected to Wi-Fi
  - **Yellow:** STA mode, connected to Wi-Fi but not to Shelly Cloud (or Cloud disabled)
  - **Green:** STA mode, connected to Wi-Fi and Shelly Cloud
  - **Flashing Red/Blue:** OTA firmware update in progress
- **Count Indicator (Red Flashing):** Indicates energy measurement activity; flash frequency varies with energy flow.

## Specifications

| Category | Parameter | Value |
|--------|----------|-------|
| **Physical** | Size (H×W×D) | 
| | Shelly 3EM-63W Gen3 (without wires) | 21 × 54 × 42 mm / 0.83 × 2.13 × 1.65 in |
| | Shelly 3EM-63T Gen3 (without wires) | 31 × 54 × 42 mm / 1.22 × 2.13 × 1.65 in |
| | Wires length | 260 mm (including flat terminal) |
| | Weight | 
| | Shelly 3EM-63W Gen3 (with wires) | 58 g / 2.05 oz |
| | Shelly 3EM-63T Gen3 (with wire) | 52 g / 1.83 oz |
| | Conductor aperture | Ø8 mm / Ø0.3 in |
| | Mounting | Above or below DIN-rail mounted circuit breakers |
| | Shell material | Plastic |
| | Shell color | White |
| **Environmental** | Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 220–240 V~, 50/60 Hz (between LA and N) |
| | Power consumption | < 2 W |
| | External protection | 63 A, tripping characteristic B or C, 6 kA interrupting rating, Energy limiting class 3 |
| **Sensors & Meters** | Internal temperature sensor | Yes |
| | Voltmeters (RMS per phase) | 220–240 V~, 50/60 Hz |
| | Voltmeter accuracy | Better than ±1% |
| | Ammeters (RMS via integrated CT per phase) | 0–63 A (130 A saturation) |
| | Ammeter accuracy | ±1% (2–63 A), ±2% (1–2 A), ±5% (0–1 A) |
| | Power & Energy Meters | Active and apparent power, active and apparent energy, power factor, fundamental active/reactive energy |
| | No load threshold | 30 VA |
| | Measurement data storage | At least 7 days of 1-minute resolution data |
| | Data export | CSV for PQ values; JSON via RPC |
| **Radio** | Wi-Fi Protocol | 802.11 b/g/n |
| | RF Band | 2401 – 2483 MHz |
| | Max. RF Power | < 20 dBm |
| | Range | Up to 30 m indoors / 50 m outdoors (varies by environment) |
| | Bluetooth Protocol | 4.2 |
| | RF Band | 2400 – 2483.5 MHz |
| | Max. RF Power | < 4 dBm |
| | Range | Up to 10 m indoors / 30 m outdoors (varies by environment) |
| **Microcontroller Unit** | CPU | ESP-Shelly-C38F |
| | Flash Memory | 8 MB |
| **Firmware Capabilities** | Schedules | 20 |
| | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

*(Content pending)*

## Compliance

- [Shelly 3EM 63T Gen3 - Shelly 3EM 63W Gen3 multilingual EU declaration of conformity 2025-07-22.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%203EM%2063T%20Gen3%20-%20Shelly%203EM%2063W%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 3EM-63 Gen3 UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%203EM-63%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive: Shelly 3EM-63 Gen3 multilingual EU declaration of conformity 66 2025-01-13.pdf](https://kb.shelly.cloud/__attachments/818774072/Shelly%203EM-63%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2066%202025-01-13.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly 3EM-63 Gen3 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%203EM-63%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
  - [Ръководство за употреба и безопасност](../knowledge-base/shelly-3em-63-gen3-1)

## Installation Guides

*(Content pending)*