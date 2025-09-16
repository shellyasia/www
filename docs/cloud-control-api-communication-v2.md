# Communication v2.0-beta

要控制或获取设备的状态，您需要其 `id`。该 ID 可在 Shelly Cloud App 中的 **设备** → **设置** → **设备信息** → **设备 ID** 查看。

您还需要一个 `AUTH_KEY` 和一个 `HOST` —— 请参考 [快速入门](/docs/cloud-control-api) 章节。

> **注意**：本节中的所有请求均限制为 **每秒最多 1 次**。

---

## 获取设备（或多个设备）状态

一种更通用且灵活的方式来获取设备信息。这是一个单一端点，接受包含 JSON 请求体的查询，用于获取 **最多 10 个设备** 的状态。

### 请求

```bash
curl -X POST 'https://<HOST>/v2/devices/api/get?auth_key=<AUTH_KEY>' \
  -H 'Content-Type: application/json' \
  -d '<BODY>'
```

### 请求体结构

```json
{
  "ids": string[],                     // (必填) 设备 ID 列表（1 到 10 个）
  "select": ("status" | "settings")[], // 可选：包含 "status"、"settings" 或两者
  "pick": {                            // 可选：限制所选数据中的属性
    "status": string[],                // 要返回的顶层 status 字段
    "settings": string[]               // 要返回的顶层 settings 字段
  }
}
```

### 响应格式

响应是一个设备状态列表，每个设备状态具有以下结构：

```json
{
  // 基本设备属性（始终存在）
  "id": string,
  "type": string,
  "code": string,
  "gen": string,
  "online": 0 | 1,

  // 额外数据（仅当在 `select` 中指定时存在）
  "status": {...},
  "settings": {...}
}
```

> **注意**：如果满足以下任一条件，`status` 或 `settings` 字段将缺失：
> - 它们未包含在 `select` 参数中
> - 使用了 `pick` 参数，但该设备没有匹配的字段

---

### 示例

检查 `status.sys` 和 `settings.ble`：

```bash
curl -X POST 'https://<HOST>/v2/devices/api/get?auth_key=<AUTH_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"ids":["b48a0a1cd978"],"select":["status","settings"],"pick":{"status":["sys"],"settings":["ble"]}}'
```

#### 查看响应

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

## 控制单个设备

控制设备意味着设置其输出状态。根据设备类型不同，使用不同的端点：`switch`、`cover` 或 `light`。

---

### 控制开关

适用于所有型号和代次的继电器和插头。

