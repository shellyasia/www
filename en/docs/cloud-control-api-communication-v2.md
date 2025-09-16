# Communication v2.0-beta

For controlling or fetching the state of a device, you will need its `id`. It can be found in the Shelly Cloud App under **Device** → **Settings** → **Device Information** → **Device Id**.

You will also need an `AUTH_KEY` and a `HOST` — refer to the [Getting started](/docs/cloud-control-api) section.

> **Note**: All requests in this section are limited to **1 request per second**.

---

## Get device(s) state

A more generalized and flexible way to fetch device information. This is a single endpoint that accepts a JSON body query to retrieve the state of **up to 10 devices**.

### Request

```bash
curl -X POST 'https://<HOST>/v2/devices/api/get?auth_key=<AUTH_KEY>' \
  -H 'Content-Type: application/json' \
  -d '<BODY>'
```

### Body Structure

```json
{
  "ids": string[],                     // (required) List of device IDs (1 to 10)
  "select": ("status" | "settings")[], // Optional: include "status", "settings", or both
  "pick": {                            // Optional: restrict properties within selected data
    "status": string[],                // Top-level status fields to return
    "settings": string[]               // Top-level settings fields to return
  }
}
```

### Response Format

The response is a list of device states, each with the following structure:

```json
{
  // Basic device properties (always present)
  "id": string,
  "type": string,
  "code": string,
  "gen": string,
  "online": 0 | 1,

  // Additional data (present only if specified in `select`)
  "status": {...},
  "settings": {...}
}
```

> **Note**: The `status` or `settings` fields will be missing if:
> - They are not included in the `select` parameter
> - The `pick` parameter is used and no picked properties exist for the device

---

### Example

Check `status.sys` and `settings.ble`:

```bash
curl -X POST 'https://<HOST>/v2/devices/api/get?auth_key=<AUTH_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"ids":["b48a0a1cd978"],"select":["status","settings"],"pick":{"status":["sys"],"settings":["ble"]}}'
```

#### View Response

```json
[
  {
    "id": "b48a0a1cd978",
    "type": "relay",
    "code": "SNPL-00112EU",
    "gen": "G2",
    "online": 1,
    "status": {
      "sys": {
        "mac": "B48A0A1CD978",
        "restart_required": false,
        "time": "10:40",
        "unixtime": 1739436047,
        "uptime": 464987,
        "ram_size": 260540,
        "ram_free": 120752,
        "fs_size": 458752,
        "fs_free": 135168,
        "cfg_rev": 49,
        "kvs_rev": 0,
        "schedule_rev": 0,
        "webhook_rev": 0,
        "available_updates": {
          "stable": {
            "version": "1.3.3"
          }
        },
        "reset_reason": 1
      }
    },
    "settings": {
      "ble": {
        "enable": true,
        "rpc": {
          "enable": true
        },
        "observer": {
          "enable": true
        }
      }
    }
  }
]
```

---

## Control a single device

Controlling a device means setting its output state. Different endpoints are used depending on the device type: `switch`, `cover`, or `light`.

---

### Control a Switch

Applies to all types and generations of relays and plugs.

