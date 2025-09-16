# Shelly H&T Gen3

![](https://kb.shelly.cloud/__attachments/229146742/H&T-Gen3.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly H&T Gen3  
- **Device model:** S3SN-0U12A  
- **Device SSID:** ShellyHTG3-XXXXXXXXXXXX  
- **Device Bluetooth ID:** 0x1809  

## Short Description

The **Shelly H&T Gen3** is a Wi-Fi smart humidity and temperature sensor featuring a large e-paper graphic display for clear, easy-to-read environmental data.

## Main Features

- **Wi-Fi Connectivity:** Connects to your home Wi-Fi network for remote monitoring via smartphone apps or compatible devices.
- **Large E-Paper Graphic Display:** Provides high-contrast, glare-free visualization of temperature and humidity readings.
- **Digital Clock:** NTP-synchronized real-time clock with automatic time updates.
- **Smart Home Integration:** Compatible with Google Assistant, Amazon Alexa, and Samsung SmartThings for voice control and automation.
- **USB Type-C Port:** Used for continuous power supply. Not suitable for charging internal batteries.
- **Bluetooth Connectivity:** Supports Bluetooth 4.2 for setup assistance and local configuration.
- **User-Friendly Interface:** Includes a reset button (behind the back cover) for manual interaction and device management.
- **Battery Operation:** In battery mode, the device wakes every minute to measure conditions. It reports changes only if thresholds are exceeded (0.5 °C or 5% RH), but unconditionally reports after two hours without update. A 5-minute cooldown period prevents self-heating.
- **USB-Powered Operation:** When powered via USB, the device wakes every 5 minutes, measures, updates the display, and sends data unconditionally to connected channels.
- **Environmental Specifications:** Operates in temperatures from 0 °C to 40 °C (32 °F to 105 °F) and relative humidity of 30% to 70% RH.
- **Power Supply Options:** Powered by 4 × AA batteries (LR6, 1.5 V, not included) or via USB Type-C.
- **Wireless Connectivity:** Supports Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 with indoor range up to 30 m (100 ft) and outdoor up to 50 m (160 ft).
- **Microcontroller Unit (MCU):** ESP-Shelly-C38F with 8 MB flash memory.

These features make the Shelly H&T Gen3 ideal for residential, multi-dwelling units (MDUs), light commercial, university/college, and other environments requiring reliable, low-maintenance environmental monitoring with smart home integration.

## Main Applications

- Residential  
- Multi-Dwelling Units (MDUs): apartments, condominiums, hotels  
- Light Commercial: small offices, retail stores, restaurants, gas stations  
- University/College  

## Integrations

### Amazon Alexa Supported Capabilities
Yes

### Google Smart Home Supported Traits
Yes

### Samsung SmartThings Supported Capabilities
Yes

## Device Electrical Interfaces

### USB Type-C Port

![USB Type-C port](https://kb.shelly.cloud/__attachments/231604493/Plus%20H&T%20USB%20Port.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- Supplies power to the device  
- Cannot be used to charge internal batteries  

## Connectivity

- Wi-Fi  
- Bluetooth  

## User Interface

### Inputs

- **Reset Button:** Located behind the back cover

![](https://kb.shelly.cloud/__attachments/265977877/Plus%20H&T%20Reset%20Button.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

#### Reset Button Actions

- **Brief press:**
  - If in Sleep mode → enters Setup mode  
  - If in Setup mode → returns to Sleep mode  

- **Hold for 5 seconds:**
  - If in Setup mode → enables the device’s access point  

- **Hold for 10 seconds:**
  - If in Setup mode → performs factory reset  

### Outputs

- **E-Paper Graphic Display**

![](https://kb.shelly.cloud/__attachments/265977877/Interface%20H&TGen3-1.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

![](https://kb.shelly.cloud/__attachments/265977877/TIME.PNG?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Current time*

![SEt.png](https://kb.shelly.cloud/__attachments/265977877/SEt.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device is in Setup mode*

![AP.png](https://kb.shelly.cloud/__attachments/265977877/AP.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device access point is enabled*

![Humidity.png](https://kb.shelly.cloud/__attachments/265977877/Humidity.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Humidity readings*

![OtA.png](https://kb.shelly.cloud/__attachments/265977877/OtA.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Receiving over-the-air firmware update – progress shown as percentage*

![Globe.png](https://kb.shelly.cloud/__attachments/265977877/Globe.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Device has reported current readings to the Cloud. If missing, displayed values may differ from Cloud data.*

![Wi-Fi.png](https://kb.shelly.cloud/__attachments/265977877/Wi-Fi.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Wi-Fi signal strength indicator*

![battery.png](https://kb.shelly.cloud/__attachments/265977877/battery.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Battery level indicator. Shows empty when USB-powered.*

![BT.png](https://kb.shelly.cloud/__attachments/265977877/BT.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Bluetooth connectivity is enabled*

![OtA error.png](https://kb.shelly.cloud/__attachments/265977877/OtA%20error.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
*Error during firmware update*

## Measuring and Reporting

### On Batteries

When operating on battery power:

1. Wakes every minute to take measurements. Updates the screen if there's a change of ≥0.2 °C or ≥3% RH. The default reporting threshold is ≥0.5 °C or ≥5% RH — smaller changes do not trigger a report.
2. If no threshold-based report is sent within two hours, the device unconditionally reports its status to Shelly Cloud and all connected channels.
3. A 5-minute cooldown period is enforced after each measurement to prevent self-heating; during this time, the device remains inactive.

### On USB Power Supply

When powered via USB:

- Wakes every 5 minutes  
- Performs measurement  
- Updates the display  
- Unconditionally reports data to all connected channels  
- Sleeps for 5 minutes  

### User-Initiated Report

Pressing the reset button (behind the cover) triggers:
- Wake-up  
- Measurement  
- Display update  
- Unconditional report to all channels  
- 5-minute sleep cycle  

## Specifications

| **Category** | **Value** |
|-------------|----------|
| **Physical** | |
| Size (H×W×D): | 70 × 70 × 26 mm / 2.76 × 2.76 × 1.02 in (without stand)<br>70 × 70 × 45 mm / 2.76 × 2.76 × 1.77 in (with stand) |
| Weight | 47 g / 1.66 oz |
| Mounting | With stand (on flat surface)<br>Wall mounting using screws (head diameter: 5–7 mm / 0.20–0.28 in, max thread diameter: 3 mm / 0.12 in)<br>Double-sided foam sticker |
| Shell Material | Plastic |
| Shell Color | White<br>Mocha: C:0 M:12 Y:28 K:12<br>Ivory: C:3 M:4 Y:14 K:8<br>Black: C:0 M:0 Y:0 K:100 |
| **Environmental** | |
| Ambient Working Temperature | 0 °C to 40 °C / 32 °F to 105 °F |
| Humidity | 30% to 70% RH |
| Max. Altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power Supply | Batteries (4 × AA LR6, 1.5 V, not included)<br>USB Type-C (power adapter and cable not included) |
| Estimated Battery Life | Approx. 1 year (varies based on battery type, environmental conditions, and network strength) |
| **Sensors & Meters** | |
| Internal Temperature Sensor | No |
| Temperature Sensor | Yes |
| Humidity Sensor | Yes |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n |
| RF Band | 2401 – 2495 MHz |
| Max. RF Power | < 20 dBm |
| Range | Up to 30 m / 100 ft (indoor)<br>Up to 50 m / 160 ft (outdoor)<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 4.2 |
| RF Band | 2400 – 2483.5 MHz |
| Max. RF Power | < 4 dBm |
| Range | Up to 10 m / 33 ft (indoor)<br>Up to 30 m / 100 ft (outdoor)<br>(Depends on local conditions) |
| **Microcontroller Unit (MCU)** | |
| CPU | ESP-Shelly-C38F |
| Flash Memory | 8 MB |
| **Firmware Capabilities** | |
| Schedules | No |
| Webhooks (URL actions) | 10 hooks, up to 2 URLs per hook |
| Scripting | No |
| MQTT | Yes |

## Shelly Smart Control

- [Adding the Device to Shelly Smart Control](../knowledge-base/add-new-device)

## Shelly Web User Interface

- [Shelly H&T Gen3 Web Interface Guide](../knowledge-base/shelly-h-t-gen3-web-interface-guide)

## Troubleshooting

…

## Components and APIs

- [This Device API Documentation](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyHTG3)
- [All Shelly Devices and Services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly H&T Gen3 Multilingual EU Declaration of Conformity (2025-07-22)](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%202025-07-22.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 Matte Black UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Matte%20Black%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 Matte White UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Matte%20White%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 Mocha UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Mocha%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)
- [Shelly H&T Gen 3 Ivory UK PSTI ACT Statement of Compliance](https://kb.shelly.cloud/__attachments/266174494/Shelly%20H&T%20Gen%203%20Ivory%20UK%20PSTI%20ACT%20Statement%20of%20compliance.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

**Compliance Archive:**
- [Shelly H&T Gen3 Multilingual EU Declaration of Conformity (28, 2023-12-29)](https://kb.shelly.cloud/__attachments/309329921/Shelly%20H&T%20Gen3%20multilingual%20EU%20declaration%20of%20conformity%2028%202023-12-29.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly H&T Gen3 Multilingual Printed User and Safety Guide](https://kb.shelly.cloud/__attachments/391315459/Shelly%20H&T%20Gen3%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

- [Ръководство за употреба и безопасност](../knowledge-base/shelly-h-t-gen3-1)

## Installation Guides

×