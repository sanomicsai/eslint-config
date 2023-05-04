module.exports = {
    extends: [
        '@antfu/eslint-config-vue',
    ],
    plugins: ['brackets'],
    rules: {
        'curly': 'off',
        'no-console': 'warn',
        'no-unused-vars': 'off',
        'no-trailing-spaces': 'warn',
        'no-multi-spaces': 'warn',
        'space-before-function-paren': 'off',
        'antfu/if-newline': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/no-unknown-property': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'unused-imports/no-unused-imports': 'off',
        '@typescript-eslint/brace-style': ['off'],
        '@typescript-eslint/comma-dangle': 'warn',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        'import/order': [
            'warn',
            {
                'groups': ['builtin', 'external', ['internal', 'index', 'parent', 'sibling'], ['unknown', 'object'], 'type'],
                'pathGroups': [{ pattern: '~/**', group: 'internal' }],
                'pathGroupsExcludedImportTypes': ['type'], // type 和其他 group 冲突的, 永远当 type 处理
                'newlines-between': 'always',
            },
        ],
        'import/newline-after-import': 'off', // 与 import/order 可能存在冲突
        'vue/html-self-closing': ['warn', { html: { normal: 'never', void: 'always' } }],
        'brackets/array-bracket-newline': ['warn', 2],
        'brackets/object-curly-newline': 2,
        'array-bracket-spacing': 'warn',
        'array-bracket-newline': ['warn', 'consistent'],
        'array-element-newline': ['warn', 'consistent'],
    },
}
