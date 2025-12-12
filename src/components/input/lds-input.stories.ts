import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lds-input';
import type { LdsInput } from './lds-input';

const meta: Meta<LdsInput> = {
  title: 'Components/Input',
  component: 'lds-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Type of the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An accessible input component with label, error handling, and helper text support. Automatically generates unique IDs for proper ARIA associations.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LdsInput>;

/**
 * Default input with label.
 */
export const Default: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter your email',
  },
  render: (args: Partial<LdsInput>) => html`
    <lds-input
      label=${args.label || ''}
      type=${args.type || 'text'}
      placeholder=${args.placeholder || ''}
    ></lds-input>
  `,
};

/**
 * Input with helper text to provide additional context.
 */
export const WithHelperText: Story = {
  render: () => html`
    <lds-input
      label="Username"
      type="text"
      placeholder="Choose a username"
      helperText="Must be between 3-20 characters"
    ></lds-input>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Helper text provides additional context or instructions for filling out the input.',
      },
    },
  },
};

/**
 * Input showing an error state with error message.
 */
export const WithError: Story = {
  render: () => html`
    <lds-input
      label="Email"
      type="email"
      value="invalid-email"
      error="Please enter a valid email address"
    ></lds-input>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Error messages are announced to screen readers via aria-describedby and the input is marked with aria-invalid.',
      },
    },
  },
};

/**
 * Disabled input that cannot be interacted with.
 */
export const Disabled: Story = {
  render: () => html`
    <lds-input
      label="Disabled Input"
      type="text"
      value="Cannot edit this"
      disabled
    ></lds-input>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Disabled inputs have reduced opacity and cannot be focused or edited.',
      },
    },
  },
};

/**
 * Different input types for various data formats.
 */
export const DifferentTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <lds-input label="Text" type="text" placeholder="Enter text"></lds-input>
      <lds-input label="Email" type="email" placeholder="email@example.com"></lds-input>
      <lds-input label="Password" type="password" placeholder="Enter password"></lds-input>
      <lds-input label="Number" type="number" placeholder="123"></lds-input>
      <lds-input label="Telephone" type="tel" placeholder="+1 (555) 123-4567"></lds-input>
      <lds-input label="URL" type="url" placeholder="https://example.com"></lds-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Different input types provide appropriate keyboard layouts and validation on mobile devices.',
      },
    },
  },
};

/**
 * Form example showing multiple inputs working together.
 */
export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <lds-input
        label="Full Name"
        type="text"
        placeholder="John Doe"
      ></lds-input>
      
      <lds-input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        helperText="We'll never share your email"
      ></lds-input>
      
      <lds-input
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 123-4567"
        helperText="Optional"
      ></lds-input>
      
      <lds-input
        label="Website"
        type="url"
        placeholder="https://yourwebsite.com"
      ></lds-input>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form using multiple input fields with different types.',
      },
    },
  },
};

/**
 * Theme comparison showing inputs in both light and dark modes side by side.
 */
export const ThemeComparison: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
      <!-- Light Theme -->
      <div>
        <h3 style="margin: 0 0 1rem 0; text-align: center;">Light Theme</h3>
        <div style="background: #ffffff; padding: 2rem; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <lds-input label="Username" placeholder="Enter username"></lds-input>
            <lds-input
              label="Email"
              type="email"
              value="user@example.com"
              helperText="We'll never share your email"
            ></lds-input>
            <lds-input
              label="Password"
              type="password"
              error="Password must be at least 8 characters"
            ></lds-input>
            <lds-input label="Disabled" placeholder="Disabled input" disabled></lds-input>
          </div>
        </div>
      </div>

      <!-- Dark Theme -->
      <div data-theme="dark">
        <h3 style="background: #0f172a; margin: 0 0 1rem 0; text-align: center; color: #f1f5f9;">Dark Theme</h3>
        <div style="background: #0f172a; padding: 2rem; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <lds-input label="Username" placeholder="Enter username"></lds-input>
            <lds-input
              label="Email"
              type="email"
              value="user@example.com"
              helperText="We'll never share your email"
            ></lds-input>
            <lds-input
              label="Password"
              type="password"
              error="Password must be at least 8 characters"
            ></lds-input>
            <lds-input label="Disabled" placeholder="Disabled input" disabled></lds-input>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of input states in light and dark themes.',
      },
    },
  },
};

/**
 * Interactive playground to test all input configurations.
 */
export const Playground: Story = {
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder text',
    value: '',
    disabled: false,
    error: '',
    helperText: '',
  },
  render: (args: Partial<LdsInput>) => html`
    <lds-input
      label=${args.label || ''}
      type=${args.type || 'text'}
      placeholder=${args.placeholder || ''}
      value=${args.value || ''}
      ?disabled=${args.disabled}
      error=${args.error || ''}
      helperText=${args.helperText || ''}
    ></lds-input>
  `,
};
