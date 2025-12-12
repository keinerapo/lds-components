import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './lds-modal';
import type { LdsModal } from './lds-modal';

const meta: Meta<LdsModal> = {
  title: 'Components/Modal',
  component: 'lds-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog component for displaying content that requires user interaction. Handles focus management, keyboard navigation, and accessibility features.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LdsModal>;

/**
 * Basic modal with title and content.
 */
export const Default: Story = {
  args: {
    open: false,
    closeOnBackdropClick: true,
    closeOnEsc: true,
  },
  render: (args: Partial<LdsModal>) => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>
      <lds-modal
        ?open=${args.open}
        ?closeOnBackdropClick=${args.closeOnBackdropClick}
        ?closeOnEsc=${args.closeOnEsc}
      >
        <h2 slot="header" style="margin: 0;">Modal Title</h2>
        <div>
          <p style="margin: 0 0 1rem 0;">
            This is the default modal with a title in the header slot and content in the default slot.
          </p>
          <p style="margin: 0;">
            Try clicking the backdrop or pressing Escape to close the modal.
          </p>
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Cancel
          </button>
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer;"
          >
            Confirm
          </button>
        </div>
      </lds-modal>
    `;
  },
};

/**
 * Modal without footer slot.
 */
export const WithoutFooter: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>
      <lds-modal>
        <h2 slot="header" style="margin: 0;">Information</h2>
        <div>
          <p style="margin: 0 0 1rem 0;">
            This modal doesn't have a footer. It's perfect for simple informational dialogs.
          </p>
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%;"
          >
            Got it
          </button>
        </div>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple modal without a footer slot, useful for informational dialogs.',
      },
    },
  },
};

/**
 * Modal with close button disabled on backdrop click.
 */
export const NoBackdropClose: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>
      <lds-modal closeOnBackdropClick=${false}>
        <h2 slot="header" style="margin: 0;">Important Action</h2>
        <div>
          <p style="margin: 0 0 1rem 0;">
            This modal requires an explicit action. Clicking the backdrop won't close it.
          </p>
          <p style="margin: 0;">
            You must use the buttons below or press Escape.
          </p>
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Cancel
          </button>
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer;"
          >
            Confirm
          </button>
        </div>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed by clicking the backdrop, useful for critical actions.',
      },
    },
  },
};

/**
 * Modal with escape key disabled.
 */
export const NoEscapeClose: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>
      <lds-modal closeOnEsc=${false}>
        <h2 slot="header" style="margin: 0;">Critical Confirmation</h2>
        <div>
          <p style="margin: 0 0 1rem 0;">
            This modal cannot be closed with the Escape key. Users must explicitly choose an action.
          </p>
          <p style="margin: 0;">
            This is useful for critical decisions that require deliberate user action.
          </p>
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Cancel
          </button>
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: none; background: #dc3545; color: white; border-radius: 4px; cursor: pointer;"
          >
            Delete
          </button>
        </div>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed with Escape key, requiring explicit user action.',
      },
    },
  },
};

/**
 * Form inside a modal.
 */
export const FormModal: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
      alert('Form submitted!');
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Form Modal
      </button>
      <lds-modal>
        <h2 slot="header" style="margin: 0;">Create New User</h2>
        <form @submit=${handleSubmit}>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              required
              style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
            />
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              required
              style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
            />
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Role</label>
            <select
              required
              style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button
              type="button"
              @click=${handleClose}
              style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
            >
              Cancel
            </button>
            <button
              type="submit"
              style="padding: 0.5rem 1rem; border: none; background: #28a745; color: white; border-radius: 4px; cursor: pointer;"
            >
              Create User
            </button>
          </div>
        </form>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a form inside a modal with proper validation and submission handling.',
      },
    },
  },
};

/**
 * Confirmation dialog example.
 */
export const ConfirmationDialog: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleConfirm = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
      alert('Action confirmed!');
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Delete Item
      </button>
      <lds-modal closeOnBackdropClick=${false}>
        <h2 slot="header" style="margin: 0; color: #dc3545;">⚠️ Confirm Deletion</h2>
        <div>
          <p style="margin: 0 0 1rem 0;">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <p style="margin: 0; color: #666; font-size: 0.875rem;">
            The item will be permanently removed from the database.
          </p>
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Cancel
          </button>
          <button
            @click=${handleConfirm}
            style="padding: 0.5rem 1rem; border: none; background: #dc3545; color: white; border-radius: 4px; cursor: pointer;"
          >
            Delete
          </button>
        </div>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'A confirmation dialog for destructive actions with backdrop close disabled.',
      },
    },
  },
};

/**
 * Large content modal with scrolling.
 */
export const LargeContent: Story = {
  render: () => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Large Modal
      </button>
      <lds-modal>
        <h2 slot="header" style="margin: 0;">Terms and Conditions</h2>
        <div>
          ${Array.from({ length: 20 }).map(
            (_, i) => html`
              <h3>Section ${i + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            `,
          )}
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Decline
          </button>
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer;"
          >
            Accept
          </button>
        </div>
      </lds-modal>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with large content that scrolls independently of the page.',
      },
    },
  },
};

/**
 * Theme comparison showing modals in both light and dark modes.
 * Note: Both modals are shown open simultaneously for comparison purposes.
 */
export const ThemeComparison: Story = {
  render: () => {
    // Simulating open modals for theme comparison
    return html`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
        <!-- Light Theme Modal Preview -->
        <div>
          <h3 style="margin: 0 0 1rem 0; text-align: center;">Light Theme</h3>
          <div style="background: rgba(0,0,0,0.5); padding: 3rem 1rem; border-radius: 8px; position: relative; min-height: 400px; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; border-radius: 8px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); max-width: 400px; width: 100%;">
              <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                <h2 style="margin: 0; font-size: 1.25rem; color: #111827;">Light Theme Modal</h2>
              </div>
              <div style="padding: 1.5rem; color: #6b7280;">
                <p style="margin: 0 0 1rem 0;">
                  This is how the modal appears in light theme with proper contrast and colors.
                </p>
                <p style="margin: 0;">
                  Notice the background, borders, and text colors.
                </p>
              </div>
              <div style="padding: 1.5rem; border-top: 1px solid #e5e7eb; display: flex; gap: 0.5rem; justify-content: flex-end;">
                <button style="padding: 0.5rem 1rem; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer; color: #374151;">
                  Cancel
                </button>
                <button style="padding: 0.5rem 1rem; border: none; background: #3b82f6; color: white; border-radius: 4px; cursor: pointer;">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Theme Modal Preview -->
        <div data-theme="dark">
          <h3 style="margin: 0 0 1rem 0; text-align: center; color: #f1f5f9;">Dark Theme</h3>
          <div style="background: rgba(0,0,0,0.8); padding: 3rem 1rem; border-radius: 8px; position: relative; min-height: 400px; display: flex; align-items: center; justify-content: center;">
            <div style="background: #1e293b; border-radius: 8px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); max-width: 400px; width: 100%;">
              <div style="padding: 1.5rem; border-bottom: 1px solid #334155;">
                <h2 style="margin: 0; font-size: 1.25rem; color: #f1f5f9;">Dark Theme Modal</h2>
              </div>
              <div style="padding: 1.5rem; color: #94a3b8;">
                <p style="margin: 0 0 1rem 0;">
                  This is how the modal appears in dark theme with proper contrast and colors.
                </p>
                <p style="margin: 0;">
                  Notice the background, borders, and text colors.
                </p>
              </div>
              <div style="padding: 1.5rem; border-top: 1px solid #334155; display: flex; gap: 0.5rem; justify-content: flex-end;">
                <button style="padding: 0.5rem 1rem; border: 1px solid #475569; background: #334155; border-radius: 4px; cursor: pointer; color: #e2e8f0;">
                  Cancel
                </button>
                <button style="padding: 0.5rem 1rem; border: none; background: #0ea5e9; color: white; border-radius: 4px; cursor: pointer;">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Static comparison of modal appearance in light and dark themes. This story shows the visual representation without interactive functionality to better compare the styling.',
      },
    },
  },
};

/**
 * Interactive playground to test all modal configurations.
 */
export const Playground: Story = {
  args: {
    open: false,
    closeOnBackdropClick: true,
    closeOnEsc: true,
  },
  render: (args: Partial<LdsModal>) => {
    const handleOpen = (e: Event) => {
      const modal = (e.target as HTMLElement).nextElementSibling as LdsModal;
      modal.open = true;
    };

    const handleClose = (e: Event) => {
      const modal = (e.target as HTMLElement).closest('lds-modal') as LdsModal;
      modal.open = false;
    };

    return html`
      <button
        @click=${handleOpen}
        style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Open Modal
      </button>
      <lds-modal
        ?open=${args.open}
        ?closeOnBackdropClick=${args.closeOnBackdropClick}
        ?closeOnEsc=${args.closeOnEsc}
      >
        <h2 slot="header" style="margin: 0;">Playground Modal</h2>
        <div>
          <p style="margin: 0;">
            Customize the modal properties using the controls panel below.
          </p>
        </div>
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button
            @click=${handleClose}
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;"
          >
            Close
          </button>
        </div>
      </lds-modal>
    `;
  },
};