#### Request

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/switch?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d '<BODY>'
```

#### Body Structure

```json
{
  "id": string,             // (required) Device ID
  "channel": number,        // Optional, defaults to 0
  "on": boolean,            // (required) Output state
  "toggle_after": number    // After how many seconds, set to opposite of `on`
}
```

---

### Control a Cover

Applies to all types and generations of roller shutters and covers.

#### Request

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/cover?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

#### Body Structure

```json
{
  "id": string,                           // (required) Device ID
  "channel": number,                      // Optional, defaults to 0
  "position": "open" | "close" | "stop" | number | undefined,
                                          // 0–100 inclusive (percentage open)
  "duration": number | undefined,         // Seconds before stopping movement
  "relative": number | undefined,         // -100 to 100: relative movement
  "slatPosition": number | undefined,     // 0–100: slat angle (if supported)
  "slatRelative": number | undefined      // -100 to 100: relative slat adjustment
}
```

> **Notes**:
> - `position` and `relative` cannot be used together
> - `slatPosition` and `slatRelative` cannot be used together
> - `duration` only applies when `position` is `'open'`, `'close'`, or `'stop'`

---

### Control a Light

Applies to all types and generations of lights. Some may not support RGB or color temperature adjustments.

#### Request

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/light?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

#### Body Structure

```json
{
  "id": string,              // (required) Device ID
  "channel": number,         // Optional, defaults to 0
  "on": boolean,             // Output state (required if other parameters are absent)
  "toggle_after": number,    // After how many seconds, toggle state
  "mode": "color" | "white", // Operating mode (if supported)

  // For white mode
  "temperature": number,     // 2700 to 7000 K
  "brightness": number,      // 0 to 100 %

  // For color mode
  "red": number,             // 0 to 255
  "green": number,           // 0 to 255
  "blue": number,            // 0 to 255
  "white": number,           // 0 to 255
  "gain": number,            // 0 to 100 % (intensity boost)
  "effect": number           // 0 to 6: animated effect (if supported)
}
```

---

## Response Format

Successful execution is indicated by **HTTP 200 OK**. On failure, the response includes an error string and a list of human-readable messages.

### Error Response Structure

```json
{
  "error": "<ERROR_STRING>",
  "data": {
    "messages": string[]
  }
}
```

| Status | Error String                 | Reason |
|--------|------------------------------|--------|
| `400`  | `"DEVICE_FAILED_COMMAND"`    | Command failed due to an arbitrary reason |
| `400`  | `"DEVICE_OFFLINE"`           | Device appears to be offline |
| `400`  | `"DEVICE_INVALID_MODE"`      | Device not in correct mode (covers/lights) |
| `400`  | `"DEVICE_INVALID_CHANNEL"`   | Invalid or unsupported channel |
| `400`  | `"BAD_REQUEST"`              | Invalid parameters |
| `404`  | `"INSTANCE_NOT_FOUND"`       | Server-side issue with device instance |
| `404`  | `"DEVICE_NOT_FOUND"`         | Missing device state |
| `500`  | `"UNEXPECTED_SUBSERVICE_ERROR"` | Internal subservice failure |

---

## Control Device Groups

Allows control of multiple devices as a group. Supported group types: `switch`, `cover`, and `light`. Each group consists of a list of `<ID>_<CHANNEL>` identifiers and a command similar to single-device control. Multiple group types can be controlled in one request.

### Request

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/groups?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

### Body Structure

```json
{
  "switch": {
    "ids": string[],                          // List of <ID>_<CHANNEL> (channel defaults to 0)
    "command": {
      "on": boolean,                         // (required) Output state
      "toggle_after": number                 // After how many seconds, toggle state
    }
  },
  "cover": {
    "ids": string[],                          // List of <ID>_<CHANNEL>
    "command": {
      "position": "open" | "close" | "stop" | number | undefined,
      "duration": number | undefined,
      "relative": number | undefined,
      "slatPosition": number | undefined,
      "slatRelative": number | undefined
    }
  },
  "light": {
    "ids": string[],                          // List of <ID>_<CHANNEL>
    "command": {
      "on": boolean,
      "toggle_after": number,
      "mode": "color" | "white",
      "temperature": number,                  // 2500 to 7000 K
      "brightness": number,                   // 0 to 100 %
      "red": number,                          // 0 to 255
      "green": number,                        // 0 to 255
      "blue": number,                         // 0 to 255
      "white": number,                        // 0 to 255
      "gain": number,                         // 0 to 100 %
      "effect": number                        // 0 to 6: animated effect
    }
  }
}
```

> **Note**: In each group, required fields match those in single-device control.

---

### Response Format

On success, returns **HTTP 200 OK**. If some commands fail, a map of failed devices and their error codes is returned:

```json
{
  "failedCommands": {
    "<ID>_<CHANNEL>": "<ERROR_STRING>",
    ...
  }
}
```

| Error String               | Reason |
|----------------------------|--------|
| `"DEVICE_UNSUPPORTED_COMMAND"` | Unknown command received |
| `"BAD_REQUEST"`              | Invalid parameters |
| `"DEVICE_NOT_FOUND"`         | Failed to retrieve device state |
| `"UNEXPECTED_SUBSERVICE_ERROR"` | Internal subservice failure |
| `"DEVICE_FAILED_COMMAND"`    | Arbitrary command execution failure |