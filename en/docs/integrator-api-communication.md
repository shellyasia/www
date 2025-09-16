# Communication

Established WebSocket connection – basic package types and structure.

## Address

Open a WebSocket connection and authenticate with the JWT token:

```
wss://<HOST>:6113/shelly/wss/hk_sock?t=<JWT>
```

The integrator learns the required host via the [User Consent/Permissions Grant](/integrator-api/users) process, using the `host` parameter provided in the Integrator callback URL.

The `<JWT>` token is obtained as described in [Getting Started](/integrator-api/#request-access-token).

## Events

Events sent by Shelly Cloud.

### `Shelly:StatusOnChange`

Sent when a device's state changes.

```json
{
  "event": "Shelly:StatusOnChange",
  "deviceId": "string",
  "status": {}
}
```

- `event`: `"Shelly:StatusOnChange"`
- `deviceId`: Device ID
- `status`: Device-specific status structure

---

### `Shelly:Settings`

Sent when a device setting is changed via the device interface.

```json
{
  "event": "Shelly:Settings",
  "deviceId": "string",
  "settings": {}
}
```

- `event`: `"Shelly:Settings"`
- `deviceId`: Device ID
- `settings`: Device-specific settings structure

---

### `Shelly:Online`

Sent when a device changes its online status.

```json
{
  "event": "Shelly:Online",
  "deviceId": "string",
  "online": number
}
```

- `event`: `"Shelly:Online"`
- `deviceId`: Device ID
- `online`: Online status (`1` = online, `0` = offline)

---

## Commands

### Request for Relay & Light

Request to control relay or light devices.

```json
{
  "event": "Shelly:CommandRequest",
  "trid": number,
  "deviceId": "string",
  "data": {
    "cmd": "relay" | "light",
    "params": {
      "id": number,
      "turn": "on" | "off" | "toggle"
    }
  }
}
```

- `cmd`: Command type (`"relay"` or `"light"`)
- `id`: Channel ID (starts from `0`)
- `turn`: Action (`"on"`, `"off"`, or `"toggle"`)

---

### Request for Roller

Request to control roller shutter devices.

```json
{
  "event": "Shelly:CommandRequest",
  "trid": number,
  "deviceId": "string",
  "data": {
    "cmd": "roller",
    "params": {
      "id": number,
      "go": "stop" | "open" | "close"
    }
  }
}
```

- `cmd`: `"roller"`
- `id`: Channel ID (starts from `0`)
- `go`: Action (`"stop"`, `"open"`, or `"close"`)

---

### Request for Roller to Position

This command only works if the device is calibrated.

```json
{
  "event": "Shelly:CommandRequest",
  "trid": number,
  "deviceId": "string",
  "data": {
    "cmd": "roller_to_pos",
    "params": {
      "id": number,
      "pos": number,
      "rel": number,
      "slat_pos": number,
      "slat_rel": number
    }
  }
}
```

- `id`: Channel ID (starts from `0`); required even for single-channel devices.
- `pos`: Target position in percent (range: `0` to `100`).
- `rel`: Relative movement in percent (`[-100..100]`). Cannot be used together with `pos`.
- `slat_pos`: Slat position in percent (if supported).
- `slat_rel`: Relative slat movement in percent (if supported). Cannot be used together with `slat_pos`.

> See the [device documentation](https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Cover#covergotoposition) for more details.

---

### Command Response

Response to a command request.

```json
{
  "event": "Shelly:CommandResponse",
  "trid": number,
  "deviceId": "string",
  "user": number,
  "data": {
    "isok": boolean,
    "res": "string"
  }
}
```

- `event`: `"Shelly:CommandResponse"`
- `trid`: Transaction ID
- `deviceId`: Device ID
- `user`: User ID (device owner)
- `data.isok`: Success flag (`true` if successful)
- `data.res`: Optional message (e.g., error description)

---

## Actions

### Result Constants – `data.result`

| Constant             | Description |
|----------------------|-----------|
| `OK`                 | Operation succeeded. |
| `UNAUTHORIZED`       | Device access not authorized. |
| `WRONG_API_PARAMETERS` | Malformed request. |
| `WRONG_HOST`         | Request made on incorrect host. |

> **Note:** The `WRONG_HOST` response includes an additional field `host`, indicating the actual location of the device. This does **not** guarantee the device is currently online.

#### Example Response for `WRONG_HOST`

```json
{
  "event": "Integrator:ActionResponse",
  "trid": number,
  "user": "string",
  "data": {
    "result": "WRONG_HOST",
    "deviceId": "string",
    "host": "string"
  }
}
```

---

### Device Verify

Verify that the device has a valid integration.

#### Request

```json
{
  "event": "Integrator:ActionRequest",
  "trid": number,
  "data": {
    "action": "DeviceVerify",
    "deviceId": "string"
  }
}
```

#### Response

```json
{
  "event": "Integrator:ActionResponse",
  "trid": number,
  "user": "string",
  "data": {
    "result": "string",
    "deviceId": "string",
    "deviceType": "string",
    "deviceCode": "string",
    "deviceStatus": {},
    "accessGroups": "string"
  }
}
```

- `result`: One of the result constants above.
- `deviceId`: Provided in request (optional).
- `deviceType`, `deviceCode`, `deviceStatus`: Available **only if** the device is online in the cloud.
- `accessGroups`: Hex-encoded byte representing access permissions.

#### `accessGroups` Explanation

A single byte (8 bits), where each bit represents a permission group. Currently, only one group exists:

- Bit 0 (LSB): `control` (enabled when bit is `1`)

| Hex | Binary        | Access Level |
|-----|---------------|--------------|
| `00` | `00000000`   | Read-only (no control) |
| `01` | `00000001`   | Read + Control |

> Example: `accessGroups: "01"` means control access is granted.

---

### Device Get Settings

Retrieve device settings (available only if the device is online in the cloud).

#### Request

```json
{
  "event": "Integrator:ActionRequest",
  "trid": number,
  "data": {
    "action": "DeviceGetSettings",
    "deviceId": "string"
  }
}
```

#### Response

```json
{
  "event": "Integrator:ActionResponse",
  "trid": number,
  "user": "string",
  "data": {
    "result": "string",
    "deviceId": "string",
    "deviceType": "string",
    "deviceCode": "string",
    "deviceSettings": {}
  }
}
```

- `result`: One of the result constants.
- `deviceId`: Provided in request (optional).
- `deviceType`, `deviceCode`, `deviceSettings`: Available **only if** the device is online.