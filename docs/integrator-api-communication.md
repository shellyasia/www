# 通信

建立 WebSocket 连接 —— 基础数据包类型与结构。

## 地址

打开 WebSocket 连接并使用 JWT token 进行身份验证：

```
wss://<HOST>:6113/shelly/wss/hk_sock?t=<JWT>
```

集成商通过 [用户授权/权限授予](/docs/integrator-api-users) 流程获取所需的主机地址，该信息来自集成商回调 URL 中提供的 `host` 参数。

`<JWT>` token 的获取方式参见 [快速入门](/docs/integrator-api#request-access-token)。

## 事件

由 Shelly Cloud 发送的事件。

### `Shelly:StatusOnChange`

当设备状态发生变化时发送。

```json
{
  "event": "Shelly:StatusOnChange",
  "deviceId": "string",
  "status": {}
}
```

- `event`: `"Shelly:StatusOnChange"`
- `deviceId`: 设备 ID
- `status`: 设备特定的状态结构

---

### `Shelly:Settings`

当通过设备界面更改设备设置时发送。

```json
{
  "event": "Shelly:Settings",
  "deviceId": "string",
  "settings": {}
}
```

- `event`: `"Shelly:Settings"`
- `deviceId`: 设备 ID
- `settings`: 设备特定的设置结构

---

### `Shelly:Online`

当设备在线状态发生变化时发送。

```json
{
  "event": "Shelly:Online",
  "deviceId": "string",
  "online": number
}
```

- `event`: `"Shelly:Online"`
- `deviceId`: 设备 ID
- `online`: 在线状态（`1` = 在线，`0` = 离线）

---

## 命令

### 继电器与灯光控制请求

用于控制继电器或灯光类设备。

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

- `cmd`: 命令类型（`"relay"` 或 `"light"`）
- `id`: 通道 ID（从 `0` 开始）
- `turn`: 操作动作（`"on"`、`"off"` 或 `"toggle"`）

---

### 卷帘控制请求

用于控制卷帘窗设备。

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
- `id`: 通道 ID（从 `0` 开始）
- `go`: 操作动作（`"stop"`、`"open"` 或 `"close"`）

---

### 卷帘至指定位置请求

仅在设备已校准的情况下有效。

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

- `id`: 通道 ID（从 `0` 开始）；即使单通道设备也必须提供。
- `pos`: 目标位置百分比（范围：`0` 到 `100`）。
- `rel`: 相对移动百分比（范围：`[-100..100]`）。不能与 `pos` 同时使用。
- `slat_pos`: 百分比形式的百叶位置（如果支持）。
- `slat_rel`: 百叶相对移动百分比（如果支持）。不能与 `slat_pos` 同时使用。

> 更多详情请参阅 [设备文档](https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Cover#covergotoposition)。

---

### 命令响应

命令请求的响应。

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
- `trid`: 事务 ID
- `deviceId`: 设备 ID
- `user`: 用户 ID（设备所有者）
- `data.isok`: 成功标志（成功时为 `true`）
- `data.res`: 可选消息（例如错误描述）

---

## 操作

### 结果常量 — `data.result`

| 常量             | 描述 |
|------------------|------|
| `OK`             | 操作成功。 |
| `UNAUTHORIZED`   | 设备访问未授权。 |
| `WRONG_API_PARAMETERS` | 请求格式错误。 |
| `WRONG_HOST`     | 请求发送到了错误的主机。 |

> **注意**：`WRONG_HOST` 响应包含额外字段 `host`，表示设备的实际所在位置。这**不保证**设备当前在线。

#### `WRONG_HOST` 示例响应

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

### 设备验证

验证设备是否具有有效的集成配置。

#### 请求

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

#### 响应

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

- `result`: 上述结果常量之一。
- `deviceId`: 请求中提供的设备 ID（可选）。
- `deviceType`、`deviceCode`、`deviceStatus`: **仅当**设备在云端在线时可用。
- `accessGroups`: 十六进制编码的字节，表示访问权限。

#### `accessGroups` 说明

一个字节（8 位），每位代表一个权限组。目前仅有一个组：

- 第 0 位（最低位）：`control`（位为 `1` 时启用）

| 十六进制 | 二进制        | 访问级别 |
|----------|---------------|----------|
| `00`     | `00000000`    | 仅读取（无控制权） |
| `01`     | `00000001`    | 读取 + 控制 |

> 示例：`accessGroups: "01"` 表示已授予控制权限。

---

### 获取设备设置

获取设备设置（仅当设备在云端在线时可用）。

#### 请求

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

#### 响应

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

- `result`: 上述结果常量之一。
- `deviceId`: 请求中提供的设备 ID（可选）。
- `deviceType`、`deviceCode`、`deviceSettings`: **仅当**设备在云端在线时可用。