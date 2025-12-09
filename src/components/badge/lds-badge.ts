import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../../foundation/base-element';
import { validateEnum } from '../../foundation/validators';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

const BADGE_VARIANTS: readonly BadgeVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
];

/**
 * A badge component for displaying status, labels, or counts.
 *
 * @element lds-badge
 *
 * @slot - Default slot for badge content
 *
 * @example
 * ```html
 * <lds-badge variant="primary">New</lds-badge>
 * <lds-badge variant="success">Active</lds-badge>
 * <lds-badge variant="error">Error</lds-badge>
 * ```
 */
@customElement('lds-badge')
export class LdsBadge extends BaseElement {
  private _variant: BadgeVariant = 'primary';

  /**
   * The visual style variant of the badge
   * @type {'primary' | 'secondary' | 'success' | 'warning' | 'error'}
   * @default 'primary'
   */
  @property({ type: String })
  get variant(): BadgeVariant {
    return this._variant;
  }
  set variant(value: BadgeVariant) {
    const oldValue = this._variant;
    this._variant = validateEnum(value, BADGE_VARIANTS, 'primary', 'variant');
    this.requestUpdate('variant', oldValue);
  }

  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 var(--lds-spacing-2);
        min-height: 1.5rem;
        border-radius: var(--lds-radius-lg);
        font-size: var(--lds-font-size-sm);
        font-weight: 500;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .primary {
        background-color: var(--lds-color-primary);
        color: var(--lds-color-primary-contrast);
      }

      .secondary {
        background-color: var(--lds-color-secondary);
        color: #ffffff;
      }

      .success {
        background-color: var(--lds-color-success);
        color: #022c22;
      }

      .warning {
        background-color: var(--lds-color-warning);
        color: #041016;
      }

      .error {
        background-color: var(--lds-color-error);
        color: #ffffff;
      }
    `,
  ];

  render() {
    const classes = `badge ${this.variant}`;
    return html`<span class=${classes}><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lds-badge': LdsBadge;
  }
}
