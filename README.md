# reproduce-typescript-eslint-7750

reproduce-typescript-eslint-7750

## issue

https://github.com/typescript-eslint/typescript-eslint/issues/7750

## expected

No error.

## actual

```ts
$ npm test

> reproduce-typescript-eslint-7750@1.0.0 test
> tsc --build

reproduce.ts:4:7 - error TS2742: The inferred type of 'rule' cannot be named without a reference to './node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule'. This is likely not portable. A type annotation is necessary.

4 const rule = createRule({
        ~~~~


Found 1 error.

```
