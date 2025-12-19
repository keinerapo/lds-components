import { defineLdsElement } from './define';

export function createDefiner<T extends CustomElementConstructor>(
  tagName: string,
  loader: () => Promise<{ default: T } | { [key: string]: T }>,
  exportName?: string,
) {
  return async () => {
    const mod = await loader();

    const elementClass =
      'default' in mod
        ? (mod as { default: T }).default
        : (mod as Record<string, T>)[exportName ?? ''];

    if (!elementClass) {
      throw new Error(`LDS: Could not load element class for ${tagName}`);
    }

    defineLdsElement(tagName, elementClass);
  };
}
