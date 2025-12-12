import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lds-card';
import type { LdsCard } from './lds-card';

const meta: Meta<LdsCard> = {
  title: 'Components/Card',
  component: 'lds-card',
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md'],
      description: 'Shadow elevation level of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card should have interactive styles (hover, focus)',
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
          'A versatile card container component with customizable padding and elevation. Use cards to group related content and make information easier to scan.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LdsCard>;

/**
 * Default card with standard padding and elevation.
 */
export const Default: Story = {
  args: {
    elevation: 'sm',
    padding: 'md',
    interactive: false,
  },
  render: (args: Partial<LdsCard>) => html`
    <lds-card elevation=${args.elevation || 'sm'} padding=${args.padding || 'md'} ?interactive=${args.interactive}>
      <h3 style="margin: 0 0 0.5rem 0;">Card Title</h3>
      <p style="margin: 0; color: #666;">
        This is the default card with standard padding and elevation. 
        Cards are great for grouping related content.
      </p>
    </lds-card>
  `,
};

/**
 * Cards with different elevation levels.
 */
export const Elevations: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
      <lds-card elevation="none">
        <h4 style="margin: 0 0 0.5rem 0;">No Elevation</h4>
        <p style="margin: 0; color: #666;">Flat appearance</p>
      </lds-card>
      
      <lds-card elevation="sm">
        <h4 style="margin: 0 0 0.5rem 0;">Small Elevation</h4>
        <p style="margin: 0; color: #666;">Subtle shadow</p>
      </lds-card>
      
      <lds-card elevation="md">
        <h4 style="margin: 0 0 0.5rem 0;">Medium Elevation</h4>
        <p style="margin: 0; color: #666;">More prominent shadow</p>
      </lds-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different elevation levels create visual hierarchy and depth.',
      },
    },
  },
};

/**
 * Cards with different padding sizes.
 */
export const Paddings: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
      <lds-card padding="none">
        <div style="background: #f0f0f0; padding: 1rem;">
          <h4 style="margin: 0;">No Padding</h4>
          <p style="margin: 0.5rem 0 0 0; color: #666;">Custom content spacing</p>
        </div>
      </lds-card>
      
      <lds-card padding="sm">
        <h4 style="margin: 0;">Small Padding</h4>
        <p style="margin: 0.5rem 0 0 0; color: #666;">Compact spacing</p>
      </lds-card>
      
      <lds-card padding="md">
        <h4 style="margin: 0;">Medium Padding</h4>
        <p style="margin: 0.5rem 0 0 0; color: #666;">Default spacing</p>
      </lds-card>
      
      <lds-card padding="lg">
        <h4 style="margin: 0;">Large Padding</h4>
        <p style="margin: 0.5rem 0 0 0; color: #666;">Generous spacing</p>
      </lds-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Choose appropriate padding based on content density and visual design.',
      },
    },
  },
};

/**
 * Interactive card with hover and focus states.
 */
export const Interactive: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
      <lds-card interactive>
        <h3 style="margin: 0 0 0.5rem 0;">Clickable Card</h3>
        <p style="margin: 0; color: #666;">
          Hover over me! Interactive cards are focusable and show visual feedback.
        </p>
      </lds-card>
      
      <lds-card interactive>
        <h3 style="margin: 0 0 0.5rem 0;">Another Interactive Card</h3>
        <p style="margin: 0; color: #666;">
          Try tabbing to focus on me. I have proper keyboard navigation.
        </p>
      </lds-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive cards become focusable and show hover effects, perfect for clickable content.',
      },
    },
  },
};

/**
 * Card with header and footer slots.
 */
export const WithSlots: Story = {
  render: () => html`
    <lds-card elevation="md">
      <div slot="header" style="border-bottom: 1px solid #e0e0e0; padding-bottom: 1rem; margin-bottom: 1rem;">
        <h3 style="margin: 0;">Card Header</h3>
        <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.875rem;">Subtitle text</p>
      </div>
      
      <div>
        <p style="margin: 0 0 1rem 0;">
          This card uses header and footer slots to organize content into distinct sections.
        </p>
        <p style="margin: 0;">
          The default slot contains the main content of the card.
        </p>
      </div>
      
      <div slot="footer" style="border-top: 1px solid #e0e0e0; padding-top: 1rem; margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
        <button style="padding: 0.5rem 1rem; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer;">Confirm</button>
      </div>
    </lds-card>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use header and footer slots to create structured card layouts with clear sections.',
      },
    },
  },
};

/**
 * Product card example with image and content.
 */
export const ProductCard: Story = {
  render: () => html`
    <div style="max-width: 300px;">
      <lds-card padding="none" elevation="md">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 200px;"></div>
        <div style="padding: 1.5rem;">
          <h3 style="margin: 0 0 0.5rem 0;">Product Name</h3>
          <p style="margin: 0 0 1rem 0; color: #666;">
            Beautiful product description goes here. This card has no padding, allowing for full-bleed images.
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 1.5rem; font-weight: bold;">$99.99</span>
            <button style="padding: 0.5rem 1rem; border: none; background: #667eea; color: white; border-radius: 4px; cursor: pointer;">Add to Cart</button>
          </div>
        </div>
      </lds-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example of a product card with image and custom layout using padding="none".',
      },
    },
  },
};

