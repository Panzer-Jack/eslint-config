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
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      jsx: true,
    },
  },
  {
    ignores: [
      'fixtures',
      '_fixtures',
      '**/constants-generated.ts',
      'node_modules',
      '**/node_modules/**',
      'dist',
      '**/dist/**',
    ],
    rules: {
      'ts/no-explicit-any': 'off',
      'no-console': 'off',
      'brace-style': ['error', '1tbs'],
      'style/brace-style': ['error', '1tbs'],
    },
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
