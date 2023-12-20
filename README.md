# @sanomics/eslint-config

基于 [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) 的 ESLint 配置。

## 在项目中的使用方法

### Install

```bash
pnpm i -D eslint @sanomics/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import eslintConfig from '@sanomics/eslint-config'

export default eslintConfig()
```

With CJS:

```js
// eslint.config.js
const eslintConfig = require('@sanomics/eslint-config').default

module.exports = eslintConfig()
```

> [!TIP]
> ESLint only detects `eslint.config.js` as the flat config entry, meaning you need to put `type: module` in your `package.json` or you have to use CJS in `eslint.config.js`. If you want explicit extension like `.mjs` or `.cjs`, or even `eslint.config.ts`, you can install [`eslint-ts-patch`](https://github.com/antfu/eslint-ts-patch) to fix it.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 扩展配置

在 `eslint.config.js` 中:

```js
import eslintConfig from '@sanomics/eslint-config'

export default eslintConfig(
    {
        // override preset ESLint config options
    },

    // override ESLint configs
    {
        files: ['**/*.vue'],
        rules: {
            'vue/html-indent': ['warn', 2],
        },
    },
    {
        ignores: [
            '**/*.md',
            'public/libs/ketcher/**/*',
            'public/libs/rdkit/RDKit_minimal.js',
        ],
    },
    {
        files: ['**/*.yml', '**/*.yaml'],
        rules: {
            'yaml/indent': ['warn', 4, { indicatorValueIndent: 2 }],
        },
    },
)
```
