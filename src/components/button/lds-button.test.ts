import './lds-button';
import type { LdsButton } from './lds-button';

describe('LdsButton', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined as custom element', () => {
    const el = document.createElement('lds-button');
    expect(el).toBeInstanceOf(HTMLElement);
  });

  it('renders with default variant and size', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    document.body.appendChild(el);
    await el.updateComplete;

    expect(el.variant).toBe('primary');
    expect(el.size).toBe('md');
    expect(el.disabled).toBe(false);
    expect(el.loading).toBe(false);
  });

  it('applies correct classes for variant and size', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    el.variant = 'secondary';
    el.size = 'lg';
    document.body.appendChild(el);
    await el.updateComplete;

    const button = el.shadowRoot!.querySelector('button');
    expect(button).not.toBeNull();
    expect(button!.className).toContain('secondary');
    expect(button!.className).toContain('lg');
  });

  it('disables button when disabled prop is true', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    el.disabled = true;
    document.body.appendChild(el);
    await el.updateComplete;

    const button = el.shadowRoot!.querySelector('button');
    expect(button!.disabled).toBe(true);
  });

  it('disables button when loading prop is true', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    el.loading = true;
    document.body.appendChild(el);
    await el.updateComplete;

    const button = el.shadowRoot!.querySelector('button');
    expect(button!.disabled).toBe(true);
    expect(button!.getAttribute('aria-busy')).toBe('true');
  });

  it('validates variant prop and uses default on invalid value', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    document.body.appendChild(el);
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    el.variant = 'invalid' as any;
    await el.updateComplete;

    expect(el.variant).toBe('primary');
    expect(consoleWarn).toHaveBeenCalled();

    consoleWarn.mockRestore();
    document.body.removeChild(el);
  });

  it('validates size prop and uses default on invalid value', async () => {
    const el = document.createElement('lds-button') as LdsButton;
    document.body.appendChild(el);
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    el.size = 'xl' as any;
    await el.updateComplete;

    expect(el.size).toBe('md');
    expect(consoleWarn).toHaveBeenCalled();

    consoleWarn.mockRestore();
    document.body.removeChild(el);
  });
});
