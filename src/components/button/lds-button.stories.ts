import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lds-button';
import type { LdsButton } from './lds-button';

const meta: Meta<LdsButton> = {
  title: 'Components/Button',
  component: 'lds-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A customizable button component with multiple variants and sizes. Supports loading and disabled states with proper accessibility attributes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LdsButton>;

/**
 * Default button with primary variant and medium size.
 * This is the most common use case for buttons.
 */
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  render: (args) => html`
    <lds-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      Click me
    </lds-button>
  `,
};

/**
 * All available button variants displayed together.
 * Use different variants to indicate different levels of importance or actions.
 */
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lds-button variant="primary">Primary</lds-button>
      <lds-button variant="secondary">Secondary</lds-button>
      <lds-button variant="ghost">Ghost</lds-button>
      <lds-button variant="danger">Danger</lds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Primary for main actions, Secondary for less important actions, Ghost for tertiary actions, and Danger for destructive actions.',
      },
    },
  },
};

/**
 * All available button sizes.
 * Choose the appropriate size based on the context and hierarchy.
 */
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <lds-button size="sm">Small</lds-button>
      <lds-button size="md">Medium</lds-button>
      <lds-button size="lg">Large</lds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Small for compact spaces, Medium for default use, and Large for prominent actions.',
      },
    },
  },
};

/**
 * Button in disabled state.
 * Disabled buttons cannot be interacted with and have reduced opacity.
 */
export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lds-button variant="primary" disabled>Primary Disabled</lds-button>
      <lds-button variant="secondary" disabled>Secondary Disabled</lds-button>
      <lds-button variant="ghost" disabled>Ghost Disabled</lds-button>
      <lds-button variant="danger" disabled>Danger Disabled</lds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons have reduced opacity and cannot be clicked.',
      },
    },
  },
};

/**
 * Button in loading state.
 * Loading buttons are disabled and show a loading indicator.
 */
export const Loading: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lds-button variant="primary" loading>Loading...</lds-button>
      <lds-button variant="secondary" loading>Processing...</lds-button>
      <lds-button variant="ghost" loading>Please wait...</lds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Loading state automatically disables the button and sets aria-busy="true" for accessibility.',
      },
    },
  },
};

/**
 * Buttons with different content types.
 * Buttons can contain text, icons, or both.
 */
export const WithDifferentContent: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <lds-button variant="primary">Text Only</lds-button>
      <lds-button variant="primary">✓ With Icon</lds-button>
      <lds-button variant="primary">← Back</lds-button>
      <lds-button variant="primary">Next →</lds-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can contain any content through the default slot, including text and emojis/icons.',
      },
    },
  },
};

/**
 * Theme comparison showing buttons in both light and dark modes side by side.
 * This story is useful for checking color contrast and visual consistency across themes.
 */
export const ThemeComparison: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
      <!-- Light Theme -->
      <div>
        <h3 style="margin: 0 0 1rem 0; text-align: center;">Light Theme</h3>
        <div style="background: #ffffff; padding: 2rem; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <lds-button variant="primary">Primary Button</lds-button>
            <lds-button variant="secondary">Secondary Button</lds-button>
            <lds-button variant="ghost">Ghost Button</lds-button>
            <lds-button variant="danger">Danger Button</lds-button>
            <lds-button variant="primary" disabled>Disabled</lds-button>
            <lds-button variant="primary" loading>Loading...</lds-button>
          </div>
        </div>
      </div>

      <!-- Dark Theme -->
      <div data-theme="dark">
        <h3 style="background: #0f172a; margin: 0 0 1rem 0; text-align: center; color: #f1f5f9;">Dark Theme</h3>
        <div style="background: #0f172a; padding: 2rem; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <lds-button variant="primary">Primary Button</lds-button>
            <lds-button variant="secondary">Secondary Button</lds-button>
            <lds-button variant="ghost">Ghost Button</lds-button>
            <lds-button variant="danger">Danger Button</lds-button>
            <lds-button variant="primary" disabled>Disabled</lds-button>
            <lds-button variant="primary" loading>Loading...</lds-button>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Visual comparison of all button variants in light and dark themes. Use the global theme switcher in the toolbar to see how the entire component system adapts.',
      },
    },
  },
};

/**
 * Interactive playground to test all button combinations.
 * Use the controls panel to experiment with different props.
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  render: (args) => html`
    <lds-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      Button Text
    </lds-button>
  `,
};
