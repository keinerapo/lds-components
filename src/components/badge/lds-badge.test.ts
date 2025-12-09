import './lds-badge';
import type { LdsBadge } from './lds-badge';
import { vi } from 'vitest';

describe('LdsBadge', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders with default primary variant', async () => {
    const el = document.createElement('lds-badge') as LdsBadge;
    el.textContent = 'Primary';
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const span = shadow.querySelector('span') as HTMLSpanElement;

    expect(span).not.toBeNull();
    expect(span.classList.contains('badge')).toBe(true);
    expect(span.classList.contains('primary')).toBe(true);
  });

  it('applies variant class', async () => {
    const el = document.createElement('lds-badge') as LdsBadge;
    el.variant = 'success';
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const span = shadow.querySelector('span') as HTMLSpanElement;

    expect(span).not.toBeNull();
    expect(span.classList.contains('badge')).toBe(true);
    expect(span.classList.contains('success')).toBe(true);
  });

  it('validates variant prop and uses default on invalid value', async () => {
    const el = document.createElement('lds-badge') as LdsBadge;
    document.body.appendChild(el);
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    el.variant = 'invalid' as any;
    await el.updateComplete;

    expect(el.variant).toBe('primary');
    expect(consoleWarn).toHaveBeenCalled();

    consoleWarn.mockRestore();
    document.body.removeChild(el);
  });

  it('renders all variant types correctly', async () => {
    const variants: Array<'primary' | 'secondary' | 'success' | 'warning' | 'error'> = [
      'primary',
      'secondary',
      'success',
      'warning',
      'error',
    ];

    for (const variant of variants) {
      const el = document.createElement('lds-badge') as LdsBadge;
      el.variant = variant;
      document.body.appendChild(el);
      await el.updateComplete;

      const span = el.shadowRoot!.querySelector('span');
      expect(span!.classList.contains(variant)).toBe(true);

      document.body.innerHTML = '';
    }
  });
});
