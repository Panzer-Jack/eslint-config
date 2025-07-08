import { antfu } from './src'

export default antfu(
  {
    vue: {
      a11y: true,
    },
    react: true,
    solid: true,
    svelte: true,
    astro: true,
    typescript: true,
    formatters: true,
    pnpm: true,
    type: 'lib',
    // 添加自定义风格规则
    stylistic: {
      indent: 2, // 设置缩进为2个空格
      quotes: 'single', // 设置使用单引号
      semi: false, // 设置使用分号
    },
    ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**', 'docs/**', 'src/services/figma/**'],
    rules: {
      'ts/no-explicit-any': 'off',
      'no-console': 'off',
      'brace-style': ['error', '1tbs'],
      'style/brace-style': ['error', '1tbs'],
      'unused-imports/no-unused-vars': 'off', // 关闭未使用变量的检查
      'pnpm/yaml-no-unused-catalog-item': 'off',
      'eqeqeq': 'off',
      'jsdoc/check-param-names': 'off',
      'no-async-promise-executor': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'prefer-promise-reject-errors': 'off',
      'antfu/top-level-function': 'off', // 关闭顶层函数的检查
      'no-restricted-syntax': 'off',
      // Vue 模板属性换行配置
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below',
      }],
    },
  },
  {
    ignores: [
      'fixtures',
      '_fixtures',
      '**/constants-generated.ts',
    ],
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
