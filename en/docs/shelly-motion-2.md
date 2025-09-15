# Shelly Motion 2

![](https://kb.shelly.cloud/__attachments/229146742/image-20230321-132908.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Device Identification

- **Device name:** Shelly Motion 2  
- **Device model:** SHMOS-02  
- **Device SSID:** shellymotion2-XXXXXX  

## Short Description

The Shelly Motion 2 is a high-sensitivity, ultra-low power Wi-Fi motion sensor with integrated light and temperature sensing. The built-in light and temperature sensors enable advanced automation scenarios in home or office environments. It also features an integrated accelerometer for tamper detection and vibration monitoring. Powered by a built-in 6500 mAh rechargeable Li-ion battery, the device can remain connected in standby mode for up to 3 years, and operate continuously with approximately 6 hours of daily motion detection for an estimated 12–18 months without recharging.

## Main Applications

- Residential  
- MDU (Multi Dwelling Units – apartments, condominiums, hotels, etc.)  
- Light Commercial (small offices, retail stores, restaurants, gas stations, etc.)  
- University/College  

## Integrations

- Alexa  

![USP Type-C Charging Port](https://kb.shelly.cloud/__attachments/231604493/Plugging%20USB%20cable.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### USB Type-C Port

- Used to supply power to the device  
- Enables battery recharging  

## Connectivity

- Wi-Fi  

## User Interface

![](https://kb.shelly.cloud/__attachments/31784987/Components.png?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

### Inputs

- Reset button (**B**)  

### Outputs

- Charging indicator (**A**)  
- LED indication (**C**)
  - **Blue:** AP mode  
  - **Blue brief flash:** Settings changed  
  - **Blue flashing:** Firmware update in progress  
  - **Red brief flash:** Motion detected and reported  
  - **Red long flash:** Error during firmware update  
  - **Green brief flash:** Unreported motion detection (device not connected or motion detection disabled)  
  - **Red, green, and blue flashing sequentially:** Tamper detection or device startup  
  - **Cyan brief flash:** Motion detected while in AP mode  

## Specifications

| **Category** | **Value** |
|--------------|----------|
| **Physical** | |
| Size (HxWxD): | 89.3 × 41.4 × 22.9 mm / 3.52 × 1.63 × 0.90 inch (without stand)<br>89.3 × 41.4 × 47.9 mm / 3.52 × 1.63 × 1.89 inch (with stand) |
| Weight | ~100 g |
| Mounting | Wall mounting (indoor use only); screws with head diameter 5–8 mm (0.20–0.31 inch) recommended |
| Shell material | Plastic |
| Color | White |
| **Environmental** | |
| Ambient temperature | -10 °C to 50 °C / 14 °F to 122 °F |
| Humidity | 30 % to 70 % RH |
| **Electrical** | |
| Power supply (batteries) | Li-ion 3.7 V / 6500 mAh |
| Estimated battery life | 12–18 months (with motion detection)<br>Up to 3 years (standby mode) |
| Power supply (USB) | USB Type-C (power adapter and cable not included) |
| **Sensors** | |
| Temperature sensor | Yes |
| Light sensor | Yes |
| Motion sensor | Yes (detection range: 9 m / 30 ft) |
| **Radio** | |
| RF band | 2401 – 2495 MHz |
| Max. RF power | <20 dBm |
| Wi-Fi protocol | 802.11 b/g/n |
| Wi-Fi range | Up to 30 m / 100 ft indoors<br>Up to 50 m / 160 ft outdoors<br>(Depends on local conditions) |
| **MCU** | |
| CPU | Silicon Labs |
| Flash | 6 MB |
| **Firmware capabilities** | |
| Schedules | Yes (up to 20) |
| Webhooks (URL actions) | 13 hooks, up to 5 URLs per hook |
| MQTT | Yes |
| CoAP | Yes |

## Troubleshooting

...  

## Web Interface Guide

[Read the Shelly Motion 2 web interface guide](../knowledge-base/shelly-motion-2-web-interface-guide)

## Components and APIs

- [This device](https://shelly-api-docs.shelly.cloud/gen1/#shelly-motion-2)  
- [All Shelly devices and services](https://shelly-api-docs.shelly.cloud/)  

## Printed User Guide

[Download printed user guide – English, Deutsch, Italiano, Español, Português, Français](https://kb.shelly.cloud/__attachments/31784987/Download%20printed%20user%20guide%20-%20English,%20Deutsch,%20Italiano,%20Espa%C3%B1ol,%20Portugu%C3%AAs,%20Fran%C3%A7ais?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Compliance

[Shelly Motion 2 multilingual EU declaration of conformity.pdf](https://kb.shelly.cloud/__attachments/266174494/Shelly%20Motion%202%20multilingual%20EU%20declaration%20of%20conformity.pdf?inst-v=06e25fb6-1df6-4585-801d-931808676f21)

## Installation Guides

- [Shelly Motion 2 User and Safety Guide](../knowledge-base/shelly-motion-2-user-and-safety-guide)