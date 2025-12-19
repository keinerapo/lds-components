# LDS Components

[![npm version](https://img.shields.io/npm/v/@ldsui/components.svg)](https://www.npmjs.com/package/@ldsui/components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Modern Web Components library built with [Lit](https://lit.dev/) - A lightweight, accessible design system.

## 📋 About

**LDS Components** (Lightweight Design System) is a collection of reusable, framework-agnostic Web Components designed for building modern web applications. The library prioritizes:

- **Performance**: Minimal bundle size with tree-shaking and lazy loading
- **Accessibility**: WCAG 2.1 compliant with full keyboard navigation
- **Developer Experience**: TypeScript-first with comprehensive documentation
- **Flexibility**: Works with React, Vue, Angular, or vanilla JavaScript

This project was created as a portfolio demonstration of advanced Web Components knowledge, showcasing modern patterns like Shadow DOM encapsulation, CSS custom properties for theming, and reactive property systems.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Core** | [Lit 3.x](https://lit.dev/) - Fast, lightweight Web Components |
| **Language** | TypeScript 5.x with strict mode |
| **Build** | Vite 7.x with ES modules output |
| **Testing** | Vitest + Playwright (browser testing) |
| **Documentation** | Storybook 10.x |
| **Package Manager** | pnpm |
| **Linting** | ESLint 9.x + Prettier |

## 🤔 Why Lit? (vs Stencil vs CELLS)

While I have extensive experience with **Stencil**, I chose **Lit** for this project for specific reasons:

| Aspect | Lit | Stencil | CELLS (BBVA) |
|--------|-----|---------|--------------|
| **Philosophy** | Minimal abstraction over platform APIs | Compiler-based, framework-like | Enterprise framework on Stencil |
| **Bundle Size** | ~5KB (core) | ~13KB (runtime) | Larger (enterprise features) |
| **Learning Curve** | Low - close to vanilla WC | Medium - JSX, decorators | High - proprietary patterns |
| **Toolchain** | Flexible (Vite, Rollup, etc.) | Custom CLI required | Custom CLI + internal tools |
| **Community** | Google-backed, growing fast | Ionic team, stable | Internal/enterprise only |
| **Standards** | Closest to native APIs | Some abstractions | Heavy abstractions |

### Key Reasons for Choosing Lit:

1. **Industry Adoption**: Lit has become the de-facto standard for Web Components in 2024-2025, used by Google, Adobe, ING, and many others.

2. **Transferable Skills**: Knowledge of Lit translates directly to understanding native Web Components APIs, unlike framework-specific patterns.

3. **Modern DX**: First-class TypeScript support, reactive properties, and excellent Vite integration without a custom CLI.

4. **Portfolio Value**: Demonstrating proficiency in both Stencil (professional experience) and Lit (modern standard) shows adaptability and comprehensive Web Components expertise.

> 💡 **Note**: My Stencil experience provided a strong foundation in Web Components concepts (Shadow DOM, slots, events, lifecycle), making the transition to Lit straightforward while gaining exposure to a different approach in the ecosystem.

## ✨ Features

- 🎨 **5 Core Components**: Button, Badge, Input, Card, Modal
- 🌗 **Dark/Light Theme Support**: Built-in theming with CSS custom properties
- ♿ **Accessible**: ARIA attributes and keyboard navigation
- 🌳 **Tree-Shakable**: Import only what you need
- 📦 **Lazy Loading**: Components load on demand
- 🔧 **Framework Agnostic**: Works with any framework or vanilla JS
- 💪 **TypeScript**: Full type definitions included

## 📦 Installation

```bash
npm install @ldsui/components
# or
pnpm add @ldsui/components
# or
yarn add @ldsui/components
```

## 🚀 Quick Start (Basic Usage)

### 1. Import and register components

```javascript
// Option A: Register all components at once
import '@ldsui/components/define';

// Option B: Register only what you need (recommended for production)
import { defineLdsButton, defineLdsBadge } from '@ldsui/components';
defineLdsButton();
defineLdsBadge();
```

### 2. Import design tokens (optional but recommended)

```javascript
import '@ldsui/components/tokens.css';
```

### 3. Use in HTML

```html
<!DOCTYPE html>
<html data-theme="light">
<head>
  <script type="module" src="your-app.js"></script>
</head>
<body>
  <lds-button variant="primary" size="md">Click me</lds-button>
  <lds-badge variant="success">Online</lds-badge>
  
  <lds-card elevation="md" padding="lg">
    <h2>Welcome</h2>
    <lds-input label="Email" type="email" placeholder="you@example.com"></lds-input>
  </lds-card>
</body>
</html>
```

### Framework Integration

**React:**
```jsx
import '@ldsui/components/define';

function App() {
  return <lds-button variant="primary">React Button</lds-button>;
}
```

**Vue:**
```vue
<script setup>
import '@ldsui/components/define';
</script>

<template>
  <lds-button variant="primary">Vue Button</lds-button>
</template>
```

**Angular:**
```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@ldsui/components/define';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## 📚 Import Options

### Option 1: Import all components

```javascript
// Register all components at once
import '@ldsui/components/define';

// Import CSS tokens (optional, for theming)
import '@ldsui/components/tokens.css';
```

```html
<lds-button variant="primary">Click me</lds-button>
<lds-badge variant="success">New</lds-badge>
```

### Option 2: Import individual components (Tree-Shaking)

```javascript
// Only import what you need
import { defineLdsButton } from '@ldsui/components/button';
import { defineLdsBadge } from '@ldsui/components/badge';

// Register the components
defineLdsButton();
defineLdsBadge();
```

### Option 3: Import classes for extension

```javascript
import { LdsButton } from '@ldsui/components';

class MyCustomButton extends LdsButton {
  // Extend the component
}
```

## 🧩 Components

### Button

A customizable button with variants, sizes, and states.

```html
<lds-button variant="primary" size="md">Primary</lds-button>
<lds-button variant="secondary">Secondary</lds-button>
<lds-button variant="ghost">Ghost</lds-button>
<lds-button variant="danger">Danger</lds-button>
<lds-button disabled>Disabled</lds-button>
<lds-button loading>Loading...</lds-button>
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |

### Badge

Status indicators and labels.

```html
<lds-badge variant="primary">New</lds-badge>
<lds-badge variant="success">Active</lds-badge>
<lds-badge variant="warning">Pending</lds-badge>
<lds-badge variant="error">Error</lds-badge>
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Visual style variant |

### Input

Form input with label, helper text, and error states.

```html
<lds-input 
  label="Email" 
  type="email" 
  placeholder="Enter your email"
  helper-text="We'll never share your email"
></lds-input>

<lds-input 
  label="Password" 
  type="password" 
  error="Password is required"
></lds-input>
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `value` | `string` | `''` | Current value |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |
| `error` | `string` | `undefined` | Error message |
| `helperText` | `string` | `''` | Helper text |

**Events:**
- `lds-input-input` - Fired on input
- `lds-input-change` - Fired on change

### Card

Container with elevation and padding options.

```html
<lds-card elevation="md" padding="lg">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</lds-card>

<lds-card interactive>
  <p>Clickable card</p>
</lds-card>
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `elevation` | `'none' \| 'sm' \| 'md'` | `'sm'` | Shadow elevation |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `interactive` | `boolean` | `false` | Enable hover/focus styles |

**Slots:**
- Default slot - Card body content
- `header` - Card header content
- `footer` - Card footer content

### Modal

Dialog with focus management and accessibility.

```html
<lds-modal open title="Confirm Action">
  <p>Are you sure you want to proceed?</p>
  <div slot="footer">
    <lds-button variant="ghost">Cancel</lds-button>
    <lds-button variant="primary">Confirm</lds-button>
  </div>
</lds-modal>
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Show/hide the modal |
| `title` | `string` | `''` | Modal title |
| `closeOnEsc` | `boolean` | `true` | Close on Escape key |
| `closeOnBackdropClick` | `boolean` | `true` | Close on backdrop click |

**Events:**
- `lds-modal-close` - Fired when modal closes (detail: `{ reason: 'backdrop' | 'esc' | 'programmatic' }`)

**Slots:**
- Default slot - Modal body content
- `footer` - Modal footer (typically buttons)

## 🎨 Design Tokens & Theming

LDS Components uses a comprehensive **design token system** built with CSS custom properties, enabling consistent styling and easy theme customization.

### Available Tokens

```css
/* Colors */
--lds-color-primary: #3b82f6;
--lds-color-primary-contrast: #ffffff;
--lds-color-secondary: #64748b;
--lds-color-success: #22c55e;
--lds-color-warning: #f59e0b;
--lds-color-error: #ef4444;

/* Spacing */
--lds-spacing-1: 0.25rem;
--lds-spacing-2: 0.5rem;
--lds-spacing-3: 0.75rem;
--lds-spacing-4: 1rem;
--lds-spacing-6: 1.5rem;

/* Typography */
--lds-font-size-sm: 0.875rem;
--lds-font-size-md: 1rem;
--lds-font-size-lg: 1.125rem;

/* Border Radius */
--lds-radius-md: 0.375rem;
--lds-radius-lg: 0.5rem;

/* Shadows */
--lds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--lds-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
```

### Using Tokens

Import the tokens CSS file:

```css
@import '@ldsui/components/tokens.css';

/* Override tokens for your brand */
:root {
  --lds-color-primary: #8b5cf6; /* Purple brand color */
}
```

### Light/Dark Theme Support

LDS Components supports automatic theme switching using the `data-theme` attribute:

```html
<!-- Light theme (default) -->
<html data-theme="light">

<!-- Dark theme -->
<html data-theme="dark">
```

**JavaScript toggle:**

```javascript
// Toggle theme
const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
};

// Respect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
```

**CSS media query approach:**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --lds-color-primary: #60a5fa;
    --lds-color-primary-contrast: #0f172a;
    /* ... other dark mode overrides */
  }
}
```

The token system ensures:
- ✅ **Consistency** across all components
- ✅ **Easy customization** without touching component internals
- ✅ **Theme switching** with a single attribute change
- ✅ **CSS-in-JS compatibility** (tokens work with any styling solution)

## 📖 Storybook

View all components and their variations in Storybook:

```bash
pnpm storybook
```

## 🏗️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Run Storybook
pnpm storybook
```

## 📄 License

[MIT](./LICENSE) © Keiner Pajaro

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
