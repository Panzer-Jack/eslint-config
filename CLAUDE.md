# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Building and Development

- `pnpm build` - Build the distribution files (runs typegen and tsdown)
- `pnpm stub` - Build in stub mode for development
- `pnpm dev` - Start ESLint config inspector on the current config
- `pnpm watch` - Build in watch mode
- `pnpm gen` - Generate TypeScript types and version constants

### Testing and Quality

- `pnpm test` - Run Vitest tests
- `pnpm lint` - Run ESLint on the codebase
- `pnpm typecheck` - Run TypeScript type checking

### Release

- `pnpm prepack` - Runs before packaging (builds the project)
- `pnpm release` - Bump version and publish to npm

## Architecture Overview

This is a comprehensive ESLint configuration preset that supports multiple frameworks and file types. The architecture follows these key patterns:

### Factory Pattern Core

- `src/factory.ts` contains the main `antfu()` factory function that orchestrates all configurations
- Uses `FlatConfigComposer` from `eslint-flat-config-utils` for flexible config composition
- Auto-detects project dependencies to intelligently enable/disable features

### Modular Configuration System

- `src/configs/` contains 25+ specialized configuration modules
- Each module handles specific languages/frameworks (typescript.ts, vue.ts, react.ts, etc.)
- Configs are composable and can be enabled/disabled independently
- Smart defaults with auto-detection (e.g., Vue support enabled when `vue` package detected)

### Plugin Renaming Strategy

The factory automatically renames plugins for better DX:

- `@typescript-eslint/*` → `ts/*`
- `@stylistic/*` → `style/*`
- `import-lite/*` → `import/*`
- `n/*` → `node/*`
- `yml/*` → `yaml/*`

### Build System

- Uses `tsdown` for building ESM distributions from TypeScript
- `scripts/typegen.ts` generates comprehensive TypeScript definitions for all rules
- `scripts/versiongen.ts` generates version constants
- Entry points: `src/index.ts` (main) and `src/cli.ts` (CLI)

### CLI Tool Architecture

- `src/cli/` contains the command-line interface
- `src/cli/stages/` contains update stages (package.json, ESLint files, VS Code settings)
- CLI helps users migrate from legacy configs and set up new projects

### Testing Strategy

- `fixtures/` contains input/output comparison tests for different config combinations
- `test/fixtures.test.ts` validates that configs produce expected formatted output
- Uses Vitest with 60-second timeout for comprehensive testing

### Key Design Principles

- **Smart Detection**: Auto-enables configs based on installed dependencies
- **Editor Awareness**: Disables certain auto-fixes when running in editors to improve DX
- **Flat Config First**: Built exclusively for ESLint's flat config system
- **Composability**: Supports chaining, overrides, and custom configurations
- **Opinionated Defaults**: Minimal configuration required, but highly customizable

When modifying configs, always consider the interdependencies between modules and test with the fixtures to ensure consistent formatting output.
