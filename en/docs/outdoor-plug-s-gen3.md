# Shelly Outdoor Plug S Gen3

![Shelly-Outdoor-Plug-Gen3-web.jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly-Outdoor-Plug-Gen3-web.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Outdoor Plug S Gen3  
- **Device model:** S3PL-20112EU  
- **Device SSID:** ShellyOutdoorSG3-XXXXXXXXXXXX  
- **BLE ID:** 0x1853  

## Short Description

The Shelly Outdoor Plug S Gen3 is one of the first Shelly devices designed for outdoor use and features full Matter support.  

This smart plug/outlet includes power measurement, overheating protection, and enables remote control of electrical appliances via smartphone, tablet, PC, or home automation systems. It operates independently on a local Wi-Fi network or can be managed through cloud-based home automation services.

The device can be accessed, configured, and monitored remotely from anywhere with internet connectivity, provided it remains connected to a Wi-Fi router and the Internet.

It includes an embedded Web Interface for monitoring, controlling, and adjusting device settings.

## Main Features

- IP44 protection  
- Matter support  
- Next-generation Wi-Fi smart plug with multicolor LED indication  
- Scripting (supported only when Matter is disabled)  
- Wi-Fi range extender  
- BLE gateway  
- Power metering (available in Shelly Smart Control app)  
- Schedules  
- Wide compatibility with third-party home automation systems  
- Local actions  
- Optional Shelly Cloud / Shelly Smart Control app support  
- Virtual Components  

## Use Cases

- **Garden Automation:** Automate garden lighting strips, electric grills, stoves, or other outdoor appliances to manage operation and energy consumption, preventing waste.

- **Seamless Integration with Other Matter Devices:** Work effortlessly alongside other Matter-enabled devices for unified smart home control.

- **Compatibility with Apple Devices (via Matter):** Integrate seamlessly into Apple HomeKit ecosystems.

- **Color Night Light Functionality:**  
  - Enable night mode with customizable settings.  
  - When activated, the LED brightness automatically dims during nighttime hours to ensure undisturbed sleep.

- **Prevent Forgotten Appliances from Being Left On:**  
  Monitor and control all connected devices remotely. With built-in countdown timers and locally stored schedules, the device can automatically switch off forgotten appliances after one hour—ideal for ironing, small ovens, or electric radiators.

- **Reduce Energy Waste with Smart Scheduling:**  
  Automate office appliances not used overnight or on weekends. Set schedules to cut power between 7:00 PM and 7:00 AM on weekdays, and from 7:00 PM Friday to 7:00 AM Monday. This reduces energy usage by up to 50%, significantly lowering monthly electricity costs.  
  *Examples:* Small ovens, electric heaters, IR heaters.

- **Air Purifier Controlled by Air Quality Data:**  
  In urban areas where air pollution rises during fall and winter, use scripting to pull real-time air quality data and automatically turn on your air purifier when pollution levels increase.  
  *Example:* Automate an air purifier based on third-party environmental data.

- **Subtle Night Light for Children’s Rooms:**  
  Customize the LED color and brightness to create a soft, ambient glow ideal for children’s comfort at night.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condos, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- Government/Municipal  
- University/College  
- Farming  
- Garden/Yard  

## Integrations

### Amazon Alexa Supported Capabilities  
Yes  

### Google Smart Home Supported Traits  
Yes  

### Samsung SmartThings Supported Capabilities  
Yes  

## Simplified Internal Schematics

![Shelly Plus Plug V3 internal schematics](https://kb.shelly.cloud/__attachments/229244941/Plus-Plug-S-V3-internal-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Simplified Hardware Architecture

![](https://kb.shelly.cloud/__attachments/230948968/Plus-Plugs-pricipe-schematics.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Electrical Interfaces

### Input
- 1 × CEE 7/7 plug  

### Output
- 1 × CEE 7/3 (Type-F / Schuko) socket  

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
- One push button:
  - Press once: Toggle output On/Off.
  - Press and hold for 3 seconds: Check device status (only possible when output is Off).
  - Press and hold for 5 seconds: Reboot (available within 60 seconds of power-up).
  - Press and hold for 10 seconds: Factory reset (available within 60 seconds of power-up).

### Outputs
- LED indication:
  - **First-time setup:** Blue light flashing — indicates AP mode.
  - **After successful Wi-Fi connection:**  
    - Slow red flash: Reconnecting to Wi-Fi.  
    - Constant red: Unable to reconnect to Wi-Fi.
  - **Output On:**
    - **Power-based color change (default):**
      - Green: 0% of set power limit  
      - Yellow: 50% of set power limit  
      - Red: 100% of set power limit  
    - **Custom color (default: green, default brightness: 100%)**
    - **Off**
  - **Output Off:**
    - **Off (default)**
    - **Custom color (default: red, default brightness: 100%)**
  - **OTA Update in Progress:** Red light flashing

## Specifications

| Category | Value |
|--------|-------|
| **Physical** | |
| Size (H×W×D) | 56 × 56 × 103 ±0.5 mm / 2.21 × 2.21 × 4.55 ±0.02 in |
| Weight | 85 ±1 g / 3 ±0.04 oz |
| Compatible sockets | CEE 7/1, CEE 7/3 (Type F / Schuko), or CEE 7/5 (Type E) |
| Compatible plugs | CEE 7/2, CEE 7/4 (Type F / Schuko), CEE 7/7, CEE 7/16 (Type C), or CEE 7/17 |
| Shell material | Plastic with silicone rubber protective cover for outlet |
| Color | Mocha |

| **Environmental** | |
| Ambient temperature | -25°C to 51°C / -13°F to 125°F |
| Humidity | 15% to 85% RH |
| Max. altitude | 2000 m / 6562 ft |
| Glow-wire temperature | 750°C |
| Ingress Protection | IP44 |
| Required forced cooling | No |

| **Electrical** | |
| Power supply | 230 V~ 50/60 Hz |
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

## Troubleshooting
…

## Components and APIs
- [Device API Reference (Shelly Outdoor Plug S Gen3)](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyOutdoorPlugG3)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance
- [Shelly Outdoor Plug S Gen3 Multilingual EU Declaration of Conformity (2025-07-25)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Outdoor%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Shelly Outdoor Plug S Gen3 Multilingual EU Declaration of Conformity (67, 2025-02-04)](https://kb.shelly.cloud/__attachments/1088126979/Shelly%20Outdoor%20Plug%20S%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2067%202025-02-04.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide
- [Shelly Outdoor Plug Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Outdoor%20Plug%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-outdoor-plug-s-gen3)