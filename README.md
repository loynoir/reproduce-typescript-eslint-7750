# reproduce-typescript-eslint-7753

reproduce-typescript-eslint-7753

## issue

https://github.com/typescript-eslint/typescript-eslint/issues/7753

## expected

No error.

## actual

```ts
$ npm test

> reproduce-typescript-eslint-7753@1.0.0 test
> node --version && tsc --build

v20.8.0
reproduce.ts:4:7 - error TS2742: The inferred type of 'rule' cannot be named without a reference to './node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule'. This is likely not portable. A type annotation is necessary.

4 const rule = createRule({
        ~~~~


Found 1 error.

$ 
```
