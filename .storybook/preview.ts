import type { Preview, Decorator } from '@storybook/web-components-vite';
import '../src/styles/tokens.css';

// Decorator to handle theme switching
const withTheme: Decorator = (story, context) => {
  const theme = context.globals.theme || 'light';
  
  // Apply theme to document
  document.documentElement.setAttribute('data-theme', theme);
  
  // Apply background styles based on theme
  const backgroundColor = theme === 'dark' ? '#0f172a' : '#ffffff';
  const color = theme === 'dark' ? '#f1f5f9' : '#0f172a';
  
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = color;
  
  return story();
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      toc: true,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
      test: 'todo',
    },
  },
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
