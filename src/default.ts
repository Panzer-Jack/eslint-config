import type { OptionsConfig, TypedFlatConfigItem } from './types'

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
