import { css, html, nothing, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { BaseElement } from '../../foundation/base-element';
import { FocusManagementMixin } from '../../foundation/mixins/focus-management';

type CloseReason = 'backdrop' | 'esc' | 'programmatic';

/**
 * A modal dialog component with focus management and keyboard navigation.
 *
 * @element lds-modal
 *
 * @fires {CustomEvent<{reason: 'backdrop' | 'esc' | 'programmatic'}>} lds-modal-close - Fired when the modal is closed
 *
 * @slot - Default slot for modal body content
 * @slot footer - Slot for modal footer content (typically buttons)
 *
 * @example
 * ```html
 * <lds-modal open title="Confirm Action">
 *   <p>Are you sure you want to proceed?</p>
 *   <div slot="footer">
 *     <button>Cancel</button>
 *     <button>Confirm</button>
 *   </div>
 * </lds-modal>
 * ```
 */
@customElement('lds-modal')
export class LdsModal extends FocusManagementMixin(BaseElement) {
  /**
   * Whether the modal is open/visible
   * @type {boolean}
   * @default false
   * @reflects
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The title of the modal
   * @type {string}
   * @default ''
   */
  @property({ type: String }) title = '';

  /**
   * Whether the modal can be closed with the Escape key
   * @type {boolean}
   * @default true
   */
  @property({ type: Boolean }) closeOnEsc = true;

  /**
   * Whether the modal can be closed by clicking the backdrop
   * @type {boolean}
   * @default true
   */
  @property({ type: Boolean }) closeOnBackdropClick = true;

  @query('.lds-modal-panel') private panelElement!: HTMLElement;

  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        position: fixed;
        inset: 0;
        display: none;
        z-index: 50;
      }

      :host([open]) {
        display: block;
      }

      .lds-modal-backdrop {
        position: fixed;
        inset: 0;
        background:
          radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 55%),
          radial-gradient(circle at bottom, rgba(248, 113, 113, 0.18), transparent 55%),
          rgba(15, 23, 42, 0.92);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lds-modal-panel {
        min-width: min(480px, 100% - 32px);
        max-width: 640px;
        max-height: calc(100vh - 80px);
        border-radius: var(--lds-radius-lg);
        background-color: rgba(15, 23, 42, 0.98);
        border: 1px solid rgba(148, 163, 184, 0.35);
        box-shadow: var(--lds-shadow-md);
        padding: var(--lds-spacing-4);
        display: flex;
        flex-direction: column;
        gap: var(--lds-spacing-3);
      }

      .lds-modal-title {
        margin: 0;
        font-size: var(--lds-font-size-lg);
      }

      .lds-modal-body {
        flex: 1;
        overflow-y: auto;
        font-size: var(--lds-font-size-md);
      }

      .lds-modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: var(--lds-spacing-2);
        margin-top: var(--lds-spacing-2);
      }
    `,
  ];

  protected updated(changed: PropertyValues<this>): void {
    if (changed.has('open')) {
      if (this.open) {
        this.saveFocus();

        this.updateComplete.then(() => {
          this.setInitialFocus('.lds-modal-panel');
        });
      } else {
        this.restoreFocus();
      }
    }
  }

  private handleBackdropClick = (event: MouseEvent): void => {
    if (event.target === event.currentTarget && this.closeOnBackdropClick) {
      this.close('backdrop');
    }
  };

  private handleKeydown = (event: KeyboardEvent): void => {
    if (!this.open) return;

    if (event.key === 'Escape' && this.closeOnEsc) {
      event.stopPropagation();
      this.close('esc');
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  };

  private close(reason: CloseReason): void {
    if (!this.open) return;
    this.open = false;

    this.dispatchEvent(
      new CustomEvent('lds-modal-close', {
        detail: { reason },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    if (!this.open) {
      return nothing;
    }

    const titleId = this.title ? 'lds-modal-title' : undefined;

    return html`
      <div class="lds-modal-backdrop" @click=${this.handleBackdropClick}>
        <div
          class="lds-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby=${titleId ?? nothing}
          tabindex="-1"
          @keydown=${this.handleKeydown}
        >
          ${this.title
            ? html` <h2 id=${titleId} class="lds-modal-title">${this.title}</h2> `
            : nothing}

          <div class="lds-modal-body">
            <slot></slot>
          </div>

          <div class="lds-modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lds-modal': LdsModal;
  }
}
