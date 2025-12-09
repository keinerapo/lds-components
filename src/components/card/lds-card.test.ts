import './lds-card';
import type { LdsCard } from './lds-card';
import { vi } from 'vitest';

describe('LdsCard', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders with default padding and elevation', async () => {
    const el = document.createElement('lds-card') as LdsCard;
    document.body.appendChild(el);

    await el.updateComplete;

    const shadow = el.shadowRoot as ShadowRoot;
    const card = shadow.querySelector('.card') as HTMLElement;

    expect(card).not.toBeNull();
    expect(card.classList.contains('padding-md')).toBe(true);
    expect(card.classList.contains('elevation-sm')).toBe(true);
  });

  it('becomes focusable when interactive', async () => {
    const el = document.createElement('lds-card') as LdsCard;
    el.interactive = true;
    document.body.appendChild(el);

    await el.updateComplete;

    const card = (el.shadowRoot as ShadowRoot).querySelector('.card') as HTMLElement;

    expect(card).not.toBeNull();
    expect(card.getAttribute('tabindex')).toBe('0');
  });

  it('validates elevation prop', async () => {
    const el = document.createElement('lds-card') as LdsCard;
    document.body.appendChild(el);
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    el.elevation = 'xl' as any;
    await el.updateComplete;

    expect(el.elevation).toBe('sm');
    expect(consoleWarn).toHaveBeenCalled();

    consoleWarn.mockRestore();
    document.body.removeChild(el);
  });

  it('validates padding prop', async () => {
    const el = document.createElement('lds-card') as LdsCard;
    document.body.appendChild(el);
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    el.padding = 'xl' as any;
    await el.updateComplete;

    expect(el.padding).toBe('md');
    expect(consoleWarn).toHaveBeenCalled();

    consoleWarn.mockRestore();
    document.body.removeChild(el);
  });
});
