# Using the TypeScript services
These are exposed to Node.js now https://github.com/Microsoft/TypeScript/issues/372#issuecomment-66843523

---

You'll find a new file produced by the build called typescript.d.ts in built/local. You can grab the bits from both master and release-1.4 as you please.

You can sample it by checking out the branch of your choice and running

1. `jake LKG`
1. `npm install -g`, and then
1. `npm link typescript` from wherever you npm project resides (or from your home directory if you want to be able to require("typescript") from a node prompt).


With that and our .d.ts file, you should be able to hit the ground running by making a new file with something like the following:

```ts
/// <reference path="your/typings/directory/typescript.d.ts" />

var ts = import("typescript");
```
---

For now we just copied the `bin` folder and `package.json` into our `node_modules` folder and checked that in. 

# Using visual studio 
Update the language service as documented https://github.com/Microsoft/TypeScript/issues/1110#issuecomment-62451204 

1. Copy `tsc.js` to `C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.1` 
2. Copy `typescriptServices.js` to `C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TypeScript` 

Make sure you copy the old `.js` files to `.bak.js` in the same directory for safety.