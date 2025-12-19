# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-19

### Added

- **Components**
  - `lds-button` - Customizable button with variants (primary, secondary, ghost, danger), sizes (sm, md, lg), and states (disabled, loading)
  - `lds-badge` - Status indicators with variants (primary, secondary, success, warning, error)
  - `lds-input` - Form input with label, helper text, error states, and multiple types
  - `lds-card` - Container with elevation levels, padding options, and interactive mode
  - `lds-modal` - Dialog with focus management, keyboard navigation, and accessibility

- **Architecture**
  - Lazy loading system with `createDefiner` factory for tree-shakable imports
  - Individual component exports (`lds-components/button`, `lds-components/badge`, etc.)
  - Central define import (`lds-components/define`) to register all components at once
  - Dual exports (default + named) for maximum flexibility

- **Theming**
  - CSS custom properties (design tokens) for easy customization
  - Dark/Light theme support via `data-theme` attribute
  - Exported `tokens.css` for standalone styling

- **Developer Experience**
  - Full TypeScript support with `.d.ts` declarations
  - Storybook documentation with 40+ stories
  - Comprehensive test suite with Vitest
  - ESLint and Prettier configuration

- **Accessibility**
  - ARIA attributes on all components
  - Keyboard navigation support
  - Focus management in Modal component
  - Screen reader friendly
