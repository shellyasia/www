# Shelly Plus H&T

![](https://kb.shelly.cloud/__attachments/229146742/Plus%20H&T.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device Name:** Shelly Plus H&T  
- **Device Model:** SNSN-0013A  
- **Device SSID:** ShellyPlusHT-XXXXXX  

## Short Description

The **Shelly Plus H&T** is a Wi-Fi-enabled smart humidity and temperature sensor featuring a large e-paper graphic display for clear, easy-to-read environmental data.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote monitoring via smartphone apps or compatible devices.
- **Large E-Paper Graphic Display:** Provides high-contrast, energy-efficient visual feedback of temperature and humidity readings.
- **Smart Home Integration:** Works seamlessly with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **USB Type-C Port:** Supports continuous power supply via USB; not intended for battery charging.
- **Bluetooth Connectivity:** Enables setup assistance and device configuration during initial pairing.
- **User-Friendly Interface:** Includes a reset button (behind the back cover) for manual operation and troubleshooting.
- **Battery Operation:** Wakes every minute to measure temperature and humidity. Reports changes when thresholds are exceeded (default: 0.5 °C or 5% RH). If no threshold-based reports occur within two hours, it unconditionally sends status updates to the cloud.
- **USB-Powered Operation:** Wakes every 5 minutes to take measurements, update the display, and report data to all connected channels without threshold restrictions.
- **Environmental Specifications:** Operates in temperatures from 0 °C to 40 °C (32 °F to 105 °F), with recommended relative humidity between 30% and 70% RH.
- **Power Supply Options:** Powered by 4 × AA batteries (LR6, 1.5 V, not included) or via USB Type-C connection.
- **Wireless Connectivity:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with indoor range up to 30 m (100 ft) and outdoor up to 50 m (160 ft).
- **MCU (Microcontroller Unit):** ESP32 with 4 MB flash memory.
- **Firmware Capabilities:** Supports MQTT communication and webhooks for custom integrations.

These features make the Shelly Plus H&T ideal for residential, multi-dwelling units, light commercial, educational, and other environments requiring reliable, low-power environmental monitoring with smart home integration.

## Main Applications

- Residential homes  
- Multi-Dwelling Units (MDUs): apartments, condominiums, hotels  
- Light Commercial: small offices, retail stores, restaurants, gas stations  
- University/College buildings  

## Integrations

- Google Assistant  
- Amazon Alexa  
- Samsung SmartThings  

## Device Electrical Interfaces

### USB Type-C Port

![USB Type-C Port](https://kb.shelly.cloud/__attachments/231604493/Plus%20H&T%20USB%20Port.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- Used to supply continuous power to the device.  
- Cannot charge internal batteries.  

## Connectivity

- Wi-Fi (802.11 b/g/n)  
- Bluetooth 4.2  

## User Interface

### Inputs

- **Reset Button** (located behind the back cover)

![Reset Button](https://kb.shelly.cloud/__attachments/29163591/Plus%20H&T%20Reset%20Button.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Outputs

- **E-Paper Graphic Display**

![](https://kb.shelly.cloud/__attachments/29163591/Plus%20H&T%20display.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
![](https://kb.shelly.cloud/__attachments/29163591/SEt.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device is in Setup mode.*

![](https://kb.shelly.cloud/__attachments/29163591/AP.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device access point is enabled.*

![](https://kb.shelly.cloud/__attachments/29163591/Humidity.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Humidity readings displayed.*

![](https://kb.shelly.cloud/__attachments/29163591/OtA.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device is receiving an over-the-air firmware update. Progress shown as a percentage.*

![](https://kb.shelly.cloud/__attachments/29163591/Globe.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device has reported current readings to the Cloud. If missing, the display may show outdated values.*

![](https://kb.shelly.cloud/__attachments/29163591/Wi-Fi.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Wi-Fi signal strength indicator.*

![](https://kb.shelly.cloud/__attachments/29163591/battery.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Indicates battery level. Shows empty when powered via USB.*

![](https://kb.shelly.cloud/__attachments/29163591/BT.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Bluetooth connectivity is enabled.*

![](https://kb.shelly.cloud/__attachments/29163591/OtA%20error.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Error occurred during firmware update.*

## Measuring and Reporting

### On Batteries

When operating on battery power:

1. The device wakes every minute to perform a measurement.  
   - If temperature changes by ≥0.2 °C or humidity by ≥3%, the screen updates.  
   - Default reporting threshold: ≥0.5 °C or ≥5% RH. Changes below this threshold do not trigger a report.  
2. If no threshold-based reports are sent for two consecutive hours, the device unconditionally reports its current status to Shelly Cloud and connected channels.  
3. A 5-minute cooldown period is enforced after each measurement to prevent self-heating; during this time, the device remains asleep.

### On USB Power Supply

When powered via USB Type-C:

- The device wakes every 5 minutes to:  
  - Take measurements  
  - Update the display  
  - Unconditionally report data to all connected channels  
  - Enter sleep mode for 5 minutes  

### User-Initiated Report

Pressing the reset button (behind the back cover) triggers:
- Immediate wake-up  
- Measurement  
- Display update  
- Unconditional report to all connected channels  
- 5-minute sleep cycle afterward

## Specifications

| **Category** | **Value** |
|--------------|-----------|
| **Physical** | |
| Size (H×W×D) | 70×70×26 mm / 2.76×2.76×1.02 inch (without stand)<br>70×70×45 mm / 2.76×2.76×1.77 inch (with stand) |
| Weight | Approx. 100 g |
| Mounting Options | With stand (on flat surface)<br>Wall mounting using screws (head diameter: 5–7 mm / 0.20–0.28 in, max thread diameter: 3 mm / 0.12 in)<br>Double-sided foam sticker |
| Shell Material | Plastic |
| Color | White |
| **Environmental** | |
| Ambient Temperature | 0 °C to 40 °C / 32 °F to 105 °F |
| Humidity | 30% to 70% RH (recommended) |
| Max. Altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power Supply (Batteries) | 4 × AA (LR6) 1.5 V (not included) |
| Estimated Battery Life | ~1 year (varies based on battery type, environmental conditions, and network activity) |
| Power Supply (USB) | USB Type-C (power adapter and cable not included) |
| **Radio** | |
| RF Band | 2400 – 2495 MHz |
| Max. RF Power | <20 dBm |
| Wi-Fi Protocol | 802.11 b/g/n |
| Wi-Fi Range | Up to 30 m / 100 ft (indoor)<br>Up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |
| Bluetooth Protocol | 4.2 |
| Bluetooth Range | Up to 10 m / 33 ft (indoor)<br>Up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |
| **MCU** | |
| CPU | ESP32 |
| Flash Memory | 4 MB |
| **Firmware Capabilities** | |
| Schedules | No |
| Webhooks (URL Actions) | Up to 10 hooks, 2 URLs per hook |
| Scripting | No |
| MQTT | Yes |
| CoAP | No |

## Troubleshooting

*(Content pending)*

## Web Interface Guide

[Read the Shelly Plus H&T Web Interface Guide](../knowledge-base/shelly-plus-h-t-web-interface-guide)

## Components and APIs

- [This Device API Reference](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen2/ShellyPlusHT)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Plus H and T Multilingual EU Declaration of Conformity](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H%20and%20T%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus H&T UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H&T%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly Plus H&T AU/NZ Certificate for Suitability](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Plus%20H&T%20AU%20NZ%20Certificate%20for%20Suitability.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

[Shelly Plus H&T Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Plus%20H&T%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Shelly Plus H&T User and Safety Guide](../knowledge-base/shelly-plus-h-t-user-and-safety-guide)