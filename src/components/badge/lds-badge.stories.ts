import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lds-badge';
import type { LdsBadge } from './lds-badge';

const meta: Meta<LdsBadge> = {
  title: 'Components/Badge',
  component: 'lds-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Visual style variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A badge component for displaying status, labels, or counts. Use badges to highlight important information or indicate state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LdsBadge>;

/**
 * Default badge with primary variant.
 */
export const Default: Story = {
  args: {
    variant: 'primary',
  },
  render: (args: { variant: string }) => html`
    <lds-badge variant=${args.variant}>New</lds-badge>
  `,
};

/**
 * All available badge variants.
 * Each variant represents a different semantic meaning.
 */
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lds-badge variant="primary">Primary</lds-badge>
      <lds-badge variant="secondary">Secondary</lds-badge>
      <lds-badge variant="success">Success</lds-badge>
      <lds-badge variant="warning">Warning</lds-badge>
      <lds-badge variant="error">Error</lds-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Primary for general information, Success for positive states, Warning for cautionary states, and Error for negative states.',
      },
    },
  },
};

/**
 * Badges showing different status states.
 * Common use case for status indicators.
 */
export const StatusIndicators: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lds-badge variant="success">Active</lds-badge>
      <lds-badge variant="warning">Pending</lds-badge>
      <lds-badge variant="error">Inactive</lds-badge>
      <lds-badge variant="secondary">Draft</lds-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use badges to clearly communicate status information at a glance.',
      },
    },
  },
};

/**
 * Badges displaying numerical counts.
 * Useful for notifications, counters, and quantities.
 */
export const WithNumbers: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lds-badge variant="primary">3</lds-badge>
      <lds-badge variant="error">99+</lds-badge>
      <lds-badge variant="success">42</lds-badge>
      <lds-badge variant="warning">!  </lds-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Badges work great for notification counts and numerical indicators.',
      },
    },
  },
};

/**
 * Badges in context with other elements.
 * Examples of common badge usage patterns.
 */
export const InContext: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-weight: 500;">Notifications</span>
        <lds-badge variant="error">5</lds-badge>
      </div>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-weight: 500;">Status:</span>
        <lds-badge variant="success">Online</lds-badge>
      </div>
      
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-weight: 500;">Version</span>
        <lds-badge variant="secondary">v1.0.0</lds-badge>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Badges are often used alongside text labels to provide additional context.',
      },
    },
  },
};

/**
 * Theme comparison showing badges in both light and dark modes side by side.
 */
export const ThemeComparison: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
      <!-- Light Theme -->
      <div>
        <h3 style="margin: 0 0 1rem 0; text-align: center;">Light Theme</h3>
        <div style="background: #ffffff; padding: 2rem; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <lds-badge variant="primary">Primary</lds-badge>
            <lds-badge variant="secondary">Secondary</lds-badge>
            <lds-badge variant="success">Success</lds-badge>
            <lds-badge variant="warning">Warning</lds-badge>
            <lds-badge variant="error">Error</lds-badge>
          </div>
          <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <lds-badge variant="success">✓ Active</lds-badge>
            <lds-badge variant="warning">⚠ Pending</lds-badge>
            <lds-badge variant="error">✕ Offline</lds-badge>
            <lds-badge variant="primary">99+</lds-badge>
          </div>
        </div>
      </div>

      <!-- Dark Theme -->
      <div data-theme="dark">
        <h3 style="background: #0f172a; margin: 0 0 1rem 0; text-align: center; color: #f1f5f9;">Dark Theme</h3>
        <div style="background: #0f172a; padding: 2rem; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <lds-badge variant="primary">Primary</lds-badge>
            <lds-badge variant="secondary">Secondary</lds-badge>
            <lds-badge variant="success">Success</lds-badge>
            <lds-badge variant="warning">Warning</lds-badge>
            <lds-badge variant="error">Error</lds-badge>
          </div>
          <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <lds-badge variant="success">✓ Active</lds-badge>
            <lds-badge variant="warning">⚠ Pending</lds-badge>
            <lds-badge variant="error">✕ Offline</lds-badge>
            <lds-badge variant="primary">99+</lds-badge>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of all badge variants in light and dark themes.',
      },
    },
  },
};

/**
 * Interactive playground to test badge configurations.
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
  },
  render: (args: { variant: string }) => html`
    <lds-badge variant=${args.variant}>Badge Text</lds-badge>
  `,
};
