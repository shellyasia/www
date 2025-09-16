# Shelly Plus Smoke

![](https://kb.shelly.cloud/__attachments/229146742/Plus-Smoke.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Plus Smoke  
- **Device model:** SNSN-0031Z  
- **Device SSID:** ShellyPlusSmoke-XXXXXX  

## Short Description

The Shelly Plus Smoke (**the Device**) is a smart photoelectric smoke alarm designed to detect slow-smoldering fires that may burn for hours before igniting fully. Such fires can originate from sources like cigarettes left unattended on sofas or bedding.

## Features

- Battery-powered operation  
- Visual LED indication  
- Low battery warning  
- Alarm pause (Hush mode)  
- Built-in test function  
- Easy installation  
- Certified to DIN EN 14604  

## Main Applications

- Residential use  

## Connectivity

- Wi-Fi  
- Bluetooth  

Users can enable or disable each connectivity option as needed.

## User Interface

### Inputs

- One push button:  
  - Press and hold for 3 seconds to initiate a device test.  
  - Press briefly to silence an active alarm.  
  - Press briefly 3 times to enter Setup mode (active for 2 minutes).  
  - Press briefly 5 times to perform a factory reset (device enters Setup mode for 2 minutes).

### Outputs

#### LED Indication

- **Normal operation:** Red light flashes once every 53 seconds.  
- **Testing:** Three rapid red flashes.  
- **Alarm state:** Continuous red flashing.  
- **Malfunction:** Two red flashes every 53 seconds.  
- **Hushed alarm:** One red flash every 10 seconds.  
- **Low battery warning:** One red flash every 53 seconds (with audible alert).  
- **Hushed low battery warning:** One red flash every 53 seconds (no sound).  
- **Setup mode (initial):** Rapid green flashing.  
- **Setup mode (final 2 minutes):** Slow green flashing.

#### Buzzer

- **Button pressed:** One short beep.  
- **Testing:** Three short beeps.  
- **Alarm:** Continuous loud beeping.  
- **Low battery warning:** One short beep every 53 seconds.

## Specifications

| **Category**         | **Type**                     | **Value** |
|----------------------|------------------------------|-----------|
| **Physical**         | Size (DxH)                   | 86 × 31 ± 0.5 mm / 3.39 × 1.22 ± 0.02 in |
|                      | Weight                       | 95 ± 1 g / 3.35 ± 0.05 oz |
|                      | Mounting                     | Ceiling |
|                      | Shell material               | Plastic |
|                      | Color                        | White |
|                      | Device lifespan              | 10 years |
| **Environmental**    | Ambient temperature          | -0 °C to 55 °C / 32 °F to 131 °F |
|                      | Humidity                     | 30 % to 95 % RH |
| **Electrical**       | Power supply voltage (AC)    | N/A |
|                      | Power supply voltage (DC)    | 1 × 3 V CR123A / CR17335 battery |
|                      | Battery lifespan             | 5 years (with original battery) |
| **Sensors, Meters**  | Smoke sensor                 | Photoelectric |
| **Radio**            | RF band                      | 2400 – 2495 MHz |
|                      | Max. RF power                | <20 dBm |
|                      | Wi-Fi protocol               | 802.11 b/g/n |
|                      | Wi-Fi range                  | Up to 30 m / 100 ft indoors; up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
|                      | Bluetooth protocol           | 4.2 |
|                      | Bluetooth range              | Up to 10 m / 33 ft indoors; up to 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **MCU**              | CPU                          | ESP32-U4WDH |
|                      | Flash                        | 4 MB |
| **Firmware Capabilities** | Webhooks (URL actions)   | 10 webhooks with 2 URLs per hook |
|                      | Scripting                    | No |
|                      | MQTT                         | Yes |
|                      | CoAP                         | No |

## Troubleshooting

...

## Web Interface Guide

[Read the Shelly Plus Smoke web interface guide](../knowledge-base/shelly-plus-smoke-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusSmoke)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Plus Smoke Alarm multilingual EU declaration of conformity 2025-07-21.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Smoke%20Alarm%20multilingual%20EU%20declaration%20of%20conformity%202025-07-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Plus Smoke Alarm UK PSTI ACT Statement of compliance.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20Smoke%20Alarm%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  

**Compliance archive:**  
- [Shelly Plus Smoke multilingual EU declaration of conformity 10 2023-08-21.pdf](https://kb.shelly.cloud/__attachments/132284417/Shelly%20Plus%20Smoke%20multilingual%20EU%20declaration%20of%20conformity%2010%202023-08-21.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Battery Material Safety Data Sheet

[HCB-WI-MSDS-01-003](https://kb.shelly.cloud/__attachments/105676845/HCB-WI-MSDS-01-003?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guides

- [Shelly Plus Smoke multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Smoke%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
  - [Ръководство за употреба и безопасност](../knowledge-base/shelly-plus-smoke-1)

- [Shelly Plus Smoke networking guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20Smoke%20networking%20guide?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
  - [Ръководство за мрежова конфигурация](../knowledge-base/shelly-plus-smoke-2)

## Installation Guides

- [Shelly Plus Smoke User and Safety Guide](../knowledge-base/shelly-plus-smoke-user-and-safety-guide)