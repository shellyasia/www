# 演示代码

## WebSocket 客户端

此 JavaScript 代码依赖于 [ws](https://www.npmjs.com/package/ws) 库。它演示了如何连接到 Shelly Cloud 实例，以接收设备信息并发送控制命令。

```javascript
const WebSocket = require('ws');

const { TOKEN, HOST, ID } = process.env;

const wss = `wss://${HOST}:6113/shelly/wss/hk_sock`;
const sock = new WebSocket(`${wss}?t=${TOKEN}`);

sock.on('open', () => {
    console.log(`| WS Open @ ${wss} |`);
    sendThroughWSS([
        BuildEvent.ActionRequest.DeviceVerify(ID),
        // 继电器示例
        BuildEvent.CommandRequest.Relay('on', ID),
        // 卷帘示例
        BuildEvent.CommandRequest.Roller('open', ID),
        BuildEvent.CommandRequest.RollerToPos(50, ID),
        // 灯光示例
        BuildEvent.CommandRequest.Light('on', ID),
    ]);
}).on('message', (message) => {
    console.log("<-- RECEIVED");
    console.log(`    ${message}`);
}).on('error', (error) => {
    console.log(`On Error: ${error.message}`);
}).on("close", (code, reason) => {
    console.log(`On Close: ${code} ${reason}`);
});

const makeTransactionId = () => Math.floor(Math.random() * 999);

const BuildEvent = {
    ActionRequest: {
        DeviceVerify(deviceId) {
            return JSON.stringify({
                event: "Integrator:ActionRequest",
                trid: makeTransactionId(),
                data: { action: 'DeviceVerify', deviceId }
            });
        }
    },
    CommandRequest: {
        /**
         * @param {string} turn `on`|`off`|`toggle`
         * @param {string} deviceId
         * @param {number} timeout 可选，单次翻转倒计时（秒）
         */
        Relay(turn, deviceId, timeout) {
            return JSON.stringify({
                event: "Shelly:CommandRequest",
                trid: makeTransactionId(),
                deviceId,
                data: {
                    cmd: "relay",
                    params: { id: 0, turn, timeout },
                }
            });
        },
        /**
         * @param {string} go `stop`|`open`|`close`
         * @param {string} deviceId
         */
        Roller(go, deviceId) {
            return JSON.stringify({
                event: "Shelly:CommandRequest",
                trid: makeTransactionId(),
                deviceId,
                data: {
                    cmd: "roller",
                    params: { id: 0, go },
                }
            });
        },
        /**
         * @param {number} pos 目标位置（百分比）
         * @param {string} deviceId
         */
        RollerToPos(pos, deviceId) {
            return JSON.stringify({
                event: "Shelly:CommandRequest",
                trid: makeTransactionId(),
                deviceId,
                data: {
                    cmd: "roller_to_pos",
                    params: { id: 0, pos },
                }
            });
        },
        /**
         * @param {string} turn `on`|`off`|`toggle`
         * @param {string} deviceId
         * @param {number} timeout 可选，单次翻转倒计时（秒）
         */
        Light(turn, deviceId, timeout) {
            return JSON.stringify({
                event: "Shelly:CommandRequest",
                trid: makeTransactionId(),
                deviceId,
                data: {
                    cmd: "light",
                    // 注意：完整支持的参数列表请参考：
                    // https://shelly-api-docs.shelly.cloud/gen1/#shelly-bulb-light-0
                    params: { id: 0, turn, timeout, mode: 'white', temp: 4000 },
                }
            });
        }
    }
};

async function sendThroughWSS(commands) {
    for (let command of commands) {
        sock.send(command);
        console.log("--> SEND");
        console.log(`    ${command}`);
        // 模拟延迟 5 秒
        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
    }
}
```

---

## 验证回调 URL 安全令牌

如 [此处所述](/integrator-api/users#callback-url-security)，所有用户授权回调均可通过检查 `SCL-Trust` 请求头中传递的令牌来验证其确实来自 Shelly Cloud 实例。以下是一个使用 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 库的 JavaScript 示例，用于验证作为命令行参数传入的 JWT 令牌。

```javascript
const pubkey = `-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3Kx+6C/0ZbnelYUgucUo4/X4xt1NCmEL
coyLpgkuLHume4VLZnQjtXeYgzr2FUdsO/ip8SzssSu3CEU9ArvB+yGIlW7l1yLt
wHVs/2zXrL0riL++7jdoQCpTGanFVzpM
-----END PUBLIC KEY-----`;

const check = process.argv[2];

if (check === undefined) {
    console.log("必须提供一个要检查的 JWT 作为参数");
    process.exit(-1);
}

const JWT = require('jsonwebtoken');

try {
    console.log(JWT.verify(check, pubkey, ['ES384']));
} catch (e1) {
    console.log("验证失败！");
    const decoded = JWT.decode(check);
    if (decoded !== null) {
        console.log("无效消息: ", decoded);
    } else {
        console.log("无法将参数解码为 JWT！");
    }
}
```

### Java 中的类似示例

> 完整的 Maven 项目可在此处获取 [https://github.com/ALLTERCO/java-verify](https://github.com/ALLTERCO/java-verify)

```java
public class App {
    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    static PublicKey getAlltercoPubKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        StringReader src = new StringReader(
            "-----BEGIN PUBLIC KEY-----\n" +
            "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3Kx+6C/0ZbnelYUgucUo4/X4xt1NCmEL\n" +
            "coyLpgkuLHume4VLZnQjtXeYgzr2FUdsO/ip8SzssSu3CEU9ArvB+yGIlW7l1yLt\n" +
            "wHVs/2zXrL0riL++7jdoQCpTGanFVzpM\n" +
            "-----END PUBLIC KEY-----\n"
        );

        PemReader pr = new PemReader(src);
        PemObject o = pr.readPemObject();
        byte[] content = o.getContent();
        X509EncodedKeySpec pubKeySpec = new X509EncodedKeySpec(content);
        KeyFactory factory = KeyFactory.getInstance("ECDSA");
        return factory.generatePublic(pubKeySpec);
    }

    static JWTVerifier getES384Verifier(ECPublicKey pubkey) {
        return JWT.require(Algorithm.ECDSA384(pubkey, null))
            .acceptLeeway(5)   // 允许 nbf 和 iat 的时间偏差（秒）
            .acceptExpiresAt(30) // 允许 exp 时间偏差（30 秒）
            .build();
    }

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("必须提供一个要检查的 JWT 作为参数");
            System.exit(-1);
        }

        String toCheck = args[0];
        System.out.println("需验证: " + toCheck);

        PublicKey pubkey = null;
        try {
            pubkey = getAlltercoPubKey();
        } catch (NoSuchAlgorithmException | InvalidKeySpecException | IOException e) {
            System.out.println("无法加载 Allterco 公钥！");
            System.exit(-1);
        }

        if (!(pubkey instanceof ECPublicKey)) {
            System.out.println("获取的 Allterco 公钥不是 ECPublicKey 类型！");
            System.exit(-1);
        }

        JWTVerifier verifier = getES384Verifier((ECPublicKey) pubkey);
        DecodedJWT decoded = null;

        try {
            decoded = verifier.verify(toCheck);
        } catch (Throwable e) {
            System.out.println("验证失败！e: " + e);
            System.exit(-1);
        }

        System.out.println("验证成功: " + decoded.getClaims());
    }
}
```