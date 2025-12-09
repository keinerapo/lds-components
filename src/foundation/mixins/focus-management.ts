import { LitElement } from 'lit';

/**
 * Type for constructor that can be mixed in
 */
type Constructor<T = object> = abstract new (...args: any[]) => T;

/**
 * Interface for components that implement focus management
 */
export interface FocusManageable {
  getFocusableElements(): HTMLElement[];
  trapFocus(event: KeyboardEvent): void;
  setInitialFocus(selector?: string): void;
  saveFocus(): void;
  restoreFocus(): void;
}

/**
 * Mixin that provides focus management capabilities for components.
 * Useful for dialogs, modals, popovers, and other components that need to trap focus.
 *
 * @example
 * ```ts
 * class MyModal extends FocusManagementMixin(BaseElement) {
 *   connectedCallback() {
 *     super.connectedCallback();
 *     this.addEventListener('keydown', this.trapFocus);
 *   }
 * }
 * ```
 */
export function FocusManagementMixin<T extends Constructor<LitElement>>(
  Base: T,
): T & Constructor<FocusManageable> {
  abstract class FocusManagementMixinClass
    extends Base
    implements FocusManageable
  {
    private _previousActiveElement: Element | null = null;

    /**
     * Get all focusable elements within the shadow root
     * @returns Array of focusable HTMLElements
     */
    getFocusableElements(): HTMLElement[] {
      if (!this.shadowRoot) return [];

      const selectors = [
        'button:not([disabled])',
        'a[href]',
        'input:not([disabled])',
        'textarea:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',');

      return Array.from(
        this.shadowRoot.querySelectorAll<HTMLElement>(selectors),
      ).filter(
        (el) =>
          !el.hasAttribute('disabled') &&
          el.getAttribute('aria-hidden') !== 'true',
      );
    }

    /**
     * Trap focus within the component by cycling through focusable elements
     * @param event - The keyboard event (Tab key)
     */
    trapFocus(event: KeyboardEvent): void {
      if (event.key !== 'Tab') return;

      const focusable = this.getFocusableElements();
      if (!focusable.length) return;

      const currentIndex = focusable.indexOf(
        document.activeElement as HTMLElement,
      );
      let nextIndex = 0;

      if (event.shiftKey) {
        // Shift + Tab: move backwards
        nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
      } else {
        // Tab: move forwards
        nextIndex =
          currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      }

      focusable[nextIndex].focus();
      event.preventDefault();
    }

    /**
     * Set focus to the first focusable element or a specific element
     * @param selector - Optional selector to focus a specific element
     */
    setInitialFocus(selector?: string): void {
      const focusable = this.getFocusableElements();

      if (selector && this.shadowRoot) {
        const target = this.shadowRoot.querySelector<HTMLElement>(selector);
        if (target) {
          target.focus();
          return;
        }
      }

      if (focusable.length > 0) {
        focusable[0].focus();
      }
    }

    /**
     * Save the currently focused element to restore later
     */
    saveFocus(): void {
      this._previousActiveElement =
        (this.getRootNode() as Document | ShadowRoot).activeElement ?? null;
    }

    /**
     * Restore focus to the previously saved element
     */
    restoreFocus(): void {
      if (
        this._previousActiveElement &&
        this._previousActiveElement instanceof HTMLElement
      ) {
        this._previousActiveElement.focus();
      }
      this._previousActiveElement = null;
    }
  }

  return FocusManagementMixinClass as T & Constructor<FocusManageable>;
}
