# Demo Code

## WS Client

This JavaScript code depends on the [ws](https://www.npmjs.com/package/ws) library. It demonstrates how to connect to a Shelly Cloud instance to receive device information and send control commands.

```javascript
const WebSocket = require('ws');

const { TOKEN, HOST, ID } = process.env;

const wss = `wss://${HOST}:6113/shelly/wss/hk_sock`;
const sock = new WebSocket(`${wss}?t=${TOKEN}`);

sock.on('open', () => {
    console.log(`| WS Open @ ${wss} |`);
    sendThroughWSS([
        BuildEvent.ActionRequest.DeviceVerify(ID),
        // Relay example
        BuildEvent.CommandRequest.Relay('on', ID),
        // Roller example
        BuildEvent.CommandRequest.Roller('open', ID),
        BuildEvent.CommandRequest.RollerToPos(50, ID),
        // Light example
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
         * @param {number} timeout optional, one-shot flip-back timer in seconds
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
         * @param {number} pos desired position in percent
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
         * @param {number} timeout optional, one-shot flip-back timer in seconds
         */
        Light(turn, deviceId, timeout) {
            return JSON.stringify({
                event: "Shelly:CommandRequest",
                trid: makeTransactionId(),
                deviceId,
                data: {
                    cmd: "light",
                    // NOTE: for full list of supported parameters see:
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
        // simulate sleep for 5 sec
        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
    }
}
```

---

## Checking Callback URL Security Token

As [explained here](/integrator-api/users#callback-url-security), all user consent callbacks can be verified as originating from the Shelly Cloud instance by checking the token sent via the `SCL-Trust` header. Below is an example in JavaScript using the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) library to verify such a token passed as a command-line argument.

```javascript
const pubkey = `-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3Kx+6C/0ZbnelYUgucUo4/X4xt1NCmEL
coyLpgkuLHume4VLZnQjtXeYgzr2FUdsO/ip8SzssSu3CEU9ArvB+yGIlW7l1yLt
wHVs/2zXrL0riL++7jdoQCpTGanFVzpM
-----END PUBLIC KEY-----`;

const check = process.argv[2];

if (check === undefined) {
    console.log("A JWT to check must be provided as parameter");
    process.exit(-1);
}

const JWT = require('jsonwebtoken');

try {
    console.log(JWT.verify(check, pubkey, ['ES384']));
} catch (e1) {
    console.log("Verify failed!");
    const decoded = JWT.decode(check);
    if (decoded !== null) {
        console.log("INVALIDATED msg: ", decoded);
    } else {
        console.log("Failed to decode the param as JWT!");
    }
}
```

### Similar Example in Java

> Full Maven project available [here](https://github.com/ALLTERCO/java-verify)

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
            .acceptLeeway(5)   // seconds for nbf and iat
            .acceptExpiresAt(30) // 30 seconds for exp
            .build();
    }

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("A JWT to check must be provided as parameter");
            System.exit(-1);
        }

        String toCheck = args[0];
        System.out.println("Must check " + toCheck);

        PublicKey pubkey = null;
        try {
            pubkey = getAlltercoPubKey();
        } catch (NoSuchAlgorithmException | InvalidKeySpecException | IOException e) {
            System.out.println("Failed to transfigure Allterco public key!");
            System.exit(-1);
        }

        if (!(pubkey instanceof ECPublicKey)) {
            System.out.println("Obtained Allterco public key is not an ECPublicKey!");
            System.exit(-1);
        }

        JWTVerifier verifier = getES384Verifier((ECPublicKey) pubkey);
        DecodedJWT decoded = null;

        try {
            decoded = verifier.verify(toCheck);
        } catch (Throwable e) {
            System.out.println("Failed to verify! e:" + e);
            System.exit(-1);
        }

        System.out.println("Verified: " + decoded.getClaims());
    }
}
```