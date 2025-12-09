import { css, html } from 'lit';
import { BaseElement } from '../../foundation/base-element';
import { customElement, property } from 'lit/decorators.js';
import { validateEnum } from '../../foundation/validators';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

const BUTTON_VARIANTS: readonly ButtonVariant[] = ['primary', 'secondary', 'ghost', 'danger'];
const BUTTON_SIZES: readonly ButtonSize[] = ['sm', 'md', 'lg'];

/**
 * A customizable button component with multiple variants and sizes.
 *
 * @element lds-button
 *
 * @fires {CustomEvent} click - Native click event from the button element
 *
 * @slot - Default slot for button content
 *
 * @example
 * ```html
 * <lds-button variant="primary" size="md">Click me</lds-button>
 * <lds-button variant="danger" disabled>Disabled</lds-button>
 * <lds-button loading>Loading...</lds-button>
 * ```
 *
 * @csspart button - The native button element
 */
@customElement('lds-button')
export class LdsButton extends BaseElement {
  private _variant: ButtonVariant = 'primary';
  private _size: ButtonSize = 'md';

  /**
   * The visual style variant of the button
   * @type {'primary' | 'secondary' | 'ghost' | 'danger'}
   * @default 'primary'
   */
  @property({ type: String })
  get variant(): ButtonVariant {
    return this._variant;
  }
  set variant(value: ButtonVariant) {
    const oldValue = this._variant;
    this._variant = validateEnum(value, BUTTON_VARIANTS, 'primary', 'variant');
    this.requestUpdate('variant', oldValue);
  }

  /**
   * The size of the button
   * @type {'sm' | 'md' | 'lg'}
   * @default 'md'
   */
  @property({ type: String })
  get size(): ButtonSize {
    return this._size;
  }
  set size(value: ButtonSize) {
    const oldValue = this._size;
    this._size = validateEnum(value, BUTTON_SIZES, 'md', 'size');
    this.requestUpdate('size', oldValue);
  }

  /**
   * Whether the button is disabled
   * @type {boolean}
   * @default false
   * @reflects
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Whether the button is in loading state
   * @type {boolean}
   * @default false
   */
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
        transition:
          background-color 0.15s ease,
          box-shadow 0.15s ease,
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

declare global {
  interface HTMLElementTagNameMap {
    'lds-button': LdsButton;
  }
}
