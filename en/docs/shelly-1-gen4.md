Shelly 1 Gen4

![Shelly 1 Gen4](https://kb.shelly.cloud/__attachments/229146742/Shelly%201%20Gen4.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly 1 Gen4  
- **Device model:** S4SW-001X16EU  
- **Device SSID:** Shelly1G4-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1028  

## Short Description

The Shelly 1 Gen4 is a compact smart switch with potential-free contacts, enabling remote control of electric appliances via smartphone, tablet, PC, or home automation systems. It operates independently on a local Wi-Fi network or integrates with cloud-based home automation services.

Users can access, control, and monitor the device remotely from any location with internet connectivity, provided the device is connected to a Wi-Fi router and the Internet.

Designed for retrofitting into standard electrical wall boxes, behind power sockets, light switches, or other space-constrained areas.

The device features an embedded Web Interface for monitoring, control, and configuration of settings.

Equipped with a multi-protocol wireless MCU supporting Zigbee and Bluetooth connectivity, ensuring secure and reliable communication.

This device is compatible with Matter.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network to enable remote monitoring and control of devices.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **Local and Cloud Control:** Functions standalone on a local network and supports cloud-based remote access.
- **Bluetooth Connectivity:** Includes Bluetooth and BLE gateway support for setup assistance and device pairing.
- **Zigbee Connectivity:** Supports Zigbee inclusion for integration into larger smart home ecosystems.
- **User-Friendly Interface:** Features a physical reset button for manual configuration and troubleshooting.
- **Improved Processor:** Upgraded hardware with enhanced performance and full Zigbee support.
- **Embedded Web Interface:** Built-in web interface for device management and settings adjustment.
- **Wireless Protocols:** Supports Wi-Fi (802.11 b/g/n/ax) and Bluetooth 5.0 with defined indoor and outdoor range capabilities.
- **Dry Contact Switching:** Enables control of low-voltage devices using potential-free contacts.
- **BLE Gateway:** Acts as a bridge between Shelly BLU devices and the broader Shelly ecosystem by forwarding Bluetooth signals to the cloud or local devices.
- **Wi-Fi Range Extender:** Enhances Wi-Fi coverage by receiving and rebroadcasting the signal over a wider area.
- **Zigbee Range Extender:** Expands Zigbee network reach by receiving and retransmitting signals across greater distances.
- **Scripting Support:** [Shelly Script Language Features](https://shelly-api-docs.shelly.cloud/gen2/Scripts/ShellyScriptLanguageFeatures/)
- **Wide Integration Options:** Supports third-party systems via HTTP API, MQTT(s), Webhooks (HTTP/HTTPS), and UDP.
- **Scheduling:** Allows creation of complex schedules based on date, time of day, weekdays, hours, minutes, and seconds.
- **Virtual Components:** [Virtual Dynamic Components Guide](https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/)
- **KNX Net/IP Support:** [KNX Integration Documentation](https://shelly-api-docs.shelly.cloud/gen2/Integrations/KNX/)

## Use Cases

### Remote Appliance Control
Turn on or off electric appliances remotely using mobile devices, tablets, PCs, or home automation platforms.

### Internet-Connected Convenience
Control devices from anywhere with internet access, as long as the Shelly 1 Gen4 remains connected to a Wi-Fi network.

### Home Automation
Enable automated power management for appliances, enhancing comfort and convenience.

### Home Automation Use Cases

#### Light Control
- Remote control of standard lighting (LED, incandescent, halogen).
- Set timers or schedules (e.g., porch lights at sunset).
- Integrate with motion sensors (e.g., Shelly BLU Motion) for occupancy-based lighting.

#### Garage Door Automation
- Serve as a smart trigger to open or close garage doors.
- Monitor door status using sensor inputs (e.g., Shelly Plus Add-on).
- Enable voice control via assistants like Alexa or Google Assistant.

#### Fan or Ventilation Control
- Automate bathroom or kitchen fans based on humidity readings (e.g., Shelly BLU H&T).
- Turn on ventilation during specific times or based on occupancy.

#### Heater or Towel Rail Switching
- Control electric towel warmers or heaters (max. switching current: 16 A).
- Schedule operation or link to temperature thresholds using environmental sensors (e.g., Shelly BLU H&T).

### Commercial Applications

#### Lighting Automation in Small Offices or Shops
- Control lighting zones based on business hours.
- Use motion detectors (e.g., Shelly BLU Motion) to reduce energy consumption.

#### Meeting Room Occupancy
- Automatically enable/disable projectors and AV equipment based on room occupancy.

#### Security and Access Systems
- Remotely unlock gates or doors for deliveries.
- Monitor the open/closed state of access points.

### Industrial/Utility Use Cases

#### Equipment Monitoring & Control
- Perform remote power cycling of routers, modems, or network switches.

#### Pump or Motor Control
- Automate irrigation pumps in greenhouses or fields (max. switching current: 16 A).
- Remotely control valves using compatible add-ons (e.g., Shelly Add-On Mechanical Manipulator).

## Main Applications

- Residential  
- MDU (Multi-Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Simplified Internal Schematics

![Shelly Plus 1 Internal Schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-1-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Inputs
- 1 switch/button input on screw terminal  
- 1 potential-free contacts relay input on screw terminal  
- 2 power supply inputs on screw terminals: N and L  

### Outputs
- 1 potential-free contacts relay output on screw terminal  

## Connectivity
- Wi-Fi  
- Bluetooth  
- Zigbee  

## Safety Function
- Overheating protection  

## Supported Load Types
- Resistive (incandescent bulbs, heating appliances)  
- Capacitive (capacitor banks, electronic equipment, motor starting capacitors)  
- Inductive with RC Snubber (LED drivers, transformers, fans, refrigerators, air conditioners, washing machines, tumble dryers)  

## User Interface

### Inputs
- One (Control) button  
  - Press and hold for 5 seconds: Enter Device Access Point mode and enable Bluetooth connection.  
  - Press and hold for 10 seconds: Factory reset the device.  
  - Press 5 times consecutively: Switch from Matter firmware (default) to Zigbee mode.  
  - Press 3 times consecutively: Enter Zigbee inclusion mode (active for 2 minutes; visible in HA platform via Zigbee Hub).  

### Outputs
- LED (monocolor indicator)  
  - AP enabled, Wi-Fi disabled: 1 sec ON / 1 sec OFF  
  - Wi-Fi enabled but not connected: 1 sec ON / 3 sec OFF  
  - Connected to Wi-Fi network: Constantly ON  
  - Cloud enabled but not connected: 1 sec ON / 5 sec OFF  
  - Connected to Shelly Cloud: Constantly ON  
  - OTA update in progress: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 5 seconds: 0.5 sec ON / 0.5 sec OFF  
  - Button pressed and held for 10 seconds: 0.25 sec ON / 0.25 sec OFF  

> *Note:* States are prioritized from lowest to highest. Each subsequent state overrides the previous one.

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 37 × 42 × 16 mm / 1.46 × 1.65 × 0.63 in |
| Weight | 26 g / 0.92 oz |
| Screw terminals max torque | 0.4 Nm / 3.5 lbin |
| Conductor cross section | 0.2 to 2.5 mm² / 24 to 14 AWG (solid, stranded, bootlace ferrules) |
| Conductor stripped length | 6 to 7 mm / 0.24 to 0.28 in |
| Mounting | Wall console |
| Shell material | Plastic |
| Shell color | Blue |
| Terminals color | Grey |
| **Environmental** | |
| Ambient working temperature | -20 °C to 40 °C / -5 °F to 105 °F |
| Humidity | 30 % to 70 % RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | 110–240 V~<br>24–48 V⎓<br>12 V⎓ |
| Power consumption | < 1 W |
| Neutral required | No |
| External protection | Cable protection switch per EN60898-1 (tripping characteristic B or C, max. 16 A rated current, min. 6 kA interrupting rating, energy limiting class 3) |
| **Output Circuit Ratings** | |
| Max. switching voltage | 240 V~<br>30 V⎓ |
| Max. switching current | 16 A / 240 V~<br>10 A / 30 V⎓ |
| **Sensors, Meters** | |
| Internal temperature sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2412 – 2472 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor)<br>Up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 5.0 |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor)<br>Up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |
| **Zigbee** | |
| Protocol | 802.15.4 |
| Zigbee repeater | Yes |
| RF bands | 2400 – 2483.5 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft (indoor)<br>Up to 300 m / 984 ft (outdoor)<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | 20 |
| Webhooks (URL actions) | 20 hooks, up to 5 URLs per hook |
| Scripting | Yes |
| MQTT | Yes |

## Basic Wiring Diagrams

![1 Gen3 AC Wiring](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20AC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*110–240 V~ Power Supply*

![1 Gen3 DC Wiring](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%20DC.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*24–48 V⎓ Power Supply*

![1 Gen3 12V Wiring](https://kb.shelly.cloud/__attachments/243531777/1%20Gen3%2012V.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*12 V⎓ Stabilized Power Supply*

### Legend

**Terminals**
- **I**: Load circuit input terminal  
- **O**: Load circuit output terminal  
- **L**: Live wire (110–240 V~)  
- **N**: Neutral wire  
- **SW**: Switch input terminal (controls O)  
- **+**: Positive terminal (12/24–48 V⎓)  
- **+12V**: 12 V⎓ positive terminal  
- **GND**: Ground wire (12/24–48 V⎓)  
- **L**: Live terminal (110–240 V~)  
- **N**: Neutral terminal  
- **+**: Positive terminal (24–48 V⎓)  
- **Ʇ**: Ground terminal (12/24–48 V⎓)  

**Wires**

## Shelly Smart Control
- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface
- [Shelly 1 Gen4 Web Interface Guide](../knowledge-base/shelly-1-gen4-web-interface-guide)

## Components and APIs
- [This Device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/Shelly1G4)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly 1 Gen4 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly 1 Gen4 UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%201%20Gen4%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Compliance Archive – Shelly 1 Gen4 EU Declaration (2025-03-10)](https://kb.shelly.cloud/__attachments/974127105/Shelly%201%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%2075%202025-03-10.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Shelly 1 Gen4 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%201%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Ръководство за употреба и безопасност](../knowledge-base/--)

## Installation Guides
×