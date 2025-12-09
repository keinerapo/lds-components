import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseElement } from '../../foundation/base-element';
import { validateEnum } from '../../foundation/validators';

type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';

const INPUT_TYPES: readonly InputType[] = [
  'text',
  'email',
  'password',
  'number',
  'search',
  'tel',
  'url',
];

let inputIdCounter = 0;

/**
 * A customizable input component with label, error, and helper text support.
 *
 * @element lds-input
 *
 * @fires {CustomEvent<{value: string}>} lds-input-input - Fired when the input value changes
 * @fires {CustomEvent<{value: string}>} lds-input-change - Fired when the input loses focus
 *
 * @example
 * ```html
 * <lds-input label="Email" type="email" placeholder="Enter your email"></lds-input>
 * <lds-input label="Password" type="password" error="Password is required"></lds-input>
 * <lds-input label="Username" helper-text="Choose a unique username"></lds-input>
 * ```
 */
@customElement('lds-input')
export class LdsInput extends BaseElement {
  /**
   * The label text for the input
   * @type {string}
   * @default ''
   */
  @property({ type: String }) label = '';

  /**
   * The name attribute for the input
   * @type {string}
   * @default ''
   */
  @property({ type: String }) name = '';

  private _type: InputType = 'text';

  /**
   * The type of input
   * @type {'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'}
   * @default 'text'
   */
  @property({ type: String })
  get type(): InputType {
    return this._type;
  }
  set type(value: InputType) {
    this._type = validateEnum(value, INPUT_TYPES, 'text', 'type');
    this.requestUpdate('type');
  }

  /**
   * The current value of the input
   * @type {string}
   * @default ''
   */
  @property({ type: String }) value = '';

  /**
   * Placeholder text for the input
   * @type {string}
   * @default ''
   */
  @property({ type: String }) placeholder = '';

  /**
   * Whether the input is disabled
   * @type {boolean}
   * @default false
   * @reflects
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Error message to display
   * @type {string | undefined}
   */
  @property({ type: String }) error?: string;

  /**
   * Helper text to display below the input
   * @type {string}
   * @default ''
   */
  @property({ type: String, attribute: 'helper-text' }) helperText = '';

  private readonly inputId = `lds-input-${++inputIdCounter}`;

  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        display: block;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: var(--lds-spacing-1);
      }

      label {
        font-size: var(--lds-font-size-sm);
        color: var(--lds-color-primary-contrast);
        opacity: 0.85;
      }

      .control {
        position: relative;
      }

      input {
        width: 100%;
        border-radius: var(--lds-radius-md);
        padding: var(--lds-spacing-2) var(--lds-spacing-3);
        font-size: var(--lds-font-size-md);
        border: 1px solid rgba(148, 163, 184, 0.4);
        background-color: rgba(15, 23, 42, 0.9);
        color: var(--lds-color-primary-contrast);
        outline: none;
        transition:
          border-color 0.15s ease,
          box-shadow 0.15s ease;
      }

      input::placeholder {
        opacity: 0.6;
      }

      input:focus-visible {
        border-color: var(--lds-color-primary);
        box-shadow: 0 0 0 1px var(--lds-color-primary);
      }

      input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      input.error {
        border-color: var(--lds-color-error);
      }

      .helper,
      .error-text {
        font-size: var(--lds-font-size-sm);
      }

      .helper {
        color: rgba(148, 163, 184, 0.9);
      }

      .error-text {
        color: var(--lds-color-error);
      }
    `,
  ];

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('lds-input-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('lds-input-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    const hasError = !!this.error;
    const helperId = this.helperText ? `${this.inputId}-helper` : undefined;
    const errorId = hasError ? `${this.inputId}-error` : undefined;

    const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

    return html`
      <div class="field">
        ${this.label ? html`<label for=${this.inputId}>${this.label}</label>` : nothing}

        <div class="control">
          <input
            id=${this.inputId}
            class=${hasError ? 'error' : ''}
            name=${ifDefined(this.name || undefined)}
            type=${this.type}
            .value=${this.value ?? ''}
            placeholder=${this.placeholder || ''}
            ?disabled=${this.disabled}
            aria-invalid=${hasError ? 'true' : 'false'}
            aria-describedby=${ifDefined(describedBy)}
            @input=${this.handleInput}
            @change=${this.handleChange}
          />
        </div>

        ${this.helperText ? html`<p id=${helperId} class="helper">${this.helperText}</p>` : nothing}
        ${hasError ? html`<p id=${errorId} class="error-text">${this.error}</p>` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lds-input': LdsInput;
  }
}
