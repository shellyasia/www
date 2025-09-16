# Getting Started

## Introduction

The Secure API for controlling Shelly devices through our cloud is available. Every registered user of the Shelly Cloud application can use this API to control their devices.

Visit [http://control.shelly.cloud](http://control.shelly.cloud) to set up your account and devices, or use the mobile Shelly Cloud application.

With this API, you can execute commands and change device settings.

## Requirements

- Active account for the Shelly Cloud app  
- Your Shelly devices must be added to the app

> **Note**  
> Currently, API calls are limited to one per second.

### Authorization Key

You can generate an authorization key in the app under `User settings` → `Authorization cloud key`.

> **Danger**  
> Do not share your authorization key with anyone. Anyone who has this key can control your Shelly devices.

> **Note**  
> The key will be regenerated if you change your password.

### Server URI

Each user account is associated with a server in our cloud infrastructure. To use this API, you need to know the host where your account is hosted. Note that the server URI may change due to capacity management and load balancing across cloud hosts.

The server URI can be found on the same page where you generate your authorization key.

### OAuth

OAuth-based authentication is also supported. For more information, refer to the [Real Time Events](/cloud-control-api/real-time-events) section.