/**
 * Dashboard card example with stats.
 */
export const DashboardCard: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
      <lds-card elevation="sm">
        <div style="color: #666; font-size: 0.875rem; margin-bottom: 0.25rem;">Total Users</div>
        <div style="font-size: 2rem; font-weight: bold; color: #333;">12,543</div>
        <div style="color: #10b981; font-size: 0.875rem; margin-top: 0.5rem;">↑ 12% from last month</div>
      </lds-card>
      
      <lds-card elevation="sm">
        <div style="color: #666; font-size: 0.875rem; margin-bottom: 0.25rem;">Revenue</div>
        <div style="font-size: 2rem; font-weight: bold; color: #333;">$43,210</div>
        <div style="color: #10b981; font-size: 0.875rem; margin-top: 0.5rem;">↑ 8% from last month</div>
      </lds-card>
      
      <lds-card elevation="sm">
        <div style="color: #666; font-size: 0.875rem; margin-bottom: 0.25rem;">Active Sessions</div>
        <div style="font-size: 2rem; font-weight: bold; color: #333;">1,423</div>
        <div style="color: #ef4444; font-size: 0.875rem; margin-top: 0.5rem;">↓ 3% from last hour</div>
      </lds-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Cards work great for dashboard metrics and statistics.',
      },
    },
  },
};

/**
 * Theme comparison showing cards in both light and dark modes side by side.
 */
export const ThemeComparison: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
      <!-- Light Theme -->
      <div>
        <h3 style="margin: 0 0 1rem 0; text-align: center;">Light Theme</h3>
        <div style="background: #f8fafc; padding: 2rem; border-radius: 8px;">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <lds-card elevation="sm">
              <h4 style="margin: 0 0 0.5rem 0;">Standard Card</h4>
              <p style="margin: 0; color: #64748b;">
                Card with small elevation in light theme.
              </p>
            </lds-card>
            
            <lds-card elevation="md" interactive>
              <h4 style="margin: 0 0 0.5rem 0;">Interactive Card</h4>
              <p style="margin: 0; color: #64748b;">
                Hover to see the interactive effect.
              </p>
            </lds-card>
            
            <lds-card elevation="sm">
              <div slot="header" style="border-bottom: 1px solid #e2e8f0; padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
                <h4 style="margin: 0;">With Header</h4>
              </div>
              <p style="margin: 0; color: #64748b;">Card with header slot.</p>
            </lds-card>
          </div>
        </div>
      </div>

      <!-- Dark Theme -->
      <div data-theme="dark">
        <h3 style="background: #0f172a; margin: 0 0 1rem 0; text-align: center; color: #f1f5f9;">Dark Theme</h3>
        <div style="background: #020617; padding: 2rem; border-radius: 8px;">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <lds-card elevation="sm">
              <h4 style="margin: 0 0 0.5rem 0; color: #f1f5f9;">Standard Card</h4>
              <p style="margin: 0; color: #94a3b8;">
                Card with small elevation in dark theme.
              </p>
            </lds-card>
            
            <lds-card elevation="md" interactive>
              <h4 style="margin: 0 0 0.5rem 0; color: #f1f5f9;">Interactive Card</h4>
              <p style="margin: 0; color: #94a3b8;">
                Hover to see the interactive effect.
              </p>
            </lds-card>
            
            <lds-card elevation="sm">
              <div slot="header" style="border-bottom: 1px solid #334155; padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
                <h4 style="margin: 0; color: #f1f5f9;">With Header</h4>
              </div>
              <p style="margin: 0; color: #94a3b8;">Card with header slot.</p>
            </lds-card>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of card styles in light and dark themes.',
      },
    },
  },
};

/**
 * Interactive playground to test all card configurations.
 */
export const Playground: Story = {
  args: {
    elevation: 'sm',
    padding: 'md',
    interactive: false,
  },
  render: (args: Partial<LdsCard>) => html`
    <lds-card
      elevation=${args.elevation || 'sm'}
      padding=${args.padding || 'md'}
      ?interactive=${args.interactive}
    >
      <h3 style="margin: 0 0 0.5rem 0;">Card Title</h3>
      <p style="margin: 0; color: #666;">
        Customize the card properties using the controls panel below.
      </p>
    </lds-card>
  `,
};
