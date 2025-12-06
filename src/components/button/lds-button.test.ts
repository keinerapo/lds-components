import './lds-button';

describe('LdsButton', () => {
  it('should be defined as custom element', () => {
    const el = document.createElement('lds-button');
    expect(el).toBeInstanceOf(HTMLElement);
  });
});