import { vi } from 'vitest';
import './lds-modal';
import type { LdsModal } from './lds-modal';

describe('LdsModal', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('does not render backdrop when closed', async () => {
    const el = document.createElement('lds-modal') as LdsModal;
    document.body.appendChild(el);

    // Wait for the component to render
    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    expect(shadow.querySelector('.lds-modal-backdrop')).toBeNull();
  });

  it('renders backdrop and panel when open', async () => {
    const el = document.createElement('lds-modal') as LdsModal;
    el.open = true;
    el.title = 'Test modal';
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const backdrop = shadow.querySelector('.lds-modal-backdrop') as HTMLElement;
    const panel = shadow.querySelector('.lds-modal-panel') as HTMLElement;

    expect(backdrop).not.toBeNull();
    expect(panel).not.toBeNull();
    expect(panel.getAttribute('role')).toBe('dialog');
  });

  it('closes on backdrop click when enabled', async () => {
    const el = document.createElement('lds-modal') as LdsModal;
    el.open = true;
    document.body.appendChild(el);

    await el.updateComplete;

    const closeHandler = vi.fn();
    el.addEventListener('lds-modal-close', closeHandler);

    const shadow = el.shadowRoot as ShadowRoot;
    const backdrop = shadow.querySelector('.lds-modal-backdrop') as HTMLElement;

    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    await el.updateComplete;

    expect(el.open).toBe(false);
    expect(closeHandler).toHaveBeenCalled();
    expect(closeHandler.mock.calls[0][0].detail.reason).toBe('backdrop');
  });

  it('closes on Escape key when enabled', async () => {
    const el = document.createElement('lds-modal') as LdsModal;
    el.open = true;
    document.body.appendChild(el);

    await el.updateComplete;

    const closeHandler = vi.fn();
    el.addEventListener('lds-modal-close', closeHandler);

    const shadow = el.shadowRoot as ShadowRoot;
    const panel = shadow.querySelector('.lds-modal-panel') as HTMLElement;

    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      composed: true,
    });

    panel.dispatchEvent(event);

    await el.updateComplete;

    expect(el.open).toBe(false);
    expect(closeHandler).toHaveBeenCalled();
    expect(closeHandler.mock.calls[0][0].detail.reason).toBe('esc');
  });
});
