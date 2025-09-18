# Shelly EM Gen3

![Shelly EM Gen3_front view.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20EM%20Gen3_front%20view.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly EM Gen3  
- **Device model:** S3EM-002CXCEU  
- **Device SSID:** ShellyEMG3-XXXXXXXXXXXX  
- **BLE Model ID:** 0x1027  

## Short Description

The Shelly EM Gen3 is a compact smart energy meter that uses up to two current transformers (non-contact measurement) to monitor the power consumption of electrical appliances. It reports data to mobile phones, tablets, PCs, or home automation systems and can operate either standalone on a local Wi-Fi network or via cloud-based home automation services. The device features internal storage for up to 10 days of minute-resolution data logs.

It includes a single dry contact relay for controlling external loads and supports remote access, control, and monitoring from anywhere with internet connectivity—provided the device remains connected to a Wi-Fi access point.

The Shelly EM Gen3 is designed for retrofit installation in standard electrical wall boxes, behind power outlets, light switches, or other space-constrained locations.

An embedded web interface enables users to monitor, configure, and control the device directly through a browser.

## Main Features

- Compact form factor  
- Single-phase, dual-channel power measurement  
- Current transformer inputs for non-contact sensing  
- Dry contact relay for load control  
- Real-time clock (RTC)  
- Local data logging: up to 10 days of 1-minute resolution records  

## Use Cases

- **Power Consumption Monitoring:** Track real-time energy usage of connected devices to understand consumption patterns and identify inefficiencies.  
- **Energy Efficiency Optimization:** Analyze usage trends and optimize electricity consumption accordingly.  
- **Appliance Health Check:** Monitor long-term power draw to detect anomalies—sudden spikes may indicate equipment issues.  
- **Cost Management:** Estimate running costs per device to better manage electricity expenses.  
- **Space-Efficient Retrofitting:** Easily install in standard wall boxes, behind sockets, or in tight spaces.  
- **Remote Monitoring:** Publish data to Shelly Cloud or third-party cloud platforms for off-site monitoring.  
- **Local Monitoring & Automation:** Operate independently using local rules based on instantaneous power or cumulative energy over time—no cloud required.  

## Main Applications

- Residential  
- Multi-Dwelling Units (MDUs): apartments, condominiums, hotels  
- Light Commercial: small offices, retail stores, restaurants, gas stations  
- Government / Municipal facilities  
- Educational institutions (universities, colleges)  
- Farming and agricultural operations  

## Simplified Internal Schematics

![EM-Gen3-internal-schematics.png](https://kb.shelly.cloud/__attachments/229244941/EM-Gen3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Connectivity

- Wi-Fi  
- Bluetooth  

## Protocols

- MQTT  
- HTTP  
- WebSocket  
- RPC  

## Safety Function

- Internal temperature sensing and reporting  

## Supported Load Types

- Resistive (incandescent bulbs, heating elements)  
- Capacitive (LED drivers, capacitor banks, electronic equipment, motor start capacitors)  
- Inductive (transformers, fans, refrigerators, air conditioners)  

## User Interface

### Inputs

- **One (Control) Button**  
  - Press and hold for **5 seconds**: Enable device access point and Bluetooth.  
  - Press and hold for **10 seconds**: Factory reset the device.  

### Outputs

- **LED (Monochrome Indicator)**  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA (Over-the-Air) update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note:* LED states are prioritized in order listed. Higher-priority states override lower ones.

## Specifications

| Category | Parameter | Value |
|--------|----------|-------|
| **Physical** | Size (H×W×D) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| | Weight | - EM Gen3: 23 g / 0.81 oz<br>- CT 50A: 50 g / 1.76 oz |
| | Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| | Conductor cross-section | 0.2 – 2.5 mm² / 24 – 14 AWG (solid, stranded, bootlace ferrules) |
| | Conductor stripped length | 6 – 7 mm / 0.24 – 0.28 in |
| | Mounting | Wall console, electrical cabinet |
| | Shell material | Plastic |
| | Shell color | White, Charcoal gray |
| | Connectors color | Black |
| **Environmental** | Ambient working temperature | -20 °C to +40 °C / -5 °F to 105 °F |
| | Humidity | 30 % to 70 % RH |
| | Max. altitude | 2000 m / 6562 ft |
| **Electrical** | Power supply | 110 – 240 V~ 50/60 Hz |
| | Power consumption | < 1.2 W |
| | Neutral required | Yes / No |
| | External protection | 2 A, tripping characteristic B or C,<br>6 kA interrupting rating,<br>Energy limiting class 3 |
| **Output Circuits Ratings** | Max. switching voltage | 240 V~ |
| | Max. switching current | 2 A / 240 V~ |
| **Sensors & Meters** | Voltmeter (AC) | 110–240 V~ 50/60 Hz |
| | Voltmeter accuracy | ±2% |
| | Ammeter (AC) | 0 – 80 A |
| | Ammeter accuracy | ±2% (2–50 A), ±2% (1–2 A), ±5% (0–1 A) |
| | Compatible CTs | - CT 50A (included)<br>- CT 80A |
| | Power & Energy Measurement | Active and apparent power<br>Active and apparent energy<br>Power factor<br>Fundamental active and fundamental reactive energy |
| | Channel-to-channel calibration minimum load | 500 W |
| | No-load threshold | 30 VA per channel |
| | Measurement data storage | At least 10 days of 1-minute resolution data |
| | Data export | - CSV format for PQ recorded values<br>- JSON format via RPC |
| | Internal temperature sensor | Yes |
| **Radio** | **Wi-Fi** | |
| | Protocol | 802.11 b/g/n |
| | RF band | 2412 – 2472 MHz |
| | Max. RF power | < 20 dBm |
| | Range | Up to 30 m / 100 ft indoors<br>Up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| | **Bluetooth** | |
| | Protocol | 4.2 |
| | RF band | 2402 – 2480 MHz |
| | Max. RF power | < 4 dBm |
| | Range | Up to 10 m / 33 ft indoors<br>Up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **Microcontroller Unit** | CPU | ESP-Shelly-C38F |
| | Flash | 8 MB |
| **Firmware Capabilities** | Schedules | Yes |
| | Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| | Scripting | Yes |
| | MQTT | Yes |
| | Encryption | Yes (Transport layer) |
| | Authentication | Yes (Application and transport layers) |

## Basic Wiring Diagrams

![EM Gen3-wiring diagram.png](https://kb.shelly.cloud/__attachments/243531777/EM%20Gen3-wiring%20diagram.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Legend

| Symbol | Description |
|-------|------------|
| **O** | Load circuit output terminal |
| **L** | Live (110–240 V) wire |
| **I** | Load circuit input terminal |
| **N** | Neutral wire |
| **IA** | First channel current transformer input |
| **IB** | Second channel current transformer input |
| **CTA** | First channel current transformer |
| **CTB** | Second channel current transformer |
| **L** | Live (110–240 V) terminal |
| **N** | Neutral terminal |

## Shelly Smart Control

- [Adding the device to Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

1. **Check CT Installation**  
   - If negative readings appear unexpectedly, verify correct CT orientation: ensure K terminal connects to L side of the live wire.

2. **Verify Power Supply**  
   - Check power cables, outlets, and any visible power indicators on the device.

3. **Inspect Connections**  
   - Ensure all wiring and terminal connections are secure and properly seated. Loose connections may cause erratic behavior.

4. **Review Device Settings**  
   - Confirm configuration settings match intended use—especially network, CT, and automation rules.

5. **Update Firmware/Software**  
   - Check for available firmware updates. Keeping the device updated resolves known bugs and improves stability.

6. **Restart the Device**  
   - Turn off the device, wait 5–10 seconds, then power it back on. This clears temporary glitches.

7. **Check Network Configuration**  
   - Verify Wi-Fi settings. Test connectivity by restarting your router or access point if needed.

8. **Inspect Physical Condition**  
   - Look for signs of physical damage, overheating, or unusual noises.

9. **Confirm Compatibility**  
   - Ensure compatibility with other system components (hardware and software).

10. **Monitor Environmental Conditions**  
    - Avoid operation outside specified temperature and humidity ranges.

11. **Assess Power Quality**  
    - Voltage fluctuations or spikes may affect performance. Consider using a surge protector or voltage regulator.

> \*These steps are general guidelines. Specific issues may require tailored solutions. If problems persist, contact [technical support](https://support.shelly.cloud/en/support/home).

## Components and APIs

- Coming soon  
- [All Shelly Devices and Services API Documentation](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly EM Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20EM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly EM Gen3 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20EM%20Gen3%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance Archive**  
- [Shelly EM Gen3 Multilingual EU Declaration of Conformity 60-1 (2024-09-30)](https://kb.shelly.cloud/__attachments/950435890/Shelly%20EM%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2060-1%202024-09-30.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly EM Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20EM%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност (Bulgarian)](../knowledge-base/shelly-em-gen3-1)