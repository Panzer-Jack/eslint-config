import { execSync } from 'node:child_process'

export function isGitClean(): boolean {
  try {
    execSync('git diff-index --quiet HEAD --')
    return true
  } catch {
    return false
  }
}

export function getEslintConfigContent(
  mainConfig: string,
  additionalConfigs?: string[],
): string {
  return `
import antfu from '@antfu/eslint-config'

export default antfu({
${mainConfig}
}${additionalConfigs?.map(config => `,{\n${config}\n}`)})
`.trimStart()
}
