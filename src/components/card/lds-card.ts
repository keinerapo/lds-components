import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseElement } from '../../foundation/base-element';
import { validateEnum } from '../../foundation/validators';

type CardElevation = 'none' | 'sm' | 'md';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

const CARD_ELEVATIONS: readonly CardElevation[] = ['none', 'sm', 'md'];
const CARD_PADDINGS: readonly CardPadding[] = ['none', 'sm', 'md', 'lg'];

/**
 * A versatile card container component with customizable padding and elevation.
 *
 * @element lds-card
 *
 * @slot - Default slot for card content
 * @slot header - Slot for card header content
 * @slot footer - Slot for card footer content
 *
 * @example
 * ```html
 * <lds-card elevation="md" padding="lg">
 *   <div slot="header"><h3>Card Title</h3></div>
 *   <p>Card content goes here</p>
 *   <div slot="footer"><button>Action</button></div>
 * </lds-card>
 * <lds-card interactive>Clickable card</lds-card>
 * ```
 */
@customElement('lds-card')
export class LdsCard extends BaseElement {
  private _elevation: CardElevation = 'sm';
  private _padding: CardPadding = 'md';

  /**
   * The shadow elevation level of the card
   * @type {'none' | 'sm' | 'md'}
   * @default 'sm'
   */
  @property({ type: String })
  get elevation(): CardElevation {
    return this._elevation;
  }
  set elevation(value: CardElevation) {
    const oldValue = this._elevation;
    this._elevation = validateEnum(value, CARD_ELEVATIONS, 'sm', 'elevation');
    this.requestUpdate('elevation', oldValue);
  }

  /**
   * The internal padding of the card
   * @type {'none' | 'sm' | 'md' | 'lg'}
   * @default 'md'
   */
  @property({ type: String })
  get padding(): CardPadding {
    return this._padding;
  }
  set padding(value: CardPadding) {
    const oldValue = this._padding;
    this._padding = validateEnum(value, CARD_PADDINGS, 'md', 'padding');
    this.requestUpdate('padding', oldValue);
  }

  /**
   * Whether the card should have interactive styles (hover, focus, cursor)
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean }) interactive = false;

  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        display: block;
      }

      .card {
        border-radius: var(--lds-radius-md);
        background-color: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(148, 163, 184, 0.2);
        color: var(--lds-color-primary-contrast);
        transition:
          box-shadow 0.15s ease,
          transform 0.1s ease,
          border-color 0.15s ease,
          background-color 0.15s ease;
      }

      .padding-none {
        padding: 0;
      }

      .padding-sm {
        padding: var(--lds-spacing-2);
      }

      .padding-md {
        padding: var(--lds-spacing-4);
      }

      .padding-lg {
        padding: var(--lds-spacing-6);
      }

      .elevation-none {
        box-shadow: none;
      }

      .elevation-sm {
        box-shadow: var(--lds-shadow-sm);
      }

      .elevation-md {
        box-shadow: var(--lds-shadow-md);
      }

      .interactive {
        cursor: pointer;
      }

      .interactive:hover {
        border-color: var(--lds-color-primary);
      }

      .interactive:active {
        transform: translateY(1px);
      }

      .interactive:focus-visible {
        outline: 2px solid var(--lds-color-primary);
        outline-offset: 2px;
      }

      ::slotted([slot='header']) {
        margin-bottom: var(--lds-spacing-2);
      }

      ::slotted([slot='footer']) {
        margin-top: var(--lds-spacing-2);
      }
    `,
  ];

  render() {
    const classes = classMap({
      card: true,
      [`padding-${this.padding}`]: true,
      [`elevation-${this.elevation}`]: true,
      interactive: this.interactive,
    });

    const tabindex = this.interactive ? '0' : undefined;

    return html`
      <div class=${classes} tabindex=${tabindex}>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lds-card': LdsCard;
  }
}
