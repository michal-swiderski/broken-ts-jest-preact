### Run
```
npm install
npm run test
```

Using `jsdom` as a `testEnvironment` results in:

```
Jest encountered an unexpected token

...

Details:

/home/mswiderski/Documents/ts-jest-test/node_modules/preact/dist/preact.module.js:1

...

SyntaxError: Unexpected token 'export'
```

### Expected behaviour:

The test should pass.

Notice that this passes with Jest 27 and also when `testEnvironment` is unset.