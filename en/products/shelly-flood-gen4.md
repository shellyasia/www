# Shelly Flood Gen4

![Shelly Flood Gen4 .jpg](https://kb.shelly.cloud/__attachments/229146742/Shelly%20Flood%20Gen4%20.jpg?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Flood Gen4  
- **Device model:** S4SN-0071A  
- **Device SSID:** ShellyFloodG4-XXXXXXXXXXXX  
- **BLE ID:** 0x1822  

## Short Description

The Shelly Flood Gen4 alerts you when water appears where it shouldn’t—such as under your water heater, dishwasher, or washing machine. It comes with an innovative leak sensor cable that covers larger areas, detecting leaks beyond a single point to provide unmatched protection for your home. Multiple leak sensor cables can be connected, extending coverage up to 150 meters.

Receive instant alerts directly to your mobile device and customize safety protocols to protect your family and property.

Shelly Flood Gen4 offers Wi-Fi, Zigbee, and Bluetooth connectivity. It also includes a built-in web interface for easy monitoring, control, and settings adjustments.

## Main Features

- Leak detection for smaller and larger areas via extendable leak sensor cable  
- Supports two modes: Flood Detection and Rain Detection  
- Three built-in flood alarm modes: Intense, Normal (default), and Economic  
- Remote notifications and built-in buzzer for local alerts  
- Battery-powered for flexibility and uninterrupted operation  
- IP44 protection for durability and environmental resistance  
- Broad compatibility with third-party home automation systems  
- Supports local automation actions for independent operation  
- Compatible with Shelly Cloud and Shelly Smart Control app  

## Use Cases

- **Immediate Flood Detection**  
  Receive instant alerts when Shelly Flood Gen4 detects water in areas like basements, bathrooms, or laundry rooms, enabling quick action to prevent damage.

- **Protect Your Home from Water Damage**  
  Place Shelly Flood Gen4 near vulnerable appliances or plumbing systems. If a leak occurs, you’ll be alerted in real time, helping to minimize potential damage.

- **Monitor High-Risk Areas**  
  Easily install Shelly Flood Gen4 in any room where flooding is a concern, such as kitchens or under sinks, and receive notifications through your phone without complex setup.

- **Automatic Appliance Shutoff**  
  Integrate Shelly Flood Gen4 with smart devices to automatically turn off washing machines or dishwashers when a flood is detected, preventing further water damage.

- **Detect Pipe Leaks Early**  
  Run the leak sensor cable along a suspect pipe to quickly detect the presence of a leak, helping you take action before damage spreads.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light commercial (small office buildings, small retail/restaurant/gas station, etc.)  
- Government/municipal  
- University/college  
- Farming  

## Integrations

### Amazon Alexa Supported Capabilities
- Contact Sensor

### Google Smart Home Supported Traits
- Sensor State

### Samsung SmartThings Supported Capabilities
- Battery  
- Water Sensor  

## Simplified Internal Schematics

![Flood-Gen4-internal-schematics-1.png](https://kb.shelly.cloud/__attachments/229244941/Flood-Gen4-internal-schematics-1.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Connectivity

- Wi-Fi  
- Bluetooth  
- Zigbee  
- Matter  

## Accessories

**Shelly Leak Sensor Cable** – included in the package with Shelly Flood Gen4. Click [here](https://www.thingiverse.com/thing:6932760) to access 3D print files for cable holders compatible with the Shelly Leak Sensor Cable.

## User Interface

### Inputs

**LED Button:**

- **Press 1 time:** Wakes up the device for 3 minutes. The LED turns on and initiates a state report.
  - Press 1 time: Reports status of the Flood component.
  - Press 2 times rapidly: Sends the device to sleep.
  - Press 3 times rapidly: Puts the device in Zigbee inclusion mode. It stays in this mode for 3 minutes and can be found in the Home Automation platform via the Zigbee Hub.
  - Press 5 times rapidly: Switches the device between Matter firmware (default) and Zigbee firmware, or vice versa.
  - Press and hold for 5 seconds: Network reset. The LED flashes slowly. If no action is taken within 3 minutes, the device retains its existing settings.
  - Press and hold for 10 seconds: Resets the device to factory settings.

### Outputs

**Buzzer**

- **Long beep (3.5 sec ON / 1.5 sec OFF):** Indicates flood detection.
- **Short beep (0.3 sec ON / 5 sec OFF):** Indicates low battery when the battery level is below 20%. The low battery alarm will not sound during a flood event (unless the flood alarm is muted via the LED button) or when Economic mode is selected.

**LED Button Indication**

- **Blue light:** AP mode is enabled.
- **Red light:** STA mode is active, but the device is not connected to a Wi-Fi network.
- **Yellow light:** STA mode is active, and the device is connected to a Wi-Fi network but not to the Shelly Cloud, or the Shelly Cloud is disabled.
- **Green light:** STA mode is active, and the device is connected to both a Wi-Fi network and the Shelly Cloud.
- **Flashing purple light:** Device is in Zigbee commissioning mode.
- **Flashing red/blue light:** OTA update is in progress.
- **Flashing yellow light:** Device is in identification mode, signaling its presence for user identification.

## Alarm Modes

| Mode | Alarm Mode | Report State Frequency\* | Buzzer\*\* | Buzzer Mute Conditions | Use Case |
|------|------------|---------------------------|------------|--------------------------|----------|
| Flood | Intense | • Every 30 sec for 5 minutes<br>• Every 5 minutes for 30 minutes<br>• Every 30 minutes once for 1 hour<br>• Every 1 hour for 2 hours<br>• Every 2 hours indefinitely | • ON for 10 minutes<br>• Then ON for 1 minute every 5 minutes | • No flood<br>• Button single push | Protect extremely valuable assets:<br>• Lab equipment<br>• Server room |
| Flood | Normal (Default) | • ON for 5 minutes<br>• Then ON for 1 minute every 30 minutes | Same as above | Same as above | Normal use |
| Flood | Economic | Disabled | N/A | N/A | Activate when you won’t visit for a while:<br>• Vacation home<br>• Mountain cabin<br>• Country cottage |
| Rain | — | — | Automating outdoor areas, such as controlling motorized awnings or sprinklers | — | — |

> \* Continue reporting until successful, then sleep. Report again upon flood state change. If multiple reporting channels are configured, success on any channel will be considered a successful report.  
> \*\* Buzzer pattern: 3.5 sec ON / 1.5 sec OFF

## Specifications

| Quantity | Value |
|--------|-------|
| **Physical** | |
| Size (HxWxD) | 97 × 76 × 25 mm / 3.82 × 2.99 × 0.98 inch |
| Weight | • 91 g / 3.21 oz (without batteries)<br>• 185 g / 6.53 oz (with batteries) |
| Mounting | Wall |
| Shell material | Plastic |
| Shell color | White |
| **Environmental** | |
| Ambient working temperature | -20°C to 40°C / -5°F to 105°F |
| Humidity | 30% to 70% RH |
| Max. altitude | 2000 m / 6562 ft |
| **Electrical** | |
| Power supply | Batteries |
| Battery type | 4 × AA 1.5 V |
| Estimated battery life | Approx. 2 years (depending on battery type, device usage, and network connection strength) |
| **Sensors, meters** | |
| Leak sensor cable | 2 m, extendable (up to 150 m), attaches via designated port |
| **Radio** | |
| **Wi-Fi** | |
| Protocol | 802.11 b/g/n/ax |
| RF band | 2401 – 2483 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 30 m / 100 ft indoors and 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **Bluetooth** | |
| Protocol | 5 (LE) |
| RF band | 2402 – 2480 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 10 m / 33 ft indoors and 30 m / 100 ft outdoors<br>(Depends on local conditions) |
| **Zigbee** | |
| Protocols | 802.15.4 |
| RF bands | 2405 to 2480 MHz |
| Max. RF power | < 20 dBm |
| Range | Up to 100 m / 328 ft indoors and 300 m / 984 ft outdoors<br>(Depends on local conditions) |
| **Microcontroller Unit** | |
| CPU | ESP-Shelly-C68F |
| Flash | 8 MB |
| **Firmware Capabilities** | |
| Schedules | No |
| Webhooks (URL actions) | 10 hooks, with 2 URLs per hook |
| Scripting | No |
| MQTT | Yes |
| UDP | Yes |
| KVS (Key-Value Store) | Yes |

## Shelly Smart Control

- [Adding the device to the Shelly Smart Control](../knowledge-base/add-new-device)

## Troubleshooting

**Q:** Why doesn’t the Shelly Flood Gen4 detect a flood instantly?  
**A:** To extend battery life, the Shelly Flood Gen4 checks for changes in flood status every 5 seconds. This slight delay balances prompt detection with optimal power efficiency.

**Q:** What can cause the Shelly Flood Gen4 to trigger false alarms?  
**A:** The sensor cable may be touching conductive surfaces like pipes, rails, or other metal objects. High humidity with condensation can also trigger false alarms.

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen4/ShellyFlood)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)

## Compliance

- [Shelly Flood Gen4 multilingual EU declaration of conformity 2025-08-25.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Flood%20Gen4%20multilingual%20EU%20declaration%20of%20conformity%202025-08-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [UK PSTI ACT Statement of compliance - Shelly Flood Gen4.pdf](https://kb.shelly.cloud/__attachments/266174494/UK%20PSTI%20ACT%20Statement%20of%20compliance%20-%20Shelly%20Flood%20Gen4.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Shelly Leak Sensor Cable multilingual EU declaration of conformity 2025-08-25.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Leak%20Sensor%20Cable%20multilingual%20EU%20declaration%20of%20conformity%202025-08-25.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Printed User Guide

- [Shelly Flood Gen4 multilingual printed user and safety guide.pdf](https://kb.shelly.cloud/__attachments/391315459/Shelly%20Flood%20Gen4%20multilingual%20printed%20user%20and%20safety%20guide.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)  
- [Ръководство за употреба и безопасност](../knowledge-base/shelly-flood-gen4-1)

## Installation Guides

×