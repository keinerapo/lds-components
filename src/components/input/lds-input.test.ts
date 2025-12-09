import { vi } from 'vitest';
import './lds-input';

describe('LdsInput', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('links label and input via for/id', async () => {
    const el = document.createElement('lds-input') as any;
    el.label = 'Email';
    el.name = 'email';
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const label = shadow.querySelector('label') as HTMLLabelElement;
    const input = shadow.querySelector('input') as HTMLInputElement;

    expect(label.getAttribute('for')).toBe(input.id);
    expect(input.name).toBe('email');
  });

  it('marks input as invalid when error is set', async () => {
    const el = document.createElement('lds-input') as any;
    el.error = 'Requerido';
    document.body.appendChild(el);

    await el.updateComplete;

    const input = (el.shadowRoot as ShadowRoot).querySelector('input') as HTMLInputElement;

    expect(input.getAttribute('aria-invalid')).toBe('true');

    const errorText = (el.shadowRoot as ShadowRoot).querySelector('.error-text') as HTMLElement;
    expect(errorText).not.toBeNull();
    expect(errorText.textContent).toContain('Requerido');
  });

  it('updates value and emits lds-input-input event on input', async () => {
    const el = document.createElement('lds-input') as any;
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const input = shadow.querySelector('input') as HTMLInputElement;

    const handler = vi.fn();
    el.addEventListener('lds-input-input', handler);

    input.value = 'hello';
    input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

    await el.updateComplete;

    expect(el.value).toBe('hello');
    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls[0][0].detail.value).toBe('hello');
  });
});
