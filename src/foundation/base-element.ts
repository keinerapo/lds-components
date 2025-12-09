import { LitElement, css } from 'lit';

export abstract class BaseElement extends LitElement {
  static styles = [
    css`
      :host {
        box-sizing: border-box;
        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          sans-serif;
      }

      :host([hidden]) {
        display: none !important;
      }
    `,
  ];
}
