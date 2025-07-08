import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from './types'

export const defaultOption: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {
  formatters: true,
  pnpm: true,
  stylistic: {
    indent: 2, // 设置缩进为2个空格
    quotes: 'single', // 设置使用单引号
    semi: false, // 设置使用分号
  },
  typescript: true,
}

export const defaultRules: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
= [{
  rules: {
    '@typescript-eslint/no-empty-object-type': 'off',
    'antfu/top-level-function': 'off', // 关闭顶层函数的检查
    'brace-style': ['error', '1tbs'],
    'eqeqeq': 'off',
    'jsdoc/check-param-names': 'off',
    'no-async-promise-executor': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'pnpm/yaml-no-unused-catalog-item': 'off',
    'prefer-promise-reject-errors': 'off',
    'style/brace-style': ['error', '1tbs'],
    'ts/no-explicit-any': 'off',
    'unused-imports/no-unused-vars': 'off', // 关闭未使用变量的检查
    'vue/first-attribute-linebreak': ['error', {
      multiline: 'below',
      singleline: 'ignore',
    }],
    // Vue 模板属性换行配置
    'vue/max-attributes-per-line': ['error', {
      multiline: 1,
      singleline: 1,
    }],
  },
}]
