export function defineLdsElement<T extends CustomElementConstructor>(
  tagName: string,
  elementClass: T,
): void {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass);
  }
}
