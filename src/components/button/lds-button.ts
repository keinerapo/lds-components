import { css, html } from "lit";
import { BaseElement } from "../../foundation/base-element";
import { customElement, property } from "lit/decorators.js";

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

@customElement('lds-button')
export class LdsButton extends BaseElement {
    @property({ type: String }) variant: ButtonVariant = 'primary';
    @property({ type: String }) size: ButtonSize = 'md';
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;
    @property({ type: Boolean }) loading: boolean = false;

    static override styles = [
    ...BaseElement.styles,
    css`
      button {
        border: none;
        border-radius: var(--lds-radius-md);
        padding: 0.5rem 1rem;
        font-size: var(--lds-font-size-md);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: background-color 0.15s ease, box-shadow 0.15s ease,
          transform 0.05s ease;
      }

      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      button.primary {
        background-color: var(--lds-color-primary);
        color: var(--lds-color-primary-contrast);
      }

      button.secondary {
        background-color: var(--lds-color-secondary);
        color: #ffffff;
      }

      button.ghost {
        background-color: transparent;
        color: var(--lds-color-primary);
        border: 1px solid var(--lds-color-primary);
      }

      button.danger {
        background-color: var(--lds-color-error);
        color: #ffffff;
      }

      button.sm {
        padding: 0.25rem 0.75rem;
        font-size: var(--lds-font-size-sm);
      }

      button.lg {
        padding: 0.75rem 1.25rem;
        font-size: var(--lds-font-size-lg);
      }

      button:focus-visible {
        outline: 2px solid var(--lds-color-primary);
        outline-offset: 2px;
      }
    `,
  ];

  render() {
    const classes = [this.variant, this.size].join(' ');
    return html`
      <button
        class=${classes}
        ?disabled=${this.disabled || this.loading}
        aria-busy=${this.loading ? 'true' : 'false'}
      >
        ${this.loading ? html`<span>…</span>` : null}
        <slot></slot>
      </button>
    `;
  }
}