#### 请求

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/switch?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d '<BODY>'
```

#### 请求体结构

```json
{
  "id": string,             // (必填) 设备 ID
  "channel": number,        // 可选，默认为 0
  "on": boolean,            // (必填) 输出状态
  "toggle_after": number    // 多少秒后切换为相反状态
}
```

---

### 控制遮蔽物（如卷帘）

适用于所有型号和代次的卷帘和遮蔽装置。

#### 请求

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/cover?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

#### 请求体结构

```json
{
  "id": string,                           // (必填) 设备 ID
  "channel": number,                      // 可选，默认为 0
  "position": "open" | "close" | "stop" | number | undefined,
                                          // 0–100（开合百分比）
  "duration": number | undefined,         // 移动停止前的秒数
  "relative": number | undefined,         // -100 到 100：相对移动量
  "slatPosition": number | undefined,     // 0–100：百叶角度（若支持）
  "slatRelative": number | undefined      // -100 到 100：相对百叶调整
}
```

> **说明**：
> - `position` 和 `relative` 不能同时使用
> - `slatPosition` 和 `slatRelative` 不能同时使用
> - `duration` 仅在 `position` 为 `'open'`、`'close'` 或 `'stop'` 时有效

---

### 控制灯光

适用于所有型号和代次的灯具。部分设备可能不支持 RGB 或色温调节。

#### 请求

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/light?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

#### 请求体结构

```json
{
  "id": string,              // (必填) 设备 ID
  "channel": number,         // 可选，默认为 0
  "on": boolean,             // 输出状态（若其他参数不存在，则必需）
  "toggle_after": number,    // 多少秒后切换状态
  "mode": "color" | "white", // 运行模式（若支持）

  // 白光模式
  "temperature": number,     // 2700 到 7000 K
  "brightness": number,      // 0 到 100 %

  // 彩色模式
  "red": number,             // 0 到 255
  "green": number,           // 0 到 255
  "blue": number,            // 0 到 255
  "white": number,           // 0 到 255
  "gain": number,            // 0 到 100 %（亮度增强）
  "effect": number           // 0 到 6：动画效果（若支持）
}
```

---

## 响应格式

成功执行时返回 **HTTP 200 OK**。失败时，响应包含错误字符串和一组可读的消息。

### 错误响应结构

```json
{
  "error": "<ERROR_STRING>",
  "data": {
    "messages": string[]
  }
}
```

| 状态码 | 错误字符串                   | 原因 |
|--------|------------------------------|------|
| `400`  | `"DEVICE_FAILED_COMMAND"`    | 命令因任意原因失败 |
| `400`  | `"DEVICE_OFFLINE"`           | 设备似乎离线 |
| `400`  | `"DEVICE_INVALID_MODE"`      | 设备不在正确模式下（遮蔽物/灯光） |
| `400`  | `"DEVICE_INVALID_CHANNEL"`   | 无效或不支持的通道 |
| `400`  | `"BAD_REQUEST"`              | 参数无效 |
| `404`  | `"INSTANCE_NOT_FOUND"`       | 服务端设备实例问题 |
| `404`  | `"DEVICE_NOT_FOUND"`         | 缺少设备状态 |
| `500`  | `"UNEXPECTED_SUBSERVICE_ERROR"` | 内部子服务故障 |

---

## 控制设备组

允许将多个设备作为一个组进行控制。支持的组类型：`switch`、`cover` 和 `light`。每个组由一组 `<ID>_<CHANNEL>` 标识符和类似单设备控制的命令组成。可在一次请求中控制多个组类型。

### 请求

```bash
curl -X POST "https://<HOST>/v2/devices/api/set/groups?auth_key=<AUTH_KEY>" \
  -H "Content-Type: application/json" \
  -d "<BODY>"
```

### 请求体结构

```json
{
  "switch": {
    "ids": string[],                          // `<ID>_<CHANNEL>` 列表（通道默认为 0）
    "command": {
      "on": boolean,                         // (必填) 输出状态
      "toggle_after": number                 // 多少秒后切换状态
    }
  },
  "cover": {
    "ids": string[],                          // `<ID>_<CHANNEL>` 列表
    "command": {
      "position": "open" | "close" | "stop" | number | undefined,
      "duration": number | undefined,
      "relative": number | undefined,
      "slatPosition": number | undefined,
      "slatRelative": number | undefined
    }
  },
  "light": {
    "ids": string[],                          // `<ID>_<CHANNEL>` 列表
    "command": {
      "on": boolean,
      "toggle_after": number,
      "mode": "color" | "white",
      "temperature": number,                  // 2500 到 7000 K
      "brightness": number,                   // 0 到 100 %
      "red": number,                          // 0 到 255
      "green": number,                        // 0 到 255
      "blue": number,                         // 0 到 255
      "white": number,                        // 0 到 255
      "gain": number,                         // 0 到 100 %
      "effect": number                        // 0 到 6：动画效果
    }
  }
}
```

> **注意**：每个组中的必填字段与单设备控制一致。

---

### 响应格式

成功时返回 **HTTP 200 OK**。若部分命令失败，将返回一个包含失败设备及其错误码的映射：

```json
{
  "failedCommands": {
    "<ID>_<CHANNEL>": "<ERROR_STRING>",
    ...
  }
}
```

| 错误字符串                   | 原因 |
|----------------------------|------|
| `"DEVICE_UNSUPPORTED_COMMAND"` | 接收到未知命令 |
| `"BAD_REQUEST"`              | 参数无效 |
| `"DEVICE_NOT_FOUND"`         | 无法获取设备状态 |
| `"UNEXPECTED_SUBSERVICE_ERROR"` | 内部子服务故障 |
| `"DEVICE_FAILED_COMMAND"`    | 命令执行失败（任意原因） |