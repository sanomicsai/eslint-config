# @sanomics/eslint-config

Extending [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) with [Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) and [Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) features。

## Usage in Project

### Install

```bash
pnpm i -D eslint typescript @sanomics/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import eslintConfig from '@sanomics/eslint-config'

export default eslintConfig()
```

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

### VS Code support

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "gql",
    "graphql"
  ]
}
```
## Extra rules

### Grouped import statement

Import statements are separated into different groups by blank lines according to categories

```ts
// built in modules
import path from 'node:path'

// external packages
import _ from 'lodash'

// internal files, including relative imports and alias
import { foo } from './foo'
import { bar } from '~/bar'

// types
import type { Foo } from './foo'
```

### Unified function declaration style

When declearing a function, we only use [the `function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function).

```ts
// good
function foo() {

}

// bad, 
const foo = () => {}

// good, arrow function is allowed to use when it's passed as arguments
setTimeout(() => {

},1000)
```

### No shadow

See [no-shadow - ESLint](https://eslint.org/docs/latest/rules/no-shadow) for detail.

### No unused vars

Generally unused vars is not allowed, except for `props` and `emit` in `.vue` files. 

```vue
<script setup lang="ts">
// good
const props = defineProps<{
    foo: string
}>()

// good
const emit = defineEmits<{
    change: [foo: string]
}>()

// bad
const foo = ''
</script>
```

### Kebab-casing and self-closing component

```vue
<template>
    <!-- good -->
    <user-form />

    <!-- bad -->
    <UserFrom />

    <!-- bad -->
    <user-form></user-form>
</template>
```

### No self-closing HTML element

```vue
<template>
    <!-- good -->
    <div></div>

    <!-- bad -->
    <div />
</template>
```
## Customization

In `eslint.config.js`:

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

Please check [Anthony Fu's `README.md`](https://github.com/antfu/eslint-config#customization) for more. 