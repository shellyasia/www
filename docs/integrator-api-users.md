# 用户授权 / 权限授予

注册或取消注册 Shelly 设备至 Integrator 服务。

---

### Integrator URL

Integrator 使用一个特定构造的 URL，包含之前获取的 `tag` 和回调 `url`（建议进行 URL 编码）：

```
https://my.shelly.cloud/integrator.html?itg=<TAG>&cb=<URL>
```

---

### 用户交互

用户需使用其现有的 Shelly 账户登录，然后选择希望与 Integrator 共享的设备。如需，可额外授予访问权限。

---

### 回调 URL

当用户注册（`add`）或取消注册（`remove`）设备时，Integrator 会通过向提供的回调 URL 发送 POST 请求来接收通知，请求体为 JSON 格式：

```json
{
  "userId": number,
  "deviceId": string,
  "deviceType": string,
  "deviceCode": string,
  "accessGroups": string,
  "action": "add|remove",
  "host": "shelly-1-eu.shelly.cloud",
  "name": ["Plug 1"]
}
```

- 每个 Shelly 设备可能为其每个通道设置独立名称。
- Integrator **必须**返回 `200 OK`；否则操作将被终止。

---

### 回调 URL 安全性

对于每个回调请求，Shelly Cloud 会附加一个额外的 HTTP 头部：  
`SCL-Trust:<JWT_TOKEN>`，其中 `<JWT_TOKEN>` 是一个使用 ES384 签名的 JWT 令牌，内容如下：

```json
{
  "exp": number, // UNIX 时间戳（TTL：2 分钟）
  "itg": string, // INTEGRATOR_TAG
  "did": string  // DEVICE_ID
}
```

该令牌的真实性可通过以下公钥进行验证：

```
-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3Kx+6C/0ZbnelYUgucUo4/X4xt1NCmELcoyLpgkuLHume4VLZnQjtXeYgzr2FUdsO/ip8SzssSu3CEU9ArvB+yGIlW7l1yLtwHVs/2zXrL0riL++7jdoQCpTGanFVzpM
-----END PUBLIC KEY-----
```

该令牌确保请求确实来自 Shelly Cloud 实例，因为它是使用仅 Shelly Cloud 可访问的私钥签名的。令牌有效期为 **两分钟**，且作用范围限定于单个设备 ID 和集成器，使得重放攻击几乎不可能实现——尤其是结合 TLS 流量在 Shelly Cloud 与 Integrator 后端之间传输时难以窃听和解密的特性。

---

### 取消订阅设备

此功能允许任意 Integrator 将此前已注册的设备从数据同步中移除。Integrator 有责任通知客户端该操作。

```bash
curl -X POST https://<HOST>.shelly.cloud/integrator/unsubscribe_device \
     -H 'Authorization: Bearer <JWT>' \
     -d "id=<DEVICE_ID>"
```