---
title: 雪莉智能家居
titleTemplate: ':title'
---

# Hono



## Developer Experience

Hono provides a delightful "**Developer Experience**".

Easy access to Request/Response thanks to the `Context` object. Moreover, Hono
is written in TypeScript. Hono has "**Types**".

For example, the path parameters will be literal types.

![A screenshot showing Hono having proper literal typing when URL parameters. The URL "/entry/:date/:id" allows for request parameters to be "date" or "id"](/images/ss.png)

And, the Validator and Hono Client `hc` enable the RPC mode. In RPC mode, you
can use your favorite validator such as Zod and easily share server-side API
specs with the client and build type-safe applications.

See [Hono Stacks](/docs/concepts/stacks).
