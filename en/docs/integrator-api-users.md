# User Consent / Permissions Grant

Register or deregister Shelly devices with the Integrator service.

---

### Integrator URL

The Integrator uses a specifically crafted URL, including the `tag` obtained earlier and a callback `url` (recommended to be URL-encoded):

```
https://my.shelly.cloud/integrator.html?itg=<TAG>&cb=<URL>
```

---

### User Interaction

The user must log in with their existing Shelly account, then select the devices they wish to share with the Integrator. Additional access rights can be granted if necessary.

---

### Callback URL

When a user registers (`add`) or deregisters (`remove`) a device, the Integrator is notified via a POST request to the provided callback URL, containing a JSON body:

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

- Each Shelly device may have a separate name for each of its channels.
- The Integrator **must** respond with `200 OK`; otherwise, the operation will be terminated.

---

### Callback URL Security

For every callback request, Shelly Cloud includes an additional HTTP header:  
`SCL-Trust:<JWT_TOKEN>`, where `<JWT_TOKEN>` is an ES384-signed JWT payload with the following content:

```json
{
  "exp": number, // UNIX timestamp (TTL: 2 minutes)
  "itg": string, // INTEGRATOR_TAG
  "did": string  // DEVICE_ID
}
```

The authenticity of this token can be verified using the following public key:

```
-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE3Kx+6C/0ZbnelYUgucUo4/X4xt1NCmELcoyLpgkuLHume4VLZnQjtXeYgzr2FUdsO/ip8SzssSu3CEU9ArvB+yGIlW7l1yLtwHVs/2zXrL0riL++7jdoQCpTGanFVzpM
-----END PUBLIC KEY-----
```

This token guarantees that the request originated from a Shelly Cloud instance, as it was signed with a private key only accessible to Shelly Cloud. The token expires after **two minutes**, and is scoped to a single device ID and integrator, making replay attacks practically impossible—especially when combined with the significant difficulty of eavesdropping and decrypting TLS traffic between Shelly Cloud and the Integrator’s backend.

---

### Unsubscribe Device

This functionality allows any Integrator to remove a previously registered device from syncing data to its servers. It is the Integrator's responsibility to inform the client about this action.

```bash
curl -X POST https://<HOST>.shelly.cloud/integrator/unsubscribe_device \
     -H 'Authorization: Bearer <JWT>' \
     -d "id=<DEVICE_ID>"
```